export type PreTopicId = "SURG" | "MED" | "CP" | "DRUG" | "LAB";

export type PreChoice = { text: string; note: string };

export type PreDraft = {
  id: string;
  topic: string;
  scene: string;
  ask: string;
  choices: [PreChoice, PreChoice, PreChoice, PreChoice];
  answer: number;
  page: string;
};

export type PreQuestion = PreDraft & { topicId: PreTopicId };
