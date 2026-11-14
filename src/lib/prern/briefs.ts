import type { PreTopicId } from "./types";

export const PRE_TOPICS: Record<
  PreTopicId,
  { n: string; title: string; line: string; source: string }
> = {
  SURG: {
    n: "01",
    title: "Surgical nursing",
    line: "Vital signs, the operation day, and the return to the ward.",
    source: "Surgical Nursing FAQ, Dr Sze Kin Yan, 2 August 2023",
  },
  MED: {
    n: "02",
    title: "Medical nursing",
    line: "The same vital-sign cuts, then lungs, heart, stroke, and kidneys.",
    source: "MED Nursing FAQ, Dr Sze Kin Yan, 2 August 2023",
  },
  CP: {
    n: "03",
    title: "Clinical practicum",
    line: "How to arrive, how to stay useful, and the bedside skills.",
    source: "Clinical Practicum Survival Package, beginner, 25 May 2024",
  },
  DRUG: {
    n: "04",
    title: "Drug list",
    line: "Class, suffix, and brand name, as the note writes them.",
    source: "Student drug list. Every page says to fact-check it.",
  },
  LAB: {
    n: "05",
    title: "Laboratory results",
    line: "What the number means for the person, and what the nurse does next.",
    source: "Implication of laboratory result for patient, Dr Sze Kin Yan, 23 May 2024",
  },
};

export const PRE_BRIEFS: Record<
  PreTopicId,
  { lead: string; sections: { heading: string; page: string; points: string[] }[] }
