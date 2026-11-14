export type ALecture = "HA" | "ECG" | "LAB";

export type AChoice = { text: string; note: string };

export type AQuestion = {
  id: string;
  lecture: ALecture;
  topic: string;
  scene: string;
  ask: string;
  choices: AChoice[];
  answer: number;
  page: string;
};

export const A_LECTURES: Record<
  ALecture,
  { n: string; title: string; line: string }
> = {
  HA: {
    n: "01",
    title: "Health assessment",
    line: "Philip Sung. Communication, then lungs, heart, brain, and abdomen.",
  },
  ECG: {
    n: "02",
    title: "ECG and infarction",
    line: "Philip Sung. Rhythms, the arrest algorithms, and which artery.",
  },
  LAB: {
    n: "03",
    title: "Laboratory data",
    line: "Philip Sung. Ten groups of results, and when a number cannot wait.",
  },
};

export const WALK: { n: string; title: string; body: string; page: string }[] = [
  {
    n: "01",
    title: "Speak before you touch",
    body: "Name, role, and identity (name and date of birth). Say what you are about to do. Get verbal consent. Close the curtain, fix the light, and position the person. Then the history.",
    page: "2",
  },
  {
    n: "02",
    title: "SAMPLER, still at the bedside",
    body: "Signs and symptoms. Allergies, including the kind of reaction. Medicines, including those bought without a prescription. Past history. Last oral intake. Events just before it started. Risk factors: smoking, alcohol, food, exercise, work.",
    page: "3",
  },
  {
    n: "03",
    title: "Head: eyes and mouth",
    body: "Sclera for jaundice. Lower lid for pale conjunctiva. Corneal arcus — degeneration if old, cholesterol if young. Xanthelasma. Mouth for hydration, ulcers, tongue cyanosis, and pallor.",
    page: "7–9, 25",
  },
  {
    n: "04",
    title: "Neck",
    body: "Cervical nodes, one side then the other. Trachea: pulled toward collapse or fibrosis, pushed away by tension pneumothorax. Jugular venous pressure is looked at, not pressed.",
    page: "13–15, 26",
  },
  {
    n: "05",
    title: "Chest, lungs first",
    body: "Inspection, palpation, percussion, auscultation. Upper, middle, and lower zones, the same level on both sides before you move down. Diaphragm only for lung sounds. Avoid the scapula.",
    page: "5, 18",
  },
  {
    n: "06",
    title: "Heart, while you are still at the chest",
    body: "Hands and feet belong in this inspection: clubbing, splinters, palmar erythema, flap, pitting against non-pitting oedema. Then the pulse, the apex at the left 5th intercostal space in the midclavicular line, and thrills. Listen at aortic, pulmonary, tricuspid, and mitral areas with both diaphragm and bell.",
    page: "24–33",
  },
  {
    n: "07",
    title: "Abdomen breaks the order",
    body: "Look first: shape, scars, caput medusae, Cullen and Grey Turner, everted umbilicus, visible peristalsis or pulsation. Then listen, in all four quadrants, before you percuss or press. One to two minutes in a quadrant before you call the sounds absent. Palpate away from the pain. Percuss last.",
    page: "68–73, 80",
  },
  {
    n: "08",
    title: "Limbs",
    body: "Compare both sides: radial, brachial, femoral, popliteal, posterior tibial, dorsalis pedis. Radio-radial and radial-femoral delay. Power on the MRC scale only if the person is conscious. Sensation in all four limbs. Bruits with the bell. Percussion is not part of the vascular exam.",
    page: "41–47, 58–59",
  },
  {
    n: "09",
    title: "If they are not waking, stop the tour",
    body: "Cushing triad, then AVPU, then Glasgow coma scale: eyes, voice, motor, total 3 to 15. Pupils are served by cranial nerves II and III. A pupil change is on the same side as the brain problem. Limb weakness is on the opposite side. Pain below the sternum is not a reliable stimulus.",
    page: "49–56",
  },
];

export const FOCUS: { title: string; body: string; page: string }[] = [
  {
    title: "Lungs, if one side is wrong",
    body: "Consolidation conducts sound. Fremitus is stronger, chest excursion is less, percussion is dull, and a peripheral field can sound as loud as the trachea. “E” is heard as “A”. “99” becomes coarse. Collapse, effusion, and fibrosis do the opposite to the breath sound: they diminish it. Extra air — pneumothorax, emphysema — is hyper-resonant.",
    page: "15–23",
  },
  {
    title: "Heart sounds and murmurs",
    body: "S1 is mitral and tricuspid closing. S2 is aortic and pulmonary closing. S3 after S2, in an older adult, suggests volume overload. S4 before S1 suggests a stiff ventricle. A thrill means the murmur is grade IV or louder. Systolic: aortic stenosis, mitral regurgitation. Diastolic: aortic regurgitation, mitral stenosis. The continuous murmur the lecture treats as classic is a patent ductus.",
    page: "31–40",
  },
  {
    title: "Abdomen, by the place that hurts",
    body: "Start palpation away from the pain and watch the face. Right costal margin, they catch their breath: Murphy, gallbladder. One third of the way from the anterior superior iliac spine to the umbilicus: McBurney, appendix. Left lower pain felt on the right: Rovsing. Hip extension pain: psoas. Flexed hip, internal rotation: obturator. Dullness that moves when they roll: ascites. Liver span in the midclavicular line is normally 6–12 cm.",
    page: "73–79",
  },
  {
    title: "Limbs, the three named tests",
    body: "Allen: compress radial and ulnar, then release one, and watch the hand. Buerger: raise the leg, then hang it, and watch the colour. Homan: support the thigh, dorsiflex the ankle, and deep calf pain is the sign the slide describes. The same slide says current deep-vein assessment is a probability score, D-dimer, and compression ultrasound — not the calf manoeuvre alone.",
    page: "44–46",
  },
  {
    title: "Chest pain does not wait for the tour",
    body: "Lecture 2 is blunt: look at the person before the monitor, and get a 12-lead within 10 minutes. A full head-to-toe survey comes after the rhythm and the territory are named. Oxygen on that algorithm is for saturation under 94%. Nitrates wait until a right-sided trace has excluded right-ventricular infarction.",
    page: "Lecture 2, pp. 33–34 and 39",
  },
];

export const BRIEFS: Record<
  ALecture,
  { lead: string; sections: { heading: string; points: string[] }[] }
