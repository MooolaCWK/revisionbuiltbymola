import { useEffect, useMemo, useState } from "react";
import { ORDER, PRE_BRIEFS, PRE_TOPICS } from "@/lib/prern/briefs";
import { PRE_QUESTIONS } from "@/lib/prern/bank";
import type { PreQuestion, PreTopicId } from "@/lib/prern/types";

type Attempt = { id: string; picked: number; correct: boolean; at: number };
export type PreOpen = { mode: "read" | "quiz"; topic: PreTopicId };

const KEY = "prern.v1";
const LETTERS = ["A", "B", "C", "D"];

const CITE: Record<PreTopicId, string> = {
  SURG: "Surgical nursing FAQ",
  MED: "MED nursing FAQ",
  CP: "Practicum package",
  DRUG: "Drug list",
  LAB: "Laboratory lecture",
};

const FIGURES: Partial<Record<PreTopicId, { src: string; alt: string; page: string }[]>> = {
  SURG: [
    {
      src: "/prern/im-sites.jpg",
      alt: "Intramuscular sites: deltoid, ventrogluteal, and vastus lateralis.",
      page: "55",
    },
    {
      src: "/prern/angles.jpg",
      alt: "Injection angles: intramuscular 90°, subcutaneous 45°, intravenous 25°, intradermal 10–15°.",
      page: "56",
    },
    {
      src: "/prern/ladder.jpg",
      alt: "WHO analgesic ladder, from a non-opioid for mild pain up to a strong opioid.",
      page: "57",
    },
  ],
  LAB: [
    {
      src: "/prern/lab-signs.jpg",
      alt: "Chvostek’s sign, a tap in front of the ear, and Trousseau’s sign, the cuff held above systolic pressure.",
      page: "38",
    },
    {
      src: "/prern/lab-clot.jpg",
      alt: "Coagulation cascade, with the steps heparin inactivates, and the intrinsic and extrinsic outlines.",
      page: "53",
    },
    {
      src: "/prern/lab-gas.jpg",
      alt: "PaCO₂ 35–45 mmHg is ventilation. PaO₂ 75–100 mmHg is oxygenation.",
      page: "62",
    },
    {
      src: "/prern/lab-rome.jpg",
      alt: "ROME: respiratory opposite, metabolic equal. Alkalosis above 7.45, acidosis below 7.35.",
      page: "70",
    },
    {
      src: "/prern/lab-table.jpg",
      alt: "Uncompensated gas table: which value moves, and the causes printed beside each disorder.",
      page: "71",
    },
  ],
};

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

function cite(topic: PreTopicId, page: string) {
  const many = /[-–,]| and /.test(page);
  return `${CITE[topic]}, ${many ? "pages" : "page"} ${page}`;
}

