import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { PreRnList, PreRnScreen, type PreOpen } from "@/components/pre-rn";
import {
  A_LECTURES,
  A_QUESTIONS,
  BRIEFS,
  FIGURES,
  FOCUS,
  WALK,
  type ALecture,
  type AQuestion,
} from "@/lib/nur501";

type Attempt = { id: string; picked: number; correct: boolean; at: number };
type Mode = "desk" | "read" | "quiz";

const KEY = "nur501.v1";
const LETTERS = ["A", "B", "C", "D"];
const ORDER: ALecture[] = ["HA", "ECG", "LAB"];

function loadAttempts(): Attempt[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Attempt[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
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

function cite(page: string, lecture: ALecture = "HA") {
  if (page.startsWith("Lecture")) return page;
  const many = /[-–,]| and /.test(page);
  return `Lecture ${Number(A_LECTURES[lecture].n)}, ${many ? "pages" : "page"} ${page}`;
}

export function AssessmentDesk() {
  const [mode, setMode] = useState<Mode>("desk");
  const [lecture, setLecture] = useState<ALecture>("HA");
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [ready, setReady] = useState(false);
  const [questions, setQuestions] = useState<AQuestion[]>([]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [shown, setShown] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [pre, setPre] = useState<PreOpen | null>(null);

  useEffect(() => {
    setAttempts(loadAttempts());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(attempts.slice(-400)));
  }, [attempts, ready]);

  const latest = useMemo(() => latestMap(attempts), [attempts]);

  function openRead(id: ALecture) {
    setLecture(id);
    setMode("read");
    window.scrollTo(0, 0);
  }

  function openQuiz(pool: AQuestion[], id: ALecture) {
    setLecture(id);
    setQuestions(shuffle(pool));
    setIndex(0);
    setPicked(null);
    setShown(false);
    setCorrectCount(0);
    setFinished(false);
    setMode("quiz");
    window.scrollTo(0, 0);
  }

  function check() {
    if (picked == null || shown) return;
    const question = questions[index];
    const correct = picked === question.answer;
    setShown(true);
    if (correct) setCorrectCount((value) => value + 1);
    setAttempts((prev) => [
      ...prev,
      { id: question.id, picked, correct, at: Date.now() },
    ]);
  }

  function next() {
    if (index + 1 >= questions.length) {
      setFinished(true);
      return;
    }
    setIndex((value) => value + 1);
    setPicked(null);
    setShown(false);
  }

  useEffect(() => {
    if (mode !== "quiz" || finished) return;
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) return;
      if (event.key >= "1" && event.key <= "4") {
        if (!shown) setPicked(Number(event.key) - 1);
      } else if (event.key === "Enter") {
        if (!shown) check();
        else next();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (mode === "read") return <Read lecture={lecture} onBack={() => setMode("desk")} onDrill={() => openQuiz(A_QUESTIONS.filter((item) => item.lecture === lecture), lecture)} />;
  if (mode === "quiz") {
    return (
      <Quiz
        lecture={lecture}
        questions={questions}
        index={index}
        picked={picked}
        shown={shown}
        finished={finished}
        correctCount={correctCount}
        onPick={setPicked}
        onCheck={check}
        onNext={next}
        onBack={() => setMode("desk")}
      />
    );
  }

  if (pre) {
    return (
      <PreRnScreen
        open={pre}
        onBack={() => setPre(null)}
        onQuiz={(topic) => setPre({ mode: "quiz", topic })}
      />
    );
  }

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <header className="border-b border-rule bg-deep text-paper">
        <div className="mx-auto flex max-w-5xl items-end justify-between gap-4 px-5 py-6 sm:px-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-teal-soft uppercase">Year 5 · before registration</p>
            <h1 className="mt-1 font-serif text-4xl font-medium tracking-tight text-sheet sm:text-5xl">Pre RN revision</h1>
            <Link to="/" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-teal-soft">
              Back to Health economy
            </Link>
          </div>
          <p className="hidden max-w-56 text-right text-sm text-teal-soft sm:block">
            Practice from the notes. Not a ward protocol.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
        <PreRnList onOpen={setPre} />

        <section className="mt-12 grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="border border-rule bg-sheet p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">The walk</p>
            <h2 className="mt-2 font-serif text-3xl">Head to toe, in this lecture’s order</h2>
            <p className="mt-3 text-sm text-pretty text-muted">
              There is no single script that ignores the complaint. This is the order Lecture 1 actually uses: speak,
              history, then down the body. The abdomen does not follow the chest.
            </p>
            <ol className="mt-6 space-y-5">
              {WALK.map((step) => (
                <li key={step.n} className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="font-serif text-2xl text-teal tabular-nums">{step.n}</span>
                  <span>
                    <span className="block font-semibold">{step.title}</span>
                    <span className="mt-1 block text-sm text-pretty text-muted">{step.body}</span>
                    <span className="mt-1 block text-xs font-semibold text-teal">{cite(step.page)}</span>
                  </span>
                </li>
              ))}
            </ol>
          </article>

          <aside className="border border-rule bg-sheet p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.16em] text-copper uppercase">The other column</p>
            <h2 className="mt-2 font-serif text-3xl">Focused assessment</h2>
            <p className="mt-3 text-sm text-pretty text-muted">
              Leave the tour when one finding owns the exam. Stay with that system until you can name the process.
            </p>
            <ul className="mt-6 space-y-5">
              {FOCUS.map((item) => (
                <li key={item.title} className="border-l-2 border-copper pl-4">
                  <p className="font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-pretty text-muted">{item.body}</p>
                  <p className="mt-1 text-xs font-semibold text-teal">{cite(item.page)}</p>
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="mt-12">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-serif text-2xl">NUR501 lectures</h2>
            <button
              type="button"
              onClick={() => openQuiz(shuffle(A_QUESTIONS).slice(0, 12), "HA")}
              className="min-h-11 text-sm font-semibold text-teal"
            >
              Twelve, mixed
            </button>
          </div>
          <ul className="mt-4 divide-y divide-rule border-y border-rule">
            {ORDER.map((id) => {
              const meta = A_LECTURES[id];
              const items = A_QUESTIONS.filter((item) => item.lecture === id);
              const done = items.filter((item) => latest.has(item.id)).length;
              const hit = items.filter((item) => latest.get(item.id)?.correct).length;
              return (
                <li key={id} className="py-4">
                  <div className="flex items-start gap-4">
                    <span className="w-10 font-serif text-2xl text-teal tabular-nums">{meta.n}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold">{meta.title}</span>
                      <span className="block text-sm text-muted text-pretty">{meta.line}</span>
                      <span className="mt-3 flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => openRead(id)}
                          className="min-h-11 border border-ink bg-sheet px-3 text-sm font-semibold"
                        >
                          Key notes
                        </button>
                        <button
                          type="button"
                          onClick={() => openQuiz(items, id)}
                          className="min-h-11 bg-ink px-3 text-sm font-semibold text-sheet"
                        >
                          Quiz
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

        <footer className="mt-8 max-w-3xl space-y-3 text-sm text-pretty text-muted">
          <p>
            Written from the NUR501 slides for revision. Not official examination questions, and not a substitute for the
            arrest algorithm on your unit. Check the page cited under each answer.
          </p>
          <p>
            The four notes are Dr Sze Kin Yan’s study manuals for practicum. Doses and withhold-limits are the ones
            printed there. The drug list says, on every page, to fact-check it. Not a ward protocol.
          </p>
          <p>
            Clinical simulation, Philip Sung. Lecture 1 walks the body. Lecture 2 is the trace and the infarct. Lecture 3
            is the numbers. Doses are the slides’ doses. In a real emergency, use the algorithm your hospital is running.
          </p>
        </footer>
      </main>
    </div>
  );
}

function Read({
  lecture,
  onBack,
  onDrill,
}: {
  lecture: ALecture;
  onBack: () => void;
  onDrill: () => void;
}) {
  const meta = A_LECTURES[lecture];
  const brief = BRIEFS[lecture];
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <header className="sticky top-0 z-10 border-b border-rule bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-3 sm:px-8">
          <button type="button" onClick={onBack} className="min-h-11 text-sm font-semibold text-teal">
            Desk
          </button>
          <p className="min-w-0 flex-1 truncate text-sm font-semibold">
            Lecture {meta.n} · {meta.title}
          </p>
          <button type="button" onClick={onDrill} className="min-h-11 bg-teal px-3 text-sm font-semibold text-sheet">
            Quiz
          </button>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-8 sm:px-8">
        <h1 className="font-serif text-4xl">{meta.title}</h1>
        <p className="mt-4 text-lg text-pretty">{brief.lead}</p>
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
        <div className="mt-10 space-y-6">
          {FIGURES[lecture].map((figure) => (
            <figure key={figure.src} className="border border-rule bg-sheet">
              <img src={figure.src} alt={figure.alt} className="w-full" />
              <figcaption className="px-4 py-3 text-sm text-muted">
                {figure.alt} {cite(figure.page, lecture)}.
              </figcaption>
            </figure>
          ))}
        </div>
      </main>
    </div>
  );
}

function Quiz({
  lecture,
  questions,
  index,
  picked,
  shown,
  finished,
  correctCount,
  onPick,
  onCheck,
  onNext,
  onBack,
}: {
  lecture: ALecture;
  questions: AQuestion[];
  index: number;
  picked: number | null;
  shown: boolean;
  finished: boolean;
  correctCount: number;
  onPick: (index: number) => void;
  onCheck: () => void;
  onNext: () => void;
  onBack: () => void;
}) {
  if (finished || questions.length === 0) {
    return (
      <div className="min-h-dvh bg-paper text-ink">
        <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">This sitting</p>
          <h1 className="mt-2 font-serif text-4xl">
            {correctCount} of {questions.length}
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-muted">
            No pass mark. The pages under the answers are where you check the ones you missed.
          </p>
          <button type="button" onClick={onBack} className="mt-8 min-h-11 bg-ink px-4 font-semibold text-sheet">
            Back to the desk
          </button>
        </main>
      </div>
    );
  }

  const question = questions[index];
  const meta = A_LECTURES[question.lecture] ?? A_LECTURES[lecture];

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <header className="sticky top-0 z-10 border-b border-rule bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-3 sm:px-8">
          <button type="button" onClick={onBack} className="min-h-11 text-sm font-semibold text-teal">
            Desk
          </button>
          <p className="min-w-0 flex-1 truncate text-sm font-semibold">
            {meta.title}
            <span className="ml-2 tabular-nums text-muted">
              {index + 1} of {questions.length}
            </span>
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-6 pb-28 sm:px-8">
        <article className="border border-rule bg-sheet p-5 sm:p-7">
          <p className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">
            Lecture {meta.n} · {question.topic}
          </p>
          <p className="mt-4 font-serif text-xl leading-snug text-pretty sm:text-2xl">{question.scene}</p>
          <h2 className="mt-4 text-base font-semibold text-pretty">{question.ask}</h2>
          {shown && (
            <p className="mt-3 text-sm font-semibold text-teal">{cite(question.page, question.lecture)}</p>
          )}
          <div role="radiogroup" aria-label="Answers" className="mt-5 space-y-2">
            {question.choices.map((choice, choiceIndex) => {
              const selected = picked === choiceIndex;
              const isAnswer = choiceIndex === question.answer;
              let tone = "border-rule bg-sheet";
              if (shown && isAnswer) tone = "border-teal bg-teal-soft";
              else if (shown && selected && !isAnswer) tone = "border-copper bg-copper-soft";
              else if (selected) tone = "border-teal bg-teal-soft";
              return (
                <button
                  key={choice.text}
                  type="button"
                  role="radio"
                  aria-checked={selected}
                  onClick={() => {
                    if (!shown) onPick(choiceIndex);
                  }}
                  className={`flex w-full min-h-11 gap-3 border px-3 py-3 text-left ${tone}`}
                >
                  <span className="mt-0.5 w-6 shrink-0 font-semibold">{LETTERS[choiceIndex]}</span>
                  <span>
                    <span className="block text-pretty">{choice.text}</span>
                    {shown && <span className="mt-2 block text-sm text-pretty text-muted">{choice.note}</span>}
                    {shown && isAnswer && (
                      <span className="mt-2 block text-sm font-semibold text-teal">
                        {cite(question.page, question.lecture)}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </article>
      </main>
      <footer className="fixed inset-x-0 bottom-0 border-t border-rule bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-end gap-2 px-5 py-3 sm:px-8">
          {shown ? (
            <button type="button" onClick={onNext} className="min-h-11 bg-ink px-4 font-semibold text-sheet">
              {index + 1 === questions.length ? "Finish" : "Next"}
            </button>
          ) : (
            <button
              type="button"
              onClick={onCheck}
              disabled={picked == null}
              className="min-h-11 bg-teal px-4 font-semibold text-sheet disabled:opacity-40"
            >
              Check answer
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}