> = {
  HA: {
    lead: "Four systems, each with its own order. The abdomen is the one that does not follow inspection, palpation, percussion, auscultation.",
    sections: [
      {
        heading: "Lungs",
        points: [
          "Added sounds: fine diffuse crackles suggest pulmonary oedema. Coarse local crackles suggest infection. A wheeze is a narrowed airway.",
          "Normal sounds: bronchial at the trachea, bronchovesicular at the bronchi, vesicular at the periphery with a longer inspiration.",
          "Clubbing, as listed: COPD and congenital cyanotic heart disease. The list is not exhaustive.",
        ],
      },
      {
        heading: "Heart and vessels",
        points: [
          "Bell for low pitch: S3, S4, mitral stenosis. Diaphragm for high pitch: S1, S2, mitral regurgitation.",
          "Collapsing pulse: radial artery, arm raised. Aortic regurgitation and other high-output states.",
          "Radio-radial delay: occlusion on the weak side, or dissection. Radial-femoral delay: coarctation. The slide says dissection is stronger on the left.",
          "Non-pitting oedema: venous occlusion, classically lymphoedema and myxoedema. Pitting: heart, kidney, liver, venous insufficiency.",
        ],
      },
      {
        heading: "Brain",
        points: [
          "Cushing triad: high blood pressure, a pulse that was fast and becomes slow, irregular breathing. Intracranial hypertension.",
          "Eyes 4, 3, 2, 1. Voice 5 down to 1. Motor 6 down to 1. Intubated voice is recorded NT.",
          "Pupils: one dilated and fixed — haemorrhage. Both dilated and fixed — hypoxia. Both mid-size and fixed — midbrain. Pinpoint and fixed — pontine. One small pupil — Horner.",
          "No power and no feeling on one side: intracerebral bleeding. Both legs: spinal injury. MMSE out of 30: 25–30 usual, 21–24 mild, 10–20 moderate, 9 or below severe.",
        ],
      },
    ],
  },
  ECG: {
    lead: "Name the rhythm against sinus rhythm, then the algorithm. The person in the bed outranks the trace.",
    sections: [
      {
        heading: "What a rhythm must do to the output",
        points: [
          "Cardiac output is stroke volume times rate. Too fast, the ventricle does not fill. Too slow, there are not enough beats. Irregular filling is uneven output.",
          "The lower the pacemaker, the more dangerous. Sinus keeps a normal P wave. Atrial changes the P wave. Junctional hides, inverts, or puts the P after the QRS. Ventricular widens the QRS.",
          "Sinus rhythm: 60–100, regular, a P before every QRS and upright in lead II, PR 0.12–0.20 s, QRS 0.04–0.12 s. Read rate, rhythm, P, PR, then QRS. Do not skip.",
        ],
      },
      {
        heading: "The rhythms that arrest",
        points: [
          "Ventricular tachycardia: three or more ventricular beats, rate over 100, QRS wider than 0.12 s. With a pulse: synchronised shock or amiodarone. No pulse: treat as fibrillation. Shock first. Do not start with the drug.",
          "Fibrillation has no P, no QRS, no T. About a tenth of the chance of survival is lost each minute without a shock. Call, CPR, pads, shock.",
          "Pulseless electrical activity and asystole are not shockable. CPR, adrenaline 1 mg every 3–5 minutes, and the Hs and Ts the whole time. Fine fibrillation can look like a flat line. Check a second lead before you withhold a shock.",
        ],
      },
      {
        heading: "Blocks, slow, fast, and the infarct",
        points: [
          "First degree: PR over 0.20 s, every P conducts. Mobitz I: the PR lengthens, then a QRS drops. Atropine if they are symptomatic. Mobitz II: the PR stays put and a QRS drops without warning. Complete block: P and QRS ignore each other, ventricular rate often 20–40. Atropine does not work for Mobitz II or complete block. Pace.",
          "Slow and unstable: atropine 0.5 mg, repeat every 3–5 minutes, stop at 3 mg — unless the block is Mobitz II or complete. Then pace. Capture needs a spike, a wide QRS, and a pulse you can feel.",
          "Fast, at or over 150, with a pulse. Unstable: synchronised cardioversion, not defibrillation. Stable and narrow: vagal manoeuvres, then adenosine 6 mg and 12 mg if needed. A shock on the T wave can start fibrillation.",
          "Injury is ST elevation: at least 1 mm in the limb leads, 2 mm in the chest leads, in two neighbouring leads. Necrosis is a Q wave at least 0.04 s wide and at least a quarter of the R. Door to balloon 90 minutes. Door to needle 30 minutes if the lab cannot take them. Aspirin 300 mg, chewed.",
        ],
      },
    ],
  },
  LAB: {
    lead: "Read the number against the person, then against the other numbers. Compensation moves the other system toward a normal pH. It does not overshoot.",
    sections: [
      {
        heading: "Gas and acid",
        points: [
          "pH 7.35–7.45. PaCO₂ 4.7–6.0 kPa. Bicarbonate 22–26 mmol/L. Base excess 0 ± 2. PaO₂ on the slide is 13–16 kPa. Saturation 94–99%.",
          "Hypoventilation holds CO₂ and the pH falls: respiratory acidosis. Hyperventilation blows CO₂ off: respiratory alkalosis. A low bicarbonate is metabolic acidosis — diarrhoea, ketoacidosis, shock, with Kussmaul breathing as the compensation. Vomiting and suction raise the bicarbonate.",
          "The worked ventilated case: pH 7.22, PaCO₂ 6.8 kPa, bicarbonate 17, base excess −10. Both systems are acid. That is a mixed acidosis, not a compensated one.",
        ],
      },
      {
        heading: "Blood, clot, and salt",
        points: [
          "Troponin rises at 3–4 hours and stays up 10–15 days. The slide’s normal is under 14 μg/L, confirmed twice.",
          "Microcytic is an MCV under 80. A high red-cell distribution width points to iron deficiency. A low one, with small even cells, points to thalassaemia. Macrocytic, over 100, makes you check B12 and folate.",
          "Neutrophils are the infection-risk count. Under 1.0 × 10⁹/L, isolate and avoid new invasive lines. Platelets normally 150–400 × 10⁹/L.",
          "PT and INR watch the extrinsic path and warfarin. APTT watches the intrinsic path and heparin. D-dimer on the slide is under 500 ng/mL.",
          "Potassium 3.5–5.0. Outside that, the lecture wants a monitor. The critical-value slide: under 2.5 or over 6.5, call now.",
        ],
      },
      {
        heading: "Water, kidney, liver, and the rest",
        points: [
          "Diabetes insipidus: dry, high sodium, litres of dilute urine, desmopressin. SIADH: not dry, low sodium, concentrated urine, restrict fluid. Cerebral salt wasting: dry and low sodium. Replace salt and volume. Restricting a wasting patient as if they had SIADH makes the hypovolaemia worse.",
          "Oliguria is under 0.5 mL/kg/h. Anuria on the slide is under 100 mL in a day. eGFR stages run from G1 at 90 or above to G5 under 15.",
          "Albumin 35–50 g/L. Unconjugated bilirubin and no dark urine: before the liver. Dark urine and pale stool: after the liver, obstructed. ALT is the more liver-specific enzyme. AST:ALT over 2 suggests alcohol. Ammonia over the slide’s normal, under 50 μmol/L, with confusion: encephalopathy.",
          "Lipase is the more specific pancreatitis marker. Both enzymes at three times the upper limit confirm it. A tumour marker does not diagnose on its own.",
        ],
      },
    ],
  },
};

export const FIGURES: Record<ALecture, { src: string; alt: string; page: string }[]> = {
  HA: [
    {
      src: "/nur501/ha-04.jpg",
      alt: "Four systems in the lecture: respiratory, cardiovascular, neurological, abdominal.",
      page: "4",
    },
    {
      src: "/nur501/ha-05.jpg",
      alt: "Respiratory order: inspection, palpation, percussion, auscultation, both sides.",
      page: "5",
    },
    {
      src: "/nur501/ha-17.jpg",
      alt: "Percussion: hyper-resonance with extra air, dullness with less air.",
      page: "17",
    },
    {
      src: "/nur501/ha-51.jpg",
      alt: "Glasgow coma scale, eye responses, scores 4 to 1.",
      page: "51",
    },
    {
      src: "/nur501/ha-71.jpg",
      alt: "Nine abdominal regions and four quadrants, with the organs named in each.",
      page: "71",
    },
  ],
  ECG: [
    {
      src: "/nur501/ecg-04.jpg",
      alt: "Arrhythmias by origin: sinus, atrial, junctional, ventricular.",
      page: "4",
    },
    {
      src: "/nur501/ecg-10.jpg",
      alt: "Pulseless electrical activity and asystole, with the Hs and Ts.",
      page: "10",
    },
    {
      src: "/nur501/ecg-16.jpg",
      alt: "Shockable arrest algorithm: CPR, shock, adrenaline, amiodarone after the third shock.",
      page: "16",
    },
    {
      src: "/nur501/ecg-27.jpg",
      alt: "Lead territories and the artery that usually supplies each wall.",
      page: "27",
    },
  ],
  LAB: [
    {
      src: "/nur501/lab-06.jpg",
      alt: "Four acid-base disorders and which value moves.",
      page: "6",
    },
    {
      src: "/nur501/lab-15.jpg",
      alt: "Anaemia by cell size, and how red-cell distribution width separates iron deficiency from thalassaemia.",
      page: "15",
    },
    {
      src: "/nur501/lab-22.jpg",
      alt: "Diabetes insipidus, SIADH, and cerebral salt wasting compared.",
      page: "22",
    },
  ],
};