> = {
  SURG: {
    lead: "The surgical deck is a ward manual. Report the team nurse. Recheck before you chart. The numbers below are the numbers printed in that FAQ.",
    sections: [
      {
        heading: "Where you may be sent",
        page: "3–4",
        points: [
          "Surgery on this list: hepatobiliary and pancreatic, liver transplant, oesophagus and gastrointestinal, colorectal, breast, endocrine, urology, general surgery, plastics, head and neck, vascular, neurosurgery, thoracic, and ear, nose and throat.",
          "Orthopaedics and traumatology is named as a practicum site, not as one of the department’s own teams.",
        ],
      },
      {
        heading: "Temperature",
        page: "8–11",
        points: [
          "Printed normal range: 36.0–37.6°C, tympanic. A cold drink, earwax, or a probe that does not straighten the canal reads low. A hot drink, or lying on the ear, reads high.",
          "At or under 35.9°C: recheck both ears and chart the higher result that is inside, or nearest, the normal range. Still low: more blanket, bed rest, rails if dizzy, blood pressure and pulse, recheck in 15–30 minutes. Bair Hugger is the forced warm-air device named if blankets fail.",
          "37.6–38.5°C is the low-grade band. At or over 38.5°C is high fever: also take blood pressure, pulse and saturation, and the team nurse phones the doctor. Ice pad with a cover, fluids if allowed, fewer blankets. Panadol 500 mg oral or rectal, every 4 hours as needed, is the example, and only as ordered.",
        ],
      },
      {
        heading: "Fever that might be sepsis",
        page: "12–15",
        points: [
          "Septic shock, as defined here: a body-wide infection with dangerously low blood pressure. Most often the very old and the very young, and people whose immunity is weak. Bacteria, fungi, and rarely viruses.",
          "A septic workup the doctor may order: blood culture, complete blood picture, liver and renal function, mid-stream or catheter urine culture, sputum culture, chest X-ray.",
        ],
      },
      {
        heading: "Blood pressure",
        page: "16–18",
        points: [
          "A cuff that is too narrow reads the systolic 10–40 mmHg high. A loose cuff reads low. A cuff over clothing can add 10–50 mmHg. Above heart level reads low.",
          "Systolic over 160: correct cuff, stop talking, both arms, then in bed if it stays high. Headache is reported at once. Recheck in 15–30 minutes.",
          "Systolic under 90: both limbs, then back to bed, then try with the feet 15–30 degrees above the head. Dizzy: report at once and put the rails up. Conscious level is checked in the same sequence.",
        ],
      },
      {
        heading: "Saturation and glucose",
        page: "19–24",
        points: [
          "Saturation under 90%: tell the team nurse at once, exclude a cold or poorly perfused limb, chart the higher of the two limbs. Sputum sounds: clear the airway. Still low after 20–30 seconds: nasal cannula at 2, 4 or 6 L/min as prescribed, then a 50% or 100% mask, and call the doctor.",
          "COPD target on this slide is 88–92%. Chronic high carbon dioxide is said to switch off the carbon-dioxide drive, so a high oxygen flow can slow the breathing. The slide’s line is that too much oxygen and the person ‘forgets’ to breathe. Watch them, and an arterial gas is the investigation named.",
          "Glucose under 4 mmol/L: conscious person gets orange juice or milk; unconscious gets intravenous dextrose 50% as prescribed. Over 16: withhold the night snack, urine ketones, team nurse phones at once, subcutaneous insulin may be ordered, and a drip if ketoacidosis is a risk. The easy band printed for memory is 4–8 mmol/L.",
        ],
      },
      {
        heading: "Before theatre",
        page: "28–42",
        points: [
          "PPP means Please Prepare Patient. Bloods named: complete blood picture, platelets, haemoglobin, INR, liver and renal function including sodium and potassium, random glucose.",
          "Drugs the doctor may withhold: aspirin at least 3 days, heparin, enoxaparin, Plavix for 1 week, warfarin, and anti-hyperglycaemic drugs when the person is fasting. Five rights for the pre-medication.",
          "Identity is name, HKID, and bracelet. Last food and drink. Consent signed by surgeon, anaesthetist, and the person, with the operation and the diagnosis. Allergy script on the slide: food, drugs, and plaster. Loose teeth or dentures, local or general anaesthetic, contact lenses, nail polish, and all metal jewellery off.",
          "A pacemaker: the team nurse contacts the company representative, on the example page.",
        ],
      },
      {
        heading: "Coming back",
        page: "45–56",
        points: [
          "Fasting after surgery, if the order is diet as tolerated: general anaesthetic 3 hours, spinal 1.5 hours, local not required. Confirm with the team nurse before any drink.",
          "On return: blood pressure, pulse, temperature, continuous saturation. Thyroidectomy gets the recovery tray and is sat up at 30 or 45 degrees unless another order exists. Mark the ooze on the outer dressing. Heavy ooze goes to the team nurse.",
          "Spinal anaesthesia is local anaesthetic into the subarachnoid space. Local anaesthetic is infiltration, tumescent technique, or a nerve block. Monitored anaesthesia care is intravenous drug with the same vital-sign watch as a general anaesthetic, used when deep anaesthesia is not required.",
          "Intramuscular sites drawn: deltoid (mind the deep brachial artery and the radial nerve), ventrogluteal between iliac crest, anterior superior iliac spine and greater trochanter, and vastus lateralis. Angles drawn: intramuscular 90°, subcutaneous 45°, intravenous 25°, intradermal 10–15°.",
        ],
      },
      {
        heading: "Drips, pain, wounds",
        page: "52–60",
        points: [
          "Drop factor used throughout the table is 20 drops per mL. A 500 mL bag over 4 hours is about 42 drops a minute, about 4 drops in 5 seconds.",
          "WHO ladder as drawn. Mild: paracetamol, aspirin or an NSAID, with or without an adjuvant. Mild to moderate: codeine or tramadol, with or without a non-opioid and an adjuvant. Moderate to severe: morphine or fentanyl, same additions.",
          "Wound words to be able to say: epithelialisation, granulation, slough, necrotic, dry eschar. Exudate: serous, blood, pus. Surrounding skin: intact, abraded, erythema, oedema, macerated.",
        ],
      },
    ],
  },
  MED: {
    lead: "Medicine uses the same vital-sign pages as the surgical FAQ, then stays with four systems. Where the two decks print the same cut, it is the same cut.",
    sections: [
      {
        heading: "The department",
        page: "2–4",
        points: [
          "Cardiology, endocrinology, gastroenterology and hepatology, haematology, geriatrics, infectious disease, medical oncology, nephrology, neurology, respiratory medicine, rheumatology and palliative care.",
        ],
      },
      {
        heading: "Lungs",
        page: "26–31",
        points: [
          "COPD here is airflow obstruction from chronic bronchitis (mucus), emphysema (enlarged air spaces, lost recoil), with or without asthmatic hypersensitivity. The two jobs of the lung: oxygen in, carbon dioxide out.",
          "Type I, hypoxaemic, is inadequate oxygen transfer. The commonest mechanism named is shunt: perfusion without ventilation, as in pneumonia, collapse, or pulmonary oedema. Diffusion failure (fibrosis, ARDS, oedema) is the other.",
          "Type II, hypercapnic, is failure to clear carbon dioxide: hypoventilation (fatigue, drugs, brainstem injury) or dead space, ventilation without perfusion, as in COAD and pulmonary embolism.",
          "Saturation 85–90% is called the critical threshold. Mild hypoxaemia is under 90% and under 10 kPa: nasal cannula 2–4 L/min or a simple mask at 4 L/min. Moderate, under 85% and under 8 kPa: oxygen, with or without invasive ventilation. Severe, under 60% and under 4 kPa: invasive ventilation.",
        ],
      },
      {
        heading: "The arterial gas",
        page: "32–35",
        points: [
          "Acceptable box on the gas page: pH 7.38–7.42, bicarbonate 22–28 mmol/L, PaO2 75–100 mmHg, PaCO2 38–42 mmHg, saturation 94–100%.",
          "The six steps use a wider pH cut: under 7.35 acidosis, over 7.45 alkalosis. Then carbon dioxide and bicarbonate for the primary change and the compensation, base excess for severity, oxygen for hypoxaemia, then the person in the bed, then the name of the disorder. Do not treat the two pH sentences as one number.",
          "Respiratory acidosis (COPD, hypoventilation): carbon dioxide is the primary rise. Low-dose oxygen for COPD, more ventilation if they are not ventilating. Metabolic acidosis (ketoacidosis, chronic renal failure, diarrhoea): bicarbonate is the primary fall. Respiratory alkalosis: anxiety and hyperventilation, bring the ventilation down. Metabolic alkalosis: vomiting, other gut loss, diuretics. Check sodium and chloride. Diamox is the drug named to increase bicarbonate loss.",
        ],
      },
      {
        heading: "Inhalers, as printed",
        page: "37–42",
        points: [
          "Salbutamol (Ventolin) and terbutaline (Bricanyl) relax bronchial muscle. Ventolin or Combivent 2–4 puffs, four times a day up to every 4 hours. Bricanyl durule 5–7.5 mg twice a day, or 0.5 mg subcutaneous every 8 hours as needed. Side effects named: tachycardia, tremor, low potassium, high glucose. The slide says they do not reduce exacerbations or mortality.",
          "Ipratropium (Atrovent) can be mixed with a beta-agonist. 2–4 puffs, and it takes about 20 minutes. Theophylline (Nuelin SR, aminophylline) has more side effects and little effect in the acute hour.",
          "Hydrocortisone 100 mg intravenous every 6 or 8 hours. Beclomethasone aerosol 250 micrograms, 2–4 puffs. They reduce oedema in the small airways.",
          "Metered-dose order when more than one is due: the short-acting bronchodilator first, for immediate opening, then the others. Shake, breathe out, inhale as you press, hold the breath.",
        ],
      },
      {
        heading: "Heart",
        page: "45–50",
        points: [
          "Heart failure is not called a disease of its own. The ventricle cannot meet metabolic need because filling or ejection has failed. Causes named: chronic hypertension, coronary disease, valve disease. It is managed as a long condition.",
          "Coronary disease is called the most common heart disease, and atherosclerosis the principal cause.",
          "Infarction is prolonged loss of oxygen. Other causes listed besides a plaque: spasm, clot, electrolytes, trauma to the artery. Pain or pressure may go to neck, jaw, shoulder, or arm. ECG, labs, and the story are how the damage is shown.",
        ],
      },
      {
        heading: "Stroke",
        page: "64–71",
        points: [
          "Symptoms listed: one-sided numbness of face, arm and leg, a sudden wry mouth with drooling, slurred speech or trouble understanding, a sudden severe headache, trouble seeing, trouble swallowing, dizziness, lost balance, nausea and vomiting with no known cause.",
          "The four first steps printed: clear the mouth, lay the person on their side and keep them warm, press the Easylink alarm if there is one, then immediate medical treatment. Acute stroke unit care is what the slide credits with saving lives.",
          "Haemorrhagic stroke: the slide says there is no drug that stops the damage already done. The first three months are called the golden period for rehabilitation.",
        ],
      },
      {
        heading: "Kidneys",
        page: "73–81",
        points: [
          "Chronic renal failure is the end of a gradual loss. Waste that should leave in the urine stays in the body fluid. Stage 5, or end-stage disease, is when replacement is required permanently. A creatinine of 12 mg/dL is the figure given for end-stage. A urea above 25 mg/dL is called renal damage. Causes drawn: diabetes, inflammation, hypertension.",
          "Two options at the end: dialysis, or transplant. Dialysis does not cure the disease. Haemodialysis is called the most common form. The slide says a transplant is generally the better solution because dialysis is intensive.",
          "Peritoneal dialysis is done at home and replaces fluid and waste removal, not the underlying disease. Continuous ambulatory dialysis: usually three exchanges in the day and an overnight dwell, no machine required while the fluid is in. A cycler is the overnight machine when one is used. Automated peritoneal dialysis is the machine version.",
        ],
      },
    ],
  },
  CP: {
    lead: "This is the beginner practicum package. The vital-sign cuts match the FAQ. What is new is how you behave on a ward, and the skills you are expected to have ready.",
    sections: [
      {
        heading: "Before the first shift",
        page: "1",
        points: [
          "Attitude, in the package’s own terms: start the work yourself. If you do not know, say so at once. If you are wrong, say sorry plainly. If you cannot finish what you were asked, say so. Do the routine at the right time and report it. Ask the ward staff patiently. Do not answer back.",
          "Ask on day one: the ward telephone, and leave yours. For a first practicum, confirm the arrival time with your clinical teacher. The example is 07:45 at the front door. Confirm A, P and N hours with the manager or the in-charge. Ask the earliest time for the blood-pressure round (example: 10:00 for an 11:00 round) and for haemostix (example: 10:30 for 11:00), and the times for feeds and dressings. Find the treatment room, the equipment room, and the linen room. Charting is different in every hospital.",
        ],
      },
      {
        heading: "If the ward has no time for you",
        page: "2",
        points: [
          "First: know the routine clock and hit it. Bed, vital signs, haemostix, and an on-time report. Staff help the student who is already on time.",
          "Then help with meals, water, and medicines. Chart intake and output. Check that the cup really belongs to that person before you give it.",
          "Learn the common drugs of that ward and what must be told to the person. Listen to how a nurse calls a doctor and how a specimen is explained. Stock the feed trolley and the haemostix supplies. Read the patient leaflets. Know the specialty, the usual operations, and what must be explained beforehand, including fasting and steroid cover.",
        ],
      },
      {
        heading: "Medicines that need a number first",
        page: "11",
        points: [
          "Three checks and seven rights are not called enough. Antihypertensives and diuretics: if the doctor has not written a personal limit, withhold when systolic is under 100 mmHg or the pulse is under 60, and tell the team nurse. Identity before you even look at the chart.",
          "Any cardiac drug: look at the pulse. Under 60, withhold. Digoxin: listen to the apex, do not trust the wrist alone.",
          "A hypoglycaemic drug: haemostix under 4 mmol/L, withhold. Potassium or sodium supplements: if potassium is over 5.1 or sodium over 145, withhold. A potassium-removing resin still needs the laboratory result.",
          "Warfarin is given in the afternoon, after the INR. A common keep-range printed here is 1.5–2.5, and the package says each person may have a different range. Look for skin bruising and confirm the range.",
          "No rectal drug, including a phosphate enema or Dulcolax, for seven days after rectal or lower-bowel surgery. The reason given is a burst wound and peritonitis.",
          "Nil by mouth means the oral drugs too, unless the order says except medication. Even then, insulin and other diabetes drugs are withheld because the person is not eating. Fasting from midnight before surgery is the same, and the oral drugs that are still given use about 50 mL of water at 07:00 so the list is not cancelled.",
        ],
      },
      {
        heading: "Dressing, catheter, tube",
        page: "17–35",
        points: [
          "The seven things to take to a wound: gloves, a bag, plain gauze, micropore, a dressing applicator, 10 mL of single-use saline, and a large Tegaderm used as a ruler.",
          "A once-only catheterisation uses a Fr 10 Nelaton, black, round tip. Scan the bracelet and the worksheet before you open anything. Tisept is chlorhexidine 0.015% with cetrimide 0.15%. Unisept is chlorhexidine 0.05%.",
          "A nasogastric tube feeds, gives drugs, takes a specimen, drains, or washes out a poisoning. It needs a prescription. Two identifiers. Choose the nostril with better airflow. Avoid a recent nasal operation, a septal defect, or facial trauma.",
          "The package cites the National Patient Safety Agency on chest films: from 2005, 21 deaths and 79 serious harms from tubes in the lung, 45 of them from a misread film, 12 of those fatal. A film is not a decoration. Someone has to read it properly.",
          "Before a feed, aspirate pH at or under 5.5. Residual over 250 mL, or over half the last feed, on two feeds in a row: tell the doctor. Residual over 500 mL: withhold the feed and tell the nurse in charge. Sit the person up, at least 30 degrees, for 30 minutes after. Flush as prescribed, often 50 or 100 mL at the end, and 30 mL every 4 hours if the feed is continuous.",
        ],
      },
      {
        heading: "Writing, oxygen, the trace",
        page: "42–50",
        points: [
          "A note names the old device and that it came out intact, the new size, what you aspirated and the pH or the urine volume, how the person tolerated it, whether they understood the teaching, and what you did about a risk. Wound notes add size, the kind of discharge, and the surrounding skin.",
          "Oxygen by cannula or mask: explain no smoking and no self-adjustment. Watch the response.",
          "Three-lead colours are printed twice and they do not match. The English lines say red on the right under the clavicle, yellow on the left at the same height, green low on the left ribs. The Chinese lines say white on the right, black on the left, red at the apex. Use the diagram your ward uses, and do not mix the two schemes.",
          "Twelve leads use ten electrodes. Chest colours as printed: V1 red, right 4th space beside the sternum. V2 yellow, left 4th space. V3 green, between V2 and V4. V4 brown, 5th space, midclavicular. V5 black, between V4 and V6. V6 purple, 5th space, mid-axillary line.",
        ],
      },
    ],
  },
  DRUG: {
    lead: "Every page of this list says to fact-check it. Learn the class, the suffix, and which brand name sits on which generic. Do not treat a dose here as the dose on your ward.",
    sections: [
      {
        heading: "Pressure and the heart",
        page: "1–2",
        points: [
          "ACE inhibitors end in -pril. Zestril is lisinopril, Capoten is captopril, Altace is ramipril, Renitec is enalapril.",
          "Methyldopa is the centrally acting drug the note singles out for hypertension in pregnancy.",
          "Selective alpha-1 blockers end in -osin. Prazosin (Minipress) and terazosin (Hytrin) are written for both blood pressure and prostate symptoms.",
          "Beta blockers end in -olol. Metoprolol (Betaloc) and atenolol (Tenormin) are the selective ones. Propranolol (Inderal) and carvedilol (Dilatrend) are the non-selective ones, and they are also listed under angina and rhythm.",
          "Dihydropyridine calcium blockers end in -pine and the note says they act mainly on vessel muscle: nifedipine (Adalat), amlodipine (Norvasc), nimodipine, felodipine. Verapamil (Isoptin) and diltiazem (Herbesser, Cartia) are the non-dihydropyridines: more effect on rate and contractility.",
          "Hydralazine (Apresoline) is the direct vasodilator. Angiotensin receptor blockers end in -sartan. They block angiotensin II at the type-1 receptor, widen vessels, and reduce aldosterone. Examples written: losartan, valsartan, candesartan, irbesartan.",
          "Nitrates for angina: isosorbide dinitrate (Isordil), isosorbide mononitrate (Elantan), glyceryl trinitrate (Angised). Dipyridamole (Persantin) is the antiplatelet on that page.",
          "Digoxin (Lanoxin) inhibits the sodium-potassium pump, raises calcium in the cell, and is listed for atrial fibrillation, flutter, and heart failure. Amiodarone (Cordarone) is class III. Lignocaine (Xylocaine) is a local anaesthetic and a rhythm drug. Phenytoin (Dilantin) is listed as both an anticonvulsant and a rhythm drug.",
        ],
      },
      {
        heading: "Gut and lungs",
        page: "3–8",
        points: [
          "Antacids and simethicone (Gelusil is aluminium hydroxide, magnesium hydroxide, and simethicone), then ulcer drugs, anti-emetics, laxatives, anti-diarrhoeals, gallstone and liver drugs, and haemorrhoid preparations. Learn which name is in which of those seven rows rather than memorising a dose.",
          "Respiratory rows: a bronchodilator (ipratropium is Atrovent), a corticosteroid, a mucolytic, an expectorant, a non-opioid cough suppressant, and an opioid one. Codeine is the opioid antitussive, and the note also calls it an analgesic.",
        ],
      },
      {
        heading: "Brain, sugar, water, pain",
        page: "9–16",
        points: [
          "Anticonvulsants are grouped as barbiturates, benzodiazepines, hydantoins, and the succinimides. Benzodiazepines named include diazepam and lorazepam. Parkinson drugs are a separate row.",
          "Insulin is written for ketoacidosis and for both type 1 and type 2 diabetes. The oral agents sit in a comparison table: learn the class of each name, not a sliding scale.",
          "Furosemide is Lasix, the loop diuretic on the genitourinary page. Other diuretics are in the table beside it. Read the mechanism line for each rather than swapping them.",
          "Paracetamol (Panadol) is the non-opioid analgesic and antipyretic. Opioids are a different row. Do not file paracetamol with the anti-inflammatories.",
        ],
      },
      {
        heading: "The rest of the list",
        page: "17–29",
        points: [
          "Chlorpheniramine is Piriton, the antihistamine. Prednisolone and hydrocortisone are the corticosteroids for severe inflammation, immune suppression, and replacement.",
          "Lorazepam (Ativan) is filed under anti-anxiety. Antipsychotics are the next block. Doxorubicin (Doxil) is an antitumour antibiotic. Antimetabolites are a separate antitumour row.",
          "Allopurinol (Zyloric) inhibits xanthine oxidase and lowers uric acid. It is written for chronic gout.",
          "Warfarin is the oral anticoagulant. Antiplatelet drugs are not the same row. Know which test the note attaches to which drug before you mix them.",
          "Thiamine is vitamin B1. Throat lozenges (Dequadin is dequalinium, and Strepsils) are a local preparation, not an antibiotic course.",
          "Activated charcoal is the detoxifying agent. The anti-infective pages then run antibiotic, anti-tubercular (isoniazid is Rimifon), antiviral, and antifungal. Erythromycin is the macrolide example.",
        ],
      },
    ],
  },
  LAB: {
    lead: "Dr Sze, 23 May 2024. These are this lecture’s ranges, not the medical FAQ’s gas box. That FAQ prints carbon dioxide 38–42 mmHg and bicarbonate 22–28. Here carbon dioxide is 35–45 mmHg and bicarbonate is 22–26. Creatinine is printed in millimoles. Read that line before you treat a number as normal.",
    sections: [
      {
        heading: "What the lecture opens with",
        page: "2",
        points: [
          "The common blood tests named on the second page: complete blood count, liver and renal function, clotting (APTT, PT, INR), thyroid function, Astrup (the arterial blood gas), and tumour markers. Cardiac enzymes come at the end and are not on that opening list.",
        ],
      },
      {
        heading: "White cells and haemoglobin",
        page: "4–12",
        points: [
          "White cells 3.89–9.93 × 10⁹/L. Leukopenia is the low count: HIV, autoimmune disease, marrow damage, lymphoma, severe infection, liver and spleen disease, lupus, radiation, and some antibiotics. Leukocytosis is the high count: smoking, tuberculosis, marrow tumours, leukaemia, arthritis and bowel inflammation, stress, exercise, tissue damage, pregnancy, allergy, asthma, and corticosteroids.",
          "Haemoglobin 11.5–14.8 g/dL. A low result is anaemia. Causes named: blood loss, lack of iron, B12 or folate, marrow replaced by cancer, chemotherapy, kidney failure, sickle cell, thalassaemia.",
          "More supplement than the person needs does not improve anaemia. Transfusion is for acute blood loss or severe haemolysis when tissue perfusion has fallen. Intravenous fluid replaces volume. It is not the transfusion.",
          "The anaemia assessment asks about medicines that suppress marrow, cause haemolysis, or interfere with folate; alcohol, amount and duration; family history; extreme exercise, which can reduce red-cell production and survival; and diet.",
          "The three nursing diagnoses: fatigue from less haemoglobin and less oxygen carried; nutrition less than body requirements; tissue perfusion from insufficient haemoglobin and haematocrit. Goals add compliance and no complications.",
          "For fatigue, balance activity and rest. Chronic anaemia still needs some activity, or the person deconditions. Alcohol interferes with the use of nutrients. Diet teaching includes the family and the food they actually cook. During a transfusion, watch vital signs and the pulse oximeter.",
          "A high haemoglobin is expected at altitude and in people who smoke. Dehydration makes it falsely high, and the number falls when fluid is restored. Less common causes: emphysema, some tumours, polycythaemia rubra vera, and erythropoietin abused for blood doping.",
        ],
      },
      {
        heading: "Platelets",
        page: "13–17",
        points: [
          "Platelets 154–371 × 10⁹/L. A low count is thrombocytopenia: the marrow is not making enough, or platelets are being used or destroyed. Named examples: hepatitis, HIV, aspirin, ibuprofen, leukaemia, lymphoma, sepsis, cirrhosis, toxic chemicals.",
          "Corticosteroids try to raise the count. Intravenous immunoglobulin is for autoimmune disease and acute infection. Rho(D) immune globulin (WinRho) is the alternate to that immunoglobulin. Rituximab is for lymphoma, leukaemia, and autoimmune disease after splenectomy.",
          "Splenectomy is for adults with immune thrombocytopenia when medicines fail. Packed red cells or platelets replace what was lost. Plasma exchange, the patient’s plasma out and donor plasma in, is the treatment named for thrombotic thrombocytopenic purpura.",
          "Look for nosebleed, coughing blood, gum bleeding, and purpura. No intramuscular or subcutaneous injection. Small needle, long gentle pressure. No anticoagulant unless a doctor agrees. No rectal medicines, enemas, or vaginal douches. Soft toothbrush, no floss, no straining, a soft diet, and enough fluid to prevent constipation.",
          "Nosebleed: high Fowler, pressure, ice, no nose-blowing, and drops so the mucosa stays moist. Blood pressure only when needed. Bed low, rails up, no bare feet, no tight clothes, no contact sport, no alcohol. Avoid aspirin and ibuprofen, and pesticides, arsenic, and benzene. Vaccinate against mumps, measles, rubella, and chickenpox.",
          "A high count is thrombocytosis, usually reactive: lung, gut, ovarian, or breast cancer, lymphoma, iron-deficiency or haemolytic anaemia, inflammatory bowel disease, rheumatoid arthritis, tuberculosis, a removed spleen, oral contraceptives. Clotting and bleeding can both happen, because the extra platelets may not work.",
          "Treat the cause. Iron may bring the count down when inflammatory bowel disease is the reason. Do not set out to lower the count itself. Above 1,000,000/μL, aspirin 65 mg daily may be considered for the rare stroke or thrombosis. That aspirin is not the advice for a low count.",
        ],
      },
      {
        heading: "Neutrophils",
        page: "18–22",
        points: [
          "Neutrophils 2.01–7.42 × 10⁹/L. They are most of the white cells that lead the response. A high percentage is neutrophilia and is read first as infection, most likely bacterial. The same slide also lists inflammation that is not infection, injury, surgery, tobacco, stress, hard exercise, steroids, heart attack, and chronic myeloid leukaemia.",
          "Neutropenia is the low count, often a drug, including chemotherapy. Also marrow failure, aplastic anaemia, Kostmann syndrome, cyclic neutropenia, hepatitis A, B or C, HIV, sepsis, rheumatoid arthritis, leukaemia, myelodysplastic syndrome. Febrile neutropenia is called a medical emergency.",
          "Mild neutropenia may need nothing. A fever is treated as infection even when no source is found. Granulocyte colony-stimulating factor pushes the marrow to make white cells and can be life-saving after chemotherapy. Change the drug if the drug is the cause. A granulocyte transfusion is uncommon. Stem cells are for some severe marrow causes.",
          "Precautions are not the platelet rules. Here, brushing and flossing are both wanted. Also: wash hands, avoid people who are ill, wear shoes, cover cuts, use an electric shaver, avoid animal waste and changing nappies, and avoid unpasteurised dairy, undercooked meat, and raw fruit, vegetables, grains, nuts, and honey. Stay out of hot tubs, ponds, and rivers.",
        ],
      },
      {
        heading: "Sodium",
        page: "24–28",
        points: [
          "Sodium 135–145 mmol/L, for nerve and muscle. A low sodium: nausea, vomiting, exhaustion, dizziness. Causes include diuretics, antidepressants, some pain medicines, large burns, kidney disease, liver disease or cirrhosis, severe diarrhoea or vomiting, heart failure, high antidiuretic hormone, drinking too much water, not passing urine, sweat, ketones in the urine, an underactive thyroid, and Addison’s disease.",
          "Low volume: 0.9% saline. Do not correct faster than 0.5 mmol/L per hour. Even when the sodium is very low, do not raise it more than 10 mmol/L in the first 24 hours. High volume: restrict fluid, and sometimes a diuretic. Normal volume: treat the cause.",
          "High sodium is a level over 145 mEq/L. Thirst, fatigue, swollen hands and feet, weakness, insomnia, a fast heartbeat, coma. Most often older adults, infants, and people who are in bed. Causes include too little water, salty water, too much salt, sweat, diarrhoea, low vasopressin, high aldosterone, Cushing’s, oral contraceptives, corticosteroids, laxatives, lithium, and a non-steroidal anti-inflammatory.",
          "Stop the free-water loss. Desmopressin (DDAVP) is for cranial diabetes insipidus. Stop an osmotic diuretic. Replace intravascular volume and free water. Watch the sodium, the balance, and the mental state.",
        ],
      },
      {
        heading: "Potassium",
        page: "29–35",
        points: [
          "Potassium 3.5–5.0 mmol/L. Nerves and muscles, movement of nutrients and waste, and the heart.",
          "Under 3.5. The common causes are diuretics, diarrhoea, and chronic laxative use. Also kidney loss, low magnesium, leukaemia, Cushing’s, vomiting, enemas, an ileostomy, bronchodilators, steroids, theophylline, insulin (the potassium moves into cells), alkalosis, and a poor intake.",
          "Weakness, fatigue, nausea, vomiting, a paralytic ileus, and an arrhythmia that can arrest. Give potassium by mouth or vein. Do not run the intravenous dose faster than 20 mmol per hour. A concentration over 60 mmol/L is not for a peripheral vein. Watch the electrocardiogram, the kidneys, and muscle power. Foods named: orange, banana, kiwi, beef, fish, tomato.",
          "Over 5. More intake, potassium leaving cells, tissue breakdown, lack of insulin, kidney disease, drugs. The trace goes from fast to slow and may arrest, with tall T waves. Weakness, paralysis, pins and needles of tongue, face, hands and feet, nausea, cramp.",
          "Cut the intake and change the drugs. Mild: Resonium A is sodium polystyrene sulfonate, Resonium C is calcium polystyrene sulfonate. Moderate or severe: intravenous insulin with glucose, intravenous calcium, or dialysis. People at risk should not eat the potassium-rich foods.",
        ],
      },
      {
        heading: "Calcium, magnesium, phosphate",
        page: "36–45",
        points: [
          "Calcium 2.2–2.6 mmol/L. About 99% is in bone. The rest is in extracellular fluid and soft tissue. It builds bone and teeth, contracts and relaxes muscle, serves nerve and heart, activates enzymes, and clots blood.",
          "Low calcium is most often a parathyroid that is failing or has been removed. Also low magnesium, high phosphate, a large transfusion of stored blood preserved with citrate, renal insufficiency, and poor vitamin D absorption. Cramps, tingling, numbness, Chvostek or Trousseau, tetany, brisk reflexes, irritability, poorer thinking, seizures, a long QT, low blood pressure, a weaker heartbeat, and abnormal clotting.",
          "Chvostek: a light tap just in front of the ear, below the zygomatic bone, and the same side of the face twitches. Trousseau: the cuff is held above systolic pressure for more than 3 minutes, and the hand spasms.",
          "Calcium gluconate 10%: 10 mL is 93 mg, or 2.3 mmol, of elemental calcium. A nurse gives it by mouth, by infusion, or on a syringe pump over 1 to 2 hours. A bolus is the doctor’s injection, slow, with the heart monitored. Calcium chloride 10%: 10 mL is 272 mg, or 6.8 mmol. That injection is the doctor’s, slow, with the heart monitored, and extravasation is the danger. Replace magnesium if it is low. Recheck calcium, phosphate, magnesium, and the clotting profile.",
          "High calcium: hyperparathyroidism, cancer pulling calcium from bone, lying still, a thiazide, too much calcium or vitamin D. Anorexia, constipation, weakness, lethargy, loss of tone, ataxia, low mood, confusion, coma, a short QT, arrhythmia, heart block, lots of urine, stones, bone pain, and a fracture through demineralised bone. Stop the supplement. Pamidronate, calcitonin, or mithramycin. Dialysis with little or no calcium. Get the person moving. Watch circulation, thinking, and the level.",
          "Magnesium on the renal panel is 0.7–1.1 mmol/L. It indexes metabolic activity and renal function, and it is used in clotting, neuromuscular control, enzymes, and calcium metabolism. High: Addison’s, hypothyroidism, magnesium antacids or salts, renal insufficiency, uncontrolled diabetes. Low: alcoholism, chronic kidney disease, diabetic acidosis, hypoparathyroidism, malabsorption, malnutrition.",
          "Phosphate 0.8–1.4 mmol/L. Bone, energy, the urinary acid buffer, and carbohydrate metabolism. Food is the source, the kidney is the exit, and stores sit in bone and skeletal muscle. High with acidosis, acromegaly, myeloma, lymphoma, bone secondaries, haemolysis, low calcium, hypoparathyroidism, a high intake, liver disease, renal failure, rhabdomyolysis, sarcoidosis. Low with alkalosis, alcoholism, chronic antacids, diabetic acidosis, high calcium, too much insulin, hyperparathyroidism, a poor diet, malnutrition, osteomalacia, rickets, sepsis, and lack of vitamin D.",
        ],
      },
      {
        heading: "Creatinine",
        page: "46–48",
        points: [
          "Creatinine is the waste of muscle creatine. About 2% of the body’s creatine becomes creatinine each day. The kidney filters most of it. Production is steady because muscle mass barely changes from day to day.",
          "The renal panel prints 60 to 110 mmol/L. That figure is the usual micromole range. Do not treat a result written in millimoles per litre as if 80 were a normal creatinine.",
          "High: chronic kidney disease, obstruction, dehydration, more protein, hard exercise. Trimethoprim and cimetidine can raise the measured level for a while. Low: small muscle mass, pregnancy (more blood to the kidney, so more is cleared), extreme weight loss.",
          "The symptoms of kidney trouble do not track the number. Severe disease can be found on a routine test in a person who feels well. When symptoms are there, they are non-specific: a dry feeling, fatigue, swelling, breathlessness, confusion, nausea, neuropathy, dry skin.",
        ],
      },
      {
        heading: "Liver and clotting",
        page: "49–53",
        points: [
          "Albumin is made in the liver. A low level points to chronic liver disease, especially cirrhosis and a hepatic cancer. Kidney disease moves it too. The prescriptions named are intravenous albumin and a fluid restriction.",
          "A very high ammonia means encephalopathy or liver failure. The bowel regimen named: Fleet enema, one tube rectally each day; Dulcolax, one suppository each day; Senokot 15 mg by mouth at night; lactulose 20 mL by mouth three times a day.",
          "Bilirubin tracks how deep the jaundice is. The usual setting is a blocked biliary tract. A level that stays high suggests cancer. A level that swings suggests a stone. GGT is the sensitive test for liver-cell dysfunction. In chronic liver disease globulin rises and albumin falls.",
          "ALT (GPT) and AST (GOT) index hepatic damage and ongoing cell death, including trauma. ALP is the duct enzyme: a rise means biliary obstruction, and it is used to look for a primary liver tumour and for metastases. A marked ALT rise is acute hepatitis or damage from a drug or chemical. A marked AST rise is named for myocardial necrosis, cirrhosis, chronic hepatitis, and liver cancer.",
          "Both transaminases markedly up, and ALP up: hepatocellular damage. Both transaminases markedly up, and ALP markedly up: biliary obstruction.",
          "APTT is the intrinsic pathway, read against a normal control. It lengthens with intravenous heparin, haemophilia, or disseminated intravascular coagulation. INR and prothrombin time are the extrinsic pathway. They lengthen with warfarin, liver dysfunction, or the same coagulation disorder. In that disorder the proteins that control clotting become overactive.",
          "On the cascade drawing, heparin is marked as inactivating steps on the intrinsic side. Extrinsic activity is drawn from factor VII. The paths meet at factor X, then prothrombin, thrombin, fibrinogen, fibrin, and factor XIII makes the stable clot. The outline beside it starts the intrinsic path at plasma contact and the extrinsic path at tissue factor, factor III, from damaged tissue.",
        ],
      },
      {
        heading: "Thyroid",
        page: "54–59",
        points: [
          "The test is TSH and free T4. TSH comes from the pituitary and tells the thyroid to make more T3 and T4. T4 is thyroxine. T3 is triiodothyronine. Both raise metabolic rate.",
          "Underactive causes: no cause found, iodine deficiency, Hashimoto’s thyroiditis, irradiation that injures the hypothalamus or the pituitary, surgical removal, late invasive fibrous thyroiditis, lithium, interferon, and a goitre.",
          "Signs: dry coarse skin, cool limbs, myxoedema, hair loss, a slow pulse, swollen limbs, tendon reflexes that relax late, carpal tunnel, and fluid in the pleura, the abdomen, or the pericardium. Symptoms: fatigue, feeling cold, poor memory, constipation, indigestion, weight gain with a poor appetite, breathlessness, a hoarse voice, heavy periods, odd sensation, poor hearing.",
          "The commonest overactive cause is Graves’ disease, in three parts: swelling around the eyes, thickened skin on the lower legs, and an overactive gland. Heat intolerance, a fast heart, hair loss, a stare, moist warm skin, weak muscles, weight loss, tremor, fatigue, nervousness, low mood, palpitations, more frequent stools, very light or missed periods, breathlessness. Hair loss is on both lists. Pulse, temperature preference, and weight are the split.",
          "Treatment of the overactive gland, as written: a drug that stops excess hormone, radioactive iodine that breaks the gland down, or thyroidectomy. Replacement for the underactive gland is not on these slides.",
        ],
      },
      {
        heading: "Arterial blood gas",
        page: "60–72",
        points: [
          "Astrup is the arterial gas. It reads acid-base balance and oxygenation, and it may also report lactate, haemoglobin, electrolytes, oxyhaemoglobin, carboxyhaemoglobin, and methaemoglobin. Four disorders: respiratory alkalosis, respiratory acidosis, metabolic alkalosis, metabolic acidosis.",
          "The results slide prints pH 7.38–7.42. Acidemia is a pH under 7.35. Alkalemia is a pH over 7.45. If both processes are present, the pH shows the stronger one. The lecture does not give a separate name to a pH that sits between 7.35 and 7.38.",
          "PaCO₂ 35–45 mmHg is ventilation. High is respiratory acidosis, ventilation that is not enough. Low is respiratory alkalosis, ventilation that is too much. Either can be the primary problem or the compensation. PaO₂ 75–100 mmHg is oxygenation. Bicarbonate 22–26 mEq/L: low suggests metabolic acidosis, high suggests metabolic alkalosis. Saturation 94–100%.",
          "Respiratory alkalosis: ventilate less, and treat the cause. Respiratory acidosis: ventilate more, and treat the cause.",
          "Read pH, then oxygen, then carbon dioxide. Hypoventilation leaves more dissolved carbon dioxide. Carbon dioxide is treated as an acid: with water it becomes carbonic acid, then hydrogen ion and bicarbonate. Plasma proteins buffer the hydrogen ion. Carbon dioxide leaves by the lung as gas and by the kidney as acid in the urine.",
          "Bicarbonate and base excess are the metabolic side. Gain of acid or loss of bicarbonate drops the bicarbonate and makes base excess negative. Vomiting that loses acid, or a gain of bicarbonate, raises both. Base excess counts proteins and haemoglobin as well as bicarbonate.",
          "Compensation changes the component that was not the cause. Correction changes the component that was. The body aims at a bicarbonate to PaCO₂ ratio of 20 to 1, which is a normal pH. From 40 mmHg, each 10 mmHg change in PaCO₂ moves pH by 0.08.",
          "The ROME figure: respiratory opposite, metabolic equal. Normal carbon dioxide 35–45 mmHg, normal bicarbonate 22–26 mEq/L, alkalosis above pH 7.45, acidosis below 7.35.",
          "The uncompensated table leaves the compensating column blank. Respiratory alkalosis: pH up, carbon dioxide down, from hyperventilation (hypoxia, a metabolic acidosis, a higher metabolic demand, pain, or anxiety). Respiratory acidosis: pH down, carbon dioxide up, from impaired breathing or a blocked airway. Metabolic alkalosis: pH up, bicarbonate up, from volume loss such as vomiting, and from diuretics. Metabolic acidosis: pH down, bicarbonate down. High anion gap: ketoacidosis, lactate, renal failure, a poison. Normal anion gap: bicarbonate lost from the gut or the kidney.",
          "Metabolic acidosis: treat the cause, improve oxygen or perfusion, insulin for ketoacidosis, dialysis for renal failure, an anti-diarrhoeal, and intravenous bicarbonate only if the pH is 7.0 or less. Metabolic alkalosis: treat the cause, replace potassium or chloride, a carbonic anhydrase inhibitor such as Diamox, or a buffer such as ammonium chloride.",
        ],
      },
      {
        heading: "Tumour markers and the heart",
        page: "73–78",
        points: [
          "AFP is normally a very small amount. It rises with liver disease, some cancers, and pregnancy. A higher result does not always mean disease. CA 15-3 is for watching the response of breast cancer and for recurrence. CA 19-9 helps separate pancreatic cancer from other conditions and watches response and recurrence.",
          "CEA can be high in cancer of the bladder, breast, colon or rectum, lung, ovary, pancreas, stomach, or thyroid. PSA is made by normal prostate cells as well as malignant ones.",
          "Cardiac markers enter the blood after myocardial injury, including infarction, and also in heart failure. Creatine kinase is in muscle and brain. It rises within 6 hours of muscle damage, peaks at 18 hours, and is normal again in 2 to 3 days. The MB fraction is raised in infarction, aneurysm surgery, defibrillation, ischaemia, myocarditis, and ventricular arrhythmias.",
          "If the creatine kinase is meant to read skeletal muscle, no hard exercise for 24 hours and no alcohol for 24 hours. An invasive procedure or an intramuscular injection can raise it falsely.",
          "Troponin I is a regulatory protein of striated muscle. It can be up as early as 3 hours after infarction and may stay up for 7 to 10 days. Take serial samples. Do not borrow a cut-off or a 10-to-15-day window from a different lecture.",
        ],
      },
    ],
  },
};

export const ORDER: PreTopicId[] = ["SURG", "MED", "CP", "DRUG", "LAB"];