export function PreRnList({ onOpen }: { onOpen: (open: PreOpen) => void }) {
  const [attempts, setAttempts] = useState<Attempt[]>([]);

  useEffect(() => {
    setAttempts(loadAttempts());
  }, []);

  const latest = useMemo(() => latestMap(attempts), [attempts]);

  return (
    <section>
      <h2 className="font-serif text-2xl">The notes</h2>
      <p className="mt-2 max-w-3xl text-sm text-pretty text-muted">
        Key notes first, then a hundred questions. A new order each time you start. The drug list is the student’s own
        list: every page of it says to fact-check.
      </p>
      <ul className="mt-4 divide-y divide-rule border-y border-rule">
        {ORDER.map((id) => {
          const meta = PRE_TOPICS[id];
          const items = PRE_QUESTIONS.filter((item) => item.topicId === id);
          const done = items.filter((item) => latest.has(item.id)).length;
          const hit = items.filter((item) => latest.get(item.id)?.correct).length;
          return (
            <li key={id} className="py-4">
              <div className="flex items-start gap-4">
                <span className="w-10 font-serif text-2xl text-teal tabular-nums">{meta.n}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-semibold">{meta.title}</span>
                  <span className="block text-sm text-pretty text-muted">{meta.line}</span>
                  <span className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => onOpen({ mode: "read", topic: id })}
                      className="min-h-11 border border-ink bg-sheet px-3 text-sm font-semibold"
                    >
                      Key notes
                    </button>
                    <button
                      type="button"
                      onClick={() => onOpen({ mode: "quiz", topic: id })}
                      className="min-h-11 bg-ink px-3 text-sm font-semibold text-sheet"
                    >
                      Quiz, 100
                    </button>
                  </span>
                </span>
                <span className="shrink-0 text-right text-sm tabular-nums text-muted">
                  {hit}/{items.length || 100}
                  <span className="block text-xs">{done} tried</span>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function PreRnScreen({
  open,
  onBack,
  onQuiz,
}: {
  open: PreOpen;
  onBack: () => void;
  onQuiz: (topic: PreTopicId) => void;
}) {
  if (open.mode === "read") {
    return <Read topic={open.topic} onBack={onBack} onQuiz={() => onQuiz(open.topic)} />;
  }
  return <Quiz topic={open.topic} onBack={onBack} />;
}

function Read({
  topic,
  onBack,
  onQuiz,
}: {
  topic: PreTopicId;
  onBack: () => void;
  onQuiz: () => void;
}) {
  const meta = PRE_TOPICS[topic];
  const brief = PRE_BRIEFS[topic];
  const figures = FIGURES[topic] ?? [];
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <header className="sticky top-0 z-10 border-b border-rule bg-paper/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-5 py-3 sm:px-8">
          <button type="button" onClick={onBack} className="min-h-11 text-sm font-semibold text-teal">
            Desk
          </button>
          <p className="min-w-0 flex-1 truncate text-sm font-semibold">{meta.title}</p>
          <button type="button" onClick={onQuiz} className="min-h-11 bg-teal px-3 text-sm font-semibold text-sheet">
            Quiz
          </button>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-8 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">{meta.source}</p>
        <h1 className="mt-2 font-serif text-4xl">{meta.title}</h1>
        <p className="mt-4 text-lg text-pretty">{brief.lead}</p>
        <div className="mt-8 space-y-8">
          {brief.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-2xl">{section.heading}</h2>
              <p className="mt-1 text-xs font-semibold text-teal">{cite(topic, section.page)}</p>
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
        {figures.length > 0 && (
          <div className="mt-10 space-y-6">
            {figures.map((figure) => (
              <figure key={figure.src} className="border border-rule bg-sheet">
                <img src={figure.src} alt={figure.alt} className="w-full" />
                <figcaption className="px-4 py-3 text-sm text-muted">
                  {figure.alt} {cite(topic, figure.page)}.
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

function Quiz({ topic, onBack }: { topic: PreTopicId; onBack: () => void }) {
  const pool = useMemo(
    () => shuffle(PRE_QUESTIONS.filter((item) => item.topicId === topic)),
    [topic],
  );
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [shown, setShown] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setAttempts(loadAttempts());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(attempts.slice(-800)));
  }, [attempts, ready]);

  function check() {
    if (picked == null || shown) return;
    const question = pool[index];
    const correct = picked === question.answer;
    setShown(true);
    if (correct) setCorrectCount((value) => value + 1);
    setAttempts((prev) => [...prev, { id: question.id, picked, correct, at: Date.now() }]);
  }

  function next() {
    if (index + 1 >= pool.length) {
      setFinished(true);
      return;
    }
    setIndex((value) => value + 1);
    setPicked(null);
    setShown(false);
  }

  useEffect(() => {
    if (finished || pool.length === 0) return;
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

  if (finished || pool.length === 0) {
    return (
      <div className="min-h-dvh bg-paper text-ink">
        <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-teal uppercase">This sitting</p>
          <h1 className="mt-2 font-serif text-4xl">
            {correctCount} of {pool.length}
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-muted">
            No pass mark. The page under each answer is where you check the ones you missed.
          </p>
          <button type="button" onClick={onBack} className="mt-8 min-h-11 bg-ink px-4 font-semibold text-sheet">
            Back to the desk
          </button>
        </main>
      </div>
    );
  }

  const question: PreQuestion = pool[index];
  const meta = PRE_TOPICS[topic];

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
              {index + 1} of {pool.length}
            </span>
          </p>
          <p className="text-sm tabular-nums text-muted">
            {correctCount} right
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-6 pb-28 sm:px-8">
        <article className="border border-rule bg-sheet p-5 sm:p-7">
          <p className="text-xs font-semibold tracking-[0.14em] text-teal uppercase">{question.topic}</p>
          <p className="mt-4 font-serif text-xl leading-snug text-pretty sm:text-2xl">{question.scene}</p>
          <h2 className="mt-4 text-base font-semibold text-pretty">{question.ask}</h2>
          {shown && <p className="mt-3 text-sm font-semibold text-teal">{cite(topic, question.page)}</p>}
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
                    if (!shown) setPicked(choiceIndex);
                  }}
                  className={`flex w-full min-h-11 gap-3 border px-3 py-3 text-left ${tone}`}
                >
                  <span className="mt-0.5 w-6 shrink-0 font-semibold">{LETTERS[choiceIndex]}</span>
                  <span>
                    <span className="block text-pretty">{choice.text}</span>
                    {shown && <span className="mt-2 block text-sm text-pretty text-muted">{choice.note}</span>}
                    {shown && isAnswer && (
                      <span className="mt-2 block text-sm font-semibold text-teal">{cite(topic, question.page)}</span>
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
            <button type="button" onClick={next} className="min-h-11 bg-ink px-4 font-semibold text-sheet">
              {index + 1 === pool.length ? "Finish" : "Next"}
            </button>
          ) : (
            <button
              type="button"
              onClick={check}
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
