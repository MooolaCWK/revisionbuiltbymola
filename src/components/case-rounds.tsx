import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  CLINIC,
  CLINIC_FC,
  CLINIC_WAGE,
  EXAM_DATE,
  LECTURES,
  QUESTIONS,
  type LectureId,
  type Question,
} from "@/lib/questions";
import { BRIEFS } from "@/lib/briefs";
import { EQUATION_NOTE, EQUATIONS } from "@/lib/equations";
import { SLIDES } from "@/lib/slides";

type Attempt = { id: string; picked: number; correct: boolean; at: number };
type Paper = { at: number; title: string; correct: number; total: number };
type Progress = { attempts: Attempt[]; papers: Paper[] };
type Mode = "tutor" | "exam";

type Session = {
  title: string;
  mode: Mode;
  questions: Question[];
  index: number;
  picks: (number | null)[];
  revealed: boolean[];
  flagged: boolean[];
  submitted: boolean;
  startedAt: number;
  seconds: number | null;
};

const ORDER: LectureId[] = ["L1", "L2", "L3", "L4", "L5", "L6"];
const KEY = "caserounds.v1";
const EMPTY: Progress = { attempts: [], papers: [] };

const LETTERS = ["A", "B", "C", "D"];

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw) as Progress;
    if (!parsed || !Array.isArray(parsed.attempts) || !Array.isArray(parsed.papers)) return EMPTY;
    return parsed;
  } catch {
    return EMPTY;
  }
}

function latestMap(attempts: Attempt[]) {
  const map = new Map<string, Attempt>();
  for (const attempt of attempts) {
    const prev = map.get(attempt.id);
    if (!prev || attempt.at >= prev.at) map.set(attempt.id, attempt);
  }
  return map;
}

function shuffle<T>(list: T[]): T[] {
  const next = [...list];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const hold = next[i];
    next[i] = next[j];
    next[j] = hold;
  }
  return next;
}

function buildPaper(): Question[] {
  const exam = QUESTIONS.filter((item) => LECTURES[item.lecture].exam);
  const order: LectureId[] = ["L1", "L2", "L3", "L4", "L5"];
  const buckets = order.map((id) => shuffle(exam.filter((item) => item.lecture === id)));
  const picked: Question[] = [];
  const quota = 8;
  for (const bucket of buckets) picked.push(...bucket.slice(0, quota));
  if (picked.length < 40) {
    const used = new Set(picked.map((item) => item.id));
    const rest = shuffle(exam.filter((item) => !used.has(item.id)));
    picked.push(...rest.slice(0, 40 - picked.length));
  }
  return shuffle(picked).slice(0, 40);
}