const item = (
  id: string,
  lecture: ALecture,
  topic: string,
  scene: string,
  ask: string,
  choices: AChoice[],
  answer: number,
  page: string,
): AQuestion => {
  let hash = 0;
  for (let i = 0; i < id.length; i += 1) hash = (hash * 33 + id.charCodeAt(i)) >>> 0;
  const shift = hash % choices.length;
  const spun = shift === 0 ? choices : choices.slice(shift).concat(choices.slice(0, shift));
  return {
    id,
    lecture,
    topic,
    scene,
    ask,
    choices: spun,
    answer: (answer - shift + choices.length) % choices.length,
    page,
  };
};

export const A_QUESTIONS: AQuestion[] = [
  item(
    "ha-first",
    "HA",
    "Before you begin",
    "A student walks in, pulls the gown down, and starts percussion. The person has not been told who the student is.",
    "What does the lecture put first?",
    [
      {
        text: "Percussion, because it is the most informative step.",
        note: "Nothing is percussed until the person knows who you are and has agreed.",
      },
      {
        text: "Name, role, and identity, then what you plan to do, then verbal consent, then privacy. History before the hands.",
        note: "Correct. Identity is name and date of birth. SAMPLER is the history frame on the next slide.",
      },
      {
        text: "Auscultation, so that later palpation cannot be blamed for changing the findings.",
        note: "That rule is for the abdomen, and it still comes after introduction and inspection.",
      },
      {
        text: "A full cranial-nerve exam, because consciousness might change.",
        note: "Cranial nerves are the comprehensive neurological exam, not the opening of every assessment.",
      },
    ],
    1,
    "2–3",
  ),
  item(
    "ha-sampler",
    "HA",
    "History",
    "A person with new breathlessness last ate a full meal two hours ago and takes a herbal tablet every morning that is not on the drug chart.",
    "Which SAMPLER letters have you just used?",
    [
      {
        text: "S and A only. Food and herbal tablets are not part of the frame.",
        note: "Last oral intake is L. Medicines include herbal products and supplements. Both are in the frame.",
      },
      {
        text: "L and M. Last intake, and medicines that were never prescribed.",
        note: "Correct. M is every current medicine, including herbal ones, with dose and whether they actually take it. L is when and what they last ate or drank.",
      },
      {
        text: "R only. A meal is a risk factor.",
        note: "R is smoking, alcohol, diet, exercise, and work. The meal itself is last oral intake.",
      },
      {
        text: "E only. The meal is the event leading up.",
        note: "E is what they were doing immediately before the symptom. The meal time is L unless that meal was the trigger they describe.",
      },
    ],
    1,
    "3",
  ),
  item(
    "ha-trachea",
    "HA",
    "Neck",
    "The trachea is pushed to the opposite side of a silent, hyper-resonant hemithorax. The person is increasingly breathless.",
    "Which diagnosis does the lecture attach to tracheal deviation away from the bad side?",
    [
      {
        text: "Collapse. The trachea is pulled toward the airless side.",
        note: "Collapse and fibrosis pull the trachea to the same side.",
      },
      {
        text: "Tension pneumothorax. Pressure pushes the trachea away.",
        note: "Correct. Same side: collapse or fibrosis. Opposite side: tension pneumothorax.",
      },
      {
        text: "Pleural effusion. Fluid always pushes the trachea away.",
        note: "Effusion is dull, not hyper-resonant. The slide reserves opposite deviation for tension pneumothorax.",
      },
      {
        text: "Consolidation. The trachea follows the fremitus.",
        note: "Consolidation is about fremitus, excursion, dullness, and voice sounds. It is not the opposite-deviation example.",
      },
    ],
    1,
    "15",
  ),
  item(
    "ha-consol",
    "HA",
    "Lungs",
    "On the right, the chest moves less, “99” is felt more strongly, and percussion is dull. At the periphery the breath sound is as loud as the trachea. Spoken “E” is heard as “A”.",
    "What single process ties those findings?",
    [
      {
        text: "Pneumothorax. Extra air should make everything louder.",
        note: "Extra air is hyper-resonant and the breath sound is not bronchial at the periphery.",
      },
      {
        text: "Lung consolidation. Air in the small airways has been replaced, so the lung conducts vibration and voice.",
        note: "Correct. Fremitus up, excursion down, dull, bronchial sound out in the periphery, egophony, and a coarser “99”.",
      },
      {
        text: "Pleural effusion. Fluid conducts voice better than air.",
        note: "Effusion is dull and the breath sound is diminished, not loud and bronchial.",
      },
      {
        text: "Asthma. A wheeze is the same finding as egophony.",
        note: "A wheeze is a narrowed airway. Egophony is a voice-sound test for consolidation.",
      },
    ],
    1,
    "16–23",
  ),
  item(
    "ha-sounds",
    "HA",
    "Lungs",
    "You hear fine crackles throughout both lungs, not in one patch. There is no wheeze.",
    "Which cause does the lecture give for that pattern?",
    [
      {
        text: "Local chest infection. Coarse crackles in one place.",
        note: "Coarse and local is the infection pattern. Fine and diffuse is the other one.",
      },
      {
        text: "Acute pulmonary oedema. Fine diffuse crackles.",
        note: "Correct. Fine and spread out: oedema. Coarse and local: infection. Wheeze is narrowing, as in asthma.",
      },
      {
        text: "Pneumothorax, because crackles mean extra air.",
        note: "Pneumothorax is hyper-resonant and quiet, not a diffuse crackle.",
      },
      {
        text: "Normal vesicular sound, misnamed.",
        note: "Vesicular sound is soft, low, and longer on inspiration. A crackle is an added sound.",
      },
    ],
    1,
    "20–22",
  ),
  item(
    "ha-bell",
    "HA",
    "Heart",
    "You are listening for S3 and for mitral stenosis. A classmate hands you the diaphragm and says it is the only piece that matters.",
    "Which piece does the lecture want, and where is the apex?",
    [
      {
        text: "Diaphragm. The apex is the right 2nd intercostal space.",
        note: "The diaphragm is for high pitch: S1, S2, mitral regurgitation. The apex is not the aortic area.",
      },
      {
        text: "Bell, for those low-pitched sounds. The apex is usually the left 5th intercostal space, midclavicular line.",
        note: "Correct. Bell: S3, S4, mitral stenosis. Diaphragm: S1, S2, mitral regurgitation. Lung sounds, by contrast, use the diaphragm only.",
      },
      {
        text: "Either piece. Pitch does not change what you hear.",
        note: "The lecture assigns the bell and the diaphragm to different sounds.",
      },
      {
        text: "Bell, placed only at the trachea.",
        note: "The trachea is where bronchial breath sounds are heard, with the diaphragm, and that is a lung exam.",
      },
    ],
    1,
    "18, 30, 33",
  ),
  item(
    "ha-thrill",
    "HA",
    "Murmur",
    "A murmur is loud with the stethoscope fully on the chest, and you can feel it on the chest wall.",
    "What grade is that, at least?",
    [
      {
        text: "Grade II. Soft murmurs are the ones you can feel.",
        note: "Grades I to III have no thrill. II is soft and heard in all positions.",
      },
      {
        text: "Grade IV or above. A palpable murmur is a thrill, and the slide ties the thrill to grades IV, V, and VI.",
        note: "Correct. IV is loud with the stethoscope fully on the chest and a thrill. V is half off. VI is off the chest. All three have a thrill.",
      },
      {
        text: "Grade III, because loud and no thrill is the top of the scale.",
        note: "Grade III is loud and has no thrill. The scale goes to VI.",
      },
      {
        text: "Grade I. Barely audible murmurs are graded by how they feel.",
        note: "Grade I is barely audible and is not heard in every position. There is no thrill.",
      },
    ],
    1,
    "31–32",
  ),
  item(
    "ha-abdomen",
    "HA",
    "Abdomen",
    "The person guards in the right lower quadrant. You have looked. A classmate starts deep palpation there, to save time.",
    "What is the lecture’s order?",
    [
      {
        text: "Palpate the painful quadrant first, while the guarding is still obvious.",
        note: "Start away from the pain. Watch the face the whole time.",
      },
      {
        text: "Listen in all four quadrants before you percuss or press. Then light palpation, beginning away from the pain.",
        note: "Correct. Inspection, then auscultation, then palpation, then percussion. One to two minutes before you call bowel sounds absent.",
      },
      {
        text: "The lung order: inspection, palpation, percussion, auscultation.",
        note: "That is the lung and heart order. The abdomen listens before it is pressed, so the sounds are not altered.",
      },
      {
        text: "Percuss the liver span first. Bowel sounds are optional.",
        note: "Liver span is a percussion finding, and it comes after auscultation. Sounds are not optional.",
      },
    ],
    1,
    "68–73, 80",
  ),
  item(
    "ha-mcburney",
    "HA",
    "Abdomen",
    "Tenderness sits one third of the way from the right anterior superior iliac spine to the umbilicus. Pressing the left lower quadrant hurts on the right.",
    "Which pair of signs is that?",
    [
      {
        text: "Murphy and shifting dullness. Gallbladder and ascites.",
        note: "Murphy is a catch in the breath under the right costal margin. Shifting dullness is fluid.",
      },
      {
        text: "McBurney and Rovsing. Both point to appendicitis on this lecture.",
        note: "Correct. McBurney is the point. Rovsing is left-sided pressure felt on the right. Psoas and obturator are the hip tests for a retrocaecal or pelvic appendix.",
      },
      {
        text: "Cullen and Grey Turner. Bruising of pancreatitis or bleeding.",
        note: "Those are inspection signs: the umbilicus and the flank. They are not these two tenderness tests.",
      },
      {
        text: "Psoas and obturator. Both are tested with the hip.",
        note: "Those use the hip. They are not the landmark and the left-lower-quadrant press.",
      },
    ],
    1,
    "76–77",
  ),
  item(
    "ha-gcs",
    "HA",
    "Consciousness",
    "Eyes open to speech. Words are confused. The person pulls a hand up toward a trap squeeze.",
    "What is the Glasgow coma scale total, and which stimulus rule matters?",
    [
      {
        text: "E4 V5 M6, total 15. Any pain stimulus is acceptable, including the abdomen.",
        note: "Eyes to speech are 3, not 4. Confused speech is 4, not 5. Localising is 5, not 6. Pain below the sternum is not reliable.",
      },
      {
        text: "E3 V4 M5, total 12. Use a listed site: supra-orbital, ear, trap, nailbed, or sternum. Not below the sternum.",
        note: "Correct. Eyes: speech 3. Voice: confused 4. Motor: localises pain 5. Total 12. The range on the slide is 3 to 15.",
      },
      {
        text: "E2 V3 M4, total 9. Opening to speech is the pain score.",
        note: "Eyes to pain are 2. Eyes to speech are 3. Confused is 4, not inappropriate words.",
      },
      {
        text: "AVPU “V”, which replaces the coma scale.",
        note: "AVPU is the rapid scale. This description is enough for a Glasgow score, and the lecture wants both tools.",
      },
    ],
    1,
    "50–55",
  ),
  item(
    "ha-pupil",
    "HA",
    "Pupils",
    "The right pupil is dilated and does not react. The left arm and leg are weak. Blood pressure is high, the pulse has slowed, and the breathing is irregular.",
    "How does the lecture read the side, and the vital signs?",
    [
      {
        text: "The weak limbs mark the side of the bleed. The pupil marks the other side. The vital signs are sepsis.",
        note: "The slide says the opposite about side. The vital-sign trio is Cushing, not sepsis.",
      },
      {
        text: "The pupil is on the same side as the brain problem. The limbs are opposite. The vital signs are Cushing triad: pressure up, pulse slowing, breathing irregular.",
        note: "Correct. A unilateral dilated fixed pupil is listed under brain haemorrhage. Cushing triad is intracranial hypertension.",
      },
      {
        text: "Both findings are spinal. Cushing triad is a medullary breathing pattern only.",
        note: "Both legs, not one side of the body, is the spinal pattern. Cushing triad includes pressure and pulse, not breathing alone.",
      },
      {
        text: "Pinpoint pupils and a fast pulse. Give atropine for the breathing.",
        note: "Pinpoint fixed pupils are the pontine pattern. This pupil is dilated. Atropine is not the lecture’s response to Cushing triad.",
      },
    ],
    1,
    "49, 56–57",
  ),
  item(
    "ha-homan",
    "HA",
    "Limbs",
    "A swollen calf. You support the thigh and dorsiflex the ankle. It hurts deeply. A classmate says that one manoeuvre is now enough to start treatment for a clot.",
    "What does the slide actually say?",
    [
      {
        text: "Pain on dorsiflexion is Homan’s sign, and a modern clot assessment still needs a probability score, D-dimer, and compression ultrasound.",
        note: "Correct. The slide teaches the manoeuvre and, in the same breath, says it is not the current diagnostic pathway on its own.",
      },
      {
        text: "This is Buerger’s test. Colour change after hanging the leg is the clot sign.",
        note: "Buerger’s test is for arterial disease in the leg: raise, then hang, and watch the colour.",
      },
      {
        text: "This is Allen’s test, and a positive result means coarctation.",
        note: "Allen’s test compresses the radial and ulnar arteries and watches the hand. Coarctation is radial-femoral delay.",
      },
      {
        text: "Percuss the calf. Vascular assessment uses percussion before the bell.",
        note: "The lecture says percussion is not used in the vascular exam. Bruits are listened for with the bell.",
      },
    ],
    0,
    "44–47",
  ),
  item(
    "ecg-output",
    "ECG",
    "Output",
    "A rate of 180 in a narrow, regular tachycardia. The person is pale and the blood pressure is falling. A classmate says a fast rate must raise cardiac output.",
    "Why does the lecture disagree?",
    [
      {
        text: "Output is rate alone. Stroke volume is fixed, so faster is always more output.",
        note: "Output is stroke volume times rate. Stroke volume is not fixed.",
      },
      {
        text: "Too fast, the ventricle does not fill, so stroke volume falls and output can fall with it.",
        note: "Correct. Too slow also cuts output, by too few beats. Irregular filling makes output uneven. The nursing job is to name the rhythm and start the right algorithm.",
      },
      {
        text: "Only ventricular rhythms change output. A narrow QRS cannot.",
        note: "Atrial and supraventricular rhythms reduce filling too. A narrow QRS does not make the rate harmless.",
      },
      {
        text: "Output rises, and the low pressure must be a measurement error.",
        note: "The lecture’s end point of an untreated rhythm is hypoperfusion and shock. Do not explain away the pressure.",
      },
    ],
    1,
    "3",
  ),
  item(
    "ecg-nsr",
    "ECG",
    "Sinus rhythm",
    "Rate 84, regular, a P before every QRS and upright in lead II, PR 0.16 s, QRS 0.08 s.",
    "What is it, and what five steps did you just use?",
    [
      {
        text: "Sinus rhythm. Rate, rhythm, P wave, PR interval, QRS.",
        note: "Correct. The slide’s normal ranges: rate 60–100, PR 0.12–0.20 s, QRS 0.04–0.12 s. Do not name another rhythm until you have compared all five.",
      },
      {
        text: "First-degree block, because a PR under 0.20 s is prolonged.",
        note: "First degree is a PR consistently over 0.20 s. 0.16 is inside the range.",
      },
      {
        text: "Junctional rhythm, because the rate is under 100.",
        note: "Junctional rhythms lose, invert, or delay the P wave. This P is present and upright in II.",
      },
      {
        text: "Sinus bradycardia. Anything under 90 is slow.",
        note: "Sinus bradycardia on the slide is under 60, with an otherwise normal P-QRS-T.",
      },
    ],
    0,
    "5, 35",
  ),
  item(
    "ecg-af",
    "ECG",
    "Atrial",
    "No P waves. The baseline fidgets. The ventricular response is irregularly irregular. The QRS is narrow.",
    "Which rhythm, and which risk does the lecture add?",
    [
      {
        text: "Atrial flutter with sawtooth waves and a regular ventricular response.",
        note: "Flutter has sawtooth F waves and a regular response if the block ratio is fixed. Atrial rates on the slide are 250–350.",
      },
      {
        text: "Atrial fibrillation. No distinct P waves, irregularly irregular, and a stroke risk that needs an anticoagulation decision.",
        note: "Correct. Atrial activity on the slide is 350–600. The QRS is usually narrow. Thrombus risk is stressed for fibrillation in particular.",
      },
      {
        text: "Ventricular fibrillation, because any irregular trace is ventricular.",
        note: "Ventricular fibrillation has no QRS to measure and no pulse. A narrow QRS means the ventricle is still being triggered from above.",
      },
      {
        text: "Sinus arrhythmia. The irregularity follows breathing and the P wave is normal.",
        note: "Sinus arrhythmia keeps a normal P before every QRS. This trace has no P.",
      },
    ],
    1,
    "7, 36",
  ),
  item(
    "ecg-vt",
    "ECG",
    "Ventricular tachycardia",
    "Wide QRS, rate 160, no P waves, the person is unresponsive, and you cannot feel a pulse.",
    "What is the first electrical treatment?",
    [
      {
        text: "Amiodarone 300 mg, then wait to see if a pulse returns before any shock.",
        note: "The drug is for later in the shockable algorithm, after shocks and CPR. Pulseless ventricular tachycardia is not the moment to start with it.",
      },
      {
        text: "Defibrillation, as for fibrillation. CPR around the shock. Do not delay the shock for a drug.",
        note: "Correct. No pulse: treat as ventricular fibrillation. With a pulse, the lecture uses synchronised cardioversion or amiodarone, and the person may still be awake.",
      },
      {
        text: "Synchronised cardioversion at 50 J, the flutter dose.",
        note: "Synchronised energy is for a rhythm you can sync to, with a pulse. Flutter on the slide is 50–100 J. This person has no pulse.",
      },
      {
        text: "Atropine 0.5 mg. A wide QRS is a block.",
        note: "Atropine is the unstable bradycardia drug, and it fails in high-grade block. This rate is fast and there is no pulse.",
      },
    ],
    1,
    "8, 16",
  ),
  item(
    "ecg-pea",
    "ECG",
    "Non-shockable",
    "The monitor shows a slow organised rhythm. There is no pulse. Someone reaches for the shock button.",
    "What does the lecture want instead?",
    [
      {
        text: "Shock at 360 J. Any rhythm on the screen during arrest is shockable.",
        note: "Pulseless electrical activity is organised electricity without a pulse. It is not shockable. A monophasic 360 J dose is for fibrillation or pulseless ventricular tachycardia.",
      },
      {
        text: "CPR, oxygen, access, adrenaline 1 mg as soon as you can and every 3–5 minutes, and work through the Hs and Ts. Do not defibrillate.",
        note: "Correct. The same package is used for asystole. If the next check shows fibrillation or pulseless ventricular tachycardia, change to the shockable path.",
      },
      {
        text: "Adenosine 6 mg, because the QRS might be narrow.",
        note: "Adenosine is for a stable narrow tachycardia with a pulse. There is no pulse here.",
      },
      {
        text: "Transcutaneous pacing at once, before CPR.",
        note: "Pacing is for bradycardia with a pulse, and for high-grade block. This is arrest. CPR comes first.",
      },
    ],
    1,
    "10, 17",
  ),
  item(
    "ecg-block",
    "ECG",
    "Heart block",
    "The PR interval does not change. Every so often a QRS is simply missing. The person is hypotensive and faint.",
    "Which block, and which drug will not fix it?",
    [
      {
        text: "Mobitz I. The PR lengthens, then a beat drops, and atropine is reasonable if they are symptomatic.",
        note: "That is Wenckebach. You can see the lengthening coming. This PR is constant.",
      },
      {
        text: "Mobitz II. The drop is sudden. Atropine will not work. Pace, and do not spend the time on repeated atropine.",
        note: "Correct. The block is below the node. Complete heart block is the other rhythm the lecture exempts from atropine: P and QRS are divorced, and the ventricular rate is often 20–40.",
      },
      {
        text: "First-degree block. A constant long PR with no dropped QRS needs a pacemaker tonight.",
        note: "First degree conducts every P. It is monitored. It is not paced on this lecture unless it progresses.",
      },
      {
        text: "Sinus arrest. The P wave is missing as well as the QRS, and adrenaline is the drug.",
        note: "Sinus arrest drops a whole cycle, P and QRS. Here the story is a conducted PR that sometimes loses only the QRS.",
      },
    ],
    1,
    "11–14, 18",
  ),
  item(
    "ecg-rate",
    "ECG",
    "Rate",
    "A regular rhythm. Four large squares sit between one R wave and the next.",
    "What is the rate, and when would you abandon this method?",
    [
      {
        text: "75 per minute. Use a six-second count instead when the rhythm is irregular, as in fibrillation.",
        note: "Correct. 300 divided by 4 is 75. One large square is 0.20 s. One small square is 0.04 s, and 1500 divided by the small squares is the finer regular-rhythm method.",
      },
      {
        text: "150 per minute. Multiply the large squares by 10.",
        note: "The six-second method multiplies QRS complexes by 10. Large squares are divided into 300.",
      },
      {
        text: "4 per minute. Count the squares and stop.",
        note: "Four squares is the interval, not the rate.",
      },
      {
        text: "300 per minute. The rate is the constant, whatever the interval.",
        note: "300 is the numerator, not the rate, unless the R–R interval is one large square.",
      },
    ],
    0,
    "15",
  ),
  item(
    "ecg-tachy",
    "ECG",
    "Tachycardia",
    "Rate 170, a pulse is present, blood pressure is 78 systolic, and the person is barely answering. The defibrillator is already on.",
    "Which shock, and which mistake does the lecture name?",
    [
      {
        text: "Unsynchronised defibrillation. A fast rate is treated as fibrillation even when there is a pulse.",
        note: "Defibrillation is for fibrillation and pulseless ventricular tachycardia. A shock that lands on the T wave can start fibrillation. That is why sync exists.",
      },
      {
        text: "Synchronised cardioversion now. Sedate if they are awake enough to need it. Do not wait to try a drug first. Confirm sync is on.",
        note: "Correct. Instability is low pressure, a changed mental state, shock, heart failure, or chest pain, at a rate of 150 or more. Flutter on the same table is 50–100 J. Fibrillation is unsynchronised 120–200 J biphasic.",
      },
      {
        text: "Adenosine 6 mg before any shock, because every tachycardia is narrow until proved otherwise.",
        note: "Adenosine is the stable narrow path, after a vagal manoeuvre. This person is unstable. Do not delay the shock for a drug.",
      },
      {
        text: "Atropine 3 mg as a single dose, in case the rate is actually slow.",
        note: "The rate is fast. Atropine’s ceiling on the bradycardia slide is 3 mg in divided 0.5 mg doses, not a treatment for this rhythm.",
      },
    ],
    1,
    "20–21",
  ),
  item(
    "ecg-stemi",
    "ECG",
    "Infarction",
    "Chest pain for forty minutes. ST elevation in V1 to V4, with loss of R-wave progression. The emergency department clock started twelve minutes ago and there is still no 12-lead in the notes. A classmate is finishing the social history.",
    "What is late, and what is the reperfusion target?",
    [
      {
        text: "The history can finish first. A 12-lead within an hour is the standard. Anterior infarction waits for a troponin before the lab is called.",
        note: "The slide wants the 12-lead within 10 minutes of arrival, and says not to delay it for the history. Anterior ST elevation is a STEMI path, not a wait-for-troponin path.",
      },
      {
        text: "The trace is already late. Anterior ST elevation in V1–V4 is left-anterior-descending territory. Primary PCI within 90 minutes of arrival, or a lytic within 30 minutes if PCI is not available.",
        note: "Correct. Two neighbouring leads. Door to balloon 90. Door to needle 30. Aspirin 300 mg chewed is on the treatment list. Reciprocal change is looked for in II, III, and aVF.",
      },
      {
        text: "This is a posterior infarct. V1–V4 elevation is the posterior pattern, confirmed with V7–V9 only.",
        note: "Posterior infarction hides. In V1–V2 you see a tall R, ST depression, and an upright T. V7–V9 confirm it, at 0.5 mm.",
      },
      {
        text: "Lateral infarct, circumflex artery, leads I and aVL only. No time target is given.",
        note: "Lateral leads are I, aVL, V5, and V6. The time targets are on the STEMI slide.",
      },
    ],
    1,
    "26–30, 33–34",
  ),
  item(
    "ecg-rv",
    "ECG",
    "Right ventricle",
    "ST elevation in II, III, and aVF. Blood pressure is low, the neck veins are up, and the lungs are clear. A classmate is about to give nitrate.",
    "What must be checked, and what is withheld?",
    [
      {
        text: "Nothing further. Inferior infarction is treated with nitrate to unload the left ventricle.",
        note: "The right coronary artery supplies the inferior wall in most people on this slide, and it can extend into the right ventricle. Nitrate in that setting drops the pressure hard.",
      },
      {
        text: "A right-sided trace, V4R. If it is elevated, withhold nitrate, diuretic, and morphine. Give fluid carefully. The right ventricle needs filling.",
        note: "Correct. The clinical trio is low pressure, raised venous pressure, and clear lungs. Elevation of at least 1 mm in V4R is the slide’s most sensitive finding. Also watch for block, because the same artery often supplies the node.",
      },
      {
        text: "Posterior leads only. V7–V9 replace the right-sided trace.",
        note: "Posterior leads are a different extra set, used when V1–V2 show the mirror image. They do not answer the right-ventricular question.",
      },
      {
        text: "Atropine, then nitrate. Every inferior infarct is a complete heart block.",
        note: "Block is a risk, not a certainty. Nitrate is still withheld until the right ventricle is excluded.",
      },
    ],
    1,
    "27, 29, 32",
  ),
  item(
    "ecg-q",
    "ECG",
    "Evolution",
    "Day three after an anterior infarct. A Q wave is 0.04 s wide and deeper than a quarter of the R wave. The ST segment has come down.",
    "Which zone has declared itself, and can reperfusion undo it?",
    [
      {
        text: "Ischaemia. ST depression is the permanent mark.",
        note: "Ischaemia is ST depression or T-wave inversion, and the slide calls it reversible.",
      },
      {
        text: "Necrosis. A pathological Q wave is the completed infarct. The slide calls that zone irreversible.",
        note: "Correct. Width at least 0.04 s and depth at least 25% of the R. Injury, the ST elevation around it, is the zone that reperfusion can still save. Serial traces every 15–30 minutes while the diagnosis is in doubt.",
      },
      {
        text: "Injury. A Q wave and ST elevation are the same finding.",
        note: "Injury is ST elevation: 1 mm in the limbs, 2 mm in the chest leads. The Q wave is a later, dead zone.",
      },
      {
        text: "A normal septal Q. Any Q wave under 0.08 s is innocent.",
        note: "The slide’s pathological cut is 0.04 s and a quarter of the R, not 0.08 s.",
      },
    ],
    1,
    "24–25",
  ),
  item(
    "ecg-tcp",
    "ECG",
    "Pacing",
    "Transcutaneous pacing is on. Every spike is followed by a wide QRS. You cannot feel a pulse at the paced rate. The person, who is awake, is in pain from the pads.",
    "Have you captured, and what is this treatment for?",
    [
      {
        text: "Yes. A wide QRS after a spike is capture, even without a pulse.",
        note: "The lecture wants both: the QRS and a palpable pulse. One without the other is not capture.",
      },
      {
        text: "No. Capture is electrical and mechanical. This is a bridge to a transvenous wire, it hurts, and an awake person needs analgesia. It is not the treatment for Mobitz I that is coping.",
        note: "Correct. Rate on the slide is typically 60–80. Current is raised from zero until capture, often somewhere in 50–100 mA. Pads lose contact, so you recheck.",
      },
      {
        text: "Yes, and pacing replaces adrenaline in pulseless electrical activity.",
        note: "Pulseless electrical activity is CPR, adrenaline, and the reversible causes. Pacing is the bradycardia and high-grade block path.",
      },
      {
        text: "No, because a wide QRS means the pads are on the wrong wall. Use the diaphragm of a stethoscope instead.",
        note: "A paced QRS is expected to be wide. The missing piece is the pulse, not the width.",
      },
    ],
    1,
    "18–19",
  ),
  item(
    "lab-abg",
    "LAB",
    "ABG",
    "pH 7.28, PaCO₂ 7.2 kPa, bicarbonate 24 mmol/L. The person is drowsy after morphine.",
    "Which disorder is this, before any compensation?",
    [
      {
        text: "Respiratory acidosis. Ventilation is failing, CO₂ is up, and the pH has fallen. Bicarbonate has not moved yet.",
        note: "Correct. The slide’s normals: pH 7.35–7.45, PaCO₂ 4.7–6.0 kPa, bicarbonate 22–26. Morphine is one of the named causes. Kidneys raise bicarbonate later, over a day or two, and do not overshoot.",
      },
      {
        text: "Metabolic acidosis. Any low pH is a bicarbonate problem.",
        note: "Bicarbonate is still inside 22–26. The CO₂ is the value that moved.",
      },
      {
        text: "Respiratory alkalosis. Drowsiness means they are blowing off CO₂.",
        note: "Alkalosis would show a high pH and a low CO₂. Early asthma and anxiety are the hyperventilation examples.",
      },
      {
        text: "Fully compensated metabolic alkalosis, because the bicarbonate is normal.",
        note: "A normal bicarbonate is not compensation. Compensation would move the bicarbonate up, and a fully restored pH is not what this lecture promises for an acute disorder.",
      },
    ],
    0,
    "4–7",
  ),
  item(
    "lab-mixed",
    "LAB",
    "ABG",
    "The lecture’s ventilated case: pH 7.22, PaCO₂ 6.8 kPa, bicarbonate 17 mmol/L, base excess −10, saturation 98.7% on extra oxygen.",
    "What do you call it?",
    [
      {
        text: "Compensated respiratory acidosis. The low bicarbonate is the kidney repairing the pH.",
        note: "Compensation would push the pH back toward normal. Here both the CO₂ and the bicarbonate are making the blood more acid, and the pH is 7.22.",
      },
      {
        text: "A mixed respiratory and metabolic acidosis. Ventilation is holding CO₂, and a metabolic acid is present as well.",
        note: "Correct. The slide’s actions: tell the doctor, raise rate or tidal volume, look for lactate and a renal or fluid cause, and repeat the gas. Oxygenation on this set is acceptable.",
      },
      {
        text: "Metabolic alkalosis with hypoxaemia. Base excess −10 means alkali.",
        note: "A negative base excess is acid. Saturation is 98.7%, which the slide reads as good oxygenation.",
      },
      {
        text: "Respiratory alkalosis from over-ventilation. CO₂ of 6.8 kPa is low.",
        note: "6.8 is above 6.0. Over-ventilation would drop the CO₂ and raise the pH.",
      },
    ],
    1,
    "36",
  ),
  item(
    "lab-kussmaul",
    "LAB",
    "Acid-base",
    "Deep, rapid breathing. pH low. Bicarbonate low. Potassium high. The person has not been eating, and the glucose is very high.",
    "Which disorder, and which breathing is the compensation rather than the cause?",
    [
      {
        text: "Respiratory acidosis. The fast breathing is why the pH fell.",
        note: "Fast deep breathing in this pattern is Kussmaul, the compensation. The cause is the low bicarbonate.",
      },
      {
        text: "Metabolic acidosis, as in ketoacidosis. The breathing is blowing off CO₂ to lift the pH. It is not the reason the bicarbonate fell.",
        note: "Correct. Acid gain: ketoacidosis, lactate, poisons, renal failure. Alkali loss: diarrhoea. Potassium is high. Shock is on the same list.",
      },
      {
        text: "Metabolic alkalosis from vomiting. Potassium should be high there too.",
        note: "Alkalosis from vomiting raises bicarbonate and lowers potassium. The breathing here is not the vomiting pattern.",
      },
      {
        text: "Respiratory alkalosis of early asthma. Bicarbonate falls as the cause.",
        note: "In respiratory alkalosis the CO₂ falls first and the pH rises. A falling bicarbonate would be the compensation, not the headline.",
      },
    ],
    1,
    "6, 9",
  ),
  item(
    "lab-trop",
    "LAB",
    "Troponin",
    "Chest pain for one hour. The first troponin is 8 μg/L. Someone clears the person because the number is “not very high” and the pain has eased.",
    "What does the lecture say about this marker?",
    [
      {
        text: "A single normal value at one hour excludes infarction. Troponin peaks at 30 minutes.",
        note: "The slide says it rises at 3–4 hours and stays up for 10–15 days. One early sample does not close the case.",
      },
      {
        text: "The slide’s cut is under 14 μg/L, confirmed twice. It is the early marker they want, read with a 12-lead, not instead of one.",
        note: "Correct. Eight is under 14, and it is only one sample, taken before the rise the slide describes. The ECG still has its own clock.",
      },
      {
        text: "Troponin is a heart-failure test. BNP is the infarction test.",
        note: "Troponin is the infarction marker on this lecture. BNP and the ejection-fraction bands are the failure slide.",
      },
      {
        text: "Any troponin over 2 mmol/L is an arrest rhythm.",
        note: "That mixes the lactate cut (over 2 mmol/L is hypoperfusion) with troponin, which is in μg/L.",
      },
    ],
    1,
    "11",
  ),
  item(
    "lab-rdw",
    "LAB",
    "Anaemia",
    "MCV 72 fL. One person has a red-cell distribution width over 14%. Another has a width under 14% and the small cells are even.",
    "How does the lecture separate them?",
    [
      {
        text: "Both are macrocytic. Check B12 only.",
        note: "Macrocytic is an MCV over 100. 72 is microcytic, under 80.",
      },
      {
        text: "Both microcytic. The wider distribution is iron deficiency. The narrow, even one is thalassaemia.",
        note: "Correct. Mean cell haemoglobin under 26 pg and mean cell haemoglobin concentration under 32 g/dL complete the microcytic hypochromic picture. Normocytic is 80–100.",
      },
      {
        text: "The width separates haemolysis from sickle cell, not iron from thalassaemia.",
        note: "Sickle cell lowers the ESR on a different slide. The distribution width is the iron-versus-thalassaemia tool.",
      },
      {
        text: "Iron deficiency has a low width. Thalassaemia has a high one.",
        note: "That reverses the slide. Iron deficiency is the uneven, high-width picture.",
      },
    ],
    1,
    "15",
  ),
  item(
    "lab-wbc",
    "LAB",
    "White cells",
    "Neutrophils 0.6 × 10⁹/L. The person is afebrile. A classmate says isolation can wait until there is a fever, and that lymphocytes are the count that matters for bacteria.",
    "What does the lecture say?",
    [
      {
        text: "Neutrophils under 1.0 × 10⁹/L are the high-risk line. Isolate, avoid new invasive procedures, and watch for fever. Neutrophils, not lymphocytes, are the bacterial signal when they are high.",
        note: "Correct. Leukopenia is a total white count under 4.0. Leukocytosis is over 11.0. Lymphocytes point to viruses. Eosinophils to allergy or parasites.",
      },
      {
        text: "Only a total white count over 11 matters. Neutrophils are not separated.",
        note: "The differential is the point of the slide. The neutrophil threshold is stated on its own.",
      },
      {
        text: "Lymphocytes under 1.0 require isolation. Neutrophils are the viral line.",
        note: "That swaps the two lines.",
      },
      {
        text: "A normal neutrophil count is 150–400. This result is not low.",
        note: "150–400 × 10⁹/L is the platelet range, not the neutrophil cut.",
      },
    ],
    0,
    "17",
  ),
  item(
    "lab-clot",
    "LAB",
    "Coagulation",
    "One person is on warfarin. Another has just been started on heparin. You have PT, INR, and APTT in front of you.",
    "Which test watches which drug?",
    [
      {
        text: "APTT for warfarin, PT for heparin. INR is only a D-dimer.",
        note: "That swaps the pathways. D-dimer is a separate row, under 500 ng/mL.",
      },
      {
        text: "PT and INR for warfarin, the extrinsic path. APTT for heparin, the intrinsic path.",
        note: "Correct. INR 2.0–3.0 for many indications, 2.5–3.5 for some mechanical valves, and over 4.5 is the bleeding-risk figure on the slide. APTT 25–35 seconds. Fibrinogen falls in DIC.",
      },
      {
        text: "Both drugs are watched with the platelet count alone.",
        note: "Platelets are haemostasis, normal 150–400 × 10⁹/L. They are not the monitoring test named for these two drugs.",
      },
      {
        text: "INR for heparin. A rising INR means the heparin infusion is therapeutic.",
        note: "Heparin is the APTT. INR is the standardised PT.",
      },
    ],
    1,
    "18",
  ),
  item(
    "lab-salt",
    "LAB",
    "Sodium and water",
    "After a head injury: dry mouth, low sodium, high urine sodium, high urine output. Someone prescribes fluid restriction for SIADH.",
    "Why might that be the wrong syndrome?",
    [
      {
        text: "It is diabetes insipidus. Sodium is low and the urine is concentrated.",
        note: "Insipidus is a lack of ADH: high sodium, huge volumes of dilute urine, and desmopressin. This sodium is low.",
      },
      {
        text: "Cerebral salt wasting is hypovolaemic. SIADH is not. Restricting fluid in wasting deepens the volume loss. Wasting needs salt and volume.",
        note: "Correct. Both can show a low sodium and a concentrated urine. The volume status is the split. SIADH is restricted, or given hypertonic saline if severe. The lecture says treating wasting as SIADH can be fatal.",
      },
      {
        text: "They are the same condition. Restriction is correct for both.",
        note: "The slide exists to stop that merger.",
      },
      {
        text: "Low sodium after a head injury is always fluid overload from too much saline.",
        note: "The three syndromes are distinguished. Overload is not the lecture’s category here.",
      },
    ],
    1,
    "22",
  ),
  item(
    "lab-renal",
    "LAB",
    "Kidney",
    "Urine output has been 0.3 mL/kg/h for several hours. Creatinine is rising. eGFR is 22 mL/min/1.73 m².",
    "Which words does the lecture use?",
    [
      {
        text: "Normal output, because anything under 1 mL/kg/h is acceptable. eGFR 22 is G2.",
        note: "Normal output is at least 0.5 mL/kg/h. G2 is 60–89. G5 is under 15.",
      },
      {
        text: "Oliguria, under 0.5 mL/kg/h. eGFR 22 is G4, severely decreased. Creatinine is the more specific of the two waste markers.",
        note: "Correct. Anuria on the slide is under 100 mL in a day. Urea also rises in dehydration, a high-protein diet, and gut bleeding, so it is less specific. G3 is 30–59. G1 is 90 or above.",
      },
      {
        text: "Anuria. Any fall in output below 1 mL/kg/h is anuria, and the eGFR stage is G5.",
        note: "Anuria is the daily volume cut, not this hourly rate. G5 is under 15.",
      },
      {
        text: "The eGFR cannot be staged without a urine dipstick for glucose.",
        note: "Staging on the slide is by eGFR. Albuminuria belongs in the CKD assessment, but glucose on the dipstick is a diabetes finding.",
      },
    ],
    1,
    "24",
  ),
  item(
    "lab-liver",
    "LAB",
    "Liver",
    "Dark urine, pale stools, high conjugated bilirubin, high ALP and GGT. ALT is only mildly up. Yesterday’s ammonia was 90 μmol/L and the person is confused, with a flap.",
    "Which pattern, and what is the ammonia finding?",
    [
      {
        text: "Pre-hepatic jaundice. Haemolysis raises conjugated bilirubin and darkens the urine.",
        note: "Pre-hepatic is unconjugated bilirubin and no dark urine. The urine and the pale stool are the obstruction pattern.",
      },
      {
        text: "Post-hepatic, obstructive. ALP and GGT are the cholestatic pair. Ammonia above the slide’s normal, with confusion and a flap, is encephalopathy.",
        note: "Correct. Hepatic jaundice raises both bilirubin fractions and ALT/AST. ALT is the more liver-specific enzyme. AST:ALT over 2 suggests alcohol. Albumin 35–50 g/L is the synthetic marker. The slide’s ammonia normal is under 50 μmol/L.",
      },
      {
        text: "Hepatocellular injury only. ALP is the hepatitis enzyme.",
        note: "ALT and AST are the hepatocellular pair. ALP and GGT are cholestasis.",
      },
      {
        text: "Normal liver tests. Ammonia of 90 is inside the reference range on the slide.",
        note: "The slide puts normal ammonia under 50 μmol/L.",
      },
    ],
    1,
    "26",
  ),
  item(
    "lab-lipase",
    "LAB",
    "Pancreas",
    "Epigastric pain through to the back. Amylase is three times the upper limit and already falling on day four. Lipase is still high, also three times the limit.",
    "Which enzyme does the lecture trust more, and what confirms the diagnosis?",
    [
      {
        text: "Amylase, because it stays up for two weeks. Lipase is too non-specific.",
        note: "Amylase rises at 2–12 hours and is back toward normal in 3–5 days, and it also rises in parotitis. Lipase stays up longer and is the more specific one.",
      },
      {
        text: "Lipase. Either enzyme at three times the upper limit confirms pancreatitis on this slide. Amylase may already have faded.",
        note: "Correct. The slide’s illustrative normals are amylase under 100 U/L and lipase under 60 U/L. Confirmation is the three-times rule, not a single bare elevation.",
      },
      {
        text: "Neither. Pancreatitis is a troponin diagnosis.",
        note: "Troponin is myocardium. These two enzymes are the pancreas slide.",
      },
      {
        text: "CA 19-9. A tumour marker confirms acute pancreatitis.",
        note: "CA 19-9 is associated with pancreatic cancer and is not a diagnostic test on its own. It is not the acute enzyme.",
      },
    ],
    1,
    "28, 33",
  ),
  item(
    "lab-critical",
    "LAB",
    "Critical values",
    "Potassium comes back at 6.8 mmol/L. The person is on the ward, talking, and the breakfast tray has just arrived.",
    "What does the critical-value slide require?",
    [
      {
        text: "Nothing tonight. The reference range goes up to 6.5, and a talking person cannot have a dangerous potassium.",
        note: "The reference range is 3.5–5.0. Over 6.5 is the critical-high cut. A normal conversation does not cancel it. Outside 3.5–5.0 the lecture already wants a monitor.",
      },
      {
        text: "Call now, put them on a monitor, and document who you told, when, and what they said. Use SBAR.",
        note: "Correct. The same slide’s other cuts include glucose under 2.8 or over 22 mmol/L, sodium under 120 or over 160, haemoglobin under 7 g/dL, pH under 7.20, and platelets under 20 × 10⁹/L. Know the hospital’s own thresholds as well.",
      },
      {
        text: "Repeat it in the morning. Critical potassium starts at 8 mmol/L.",
        note: "6.5 is the slide’s critical high. Waiting until morning is the error the slide is written to prevent.",
      },
      {
        text: "Give insulin without telling anyone, because the protocol replaces the call.",
        note: "The slide’s action is notification and the protocol, and the call is documented. It does not say to treat in silence.",
      },
    ],
    1,
    "19, 37",
  ),
];

const seen = new Set<string>();
for (const question of A_QUESTIONS) {
  if (seen.has(question.id)) throw new Error(`Duplicate NUR501 id ${question.id}`);
  seen.add(question.id);
  if (question.choices.length !== 4) throw new Error(`${question.id} needs four choices`);
  if (!question.choices[question.answer]?.note.startsWith("Correct.")) {
    throw new Error(`${question.id} answer note does not start with Correct.`);
  }
}