function formatClock(total: number) {
  const safe = Math.max(0, total);
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function formatRemain(ms: number) {
  if (ms <= 0) return "The sitting window has opened";
  const days = Math.floor(ms / 86_400_000);
  const hours = Math.floor((ms % 86_400_000) / 3_600_000);
  if (days > 1) return `${days} days, ${hours} hours`;
  if (days === 1) return `1 day, ${hours} hours`;
  const minutes = Math.floor((ms % 3_600_000) / 60_000);
  return `${hours} hours, ${minutes} minutes`;
}

export function CaseRounds() {
  const [progress, setProgress] = useState<Progress>(EMPTY);
  const [ready, setReady] = useState(false);
  const [now, setNow] = useState<number | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [bench, setBench] = useState(false);
  const [reading, setReading] = useState<LectureId | null>(null);
  const [tick, setTick] = useState(0);
  const closed = useRef<number | null>(null);

  useEffect(() => {
    setProgress(loadProgress());
    setReady(true);
    const stamp = () => setNow(Date.now());
    stamp();
    const id = setInterval(stamp, 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(progress));
  }, [progress, ready]);

  useEffect(() => {
    if (!session || session.submitted || session.seconds == null) return;
    const id = setInterval(() => setTick((value) => value + 1), 1000);
    return () => clearInterval(id);
  }, [session]);

  const elapsed = session ? Math.floor((Date.now() - session.startedAt) / 1000) : 0;
  const remaining = session?.seconds != null ? session.seconds - elapsed : null;
  void tick;

  useEffect(() => {
    if (!session || session.submitted || remaining == null || remaining > 0) return;
    submit(session);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remaining, session?.submitted]);

  function start(title: string, mode: Mode, questions: Question[], seconds: number | null) {
    closed.current = null;
    setBench(false);
    setReading(null);
    setSession({
      title,
      mode,
      questions,
      index: 0,
      picks: questions.map(() => null),
      revealed: questions.map(() => false),
      flagged: questions.map(() => false),
      submitted: false,
      startedAt: Date.now(),
      seconds,
    });
  }

  function saveAttempts(items: { id: string; picked: number }[]) {
    const at = Date.now();
    const attempts: Attempt[] = items.map((item) => {
      const question = QUESTIONS.find((entry) => entry.id === item.id);
      return {
        id: item.id,
        picked: item.picked,
        correct: question ? question.answer === item.picked : false,
        at,
      };
    });
    setProgress((prev) => ({
      ...prev,
      attempts: [...prev.attempts, ...attempts].slice(-800),
    }));
  }

  function savePaper(title: string, correct: number, total: number) {
    setProgress((prev) => ({
      ...prev,
      papers: [...prev.papers, { at: Date.now(), title, correct, total }].slice(-12),
    }));
  }

  function submit(current: Session) {
    if (current.submitted || closed.current === current.startedAt) return;
    closed.current = current.startedAt;
    const answered = current.questions.flatMap((question, index) => {
      const picked = current.picks[index];
      return picked == null ? [] : [{ id: question.id, picked }];
    });
    if (current.mode === "exam" && answered.length) saveAttempts(answered);
    const correct = current.questions.filter((question, index) => current.picks[index] === question.answer).length;
    savePaper(current.title, correct, current.questions.length);
    setSession({
      ...current,
      submitted: true,
      revealed: current.questions.map(() => true),
    });
  }

  function checkCurrent() {
    if (!session || session.mode !== "tutor" || session.submitted) return;
    const picked = session.picks[session.index];
    if (picked == null || session.revealed[session.index]) return;
    const question = session.questions[session.index];
    saveAttempts([{ id: question.id, picked }]);
    const revealed = session.revealed.slice();
    revealed[session.index] = true;
    setSession({ ...session, revealed });
  }

  function choose(option: number) {
    if (!session || session.submitted) return;
    if (session.mode === "tutor" && session.revealed[session.index]) return;
    const picks = session.picks.slice();
    picks[session.index] = option;
    setSession({ ...session, picks });
  }

  function move(nextIndex: number) {
    if (!session) return;
    setSession({ ...session, index: Math.max(0, Math.min(session.questions.length - 1, nextIndex)) });
  }

  useEffect(() => {
    if (!session) return;
    const current = session;
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      if (event.key >= "1" && event.key <= "4") {
        choose(Number(event.key) - 1);
      } else if (event.key === "f") {
        const flagged = current.flagged.slice();
        flagged[current.index] = !flagged[current.index];
        setSession({ ...current, flagged });
      } else if (event.key === "Enter") {
        if (current.mode === "tutor" && !current.revealed[current.index]) checkCurrent();
        else if (current.index < current.questions.length - 1) move(current.index + 1);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // Handlers close over the session captured for this effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  if (bench) return <ClinicBench onBack={() => setBench(false)} />;
  if (reading) {
    return (
      <PreRead
        id={reading}
        onBack={() => setReading(null)}
        onDrill={() =>
          start(
            LECTURES[reading].title,
            "tutor",
            shuffle(QUESTIONS.filter((item) => item.lecture === reading)),
            null,
          )
        }
        onMove={setReading}
      />
    );
  }
  if (session) {
    return (
      <Quiz
        session={session}
        remaining={remaining}
        onChoose={choose}
        onCheck={checkCurrent}
        onMove={move}
        onFlag={() => {
          const flagged = session.flagged.slice();
          flagged[session.index] = !flagged[session.index];
          setSession({ ...session, flagged });
        }}
        onSubmit={() => submit(session)}
        onExit={() => setSession(null)}
      />
    );
  }

  return (
    <Desk
      progress={progress}
      now={now}
      onPaper={() => start("Practice paper · Lectures 1–5", "exam", buildPaper(), 60 * 60)}
      onQuick={() =>
        start(
          "Quick ten",
          "tutor",
          shuffle(QUESTIONS.filter((item) => LECTURES[item.lecture].exam)).slice(0, 10),
          null,
        )
      }
      onMisses={() => {
        const latest = latestMap(progress.attempts);
        const misses = QUESTIONS.filter((item) => latest.get(item.id)?.correct === false);
        if (!misses.length) return;
        start("Mistake pile", "tutor", shuffle(misses), null);
      }}
      onLecture={(id) =>
        start(
          `${LECTURES[id].title}`,
          "tutor",
          shuffle(QUESTIONS.filter((item) => item.lecture === id)),
          null,
        )
      }
      onRead={setReading}
      onBench={() => setBench(true)}
      onClear={() => setProgress(EMPTY)}
    />
  );
}

function Desk({
  progress,
  now,
  onPaper,
  onQuick,
  onMisses,
  onLecture,
  onRead,
  onBench,
  onClear,
}: {
  progress: Progress;
  now: number | null;
  onPaper: () => void;
  onQuick: () => void;
  onMisses: () => void;
  onLecture: (id: LectureId) => void;
  onRead: (id: LectureId) => void;
  onBench: () => void;
  onClear: () => void;
}) {
  const latest = useMemo(() => latestMap(progress.attempts), [progress.attempts]);
  const misses = QUESTIONS.filter((item) => latest.get(item.id)?.correct === false).length;
  const seen = QUESTIONS.filter((item) => latest.has(item.id)).length;
  const correct = QUESTIONS.filter((item) => latest.get(item.id)?.correct).length;
  const remain = now == null ? null : EXAM_DATE.getTime() - now;
  const last = progress.papers[progress.papers.length - 1];
  const [armClear, setArmClear] = useState(false);

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <header className="border-b border-rule bg-deep text-paper">
        <div className="mx-auto flex max-w-5xl items-end justify-between gap-4 px-5 py-6 sm:px-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-teal-soft uppercase">NUR503 · Year 5</p>
            <h1 className="mt-1 font-serif text-4xl font-medium tracking-tight text-sheet sm:text-5xl">
              Health economy
            </h1>
            <Link to="/assessment" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-teal-soft">
              Pre RN revision
            </Link>
          </div>
          <p className="hidden text-right text-sm text-teal-soft sm:block">Practice only. Not the paper.</p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
        <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="border border-rule bg-sheet p-6 shadow-[0_16px_40px_rgba(16,34,32,0.05)] sm:p-8">
            <p className="text-sm font-semibold tracking-wide text-teal uppercase">27 October 2026 · 3:00–5:00 p.m.</p>
            <h2 className="mt-2 font-serif text-3xl leading-tight text-balance sm:text-4xl">
              Forty questions. One hour. Lectures 1 to 5.
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-muted">
              AM tutorial group in A102. PM tutorial group in A649. Each sitting draws a fresh set, in a new order.
              One best answer, then a margin note on why the others fail.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onPaper}
                className="min-h-11 bg-teal px-5 py-3 text-left font-semibold text-sheet"
              >
                Sit a 40-question paper
              </button>
              <button
                type="button"
                onClick={onQuick}
                className="min-h-11 border border-ink bg-sheet px-5 py-3 text-left font-semibold"
              >
                Ten with feedback
              </button>
            </div>
          </div>

          <aside className="flex flex-col justify-between border border-rule bg-deep p-6 text-sheet">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-teal-soft uppercase">Until the test</p>
              <p className="mt-2 font-serif text-4xl leading-none tabular-nums">
                {remain == null ? "—" : formatRemain(remain)}
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-3 text-sm">
              <div>
                <dt className="text-teal-soft">Tried</dt>
                <dd className="font-serif text-2xl tabular-nums">{seen}</dd>
              </div>
              <div>
                <dt className="text-teal-soft">Solid</dt>
                <dd className="font-serif text-2xl tabular-nums">{correct}</dd>
              </div>
              <div>
                <dt className="text-teal-soft">Misses</dt>
                <dd className="font-serif text-2xl tabular-nums">{misses}</dd>
              </div>
            </dl>
            {last ? (
              <p className="mt-4 text-sm text-teal-soft">
                Last sitting: {last.correct} of {last.total}. {last.title}.
              </p>
            ) : (
              <p className="mt-4 text-sm text-teal-soft">Nothing sat yet. The desk keeps score on this device only.</p>
            )}
          </aside>
        </section>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <button type="button" onClick={onBench} className="min-h-11 border border-rule bg-sheet px-4 py-4 text-left">
            <span className="block font-semibold">Clinic bench</span>
            <span className="mt-1 block text-sm text-muted">Click a nurse-hour. Read MP, AP, AC, and MC.</span>
          </button>
          <button
            type="button"
            onClick={onMisses}
            disabled={misses === 0}
            className="min-h-11 border border-rule bg-sheet px-4 py-4 text-left disabled:opacity-50"
          >
            <span className="block font-semibold">Mistake pile</span>
            <span className="mt-1 block text-sm text-muted">
              {misses === 0 ? "Empty. A clean first pass still counts." : `${misses} to read again.`}
            </span>
          </button>
          <button
            type="button"
            onClick={() => {
              if (!armClear) {
                setArmClear(true);
                return;
              }
              onClear();
              setArmClear(false);
            }}
            className="min-h-11 border border-rule bg-sheet px-4 py-4 text-left"
          >
            <span className="block font-semibold">{armClear ? "Tap again to clear" : "Clear this device"}</span>
            <span className="mt-1 block text-sm text-muted">Scores stay in the browser. Nothing is uploaded.</span>
          </button>
        </div>

        <section className="mt-10">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-serif text-2xl">Lecture drawers</h2>
            <p className="text-sm text-muted">Read the brief, then drill. A new order each time.</p>
          </div>
          <ul className="mt-4 divide-y divide-rule border-y border-rule">
            {(Object.keys(LECTURES) as LectureId[]).map((id) => {
              const meta = LECTURES[id];
              const items = QUESTIONS.filter((item) => item.lecture === id);
              const done = items.filter((item) => latest.has(item.id)).length;
              const hit = items.filter((item) => latest.get(item.id)?.correct).length;
              return (
                <li key={id} className="py-4">
                  <div className="flex items-start gap-4">
                    <span className="w-10 font-serif text-2xl text-teal tabular-nums">{meta.n}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold">
                        {meta.title}
                        {!meta.exam && (
                          <span className="ml-2 align-middle text-xs font-medium tracking-wide text-copper uppercase">
                            Extra
                          </span>
                        )}
                      </span>
                      <span className="block text-sm text-muted text-pretty">{meta.line}</span>
                      <span className="mt-3 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => onRead(id)}
                          className="min-h-11 border border-ink bg-sheet px-3 text-sm font-semibold"
                        >
                          Read first
                        </button>
                        <button
                          type="button"
                          onClick={() => onLecture(id)}
                          className="min-h-11 bg-ink px-3 text-sm font-semibold text-sheet"
                        >
                          Drill
                        </button>
                      </span>
                    </span>
                    <span className="shrink-0 text-right text-sm tabular-nums text-muted">
                      {hit}/{items.length}
                      <span className="block text-xs">{done} tried</span>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <details className="mt-8 border border-rule bg-sheet p-5">
          <summary className="cursor-pointer font-semibold">Six questions to ask before you commit</summary>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-pretty text-muted">
            <li>Does it work in ordinary practice, not only in a tidy trial?</li>
            <li>Which resources does it use — time, staff, beds, family, materials?</li>
            <li>What is the single next-best thing those resources will not do?</li>
            <li>Could the same outcome be reached with less waste?</li>
            <li>Who benefits, and who may be left out?</li>
            <li>Are the outcomes worth the resources, from a stated perspective?</li>
          </ol>
        </details>

        <footer className="mt-8 max-w-3xl text-sm text-pretty text-muted">
          These items were written for revision from the NUR503 lectures (Sze Kin Ming; Lecture 6, Jo Jo Kwan). They
          are not official examination questions and they are not a prediction of the paper. Check them against your
          notes. The desk does not replace the teaching, and it is not clinical advice.
        </footer>
      </main>
    </div>
  );
}

function pageLabel(ref: string) {
  return `${/[-–,]| and /.test(ref) ? "pages" : "page"} ${ref}`;
}

function Quiz({
  session,
  remaining,
  onChoose,
  onCheck,
  onMove,
  onFlag,
  onSubmit,
  onExit,
}: {
  session: Session;
  remaining: number | null;
  onChoose: (option: number) => void;
  onCheck: () => void;
  onMove: (index: number) => void;
  onFlag: () => void;
  onSubmit: () => void;
  onExit: () => void;
}) {
  const question = session.questions[session.index];
  const picked = session.picks[session.index];
  const show = session.revealed[session.index];
  const lecture = LECTURES[question.lecture];
  const correctCount = session.questions.filter(
    (item, index) => session.picks[index] === item.answer && session.revealed[index],
  ).length;
  const answered = session.picks.filter((item) => item != null).length;
  const lowTime = remaining != null && remaining <= 5 * 60 && !session.submitted;

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <header className="sticky top-0 z-10 border-b border-rule bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3 sm:px-0">
          <button type="button" onClick={onExit} className="min-h-11 shrink-0 px-2 text-sm font-semibold text-teal">
            Desk
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">{session.title}</p>
            <p className="text-xs text-muted tabular-nums">
              {session.submitted
                ? `${correctCount} of ${session.questions.length} matched`
                : `${session.index + 1} of ${session.questions.length}`}
              {session.mode === "exam" && !session.submitted ? ` · ${answered} answered` : ""}
            </p>
          </div>
          {remaining != null && !session.submitted && (
            <p className={`font-serif text-2xl tabular-nums ${lowTime ? "text-copper" : "text-ink"}`}>
              {formatClock(remaining)}
            </p>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-6 pb-36 sm:px-0">
        <div className="mb-4 flex flex-wrap gap-1.5">
          {session.questions.map((item, index) => {
            const state = session.picks[index];
            const open = session.revealed[index];
            const here = index === session.index;
            const good = open && state === item.answer;
            const bad = open && state != null && state !== item.answer;
            return (
              <button
                key={item.id}
                type="button"
                aria-label={`Question ${index + 1}`}
                aria-current={here ? "true" : undefined}
                onClick={() => onMove(index)}
                className={`h-9 w-9 text-xs tabular-nums ${
                  here
                    ? "bg-ink text-sheet"
                    : good
                      ? "bg-teal-soft text-teal"
                      : bad
                        ? "bg-copper-soft text-copper"
                        : state != null
                          ? "border border-teal text-teal"
                          : "border border-rule text-muted"
                } ${session.flagged[index] ? "ring-2 ring-copper ring-offset-1 ring-offset-paper" : ""}`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>

        <article className="border border-rule bg-sheet p-5 sm:p-7">
          <p className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">
            Lecture {lecture.n} · {question.topic}
          </p>
          <p className="mt-4 font-serif text-xl leading-snug text-pretty sm:text-2xl">{question.scene}</p>
          <h2 className="mt-4 text-base font-semibold text-pretty">{question.ask}</h2>
          {show && SLIDES[question.id] && (
            <p className="mt-3 text-sm font-semibold text-teal">
              Open Lecture {Number(lecture.n)}, {pageLabel(SLIDES[question.id])}.
            </p>
          )}

          <div role="radiogroup" aria-label="Answers" className="mt-5 space-y-2">
            {question.choices.map((choice, index) => {
              const selected = picked === index;
              const isAnswer = index === question.answer;
              let tone = "border-rule bg-sheet";
              if (show && isAnswer) tone = "border-teal bg-teal-soft";
              else if (show && selected && !isAnswer) tone = "border-copper bg-copper-soft";
              else if (selected) tone = "border-teal bg-teal-soft";
              return (
                <button
                  key={choice.text}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => onChoose(index)}
                  className={`flex w-full min-h-11 gap-3 border px-3 py-3 text-left ${tone}`}
                >
                  <span className="mt-0.5 w-6 shrink-0 font-semibold">{LETTERS[index]}</span>
                  <span>
                    <span className="block text-pretty">{choice.text}</span>
                    {show && <span className="mt-2 block text-sm text-pretty text-muted">{choice.note}</span>}
                    {show && isAnswer && SLIDES[question.id] && (
                      <span className="mt-2 block text-sm font-semibold text-teal">
                        Lecture {Number(lecture.n)}, {pageLabel(SLIDES[question.id])}.
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </article>

        {session.submitted && (
          <p className="mt-4 text-sm text-pretty text-muted">
            There is no pass mark on this desk. Walk the copper items. The note under each option is the revision, not
            a grade.
          </p>
        )}
      </main>

      <footer className="fixed inset-x-0 bottom-0 border-t border-rule bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-2 px-4 py-3 sm:px-0">
          <button
            type="button"
            onClick={() => onMove(session.index - 1)}
            disabled={session.index === 0}
            className="min-h-11 border border-rule px-3 text-sm font-semibold disabled:opacity-40"
          >
            Back
          </button>
          <button type="button" onClick={onFlag} className="min-h-11 px-3 text-sm font-semibold text-copper">
            {session.flagged[session.index] ? "Flagged" : "Flag"}
          </button>
          <div className="flex-1" />
          {session.mode === "tutor" && !show && !session.submitted ? (
            <button
              type="button"
              onClick={onCheck}
              disabled={picked == null}
              className="min-h-11 bg-teal px-4 font-semibold text-sheet disabled:opacity-40"
            >
              Check answer
            </button>
          ) : session.index < session.questions.length - 1 ? (
            <button
              type="button"
              onClick={() => onMove(session.index + 1)}
              className="min-h-11 bg-ink px-4 font-semibold text-sheet"
            >
              Next
            </button>
          ) : session.submitted ? (
            <button type="button" onClick={onExit} className="min-h-11 bg-ink px-4 font-semibold text-sheet">
              Back to the desk
            </button>
          ) : (
            <button type="button" onClick={onSubmit} className="min-h-11 bg-teal px-4 font-semibold text-sheet">
              {session.mode === "exam" ? "Submit paper" : "Finish"}
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}

const PAYMENTS: { name: string; unit: string; pull: string; risk: string }[] = [
  {
    name: "Fee-for-service",
    unit: "Each billable service",
    pull: "More activity raises revenue. Twenty visits at HK$200 make HK$4,000. Twenty-five make HK$5,000.",
    risk: "Unnecessary volume. The extra HK$1,000 is revenue, not profit, until the extra cost is counted.",
  },
  {
    name: "Capitation",
    unit: "Each enrolled person",
    pull: "100 people at HK$300 a month is HK$30,000. Extra visits do not automatically raise it.",
    risk: "Under-provision, or avoiding people with greater needs. Risk adjustment can recognise expected need.",
  },
  {
    name: "Per diem",
    unit: "Each inpatient day",
    pull: "An extra eligible day can raise what the provider receives.",
    risk: "A weaker reason to shorten the stay. The patient’s room charge is a separate idea.",
  },
  {
    name: "Case payment",
    unit: "A classified admission",
    pull: "A fixed sum for a case with similar expected resource use pushes cost per case down.",
    risk: "Leaving too early, selecting easier cases, or bending the code.",
  },
  {
    name: "Global budget",
    unit: "A period of work",
    pull: "The provider has a sum for stated services and a reason to watch total spending.",
    risk: "If demand outruns the funded capacity, access is where the pressure shows.",
  },
  {
    name: "Salary",
    unit: "Time employed",
    pull: "Income is only loosely tied to how many items are billed, which can leave room for work that is hard to fee.",
    risk: "Volume is not self-policing. Standards and management still shape the day.",
  },
];

function PreRead({
  id,
  onBack,
  onDrill,
  onMove,
}: {
  id: LectureId;
  onBack: () => void;
  onDrill: () => void;
  onMove: (id: LectureId) => void;
}) {
  const meta = LECTURES[id];
  const brief = BRIEFS[id];
  const index = ORDER.indexOf(id);
  const prev = index > 0 ? ORDER[index - 1] : null;
  const next = index < ORDER.length - 1 ? ORDER[index + 1] : null;

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <header className="sticky top-0 z-10 border-b border-rule bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-3 sm:px-8">
          <button type="button" onClick={onBack} className="min-h-11 shrink-0 px-1 text-sm font-semibold text-teal">
            Desk
          </button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold">Pre-reading · Lecture {meta.n}</p>
            <p className="truncate text-xs text-muted">{meta.title}</p>
          </div>
          <button type="button" onClick={onDrill} className="min-h-11 shrink-0 bg-teal px-3 text-sm font-semibold text-sheet">
            Drill
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-8 pb-28 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">
          Lecture {meta.n}
          {meta.exam ? " · On the 27 October paper" : " · Not on the 27 October paper"}
        </p>
        <h1 className="mt-2 font-serif text-4xl tracking-tight text-balance">{meta.title}</h1>
        <p className="mt-4 text-lg text-pretty">{brief.purpose}</p>

        <section className="mt-8">
          <h2 className="font-serif text-2xl">Must-know equations</h2>
          {EQUATIONS[id].length === 0 ? (
            <p className="mt-3 text-pretty">{EQUATION_NOTE[id]}</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {EQUATIONS[id].map((item) => (
                <li key={item.expr} className="border border-rule bg-sheet px-4 py-3">
                  <p className="font-serif text-xl leading-snug text-pretty">{item.expr}</p>
                  <p className="mt-2 text-sm text-pretty">
                    <span className="font-semibold">What it is for. </span>
                    {item.use}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <div className="mt-8 space-y-8">
          {brief.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-2xl">{section.heading}</h2>
              <ul className="mt-3 space-y-3 border-l-2 border-teal pl-4">
                {section.points.map((point) => (
                  <li key={point} className="text-pretty">
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-10 text-sm text-pretty text-muted">
          A compression for revision, not a transcript of the slides and not the paper. Where a figure matters, check
          the lecture. Practice questions use the same ideas, sometimes with their own arithmetic.
        </p>
      </main>

      <footer className="fixed inset-x-0 bottom-0 border-t border-rule bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-2 px-5 py-3 sm:px-8">
          <button
            type="button"
            onClick={() => prev && onMove(prev)}
            disabled={!prev}
            className="min-h-11 border border-rule px-3 text-sm font-semibold disabled:opacity-40"
          >
            Previous
          </button>
          <div className="flex-1" />
          <button type="button" onClick={onDrill} className="min-h-11 bg-ink px-4 text-sm font-semibold text-sheet">
            Drill
          </button>
          <button
            type="button"
            onClick={() => next && onMove(next)}
            disabled={!next}
            className="min-h-11 border border-rule px-3 text-sm font-semibold disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </footer>
    </div>
  );
}

function ClinicBench({ onBack }: { onBack: () => void }) {
  const [row, setRow] = useState(4);
  const [pay, setPay] = useState(0);
  const here = CLINIC[row];
  const prev = row > 0 ? CLINIC[row - 1] : null;
  const vc = CLINIC_WAGE * here.L;
  const tc = CLINIC_FC + vc;
  const ap = here.L > 0 ? here.Q / here.L : null;
  const mp = prev ? (here.Q - prev.Q) / (here.L - prev.L) : null;
  const ac = here.Q > 0 ? tc / here.Q : null;
  const mc = prev && here.Q > prev.Q ? (CLINIC_WAGE * (here.L - prev.L)) / (here.Q - prev.Q) : null;

  let reading = "Fixed cost is still there when no visit has been completed. Variable cost is zero.";
  if (row > 0 && row <= 3) {
    reading = "Through the third hour, the extra hour is adding more visits than the hour before it. Total product is rising.";
  } else if (row > 3) {
    reading =
      "After the third hour, marginal product falls. Total visits still rise. A smaller gain is not a negative one.";
  }
  if (mp != null && ap != null && mp < ap) {
    reading += " Marginal product is below the average, so the average is being pulled down.";
  }

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <header className="border-b border-rule">
        <div className="mx-auto flex max-w-5xl items-center gap-3 px-5 py-4 sm:px-8">
          <button type="button" onClick={onBack} className="min-h-11 text-sm font-semibold text-teal">
            Desk
          </button>
          <h1 className="font-serif text-3xl">Clinic bench</h1>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-5 py-6 sm:px-8">
        <p className="max-w-2xl text-pretty text-muted">
          The teaching clinic. Rooms stay fixed. Each nurse-hour costs HK$60. The room is HK$120 whether or not anyone
          is seen. Figures are the lecture’s hypotheticals, not a wage scale.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {CLINIC.map((slot) => (
            <button
              key={slot.L}
              type="button"
              onClick={() => setRow(slot.L)}
              aria-pressed={row === slot.L}
              className={`min-h-11 min-w-16 px-3 py-2 text-left ${
                row === slot.L ? "bg-teal text-sheet" : "border border-rule bg-sheet"
              }`}
            >
              <span className="block text-xs uppercase tracking-wide">Hour {slot.L}</span>
              <span className="font-serif text-xl tabular-nums">{slot.Q}</span>
              <span className="block text-xs">visits</span>
            </button>
          ))}
        </div>

        <section className="mt-5 grid gap-3 sm:grid-cols-3">
          <Stat label="Total product" value={String(here.Q)} unit="visits" />
          <Stat label="Marginal product" value={mp == null ? "—" : trim(mp)} unit="extra visits per hour" />
          <Stat label="Average product" value={ap == null ? "—" : trim(ap)} unit="visits per hour" />
          <Stat label="Variable cost" value={hk(vc)} unit="HK$" />
          <Stat label="Total cost" value={hk(tc)} unit={`includes fixed ${hk(CLINIC_FC)}`} />
          <Stat label="Average cost" value={ac == null ? "—" : hk(ac)} unit="per visit" />
          <Stat label="Marginal cost" value={mc == null ? "—" : hk(mc)} unit="per extra visit" />
        </section>
        <p className="mt-4 max-w-3xl border-l-2 border-teal pl-4 text-pretty">{reading}</p>
        {row === 4 && (
          <p className="mt-3 max-w-3xl text-sm text-pretty text-muted">
            Check: the fourth hour moves visits from 18 to 24, so marginal product is 6. Total cost is HK$360. Average
            cost is HK$15. Marginal cost on that step is HK$10.
          </p>
        )}

        <section className="mt-12">
          <h2 className="font-serif text-2xl">How the provider is paid</h2>
          <p className="mt-2 max-w-2xl text-sm text-pretty text-muted">
            Name the unit first. The incentive follows the unit. These are tendencies, not a verdict on anyone’s
            character.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {PAYMENTS.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setPay(index)}
                aria-pressed={pay === index}
                className={`min-h-11 px-3 py-2 text-sm font-semibold ${
                  pay === index ? "bg-ink text-sheet" : "border border-rule bg-sheet"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <article className="mt-4 border border-rule bg-sheet p-5">
            <h3 className="font-serif text-2xl">{PAYMENTS[pay].name}</h3>
            <p className="mt-2 text-sm font-semibold text-teal">{PAYMENTS[pay].unit}</p>
            <p className="mt-3 text-pretty">{PAYMENTS[pay].pull}</p>
            <p className="mt-2 text-pretty text-muted">{PAYMENTS[pay].risk}</p>
          </article>
        </section>
      </main>
    </div>
  );
}

function Stat({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="border border-rule bg-sheet px-4 py-3">
      <p className="text-xs font-semibold tracking-wide text-muted uppercase">{label}</p>
      <p className="mt-1 font-serif text-3xl tabular-nums">{value}</p>
      <p className="text-sm text-muted">{unit}</p>
    </div>
  );
}

function trim(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2);
}

function hk(value: number) {
  const shown = Number.isInteger(value) ? String(value) : value.toFixed(2);
  return `HK$${shown}`;
}
