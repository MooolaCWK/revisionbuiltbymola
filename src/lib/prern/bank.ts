import type { PreQuestion } from "./types";
import { LAB_QUESTIONS } from "./lab";

export const PRE_QUESTIONS: PreQuestion[] = [
  {
    id: "surg-001",
    topicId: "SURG",
    topic: "Department aim",
    scene: "A new student asks the surgical ward manager what this department is trying to achieve.",
    ask: "What aim does the introduction give?",
    choices: [
      {
        text: "Quality client-centered service, aiming at high efficiency, equity, and cost-effectiveness.",
        note: "Correct. The introduction says the Department of Surgery provides quality client-centered service, with an aim to achieve high efficiency, equity, and cost-effectiveness.",
      },
      {
        text: "High-technology surgery only, with equity left out of the aim.",
        note: "The same sentence keeps efficiency, equity, and cost-effectiveness together; it does not drop equity or reduce the aim to technology.",
      },
      {
        text: "Client-centered care that sets cost-effectiveness aside.",
        note: "Cost-effectiveness is named in the aim alongside efficiency and equity, not set aside.",
      },
      {
        text: "A manual whose only aim is to raise study pressure.",
        note: "Freedom from study pressure is the study-manual purpose on the next page, not this department-aim sentence.",
      },
    ],
    answer: 0,
    page: "3",
  },
  {
    id: "surg-002",
    topicId: "SURG",
    topic: "Specialty codes",
    scene: "The theatre list marks a patient as HBP and the student checks the scope list.",
    ask: "What specialty does this page attach to HBP?",
    choices: [
      {
        text: "Head and Neck, written 頭頸外科.",
        note: "頭頸外科 is the Chinese label for Head and Neck (H&N), not HBP.",
      },
      {
        text: "Liver Transplant, written 肝臟移植外科.",
        note: "肝臟移植外科 belongs to Liver Transplant (LT), a separate scope item.",
      },
      {
        text: "Hepatobiliary and Pancreatic, written 肝膽胰外科.",
        note: "Correct. The scope line reads Hepatobiliary & Pancreatic (HBP: 肝膽胰外科).",
      },
      {
        text: "Ear, Nose and Throat, written 耳鼻喉外科.",
        note: "耳鼻喉外科 is ENT, not the HBP line.",
      },
    ],
    answer: 2,
    page: "3",
  },
  {
    id: "surg-003",
    topicId: "SURG",
    topic: "Specialty codes",
    scene: "Two gastrointestinal labels on the allocation sheet are easy to mix up.",
    ask: "Which pairing does the note give for colorectal surgery?",
    choices: [
      {
        text: "EGI, 消化道外科.",
        note: "EGI is Esophagus & Gastrointestinal, 消化道外科, not colorectal.",
      },
      {
        text: "CRS, 結腸直腸外科.",
        note: "Correct. The page prints Colorectal (CRS: 結腸直腸外科).",
      },
      {
        text: "SGEN, 普通外科.",
        note: "SGEN is General Surgery, 普通外科.",
      },
      {
        text: "BR, 乳房外科.",
        note: "BR is Breast, 乳房外科.",
      },
    ],
    answer: 1,
    page: "3",
  },
  {
    id: "surg-004",
    topicId: "SURG",
    topic: "Specialty codes",
    scene: "The student is matching TSU and NS on the same scope list.",
    ask: "What do those two codes stand for here?",
    choices: [
      {
        text: "TSU is trauma surgery and NS is neck surgery.",
        note: "Trauma is not this code; Head and Neck is H&N, 頭頸外科, and NS is neurosurgery.",
      },
      {
        text: "TSU is transplant surgery and NS is nasal surgery.",
        note: "Liver Transplant is LT, and ear, nose and throat is ENT.",
      },
      {
        text: "Both codes sit under Plastic Surgery, PRS, 整形外科.",
        note: "PRS is its own scope item, separate from TSU and NS.",
      },
      {
        text: "TSU is Thoracic Surgery Unit, 胸外科, and NS is Neurosurgery, 神經外科.",
        note: "Correct. The page lists Thoracic Surgery Unit (TSU: 胸外科) and Neurosurgery (NS: 神經外科) as separate services.",
      },
    ],
    answer: 3,
    page: "3",
  },
  {
    id: "surg-005",
    topicId: "SURG",
    topic: "Specialty codes",
    scene: "Endocrine is on the scope list but the Chinese label looks unfinished.",
    ask: "What does the page actually print beside ECS?",
    choices: [
      {
        text: "A completed Chinese label written in the same style as 泌尿外科.",
        note: "Urology has 泌尿外科; the ECS colon is empty in this extract.",
      },
      {
        text: "The same Chinese label as ENT, 耳鼻喉外科.",
        note: "ENT is a different item and does carry 耳鼻喉外科.",
      },
      {
        text: "Endocrine (ECS: ) with the Chinese label left blank.",
        note: "Correct. The line is Endocrine (ECS: ) while the neighbouring specialties have Chinese names filled in.",
      },
      {
        text: "ECS is omitted from the scope of services.",
        note: "Endocrine (ECS) is listed; only the Chinese wording is blank.",
      },
    ],
    answer: 2,
    page: "3",
  },
  {
    id: "surg-006",
    topicId: "SURG",
    topic: "Manual purpose",
    scene: "The tutor says a surgical student may sometimes leave this ward for practicum, and asks why the manual exists.",
    ask: "Which statement matches that introduction page?",
    choices: [
      {
        text: "You may visit Orthopaedics and Traumatology (Trauma: 創傷及矯形外科), and the manual is so students can adapt, become a competence member, and keep studying without pressure from an unfamiliar environment.",
        note: "Correct. The page says sometimes you visit that department as a surgery clinical practicum location, and states that education-program purpose.",
      },
      {
        text: "Orthopaedics replaces every surgical specialty on the previous page.",
        note: "The page says sometimes you will visit it as a practicum location, not that it replaces the surgical scope.",
      },
      {
        text: "The purpose is to increase study pressure until the environment feels familiar.",
        note: "The note says continuous clinical study free from study pressure caused by an unfamiliar environment.",
      },
      {
        text: "Trauma is labelled 神經外科 and is the daily neurosurgical ward.",
        note: "神經外科 is NS on the scope page; this page names 創傷及矯形外科.",
      },
    ],
    answer: 0,
    page: "4",
  },
  {
    id: "surg-007",
    topicId: "SURG",
    topic: "Vital signs purpose",
    scene: "Before the first observation round, a student asks what vital signs are for.",
    ask: "How does this vital-sign page describe them?",
    choices: [
      {
        text: "Fixed adult numbers that do not change with age or condition.",
        note: "The page says normal ranges of measurements change with age and medical condition.",
      },
      {
        text: "A temperature-only check with no role in finding problems.",
        note: "The page ties vital signs to assessing basic functions and to detecting or monitoring medical problems.",
      },
      {
        text: "The same list as a septic workup, including cultures.",
        note: "Cultures are a later workup page; this page is about vital signs as basic measures.",
      },
      {
        text: "Measures of physiological status used to assess the most basic body functions, useful for detecting or monitoring medical problems, with normal ranges that change with age and medical condition.",
        note: "Correct. That is the page wording: measures of various physiological status, basic body functions, ranges that change with age and medical condition, and useful in detecting or monitoring medical problems.",
      },
    ],
    answer: 3,
    page: "6",
  },
  {
    id: "surg-008",
    topicId: "SURG",
    topic: "Vital signs list",
    scene: "The tutor points at the examples of the body's most basic functions.",
    ask: "Which measurements does that page list?",
    choices: [
      {
        text: "Blood glucose and wound exudate only.",
        note: "Glucose and wound words are in later sections, not this list.",
      },
      {
        text: "Body temperature, blood pressure and pulse or heart rate, and oxygen saturation and respiration.",
        note: "Correct. The page lists body temperature (Temp), blood pressure (BP) and pulse / heart rate, and oxygen saturation and respiration.",
      },
      {
        text: "Temperature and blood pressure, leaving out oxygen saturation and respiration.",
        note: "Oxygen saturation and respiration are the third example group on the page.",
      },
      {
        text: "Pain score, PCA use, and drain output.",
        note: "Those appear in the return-to-ward notes, not in this vital-sign list.",
      },
    ],
    answer: 1,
    page: "7",
  },
  {
    id: "surg-009",
    topicId: "SURG",
    topic: "Tympanic temperature",
    scene: "A tympanic reading looks lower than the patient feels, so you check the underestimate list.",
    ask: "Which set does the note give as reasons for an underestimated tympanic temperature?",
    choices: [
      {
        text: "The ear canal is not straightened and the probe is poorly inserted so air leaks, the ear is impacted with a lot of earwax, or the patient has just swallowed cold food or liquid.",
        note: "Correct. Those are the three underestimate factors cited from Timby, 2003.",
      },
      {
        text: "Hot food or drink, or lying with the ear covered.",
        note: "Those are the overestimate factors on the same page, not the underestimate list.",
      },
      {
        text: "A narrow blood-pressure cuff and talking during the reading.",
        note: "Cuff and talking problems are on the blood-pressure pages, not this tympanic list.",
      },
      {
        text: "Earwax only, after the canal was straightened and the probe sealed.",
        note: "Impacted earwax is one factor, but a canal that is not straightened with air leak, and cold food or liquid, are also listed.",
      },
    ],
    answer: 0,
    page: "8",
  },
  {
    id: "surg-010",
    topicId: "SURG",
    topic: "Tympanic temperature",
    scene: "The next tympanic reading may be falsely high.",
    ask: "What does the same page list as overestimate factors?",
    choices: [
      {
        text: "Cold food and a lot of earwax.",
        note: "Cold intake and impacted earwax are underestimate factors.",
      },
      {
        text: "An unstraightened canal with an air leak around the probe.",
        note: "That probe and canal problem is listed under underestimate, not overestimate.",
      },
      {
        text: "The patient has just swallowed hot food or liquids, or has lain down and covered the ear.",
        note: "Correct. The overestimate factors are hot food or liquids, and lying down with the ear covered.",
      },
      {
        text: "Charting the higher of the two ears.",
        note: "Choosing the higher ear is a later low-temperature charting step, not an overestimate cause on this page.",
      },
    ],
    answer: 2,
    page: "8",
  },
  {
    id: "surg-011",
    topicId: "SURG",
    topic: "Temperature range",
    scene: "One ear reads 36.2 ℃ and the student asks whether that sits in the normal band printed for tympanic temperature.",
    ask: "What normal range and what low-temperature cut-off does this page print?",
    choices: [
      {
        text: "Normal 36.5℃ to 37.5℃, with low starting under 36.5℃.",
        note: "Those cut-offs are not printed; this page uses 36.0 ℃-37.6℃ and ≤35.9℃.",
      },
      {
        text: "Normal range 36.0 ℃-37.6℃, and low body temperature at ≤35.9℃.",
        note: "Correct. The low-temperature page prints normal range 36.0 ℃-37.6℃ and the action row ≤35.9℃ as low body temp.",
      },
      {
        text: "Normal 36.0 ℃-37.6℃, and 37.6℃ already counted as low body temperature.",
        note: "37.6℃ is inside the printed normal top, and the low row is ≤35.9℃; the low-grade fever row starts on the next page.",
      },
      {
        text: "No range in this file, because vital signs are only a cross-reference to the medical FAQ.",
        note: "The section banner says vital signs are the same as the medical FAQ, but this page still prints 36.0 ℃-37.6℃ and ≤35.9℃.",
      },
    ],
    answer: 1,
    page: "9",
  },
  {
    id: "surg-012",
    topicId: "SURG",
    topic: "Low temperature",
    scene: "Recheck gives 35.4℃ in one ear and 36.1℃ in the other. The patient is not dizzy.",
    ask: "What should you chart, and when do you tell the team nurse?",
    choices: [
      {
        text: "Chart the lower ear so a low reading is not hidden, and phone the doctor yourself.",
        note: "The note says chart the higher result within or nearest normal, and the team nurse is the person who informs the doctor.",
      },
      {
        text: "Skip the recheck and apply Bair Hugger as the first step.",
        note: "Bair Hugger is the remark for when recheck and blankets still fail to keep a normal temperature.",
      },
      {
        text: "Report every ≤35.9℃ reading immediately, dizzy or not.",
        note: "Immediate report is for the dizziness case; otherwise the report is after routine.",
      },
      {
        text: "Recheck both ears at once, chart the higher result that is within or nearest the normal range, and report after the temperature routine.",
        note: "Correct. The action says recheck bilateral ears immediately, then chart the higher result which is within or nearest normal range, and report immediately only for a dizziness case; otherwise after routine.",
      },
    ],
    answer: 3,
    page: "9",
  },
  {
    id: "surg-013",
    topicId: "SURG",
    topic: "Low temperature",
    scene: "Both ears stay at or below 35.9℃ after the recheck, and the patient feels dizzy.",
    ask: "Which still-low care matches the page?",
    choices: [
      {
        text: "Ice pad, encourage fluid, and take blankets off.",
        note: "Ice, fluids, and removing blankets are the high-temperature care, not the low row.",
      },
      {
        text: "Blankets only, with no rail, no pulse or blood-pressure check, and no further temperature.",
        note: "If the patient is dizzy the page adds a bedside rail and a BP and pulse check, then a 15-30 minute recheck and a report.",
      },
      {
        text: "Add more blankets and keep bed rest; if dizzy, put up the bedside rail and check blood pressure and pulse; recheck the temperature after 15-30 minutes; tell the team nurse immediately because of dizziness.",
        note: "Correct. That is the numbered still-low care: blankets and bed rest, rail plus BP and pulse if dizzy, recheck after 15-30 minutes, and immediate report for dizziness. The team nurse informs the doctor.",
      },
      {
        text: "Raise the feet above the head before any blanket.",
        note: "Feet higher than the head is a low blood-pressure step, not this temperature list.",
      },
    ],
    answer: 2,
    page: "9",
  },
  {
    id: "surg-014",
    topicId: "SURG",
    topic: "Bair Hugger",
    scene: "Blankets and another temperature check still do not hold a normal reading.",
    ask: "What may be used, and what is it?",
    choices: [
      {
        text: "Bair Hugger, a temperature management system that uses forced warm air to prevent and treat hypothermia in surgical patients.",
        note: "Correct. The remark says if recheck and blankets still fail to keep a normal temperature, Bair Hugger may be applied, and the footnote defines it as forced warm air for hypothermia.",
      },
      {
        text: "An ice pad with a pillow cover, used as a warming hugger.",
        note: "Ice pads with a cover are on the high-temperature pages; this failure line names Bair Hugger.",
      },
      {
        text: "Nasal oxygen at 6 L/min as the hypothermia treatment.",
        note: "Those oxygen litres are on the saturation pages, not the low-temperature remark.",
      },
      {
        text: "Oral Panadol 500 mg started to warm the patient.",
        note: "Panadol 500 mg Q4H prn is the high-temperature example as a doctor's order, not this low-temperature line.",
      },
    ],
    answer: 0,
    page: "9",
  },
  {
    id: "surg-015",
    topicId: "SURG",
    topic: "Low-grade fever",
    scene: "After bilateral recheck the tympanic readings stay in the low-grade band. The patient is not dizzy and can drink.",
    ask: "What care does the low-grade fever row describe?",
    choices: [
      {
        text: "Phone the doctor at once and collect septic cultures yourself.",
        note: "On this band the team nurse informs the doctor during the ward round; a septic workup is the severe-fever remark.",
      },
      {
        text: "Chart whichever ear is further above normal, then add blankets.",
        note: "This page says chart the result within or nearest normal, and care includes removing extra blanket and clothing.",
      },
      {
        text: "Start Panadol 500 mg Q4H prn as a standing dose with no order.",
        note: "The page gives Panadol 500 mg Q4H prn as an example of administration as doctor order.",
      },
      {
        text: "The row is ≥37.6℃ and ≤38.5℃. Recheck both ears and chart the result within or nearest normal. If still high: ice pad with a cover, encourage water when there is no fluid restriction and no swallowing problem, remove extra blanket and clothing, recheck in 15-30 minutes, and give oral or per-rectal Panadol 500 mg Q4H prn only as the doctor orders.",
        note: "Correct. That is the low-grade action and nursing care. Report at once only for dizziness; otherwise after the temperature routine. The team nurse increases monitoring to Q4H and informs the doctor during the ward round.",
      },
    ],
    answer: 3,
    page: "10",
  },
  {
    id: "surg-016",
    topicId: "SURG",
    topic: "High fever",
    scene: "The temperature is still at or above 38.5℃ and the blood pressure looks low.",
    ask: "How does the severe high-fever page differ from the low-grade row?",
    choices: [
      {
        text: "Treat it exactly like low-grade fever and wait for the ward-round message.",
        note: "This page says the team nurse informs the doctor by phone immediately, and it adds blood pressure, pulse and SaO2.",
      },
      {
        text: "Call it high fever at ≥38.5℃. Recheck both ears; if still high, measure blood pressure, pulse and SaO2, and tell the team nurse at once if blood pressure or SaO2 is on the low side. If high temperature and low blood pressure remain, use the covered ice pad, water if allowed, removal of extra blankets and clothing, a 15-30 minute recheck, and doctor-ordered Panadol 500 mg Q4H prn. The team nurse phones the doctor immediately.",
        note: "Correct. Those are the severe-page actions and the phone-immediately remark. The doctor may order a septic workup, and temperature monitoring increases to Q4H.",
      },
      {
        text: "Do not recheck the ears once the first reading is ≥38.5℃.",
        note: "The action column still says recheck bilateral ears immediately.",
      },
      {
        text: "Start Bair Hugger because 38.5℃ is the hypothermia device threshold.",
        note: "Bair Hugger is the low-temperature forced-air remark, not this high-fever page.",
      },
    ],
    answer: 1,
    page: "11",
  },
  {
    id: "surg-017",
    topicId: "SURG",
    topic: "Septic shock",
    scene: "After a high fever the team nurse uses the words septic shock and asks what this page means.",
    ask: "What definition is printed?",
    choices: [
      {
        text: "A serious condition that occurs when a body-wide infection leads to dangerously low blood pressure.",
        note: "Correct. That is the opening definition on the septic-shock page.",
      },
      {
        text: "A local wound infection with a normal blood pressure.",
        note: "The page says a body-wide infection leading to dangerously low blood pressure.",
      },
      {
        text: "High blood pressure caused by toxins, without tissue damage.",
        note: "The page says toxins released by the bacteria or fungi may cause tissue damage, and defines the shock by low blood pressure.",
      },
      {
        text: "Only a mild fever that stays inside the low-grade band.",
        note: "Low-grade fever is the earlier temperature row; this page calls septic shock a serious condition.",
      },
    ],
    answer: 0,
    page: "12",
  },
  {
    id: "surg-018",
    topicId: "SURG",
    topic: "Septic shock",
    scene: "A student is listing who develops septic shock and what can cause it.",
    ask: "Which account matches the page?",
    choices: [
      {
        text: "Only middle-aged adults, and only one kind of bacteria.",
        note: "The page says most often the very old and the very young, and any type of bacteria.",
      },
      {
        text: "Viruses are the usual cause and bacteria are rare.",
        note: "Viruses may rarely cause it; any type of bacteria can cause it.",
      },
      {
        text: "It occurs most often in the very old and the very young, and may occur with a weakened immune system. Any type of bacteria can cause it. Fungi and, rarely, viruses may also cause it. Toxins may cause tissue damage.",
        note: "Correct. That matches the page: age groups, weakened immune systems, any bacteria, fungi, rarely viruses, and toxins causing tissue damage.",
      },
      {
        text: "Fungi are excluded, and toxins protect tissue.",
        note: "Fungi may cause it, and toxins may cause tissue damage.",
      },
    ],
    answer: 2,
    page: "12",
  },
  {
    id: "surg-019",
    topicId: "SURG",
    topic: "Septic shock",
    scene: "The tutor asks how the second septic-shock page links the illness to organs.",
    ask: "What does that page say?",
    choices: [
      {
        text: "Toxins raise blood pressure and improve organ function.",
        note: "The page says this may lead to low blood pressure and poor organ function.",
      },
      {
        text: "This may lead to low blood pressure and poor organ function. Some researchers think blood clots in small arteries cause the lack of blood flow and poor organ function. A strong inflammatory response to the toxins may contribute to organ damage.",
        note: "Correct. Those three statements are the whole of the second septic-shock page.",
      },
      {
        text: "The researchers named on the page blame clots in large veins only.",
        note: "The page says some researchers think blood clots in small arteries cause the lack of blood flow.",
      },
      {
        text: "The inflammatory response protects organs from the toxins.",
        note: "The page says the strong inflammatory response may contribute to organ damage.",
      },
    ],
    answer: 1,
    page: "13",
  },
  {
    id: "surg-020",
    topicId: "SURG",
    topic: "Septic workup",
    scene: "The doctor writes a septic workup and the student reads the blood-test examples.",
    ask: "What blood tests are named, and what is CBP for?",
    choices: [
      {
        text: "CBP is the urine culture, and blood culture is not listed.",
        note: "CBP is complete blood picture; urine culture on this page is MSU x C/ST or CSU x C/ST.",
      },
      {
        text: "The only blood test named is a chest X-ray.",
        note: "CXR is on the next workup page, not in this blood-test list.",
      },
      {
        text: "L/RFT means the sputum culture.",
        note: "Sputum culture is Spt x C/ST; L/RFT is liver and renal function.",
      },
      {
        text: "Bld x C/ST for blood culture, CBP as complete blood picture to observe any white-cell increase, and L/RFT for liver and renal function.",
        note: "Correct. The page gives those three blood examples and glosses CBP as complete blood picture to observe any white blood cell increase, and L/RFT as liver and renal function.",
      },
    ],
    answer: 3,
    page: "14",
  },
  {
    id: "surg-021",
    topicId: "SURG",
    topic: "Septic workup",
    scene: "The same workup also asks about urine and sputum.",
    ask: "Which specimens does the note name?",
    choices: [
      {
        text: "A urine stick for glucose and protein only, with no culture.",
        note: "Glucose and protein by urine stick are on a perioperative page; this page names MSU or CSU culture.",
      },
      {
        text: "Catheter urine only, never a mid-stream specimen.",
        note: "Both MSU x C/ST and CSU x C/ST are listed.",
      },
      {
        text: "MSU x C/ST or CSU x C/ST, asked as a check for urinary tract infection, and Spt x C/ST for sputum.",
        note: "Correct. The page lists mid-stream urine culture or catheterized urine culture, and sputum culture.",
      },
      {
        text: "Sputum culture written as Bld x C/ST.",
        note: "Bld x C/ST is the blood culture; sputum is Spt x C/ST.",
      },
    ],
    answer: 2,
    page: "14",
  },
  {
    id: "surg-022",
    topicId: "SURG",
    topic: "Septic workup",
    scene: "The workup continues on the next page, beyond the cultures already named.",
    ask: "What imaging example is printed there?",
    choices: [
      {
        text: "CXR, a chest X-ray.",
        note: "Correct. The second workup page starts with CXR (Chest X-ray).",
      },
      {
        text: "An ankle X-ray as the named film.",
        note: "The page names a chest X-ray, not an ankle film.",
      },
      {
        text: "A 12-lead ECG as the workup imaging.",
        note: "A 12-lead ECG is in the low blood-pressure remarks, not this workup list.",
      },
      {
        text: "Wound-bed slough grading instead of a film.",
        note: "Wound-bed words are in the later wound-care page, not this workup line.",
      },
    ],
    answer: 0,
    page: "15",
  },
  {
    id: "surg-023",
    topicId: "SURG",
    topic: "Septic workup",
    scene: "The patient is still febrile and someone reaches for Panadol before the antibiotic review.",
    ask: "What does this workup page say about Panadol?",
    choices: [
      {
        text: "Intravenous Panadol 1 g is required so the fever chart stays flat.",
        note: "The page says +/- oral or per rectal Panadol, and it does not print a 1 g intravenous dose.",
      },
      {
        text: "Panadol must be given or the blood cultures cannot be taken.",
        note: "The page does not tie cultures to a compulsory Panadol dose; it allows Panadol to be left unprescribed.",
      },
      {
        text: "Panadol is withheld only when the temperature is already normal.",
        note: "The reason printed is observing the fever pattern to check antibiotics, not a normal temperature.",
      },
      {
        text: "Panadol is marked +/- and may be oral or per rectal. If the doctor wants to watch the fever pattern to check the effect of antibiotics, he may not prescribe Panadol.",
        note: "Correct. That is the parenthetical remark on the page: he may not prescribe Panadol to a fever patient when observing the fever pattern against antibiotics.",
      },
    ],
    answer: 3,
    page: "15",
  },
  {
    id: "surg-024",
    topicId: "SURG",
    topic: "Septic workup",
    scene: "Intravenous antibiotics are added and the student reads the examples on the page.",
    ask: "Which antibiotic examples are actually printed?",
    choices: [
      {
        text: "Augmentin 1.2g Q6H and Tazocin 4.5g once a day.",
        note: "Both Augmentin and Tazocin are printed as Q8H, not Q6H or once daily.",
      },
      {
        text: "Augmentin 1.2g Q8H, Tazocin 4.5g Q8H, and Meropenem with no dose written beside the name.",
        note: "Correct. The page says +/- intravenous antibiotics, e.g. Augmentin 1.2g Q8H, Tazocin 4.5g Q8H, Meropenem.",
      },
      {
        text: "Meropenem 1g Q8H as a dose this page states.",
        note: "Meropenem is named, but no dose is printed beside it.",
      },
      {
        text: "No intravenous antibiotic example, only oral Panadol.",
        note: "The page includes the intravenous antibiotic examples as well as +/- Panadol.",
      },
    ],
    answer: 1,
    page: "15",
  },
  {
    id: "surg-025",
    topicId: "SURG",
    topic: "Blood pressure cuff",
    scene: "The cuff looks narrow on the arm and the systolic reading jumps.",
    ask: "What result and reason does the cuff page give for a cuff that is too narrow?",
    choices: [
      {
        text: "Systolic blood pressure increases 10 to 40 mmHg, because it takes extra pressure to compress the brachial artery.",
        note: "Correct. That is the narrow-cuff row: measurement increase 10 to 40 mmHg, extra pressure to compress the brachial artery.",
      },
      {
        text: "Systolic pressure falls 10 to 40 mmHg because the artery is compressed too easily.",
        note: "Cutting off the artery too easily is the rationale for a falsely low reading from a loose or ballooning cuff, not the narrow-cuff row.",
      },
      {
        text: "Systolic pressure increases 10 to 50 mmHg from the narrow cuff.",
        note: "10 to 50 mmHg is the clothing row, not the narrow-cuff row.",
      },
      {
        text: "The reading does not change if the cuff is only a little narrow.",
        note: "The page states an increase of 10 to 40 mmHg for a cuff too narrow for the extremity.",
      },
    ],
    answer: 0,
    page: "16",
  },
  {
    id: "surg-026",
    topicId: "SURG",
    topic: "Blood pressure cuff",
    scene: "The cuff is too loose, the wrap is uneven, and the bladder balloons out.",
    ask: "What reading does the note expect, and why?",
    choices: [
      {
        text: "A systolic rise of 10 to 40 mmHg, as with a narrow cuff.",
        note: "The 10 to 40 mmHg rise is the narrow-cuff result, not the loose-cuff result.",
      },
      {
        text: "A systolic rise of 10 to 50 mmHg, as with clothing.",
        note: "Clothing is the 10 to 50 mmHg row.",
      },
      {
        text: "A falsely low blood pressure, because the cuff cuts off the brachial artery supply too easily and the monitor gives a lower reading than it should.",
        note: "Correct. That is the loose, uneven, or ballooning-bladder row and its rationale.",
      },
      {
        text: "No error, because a loose cuff is the recommended fit.",
        note: "The page lists this fit as a common problem with a falsely low result.",
      },
    ],
    answer: 2,
    page: "16",
  },
  {
    id: "surg-027",
    topicId: "SURG",
    topic: "Blood pressure cuff",
    scene: "The student leaves a thick sleeve under the cuff.",
    ask: "What can clothing do to the systolic reading?",
    choices: [
      {
        text: "It always lowers systolic pressure by 10 mmHg.",
        note: "The page says clothing can increase the systolic reading, not lower it by a fixed 10 mmHg.",
      },
      {
        text: "Depending on the thickness of the fabric, clothing can increase systolic blood pressure from 10 to 50 mmHg.",
        note: "Correct. The clothing row says clothing can increase a systolic blood pressure from 10 to 50 mmHg, depending on fabric thickness.",
      },
      {
        text: "It has no effect once the cuff size is correct.",
        note: "Cuff over clothing is still listed as its own common problem.",
      },
      {
        text: "It raises every systolic reading by exactly 40 mmHg.",
        note: "A 10 to 40 mmHg rise is the narrow-cuff figure; clothing is 10 to 50 mmHg and depends on thickness.",
      },
    ],
    answer: 1,
    page: "16",
  },
  {
    id: "surg-028",
    topicId: "SURG",
    topic: "Blood pressure cuff",
    scene: "The patient is lying on one side and the cuffed arm is above heart level.",
    ask: "What does this page say that position does?",
    choices: [
      {
        text: "It gives a falsely high blood pressure because the arm is above the heart.",
        note: "The page says above heart level provides a falsely low BP, not a high one.",
      },
      {
        text: "Side-lying always matches a sitting reading.",
        note: "The rationale is that readings vary depending on distance from the heart.",
      },
      {
        text: "It is the position you should use to confirm a low reading before charting.",
        note: "It is listed as a common problem, not as the charting method.",
      },
      {
        text: "Above heart level it provides a falsely low blood pressure, and readings vary with distance from the heart.",
        note: "Correct. The side-lying row says above heart level provides a falsely low BP, with varied readings depending on distance from the heart.",
      },
    ],
    answer: 3,
    page: "16",
  },
  {
    id: "surg-029",
    topicId: "SURG",
    topic: "High blood pressure",
    scene: "The first systolic reading is above 160 mmHg.",
    ask: "What does the high blood-pressure action start with?",
    choices: [
      {
        text: "Put the feet higher than the head by 15-30 degrees.",
        note: "Feet higher than the head is a later step on the low blood-pressure page, not this high reading.",
      },
      {
        text: "Report to the doctor before any cuff or talking check.",
        note: "The numbered actions start with clothing, cuff size, stop talking, and a bilateral recheck, and the report goes to the team nurse.",
      },
      {
        text: "Make sure there is no clothing blockage, use the correct cuff size, stop talking, and recheck both limbs.",
        note: "Correct. For SBP > 160 mmHg the first action is no clothing blockage, correct cuff size, stop talking, and recheck bilateral limb.",
      },
      {
        text: "Use this same first step for any systolic reading above 140 mmHg.",
        note: "The threshold printed on this page is SBP > 160 mmHg.",
      },
    ],
    answer: 2,
    page: "17",
  },
  {
    id: "surg-030",
    topicId: "SURG",
    topic: "High blood pressure",
    scene: "The pressure is still high after that recheck. The patient has no headache.",
    ask: "What does the page say about the next measure, the report, and the repeat check?",
    choices: [
      {
        text: "Invite the patient back to bed and keep them relaxed, report to the team nurse after the blood-pressure routine, and recheck blood pressure and pulse after 15-30 minutes.",
        note: "Correct. Actions 2 to 4 say return to bed and keep relax, report after the routine unless there is headache, and recheck BP/P after 15-30 minutes.",
      },
      {
        text: "Report every high reading immediately, headache or not.",
        note: "Immediate report on this page is if the patient suffers with headache; otherwise after the routine.",
      },
      {
        text: "Recheck only the pulse after 2 hours.",
        note: "The page says recheck patient BP/P after 15-30 minutes.",
      },
      {
        text: "Have the patient exercise before the next reading.",
        note: "The nursing care says stop exercise and talking, and rest on the bed.",
      },
    ],
    answer: 0,
    page: "17",
  },
  {
    id: "surg-031",
    topicId: "SURG",
    topic: "High blood pressure",
    scene: "You are settling the patient after the high reading and the team nurse explains the follow-up.",
    ask: "What nursing care and remarks are printed?",
    choices: [
      {
        text: "Walk the patient and take the call bell away.",
        note: "Care says rest on bed, give a call bell, stop exercise and talking, and put on the bedside rail.",
      },
      {
        text: "Stop all blood-pressure checks until the next day.",
        note: "The remark says the team nurse will increase monitoring to Q4H or Q1H.",
      },
      {
        text: "Start an inotrope before any ECG.",
        note: "Inotrope is on the low blood-pressure remarks; this page says antihypertensive agents after investigation such as ECG or blood test.",
      },
      {
        text: "Rest on the bed, give the call bell, stop exercise and talking, and put the bedside rail up. Monitoring may increase to Q4H or Q1H. The doctor may order antihypertensive agents after investigation such as ECG or a blood test.",
        note: "Correct. That is the nursing-care box and the remarks on the high blood-pressure page.",
      },
    ],
    answer: 3,
    page: "17",
  },
  {
    id: "surg-032",
    topicId: "SURG",
    topic: "Low blood pressure",
    scene: "Systolic pressure stays under 90 mmHg after you have checked the cuff and brought the patient back to bed.",
    ask: "What position does this page then tell you to try for the measurement?",
    choices: [
      {
        text: "Head higher than the feet by 15-30 degrees.",
        note: "The page says feet higher than the head, not the head higher than the feet.",
      },
      {
        text: "Feet higher than the head by 15-30 degrees.",
        note: "Correct. If the record is still low after return to bed, attempt to measure BP with the feet higher than the head by 15-30 degrees. Earlier you must already have checked there is no limb elevation or clothing blockage and that the cuff size is correct, and rechecked both limbs.",
      },
      {
        text: "Leave the limbs up from the start, because elevation is the first instruction.",
        note: "Action 1 says make sure there is no elevation of limbs; the feet-higher position is a later attempt if the bed reading is still low.",
      },
      {
        text: "Sit the patient with both feet hanging down.",
        note: "The printed position is feet higher than the head by 15-30 degrees.",
      },
    ],
    answer: 1,
    page: "18",
  },
  {
    id: "surg-033",
    topicId: "SURG",
    topic: "Low blood pressure",
    scene: "The low systolic reading continues and the patient feels dizzy while you are still there.",
    ask: "How does this page handle conscious level, the report, and the repeat check?",
    choices: [
      {
        text: "Check conscious level while you act. If the patient is dizzy, report to the team nurse immediately; otherwise report after the blood-pressure routine. Recheck blood pressure and pulse after 15-30 minutes.",
        note: "Correct. Those are actions 5, 6, 4 and 7: check conscious level in action, immediate report for dizziness, report after the routine otherwise, and recheck BP/P after 15-30 minutes.",
      },
      {
        text: "Do not check conscious level, and never report dizziness early.",
        note: "The page says check conscious level in action, and report immediately if the patient suffers with dizziness.",
      },
      {
        text: "Recheck only after 2 hours.",
        note: "The recheck printed is BP/P after 15-30 minutes.",
      },
      {
        text: "Phone the doctor yourself before telling the team nurse.",
        note: "The report named in the action list is to the team nurse.",
      },
    ],
    answer: 0,
    page: "18",
  },
  {
    id: "surg-034",
    topicId: "SURG",
    topic: "Low blood pressure",
    scene: "The team nurse is dealing with the SBP < 90 mmHg and you prepare the bedside.",
    ask: "What may the doctor order, and what else is written?",
    choices: [
      {
        text: "Antihypertensive tablets and more walking.",
        note: "Antihypertensive agents are the high-blood-pressure remark; this page says IVF or inotrope and keep bed rest.",
      },
      {
        text: "Septic-workup cultures only, with no ECG.",
        note: "This remark lists 12-lead ECG, those blood tests, IVF or inotrope, and bed rest.",
      },
      {
        text: "A 12-lead ECG; blood tests such as CBP, L/RFT, CK, and Trop I; IVF or an inotrope; and keep bed rest. Also watch any sudden increase and decrease of blood pressure. For a dizzy patient: rest, a call bell, and a bedside rail. Monitoring may go to Q4H or Q1H.",
        note: "Correct. Those are the doctor-may-order remarks, the footnote about sudden increase and decrease, the dizziness nursing care, and the Q4H or Q1H monitoring line.",
      },
      {
        text: "No action unless the systolic pressure is above 160 mmHg.",
        note: "This page is the SBP < 90 mmHg row.",
      },
    ],
    answer: 2,
    page: "18",
  },
  {
    id: "surg-035",
    topicId: "SURG",
    topic: "Oxygen saturation",
    scene: "During observations the pulse oximeter reads under 90%.",
    ask: "What does the saturation page tell you to do first about that number?",
    choices: [
      {
        text: "Wait for the end of the shift routine before telling anyone.",
        note: "The instruction is to inform the team nurse immediately when SpO2 is less than 90%.",
      },
      {
        text: "Inform the team nurse immediately if SpO2 is less than 90%.",
        note: "Correct. The page opens with: inform the team nurse immediately if the patient's SpO2 is less than 90%.",
      },
      {
        text: "Start a 100% oxygen mask before telling the team nurse.",
        note: "The 50% or 100% mask is the later step if cannula oxygen still fails, not the first line on this page.",
      },
      {
        text: "Treat under 92% in every patient as this same immediate call.",
        note: "The immediate threshold on this page is less than 90%; 88-92% is the later COPD aim.",
      },
    ],
    answer: 1,
    page: "19",
  },
  {
    id: "surg-036",
    topicId: "SURG",
    topic: "Oxygen saturation",
    scene: "The finger probe may be unreliable and you have a second limb to try.",
    ask: "What checks and charting does this page add?",
    choices: [
      {
        text: "Chart the lower limb so desaturation is not missed.",
        note: "The page says chart the highest one after the bilateral recheck.",
      },
      {
        text: "Ignore cold fingers because only a cuff error changes SpO2.",
        note: "The page tells you to make sure the reading is not affected by cold or circulation.",
      },
      {
        text: "Chart the ear temperature instead of either limb.",
        note: "This page is about SpO2 limbs, not tympanic charting.",
      },
      {
        text: "Make sure SpO2 is not affected by cold or circulation, recheck both limbs, and chart the highest one.",
        note: "Correct. The page says make sure SpO2 is not affected by cold or circulation, recheck bilateral limbs, and chart the highest one.",
      },
    ],
    answer: 3,
    page: "19",
  },
  {
    id: "surg-037",
    topicId: "SURG",
    topic: "Oxygen saturation",
    scene: "You hear a sputum sound while the saturation is being checked.",
    ask: "What problem and action does the page name?",
    choices: [
      {
        text: "The sound means the oxygen mask is too tight, so remove all oxygen.",
        note: "The page links the sputum sound to sputum retention and nasopharyngeal suction, not to removing oxygen.",
      },
      {
        text: "Give orange juice before any airway clearance.",
        note: "Orange juice is the conscious low-glucose care, not this saturation line.",
      },
      {
        text: "The patient may have sputum retention, and the airway is cleared by nasopharyngeal suction.",
        note: "Correct. The page says if there is sputum sound, the patient may suffer from sputum retention, and to clear the airway by nasopharyngeal suction.",
      },
      {
        text: "Suction is forbidden until a chest X-ray is done.",
        note: "The page names nasopharyngeal suction for the sputum sound; it does not require a chest X-ray first.",
      },
    ],
    answer: 2,
    page: "19",
  },
  {
    id: "surg-038",
    topicId: "SURG",
    topic: "Oxygen therapy",
    scene: "SaO2 has not come back to normal within 20-30 second.",
    ask: "What oxygen step does the page give next?",
    choices: [
      {
        text: "Apply oxygen by nasal cannula, such as 2 L/min, 4 L/min and 6 L/min, as the doctor's prescription.",
        note: "Correct. The page says if SaO2 still does not return to normal within 20-30 second, apply oxygen therapy via nasal cannula, such as 2 L/min, 4 L/min and 6 L/min as doctor's prescription.",
      },
      {
        text: "Start at 8 L/min by cannula because 6 L/min is not on the page.",
        note: "The cannula examples printed are 2 L/min, 4 L/min and 6 L/min, not 8 L/min.",
      },
      {
        text: "Apply the cannula only after a full hour of low saturation.",
        note: "The time printed is within 20-30 second, not one hour.",
      },
      {
        text: "Choose any litre flow without a prescription.",
        note: "The page says as doctor's prescription.",
      },
    ],
    answer: 0,
    page: "20",
  },
  {
    id: "surg-039",
    topicId: "SURG",
    topic: "Oxygen therapy",
    scene: "Cannula oxygen has still failed to restore the saturation.",
    ask: "What does the page say to do then?",
    choices: [
      {
        text: "Go back to room air and recheck tomorrow.",
        note: "Failure of the cannula step leads to a 50% or 100% mask and a doctor call as soon as possible.",
      },
      {
        text: "Use only a 24% mask, because 50% and 100% are not printed.",
        note: "The page names 50% or 100% oxygen mask.",
      },
      {
        text: "Start Bair Hugger instead of a mask.",
        note: "Bair Hugger is the low-temperature device, not this oxygen-failure line.",
      },
      {
        text: "Apply a 50% or 100% oxygen mask and call the doctor for further management as soon as possible.",
        note: "Correct. The page says if still fail, apply 50% or 100% oxygen mask, and call the doctor for further management as soon as possible.",
      },
    ],
    answer: 3,
    page: "20",
  },
  {
    id: "surg-040",
    topicId: "SURG",
    topic: "COPD oxygen",
    scene: "The patient has COPD and you are setting the saturation target before giving oxygen.",
    ask: "What SpO2 range does this page say to aim for in COPD?",
    choices: [
      {
        text: "At least 96% for every COPD patient.",
        note: "The COPD aim printed is 88-92%, not 96% or above.",
      },
      {
        text: "88-92%.",
        note: "Correct. The page says for a patient with COPD, the SpO2 is aimed to keep 88-92%.",
      },
      {
        text: "Under 80%, the same as the immediate call threshold.",
        note: "Less than 90% is the immediate team-nurse call on the earlier page; the COPD aim is 88-92%.",
      },
      {
        text: "There is no COPD target in this file.",
        note: "The page prints 88-92% for COPD.",
      },
    ],
    answer: 1,
    page: "21",
  },
  {
    id: "surg-041",
    topicId: "SURG",
    topic: "COPD oxygen",
    scene: "A student asks how a normal person's breathing rate is controlled, using this page.",
    ask: "What does the note say drives the respiratory rate in normal people?",
    choices: [
      {
        text: "The O2 sensor and the CO2 sensor in the brain. Low oxygen in the blood or high CO2 in the blood will increase the respiratory rate.",
        note: "Correct. The page says for normal people the RR is controlled by the O2 sensor and CO2 sensor in the brain, and that low O2 or high CO2 concentration in blood will increase the RR.",
      },
      {
        text: "Only a carbon-dioxide sensor, with oxygen having no effect.",
        note: "The page names both the O2 sensor and the CO2 sensor, and low O2 as well as high CO2.",
      },
      {
        text: "Only the oxygen sensor, in every person including those without COPD.",
        note: "The oxygen-only mechanism is the later COPD point, after the CO2 sensor is described as deactivated.",
      },
      {
        text: "The respiratory rate falls when CO2 is high.",
        note: "The page says high CO2 concentration in blood will increase the RR in normal people.",
      },
    ],
    answer: 0,
    page: "21",
  },
  {
    id: "surg-042",
    topicId: "SURG",
    topic: "COPD oxygen",
    scene: "The same student asks what is different about carbon dioxide in COPD.",
    ask: "What does the page say happens to the CO2 sensor?",
    choices: [
      {
        text: "The CO2 sensor becomes more sensitive, so small rises stop breathing.",
        note: "The page says the brain CO2 sensor is deactivated, not that it becomes more sensitive.",
      },
      {
        text: "COPD patients have a chronic low CO2, so the sensor is removed surgically.",
        note: "The page says a chronic condition of high CO2, and that the sensor is deactivated; it does not describe surgery.",
      },
      {
        text: "In COPD there is a chronic high CO2 level in the blood, and the brain CO2 sensor is deactivated.",
        note: "Correct. The page says COPD patients experience a chronic condition of high CO2 level in blood, and the brain CO2 sensor is deactivated.",
      },
      {
        text: "The O2 sensor is the one that is deactivated in COPD.",
        note: "The page deactivates the CO2 sensor; the next page says the remaining mechanism is the O2 level.",
      },
    ],
    answer: 2,
    page: "21",
  },
  {
    id: "surg-043",
    topicId: "SURG",
    topic: "COPD oxygen",
    scene: "Someone is about to turn the oxygen up high on the COPD patient.",
    ask: "Why does this page warn against too much oxygen?",
    choices: [
      {
        text: "High oxygen reactivates the CO2 sensor and makes the rate rise safely.",
        note: "The page says high oxygen leads the O2 sensor to reduce the respiratory rate and worsens CO2 retention.",
      },
      {
        text: "The only mechanism left to regulate the respiratory rate is the oxygen level in the blood. High oxygen tells the body the rate can be reduced, and that decrease further worsens CO2 retention. The note puts it as 俾太多氧氣個patient㑹唔識抖氣.",
        note: "Correct. That is the page: O2 level is the only mechanism, high O2 lets RR be reduced, decreased RR worsens CO2 retention, and that Cantonese warning is printed.",
      },
      {
        text: "Extra oxygen is harmless because both sensors still work as in a person without COPD.",
        note: "The previous page says the COPD CO2 sensor is deactivated, so oxygen level is the remaining mechanism.",
      },
      {
        text: "The warning is about tympanic earwax, not breathing.",
        note: "The Cantonese line and the CO2-retention sentences are on the oxygen page.",
      },
    ],
    answer: 1,
    page: "22",
  },
  {
    id: "surg-044",
    topicId: "SURG",
    topic: "COPD oxygen",
    scene: "The COPD patient's oxygen has been increased and you need the next investigation step named here.",
    ask: "What follow-up does the page ask for?",
    choices: [
      {
        text: "A urine stick for glucose only.",
        note: "Urine glucose is a perioperative test; this page names ABG.",
      },
      {
        text: "Stop all observations once the mask is on.",
        note: "The page asks for close monitoring.",
      },
      {
        text: "Give Panadol 500 mg instead of telling the doctor.",
        note: "Panadol is the fever example; this page says inform the doctor and names ABG.",
      },
      {
        text: "Close monitoring, and inform the doctor for further investigation such as arterial blood gas (ABG).",
        note: "Correct. The page says close monitoring and inform the doctor for further investigation, such as blood test arterial blood gas (ABG).",
      },
    ],
    answer: 3,
    page: "22",
  },
  {
    id: "surg-045",
    topicId: "SURG",
    topic: "Low blood glucose",
    scene: "The routine meter reads under 4 mmol/L. You need to know who to tell, and how fast.",
    ask: "What reporting does the low-glucose page require?",
    choices: [
      {
        text: "Phone the doctor yourself before the team nurse sees the meter.",
        note: "The action says report to the team nurse; the team nurse is the one who informs the doctor.",
      },
      {
        text: "Report only if the reading is above 16 mmol/L.",
        note: "Above 16 is the next page; this page is the < 4 mmol/L action.",
      },
      {
        text: "Report to the team nurse when you see the reading after the routine blood glucose. Report immediately if the patient is dizzy or unconscious.",
        note: "Correct. That is the action column for < 4 mmol/L.",
      },
      {
        text: "Do not report a reading under 4 if the patient is unconscious.",
        note: "Unconscious is a reason to report immediately, not a reason to withhold the report.",
      },
    ],
    answer: 2,
    page: "23",
  },
  {
    id: "surg-046",
    topicId: "SURG",
    topic: "Low blood glucose",
    scene: "The reading is still under 4 mmol/L. One patient is awake and one cannot be roused.",
    ask: "What treatment contrast does the page give?",
    choices: [
      {
        text: "A conscious patient is given orange juice or milk. For an unconscious patient an intravenous site is set up and D50 is given via that site as the doctor's prescription. Anti-hyperglycemic drugs are withheld as the doctor ordered.",
        note: "Correct. Those are the nursing-care lines for < 4 mmol/L.",
      },
      {
        text: "Both patients get orange juice, including the unconscious patient.",
        note: "Orange juice or milk is for the conscious patient; the unconscious patient is given D50 via an intravenous site.",
      },
      {
        text: "The unconscious patient is given oral Panadol 500 mg.",
        note: "Panadol is the fever example; this page names D50 via the intravenous site for the unconscious patient.",
      },
      {
        text: "Anti-hyperglycemic drugs are doubled as the first response.",
        note: "The page says withhold the patient's anti-hyperglycemic drugs as doctor ordered.",
      },
    ],
    answer: 0,
    page: "23",
  },
  {
    id: "surg-047",
    topicId: "SURG",
    topic: "Low blood glucose",
    scene: "The team nurse is deciding how to tell the doctor about the low reading.",
    ask: "How does the remark differ for a conscious patient and an unconscious patient?",
    choices: [
      {
        text: "Both cases wait for the next day's ward round.",
        note: "The unconscious remark is phone the doctor immediately.",
      },
      {
        text: "The conscious patient is the one who triggers an immediate phone call, and the unconscious patient waits.",
        note: "It is the other way round on this page.",
      },
      {
        text: "The doctor is not informed in either case.",
        note: "The team nurse informs the doctor during the ward round if conscious, and by phone immediately if unconscious.",
      },
      {
        text: "If the patient is conscious, the team nurse informs the doctor during the ward round and the anti-hyperglycemic drugs are withheld. If the patient is unconscious, the team nurse phones the doctor immediately and IV D50 will be prescribed.",
        note: "Correct. That is the split in the remarks column.",
      },
    ],
    answer: 3,
    page: "23",
  },
  {
    id: "surg-048",
    topicId: "SURG",
    topic: "Low blood glucose",
    scene: "The conscious patient has taken the orange juice and you plan the next meter check.",
    ask: "When does the page say to recheck, and what else may be ordered?",
    choices: [
      {
        text: "Recheck only the next morning.",
        note: "The interval printed is 15-30 minutes after the intake or treatment.",
      },
      {
        text: "Recheck the blood glucose 15-30 minutes after meals, orange juice, milk, or the doctor's treatment. The doctor may order more frequent glucose testing and a blood test.",
        note: "Correct. The remarks say recheck after the patient has taken meals or orange juice or milk or the doctor's treatment after 15-30 min, and the doctor may increase the frequency of blood glucose test and blood test.",
      },
      {
        text: "Do not recheck once orange juice has been given.",
        note: "The page tells you to recheck after that intake.",
      },
      {
        text: "Recheck tympanic temperature instead of glucose.",
        note: "The 15-30 minute recheck on this page is of the blood glucose level.",
      },
    ],
    answer: 1,
    page: "23",
  },
  {
    id: "surg-049",
    topicId: "SURG",
    topic: "High blood glucose",
    scene: "The meter reads above 16 mmol/L on the routine round. The patient is awake and not dizzy.",
    ask: "What actions does the high-glucose page list?",
    choices: [
      {
        text: "Report to the team nurse after the routine blood glucose, but report immediately if the patient is dizzy or unconscious. Check or ask what the patient took, including anything taken on their own. Withhold the night snack. Do a urine test for ketone as hospital instruction.",
        note: "Correct. Those are the action lines for > 16 mmol/L.",
      },
      {
        text: "Give orange juice first, as you would for a reading under 4.",
        note: "Orange juice or milk is the conscious low-glucose care; this page does not use it for a reading above 16.",
      },
      {
        text: "Ignore self-taken food and still give the night snack.",
        note: "The page says check intake history, such as anything taken by own, and withhold the night snack.",
      },
      {
        text: "Skip the ketone urine test unless the reading is under 4.",
        note: "Urine test for ketone as hospital instruction is on the > 16 mmol/L page.",
      },
    ],
    answer: 0,
    page: "24",
  },
  {
    id: "surg-050",
    topicId: "SURG",
    topic: "High blood glucose",
    scene: "The team nurse has the > 16 mmol/L result and is calling about treatment.",
    ask: "What does the remark say the doctor may do?",
    choices: [
      {
        text: "Wait for the ward round, as with a conscious patient whose glucose is under 4.",
        note: "On this high-glucose page the team nurse phones the doctor immediately.",
      },
      {
        text: "Give intravenous D50 as the high-glucose drug.",
        note: "D50 is the unconscious low-glucose treatment; this page names subcutaneous insulin and, if DKA risk, a DKI drip.",
      },
      {
        text: "The team nurse phones the doctor immediately. The doctor may prescribe a subcutaneous insulin injection and monitor blood glucose Q4H. If there is a risk of DKA, a DKI drip will be ordered.",
        note: "Correct. That is the remarks column for the high-glucose row.",
      },
      {
        text: "Stop all glucose checks for 24 hours after one high reading.",
        note: "The page says monitor blood glucose level as Q4H.",
      },
    ],
    answer: 2,
    page: "24",
  },
  {
    id: "surg-051",
    topicId: "SURG",
    topic: "Glucose memory range",
    scene: "A student asks for the easy memory band printed under the high-glucose table, not the action cut-offs.",
    ask: "What range does that line give?",
    choices: [
      {
        text: "Under 4 mmol/L, which is the treatment line rather than the memory line.",
        note: "Under 4 is the low-glucose action threshold; the memory line is 4 to 8.",
      },
      {
        text: "4 mmol/L - 8 mmol/L.",
        note: "Correct. The page prints: common range for easy remember: 4 mmol/L - 8 mmol/L.",
      },
      {
        text: "Above 16 mmol/L.",
        note: "Above 16 is the high-glucose action row, not the easy-remember range.",
      },
      {
        text: "8 mmol/L - 16 mmol/L.",
        note: "The printed memory range is 4 mmol/L - 8 mmol/L, not 8 to 16.",
      },
    ],
    answer: 1,
    page: "24",
  },
  {
    id: "surg-052",
    topicId: "SURG",
    topic: "Glucose reporting",
    scene: "Two meters alarm: one conscious patient is under 4 mmol/L, and another is over 16 mmol/L.",
    ask: "How do the team-nurse remarks differ on who phones the doctor?",
    choices: [
      {
        text: "Both readings wait for the ward round, whatever the number.",
        note: "The > 16 page says phone the doctor immediately.",
      },
      {
        text: "The low conscious reading is an immediate phone call and the high reading waits.",
        note: "The pages place the immediate phone call on the unconscious low reading and on the high reading, not on the conscious low reading.",
      },
      {
        text: "Neither reading is reported if the patient can talk.",
        note: "A conscious low reading is still reported to the team nurse after the routine, and a high reading is reported to the team nurse after the routine, with immediate report if dizzy or unconscious.",
      },
      {
        text: "For the conscious patient under 4, the team nurse informs the doctor during the ward round. For the reading over 16, the team nurse phones the doctor immediately.",
        note: "Correct. The low-glucose remark uses the ward round for a conscious patient; the high-glucose remark says the team nurse will phone inform the doctor immediately.",
      },
    ],
    answer: 3,
    page: "23-24",
  },
  {
    id: "surg-053",
    topicId: "SURG",
    topic: "Perioperative definition",
    scene: "A student starting theatre allocation asks what perioperative nursing covers.",
    ask: "How does this page define it?",
    choices: [
      {
        text: "Only the intraoperative scrub role, with the family excluded.",
        note: "The definition includes patients, families, and significant others, and all three phases, not the scrub role alone.",
      },
      {
        text: "Only wound dressing after discharge home.",
        note: "The phases named are pre-operative, intraoperative and postoperative, not a home-dressing service alone.",
      },
      {
        text: "Nursing practices that address the needs of patients, their families, and significant others during the pre-operative, intraoperative and postoperative phases.",
        note: "Correct. That is the definition printed on the page. It also calls perioperative nursing a sophisticated arena of various roles, and says perioperative nurses endeavor to ensure quality patient care.",
      },
      {
        text: "The same list as the septic workup cultures.",
        note: "Cultures are the fever workup; this page is the definition of perioperative nursing.",
      },
    ],
    answer: 2,
    page: "26",
  },
  {
    id: "surg-054",
    topicId: "SURG",
    topic: "Perioperative outcome",
    scene: "The tutor asks what outcome this definition page wants.",
    ask: "What desired outcome is printed?",
    choices: [
      {
        text: "The patient's optimal level of wellness and functional status before, during and after surgical intervention.",
        note: "Correct. The page says the desired outcome is the achievement of patient optimal level of wellness and functional status before, during and after surgical intervention.",
      },
      {
        text: "A shorter waiting list, with functional status left out.",
        note: "The outcome named is optimal wellness and functional status around the operation, not a waiting-list target.",
      },
      {
        text: "Wellness only before surgery, not during or after.",
        note: "The page says before, during and after surgical intervention.",
      },
      {
        text: "Freedom from study pressure for the student.",
        note: "That purpose belongs to the study-manual introduction, not this outcome sentence.",
      },
    ],
    answer: 0,
    page: "26",
  },
  {
    id: "surg-055",
    topicId: "SURG",
    topic: "Perioperative practice",
    scene: "You are planning care once an operation is in prospect.",
    ask: "What does this page say perioperative practice includes?",
    choices: [
      {
        text: "It starts only when the patient enters the theatre, with no evaluation of outcomes.",
        note: "The page says practice begins with the prospect of an operative procedure and the evaluation of its outcomes.",
      },
      {
        text: "Evidence is set aside so that cost is the only factor.",
        note: "The page says the nurse uses evidence-based findings and considers safety, effectiveness, efficiency, environmental concerns, and cost together.",
      },
      {
        text: "Significant others are not part of the continuum.",
        note: "The page says perioperative nurses interact with both patients and their significant others throughout the care continuum.",
      },
      {
        text: "It begins with the prospect of an operation and the evaluation of its outcomes. Nurses interact with patients and significant others through the care continuum, use evidence-based findings, and consider safety, effectiveness, efficiency, environmental concerns, and cost.",
        note: "Correct. Those are the three points on the pre-operative investigation and management page.",
      },
    ],
    answer: 3,
    page: "27",
  },
  {
    id: "surg-056",
    topicId: "SURG",
    topic: "PPP",
    scene: "The theatre list says PPP beside tomorrow's case.",
    ask: "What does PPP stand for on this page?",
    choices: [
      {
        text: "Post Procedure Prescription.",
        note: "The expansion printed is Please Prepare Patient, not a prescription title.",
      },
      {
        text: "Please Prepare Patient.",
        note: "Correct. The page prints PPP = Please Prepare Patient.",
      },
      {
        text: "Pre-operative Platelet Protocol.",
        note: "Platelets are one blood test in the list below, but PPP is expanded as Please Prepare Patient.",
      },
      {
        text: "Patient Property Policy.",
        note: "Property handling is a later OT-day check; this page defines PPP as Please Prepare Patient.",
      },
    ],
    answer: 1,
    page: "28",
  },
  {
    id: "surg-057",
    topicId: "SURG",
    topic: "Pre-operative bloods",
    scene: "You are checking the PPP blood tests the day before theatre.",
    ask: "How does the page read platelet, Hb, INR, L/RFT and RG?",
    choices: [
      {
        text: "Platelet too low will not be able to stop bleeding during the operation. Hb too low may need blood transfusion before the operation. INR, written as Internationalized Normalized Ratio, abnormal will appear bleeding tendency. L/RFT looks at Na and K. RG is random glucose. CBP is also listed.",
        note: "Correct. Those are the blood-test glosses on the PPP page, including the printed wording Internationalized Normalized Ratio.",
      },
      {
        text: "A low platelet is ignored because only Hb affects bleeding.",
        note: "The page says platelet too low will not able to stop bleeding during operation, and separately that Hb too low may need transfusion.",
      },
      {
        text: "An abnormal INR means the kidney tests, and L/RFT means clotting.",
        note: "INR abnormal will appear bleeding tendency; L/RFT is the Na and K line.",
      },
      {
        text: "RG means a fasting lipid test.",
        note: "The page says RG: Random Glucose.",
      },
    ],
    answer: 0,
    page: "28",
  },
  {
    id: "surg-058",
    topicId: "SURG",
    topic: "Pre-operative medicines",
    scene: "The drug chart has several medicines to sort before the operation.",
    ask: "Which withhold examples does the page give?",
    choices: [
      {
        text: "Aspirin for 1 week and Plavix for 3 days, the intervals swapped.",
        note: "Aspirin is printed as at least 3 days, and Plavix for 1 week.",
      },
      {
        text: "Anti-hyperglycemic drugs only when the patient is eating, not when NPO.",
        note: "The page says anti-hyperglycemic drugs for an NPO case.",
      },
      {
        text: "Aspirin at least 3 days, heparin, enoxaparin (IMI), Plavix as an antiplatelet drug for 1 week, warfarin, and anti-hyperglycemic drugs for an NPO case.",
        note: "Correct. The page lists those as medications the doctor will prescribe to be withheld before operation.",
      },
      {
        text: "Enoxaparin by mouth, with heparin left off the list.",
        note: "Enoxaparin is written (IMI), and heparin is on the list.",
      },
    ],
    answer: 2,
    page: "29",
  },
  {
    id: "surg-059",
    topicId: "SURG",
    topic: "Pre-operative medicines",
    scene: "You are about to give the pre-operative medicine and you are unsure about an anticoagulant.",
    ask: "What does the page tell you to do?",
    choices: [
      {
        text: "Withhold every anticoagulant even when the instruction says continue.",
        note: "The page says confirm whether it has been withheld or continued as the doctor's instructions.",
      },
      {
        text: "Confirm whether a related medicine such as an anticoagulant has been withheld or continued as the doctor's instructions. Administer or prepare the pre-operative medicine as prescribed and comply with the Five Rights. Clarify with the doctor if there is any doubt.",
        note: "Correct. Those are the three instruction lines under the withhold list. The page does not spell out the five rights; it says comply with the Five Rights principle.",
      },
      {
        text: "Skip the Five Rights because this is only a pre-operative dose.",
        note: "The page says comply with the Five Rights principle.",
      },
      {
        text: "Guess the dose if the chart is unclear, and do not ask the doctor.",
        note: "The page says clarify with the doctor if any doubts.",
      },
    ],
    answer: 1,
    page: "29",
  },
  {
    id: "surg-060",
    topicId: "SURG",
    topic: "Pre-operative urine",
    scene: "The PPP list includes a routine urine test for a urology patient with BPH.",
    ask: "What urine items does the page name?",
    choices: [
      {
        text: "Blood culture instead of any urine test.",
        note: "Bld x C/ST is the septic-workup blood culture; this page is the routine urine list.",
      },
      {
        text: "MSU culture for every specialty, and no stick test.",
        note: "The culture line is for a URO case, and glucose and protein by urine stick are also listed.",
      },
      {
        text: "IPSS for every surgical patient, not the BPH case.",
        note: "The page says U+RU, IPSS questionnaire for a BPH case.",
      },
      {
        text: "Glucose and protein by urine stick; MSU or CSU for culture for a URO case; and U+RU plus an IPSS questionnaire for a BPH case.",
        note: "Correct. That is the routine urine-test list on the page.",
      },
    ],
    answer: 3,
    page: "30",
  },
  {
    id: "surg-061",
    topicId: "SURG",
    topic: "Weight and height",
    scene: "The anaesthetist needs numbers from the pre-operative measurement page.",
    ask: "Why are body weight and height taken, and which unit is named?",
    choices: [
      {
        text: "For dietetic review only, with the unit in pounds.",
        note: "The page ties the measurement to antiesthetic drug calculation and says the unit should be kg.",
      },
      {
        text: "Weight is not required if height is known.",
        note: "Both body weight and height are listed.",
      },
      {
        text: "For antiesthetic drugs calculation, and the unit should be kg.",
        note: "Correct. The page says body weight and height are for antiesthetic drugs calculation (unit should be kg), using that spelling.",
      },
      {
        text: "The unit printed is cm for the drug calculation.",
        note: "The unit named for the calculation is kg.",
      },
    ],
    answer: 2,
    page: "30",
  },
  {
    id: "surg-062",
    topicId: "SURG",
    topic: "Pre-operative checklist",
    scene: "It is the evening before theatre and you are working through the preparation list.",
    ask: "Which items does this checklist page name?",
    choices: [
      {
        text: "Informed consent available and valid, with major consent by the M.O. and minor consent by the H.O.; ECG and chest X-ray; surgical site marking; body-hair clipping if required; bathing; FAMN, fast after midnight; and a reminder NPO sign.",
        note: "Correct. Those are the items on the perioperative-care checklist page.",
      },
      {
        text: "Minor consent by the M.O. and major consent by the H.O.",
        note: "The page says major consent by M.O. and minor consent by H.O.",
      },
      {
        text: "FAMN means free fluids after midnight.",
        note: "The page writes FAMN (Fast after mid-night).",
      },
      {
        text: "Site marking is omitted, and hair must always be shaved with no if required.",
        note: "Surgical site marking is listed, and body hair clipping is if required.",
      },
    ],
    answer: 0,
    page: "31",
  },
  {
    id: "surg-063",
    topicId: "SURG",
    topic: "Perioperative record",
    scene: "You are looking at the perioperative nursing record before the patient leaves the ward.",
    ask: "What does this page say the record and PNIS are for?",
    choices: [
      {
        text: "One identical paper form is used in every hospital, with no digital system.",
        note: "The page says different hospitals have various records, and that PNIS digitalizes the handwriting sheet and whiteboard.",
      },
      {
        text: "The record is only for the ward clerk and is not shared with the theatre.",
        note: "The page says the record maintains accurate communication between the operation theatre and the postoperative care nurse.",
      },
      {
        text: "Documentation is optional once the whiteboard is wiped.",
        note: "The page says proper documentation provides an accurate and clear record for continuity and consistency of care.",
      },
      {
        text: "Hospitals vary in their records. The record keeps accurate communication between the theatre and the postoperative nurse. Proper documentation gives a clear record for continuity and consistency. PNIS was adopted to digitalize the handwriting sheet and whiteboard used for intraoperative nursing documentation.",
        note: "Correct. Those are the points on the perioperative nursing record page, including Perioperative Nursing Information System (PNIS).",
      },
    ],
    answer: 3,
    page: "33",
  },
  {
    id: "surg-064",
    topicId: "SURG",
    topic: "Identity check",
    scene: "The porter is at the bedside on OT morning.",
    ask: "What identity details does the first checking page tell you to confirm?",
    choices: [
      {
        text: "Bed number only, without the HKID.",
        note: "The page includes name, HKID number and bracelet, not the bed number alone.",
      },
      {
        text: "Name, HKID number, and bracelet.",
        note: "Correct. Item 1 is check patient identification including name, HKID number and bracelet.",
      },
      {
        text: "The relative's HKID instead of the patient's.",
        note: "The check is the patient's name, HKID number and bracelet.",
      },
      {
        text: "Bracelet only if the patient is unconscious.",
        note: "The bracelet is part of the identity check as printed, not limited to unconscious patients.",
      },
    ],
    answer: 1,
    page: "34",
  },
  {
    id: "surg-065",
    topicId: "SURG",
    topic: "Fasting check",
    scene: "You continue the same OT-morning checks after the identity band.",
    ask: "What does the page say to check about intake and about what the patient knows?",
    choices: [
      {
        text: "The time of the last food and drink, and the patient's knowledge of the operation.",
        note: "Correct. Items 2 and 3 are time for last food and drink, and patient knowledge for operation.",
      },
      {
        text: "Only the breakfast menu for after surgery, not the last intake.",
        note: "The page asks for the time of the last food and drink.",
      },
      {
        text: "Knowledge of the hospital bill, not of the operation.",
        note: "Item 3 is patient knowledge for the operation.",
      },
      {
        text: "Last food only, with drinks ignored.",
        note: "The page says time for last food and drink.",
      },
    ],
    answer: 0,
    page: "34",
  },
  {
    id: "surg-066",
    topicId: "SURG",
    topic: "Consent check",
    scene: "The consent form is in the folder and you are checking it is complete.",
    ask: "What does this page say the consent check includes?",
    choices: [
      {
        text: "The patient's signature only, with the surgeons and anaesthetist left unsigned.",
        note: "The page includes surgeons, anaesthetist and patient signatures.",
      },
      {
        text: "A blank form is acceptable if the OT list is correct.",
        note: "The page asks you to check the consent form is complete in those details.",
      },
      {
        text: "Completion of the surgeons', anaesthetist's and patient's signatures, and the operation details: operative diagnosis, the operation that will be performed, and complication plus or minus the operation fact sheet.",
        note: "Correct. That is item 4 on the checking page.",
      },
      {
        text: "Complication is never written on the consent.",
        note: "The page includes complication +/- operation fact sheet.",
      },
    ],
    answer: 2,
    page: "34",
  },
  {
    id: "surg-067",
    topicId: "SURG",
    topic: "OT list check",
    scene: "The perioperative record still has empty boxes and the OT list is clipped behind it.",
    ask: "What must match?",
    choices: [
      {
        text: "Leave the blanks empty so the theatre can guess the operation.",
        note: "The page says fill in the blank, with the right identity and operation details.",
      },
      {
        text: "Fill the blanks on the perioperative nursing record, and match the OT list to the right patient identity and the operation details.",
        note: "Correct. Item 5 says check the perioperative nursing record, fill in the blank, and the OT list with right patient identity and operation details.",
      },
      {
        text: "Match the OT list to the bed number only.",
        note: "The page says right patient identity and operation details.",
      },
      {
        text: "The OT list is not used once the record exists.",
        note: "Item 5 includes the OT list together with the record.",
      },
    ],
    answer: 1,
    page: "34",
  },
  {
    id: "surg-068",
    topicId: "SURG",
    topic: "Special orders",
    scene: "The anaesthetist and surgeon have written PPP orders for this morning.",
    ask: "Which special-order examples does the page give?",
    choices: [
      {
        text: "Only oral Panadol 500 mg, with no blood products or IVF.",
        note: "Panadol 500 mg is the fever example; this page lists medicines, blood products, anaesthetic type, those IVF examples, and results seen by the house officer.",
      },
      {
        text: "Actrapid 4 units as a sliding scale you invent, not as the printed IVF example.",
        note: "Actrapid 4 units appears inside the example D10+ 10mmol KCL + Actrapid 4 units Q8H.",
      },
      {
        text: "Results need not be seen by anyone before transfer.",
        note: "The page says blood results, CXR and ECG with at least seen by the house officer.",
      },
      {
        text: "Medicines on call to OT, on induction, or withheld; blood, fresh frozen plasma or platelet transfusion; the anaesthetist order for GA, SA, LA or MAC; IVF examples such as 1\\2 1\\2 sol Q8H, 1D1S Q6H, and D10+ 10mmol KCL + Actrapid 4 units Q8H; and blood results, CXR and ECG at least seen by the house officer.",
        note: "Correct. Those are the special-order examples under item 6.",
      },
    ],
    answer: 3,
    page: "35",
  },
  {
    id: "surg-069",
    topicId: "SURG",
    topic: "Past history and infection",
    scene: "Before transfer you ask a short past-history question and look at infection flags.",
    ask: "What script and which infection labels does the page give?",
    choices: [
      {
        text: "Ask only about allergy to plaster, and ignore hepatitis and diabetes.",
        note: "The plaster question is the allergy script on the next page; this item is the past-history prompt, which includes 肝炎 and 糖尿.",
      },
      {
        text: "CRE and VRE mean the patient must go first on the list.",
        note: "The page says may need to arrange the patient to be the last user of the operation theater.",
      },
      {
        text: "Ask 有無肝炎、肺病、心藏病、糖尿、血壓或要覆診既病. Infection status named includes MRSA, Hep. B, CRE and VRE, and the patient may need to be the last user of the theatre.",
        note: "Correct. That is item 7, including the Cantonese prompt and those infection labels, and the last-user arrangement.",
      },
      {
        text: "The history prompt leaves out heart disease and blood pressure.",
        note: "The prompt includes 心藏病 and 血壓.",
      },
    ],
    answer: 2,
    page: "35",
  },
  {
    id: "surg-070",
    topicId: "SURG",
    topic: "Allergy script",
    scene: "You are at the bedside asking about allergy before theatre.",
    ask: "What wording does the page give you to use?",
    choices: [
      {
        text: "有無食物、藥物敏感或貼膠布有無敏感.",
        note: "Correct. Item 8 prints that allergy history question, covering food, drug, and plaster.",
      },
      {
        text: "有無鬆牙或假牙, which is the teeth question.",
        note: "The teeth question is item 9; item 8 is the food, drug and plaster allergy script.",
      },
      {
        text: "Ask about drug allergy only, and skip food and plaster.",
        note: "The printed script includes 食物, 藥物 and 貼膠布.",
      },
      {
        text: "There is no allergy question on the OT-day pages.",
        note: "Item 8 is the allergy history question.",
      },
    ],
    answer: 0,
    page: "36",
  },
  {
    id: "surg-071",
    topicId: "SURG",
    topic: "Teeth and preparation asks",
    scene: "You continue the bedside questions after allergy.",
    ask: "Which further questions does this page print?",
    choices: [
      {
        text: "Ask about general anaesthesia only, and do not mention local.",
        note: "The printed question is whether it is local or general anaesthesia.",
      },
      {
        text: "Leave a denture in place without checking if it can be removed.",
        note: "The page says if there is a denture, check whether it can be taken off.",
      },
      {
        text: "Nail polish may stay on, and contact lenses are not asked about.",
        note: "Items 11 and 12 ask about contact lens and about removing nail polish.",
      },
      {
        text: "Loose or movable or unmovable denture: 有無鬆牙或假牙, and if there is a denture, check whether it can be taken out. Operation knowledge: 知唔知係局部定全身麻醉. Contact lens: 有無帶隱形眼鏡. Nail polish: 有無抹走指甲油.",
        note: "Correct. Those are items 9 to 12.",
      },
    ],
    answer: 3,
    page: "36",
  },
  {
    id: "surg-072",
    topicId: "SURG",
    topic: "Patient property",
    scene: "The patient is still wearing a watch and a necklace at the bedside.",
    ask: "What property handling does the page remind you of?",
    choices: [
      {
        text: "Send all valuables to theatre with the patient.",
        note: "The page says valuables may be stored in the ward property cupboard, and tells the patient to remove jewellery and items.",
      },
      {
        text: "Remove all jewellery and items, including metal items, rings, watches and necklaces. Valuables may be kept for the time being in the ward patient-property cupboard.",
        note: "Correct. The Chinese reminder says remove all jewellery and items, including metal items, rings, watches and necklaces, and that valuables may be stored in the ward patient property cupboard.",
      },
      {
        text: "Rings and watches may stay on if they are not gold.",
        note: "The list includes rings and watches among items to remove, not only one metal.",
      },
      {
        text: "Only the necklace comes off; the watch stays for timing drugs.",
        note: "Watches are in the remove list together with necklaces.",
      },
    ],
    answer: 1,
    page: "36",
  },
  {
    id: "surg-073",
    topicId: "SURG",
    topic: "Pre-operative vitals",
    scene: "The checks are nearly done and the patient still looks flushed.",
    ask: "What do the next numbered items say about vital signs and a change such as fever?",
    choices: [
      {
        text: "Assess the pre-operative vital signs. Inform the surgeon, the anaesthetist and the theatre staff if the condition changes, for example fever.",
        note: "Correct. Items 14 and 15 say assess pre-operative vital signs and inform those people if there is a change such as fever.",
      },
      {
        text: "Skip vital signs on OT morning because they were done yesterday.",
        note: "Item 14 is assess the patient's pre-operative vital signs.",
      },
      {
        text: "Tell only the ward clerk about a new fever.",
        note: "The page says inform the surgeon, anaesthetist and operation theatre staff.",
      },
      {
        text: "A fever is not an example of a change worth reporting.",
        note: "The page gives fever as the example of a change in condition.",
      },
    ],
    answer: 0,
    page: "37",
  },
  {
    id: "surg-074",
    topicId: "SURG",
    topic: "Site, drugs and attire",
    scene: "The patient is almost ready to move, and a cardiac tablet is due.",
    ask: "What else does this checking page require?",
    choices: [
      {
        text: "Give the cardiac drug with a full cup of tea, not 50 ml of water.",
        note: "The page says take medication with 50 ml water if indicated, such as hypertensive and cardiac drugs.",
      },
      {
        text: "Site marking is never checked on OT day.",
        note: "Item 16 is check the correct site is marked where applicable.",
      },
      {
        text: "Check the correct site is marked where applicable. If indicated, take medicine such as hypertensive and cardiac drugs with 50 ml of water. Remove all underwear and put on operation attire. Make the bed ready for after the operation.",
        note: "Correct. Items 16 to 19 cover site marking, 50 ml water for those drugs, removal of underwear and operation attire, and bed making for post-operation.",
      },
      {
        text: "Leave underwear on under the theatre gown.",
        note: "Item 18 says remove all underwear and put on operation attire.",
      },
    ],
    answer: 2,
    page: "37",
  },
  {
    id: "surg-075",
    topicId: "SURG",
    topic: "Record ticks",
    scene: "You are filling the perioperative record from the worked examples.",
    ask: "How does the page tell you to mark readiness, and what do the two medication timings mean?",
    choices: [
      {
        text: "A cross means ready and a tick means not ready.",
        note: "The page says a tick for ready and a cross for not ready.",
      },
      {
        text: "Verify the proposed operation against the official operation list and the consent. Put a tick for ready, a cross for not ready, and NA for not applicable. Medication on induction means bring to OT. Medication on call to OT means you receive a phone call from OT and give it before transfer. Some theatres ask for a printout of IPMOE for the last regimen.",
        note: "Correct. Those instructions are the example pages: verify against the official list and consent; tick, cross and NA; the two medication meanings; and IPMOE for the last regimen.",
      },
      {
        text: "On induction means wait for a phone call, and on call means bring the drug to OT.",
        note: "The page says on induction means bring to OT, and on call to OT means give it after the phone call before transfer.",
      },
      {
        text: "Fill the operation name from memory, not from the list and consent.",
        note: "The page says verify and fill in the proposed operation details according to the official operation list and the consent.",
      },
    ],
    answer: 1,
    page: "39-40",
  },
  {
    id: "surg-076",
    topicId: "SURG",
    topic: "Blood and pacemaker",
    scene: "The record is almost signed. The patient has a pacemaker, and blood has been requested.",
    ask: "What do the last example pages say about blood, the pacemaker, and the signature?",
    choices: [
      {
        text: "OTBTS means the ward nurse must crossmatch blood at the bedside without a system.",
        note: "The page describes OTBTS as a virtual blood banking system for computer crossmatch-compatible ordering and delivery in the theatre, remote from the hospital blood bank.",
      },
      {
        text: "The student changes the pacemaker mode without calling the company.",
        note: "The page says the team nurse should contact the pacemaker company sales representative to adjust the mode.",
      },
      {
        text: "Loose teeth and unremovable items are left off the record.",
        note: "The page says record and inform OT staff about those unremovable items and loose teeth, and the team nurse signs after the whole check.",
      },
      {
        text: "Check that investigation results and blood-product preparation are ready. OTBTS means operating theater blood transaction system, a virtual blood bank for computer crossmatch-compatible blood ordering and delivery in the theatre, remote from the hospital blood bank. For a pacemaker, the team nurse contacts the company sales representative to adjust the mode for the operation. Record and tell OT staff about unremovable items and loose teeth. After the whole check, the team nurse signs the form.",
        note: "Correct. Those points are on the last two example pages, including the printed expansion operating theater blood transaction system.",
      },
    ],
    answer: 3,
    page: "41-42",
  },
  {
    id: "surg-077",
    topicId: "SURG",
    topic: "Recovery room",
    scene: "The recovery room phones that the operation is complete, and you are going to collect the patient.",
    ask: "What does the discharge page say to bring and to check in the recovery room?",
    choices: [
      {
        text: "Leave the recovery tray on the ward and check only the bed number.",
        note: "The page says bring the recovery tray, kit or box, and check name, HKID, bracelet, conscious level and vital signs.",
      },
      {
        text: "Check the HKID only if the patient is awake.",
        note: "Bracelet, conscious level and vital signs are in the same check as name and HKID.",
      },
      {
        text: "Before you go to the theatre, bring the recovery tray, kit or box and special items the OT nurse asked for, such as an extra pillow. In the recovery room check name, HKID number, bracelet, conscious level and vital signs.",
        note: "Correct. Those are the first two points on the discharge-from-recovery page.",
      },
      {
        text: "An extra pillow is forbidden in the recovery collection.",
        note: "An extra pillow is the example of a special item requested by the OT nurse.",
      },
    ],
    answer: 2,
    page: "44",
  },
  {
    id: "surg-078",
    topicId: "SURG",
    topic: "Recovery room",
    scene: "You are reading the recovery handover before the patient leaves that room.",
    ask: "What operation and anaesthetic facts does the page tell you to check?",
    choices: [
      {
        text: "The name of the operation done, the postoperative diagnosis, and the final anaesthetic method: general, spinal or local. Also the estimated blood loss and any intra-operative complications.",
        note: "Correct. Points 3 and 4 name the operation done, postoperative diagnosis, final method GA, SA or LA, estimated blood loss, and intra-operative complications.",
      },
      {
        text: "Only the planned operation from yesterday, not the operation actually done.",
        note: "The page says check the name of the OT done and the postoperative diagnosis.",
      },
      {
        text: "The anaesthetic method is omitted once blood loss is known.",
        note: "The final anaesthetic method GA, SA or LA is in the same check.",
      },
      {
        text: "Intra-operative complications are not recorded if blood loss is small.",
        note: "The page says estimated blood loss and any intra-operative complications.",
      },
    ],
    answer: 0,
    page: "44",
  },
  {
    id: "surg-079",
    topicId: "SURG",
    topic: "Recovery room",
    scene: "The patient is ready to leave recovery and you are checking the wound, oxygen and lines.",
    ask: "Which items does this second discharge page list before the fasting line?",
    choices: [
      {
        text: "Oxygen flow without asking until when.",
        note: "The page says check the prescription, L/min and till when.",
      },
      {
        text: "Drains only, with Foley and IVF left unchecked.",
        note: "Point 8 is any drain, Foley and IVF.",
      },
      {
        text: "Skip the wound if a dressing is already on.",
        note: "Point 5 is check the operation wound site for any active bleeding.",
      },
      {
        text: "Whether the wound is actively bleeding; any oxygen therapy, including the prescribed L/min and until when; medicines given in theatre or recovery, type and time; any drain, Foley and IVF; and the surgeon's post-op orders.",
        note: "Correct. Those are points 5 to 9.",
      },
    ],
    answer: 3,
    page: "45",
  },
  {
    id: "surg-080",
    topicId: "SURG",
    topic: "Post-op fasting",
    scene: "The recovery nurse says the patient may be NPO, and the ward is about to offer a drink.",
    ask: "What post-op NPO times does the page print?",
    choices: [
      {
        text: "GA 1.5 hour and SA 3 hours, the times swapped.",
        note: "GA is 3 hours if DAT is prescribed, and SA is 1.5 hour.",
      },
      {
        text: "GA: 3 hours if DAT is prescribed. SA: 1.5 hour. LA: not required. Confirm with the team nurse before giving any drink or food.",
        note: "Correct. That is the post-op NPO line, including the instruction to confirm with the team nurse before any drinks or foods.",
      },
      {
        text: "LA patients stay NPO for 6 hours.",
        note: "The page says LA is not required.",
      },
      {
        text: "Give food as soon as the patient asks, with no team-nurse check.",
        note: "The page says confirm with the team nurse before any drinks or foods.",
      },
    ],
    answer: 1,
    page: "45",
  },
  {
    id: "surg-081",
    topicId: "SURG",
    topic: "Return to ward",
    scene: "The patient is back in the surgical bed after thyroidectomy.",
    ask: "What observations and oxygen or fluid points does the return page start with?",
    choices: [
      {
        text: "Blood pressure and pulse, body temperature and SpO2. For a post-thyroidectomy patient, continuous SpO2 monitoring and a recovery tray or box. Keep IVF continuous and secured. Give oxygen if it is prescribed.",
        note: "Correct. Those are the first three return-to-ward points, including the thyroidectomy SpO2 and recovery tray or box.",
      },
      {
        text: "Spot SpO2 only after thyroidectomy, with the recovery tray left in theatre.",
        note: "The page says continuous SpO2 monitoring and set up a recovery tray or box for the post-thyroidectomy patient.",
      },
      {
        text: "Stop the IVF on arrival so the cannula can rest.",
        note: "The page says continuous and secured IVF.",
      },
      {
        text: "Give oxygen to every return even when none is prescribed.",
        note: "The page says administrate O2 if prescribed.",
      },
    ],
    answer: 0,
    page: "46",
  },
  {
    id: "surg-082",
    topicId: "SURG",
    topic: "Return to ward",
    scene: "You are looking at the thyroidectomy wound and the patient's position.",
    ask: "What wound and position instructions are printed, and who receives the handover?",
    choices: [
      {
        text: "Leave oozing unmarked and change the dressing only if you choose to.",
        note: "The page says mark the oozing area, inform the team nurse if oozing is heavy, and change the outer dressing or the whole dressing as instructed.",
      },
      {
        text: "Lay every thyroidectomy patient flat, with 30o and 45o used only for spinal cases.",
        note: "The example prop-up at 30o or 45o is for the post-thyroidectomy patient, unless other instructions.",
      },
      {
        text: "Observe and record the wound, mark the oozing area, tell the team nurse if oozing is heavy, and change the outer dressing or the whole dressing as instructed. Unless there is another instruction, use the correct post-op position, for example prop up at 30o or 45o after thyroidectomy. Hand over to the case nurse or the shift in-charge.",
        note: "Correct. Those are points 4, 5 and 6, including prop up at 30o or 45o for the post-thyroidectomy patient and handover from the recovery nurse's information.",
      },
      {
        text: "Hand over only to the patient's relative.",
        note: "The page says handover to the case nurse or shift in-charge.",
      },
    ],
    answer: 2,
    page: "46",
  },
  {
    id: "surg-083",
    topicId: "SURG",
    topic: "Return to ward",
    scene: "The patient is awake enough to look at the pump, and a drain and a Foley are in place.",
    ask: "What does the second return page say about PCA, property, temperature and the tubes?",
    choices: [
      {
        text: "Return property while the patient is still not fully conscious.",
        note: "The page says return patient property when the patient is fully conscious.",
      },
      {
        text: "Teach the patient to use PCA if there is one. Return property when the patient is fully conscious. Check hypothermia management. Secure the drain and the Foley.",
        note: "Correct. Those are points 7 to 10.",
      },
      {
        text: "PCA is set up but not explained.",
        note: "The page says educate the patient to use PCA if any.",
      },
      {
        text: "Hypothermia is not checked once the patient is back in the ward.",
        note: "Point 9 is check for hypothermia management.",
      },
    ],
    answer: 1,
    page: "47",
  },
  {
    id: "surg-084",
    topicId: "SURG",
    topic: "Return to ward",
    scene: "You are writing the notes just after the patient arrives back.",
    ask: "What does the documentation point say to record?",
    choices: [
      {
        text: "Only the time of arrival, with wound and pain left out.",
        note: "Wound condition and pain level are both in the list.",
      },
      {
        text: "The nasogastric tube is omitted even if one is present.",
        note: "The list includes any drain, nasogastric tube and Foley.",
      },
      {
        text: "Education is not written down.",
        note: "Patient education provided is the last item in that documentation list.",
      },
      {
        text: "Time back to the ward, operation performed, general condition, vital signs, wound condition, pain level, IVF, any drain, nasogastric tube and Foley, and the patient education given.",
        note: "Correct. That is the documentation list in point 11.",
      },
    ],
    answer: 3,
    page: "47",
  },
  {
    id: "surg-085",
    topicId: "SURG",
    topic: "Return to ward",
    scene: "The IVF is running and the bedside bag and drain need a first chart.",
    ask: "What intake, output and intake checks does the page add?",
    choices: [
      {
        text: "Do not chart the drain until the next shift.",
        note: "The page includes the first emptying of the drain as ordered in the I.O. charting.",
      },
      {
        text: "Oral intake is never monitored after an operation.",
        note: "The page says monitor oral intake if indicated.",
      },
      {
        text: "Chart intake and output for the IVF, and the first emptying of the bedside bag or the drain as ordered. Monitor post-operative urination and oral intake if indicated.",
        note: "Correct. Points 12 and 13 say chart I.O. for IVF, first empty bedside bag or empty drain as order, and monitor post-operation urination and oral intake if indicated.",
      },
      {
        text: "Empty the bedside bag only after 24 hours, whatever the order.",
        note: "The page says first empty the bedside bag or drain as order, not after a fixed 24 hours.",
      },
    ],
    answer: 2,
    page: "47",
  },
  {
    id: "surg-086",
    topicId: "SURG",
    topic: "Wound oozing mark",
    scene: "There is a small stain on the outer dressing after the patient returns.",
    ask: "How does this page tell you to mark it?",
    choices: [
      {
        text: "Mark the oozing area with a marker pen on the outer dressing so you can see whether the oozing changes.",
        note: "Correct. The page says mark down the oozing area by marker pen on the outer dressing to observe the change of oozing.",
      },
      {
        text: "Mark the skin under the dressing and then discard the outer layer.",
        note: "The mark is on the outer dressing, so the change in oozing can be observed.",
      },
      {
        text: "Do not mark a light ooze; tell the team nurse only if you have already changed the whole dressing.",
        note: "This page's action is the marker-pen outline on the outer dressing. Heavy oozing is reported on the previous return page.",
      },
      {
        text: "Use a ballpoint on the wound itself.",
        note: "The page says marker pen on the outer dressing, not on the wound surface.",
      },
    ],
    answer: 0,
    page: "48",
  },
  {
    id: "surg-087",
    topicId: "SURG",
    topic: "Spinal anaesthesia",
    scene: "The anaesthetic record says SA, and the patient asks what that injection was.",
    ask: "How does this page describe spinal anaesthesia?",
    choices: [
      {
        text: "SA is a sedative tablet swallowed before theatre.",
        note: "The page describes injection of a local anaesthetic into the subarachnoid space through a fine needle.",
      },
      {
        text: "SA is the same as general anaesthesia because both erase memory.",
        note: "Amnesia is in the general-anaesthesia description; SA is described as blocking sensory signals to eliminate pain.",
      },
      {
        text: "The injection is into a muscle, not the subarachnoid space.",
        note: "The page says into the subarachnoid space.",
      },
      {
        text: "Spinal anaesthesia, 脊髓麻醉/半身麻醉, is regional anaesthesia: a local anaesthetic is injected into the subarachnoid space, generally through a fine needle. The aim is to block afferent nerve signals from peripheral nociceptors so sensory signals from the site are blocked and pain is eliminated.",
        note: "Correct. That is the SA text on the abbreviations page.",
      },
    ],
    answer: 3,
    page: "49",
  },
  {
    id: "surg-088",
    topicId: "SURG",
    topic: "General anaesthesia",
    scene: "The record says GA and a classmate asks what state that is.",
    ask: "What does the same page say general anaesthesia is?",
    choices: [
      {
        text: "GA is only a local injection into the operative site.",
        note: "Infiltration of the operative site is on the local-anaesthesia page; GA is medicines for amnesia, analgesia, muscle paralysis and sedation.",
      },
      {
        text: "General anaesthesia, 全身麻醉, is the state from medicines for amnesia, analgesia, muscle paralysis and sedation. The patient is in a controlled, reversible unconsciousness. It lets the patient tolerate procedures that would otherwise cause unbearable pain, extreme physiologic exacerbations, and unpleasant memories.",
        note: "Correct. That is the GA paragraph beside the spinal description.",
      },
      {
        text: "The unconsciousness of GA is not reversible.",
        note: "The page says a controlled, reversible state of unconsciousness.",
      },
      {
        text: "GA provides analgesia only, with no amnesia or paralysis.",
        note: "The page lists medicines for amnesia, analgesia, muscle paralysis, and sedation.",
      },
    ],
    answer: 1,
    page: "49",
  },
  {
    id: "surg-089",
    topicId: "SURG",
    topic: "Monitored anaesthesia care",
    scene: "The list says MAC rather than a general anaesthetic.",
    ask: "When is MAC described as the choice, and what is watched?",
    choices: [
      {
        text: "MAC, 監測麻醉, is often chosen when general anaesthesia or deep sedation is not required. Drugs go through an intravenous catheter and vital signs are monitored as in a general anaesthetic. The anaesthesiologist monitors blood pressure, heart rate, and the amount of oxygen carried to vital organs.",
        note: "Correct. That is the monitored anaesthesia care paragraph.",
      },
      {
        text: "MAC is chosen only when deep sedation is required.",
        note: "The page says MAC is often chosen when general anaesthesia or deep sedation is not required.",
      },
      {
        text: "Drugs are given into the subarachnoid space, as for spinal anaesthesia.",
        note: "Subarachnoid injection is the spinal description; MAC drugs are given through an intravenous catheter.",
      },
      {
        text: "Oxygen delivery to vital organs is not part of the MAC watch.",
        note: "The page says anaesthesiologists monitor blood pressure, heart rate, and the amount of oxygen carried to vital organs.",
      },
    ],
    answer: 0,
    page: "50",
  },
  {
    id: "surg-090",
    topicId: "SURG",
    topic: "Local anaesthesia",
    scene: "A patient booked for LA with sedation asks whether they can go home after a long procedure.",
    ask: "What does this page say local anaesthesia allows?",
    choices: [
      {
        text: "LA cannot be used for a long procedure, so every long case needs general anaesthesia.",
        note: "The page says local anaesthetic applications enable lengthy and complex procedures as outpatients.",
      },
      {
        text: "LA is only a nerve block, not infiltration.",
        note: "The page says local anaesthesia encompasses infiltration of the operative site, tumescent techniques, and nerve blocks.",
      },
      {
        text: "LA, 局部麻醉, with sedation lets the team tailor the depth of anaesthesia. Local anaesthetic use lets patients have lengthy and complex procedures as outpatients and then be discharged home promptly and safely. It covers infiltration of the operative site, tumescent techniques, and nerve blocks.",
        note: "Correct. That is the local-anaesthesia paragraph.",
      },
      {
        text: "Patients stay in hospital overnight after every LA case.",
        note: "The page says they may promptly and safely be discharged home.",
      },
    ],
    answer: 2,
    page: "50",
  },
  {
    id: "surg-091",
    topicId: "SURG",
    topic: "IV drop factor",
    scene: "You are about to regulate a gravity infusion from the surgical drip table.",
    ask: "What drop factor does the table print?",
    choices: [
      {
        text: "15 drops per ml, as a standard the table does not print.",
        note: "The figure printed is 20 drops per ml.",
      },
      {
        text: "Drop factor equals drops per ml: 20.",
        note: "Correct. The IV monitoring page states Drop factor = Drop per ml: 20.",
      },
      {
        text: "60 drops per ml for a micro-drip set.",
        note: "The table states 20, not 60.",
      },
      {
        text: "20 ml per drop.",
        note: "The page says drop per ml: 20, not ml per drop.",
      },
    ],
    answer: 1,
    page: "52",
  },
  {
    id: "surg-092",
    topicId: "SURG",
    topic: "IV rate",
    scene: "The order is 500 ml Q8H and you are using that drop-factor table.",
    ask: "What rate does the Q8H row print?",
    choices: [
      {
        text: "About 27.77 to 28 drops per minute, which is the Q6H row.",
        note: "27.77~28 drop/min is Q6H of 500 ml, not Q8H.",
      },
      {
        text: "About 166 drops per minute, which is the Q1H row.",
        note: "166.66~167 drop/min is Q1H of 500 ml.",
      },
      {
        text: "About 7 drops per minute, which is the Q24H row.",
        note: "6.94~7 drop/min is Q24H of 500 ml.",
      },
      {
        text: "About 20.83 to 21 drops per minute, and about 1.74 to 2 drops per 5 seconds.",
        note: "Correct. The Q8H row for 500 ml is 20.83~21 drop/min and 1.74~2 drop/5sec.",
      },
    ],
    answer: 3,
    page: "52",
  },
  {
    id: "surg-093",
    topicId: "SURG",
    topic: "IV rate",
    scene: "A classmate swaps the Q1H row with the Q12H row on the same 500 ml table.",
    ask: "Which pairing does the table actually print?",
    choices: [
      {
        text: "Q1H is 13.88 to 14 drops per minute.",
        note: "13.88~14 drop/min is the Q12H row; Q1H drop/min is 166.66~167.",
      },
      {
        text: "Q12H is 166 drops per minute.",
        note: "166.66~167 drop/min is Q1H, not Q12H.",
      },
      {
        text: "Q1H is about 166.66 to 167 drops per minute, or about 13.88 to 14 drops per 5 seconds. Q12H is about 13.88 to 14 drops per minute, or about 1.16 to 1 drop per 5 seconds.",
        note: "Correct. Those are the Q1H and Q12H rows. The 13.88~14 figure is drops per minute only on the Q12H row, and drops per 5 seconds on the Q1H row.",
      },
      {
        text: "Both rows are 41.66 to 42 drops per minute.",
        note: "41.66~42 is the Q4H row.",
      },
    ],
    answer: 2,
    page: "52",
  },
  {
    id: "surg-094",
    topicId: "SURG",
    topic: "Intramuscular injection",
    scene: "You are about to give an intramuscular injection and the FAQ page is open at the first checks.",
    ask: "What identity and hygiene steps does that page name?",
    choices: [
      {
        text: "Check identity: name, HKID, and allergy, written as Anymore? Allergy History. Then hand hygiene: wash and dry the hands to reduce the risk of infection. It also asks which syringe is suitable while you prepare the syringe.",
        note: "Correct. Those are the printed checks: name, HKID, allergy history, hand hygiene with wash and dry, and preparing a suitable syringe.",
      },
      {
        text: "Check the name and HKID only, and leave allergy until after the injection.",
        note: "Allergy history is in the identity check with name and HKID, written as Anymore? Allergy History.",
      },
      {
        text: "Wash the hands but do not dry them.",
        note: "The page says wash and dry hands to reduce the risk of infection.",
      },
      {
        text: "Identity is the only step, so the syringe question is not on the page.",
        note: "The page also asks which syringe is suitable while you prepare the syringe.",
      },
    ],
    answer: 0,
    page: "53",
  },
  {
    id: "surg-095",
    topicId: "SURG",
    topic: "Intramuscular site",
    scene: "The syringe is prepared and you turn to the next intramuscular slides for the site.",
    ask: "Which sites does the intramuscular site slide label?",
    choices: [
      {
        text: "Only the phrase Anything for checking, used as a body area.",
        note: "Anything for checking is the prompt on the preparing-syringe slide, not a muscle on the site slide.",
      },
      {
        text: "The dorsogluteal buttock only, with no deltoid and no thigh.",
        note: "The site slide does not label a dorsogluteal site. It labels deltoid, ventrogluteal, and vastus lateralis.",
      },
      {
        text: "The subarachnoid space, as for a spinal anaesthetic.",
        note: "Subarachnoid injection is the spinal-anaesthesia description, not an intramuscular site on this slide.",
      },
      {
        text: "Deltoid, ventrogluteal, and vastus lateralis. The deltoid panel marks the acromion, clavicle and the deep brachial artery with the radial nerve. The ventrogluteal panel marks the iliac crest, anterior superior iliac spine and greater trochanter. The thigh panel marks vastus lateralis, clear of the femoral vessels.",
        note: "Correct. The slide titled Intramuscular Injection Site draws those three sites, with the landmarks named on each panel.",
      },
    ],
    answer: 3,
    page: "54-55",
  },
  {
    id: "surg-096",
    topicId: "SURG",
    topic: "Injection angle",
    scene: "After the site slide, the student looks for a degree to hold the needle.",
    ask: "Which angles does the injection slide print?",
    choices: [
      {
        text: "Intramuscular 45 degrees, subcutaneous 90 degrees, intravenous 10 degrees, intradermal 25 degrees.",
        note: "That swaps the printed angles. Intramuscular is the right angle, not 45 degrees.",
      },
      {
        text: "Intramuscular 90 degrees, subcutaneous 45 degrees, intravenous 25 degrees, and intradermal 10 to 15 degrees. The layers drawn are epidermis, dermis, subcutaneous tissue, and muscle.",
        note: "Correct. The slide is titled Angle of Injection and prints those four angles.",
      },
      {
        text: "Every route is 90 degrees, and the slide prints no layer names.",
        note: "Only the intramuscular needle is drawn at 90 degrees. The other three angles differ, and the layers are labelled.",
      },
      {
        text: "The angle slide is the drop-factor table, so it prints drops per minute instead of degrees.",
        note: "The drop-factor table is a different page. This slide is the angle diagram.",
      },
    ],
    answer: 1,
    page: "56",
  },
  {
    id: "surg-097",
    topicId: "SURG",
    topic: "WHO analgesic ladder",
    scene: "A patient is in pain and you look for the pain framework in the miscellaneous section.",
    ask: "Which rungs does the analgesic ladder print?",
    choices: [
      {
        text: "Mild pain: a non-opioid, acetaminophen (paracetamol), aspirin or an NSAID, with or without an adjuvant. Mild to moderate pain: an opioid such as codeine or tramadol, with or without a non-opioid and an adjuvant. Moderate to severe pain: an opioid such as morphine or fentanyl, with or without a non-opioid and an adjuvant.",
        note: "Correct. The slide is titled World Health Organization (WHO) Analgesic Ladder and prints those three rungs.",
      },
      {
        text: "The first rung is Panadol 500 mg every 4 hours as needed.",
        note: "Panadol 500 mg every 4 hours is the fever-page example as a doctor's order, not the wording of the ladder.",
      },
      {
        text: "The top rung is Augmentin 1.2 g every 8 hours.",
        note: "Augmentin 1.2 g every 8 hours is an intravenous antibiotic example in the septic workup, not a rung on the ladder.",
      },
      {
        text: "The slide is titled the ward ABCDE pain script and lists no drugs.",
        note: "The printed title is World Health Organization (WHO) Analgesic Ladder, and the rungs name non-opioids and opioids.",
      },
    ],
    answer: 0,
    page: "57",
  },
  {
    id: "surg-098",
    topicId: "SURG",
    topic: "Wound bed",
    scene: "You are describing the wound bed in the dressing notes.",
    ask: "Which wound-bed terms does the page list?",
    choices: [
      {
        text: "Serous, blood and pus, which are the exudate words.",
        note: "Serous fluid, blood and pus are under exudate, not under wound bed.",
      },
      {
        text: "Intact, erythema and oedema, which are surrounding-skin words.",
        note: "Those words are in the surrounding-skin list, not the wound-bed list.",
      },
      {
        text: "Epithelialization (上皮形成), granulation (肉芽), slough (腐肉), necrotic (壞死), and dry eschar (腐痂).",
        note: "Correct. Those are the wound-bed terms printed with those Chinese labels.",
      },
      {
        text: "Slough is omitted, and only dry eschar is a wound-bed word.",
        note: "Slough (腐肉) is in the wound-bed list together with dry eschar and the other terms.",
      },
    ],
    answer: 2,
    page: "60",
  },
  {
    id: "surg-099",
    topicId: "SURG",
    topic: "Wound exudate and skin",
    scene: "The dressing note also needs the exudate and the skin around the wound.",
    ask: "What lists does the page give for those two?",
    choices: [
      {
        text: "Exudate words are granulation and slough.",
        note: "Granulation and slough are wound-bed terms; exudate is serous fluid, blood, pus, or other.",
      },
      {
        text: "Exudate: serous fluid (槳液), blood (血), pus (膿), or other. Surrounding skin: intact (完整), abraded (剝落), erythema (發紅), oedema (浮腫), or macerated (浸軟).",
        note: "Correct. Those are the exudate and surrounding-skin lines.",
      },
      {
        text: "Macerated skin is listed as a kind of exudate.",
        note: "Macerated (浸軟) is in the surrounding-skin list.",
      },
      {
        text: "The page has no word for pus.",
        note: "Pus (膿) is in the exudate list.",
      },
    ],
    answer: 1,
    page: "60",
  },
  {
    id: "surg-100",
    topicId: "SURG",
    topic: "Wound dressing",
    scene: "You are choosing the solution, the dressing, and how to hold it from this page.",
    ask: "Which examples are printed?",
    choices: [
      {
        text: "0.9% chlorhexidine as the saline strength, and 0.05% sodium chloride as Hibitane.",
        note: "0.9% is sodium chloride, normal saline; 0.05% chlorhexidine is aqueous Hibitane.",
      },
      {
        text: "Kaltostat is the spelling printed, and Tegaderm is not listed.",
        note: "The page spells Keltostat, and Tegaderm is in the secure-dressing examples.",
      },
      {
        text: "Alcohol strength is 2% chlorhexidine in 50% alcohol.",
        note: "The page says 2% chlorhexidine in 70% alcohol.",
      },
      {
        text: "Solutions include 0.9% sodium chloride (normal saline), 0.05% chlorhexidine (aqueous Hibitane), 2% chlorhexidine in 70% alcohol, chlorhexidine gluconate, Betadine, and povidone iodine. Materials include plain gauze, combined dressing, Keltostat, Aquacel, and Mesalt. Secure with Electroplast as a pressure dressing, bandage, Micropore, Omnifix, or Tegaderm.",
        note: "Correct. Those are the dressing-solution, dressing-material and secure-dressing examples, including the spelling Keltostat.",
      },
    ],
    answer: 3,
    page: "60",
  },
  {
    id: "med-001",
    topicId: "MED",
    topic: "Medicine subspecialties",
    scene: "On the first morning the preceptor points at the heart team on the medicine list.",
    ask: "Which opening set matches the printed subspecialty list?",
    choices: [
      {
        text: "Cardiology (心臟科), Endocrinology (內分泌科), and Gastroenterology and Hepatology (腸胃肝臟科).",
        note: "Correct. Those are items a to c on the introduction list.",
      },
      {
        text: "Cardiology is 血液科, Endocrinology is 老人科, and the gut-liver team is 腎病科.",
        note: "No. Those Chinese labels belong to Haematology, Geriatrics, and Nephrology.",
      },
      {
        text: "The list opens with Neurology, Nephrology, and Respiratory Medicine.",
        note: "No. Those names come later; the list opens with the heart, endocrine, and gut-liver teams.",
      },
      {
        text: "Gastroenterology and Hepatology is printed as 內分泌科.",
        note: "No. 內分泌科 is Endocrinology; the gut-liver label is 腸胃肝臟科.",
      },
    ],
    answer: 0,
    page: "2",
  },
  {
    id: "med-002",
    topicId: "MED",
    topic: "Medicine subspecialties",
    scene: "The student is still matching Chinese labels to the middle of the medicine list.",
    ask: "Which middle set is printed correctly?",
    choices: [
      {
        text: "Haematology is 心臟科 and Infectious Disease is 內科腫瘤科.",
        note: "No. 心臟科 is Cardiology, and 內科腫瘤科 is Medical Oncology.",
      },
      {
        text: "Haematology (血液科), Geriatrics (老人科), Infectious Disease (感染及傳染病科), and Medical Oncology (內科腫瘤科).",
        note: "Correct. Those four follow the gut-liver service on the list.",
      },
      {
        text: "Geriatrics is 腦神經科 and Medical Oncology is 呼吸系統科.",
        note: "No. 腦神經科 is Neurology and 呼吸系統科 is Respiratory Medicine.",
      },
      {
        text: "Infectious Disease is omitted and replaced by a surgical team.",
        note: "No. Infectious Disease is on the medicine list as 感染及傳染病科.",
      },
    ],
    answer: 1,
    page: "3",
  },
  {
    id: "med-003",
    topicId: "MED",
    topic: "Medicine subspecialties",
    scene: "The allocation board ends with kidney, brain, lung, and a shared rheumatology line.",
    ask: "Which closing statement matches the list?",
    choices: [
      {
        text: "Neurology is 腎病科 and Nephrology is 腦神經科.",
        note: "No. Those two Chinese labels are swapped.",
      },
      {
        text: "Rheumatology and Palliative Care are two separate department headings.",
        note: "No. They share one line: 風濕病科和紓緩醫學科.",
      },
      {
        text: "Nephrology (腎病科), Neurology (腦神經科), Respiratory Medicine (呼吸系統科), and Rheumatology and Palliative Care together (風濕病科和紓緩醫學科).",
        note: "Correct. Rheumatology and palliative care are printed as one subspecialty, not two separate headings.",
      },
      {
        text: "Respiratory Medicine is 風濕病科和紓緩醫學科.",
        note: "No. That Chinese line is Rheumatology and Palliative Care; respiratory medicine is 呼吸系統科.",
      },
    ],
    answer: 2,
    page: "3",
  },
  {
    id: "med-004",
    topicId: "MED",
    topic: "Study manual purpose",
    scene: "The educator explains why this medicine study manual was written.",
    ask: "What purpose is stated for the manual?",
    choices: [
      {
        text: "To replace the doctor's medication orders for the placement.",
        note: "No. The page is about learning in an unfamiliar clinical environment, not about replacing orders.",
      },
      {
        text: "To limit each student to one subspecialty and stop further study.",
        note: "No. It aims at continuous clinical study, not at stopping study.",
      },
      {
        text: "To teach only theatre scrub so students avoid the medical wards.",
        note: "No. The manual is for adapting to the medicine clinical environment.",
      },
      {
        text: "To build an education program so students adapt to the clinical setting, become a competent member, and keep studying without pressure caused by an unfamiliar environment.",
        note: "Correct. That is the purpose printed on the introduction page.",
      },
    ],
    answer: 3,
    page: "4",
  },
  {
    id: "med-005",
    topicId: "MED",
    topic: "Tympanic temperature",
    scene: "A loosely seated ear probe is used just after a cold drink, in an ear full of wax.",
    ask: "Which factors underestimate tympanic temperature?",
    choices: [
      {
        text: "An ear canal that is not straightened, so the probe leaks air; a lot of earwax; and a recent swallow of cold food or liquid.",
        note: "Correct. Those three are the underestimate factors; a hot swallow, or lying with the ear covered, overestimates instead.",
      },
      {
        text: "A recent hot swallow and lying with the measured ear covered.",
        note: "No. Those two overestimate tympanic temperature.",
      },
      {
        text: "Only a hot swallow, which pulls the reading down.",
        note: "No. A hot swallow is listed under overestimate, not underestimate.",
      },
      {
        text: "Straightening the canal and a clear ear, which always read low.",
        note: "No. The low readings come from a poor seal, wax, or a cold swallow.",
      },
    ],
    answer: 0,
    page: "8",
  },
  {
    id: "med-006",
    topicId: "MED",
    topic: "Low body temperature",
    scene: "The tympanic temperature is at or below 35.9 degrees Celsius and the patient is not dizzy.",
    ask: "What immediate temperature action is printed?",
    choices: [
      {
        text: "The normal range starts at 35.9 degrees Celsius, so no recheck is needed.",
        note: "No. 35.9 degrees Celsius or below is the low-temperature line, and the normal range is 36.0 to 37.6.",
      },
      {
        text: "Treat it as low body temperature, recheck both ears at once, and chart the higher result that lies in, or nearest, the normal range of 36.0 to 37.6 degrees Celsius.",
        note: "Correct. Dizziness is reported at once; otherwise the report waits until after the temperature round.",
      },
      {
        text: "Chart the lower ear and cool the patient with an ice pad.",
        note: "No. Chart the higher of the two ears; an ice pad belongs to fever care, not low temperature.",
      },
      {
        text: "Phone the doctor before any recheck and give Panadol.",
        note: "No. Recheck both ears first; Panadol is not the low-temperature action.",
      },
    ],
    answer: 1,
    page: "9",
  },
  {
    id: "med-007",
    topicId: "MED",
    topic: "Low body temperature",
    scene: "After the recheck the temperature is still low and the patient feels dizzy.",
    ask: "What further care does the low-temperature page describe?",
    choices: [
      {
        text: "Apply a covered ice pad first and remove blankets.",
        note: "No. Ice and fewer blankets are fever measures; low temperature needs more blankets.",
      },
      {
        text: "A Bair Hugger is a cooling device and is applied before the recheck.",
        note: "No. It blows warm air and is considered only if recheck plus blankets still fail.",
      },
      {
        text: "Add blankets and keep bed rest, raise the bedside rail and check blood pressure and pulse if dizzy, recheck in 15 to 30 minutes, tell the team nurse at once because of dizziness, and use a Bair Hugger if blankets still cannot hold a normal temperature.",
        note: "Correct. The team nurse informs the doctor. A Bair Hugger is a forced warm-air system used to prevent and treat hypothermia.",
      },
      {
        text: "Dizziness can wait until the next shift, and the team nurse does not call the doctor.",
        note: "No. Dizziness is reported immediately, and the team nurse informs the doctor.",
      },
    ],
    answer: 2,
    page: "9",
  },
  {
    id: "med-008",
    topicId: "MED",
    topic: "Low-grade fever",
    scene: "The rechecked temperature sits between 37.6 and 38.5 degrees Celsius and the patient is not dizzy.",
    ask: "How is this low-grade fever handled?",
    choices: [
      {
        text: "This band is high fever, so the doctor is phoned before a bilateral recheck.",
        note: "No. 37.6 to 38.5 degrees Celsius is low-grade fever, and the doctor is informed on the ward round.",
      },
      {
        text: "Add blankets and start a Bair Hugger as the first step.",
        note: "No. Extra covering is removed; a Bair Hugger is for temperature that stays too low.",
      },
      {
        text: "Panadol 500 mg is withheld on this page so the fever pattern can be watched.",
        note: "No. That option belongs to the septic-workup note. Here Panadol 500 mg Q4H prn may be given if ordered.",
      },
      {
        text: "A covered ice pad may be used, water is encouraged if intake is allowed and swallowing is safe, extra blankets and clothing come off, and oral or per-rectal Panadol 500 mg Q4H prn is given only if ordered; monitoring becomes Q4H and the doctor is told on the ward round.",
        note: "Correct. Report dizziness at once; otherwise report after the temperature round. The team nurse does not use the immediate phone path printed for high fever.",
      },
    ],
    answer: 3,
    page: "10",
  },
  {
    id: "med-009",
    topicId: "MED",
    topic: "High fever",
    scene: "The temperature stays at or above 38.5 degrees Celsius and the rechecked blood pressure is low.",
    ask: "What does the high-fever page tell the team to do?",
    choices: [
      {
        text: "Recheck both ears, and if it is still high measure blood pressure, pulse, and SaO2; the team nurse informs the doctor by phone immediately, septic workup may be ordered, and temperature checks increase to Q4H.",
        note: "Correct. Tell the team nurse at once if blood pressure or SaO2 is on the low side. Cooling care, fluids if safe, and ordered Panadol 500 mg Q4H prn are the same fever supports as for low-grade fever.",
      },
      {
        text: "High fever starts at 37.6 degrees Celsius and is told to the doctor only on the ward round.",
        note: "No. 37.6 to 38.5 is low-grade fever and uses the ward-round path; 38.5 or above is high fever with a phone call.",
      },
      {
        text: "Blood pressure, pulse, and SaO2 are not measured when fever stays this high.",
        note: "No. Those three are measured if the recheck is still high.",
      },
      {
        text: "Apply more blankets and do not inform the doctor until the next day.",
        note: "No. The remarks say the team nurse phones the doctor immediately.",
      },
    ],
    answer: 0,
    page: "11",
  },
  {
    id: "med-010",
    topicId: "MED",
    topic: "Septic shock",
    scene: "An older patient with a body-wide infection develops dangerously low blood pressure.",
    ask: "How does the page describe septic shock?",
    choices: [
      {
        text: "Only viruses cause it, and the blood pressure rises.",
        note: "No. Any bacteria can cause it, fungi can, viruses rarely do, and the pressure falls.",
      },
      {
        text: "A body-wide infection leads to dangerously low blood pressure and poor organ function; it is most often in the very old, the very young, or people with weak immunity, and bacteria, fungi, or rarely viruses may cause it through toxins.",
        note: "Correct. Some researchers think clots in small arteries cut blood flow, and a strong inflammatory response to the toxins may add to organ damage.",
      },
      {
        text: "It is limited to young adults with a normal immune system.",
        note: "No. It is most often in the very old and the very young, and also in weakened immunity.",
      },
      {
        text: "Toxins are said to spare the tissues and leave organ function intact.",
        note: "No. Toxins may damage tissue, and organ function becomes poor.",
      },
    ],
    answer: 1,
    page: "12-13",
  },
  {
    id: "med-011",
    topicId: "MED",
    topic: "Septic workup",
    scene: "The doctor orders a septic workup and is deciding whether to chart Panadol.",
    ask: "Which workup set matches the page?",
    choices: [
      {
        text: "Augmentin is printed as 1.2 g once a day, with no cultures.",
        note: "No. The example is Augmentin 1.2 g Q8H, and blood, urine, and sputum cultures are listed.",
      },
      {
        text: "Panadol must be given so the fever pattern cannot be seen.",
        note: "No. The doctor may omit Panadol in order to watch the fever pattern against the antibiotic effect.",
      },
      {
        text: "Blood culture, complete blood picture, and liver and renal function; mid-stream or catheter urine culture; sputum culture; a chest X-ray; Panadol may be left off to watch the fever pattern; an intravenous antibiotic such as Augmentin 1.2 g Q8H may be added.",
        note: "Correct. Complete blood picture is used to look for a white-cell rise. Panadol, if used, is the oral or per-rectal option already described, not a fixed extra dose.",
      },
      {
        text: "The workup is only a chest X-ray.",
        note: "No. Chest X-ray is one item beside blood, urine, and sputum tests.",
      },
    ],
    answer: 2,
    page: "14-15",
  },
  {
    id: "med-012",
    topicId: "MED",
    topic: "Blood-pressure cuff",
    scene: "A narrow cuff is wrapped over a thick sleeve on a large arm.",
    ask: "Which cuff result is printed correctly?",
    choices: [
      {
        text: "A narrow cuff lowers systolic pressure by 10 to 40 mmHg.",
        note: "No. A narrow cuff raises the systolic reading by 10 to 40 mmHg because more pressure is needed to compress the artery.",
      },
      {
        text: "A loose cuff or a ballooning bladder gives a falsely high reading.",
        note: "No. That problem gives a falsely low reading.",
      },
      {
        text: "Clothing has no effect, and an arm above the heart reads high.",
        note: "No. Clothing can add 10 to 50 mmHg systolic, and above heart level reads low.",
      },
      {
        text: "A cuff that is too narrow can raise systolic pressure by 10 to 40 mmHg, and a cuff over clothing can raise it by 10 to 50 mmHg.",
        note: "Correct. A loose, uneven cuff, or a bladder that balloons out of the wrap, reads falsely low because it cuts off the brachial artery too easily. Above heart level, as when lying on the side, also reads falsely low.",
      },
    ],
    answer: 3,
    page: "16",
  },
  {
    id: "med-013",
    topicId: "MED",
    topic: "High blood pressure",
    scene: "Systolic pressure stays above 160 mmHg and the patient develops a headache.",
    ask: "What action matches the high-blood-pressure page?",
    choices: [
      {
        text: "Use a correct cuff with no clothing in the way, stop the patient talking, and recheck both limbs; a headache is reported to the team nurse at once, otherwise the report waits until after the blood-pressure round, then recheck pressure and pulse in 15 to 30 minutes.",
        note: "Correct. Rest in bed with the call bell and the rail up, and stop exercise and talking. Monitoring may become Q4H or Q1H. The doctor may order an antihypertensive after an ECG or blood tests.",
      },
      {
        text: "Headache waits until the next day because only the routine report is allowed.",
        note: "No. Headache is the trigger for an immediate report.",
      },
      {
        text: "The action line on this page is a systolic pressure under 90 mmHg.",
        note: "No. This page is systolic pressure above 160 mmHg.",
      },
      {
        text: "Leave the cuff over clothing and encourage exercise during the recheck.",
        note: "No. Clothing is removed from the cuff site, talking and exercise stop, and the patient rests.",
      },
    ],
    answer: 0,
    page: "17",
  },
  {
    id: "med-014",
    topicId: "MED",
    topic: "Low blood pressure",
    scene: "Systolic pressure is still under 90 mmHg on the bed, and the patient feels dizzy.",
    ask: "What does the low-blood-pressure page instruct?",
    choices: [
      {
        text: "Sit the patient with the feet lower than the head for the next reading.",
        note: "No. The next position is feet higher than the head by 15 to 30 degrees.",
      },
      {
        text: "If it is still low in bed, measure with the feet 15 to 30 degrees higher than the head, check conscious level, report dizziness at once, and recheck pressure and pulse in 15 to 30 minutes.",
        note: "Correct. The doctor may order a 12-lead ECG, bloods such as CBP, liver and renal function, CK, and troponin I, plus intravenous fluid or an inotrope, and bed rest. Also watch any sudden rise or fall in pressure.",
      },
      {
        text: "The systolic line on this page is under 160 mmHg.",
        note: "No. Low blood pressure here is systolic pressure under 90 mmHg.",
      },
      {
        text: "Troponin I, CK, and a 12-lead ECG are not among the possible doctor orders.",
        note: "No. A 12-lead ECG and bloods including CBP, liver and renal function, CK, and troponin I are listed.",
      },
    ],
    answer: 1,
    page: "18",
  },
  {
    id: "med-015",
    topicId: "MED",
    topic: "Low oxygen saturation",
    scene: "A warm, well-perfused finger reads a saturation under 90 percent and there is a sputum sound.",
    ask: "What does the saturation page require?",
    choices: [
      {
        text: "Under 90 percent waits for the ward round if the finger is warm.",
        note: "No. The team nurse is informed immediately when SpO2 is under 90 percent.",
      },
      {
        text: "Chart the lower of the two limbs.",
        note: "No. Chart the highest of the bilateral readings.",
      },
      {
        text: "Inform the team nurse immediately, make sure cold or poor circulation is not fooling the probe, recheck both limbs and chart the higher value, and clear sputum retention by nasopharyngeal suction.",
        note: "Correct. Under 90 percent is an immediate report on this page, not a ward-round delay.",
      },
      {
        text: "A sputum sound is ignored because suction is not mentioned.",
        note: "No. Sputum retention is cleared by nasopharyngeal suction.",
      },
    ],
    answer: 2,
    page: "19",
  },
  {
    id: "med-016",
    topicId: "MED",
    topic: "Oxygen step-up",
    scene: "Saturation has still not returned to normal within 20 to 30 seconds, and oxygen is already prescribed.",
    ask: "How does this page step the oxygen up?",
    choices: [
      {
        text: "Wait 20 to 30 minutes before any oxygen.",
        note: "No. The page says 20 to 30 seconds.",
      },
      {
        text: "Use a 100 percent mask first and skip the nasal cannula.",
        note: "No. The cannula comes first; the 50 or 100 percent mask is the next step if the cannula fails.",
      },
      {
        text: "Only 2 L/min is listed, so 4 and 6 L/min are not on the page.",
        note: "No. The cannula examples are 2, 4, and 6 L/min as prescribed.",
      },
      {
        text: "Start a nasal cannula at 2, 4, or 6 L/min as prescribed; if that fails, use a 50 percent or 100 percent oxygen mask and call the doctor as soon as possible.",
        note: "Correct. The clock on this page is 20 to 30 seconds, not 20 to 30 minutes.",
      },
    ],
    answer: 3,
    page: "20",
  },
  {
    id: "med-017",
    topicId: "MED",
    topic: "COPD oxygen target",
    scene: "A patient with COPD is on oxygen and a colleague wants the saturation pushed well above the usual COPD aim.",
    ask: "Why is the COPD saturation target 88 to 92 percent?",
    choices: [
      {
        text: "Chronic high carbon dioxide switches off the brain carbon-dioxide sensor, so rate is driven by oxygen; too much oxygen can slow breathing and worsen carbon-dioxide retention.",
        note: "Correct. In people without that chronic change, both the oxygen sensor and the carbon-dioxide sensor drive the rate: low oxygen or high carbon dioxide speeds breathing. Close watching and an arterial blood gas may be needed.",
      },
      {
        text: "The COPD target on this page is 95 to 100 percent.",
        note: "No. The COPD aim printed here is 88 to 92 percent.",
      },
      {
        text: "In COPD the carbon-dioxide sensor is more active, so high oxygen makes the rate rise.",
        note: "No. The carbon-dioxide sensor is deactivated, and high oxygen can reduce the rate.",
      },
      {
        text: "Normal rate control uses the oxygen sensor only, and COPD uses both sensors in the usual way.",
        note: "No. The page says the reverse: usual control uses both sensors, and COPD is left with the oxygen sensor.",
      },
    ],
    answer: 0,
    page: "21-22",
  },
  {
    id: "med-018",
    topicId: "MED",
    topic: "Low blood glucose",
    scene: "One conscious patient and one unconscious patient each have a glucose under 4 mmol/L.",
    ask: "How does the page separate those two?",
    choices: [
      {
        text: "Both patients drink D50, and orange juice is forbidden.",
        note: "No. Juice or milk is for the conscious patient; D50 is intravenous for the unconscious patient.",
      },
      {
        text: "The conscious patient may have orange juice or milk, and the doctor is told on the ward round; the unconscious patient needs an intravenous site and D50 as prescribed, and the doctor is phoned at once.",
        note: "Correct. Tell the team nurse after the routine, or at once if the patient is dizzy or unconscious. Withhold anti-hyperglycaemic drugs as ordered, and recheck glucose 15 to 30 minutes after food, juice, milk, or the doctor's treatment.",
      },
      {
        text: "The action line is under 8 mmol/L.",
        note: "No. The low-glucose action is under 4 mmol/L. 4 to 8 mmol/L is only the easy-memory range.",
      },
      {
        text: "The unconscious patient waits for the ward round, and the conscious patient is given subcutaneous insulin.",
        note: "No. Unconscious hypoglycaemia is a phone call; insulin is not the low-glucose treatment.",
      },
    ],
    answer: 1,
    page: "23",
  },
  {
    id: "med-019",
    topicId: "MED",
    topic: "High blood glucose",
    scene: "An awake patient has a routine glucose above 16 mmol/L after extra food.",
    ask: "What is printed for glucose above 16 mmol/L?",
    choices: [
      {
        text: "Give orange juice and a larger night snack.",
        note: "No. Juice is for low glucose; the night snack is withheld when glucose is above 16 mmol/L.",
      },
      {
        text: "The doctor is told only on the ward round, as for a conscious reading under 4 mmol/L.",
        note: "No. For a reading above 16 mmol/L the team nurse phones the doctor immediately.",
      },
      {
        text: "The team nurse phones the doctor at once; ask what was eaten, withhold the night snack, test urine for ketones, and expect possible subcutaneous insulin with glucose checks as often as Q4H, plus a DKI drip if diabetic ketoacidosis is a risk.",
        note: "Correct. The easy-memory range is 4 to 8 mmol/L. That band is not the same as the above-16 action line. Report dizziness or unconsciousness immediately.",
      },
      {
        text: "Every reading above 8 mmol/L gets a DKI drip.",
        note: "No. The DKI drip is if diabetic ketoacidosis is a risk when glucose is above 16 mmol/L, not for every reading above 8.",
      },
    ],
    answer: 2,
    page: "24",
  },
  {
    id: "med-020",
    topicId: "MED",
    topic: "COPD definition",
    scene: "A new admission asks what COPD means on the respiratory teaching sheet.",
    ask: "Which definition matches the page?",
    choices: [
      {
        text: "COPD is only an acute pneumonia with normal elastic recoil.",
        note: "No. The definition is chronic bronchitis, emphysema, and/or airway hypersensitivity.",
      },
      {
        text: "Emphysema here means a short bronchospasm without enlarged air spaces.",
        note: "No. Emphysema is permanent enlargement of air spaces and loss of elastic recoil.",
      },
      {
        text: "Chronic bronchitis is defined as loss of elastic recoil, not extra mucus.",
        note: "No. Chronic bronchitis is hypersecretion of mucus; loss of recoil is the emphysema part.",
      },
      {
        text: "Airflow obstruction from chronic bronchitis with mucus hypersecretion, emphysema with permanently enlarged air spaces and loss of elastic recoil of the terminal bronchioles, and/or airway hypersensitivity such as asthma.",
        note: "Correct. Those are the three elements printed in the COPD definition.",
      },
    ],
    answer: 3,
    page: "26",
  },
  {
    id: "med-021",
    topicId: "MED",
    topic: "Lung functions",
    scene: "The same patient asks what the two lungs are for.",
    ask: "What two major functions are printed?",
    choices: [
      {
        text: "Get oxygen into the body and remove carbon dioxide from the body.",
        note: "Correct. Those are the two major functions named under the COPD page.",
      },
      {
        text: "Make bicarbonate and filter urea.",
        note: "No. Those are not the two lung functions on this page.",
      },
      {
        text: "Hold carbon dioxide in so saturation rises.",
        note: "No. A major function is to remove carbon dioxide.",
      },
      {
        text: "Pump blood through the coronary arteries.",
        note: "No. The page is about gas exchange, not coronary pumping.",
      },
    ],
    answer: 0,
    page: "26",
  },
  {
    id: "med-022",
    topicId: "MED",
    topic: "Type I shunt",
    scene: "A patient with pneumonia is in hypoxaemic respiratory failure.",
    ask: "What is the commonest mechanism of type I failure?",
    choices: [
      {
        text: "Dead-space ventilation is named as the commonest cause of type I failure.",
        note: "No. Dead space is a type II mechanism. Shunting is the commonest type I cause.",
      },
      {
        text: "Shunting, perfusion without ventilation, with examples such as pneumonia, lung collapse, and APO.",
        note: "Correct. Type I is hypoxaemic failure from inadequate oxygen transfer. In a shunt the alveoli are not ventilated, so oxygen uptake fails, but they are still perfused, so carbon dioxide can still be removed, because of collapse, pus, mucus, or fluid oedema.",
      },
      {
        text: "Shunting means ventilation without perfusion.",
        note: "No. Shunting is perfusion without ventilation.",
      },
      {
        text: "Type I failure is defined as insufficient carbon-dioxide removal.",
        note: "No. That is type II. Type I is inadequate oxygen transfer.",
      },
    ],
    answer: 1,
    page: "28",
  },
  {
    id: "med-023",
    topicId: "MED",
    topic: "Diffusion abnormality",
    scene: "The tutor asks how lung fibrosis differs from a mucus plug inside the type I page.",
    ask: "What is a diffusion abnormality here?",
    choices: [
      {
        text: "Diffusion abnormality is brainstem injury with normal alveolar surface.",
        note: "No. Brainstem injury is an alveolar-hypoventilation example under type II failure.",
      },
      {
        text: "It means perfusion without ventilation from pus alone.",
        note: "No. That description is shunting. Diffusion abnormality is loss of alveolar surface area.",
      },
      {
        text: "A fall in alveolar surface area, with examples such as lung fibrosis, acute respiratory distress syndrome, and APO.",
        note: "Correct. APO is named under both shunting and diffusion abnormality. Fibrosis and acute respiratory distress syndrome are the diffusion examples, not the shunt-only examples of pneumonia and collapse.",
      },
      {
        text: "APO is excluded from both shunt and diffusion.",
        note: "No. APO appears in both lists on the type I pages.",
      },
    ],
    answer: 2,
    page: "28",
  },
  {
    id: "med-024",
    topicId: "MED",
    topic: "Type II hypoventilation",
    scene: "Carbon dioxide is rising after a respiratory depressant.",
    ask: "What is hypercapnic type II failure from alveolar hypoventilation?",
    choices: [
      {
        text: "Type II is inadequate oxygen transfer from a shunt.",
        note: "No. Inadequate oxygen transfer is type I.",
      },
      {
        text: "The examples are pneumonia and lung collapse.",
        note: "No. Those are shunt examples. Hypoventilation examples are muscle fatigue, a depressant, and brainstem injury.",
      },
      {
        text: "Type II means carbon dioxide is being removed too quickly.",
        note: "No. Type II is insufficient carbon-dioxide removal.",
      },
      {
        text: "Insufficient carbon-dioxide removal by hypoventilation, including respiratory muscle fatigue, a depressant, and brainstem injury.",
        note: "Correct. This is the first type II mechanism on the page, separate from dead-space ventilation.",
      },
    ],
    answer: 3,
    page: "29",
  },
  {
    id: "med-025",
    topicId: "MED",
    topic: "Dead-space ventilation",
    scene: "The tutor contrasts a pulmonary embolus with a pneumonia shunt.",
    ask: "How is dead space described?",
    choices: [
      {
        text: "Ventilation without perfusion, as in COAD and pulmonary embolism; compression or stretched alveolar capillaries lead to carbon-dioxide retention and type II failure.",
        note: "Correct. The alveoli still take up oxygen, but carbon dioxide is not cleared because perfusion is missing.",
      },
      {
        text: "Dead space is perfusion without ventilation.",
        note: "No. That is shunting. Dead space is ventilation without perfusion.",
      },
      {
        text: "The examples are lung fibrosis and acute respiratory distress syndrome.",
        note: "No. Those are diffusion examples. Dead-space examples are COAD and pulmonary embolism.",
      },
      {
        text: "Dead space improves carbon-dioxide removal.",
        note: "No. It leads to carbon-dioxide retention.",
      },
    ],
    answer: 0,
    page: "29",
  },
  {
    id: "med-026",
    topicId: "MED",
    topic: "Carbon dioxide transfer",
    scene: "A student expects every shunt to trap carbon dioxide as badly as it blocks oxygen.",
    ask: "What does the page say about carbon dioxide crossing the alveolus?",
    choices: [
      {
        text: "Carbon dioxide crosses poorly, so shunt hits carbon dioxide harder than oxygen.",
        note: "No. The page says carbon dioxide crosses readily and oxygenation is affected more.",
      },
      {
        text: "Carbon dioxide crosses very readily, so shunt and diffusion problems hit oxygenation harder than carbon-dioxide elimination.",
        note: "Correct. That is why type I problems are mainly hypoxic rather than hypercapnic.",
      },
      {
        text: "Diffusion abnormality stops carbon-dioxide removal and spares oxygen.",
        note: "No. Diffusion abnormality affects oxygenation more than carbon-dioxide elimination.",
      },
      {
        text: "Shunt and diffusion change oxygen and carbon dioxide to the same degree.",
        note: "No. They affect oxygenation more than carbon-dioxide elimination.",
      },
    ],
    answer: 1,
    page: "30",
  },
  {
    id: "med-027",
    topicId: "MED",
    topic: "Oxygenation threshold",
    scene: "Saturation is sliding through the 85 to 90 percent band while PaO2 is also falling.",
    ask: "What warning sits beside the oxygenation table?",
    choices: [
      {
        text: "The critical band is SpO2 above 95 percent.",
        note: "No. The critical threshold named in the note is 85 to 90 percent.",
      },
      {
        text: "Below that level SpO2 barely changes when PaO2 falls.",
        note: "No. A small fall in PaO2 produces a sharp fall in SpO2.",
      },
      {
        text: "SpO2 of 85 to 90 percent is a critical threshold, and below this level a small fall in PaO2 produces a sharp fall in SpO2.",
        note: "Correct. That note is separate from the treatment rows, which still label 85 to 90 percent as the mild-hypoxaemia band.",
      },
      {
        text: "The note says only PaCO2, not PaO2, drives the sharp fall.",
        note: "No. The note links the sharp fall in SpO2 to a small fall in PaO2.",
      },
    ],
    answer: 2,
    page: "31",
  },
  {
    id: "med-028",
    topicId: "MED",
    topic: "Mild hypoxaemia",
    scene: "SpO2 is under 90 percent but still inside 85 to 90 percent, and PaO2 is under 10 kPa.",
    ask: "Which treatment row fits?",
    choices: [
      {
        text: "Severe hypoxaemia, treated only with IPPV.",
        note: "No. Severe is SpO2 under 60 percent. This band is mild hypoxaemia.",
      },
      {
        text: "Acceptable gas, so no oxygen treatment.",
        note: "No. No treatment is the row above 90 percent and PaO2 above 10 kPa.",
      },
      {
        text: "Mild hypoxaemia is treated with nasal oxygen at 6 L/min as the table dose.",
        note: "No. The table says nasal cannula 2 to 4 L/min or a simple mask at 4 L/min. The 6 L/min figure is on the earlier saturation page, not this row.",
      },
      {
        text: "Mild hypoxaemia: nasal cannula at 2 to 4 L/min or a simple mask at 4 L/min.",
        note: "Correct. The matching gas line is PaO2 under 10 kPa, under about 80 mmHg. This row is not the IPPV row.",
      },
    ],
    answer: 3,
    page: "31",
  },
  {
    id: "med-029",
    topicId: "MED",
    topic: "Moderate and severe hypoxaemia",
    scene: "One saturation is under 85 percent and another is under 60 percent.",
    ask: "How does the table separate moderate and severe hypoxaemia?",
    choices: [
      {
        text: "Under 85 percent, PaO2 under 8 kPa or under 60 mmHg, is moderate and is treated with oxygen with or without IPPV; under 60 percent, PaO2 under 4 kPa or under 30 mmHg, is severe and is treated with IPPV.",
        note: "Correct. Moderate is not left on a simple mask alone, and severe is not a no-treatment row.",
      },
      {
        text: "Under 85 percent is still mild and needs no oxygen.",
        note: "No. Mild is the 85 to 90 percent band. Under 85 percent is moderate.",
      },
      {
        text: "Severe hypoxaemia starts under 90 percent and uses only a simple mask at 4 L/min.",
        note: "No. Under 90 percent down to 85 is mild. Severe is under 60 percent and uses IPPV.",
      },
      {
        text: "Moderate forbids IPPV, and severe is managed with no ventilator.",
        note: "No. Moderate is oxygen with or without IPPV, and severe is IPPV.",
      },
    ],
    answer: 0,
    page: "31",
  },
  {
    id: "med-030",
    topicId: "MED",
    topic: "Acceptable oxygenation",
    scene: "SpO2 is above 90 percent and PaO2 is above 10 kPa.",
    ask: "What does the top treatment row say?",
    choices: [
      {
        text: "Any saturation under 95 percent is severe hypoxaemia.",
        note: "No. Severe is under 60 percent. The header reference of 95 to 100 percent is not the severe line.",
      },
      {
        text: "That reading is acceptable and needs no oxygen treatment on this table.",
        note: "Correct. The header also prints a reference SpO2 of 95 to 100 percent and PaO2 of 10.7 to 13.3 kPa, or 80 to 100 mmHg, but the no-treatment decision row is above 90 percent and above 10 kPa, about 80 mmHg.",
      },
      {
        text: "Above 90 percent is mild hypoxaemia and needs IPPV.",
        note: "No. Above 90 percent is the acceptable, no-treatment row.",
      },
      {
        text: "No-treatment status requires saturation under 60 percent.",
        note: "No. Under 60 percent is severe hypoxaemia treated with IPPV.",
      },
    ],
    answer: 1,
    page: "31",
  },
  {
    id: "med-031",
    topicId: "MED",
    topic: "ABG acceptable range",
    scene: "The doctor wants the acceptable arterial-blood-gas box, not the later six-step cuts.",
    ask: "Which set is the acceptable range on the ABG page?",
    choices: [
      {
        text: "pH 7.35 to 7.45 is the acceptable box on this page.",
        note: "No. 7.35 and 7.45 are the six-step acidosis and alkalosis cuts, not this acceptable box.",
      },
      {
        text: "PaCO2 is 22 to 28 mmHg and bicarbonate is 38 to 42 milliequivalents per litre.",
        note: "No. Those two ranges are swapped. Bicarbonate is 22 to 28 and PaCO2 is 38 to 42.",
      },
      {
        text: "pH 7.38 to 7.42, bicarbonate 22 to 28 milliequivalents per litre, PaO2 75 to 100 mmHg, PaCO2 38 to 42 mmHg, and saturation 94 to 100 percent.",
        note: "Correct. The test measures PaO2, PaCO2, pH, oxyhaemoglobin saturation, and bicarbonate.",
      },
      {
        text: "PaO2 is 38 to 42 mmHg and saturation is 88 to 92 percent.",
        note: "No. PaO2 is 75 to 100 mmHg and saturation is 94 to 100 percent. 88 to 92 percent is the COPD target on an earlier page.",
      },
    ],
    answer: 2,
    page: "32",
  },
  {
    id: "med-032",
    topicId: "MED",
    topic: "ABG six-step pH",
    scene: "One nurse uses the acceptable pH box and another uses step 1 of the six-step method.",
    ask: "How do those two printed pH rules differ?",
    choices: [
      {
        text: "Both pages use 7.38 and 7.42 as the acidosis and alkalosis cuts.",
        note: "No. Only the acceptable box uses 7.38 to 7.42. Step 1 uses under 7.35 and over 7.45.",
      },
      {
        text: "Step 1 calls any pH under 7.42 acidosis.",
        note: "No. Step 1 acidosis is pH under 7.35.",
      },
      {
        text: "Step 1 calls alkalosis as soon as pH is above 7.38.",
        note: "No. Step 1 alkalosis is pH above 7.45.",
      },
      {
        text: "The acceptable box is 7.38 to 7.42, but step 1 calls acidosis only when pH is under 7.35 and alkalosis only when pH is over 7.45.",
        note: "Correct. A pH below 7.38 but not below 7.35 sits outside the acceptable box and is still not labelled acidosis by step 1. Do not treat the two cuts as the same.",
      },
    ],
    answer: 3,
    page: "32-33",
  },
  {
    id: "med-033",
    topicId: "MED",
    topic: "ABG steps 2 and 3",
    scene: "The gas shows a large rise in carbon dioxide, a higher bicarbonate, and a base excess that is only mildly off.",
    ask: "How do steps 2 and 3 read that respiratory pattern?",
    choices: [
      {
        text: "A marked rise in pCO2 is the primary cause and a rise in HCO3 is renal compensation; respiratory base excess is about 0 plus or minus 6, while metabolic acidosis is a very negative base excess and metabolic alkalosis a very positive one.",
        note: "Correct. A negative base excess means acid has accumulated, and a positive base excess means alkali has accumulated.",
      },
      {
        text: "The primary cause of respiratory acidosis in the worked example is a low pCO2.",
        note: "No. The example shows a marked rise in pCO2 as the primary cause.",
      },
      {
        text: "A very negative base excess is the printed pattern for metabolic alkalosis.",
        note: "No. Metabolic alkalosis has a very positive base excess; metabolic acidosis has a very negative one.",
      },
      {
        text: "Renal compensation in the respiratory-acidosis example is a fall in HCO3.",
        note: "No. Compensation in that example is a rise in HCO3.",
      },
    ],
    answer: 0,
    page: "33",
  },
  {
    id: "med-034",
    topicId: "MED",
    topic: "ABG steps 4 to 6",
    scene: "The pH and the bicarbonate are done and the student is about to stop.",
    ask: "What do steps 4, 5, and 6 add?",
    choices: [
      {
        text: "Step 4 ignores oxygenation and only names the drug chart.",
        note: "No. Step 4 checks pO2 and SpO2 for the arterial oxygenation status.",
      },
      {
        text: "Step 4 reads a low pO2 as hypoxaemia and a high pCO2 as hypercapnia from the oxygenation check; step 5 matches the gas to the history and the clinical signs; step 6 makes the diagnosis.",
        note: "Correct. The approach does not stop after the base excess.",
      },
      {
        text: "The method ends at step 3.",
        note: "No. Steps 4, 5, and 6 are printed.",
      },
      {
        text: "A low pO2 is called hypercapnia.",
        note: "No. A low pO2 is hypoxaemia; a high pCO2 is hypercapnia.",
      },
    ],
    answer: 1,
    page: "33",
  },
  {
    id: "med-035",
    topicId: "MED",
    topic: "Respiratory acidosis",
    scene: "A patient with COPD has a respiratory acidosis linked to hypoventilation.",
    ask: "Which pattern and treatment match that row?",
    choices: [
      {
        text: "Decrease ventilation and give Diamox.",
        note: "No. Decreasing ventilation is the respiratory-alkalosis treatment, and Diamox is for metabolic alkalosis.",
      },
      {
        text: "The primary change is a low CO2.",
        note: "No. In respiratory acidosis the primary change is a marked rise in CO2.",
      },
      {
        text: "pH is low or normal, CO2 is markedly up as the primary change, and HCO3 is up as compensation; give low-dose oxygen for COPD and increase ventilation for hypoventilation.",
        note: "Correct. The examples named are COPD and hypoventilation. High-concentration oxygen is not the printed treatment.",
      },
      {
        text: "HCO3 is the primary fall and CO2 only compensates.",
        note: "No. That pattern is metabolic acidosis, not respiratory acidosis.",
      },
    ],
    answer: 2,
    page: "35",
  },
  {
    id: "med-036",
    topicId: "MED",
    topic: "Metabolic acidosis",
    scene: "The row in front of the team lists DKA, chronic renal failure, and diarrhoea.",
    ask: "What pattern and treatment are printed for metabolic acidosis?",
    choices: [
      {
        text: "The examples are anxiety and hyperventilation.",
        note: "No. Those examples belong to respiratory alkalosis.",
      },
      {
        text: "The primary change is a high HCO3.",
        note: "No. The primary change is a marked fall in HCO3.",
      },
      {
        text: "Treatment is low-dose oxygen and Diamox.",
        note: "No. Low-dose oxygen is for COPD respiratory acidosis, and Diamox is for metabolic alkalosis.",
      },
      {
        text: "pH is low, CO2 falls as compensation, and HCO3 falls markedly as the primary cause; treat a high potassium in DKA and give bicarbonate as needed.",
        note: "Correct. The cause is treated, and bicarbonate is as needed, not the COPD oxygen line.",
      },
    ],
    answer: 3,
    page: "35",
  },
  {
    id: "med-037",
    topicId: "MED",
    topic: "Respiratory alkalosis",
    scene: "An anxious patient is hyperventilating and the gas fits respiratory alkalosis.",
    ask: "What does that row tell you to do?",
    choices: [
      {
        text: "Decrease ventilation; pH is high or normal, CO2 is markedly down as the primary cause, and HCO3 is down as compensation.",
        note: "Correct. The examples are anxiety and hyperventilation.",
      },
      {
        text: "Increase ventilation and give low-dose oxygen.",
        note: "No. Increasing ventilation is the hypoventilation treatment inside respiratory acidosis.",
      },
      {
        text: "The primary change is a high CO2.",
        note: "No. The primary change is a marked fall in CO2.",
      },
      {
        text: "Give bicarbonate first because HCO3 is the primary fall.",
        note: "No. The HCO3 fall is compensation. Bicarbonate as needed is the metabolic-acidosis line.",
      },
    ],
    answer: 0,
    page: "35",
  },
  {
    id: "med-038",
    topicId: "MED",
    topic: "Metabolic alkalosis",
    scene: "A patient on diuretics has been vomiting and the gas shows metabolic alkalosis.",
    ask: "What treatment is printed for that row?",
    choices: [
      {
        text: "Diamox is printed to keep bicarbonate in during acidosis.",
        note: "No. Diamox is considered so that more bicarbonate is excreted in metabolic alkalosis.",
      },
      {
        text: "Check sodium and chloride and replace them as needed, and consider Diamox to increase bicarbonate excretion; pH is high, CO2 rises as compensation, and HCO3 is markedly up as the primary cause.",
        note: "Correct. The examples are vomiting, other gastrointestinal loss, and diuretics.",
      },
      {
        text: "The examples are DKA, chronic renal failure, and diarrhoea.",
        note: "No. Those are the metabolic-acidosis examples.",
      },
      {
        text: "Treat a high potassium and do not replace chloride.",
        note: "No. Treating high potassium is the DKA line. This row says check sodium and chloride and replace as needed.",
      },
    ],
    answer: 1,
    page: "35",
  },
  {
    id: "med-039",
    topicId: "MED",
    topic: "Respiratory drug groups",
    scene: "The student lists the usual respiratory medicines before the drug round.",
    ask: "Which three groups open that section, and why is the steroid there?",
    choices: [
      {
        text: "Thrombolytics, antiplatelets, and nitrates.",
        note: "No. Those drugs appear in the heart and stroke sections, not as the three usual respiratory groups.",
      },
      {
        text: "Corticosteroids are listed to increase mucosal oedema.",
        note: "No. They are noted for reducing mucosal oedema.",
      },
      {
        text: "Bronchodilators, anticholinergic agents, and corticosteroids, with the corticosteroid noted for reducing mucosal oedema.",
        note: "Correct. Doses come on the following pages, not on this title slide.",
      },
      {
        text: "Theophylline replaces all three groups on the opening page.",
        note: "No. Theophylline is a later page. The opening three are bronchodilators, anticholinergics, and corticosteroids.",
      },
    ],
    answer: 2,
    page: "36",
  },
  {
    id: "med-040",
    topicId: "MED",
    topic: "Beta-2 inhalers",
    scene: "Ventolin is prescribed for wheeze and the student asks what the page claims it can do.",
    ask: "What is printed for Ventolin and Combivent?",
    choices: [
      {
        text: "The puff range is once a week.",
        note: "No. It is 2 to 4 puffs from QID to Q4H.",
      },
      {
        text: "They are credited with lowering exacerbation rate and mortality.",
        note: "No. The page says they have no benefit on reducing exacerbation or mortality. A lower exacerbation rate is linked to corticosteroids.",
      },
      {
        text: "The side effects are bradycardia and a high potassium only.",
        note: "No. The printed side effects are tachycardia, tremor, low potassium, and hyperglycaemia.",
      },
      {
        text: "They are beta-2 stimulants that relax bronchial smooth muscle, given as 2 to 4 puffs from QID to Q4H; side effects include tachycardia, tremor, low potassium, and hyperglycaemia, and they do not reduce exacerbations or mortality.",
        note: "Correct. Salbutamol examples on the page are Ventolin and Bricanyl. Combivent shares the same puff range.",
      },
    ],
    answer: 3,
    page: "37",
  },
  {
    id: "med-041",
    topicId: "MED",
    topic: "Bricanyl doses",
    scene: "The chart shows Bricanyl both as a durule and as a subcutaneous order.",
    ask: "Which doses are printed?",
    choices: [
      {
        text: "Bricanyl durule 5 to 7.5 mg twice daily, and Bricanyl 0.5 mg subcutaneously Q8H as needed.",
        note: "Correct. Bricanyl is listed with Ventolin under the beta-2 examples.",
      },
      {
        text: "The durule is 0.5 mg and the subcutaneous dose is 5 to 7.5 mg.",
        note: "No. Those two doses are swapped.",
      },
      {
        text: "Both forms are 2 to 4 puffs from QID to Q4H.",
        note: "No. That puff range is Ventolin, Combivent, and Atrovent, not the Bricanyl durule or injection.",
      },
      {
        text: "Bricanyl is listed only as an anticholinergic.",
        note: "No. It sits with the beta-2 stimulants.",
      },
    ],
    answer: 0,
    page: "37",
  },
  {
    id: "med-042",
    topicId: "MED",
    topic: "Atrovent",
    scene: "Atrovent has just been given and the nurse asks when this page says it acts.",
    ask: "What does the anticholinergic page print?",
    choices: [
      {
        text: "It acts in 20 seconds and is given once daily.",
        note: "No. It takes 20 minutes to act and the puff frequency is QID to Q4H.",
      },
      {
        text: "Ipratropium, as Atrovent, 2 to 4 puffs from QID to Q4H, taking 20 minutes to act, and inhibiting vagally mediated reflexes; it can be mixed with a beta-2 stimulant as Combivent.",
        note: "Correct. This 20-minute onset is the anticholinergic page, not the later multi-use inhaler line.",
      },
      {
        text: "It cannot be mixed with a beta-2 stimulant.",
        note: "No. The page says it can be mixed with a beta-2 stimulant as Combivent.",
      },
      {
        text: "It is the steroid that reduces oedema of the small airways.",
        note: "No. That action belongs to the corticosteroid. Atrovent inhibits vagally mediated reflexes.",
      },
    ],
    answer: 1,
    page: "38",
  },
  {
    id: "med-043",
    topicId: "MED",
    topic: "Theophylline",
    scene: "Nuelin SR is on the regular chart and aminophylline is written in normal saline.",
    ask: "Which theophylline statement matches the page?",
    choices: [
      {
        text: "Aminophylline is the twice-daily tablet and Nuelin SR is the saline infusion.",
        note: "No. Nuelin SR is 100 to 200 mg BD. Aminophylline is 250 to 375 mg in normal saline from Q12H to Q8H.",
      },
      {
        text: "Theophyllines give significant relief in the acute attack.",
        note: "No. The page says there is no significant relief in the acute stage.",
      },
      {
        text: "Nuelin SR 100 to 200 mg twice daily, and aminophylline 250 to 375 mg in normal saline from Q12H to Q8H; side effects include palpitation, tremor, headache, and muscle cramps, with no significant relief in the acute stage.",
        note: "Correct. The page says there are more side effects than with the simpler bronchodilators.",
      },
      {
        text: "The only side effect named is a low potassium.",
        note: "No. Low potassium is a beta-2 side effect. Theophylline side effects here are palpitation, tremor, headache, and muscle cramps.",
      },
    ],
    answer: 2,
    page: "39",
  },
  {
    id: "med-044",
    topicId: "MED",
    topic: "Corticosteroid doses",
    scene: "Intravenous hydrocortisone is due and a steroid inhaler is also prescribed.",
    ask: "Which corticosteroid instructions are printed?",
    choices: [
      {
        text: "Hydrocortisone is 250 micrograms inhaled, and the inhaler is 100 mg IV.",
        note: "No. Those doses are swapped.",
      },
      {
        text: "Mouth washing is forbidden after the steroid inhaler.",
        note: "No. The page says perform a mouth wash after the steroid inhaler.",
      },
      {
        text: "This page says steroids do not change the exacerbation rate.",
        note: "No. They are associated with a lower exacerbation rate. No benefit on exacerbations is the beta-2 line.",
      },
      {
        text: "Hydrocortisone 100 mg IV Q6H or Q8H, and Becloforte or Becotide 250 micrograms, 2 to 4 puffs from BD to QID; they lessen inflammation and oedema of small airways, the mouth is washed after the steroid inhaler, and they are linked with a lower exacerbation rate.",
        note: "Correct. The examples named are hydrocortisone and beclomethasone dipropionate, by aerosol or by vein.",
      },
    ],
    answer: 3,
    page: "40",
  },
  {
    id: "med-045",
    topicId: "MED",
    topic: "Exacerbation contrast",
    scene: "The student thinks every respiratory drug on these pages reduces exacerbations.",
    ask: "Which comparison is actually printed?",
    choices: [
      {
        text: "Beta-2 stimulants have no benefit on reducing exacerbation or mortality, whereas corticosteroids are associated with a lower exacerbation rate.",
        note: "Correct. Theophylline is not the drug credited with that lower exacerbation rate; it has no significant acute relief.",
      },
      {
        text: "Both beta-2 stimulants and corticosteroids are said to lower mortality.",
        note: "No. Beta-2 stimulants have no benefit on mortality, and the steroid line is about exacerbations, not a mortality claim.",
      },
      {
        text: "Steroids have no effect on exacerbations, and beta-2 drugs reduce mortality.",
        note: "No. That reverses the two pages.",
      },
      {
        text: "Theophylline is the drug named for a lower exacerbation rate.",
        note: "No. The lower exacerbation rate is linked to the corticosteroid.",
      },
    ],
    answer: 0,
    page: "37-40",
  },
  {
    id: "med-046",
    topicId: "MED",
    topic: "Metered-dose inhaler",
    scene: "A patient is using a metered-dose inhaler for the first time.",
    ask: "Which steps match the inhaler page?",
    choices: [
      {
        text: "Inhale as fast as possible and do not hold the breath.",
        note: "No. The inhale is slow and deep over 3 to 5 seconds, then the breath is held about 10 seconds.",
      },
      {
        text: "Hold it upright and shake it, tilt the head slightly back and breathe out, stay about two finger-widths from the open mouth or seal the lips on the mouthpiece, press and inhale slowly over 3 to 5 seconds, hold the breath about 10 seconds, wait about 30 seconds between puffs, and rinse after an inhaled steroid such as QVAR, Flovent, or Asmanex.",
        note: "Correct. Breathe normally after the breath-hold, and replace the cap when finished.",
      },
      {
        text: "Wait about 30 minutes between puffs and skip the rinse after a steroid.",
        note: "No. The wait is about 30 seconds, and the mouth is rinsed after an inhaled steroid.",
      },
      {
        text: "Keep the inhaler horizontal, do not shake it, and swallow the spray.",
        note: "No. Hold it upright, shake it, and inhale it; do not treat it as a swallowed dose.",
      },
    ],
    answer: 1,
    page: "41",
  },
  {
    id: "med-047",
    topicId: "MED",
    topic: "Inhaler order",
    scene: "Ventolin, Atrovent, and Beclofort are all due together.",
    ask: "In what order does the multi-use page place them?",
    choices: [
      {
        text: "Beclofort first, because the steroid is the immediate reliever.",
        note: "No. Ventolin is first for immediate relief. Beclofort is last.",
      },
      {
        text: "Atrovent acts at once and lasts about 15 minutes.",
        note: "No. This page says it starts after about 15 minutes and lasts 6 to 8 hours.",
      },
      {
        text: "Ventolin first, the short-acting drug for immediate relief; then Atrovent, which starts in about 15 minutes and lasts 6 to 8 hours; then Beclofort, the steroid inhaler.",
        note: "Correct. On this page Atrovent inhibits tightening of muscle around the large airways. The 15-minute onset is this multi-use page, not the 20-minute line on the anticholinergic page.",
      },
      {
        text: "Ventolin last, because it is described as the steroid.",
        note: "No. Ventolin is the first, short-acting bronchodilator. The steroid is Beclofort.",
      },
    ],
    answer: 2,
    page: "42",
  },
  {
    id: "med-048",
    topicId: "MED",
    topic: "Heart-failure definition",
    scene: "A patient is told the heart cannot meet the body's metabolic needs.",
    ask: "How is heart failure defined?",
    choices: [
      {
        text: "Failure of the lungs to remove carbon dioxide.",
        note: "No. That is a respiratory-failure idea. This definition is about the heart's pump and filling.",
      },
      {
        text: "A sudden bleed into the brain.",
        note: "No. That is haemorrhagic stroke, not heart failure.",
      },
      {
        text: "Normal filling and ejection with failure limited to a valve that the page does not require.",
        note: "No. The definition requires impaired ventricular filling or ejection.",
      },
      {
        text: "A state in which the heart cannot pump enough blood for metabolic needs after any structural or functional impairment of ventricular filling or ejection.",
        note: "Correct. The page also calls this congestive heart failure. It is not defined as a lung or brain event.",
      },
    ],
    answer: 3,
    page: "45",
  },
  {
    id: "med-049",
    topicId: "MED",
    topic: "When the heart fails",
    scene: "The student asks when this page says the heart actually fails.",
    ask: "Which volume statement is printed?",
    choices: [
      {
        text: "With intrinsic disease or a structural problem it cannot handle a normal blood volume, or, without disease, it cannot tolerate a sudden expansion in blood volume.",
        note: "Correct. Failure also follows systolic or diastolic change in the left ventricle. Named causes include chronic hypertension, coronary artery disease, and valvular disease. It is progressive and chronic, managed by major lifestyle change and adjunct medicines to improve quality of life.",
      },
      {
        text: "It fails only when blood volume falls below normal.",
        note: "No. With disease it cannot handle a normal volume; without disease it cannot tolerate a sudden expansion.",
      },
      {
        text: "A sudden expansion of blood volume is well tolerated if there is no heart disease.",
        note: "No. The page says that even without disease a sudden expansion may not be tolerated.",
      },
      {
        text: "The named causes are pneumonia, lung fibrosis, and brainstem injury.",
        note: "No. Those are respiratory-failure examples. Heart-failure causes named here include chronic hypertension, coronary disease, and valvular disease.",
      },
    ],
    answer: 0,
    page: "45",
  },
  {
    id: "med-050",
    topicId: "MED",
    topic: "Heart-failure syndrome",
    scene: "A relative calls heart failure one disease with one set of signs.",
    ask: "What does the next heart-failure page correct?",
    choices: [
      {
        text: "The page calls heart failure a single disease with one symptom set.",
        note: "No. It says heart failure is not a disease itself, and the two sides differ.",
      },
      {
        text: "Heart failure is not a disease itself; it is a syndrome of volume overload, inadequate tissue perfusion, and poor exercise tolerance, and left-sided and right-sided failure do not look the same.",
        note: "Correct. Signs and symptoms are defined by which ventricle is affected.",
      },
      {
        text: "Poor exercise tolerance is excluded from the syndrome.",
        note: "No. Poor exercise tolerance is one of the three features named.",
      },
      {
        text: "Volume overload is replaced on this page by a high oxygen saturation.",
        note: "No. Volume overload is part of the syndrome.",
      },
    ],
    answer: 1,
    page: "46",
  },
  {
    id: "med-051",
    topicId: "MED",
    topic: "Pump failure",
    scene: "The student is explaining why both the lungs and the systemic veins are congested.",
    ask: "What follows pump failure, and which side is usually first?",
    choices: [
      {
        text: "Congestion comes first and hypoperfusion does not occur.",
        note: "No. Hypoperfusion of tissues comes first, then pulmonary and systemic venous congestion.",
      },
      {
        text: "The right side is usually affected first.",
        note: "No. The left side is usually affected first.",
      },
      {
        text: "Pump failure causes tissue hypoperfusion, then pulmonary and systemic venous congestion; the left side is usually affected first, though the right side or both sides can fail.",
        note: "Correct. The page does not list a separate symptom catalogue for each side beyond saying the sets differ.",
      },
      {
        text: "Both sides fail together in every case.",
        note: "No. Either side or both can fail, and the left is usually first.",
      },
    ],
    answer: 2,
    page: "46",
  },
  {
    id: "med-052",
    topicId: "MED",
    topic: "Coronary artery disease",
    scene: "A patient asks which heart problem is the most common.",
    ask: "What does the coronary page state?",
    choices: [
      {
        text: "Valvular disease is named as the most common type of heart disease.",
        note: "No. Valvular disease is a cause of heart failure. Coronary artery disease is the most common heart disease here.",
      },
      {
        text: "Atherosclerosis is said to spare the coronary arteries.",
        note: "No. Atherosclerosis is the principal cause, inside the coronary artery walls.",
      },
      {
        text: "The page says coronary disease cannot be prevented or treated in most people.",
        note: "No. It says lifestyle changes, medicines, and or procedures can prevent or treat it in most people.",
      },
      {
        text: "Coronary artery disease is the most common type of heart disease, atherosclerosis is its principal cause, and lifestyle changes, medicines, or procedures can prevent or treat it in most people.",
        note: "Correct. Atherosclerotic change is in the walls of the coronary arteries.",
      },
    ],
    answer: 3,
    page: "47",
  },
  {
    id: "med-053",
    topicId: "MED",
    topic: "Angina",
    scene: "The notes say angina while the patient describes chest pain.",
    ask: "What does angina mean here, and when is there ischaemia?",
    choices: [
      {
        text: "Angina pectoris literally means strangling of the chest, the pain of myocardial ischaemia, which occurs when oxygen demand exceeds supply.",
        note: "Correct. The page uses the spelling ischemia. Plaque and atherosclerosis can leave the muscle short of blood and oxygen.",
      },
      {
        text: "Angina means a brain clot and is unrelated to myocardial oxygen.",
        note: "No. It is chest pain from myocardial ischaemia.",
      },
      {
        text: "Ischaemia occurs when oxygen supply exceeds demand.",
        note: "No. Ischaemia occurs if demand exceeds supply.",
      },
      {
        text: "Angina is defined as pain from a pulmonary embolus.",
        note: "No. Pulmonary embolism is a dead-space example, not the definition of angina.",
      },
    ],
    answer: 0,
    page: "48",
  },
  {
    id: "med-054",
    topicId: "MED",
    topic: "Coronary narrowing",
    scene: "The teaching round turns to plaque and clot inside a coronary artery.",
    ask: "What end result does this page describe?",
    choices: [
      {
        text: "Plaque widens the artery and increases oxygen supply.",
        note: "No. Plaque and thrombus narrow the artery.",
      },
      {
        text: "Thrombus and further plaque narrow the coronary arteries, causing ischaemia and death of myocardial tissue.",
        note: "Correct. The muscle can be deprived of blood and oxygen because of plaque and atherosclerosis.",
      },
      {
        text: "Thrombus is said to protect myocardial tissue from death.",
        note: "No. Narrowing causes ischaemia and death of myocardial tissue.",
      },
      {
        text: "Narrowing causes ischaemia only when oxygen supply exceeds demand.",
        note: "No. Ischaemia is when demand exceeds supply.",
      },
    ],
    answer: 1,
    page: "48",
  },
  {
    id: "med-055",
    topicId: "MED",
    topic: "Myocardial infarction",
    scene: "The team uses the words heart attack at the bedside.",
    ask: "How is myocardial infarction described?",
    choices: [
      {
        text: "The major cause is brainstem injury.",
        note: "No. The major cause of a heart attack here is coronary artery disease.",
      },
      {
        text: "Infarction means a mismatch that cannot cause cardiac death.",
        note: "No. If supply and demand stay out of balance it can cause infarction, described as cardiac death.",
      },
      {
        text: "It is commonly called a heart attack; the major cause is coronary artery disease, and cardiac death can follow when myocardial oxygen supply and demand are out of balance.",
        note: "Correct. Myocardial ischaemia is inadequate perfusion from a partial or complete blockage of blood and oxygen. As cells lose oxygen, ischaemia sets in.",
      },
      {
        text: "Ischaemia is extra oxygen delivery through a fully open artery.",
        note: "No. Ischaemia is inadequate perfusion from a partial or complete blockage.",
      },
    ],
    answer: 2,
    page: "49",
  },
  {
    id: "med-056",
    topicId: "MED",
    topic: "Infarction pain and other causes",
    scene: "Chest pressure is spreading to the jaw, and the history includes a coronary spasm.",
    ask: "Which other causes and which typical symptom are printed?",
    choices: [
      {
        text: "The only other cause listed is a high blood glucose.",
        note: "No. The other causes are vasospasm, blood clots, electrolyte imbalance, and coronary trauma.",
      },
      {
        text: "The pain stays in the chest and does not move to the jaw or arm.",
        note: "No. It may radiate to the neck, jaw, shoulder, or arm.",
      },
      {
        text: "The most common symptom is a sudden wry mouth.",
        note: "No. A wry mouth is a stroke sign. Here the most common symptom is chest pressure or discomfort.",
      },
      {
        text: "Other causes include vasospasm, blood clots, electrolyte imbalance, and trauma to the coronary arteries; the most common symptom of a prolonged lack of oxygen is chest pressure or discomfort, which may spread to the neck, jaw, shoulder, or arm.",
        note: "Correct. Vasospasm is a sudden constriction or narrowing of a coronary artery. Tests, laboratory results, and ECG changes may show heart damage.",
      },
    ],
    answer: 3,
    page: "50",
  },
  {
    id: "med-057",
    topicId: "MED",
    topic: "Pathological Q wave",
    scene: "The ECG shows a deep negative wave at the start of the QRS.",
    ask: "When is a Q wave called pathological?",
    choices: [
      {
        text: "The Q wave is the first negative wave away from the baseline, and a Q wave greater than 25 percent of the height of the QRS indicates myocardial infarction.",
        note: "Correct. Reviewing the ECG for that Q wave is part of the diagnostic procedure page.",
      },
      {
        text: "A pathological Q wave is any positive wave after the T wave.",
        note: "No. The Q wave is the first negative wave away from the baseline.",
      },
      {
        text: "The cutoff is a Q wave greater than 75 percent of the QRS.",
        note: "No. The printed cutoff is greater than 25 percent of the QRS height.",
      },
      {
        text: "Pathological Q waves are said to exclude infarction.",
        note: "No. They indicate myocardial infarction.",
      },
    ],
    answer: 0,
    page: "52",
  },
  {
    id: "med-058",
    topicId: "MED",
    topic: "Cardiac troponin",
    scene: "The doctor asks when troponin rises, peaks, and stays up after myocardial damage.",
    ask: "How are cardiac troponins described?",
    choices: [
      {
        text: "They peak at 4 to 9 hours and are gone by 12 hours.",
        note: "No. 4 to 9 hours is when they are most elevated. The peak is after 12 to 24 hours.",
      },
      {
        text: "Troponin I or troponin T is the primary blood test and is extremely sensitive and specific for myocardial ischaemia; levels are most elevated 4 to 9 hours after damage, peak after 12 to 24 hours, and may stay elevated for 1 to 2 weeks.",
        note: "Correct. The page says ischaemia here; the biomarkers are for suspected acute myocardial infarction.",
      },
      {
        text: "They stay elevated for 1 to 2 hours only.",
        note: "No. They may remain elevated for 1 to 2 weeks.",
      },
      {
        text: "Troponin is a late non-specific test and is not the primary blood test.",
        note: "No. Cardiac troponins are the primary blood test and are extremely sensitive and specific.",
      },
    ],
    answer: 1,
    page: "52",
  },
  {
    id: "med-059",
    topicId: "MED",
    topic: "Echocardiogram timing",
    scene: "An echocardiogram is being booked on the day after an infarction.",
    ask: "When does this page advise the echo studies?",
    choices: [
      {
        text: "The first echo waits until three months, and no early study is advised.",
        note: "No. The first echo is in the first 24 to 48 hours. The second is within the first three months.",
      },
      {
        text: "Echo is advised only once troponin has been elevated for 1 to 2 weeks.",
        note: "No. The first study is advised in the first 24 to 48 hours.",
      },
      {
        text: "An echo is advised in the first 24 to 48 hours, and a second echo in the first three months sets a baseline after the infarction.",
        note: "Correct. Echo is called an essential tool in diagnosing acute myocardial infarction. This three-month echo baseline is not the stroke rehabilitation golden period.",
      },
      {
        text: "A second echo is said to have no baseline role.",
        note: "No. The second echo establishes a post-infarction baseline.",
      },
    ],
    answer: 2,
    page: "52",
  },
  {
    id: "med-060",
    topicId: "MED",
    topic: "Pardee waves",
    scene: "The ECG caption is used on the teaching round.",
    ask: "Where does the page place Pardee waves of acute infarction?",
    choices: [
      {
        text: "Only in lead I, with no reciprocal change.",
        note: "No. They are in II, III, and aVF, with reciprocal anterolateral changes.",
      },
      {
        text: "In II, III, and aVF as a normal finding in every tracing.",
        note: "No. They are presented as indicating acute infarction, not as normal.",
      },
      {
        text: "In the anterolateral leads as the primary infarct pattern, with reciprocal change in II, III, and aVF.",
        note: "No. That swaps the primary leads and the reciprocal leads.",
      },
      {
        text: "In the inferior leads II, III, and aVF, with reciprocal changes in the anterolateral leads.",
        note: "Correct. The caption says those Pardee waves indicate acute myocardial infarction.",
      },
    ],
    answer: 3,
    page: "53",
  },
  {
    id: "med-061",
    topicId: "MED",
    topic: "Clot medicines in infarction",
    scene: "A blood-thinning medicine is due during an acute infarction.",
    ask: "How are the clot medicines distinguished?",
    choices: [
      {
        text: "Anticoagulants prolong the time a clot takes to form, antiplatelets such as aspirin stop platelets sticking together, and thrombolytics or fibrinolytics are the clot busters; the sooner a thrombolytic is given, the less heart damage and the higher the chance of survival.",
        note: "Correct. Blood-thinning agents are given cautiously as ordered. By limiting clot growth they lower the risk of infarction and of blocked arteries and veins.",
      },
      {
        text: "Thrombolytics stop platelets sticking and do not dissolve clot.",
        note: "No. Antiplatelets stop platelets sticking. Thrombolytics and fibrinolytics dissolve clot.",
      },
      {
        text: "Delaying the thrombolytic does not change damage or survival on this page.",
        note: "No. Sooner treatment means less damage and a higher likelihood of survival.",
      },
      {
        text: "Aspirin is classified as the clot buster.",
        note: "No. Aspirin is the typical antiplatelet. The clot busters are thrombolytics and fibrinolytics.",
      },
    ],
    answer: 0,
    page: "54",
  },
  {
    id: "med-062",
    topicId: "MED",
    topic: "Anticoagulant and antiplatelet",
    scene: "A patient who has had a heart attack asks which blood thinners are which, and what side effect is most common.",
    ask: "Which names and side effect match the page?",
    choices: [
      {
        text: "Warfarin is the antiplatelet and aspirin slows clot-making in the way heparin does.",
        note: "No. Heparin and warfarin are the anticoagulants. Aspirin and clopidogrel are the antiplatelets.",
      },
      {
        text: "Heparin or warfarin, also called Coumadin, slow the making of clots; aspirin and clopidogrel stop platelets clumping and are taken mainly after a heart attack or stroke; bleeding is the most common side effect, with upset stomach, nausea, and diarrhoea also possible.",
        note: "Correct. Antiplatelets are not described as the drugs that slow the body's clot-making process.",
      },
      {
        text: "Antiplatelets are used mainly for pneumonia, not after heart attack or stroke.",
        note: "No. They are mainly taken by people who have had a heart attack or stroke.",
      },
      {
        text: "The most common side effect is a low glucose, and bleeding is not mentioned.",
        note: "No. Bleeding is the most common side effect. Upset stomach, nausea, and diarrhoea are also listed.",
      },
    ],
    answer: 1,
    page: "56",
  },
  {
    id: "med-063",
    topicId: "MED",
    topic: "Morphine and nitroglycerin",
    scene: "Acute infarction pain continues and both morphine and nitroglycerin are discussed.",
    ask: "What does this page say those two drugs do?",
    choices: [
      {
        text: "Morphine raises heart rate and venous return and increases oxygen need.",
        note: "No. It lowers blood pressure, heart rate, and venous return, and that lessens oxygen need.",
      },
      {
        text: "Nitroglycerin is last-line and constricts the coronary arteries.",
        note: "No. It remains first-line and causes vasodilation through nitric oxide.",
      },
      {
        text: "Intravenous morphine, the analgesic used most often, lowers blood pressure, heart rate, and venous return and may activate local histamine-mediated processes, which lessens myocardial oxygen need; nitroglycerin stays first-line, makes nitric oxide, dilates vessels, increases myocardial blood flow, and is used mainly to relieve chest pain.",
        note: "Correct. No dose of either drug is printed on this page, so none is added here.",
      },
      {
        text: "Morphine is described as the clot buster.",
        note: "No. Clot busters are thrombolytics. Morphine is the pain medicine used most often.",
      },
    ],
    answer: 2,
    page: "57",
  },
  {
    id: "med-064",
    topicId: "MED",
    topic: "Glyceryl trinitrate class",
    scene: "The patient asks what kind of medicine the under-the-tongue tablet is.",
    ask: "How is glyceryl trinitrate classified?",
    choices: [
      {
        text: "It is a long-acting antibiotic used to watch a fever pattern.",
        note: "No. It is a short-acting nitrate for angina.",
      },
      {
        text: "Nitrates constrict vessels so the heart pumps against a higher pressure.",
        note: "No. They dilate vessels and make pumping easier.",
      },
      {
        text: "The most common form on this page is an intravenous clot buster.",
        note: "No. The most common form named is the sublingual tablet.",
      },
      {
        text: "Nitrates are anti-anginal drugs that dilate vessels so the heart can more easily supply the body and the heart muscle; glyceryl trinitrate is a short-acting nitrate for an angina attack, and the sublingual tablet is the most common form.",
        note: "Correct. The Chinese teaching line calls that sublingual tablet the under-tongue pill and says it is used when angina starts.",
      },
    ],
    answer: 3,
    page: "59",
  },
  {
    id: "med-065",
    topicId: "MED",
    topic: "Taking glyceryl trinitrate",
    scene: "Angina has just started and a sublingual glyceryl trinitrate tablet is due.",
    ask: "How should that tablet be taken?",
    choices: [
      {
        text: "Sit down first to lessen dizziness or headache, place one tablet under the tongue until it dissolves, use a sip of water if the mouth is dry, and do not swallow or chew it; if it is swallowed, place another tablet under the tongue until it dissolves.",
        note: "Correct. Use it as soon as symptoms appear.",
      },
      {
        text: "Chew or swallow the tablet so it works faster.",
        note: "No. Do not swallow or chew it. If it is swallowed by mistake, use another tablet under the tongue.",
      },
      {
        text: "Stay standing, because sitting makes dizziness worse.",
        note: "No. Sit down before using it to lessen dizziness or headache.",
      },
      {
        text: "A dry mouth means the tablet should be swallowed with a full cup of water.",
        note: "No. A sip of water may help it dissolve under the tongue. It is still not swallowed as the dose.",
      },
    ],
    answer: 0,
    page: "59",
  },
  {
    id: "med-066",
    topicId: "MED",
    topic: "Repeating glyceryl trinitrate",
    scene: "The angina is still there five minutes after the first sublingual tablet.",
    ask: "How far does the page take repeat doses?",
    choices: [
      {
        text: "Stop after one tablet whatever the pain does.",
        note: "No. A second tablet is used if pain remains at five minutes, and a third after another five minutes.",
      },
      {
        text: "Use a second tablet, and if the pain is still there after another five minutes use a third; if the pain still persists, seek medical help immediately.",
        note: "Correct. The gaps printed are five minutes, then another five minutes, then immediate help. No further tablet is listed after the third.",
      },
      {
        text: "The gap between tablets is 30 minutes.",
        note: "No. The printed gap is five minutes.",
      },
      {
        text: "A fourth tablet is printed before any call for help.",
        note: "No. After the third tablet, if pain persists, seek medical help immediately.",
      },
    ],
    answer: 1,
    page: "59",
  },
  {
    id: "med-067",
    topicId: "MED",
    topic: "Infarction supply and demand",
    scene: "The student uses ischaemia and infarction as if the page made them the same word.",
    ask: "How does the infarction page separate them?",
    choices: [
      {
        text: "Ischaemia means cardiac death, and infarction means a reversible extra supply of oxygen.",
        note: "No. That reverses the page: infarction is the cardiac-death end of a supply-demand failure.",
      },
      {
        text: "Only a complete blockage counts; a partial blockage is excluded.",
        note: "No. Ischaemia is inadequate perfusion from a partial or complete blockage.",
      },
      {
        text: "Ischaemia is inadequate perfusion from a partial or complete block; if myocardial oxygen supply and demand stay out of balance, infarction, meaning cardiac death, can follow.",
        note: "Correct. In the emergency, as the cells lose oxygen, ischaemia, reduced blood flow, sets in. A partial blockage is included, not only a complete one.",
      },
      {
        text: "Loss of oxygen does not lead to ischaemia.",
        note: "No. As the cells lose oxygen, ischaemia sets in.",
      },
    ],
    answer: 2,
    page: "49",
  },
  {
    id: "med-068",
    topicId: "MED",
    topic: "Stroke types",
    scene: "A sudden deficit is called a stroke, and the scan question is clot versus bleed.",
    ask: "What two main types are named, and what can cause the bleed?",
    choices: [
      {
        text: "Haemorrhagic stroke is the clot and ischaemic stroke is the burst artery.",
        note: "No. Those mechanisms are swapped.",
      },
      {
        text: "The only cause of bleeding named here is low blood pressure.",
        note: "No. The causes named are aneurysm, high blood pressure, and trauma.",
      },
      {
        text: "Stroke is defined as a block in a coronary artery.",
        note: "No. This page is brain blood flow, not the coronary artery.",
      },
      {
        text: "Ischaemic stroke is a blockage, usually a clot; haemorrhagic stroke is sudden bleeding, as when an artery bursts, from an aneurysm, high blood pressure, or trauma.",
        note: "Correct. The page spelling is ischemic and hemorrhagic. A stroke here is blood flow to the brain being blocked, with bleeding as the second main type.",
      },
    ],
    answer: 3,
    page: "61",
  },
  {
    id: "med-069",
    topicId: "MED",
    topic: "Transient ischaemic attack",
    scene: "Yesterday's weakness has fully gone and the note says TIA.",
    ask: "What is a TIA on this page?",
    choices: [
      {
        text: "A mini-stroke: a blockage that clears before lasting damage, and a past TIA raises the chance of a later stroke.",
        note: "Correct. It is not the three-month rehabilitation period and it is not a completed bleed.",
      },
      {
        text: "A bleed that always leaves lasting damage.",
        note: "No. A TIA resolves before lasting damage.",
      },
      {
        text: "A history of TIA lowers the future stroke risk.",
        note: "No. A history of TIAs can increase the risk of a future stroke.",
      },
      {
        text: "TIA means the first three months of rehabilitation.",
        note: "No. The first three months are the later golden recovery period, not the definition of a TIA.",
      },
    ],
    answer: 0,
    page: "61",
  },
  {
    id: "med-070",
    topicId: "MED",
    topic: "Watching a stroke patient",
    scene: "Arm weakness is slightly worse than an hour ago.",
    ask: "Why must nurses keep watching, and what long-term burden is named?",
    choices: [
      {
        text: "Symptoms stay fixed, so observation can wait until discharge.",
        note: "No. Symptoms can change rapidly and subtly.",
      },
      {
        text: "Symptoms can change quickly and subtly, so prompt thinking and action are needed to stop decline; a severe stroke may leave the person needing full help to feed, bathe, and turn, and long deficits can bring depression for the person and the family.",
        note: "Correct. The page says stroke patients often need nursing monitoring for that reason.",
      },
      {
        text: "Stroke never affects feeding, bathing, or turning.",
        note: "No. Severe stroke may require total care in feeding, bathing, and turning.",
      },
      {
        text: "Depression is described only as a nitrate side effect.",
        note: "No. On this page long-term deficits can cause depression for the client and the family. Headache and dizziness are the nitrate cautions.",
      },
    ],
    answer: 1,
    page: "61",
  },
  {
    id: "med-071",
    topicId: "MED",
    topic: "Stroke figures",
    scene: "A family asks how common and how deadly stroke is on the Hong Kong teaching slide.",
    ask: "Which figures are printed?",
    choices: [
      {
        text: "Stroke is the fourth killer worldwide and the second cause of death in Hong Kong.",
        note: "No. Worldwide it is the second killer. In Hong Kong it is the fourth cause of death.",
      },
      {
        text: "The lifetime figure is one person in forty, and a death every six minutes.",
        note: "No. The page says one in four in a lifetime, and one death about every six seconds.",
      },
      {
        text: "Stroke is the world's second killer and the main cause of adult disability; about one person in four has one in a lifetime; about one person dies of stroke every six seconds; Hong Kong averages about 3,000 stroke deaths a year, the fourth leading cause of death.",
        note: "Correct. Recognising the signs matters because faster care means more treatment choices and a better chance of recovery.",
      },
      {
        text: "Hong Kong averages 300 stroke deaths a year as the leading cause of death.",
        note: "No. The average is about 3,000 deaths a year, and it is the fourth cause, not the first.",
      },
    ],
    answer: 2,
    page: "62",
  },
  {
    id: "med-072",
    topicId: "MED",
    topic: "Ischaemic and haemorrhagic burden",
    scene: "The family asks why brain cells die and whether bleeding stroke is rare among Chinese patients.",
    ask: "What does this page add?",
    choices: [
      {
        text: "Haemorrhage is about three in a hundred Chinese strokes.",
        note: "No. The page says about three in ten.",
      },
      {
        text: "Most Chinese strokes are haemorrhagic and ischaemic stroke is rare.",
        note: "No. Most strokes are still ischaemic, even though the bleeding share is higher than in Western patients.",
      },
      {
        text: "About two thousand brain cells die each hour, and lasting effects are uncommon.",
        note: "No. Nearly two million brain cells die each minute, and more than half of patients have lasting effects.",
      },
      {
        text: "Blocked supply starves brain cells of oxygen and nutrients; ischaemic stroke is the most common, but brain haemorrhage is about three in ten Chinese strokes, higher than in Western patients; nearly two million brain cells die each minute, and more than half of patients have lasting effects.",
        note: "Correct. Ischaemic stroke here is narrowing or thrombus in a brain or neck vessel. Haemorrhagic stroke is a burst vessel, with blood pressing on brain tissue. Lasting effects can limit movement or cognition, self-care, work, and daily life, and the burden also falls on carers and services.",
      },
    ],
    answer: 3,
    page: "62",
  },
  {
    id: "med-073",
    topicId: "MED",
    topic: "Stroke warning signs",
    scene: "A visitor suddenly slurs, drools from a crooked mouth, and cannot see clearly.",
    ask: "What response and which signs are printed?",
    choices: [
      {
        text: "Act FAST and call 9-9-9 at once. Signs include one-sided numbness of the face, arm, and leg, a sudden wry mouth with drooling, slurred speech or trouble understanding, a sudden severe headache, trouble seeing in one or both eyes, sudden trouble swallowing, and dizziness, loss of balance or coordination, or nausea and vomiting with no known cause.",
        note: "Correct. The page says to know the warning signs and act FAST. It does not spell the letters out in the text.",
      },
      {
        text: "Call only if the signs have lasted three days.",
        note: "No. Call 9-9-9 immediately.",
      },
      {
        text: "Headache, visual change, and swallowing trouble are left off the list.",
        note: "No. Sudden severe headache, trouble seeing, and sudden difficulty swallowing are all listed.",
      },
      {
        text: "Signs are always on both sides, and speech is spared.",
        note: "No. Numbness is especially on one side, and sudden slurring or trouble understanding is listed.",
      },
    ],
    answer: 0,
    page: "63-64",
  },
  {
    id: "med-074",
    topicId: "MED",
    topic: "Talk smile mnemonic",
    scene: "A student teaches the family the Chinese stroke mnemonic 談笑用兵.",
    ask: "What does each character stand for?",
    choices: [
      {
        text: "談 means a severe headache and 笑 means trouble swallowing.",
        note: "No. 談 is unclear speech and 笑 is an asymmetric smile.",
      },
      {
        text: "談 is sudden unclear speech, 笑 is an uneven smile, 用 is sudden weakness or numbness on one side, and 兵 means get medical help quickly.",
        note: "Correct. The page says signs depend on the brain area and are often sudden. This mnemonic is for those common signs.",
      },
      {
        text: "兵 means wait three hours before seeking help.",
        note: "No. 兵 means seek medical care as soon as these signs appear.",
      },
      {
        text: "The mnemonic is for angina tablets, not stroke.",
        note: "No. It is the stroke-sign mnemonic on the neurology page.",
      },
    ],
    answer: 1,
    page: "65",
  },
  {
    id: "med-075",
    topicId: "MED",
    topic: "Range of stroke signs",
    scene: "A relative asks whether every stroke looks the same.",
    ask: "What range of signs does the page give?",
    choices: [
      {
        text: "Signs are the same whichever brain area is hit.",
        note: "No. Signs depend on the area affected.",
      },
      {
        text: "Paralysis of all four limbs and coma are the usual mild signs.",
        note: "No. They are the severe end. The most common signs are unclear speech and one-sided weakness or numbness.",
      },
      {
        text: "Signs depend on the brain area and are often sudden; the most common are unclear speech and one-sided weakness or numbness of a limb or the face; others include sudden blurred vision, an unsteady gait, and dizziness; the severe end is paralysis of all four limbs and coma.",
        note: "Correct. That range sits beside the 談笑用兵 mnemonic.",
      },
      {
        text: "Blurred vision, unsteady gait, and dizziness do not occur.",
        note: "No. They are listed among the other signs.",
      },
    ],
    answer: 2,
    page: "65",
  },
  {
    id: "med-076",
    topicId: "MED",
    topic: "Golden three hours",
    scene: "Symptoms are still inside three hours and the family has not yet reached hospital.",
    ask: "Why does the page call those three hours critical?",
    choices: [
      {
        text: "The three hours are the rehabilitation golden period after the stroke has settled.",
        note: "No. Rehabilitation's golden period is the first three months. These three hours are for emergency treatment.",
      },
      {
        text: "The clot-dissolving injection is useful only after 24 hours.",
        note: "No. It is described within three hours of onset.",
      },
      {
        text: "Most strokes on this page are a burst vessel rather than a clot.",
        note: "No. This page says most are a brain attack in which a clot blocks flow.",
      },
      {
        text: "Treatment within three hours of onset can reduce disability; most of these strokes are a brain attack from a clot, and a clot-dissolving injection within three hours can reopen the vessel, rescue cells before they are damaged, and limit the stroke.",
        note: "Correct. This three-hour treatment window is not the three-month rehabilitation period.",
      },
    ],
    answer: 3,
    page: "67",
  },
  {
    id: "med-077",
    topicId: "MED",
    topic: "Emergency stroke steps",
    scene: "Someone shows stroke signs in the corridor and no doctor is beside them yet.",
    ask: "Which order matches the four emergency steps?",
    choices: [
      {
        text: "Check the mouth and remove any blockage, lay the person on the side on a flat surface and keep them warm, press the Easylink alarm at once if there is one, then get immediate medical treatment.",
        note: "Correct. Acute stroke unit care is printed just after these steps as proven to save lives and reduce disability.",
      },
      {
        text: "Give a drink first, sit the person upright, and delay any alarm.",
        note: "No. The mouth is cleared of obstruction, the person is laid on the side, and the alarm is pressed at once if available.",
      },
      {
        text: "Lay the person on the back with the neck flexed before looking in the mouth.",
        note: "No. The mouth is checked first, then the person is laid on the side on a flat surface and kept warm.",
      },
      {
        text: "Easylink replaces medical treatment and is used only the next day.",
        note: "No. The alarm is the third step if available, and immediate medical treatment is still the fourth step.",
      },
    ],
    answer: 0,
    page: "68",
  },
  {
    id: "med-078",
    topicId: "MED",
    topic: "Acute stroke unit",
    scene: "The family asks whether an acute stroke unit changes the outcome.",
    ask: "What has that care been shown to do?",
    choices: [
      {
        text: "It shortens physiotherapy only, and does not affect survival.",
        note: "No. It has been proven to save lives and reduce disability.",
      },
      {
        text: "Save lives and reduce disability for patients with acute stroke.",
        note: "Correct. The line follows the four first-aid steps and applies to acute stroke patients.",
      },
      {
        text: "It increases disability while it lowers clot risk.",
        note: "No. It reduces disability. It is not described as increasing it.",
      },
      {
        text: "It has no effect on death or disability.",
        note: "No. The page says it saves lives and reduces disability.",
      },
    ],
    answer: 1,
    page: "68",
  },
  {
    id: "med-079",
    topicId: "MED",
    topic: "Alteplase window",
    scene: "An ischaemic stroke is still inside three hours and alteplase is being considered.",
    ask: "What limits does the page put on that drug?",
    choices: [
      {
        text: "It suits every stroke and can be given any time in the first three days.",
        note: "No. It is not suitable for every patient, and the window for maximal effect is three hours from onset.",
      },
      {
        text: "Alteplase is printed as the drug that stops bleeding damage.",
        note: "No. The haemorrhagic page says no known drug stops that damage. Alteplase is for the ischaemic clot.",
      },
      {
        text: "rtPA, also named alteplase, is the most promising way to break up the clot, but it does not suit every patient and it must be given within three hours of onset for the greatest effect.",
        note: "Correct. It is an emergency treatment to unclog a blocked vessel or artery. It is not described as a drug for a haemorrhagic stroke.",
      },
      {
        text: "The page says the drug has no role in a blocked vessel.",
        note: "No. It is described as an effective emergency treatment to unclog a blocked vessel or artery.",
      },
    ],
    answer: 2,
    page: "69",
  },
  {
    id: "med-080",
    topicId: "MED",
    topic: "Other ischaemic-stroke drugs",
    scene: "The patient cannot have rtPA and the team discusses other medicines for ischaemic stroke.",
    ask: "What other drug groups does this page name?",
    choices: [
      {
        text: "Mannitol and glycerol as the clot-dissolving pair.",
        note: "No. Mannitol and glycerol are for brain swelling in haemorrhagic stroke, not the other ischaemic-stroke drugs on this page.",
      },
      {
        text: "Only high-flow oxygen and Panadol.",
        note: "No. Those are not the other ischaemic-stroke treatments named here.",
      },
      {
        text: "Diamox, to increase bicarbonate excretion.",
        note: "No. Diamox belongs to metabolic alkalosis, not this ischaemic-stroke page.",
      },
      {
        text: "Antiplatelet drugs or anticoagulant drugs.",
        note: "Correct. Those are the other treatment named beside the clot-dissolving injection.",
      },
    ],
    answer: 3,
    page: "69",
  },
  {
    id: "med-081",
    topicId: "MED",
    topic: "Haemorrhagic damage",
    scene: "A bleed is confirmed and the family asks for a drug that will undo the brain damage.",
    ask: "What does the haemorrhagic-stroke page say about stopping that damage?",
    choices: [
      {
        text: "There are no known drugs that stop the damage a haemorrhagic stroke has done to the brain.",
        note: "Correct. Care turns to blood pressure, swelling, and selected surgery, not to a damage-reversing drug.",
      },
      {
        text: "rtPA is the drug that stops haemorrhagic damage.",
        note: "No. rtPA is the ischaemic clot-dissolving drug. This page says no known drug stops the haemorrhagic damage.",
      },
      {
        text: "Aspirin is printed as the agent that reverses the bleed.",
        note: "No. Aspirin is an antiplatelet in the heart section. It is not a drug that stops haemorrhagic brain damage.",
      },
      {
        text: "Glyceryl trinitrate is named to halt growth of the haematoma.",
        note: "No. Glyceryl trinitrate is the angina nitrate. Haematoma expansion is approached here by controlling blood pressure.",
      },
    ],
    answer: 0,
    page: "70",
  },
  {
    id: "med-082",
    topicId: "MED",
    topic: "Blood pressure and swelling",
    scene: "The scan shows a haematoma and the brain is swollen.",
    ask: "Why are blood pressure, mannitol, and glycerol mentioned?",
    choices: [
      {
        text: "Mannitol and glycerol are given to every patient whatever the swelling.",
        note: "No. Their use is based solely on the severity of the swelling.",
      },
      {
        text: "Blood pressure is controlled to reduce expansion of the haematoma; mannitol and glycerol are used according to how severe the swelling is, in order to lower intracranial pressure.",
        note: "Correct. They are not given as drugs that undo the damage already done.",
      },
      {
        text: "Blood pressure is raised so the haematoma can expand.",
        note: "No. Pressure is controlled in order to reduce expansion of the haematoma.",
      },
      {
        text: "These drugs dissolve the clot inside the three-hour window.",
        note: "No. The three-hour clot-dissolving drug is for ischaemic stroke. Mannitol and glycerol lower intracranial pressure.",
      },
    ],
    answer: 1,
    page: "70",
  },
  {
    id: "med-083",
    topicId: "MED",
    topic: "Surgery for brain bleeding",
    scene: "The doctors are discussing an operation for the bleed.",
    ask: "When is surgery considered, and what limit is printed?",
    choices: [
      {
        text: "Surgery is the routine way to remove disability after every small bleed.",
        note: "No. It is not effective in reducing disability and is usually for life-threatening complications.",
      },
      {
        text: "Size and location do not affect the decision.",
        note: "No. Surgical treatment is determined from the size and location of the bleeding and from complications.",
      },
      {
        text: "It depends on the size and place of the bleeding and on complications; it is usually for life-threatening complications and it is not effective in reducing disability.",
        note: "Correct. It does not replace the statement that no drug stops the damage already done.",
      },
      {
        text: "Surgery is described as highly effective against disability and replaces blood-pressure control.",
        note: "No. It is not effective in reducing disability, and blood-pressure control is a separate measure.",
      },
    ],
    answer: 2,
    page: "70",
  },
  {
    id: "med-084",
    topicId: "MED",
    topic: "Golden recovery period",
    scene: "Therapy has started during the first three months after the stroke.",
    ask: "What is that golden period for?",
    choices: [
      {
        text: "The golden period is the first three hours, and exercise after that cannot help.",
        note: "No. The first three hours are the emergency treatment window. Rehabilitation's golden period is the first three months.",
      },
      {
        text: "Rehabilitation is useful only after the first year.",
        note: "No. The golden period is the first three months.",
      },
      {
        text: "Exercise inside three months is said to increase disability.",
        note: "No. Proactive exercise in that period minimises physical disability.",
      },
      {
        text: "The first three months after onset are the golden period for rehabilitation; active therapeutic exercise can lessen physical disability and may help some people return to an independent life.",
        note: "Correct. This is not the three-hour window for a clot-dissolving injection.",
      },
    ],
    answer: 3,
    page: "71",
  },
  {
    id: "med-085",
    topicId: "MED",
    topic: "Stroke rehabilitation therapies",
    scene: "Physiotherapy, occupational therapy, and speech therapy are all written on the plan.",
    ask: "What is each one for?",
    choices: [
      {
        text: "Physiotherapy uses equipment such as elastic bands to restore muscle, or works on mobility such as crutches if power does not fully return; occupational therapy uses activity and equipment for daily life and a return to work; speech therapy trains communication and language.",
        note: "Correct. All three sit inside the golden rehabilitation period page.",
      },
      {
        text: "Speech therapy restores muscle with elastic bands, and physiotherapy is only for language.",
        note: "No. Elastic bands and mobility, including crutches, are physiotherapy. Language is speech therapy.",
      },
      {
        text: "Occupational therapy is limited to giving a clot-dissolving drug.",
        note: "No. Occupational therapy teaches use of activity and equipment for daily life and work.",
      },
      {
        text: "Crutches are forbidden and elastic bands are not mentioned.",
        note: "No. Elastic resistance bands are named, and crutches are an example if muscle function cannot be fully restored.",
      },
    ],
    answer: 0,
    page: "71",
  },
  {
    id: "med-086",
    topicId: "MED",
    topic: "Chronic renal failure stage",
    scene: "A patient is told the kidney problem now needs permanent dialysis.",
    ask: "When has chronic kidney disease become chronic renal failure?",
    choices: [
      {
        text: "It is stage one, before any loss of function.",
        note: "No. It is the fifth and final stage.",
      },
      {
        text: "When the damage needs renal replacement therapy on a permanent basis, which is the fifth and final stage of chronic kidney disease.",
        note: "Correct. Nephrology is the branch of medicine concerned with the kidneys. Chronic renal failure is the end of a gradual, progressive loss of kidney function.",
      },
      {
        text: "Permanent replacement therapy means the patient is still in an early stage.",
        note: "No. Needing permanent renal replacement is what moves the patient into this final stage.",
      },
      {
        text: "Nephrology is defined as the branch concerned with the coronary arteries.",
        note: "No. Nephrology is concerned with the kidneys.",
      },
    ],
    answer: 1,
    page: "73",
  },
  {
    id: "med-087",
    topicId: "MED",
    topic: "What failing kidneys cannot do",
    scene: "Waste is building up and the acid-base balance is drifting.",
    ask: "What does renal failure mean on this page?",
    choices: [
      {
        text: "Waste removal stays normal and only red-cell production fails.",
        note: "No. The definition is failure to remove metabolic wastes or to perform regulatory functions. Anaemia is a later blood-result finding, not this definition.",
      },
      {
        text: "Protein waste is cleared from the blood more effectively as the kidneys fail.",
        note: "No. Substances normally eliminated in urine accumulate.",
      },
      {
        text: "The kidneys cannot remove the body's metabolic wastes or perform their regulatory functions, so substances normally lost in urine accumulate and disturb endocrine and metabolic function plus fluid, electrolyte, and acid-base balance.",
        note: "Correct. That accumulation is from impaired renal excretion.",
      },
      {
        text: "Acid-base balance is said to be unaffected.",
        note: "No. Acid-base disturbance is included.",
      },
    ],
    answer: 2,
    page: "73",
  },
  {
    id: "med-088",
    topicId: "MED",
    topic: "Uraemia and progression",
    scene: "One patient loses a lot of protein in the urine and also has high blood pressure.",
    ask: "How are uraemia and faster progression described?",
    choices: [
      {
        text: "Uraemia affects only the kidney and spares every other system.",
        note: "No. Uraemia adversely affects every system in the body.",
      },
      {
        text: "Heavy protein loss and high blood pressure slow the disease.",
        note: "No. Progression tends to be more rapid when those are present than when they are not.",
      },
      {
        text: "End products of protein metabolism fall in the blood as function declines.",
        note: "No. They accumulate in the blood.",
      },
      {
        text: "Renal failure is a systemic disease and a final common pathway of many kidney and urinary-tract diseases; end products of protein metabolism build up, uraemia harms every system, and the disease moves faster when a lot of protein is excreted or the blood pressure is high.",
        note: "Correct. Those end products are normally excreted in urine.",
      },
    ],
    answer: 3,
    page: "74",
  },
  {
    id: "med-089",
    topicId: "MED",
    topic: "Causes of kidney disease",
    scene: "The student is labelling the cause diagram in the renal chapter.",
    ask: "Which causes are named?",
    choices: [
      {
        text: "Diabetes, kidney inflammation, hypertension, polycystic disease, blocked urine drainage tubes, and medicine.",
        note: "Correct. Those are the labels on the cause page. No stroke or inhaler list is added.",
      },
      {
        text: "Only angina, asthma, and stroke.",
        note: "No. Those are not the cause labels. The labels are diabetes, kidney inflammation, hypertension, polycystic disease, blocked drainage tubes, and medicine.",
      },
      {
        text: "Diabetes and hypertension are left off the diagram.",
        note: "No. Both are named.",
      },
      {
        text: "Blocked urine drainage tubes are listed as a treatment, not a cause.",
        note: "No. They are one of the cause labels.",
      },
    ],
    answer: 0,
    page: "75",
  },
  {
    id: "med-090",
    topicId: "MED",
    topic: "BUN and creatinine",
    scene: "Creatinine is 12 mg/dL and the BUN is above 25 mg/dL.",
    ask: "How does the blood-result page read those figures?",
    choices: [
      {
        text: "A BUN above 25 mg/dL suggests end-stage disease, and creatinine of 12 mg/dL is only an early-damage line.",
        note: "No. Creatinine of 12 mg/dL suggests end-stage renal disease. BUN above 25 mg/dL indicates renal damage.",
      },
      {
        text: "BUN and creatinine are elevated, usually in proportion; a creatinine of 12 mg/dL suggests end-stage renal disease, and a BUN above 25 mg/dL indicates renal damage.",
        note: "Correct. Do not swap which number suggests end-stage disease.",
      },
      {
        text: "Both results are described as below the reference box.",
        note: "No. They are described as elevated.",
      },
      {
        text: "Creatinine of 12 mg/dL is the printed trigger to start Diamox.",
        note: "No. Diamox is a metabolic-alkalosis option. This creatinine figure suggests end-stage renal disease.",
      },
    ],
    answer: 1,
    page: "77",
  },
  {
    id: "med-091",
    topicId: "MED",
    topic: "Renal anaemia",
    scene: "Haemoglobin is under 7 to 8 g/dL and the red cells are short-lived.",
    ask: "Why is the blood count abnormal in this section?",
    choices: [
      {
        text: "Haemoglobin is usually above that range because erythropoietin rises.",
        note: "No. Haemoglobin is decreased, usually to less than 7 to 8 g/dL, and erythropoietin is deficient.",
      },
      {
        text: "Red cells live longer in azotaemia.",
        note: "No. Red-cell life span is decreased because of erythropoietin deficiency and azotaemia.",
      },
      {
        text: "Haemoglobin falls because of anaemia, usually to less than 7 to 8 g/dL, and red-cell life is shorter because of erythropoietin deficiency and azotaemia.",
        note: "Correct. The page lists this under the complete blood count and the red-cell lines.",
      },
      {
        text: "Anaemia is not linked to the blood count on this page.",
        note: "No. The complete blood count line is haemoglobin decreased because of anaemia.",
      },
    ],
    answer: 2,
    page: "77",
  },
  {
    id: "med-092",
    topicId: "MED",
    topic: "Renal blood-gas acidosis",
    scene: "The renal gas shows a very low pH and the student reaches for the six-step cut of 7.35.",
    ask: "What acidosis figures does the renal blood-result page print?",
    choices: [
      {
        text: "The renal page uses pH above 7.45 as its acidosis line.",
        note: "No. Above 7.45 is the six-step alkalosis cut. This page describes a decreased pH and metabolic acidosis under 7.2.",
      },
      {
        text: "Bicarbonate and PCO2 are increased.",
        note: "No. Both bicarbonate and PCO2 are decreased.",
      },
      {
        text: "The cause is too much renal excretion of hydrogen.",
        note: "No. The cause is loss of the renal ability to excrete hydrogen and ammonia or protein-breakdown end products.",
      },
      {
        text: "pH is decreased, and metabolic acidosis with pH less than 7.2 occurs because the kidney can no longer excrete hydrogen and ammonia or the end products of protein breakdown; bicarbonate and PCO2 are decreased.",
        note: "Correct. This less-than-7.2 line is the renal page. It is not the acceptable box of 7.38 to 7.42 and not the six-step acidosis cut of under 7.35.",
      },
    ],
    answer: 3,
    page: "77",
  },
  {
    id: "med-093",
    topicId: "MED",
    topic: "Potassium and sodium",
    scene: "Potassium is high in end-stage disease and the ECG has not yet changed.",
    ask: "What does this page say about potassium and sodium?",
    choices: [
      {
        text: "Potassium rises from retention, a shift with acidosis, or release from red-cell breakdown; in end-stage disease ECG changes may not appear until potassium is 6.5 mEq or higher, and potassium can fall with potassium-wasting diuretics or during dialysis. Sodium may be low if the kidney wastes sodium, or it may be normal.",
        note: "Correct. A falling potassium on dialysis is printed as possible. It is not an automatic further rise.",
      },
      {
        text: "ECG changes are said to start as soon as potassium is only slightly raised, well below 6.5 mEq.",
        note: "No. In end-stage disease ECG changes may not occur until potassium is 6.5 mEq or higher.",
      },
      {
        text: "Dialysis and potassium-wasting diuretics raise potassium further.",
        note: "No. Potassium may be decreased in those two situations.",
      },
      {
        text: "Sodium is always high because the kidney cannot waste sodium.",
        note: "No. Sodium may be low if the kidney wastes sodium, or it may be normal.",
      },
    ],
    answer: 0,
    page: "77",
  },
  {
    id: "med-094",
    topicId: "MED",
    topic: "Two end-stage options",
    scene: "The family asks what treatment remains once the kidneys are at end stage.",
    ask: "How many options does the page allow, and which is used most?",
    choices: [
      {
        text: "Three equal options: a salt-free diet alone, a clot-dissolving drug, and oxygen.",
        note: "No. The page says there are only two treatment options, and the first is dialysis.",
      },
      {
        text: "Only two. Dialysis is the first and most widely used, because the chief problem is buildup of waste, and dialysis filters that waste outside the body.",
        note: "Correct. A kidney transplant is the other option and is discussed as generally better but less practical. It is not the most widely used one.",
      },
      {
        text: "Transplant is the most widely used first option.",
        note: "No. Dialysis is the most widely employed option. Transplant is considered better but less practical.",
      },
      {
        text: "Waste buildup is not a concern at end stage.",
        note: "No. The chief concern is the buildup of waste.",
      },
    ],
    answer: 1,
    page: "78",
  },
  {
    id: "med-095",
    topicId: "MED",
    topic: "Haemodialysis",
    scene: "The patient is booked for the common machine treatment.",
    ask: "How is haemodialysis described?",
    choices: [
      {
        text: "Fluid stays in the abdomen overnight and the blood never enters a machine.",
        note: "No. That pattern is closer to peritoneal dialysis. Haemodialysis pulls blood into a machine and returns it.",
      },
      {
        text: "The machine adds waste before the blood returns.",
        note: "No. The machine filters waste out.",
      },
      {
        text: "Blood is pulled into a machine that filters out the waste, and the cleaned blood is pumped back; it is practical but intensive.",
        note: "Correct. It is the most common form of dialysis on this page. It is not fluid left to dwell in the abdomen.",
      },
      {
        text: "It is described as a cure for the underlying kidney disease.",
        note: "No. This page calls it a practical but intensive filter. The cure claim is denied on the peritoneal-dialysis page for that method too.",
      },
    ],
    answer: 2,
    page: "78",
  },
  {
    id: "med-096",
    topicId: "MED",
    topic: "Kidney transplant limits",
    scene: "A relative offers a kidney and asks why transplant is not automatic.",
    ask: "Why is transplant called better yet less practical?",
    choices: [
      {
        text: "The supply of kidneys is higher than demand, so compatibility does not matter.",
        note: "No. Demand is much higher than supply, and immunological compatibility is required.",
      },
      {
        text: "Transplant is considered a worse solution than dialysis.",
        note: "No. It is generally considered a better solution, but it lacks practicality.",
      },
      {
        text: "Any patient can receive a kidney whatever the age or other disease.",
        note: "No. Age and underlying conditions can make a patient ineligible.",
      },
      {
        text: "It is generally a better solution than intensive dialysis, but demand is much higher than supply, the donor and recipient must be immunologically compatible, and age or other conditions can make a patient ineligible.",
        note: "Correct. The donation process also has general eligibility requirements.",
      },
    ],
    answer: 3,
    page: "79",
  },
  {
    id: "med-097",
    topicId: "MED",
    topic: "Peritoneal dialysis purpose",
    scene: "Home peritoneal dialysis is planned, and the patient hopes it will heal the kidney disease.",
    ask: "What can peritoneal dialysis do, and what can it not do?",
    choices: [
      {
        text: "It does not cure or treat the underlying kidney disease; it is done at home to replace as many functions of the failing kidneys as possible, mainly by removing extra fluid and waste from the blood.",
        note: "Correct. It is for people whose kidneys are no longer working effectively.",
      },
      {
        text: "It cures the disease, so exchanges can stop after a short course.",
        note: "No. It does not cure or treat the underlying disease.",
      },
      {
        text: "It is done only in an operating theatre and does not remove fluid.",
        note: "No. It is performed at home and primarily removes excess fluid and waste.",
      },
      {
        text: "It replaces heart pumping rather than kidney function.",
        note: "No. It is intended to replace as many functions of the failing kidneys as possible.",
      },
    ],
    answer: 0,
    page: "80",
  },
  {
    id: "med-098",
    topicId: "MED",
    topic: "CAPD pattern",
    scene: "The patient asks whether a machine is required for every daytime exchange.",
    ask: "How is continuous ambulatory peritoneal dialysis set out?",
    choices: [
      {
        text: "Usually one exchange a week, with the person kept in bed on a machine all day.",
        note: "No. It is usually three daytime exchanges, no machine is needed, and the person can walk about.",
      },
      {
        text: "Usually three exchanges during the day plus an overnight dwell; a machine is not needed, the person can walk about while fluid is in the abdomen, dialysate is infused at bedtime, and it is drained on waking.",
        note: "Correct. A cycler is only an occasional night-time addition, not the usual daytime method.",
      },
      {
        text: "Dialysate is drained at bedtime and infused only on waking, with no overnight dwell.",
        note: "No. It is infused at bedtime and drained on waking, which is the overnight dwell.",
      },
      {
        text: "Daytime dwells are forbidden and only night exchanges are used.",
        note: "No. The usual pattern is multiple daytime exchanges, usually three, plus the overnight dwell.",
      },
    ],
    answer: 1,
    page: "81",
  },
  {
    id: "med-099",
    topicId: "MED",
    topic: "Cycler at night",
    scene: "The patient on continuous ambulatory dialysis is told a machine may sometimes be used at night.",
    ask: "When does the page say a cycler is used?",
    choices: [
      {
        text: "A cycler is required for every daytime exchange while the person walks.",
        note: "No. Daytime CAPD does not need a machine. The cycler is an occasional exchange during sleep.",
      },
      {
        text: "The cycler means the morning drain is never done.",
        note: "No. The usual CAPD drain is on waking. The cycler is an extra occasional night exchange.",
      },
      {
        text: "Occasionally a cycler does one or more exchanges while the person is sleeping.",
        note: "Correct. That occasional cycler does not turn the usual daytime method into a machine-dependent walk.",
      },
      {
        text: "Cycler use is described as the cure for polycystic kidney disease.",
        note: "No. Polycystic disease is a cause label. The cycler does not cure it, and peritoneal dialysis does not cure the underlying disease.",
      },
    ],
    answer: 2,
    page: "81",
  },
  {
    id: "med-100",
    topicId: "MED",
    topic: "Peritoneal dialysis examples",
    scene: "The folder shows three peritoneal-dialysis examples side by side.",
    ask: "Which names match the three examples?",
    choices: [
      {
        text: "Example 3 is the Ultra bag and example 1 is hospital haemodialysis.",
        note: "No. The Ultra bag is example 1. Example 3 is automated peritoneal dialysis, not the haemodialysis machine.",
      },
      {
        text: "Stay safe is the name of automated peritoneal dialysis, and APD is absent.",
        note: "No. Stay safe is example 2. Automated peritoneal dialysis is example 3.",
      },
      {
        text: "All three examples are glyceryl trinitrate tablets.",
        note: "No. Glyceryl trinitrate is the angina nitrate. These three examples are peritoneal dialysis systems.",
      },
      {
        text: "Example 1 is the Ultra bag, example 2 is stay safe, and example 3 is automated peritoneal dialysis.",
        note: "Correct. Automated peritoneal dialysis is the APD example. It is not a fourth end-stage option beside dialysis and transplant; it is one peritoneal method.",
      },
    ],
    answer: 3,
    page: "82-86",
  },
  {
    id: "cp-001",
    topicId: "CP",
    topic: "Attitude",
    scene: "It is your first morning and the team nurse has not handed you a task.",
    ask: "What attitude does this package expect before anyone pushes you?",
    choices: [
      {
        text: "Start the work on your own initiative.",
        note: "Correct. The opening line is to do the work without waiting to be pushed, then report at a suitable time.",
      },
      {
        text: "Wait at the station until someone assigns every step.",
        note: "Waiting to be pushed is the opposite of the printed attitude.",
      },
      {
        text: "Take the drug keys and start the medicine round at once.",
        note: "Initiative does not mean starting medicines before you know the checks and the routine.",
      },
      {
        text: "Leave the ward to look for your teacher before any bedside work.",
        note: "You still do the work, and you ask ward staff patiently rather than walking off.",
      },
    ],
    answer: 0,
    page: "1",
  },
  {
    id: "cp-002",
    topicId: "CP",
    topic: "Attitude",
    scene: "A nurse asks the dose of a tablet you have not checked.",
    ask: "What should you say at once?",
    choices: [
      {
        text: "Give the dose you remember from a lecture.",
        note: "Guessing is not allowed. Say you do not know at once.",
      },
      {
        text: "Say that you do not know.",
        note: "Correct. If you do not know, say you do not know immediately. Do not guess.",
      },
      {
        text: "Say you will check after the whole round is finished.",
        note: "The instruction is to speak at once, not after the round.",
      },
      {
        text: "Copy the number written on the last student's scrap paper.",
        note: "An unchecked scrap note is not a reason to pretend you know.",
      },
    ],
    answer: 1,
    page: "1",
  },
  {
    id: "cp-003",
    topicId: "CP",
    topic: "Attitude",
    scene: "You wrote the observation on the wrong bed and the nurse points it out.",
    ask: "How should you respond?",
    choices: [
      {
        text: "Explain that the chart layout caused it, so it is not your fault.",
        note: "The package wants a plain apology, not a defence.",
      },
      {
        text: "Stay quiet and change the chart when nobody is looking.",
        note: "Hiding the mistake is not the required attitude.",
      },
      {
        text: "Say sorry plainly.",
        note: "Correct. If you are wrong, the attitude matters most: say sorry clearly, without arguing.",
      },
      {
        text: "Answer back that another nurse told you to write it there.",
        note: "Answering back is specifically discouraged.",
      },
    ],
    answer: 2,
    page: "1",
  },
  {
    id: "cp-004",
    topicId: "CP",
    topic: "Attitude",
    scene: "The nurse asks you to finish a long dressing and handover is in ten minutes.",
    ask: "What should you do if you cannot finish in time?",
    choices: [
      {
        text: "Stay silent and leave the dressing half done.",
        note: "Silence is the failure the package warns against.",
      },
      {
        text: "Skip handover so you can stay without telling anyone.",
        note: "You speak up. You do not disappear from the report.",
      },
      {
        text: "Tell the nurse the request is unreasonable.",
        note: "Speaking up is not the same as answering back.",
      },
      {
        text: "Speak up that you cannot finish it.",
        note: "Correct. If someone asks you to do something and you cannot get it done, you must say so.",
      },
    ],
    answer: 3,
    page: "1",
  },
  {
    id: "cp-005",
    topicId: "CP",
    topic: "Attitude",
    scene: "Morning observations are due and you have just finished the round.",
    ask: "When should routine work be done, and what follows it?",
    choices: [
      {
        text: "Do every routine only at the end of the shift, in one batch.",
        note: "The package says a suitable time, not a dump at the end.",
      },
      {
        text: "Do the routine at a suitable time and give an appropriate report.",
        note: "Correct. The attitude line pairs on-time routine work with a proper report.",
      },
      {
        text: "Finish the routine and wait to be asked before saying anything.",
        note: "An appropriate report is part of the instruction, not an optional extra.",
      },
      {
        text: "Report only abnormal numbers and skip the routine time.",
        note: "Both the timing and the report are required.",
      },
    ],
    answer: 1,
    page: "1",
  },
  {
    id: "cp-006",
    topicId: "CP",
    topic: "Attitude",
    scene: "You do not know where the sterile gloves are kept and the nurse looks busy.",
    ask: "How should you ask ward staff?",
    choices: [
      {
        text: "Interrupt and correct the nurse if you dislike the tone.",
        note: "Answering back is forbidden even if you feel pushed.",
      },
      {
        text: "Avoid asking so you do not look weak.",
        note: "Not asking is how you stay lost. Ask patiently.",
      },
      {
        text: "Ask patiently, and do not answer back.",
        note: "Correct. The package says to ask ward staff patiently and not to talk back casually.",
      },
      {
        text: "Ask once, and if the answer is short, argue for a fuller explanation.",
        note: "Patience is the instruction. Arguing is answering back.",
      },
    ],
    answer: 2,
    page: "1",
  },
  {
    id: "cp-007",
    topicId: "CP",
    topic: "Arrival",
    scene: "You walk onto a new practicum ward and the clerk asks if you have settled contacts.",
    ask: "Which contact details must you settle?",
    choices: [
      {
        text: "Only your clinical teacher's mobile. The ward number is optional.",
        note: "The ward telephone number is item 1, together with your contact.",
      },
      {
        text: "The main switchboard only, and do not give your number.",
        note: "You both learn the ward number and leave your own contact.",
      },
      {
        text: "The pharmacy extension, written on the patient whiteboard.",
        note: "The required exchange is the practicum ward phone and your contact.",
      },
      {
        text: "The ward telephone number, and you leave your own contact number.",
        note: "Correct. Day-one questions start with the ward phone and leaving your number.",
      },
    ],
    answer: 3,
    page: "1",
  },
  {
    id: "cp-008",
    topicId: "CP",
    topic: "Arrival",
    scene: "It is CP1 day duty and nobody has told you the arrival clock time.",
    ask: "What arrival example is printed, and whom do you confirm it with?",
    choices: [
      {
        text: "07:45 at the front door of the CP ward, confirmed with your clinical teacher.",
        note: "Correct. For CP1, confirm the arrival time with the clinical teacher. The example is 07:45 at the front door.",
      },
      {
        text: "08:30 at the nurses station, confirmed with the house officer.",
        note: "The printed CP1 example is 07:45 at the front door, with the clinical teacher.",
      },
      {
        text: "07:00 in the changing room, confirmed with a health-care assistant.",
        note: "That time and person are not the printed example.",
      },
      {
        text: "09:00 at the hospital gate, confirmed only with the ward clerk.",
        note: "The example is earlier, at the ward front door, and the teacher confirms CP1 arrival.",
      },
    ],
    answer: 0,
    page: "1",
  },
  {
    id: "cp-009",
    topicId: "CP",
    topic: "Arrival",
    scene: "The roster shows A, P and N but not the clock-in rule.",
    ask: "Whom do you ask about the hours and the arrival rule for each shift?",
    choices: [
      {
        text: "Only classmates from the last placement.",
        note: "The package names the ward manager or in-charge, not last term's students.",
      },
      {
        text: "The patient you are allocated.",
        note: "Shift hours are confirmed with the manager or in-charge.",
      },
      {
        text: "The ward manager or the in-charge.",
        note: "Correct. Confirm A, P and N working hours, especially arrival criteria, with the ward manager or the in-charge.",
      },
      {
        text: "Nobody, because every hospital uses 07:00, 14:00 and 21:00.",
        note: "You must confirm the local arrival rule. It is not assumed.",
      },
    ],
    answer: 2,
    page: "1",
  },
  {
    id: "cp-010",
    topicId: "CP",
    topic: "Arrival",
    scene: "The board says blood pressure and pulse are due at 11:00.",
    ask: "What earliest BP and pulse time is the printed example for that round?",
    choices: [
      {
        text: "11:00, taken only when the round itself starts.",
        note: "10:00 is the printed earliest example, not 11:00.",
      },
      {
        text: "10:30, the example given for H'stix.",
        note: "10:30 is the H'stix example. BP and pulse use 10:00.",
      },
      {
        text: "09:00, so the charts are closed before breakfast.",
        note: "09:00 is not the printed example.",
      },
      {
        text: "10:00.",
        note: "Correct. The example is to start BP and pulse at 10:00 for an 11:00 round.",
      },
    ],
    answer: 3,
    page: "1",
  },
  {
    id: "cp-011",
    topicId: "CP",
    topic: "Arrival",
    scene: "H'stix is also listed at 11:00.",
    ask: "What earliest H'stix time is the printed example?",
    choices: [
      {
        text: "10:30 for the 11:00 H'stix.",
        note: "Correct. The example separates H'stix at 10:30 from BP and pulse at 10:00.",
      },
      {
        text: "10:00, the same example as BP and pulse.",
        note: "Do not swap the two examples. H'stix is 10:30.",
      },
      {
        text: "11:00 only, never earlier.",
        note: "The package gives an earliest time before the posted round.",
      },
      {
        text: "08:00 fasting for every patient regardless of the order.",
        note: "The printed example is 10:30 for 11:00 H'stix, not a blanket 08:00.",
      },
    ],
    answer: 0,
    page: "1",
  },
  {
    id: "cp-012",
    topicId: "CP",
    topic: "Arrival",
    scene: "You need linen, then you open an observation chart you have not seen before.",
    ask: "What else must you locate and learn on day one?",
    choices: [
      {
        text: "Only the pantry. Charts are the same in every hospital.",
        note: "The package says each hospital has its own charts and forms.",
      },
      {
        text: "The treatment room, equipment room and linen room, and how this hospital's own charts are filled, because each hospital charts differently.",
        note: "Correct. Arrival questions include those three rooms and the local charting method.",
      },
      {
        text: "The mortuary route. Charting is identical across hospitals.",
        note: "You learn treatment, equipment and linen rooms, and the local forms.",
      },
      {
        text: "Only the computer password. Linen location does not matter.",
        note: "Room locations are an explicit day-one question.",
      },
    ],
    answer: 1,
    page: "1",
  },
  {
    id: "cp-013",
    topicId: "CP",
    topic: "Essential skills",
    scene: "You are revising the acute-hospital list the night before the ward.",
    ask: "Which oxygen task is named on that essential list?",
    choices: [
      {
        text: "How to set the pressures on a BIPAP machine.",
        note: "BIPAP appears later only as a reason for continuous tube feeding, not as this essential oxygen skill.",
      },
      {
        text: "How to intubate the trachea.",
        note: "Intubation is not on the beginner essential list.",
      },
      {
        text: "How to perform arterial blood gas sampling.",
        note: "ABG is mentioned later as a possible doctor order, not as this essential skill.",
      },
      {
        text: "How to give a mask and a nasal cannula, and how to open and adjust a portable oxygen cylinder.",
        note: "Correct. Item 8 names mask, nasal cannula, and opening and adjusting the portable cylinder. BIPAP pressures are not on this list.",
      },
    ],
    answer: 3,
    page: "1",
  },
  {
    id: "cp-014",
    topicId: "CP",
    topic: "Busy ward",
    scene: "The ward is so busy that nobody is free to coach you.",
    ask: "What is the first self-rescue step?",
    choices: [
      {
        text: "Learn the routine times and do the bed treatment, vital signs and H'stix on time, with an on-time report.",
        note: "Correct. Staff can look after you only when they are free. Being on time with basics comes first.",
      },
      {
        text: "Follow the doctor on the round before any observations are done.",
        note: "The first step is the routine, not leaving the observations.",
      },
      {
        text: "Wait beside the station until a nurse offers to teach a procedure.",
        note: "Waiting does not match the self-rescue list.",
      },
      {
        text: "Start unfamiliar dressings so you look occupied.",
        note: "Basics on time come before extra procedures.",
      },
    ],
    answer: 0,
    page: "2",
  },
  {
    id: "cp-015",
    topicId: "CP",
    topic: "Busy ward",
    scene: "You help with lunch while the nurses are still in the drug round.",
    ask: "What must you do when you help with meals, water or medicines?",
    choices: [
      {
        text: "Feed first and check the name on the cup after the meal.",
        note: "The check is before feeding, and you ask if you are unsure.",
      },
      {
        text: "Chart intake and output, check drinking and urine, and make sure the medicine cup really belongs to that person before you give it.",
        note: "Correct. You ask clearly before feeding medicines. A cup is never assumed.",
      },
      {
        text: "Chart intake only if the person finishes the whole tray.",
        note: "Intake, drinking and urine are all part of the reminder.",
      },
      {
        text: "Skip the chart because students do not record intake.",
        note: "The package tells you to enter intake and output.",
      },
    ],
    answer: 1,
    page: "2",
  },
  {
    id: "cp-016",
    topicId: "CP",
    topic: "Busy ward",
    scene: "Observations are finished and the nurses are not using the board.",
    ask: "What does the package tell you to do with that quiet gap?",
    choices: [
      {
        text: "Leave the ward until the next vital-sign round.",
        note: "The gap is for learning, not for disappearing.",
      },
      {
        text: "Rearrange every patient's medicines into new cups.",
        note: "You copy and learn the drugs. You do not repack doses on your own.",
      },
      {
        text: "Look at the board or copy the common ward drugs, their uses, and the special points to tell patients.",
        note: "Correct. Quiet time is for learning the ward's common drugs and what patients must be told.",
      },
      {
        text: "Phone the doctor about a stable result so you can practise the call.",
        note: "Listening to how nurses call is later. You do not make a social call to the doctor.",
      },
    ],
    answer: 2,
    page: "2",
  },
  {
    id: "cp-017",
    topicId: "CP",
    topic: "Busy ward",
    scene: "You are standing near the desk while a nurse admits a patient and calls the doctor.",
    ask: "What are you meant to pick up from that?",
    choices: [
      {
        text: "How the nurse calls the doctor, how a specimen is explained, and the set lines used when admitting.",
        note: "Correct. The list tells you to listen for the doctor call, specimen teaching, precautions, and the admission script.",
      },
      {
        text: "Only the doctor's personal mobile, so you can call next time.",
        note: "You learn the method, not a private number to reuse alone.",
      },
      {
        text: "Nothing, because listening is unprofessional.",
        note: "The package explicitly tells you to listen and learn those scripts.",
      },
      {
        text: "The diagnosis only, not the specimen instructions.",
        note: "Specimen collection and its precautions are part of the point.",
      },
    ],
    answer: 0,
    page: "2",
  },
  {
    id: "cp-018",
    topicId: "CP",
    topic: "Busy ward",
    scene: "You still have a short gap after the trolleys look untidy.",
    ask: "Which quiet-time job matches the list?",
    choices: [
      {
        text: "Restock trolleys only if a nurse writes you a list first.",
        note: "The self-rescue list tells you to fill gaps, once you know where items are stored.",
      },
      {
        text: "Restock the tube-feeding trolley and the meal trolley, refill H'stix alcohol pads, lancets and test strips, and know where stores are. For an operation or test, know the preparation, such as fasting or steroid cover.",
        note: "Correct. You also read patient leaflets so you can revise what to remind people about, and you learn the ward's cases and common operations.",
      },
      {
        text: "Steroid cover is a doctor-only idea and is never a student reminder.",
        note: "Steroid cover is the printed example of preparation to explain.",
      },
      {
        text: "Leaflets are for patients, so reading them wastes revision time.",
        note: "The package says leaflets help you revise and remind patients.",
      },
    ],
    answer: 1,
    page: "2",
  },
  {
    id: "cp-019",
    topicId: "CP",
    topic: "Temperature",
    scene: "You are about to chart a tympanic temperature.",
    ask: "What normal range does this package print?",
    choices: [
      {
        text: "36.5 to 37.5 degrees Celsius.",
        note: "The printed normal range is 36.0 to 37.6.",
      },
      {
        text: "35.0 to 38.0 degrees Celsius.",
        note: "35.0 would already sit below the printed low cut.",
      },
      {
        text: "36.0 to 37.6 degrees Celsius.",
        note: "Correct. Low temperature in the table starts at 35.9 or below. Do not swap in a different textbook range.",
      },
      {
        text: "37.0 to 38.5 degrees Celsius.",
        note: "38.5 is in the fever bands, not the normal range.",
      },
    ],
    answer: 2,
    page: "3",
  },
  {
    id: "cp-020",
    topicId: "CP",
    topic: "Temperature",
    scene: "The first ear reads 35.6 degrees Celsius.",
    ask: "After you recheck both ears, which result do you chart, and what may be used if blankets still fail?",
    choices: [
      {
        text: "Chart the lower ear so the hypothermia is not hidden.",
        note: "For a low reading the package says chart the higher result that is within or nearest normal.",
      },
      {
        text: "Apply a bare ice pad so the skin cools further.",
        note: "Ice is a fever measure, and even then it needs a cover. Low temperature gets blankets, not ice.",
      },
      {
        text: "Start oxygen at 100 percent because every low temperature is hypoxia.",
        note: "Oxygen is not the printed low-temperature action.",
      },
      {
        text: "Chart the higher result that is within, or nearest, the normal range. If blankets and bed rest still fail, a Bair Hugger may be used.",
        note: "Correct. A Bair Hugger is a forced warm-air system for hypothermia in surgical patients. Dizziness is reported at once, with bed rails plus BP and pulse, and temperature is rechecked in 15 to 30 minutes.",
      },
    ],
    answer: 3,
    page: "3-4",
  },
  {
    id: "cp-021",
    topicId: "CP",
    topic: "Temperature",
    scene: "After rechecking both ears, one reading is normal and the other stays in the low-grade fever band.",
    ask: "What do you chart, and how is a low-grade fever reported if the person is not dizzy?",
    choices: [
      {
        text: "Always chart the higher, hotter ear, using the low-temperature rule.",
        note: "The hotter-ear rule is for the low-temperature row, not this fever row.",
      },
      {
        text: "Chart the result that is within the normal range, and report after the temperature routine rather than as an immediate dizziness call.",
        note: "Correct. Low grade is printed as 37.6 to 38.5. The team nurse raises checks to every 4 hours and tells the doctor on the round. An ice pad, if used, needs a cover such as the original cover, a paper towel or a pillowcase.",
      },
      {
        text: "Phone the doctor yourself before telling the team nurse.",
        note: "You report to the team nurse. The doctor is informed by the team nurse.",
      },
      {
        text: "Put a bare ice pack on the skin.",
        note: "The ice pad is optional and must have a cover.",
      },
    ],
    answer: 1,
    page: "3",
  },
  {
    id: "cp-022",
    topicId: "CP",
    topic: "Temperature",
    scene: "A temperature stays at 39.0 degrees Celsius and the recheck blood pressure is low.",
    ask: "What does the high-fever pathway add?",
    choices: [
      {
        text: "Treat 39 degrees as low grade and wait for the ward round with no extra observations.",
        note: "A reading of 39 sits on the high-fever pathway, and a low blood pressure is phoned through.",
      },
      {
        text: "Include a stool culture as a required part of the printed septic workup.",
        note: "Stool culture is not in the printed list.",
      },
      {
        text: "Measure blood pressure, pulse and oxygen saturation, tell the team nurse at once because the pressure is low, and expect the team nurse to phone the doctor. A septic workup may include blood culture, complete blood picture, liver and renal function, mid-stream or catheter urine culture, sputum culture and a chest X-ray.",
        note: "Correct. Panadol 500 mg every 4 hours as needed, oral or rectal, is an example only. The doctor may omit it to watch the fever pattern. Example antibiotics include Zinacef 750 mg every 8 hours and Augmentin 1.2 g every 8 hours.",
      },
      {
        text: "Give Panadol even when the doctor wants the fever pattern left untreated.",
        note: "The package says Panadol may be withheld for that reason.",
      },
    ],
    answer: 2,
    page: "3-4",
  },
  {
    id: "cp-023",
    topicId: "CP",
    topic: "Blood pressure",
    scene: "A systolic reading is under 90 mmHg.",
    ask: "Which recheck sequence matches this package?",
    choices: [
      {
        text: "Use a systolic cut of under 100 mmHg, the medicine-round figure, as this observation table.",
        note: "Under 100 is the later drug-withhold example. This table uses systolic under 90.",
      },
      {
        text: "Skip the second limb and have the person keep walking.",
        note: "Both limbs are rechecked, and a persistent low reading is taken on the bed.",
      },
      {
        text: "Sit the person with the head far above the feet for the third attempt.",
        note: "The printed third position is feet higher than the head by 15 to 30 degrees.",
      },
      {
        text: "Check there is no limb elevation and no clothing in the way, use the correct cuff, and recheck both limbs. If it is still low, measure on the bed. If it is still low, try a position with the feet 15 to 30 degrees higher than the head.",
        note: "Correct. Report after the blood-pressure routine unless the person is dizzy, in which case you report at once. Recheck BP and pulse in 15 to 30 minutes. The doctor may order a 12-lead ECG, bloods such as complete blood picture, liver and renal function, CK and troponin I, plus intravenous fluid or an inotrope, and bed rest.",
      },
    ],
    answer: 3,
    page: "5",
  },
  {
    id: "cp-024",
    topicId: "CP",
    topic: "Blood pressure",
    scene: "A systolic reading stays above 160 mmHg and the person has a headache.",
    ask: "What do you do, and what pattern must you also watch?",
    choices: [
      {
        text: "Stop the person talking, recheck both limbs with a correct cuff and no clothing in the way, report the headache at once, and watch for a sudden rise or a sudden fall.",
        note: "Correct. If there is no headache, report after the routine. Recheck in 15 to 30 minutes, stop exercise, and use bed rails. Monitoring may increase to every 4 hours or every hour. Antihypertensive treatment comes after investigation such as an ECG or blood tests.",
      },
      {
        text: "Use 140 mmHg systolic as the printed high cut.",
        note: "The table's high cut is systolic above 160, not 140.",
      },
      {
        text: "Report a headache only after the whole ward routine is finished.",
        note: "Headache is an immediate report.",
      },
      {
        text: "Ignore a sudden drop if the first reading was high.",
        note: "The footnote says to observe any sudden increase and any sudden decrease.",
      },
    ],
    answer: 0,
    page: "5",
  },
  {
    id: "cp-025",
    topicId: "CP",
    topic: "Oxygen saturation",
    scene: "The pulse oximeter reads under 90 percent.",
    ask: "What does this package tell you to do?",
    choices: [
      {
        text: "Wait 20 to 30 minutes before any oxygen, and do not start it until it is prescribed.",
        note: "The printed interval is 20 to 30 seconds, and you do not wait for a prescription.",
      },
      {
        text: "Chart the lower of the two limbs.",
        note: "Chart the highest of the bilateral readings.",
      },
      {
        text: "Tell the team nurse at once. Recheck both limbs and chart the higher value, after making sure cold or poor circulation is not the cause. If it is still not normal within 20 to 30 seconds, start a nasal cannula at 2, then 4, then 6 litres per minute, and if that fails use a 50 percent or 100 percent mask. Do not wait for a doctor to prescribe the oxygen.",
        note: "Correct. A sputum sound is treated as possible sputum retention and the airway is cleared by nasopharyngeal suction. The team nurse tells the doctor after the person is stable, or once 100 percent oxygen is in use.",
      },
      {
        text: "Start at 10 litres by nasal cannula as the first step.",
        note: "The cannula steps printed here are 2, 4 and 6 litres, then a mask.",
      },
    ],
    answer: 2,
    page: "6",
  },
  {
    id: "cp-026",
    topicId: "CP",
    topic: "Oxygen saturation",
    scene: "Your patient has COPD and a classmate turns the oxygen up to chase a saturation of 99 percent.",
    ask: "What saturation does this package aim for in COPD, and why is extra oxygen dangerous?",
    choices: [
      {
        text: "Aim for 96 to 100 percent, the same as a person without lung disease.",
        note: "The COPD aim printed here is 88 to 92 percent.",
      },
      {
        text: "High oxygen is always safe because both brain sensors stay normal in COPD.",
        note: "The package says the carbon-dioxide sensor is deactivated in this chronic state.",
      },
      {
        text: "Stop oxygen monitoring once the mask is on.",
        note: "The package calls for close monitoring.",
      },
      {
        text: "Aim for 88 to 92 percent. Chronic high carbon dioxide turns off the brain's carbon-dioxide drive, so only a low oxygen level keeps the breathing rate up. Too much oxygen can slow breathing and worsen carbon-dioxide retention.",
        note: "Correct. The package puts it this way: give too much oxygen and the patient will not know how to breathe. Tell the doctor and an arterial blood gas may be ordered.",
      },
    ],
    answer: 3,
    page: "6",
  },
  {
    id: "cp-027",
    topicId: "CP",
    topic: "Blood glucose",
    scene: "A conscious person's H'stix is under 4 mmol/L and there is no dizziness.",
    ask: "What feeding and reporting action matches the table?",
    choices: [
      {
        text: "Give orange juice or milk, withhold anti-hyperglycaemic drugs as the doctor orders, report to the team nurse after the routine, and recheck 15 to 30 minutes after the juice, milk, meal or treatment.",
        note: "Correct. If the person is unconscious, an intravenous site is set up and D50 is given as prescribed, and the team nurse phones the doctor at once. Dizziness or unconsciousness is an immediate report even before the rest of the routine.",
      },
      {
        text: "Give intravenous D50 to every conscious person under 4 mmol/L.",
        note: "D50 in this table is for the unconscious person, as prescribed.",
      },
      {
        text: "Give glucagon, which this table names as the first treatment.",
        note: "Glucagon is not in the table. Conscious treatment is orange juice or milk.",
      },
      {
        text: "Phone the doctor at once for every conscious reading under 4, before telling the team nurse.",
        note: "A conscious person without dizziness is reported after the routine, and the doctor is told on the round.",
      },
    ],
    answer: 0,
    page: "7",
  },
  {
    id: "cp-028",
    topicId: "CP",
    topic: "Blood glucose",
    scene: "H'stix is over 16 mmol/L.",
    ask: "What does the package tell the team to do?",
    choices: [
      {
        text: "Treat over 16 the same as under 4 and give orange juice.",
        note: "Juice is the conscious low-glucose action, not the high-glucose action.",
      },
      {
        text: "Report after the routine unless the person is dizzy or unconscious, withhold the night snack, test urine for ketones as the hospital instructs, and expect the team nurse to phone the doctor at once. Insulin may be ordered and glucose checked every 4 hours. If diabetic ketoacidosis is a risk, a DKI drip may be ordered.",
        note: "Correct. Also ask what the person took. The easy memory range printed underneath is 4 to 8 mmol/L, which is not the same as the action cuts of under 4 and over 16.",
      },
      {
        text: "Keep the night snack so calories are not lost.",
        note: "The night snack is withheld.",
      },
      {
        text: "Wait for the ward round before the doctor is phoned.",
        note: "For a reading over 16 the team nurse phones the doctor immediately.",
      },
    ],
    answer: 1,
    page: "7",
  },
  {
    id: "cp-029",
    topicId: "CP",
    topic: "Drug effects",
    scene: "A nurse asks what you would watch for after digoxin.",
    ask: "Which effects does this package list for digoxin?",
    choices: [
      {
        text: "Orange urine and a rash.",
        note: "Orange urine is listed for phenazopyridine, not digoxin.",
      },
      {
        text: "Mouth fungus and a hoarse voice.",
        note: "Those are listed for inhaled beclomethasone and budesonide.",
      },
      {
        text: "A fast heart rate only, with no rhythm change.",
        note: "The printed digoxin effects are a slow rate and arrhythmia.",
      },
      {
        text: "A slow heart rate and an irregular rhythm.",
        note: "Correct. Digoxin sits with the heart-failure and arrhythmia drugs. A slow rate is also why the later safety page sends you to the apical heart rate.",
      },
    ],
    answer: 3,
    page: "8",
  },
  {
    id: "cp-030",
    topicId: "CP",
    topic: "Drug effects",
    scene: "You are warning an older adult about a large dose of senna.",
    ask: "Which serious effect of a large laxative dose is printed here?",
    choices: [
      {
        text: "Intestinal obstruction, along with abdominal pain and diarrhoea from bisacodyl, lactulose or senna.",
        note: "Correct. Aspirin and clopidogrel, in the same table, are listed for stomach pain and bleeding, which is a different row.",
      },
      {
        text: "Orange urine.",
        note: "Orange urine is the urinary-analgesic row.",
      },
      {
        text: "A hoarse voice from the laxative itself.",
        note: "Hoarseness is the inhaled-steroid row.",
      },
      {
        text: "A slow heart rate as the main laxative effect.",
        note: "A slow rate is the digoxin row.",
      },
    ],
    answer: 0,
    page: "8",
  },
  {
    id: "cp-031",
    topicId: "CP",
    topic: "Drug effects",
    scene: "After budesonide inhalations the person says the voice is hoarse.",
    ask: "Which effect in this table fits, and which drug turns urine orange?",
    choices: [
      {
        text: "Hoarseness is the main printed effect of senna, and orange urine is from digoxin.",
        note: "Those effects are swapped away from the printed rows.",
      },
      {
        text: "Budesonide can cause a hoarse voice and fungus in the mouth or throat. Phenazopyridine can turn the urine orange.",
        note: "Correct. Beclomethasone is grouped with budesonide for the same local effects. Dry mouth and cough are also listed.",
      },
      {
        text: "Fungus is listed for frusemide, and orange urine for lactulose.",
        note: "Frusemide is frequency and dizziness. Lactulose is a laxative.",
      },
      {
        text: "Budesonide has no local mouth effect in this table.",
        note: "Mouth or throat fungus and hoarseness are printed for it.",
      },
    ],
    answer: 1,
    page: "8",
  },
  {
    id: "cp-032",
    topicId: "CP",
    topic: "Essential drugs",
    scene: "You are using the 28-drug sheet before a medicine round.",
    ask: "Which drugs does that sheet put under observe laboratory result?",
    choices: [
      {
        text: "Metformin, gliclazide and glibenclamide.",
        note: "Those are in the blood-glucose column.",
      },
      {
        text: "Digoxin, amiodarone and metoprolol.",
        note: "Those are in the heart-rate column.",
      },
      {
        text: "Aspirin, clopidogrel (Plavix), dipyridamole (Persantin) and warfarin.",
        note: "Correct. They are the laboratory column. They are not the glucose column.",
      },
      {
        text: "Frusemide and spironolactone only, with no antiplatelet drug.",
        note: "The diuretics are grouped with blood-pressure observation.",
      },
    ],
    answer: 2,
    page: "9",
  },
  {
    id: "cp-033",
    topicId: "CP",
    topic: "Essential drugs",
    scene: "The 28-drug sheet has a heart-rate column and a blood-pressure column.",
    ask: "Where are metoprolol and atenolol placed?",
    choices: [
      {
        text: "Metoprolol is in the heart-rate column with amiodarone and digoxin. Atenolol is in the blood-pressure antihypertensive column, not the heart-rate column.",
        note: "Correct. Diuretics on the same blood-pressure side include frusemide, indapamide, Moduretic and spironolactone.",
      },
      {
        text: "Both atenolol and metoprolol are only in the glucose column.",
        note: "Neither is a glucose drug on this sheet.",
      },
      {
        text: "Atenolol is the heart-rate drug and metoprolol is only a diuretic.",
        note: "The sheet places atenolol with antihypertensives and metoprolol with heart rate.",
      },
      {
        text: "Neither drug is on the 28-drug sheet.",
        note: "Both names are printed, in different columns.",
      },
    ],
    answer: 0,
    page: "9",
  },
  {
    id: "cp-034",
    topicId: "CP",
    topic: "Essential drugs",
    scene: "You need to know which 28-drug names are watched with H'stix.",
    ask: "Which group is the blood-glucose column?",
    choices: [
      {
        text: "Warfarin, aspirin and Plavix.",
        note: "Those are the laboratory column.",
      },
      {
        text: "Acarbose (Glucobay), glibenclamide (Daonil), gliclazide (Diamicron), glipizide (Minidiab) and metformin (Glucophage).",
        note: "Correct. Warfarin is not in that column. It is under laboratory result.",
      },
      {
        text: "Amiodarone, digoxin and metoprolol.",
        note: "Those are the heart-rate column.",
      },
      {
        text: "Only frusemide and Lasix.",
        note: "Frusemide is a diuretic under blood-pressure observation.",
      },
    ],
    answer: 1,
    page: "9",
  },
  {
    id: "cp-035",
    topicId: "CP",
    topic: "Common drugs",
    scene: "You are separating the syrup list from the antibiotic list.",
    ask: "Which pairing matches the printed columns?",
    choices: [
      {
        text: "Flagyl and Ciproxin are syrups, and Dilantin is the antibiotic.",
        note: "That swaps the columns.",
      },
      {
        text: "Levofloxacin is a syrup and Phensedyl is not listed.",
        note: "Levofloxacin is under antibiotics and Phensedyl is under syrups.",
      },
      {
        text: "Dilantin, lactulose, Phensedyl and sodium valproate are among the syrups. Amoxil, Augmentin, Ciproxin, Flagyl and levofloxacin are the antibiotics.",
        note: "Correct. Enervon C and MES with ammonia and ipecacuanha are also on the syrup side.",
      },
      {
        text: "There is no syrup column on the page.",
        note: "The page has antibiotics, syrups and common medications.",
      },
    ],
    answer: 2,
    page: "10",
  },
  {
    id: "cp-036",
    topicId: "CP",
    topic: "Common drugs",
    scene: "A nurse names Softon, Lomotil and Resonium C as ordinary ward stock.",
    ask: "What does this package say those names are, and what effects does it give glycerin trinitrate?",
    choices: [
      {
        text: "Softon is an antibiotic, and glycerin trinitrate has no printed side effects.",
        note: "Softon is with the common medications, and the anti-angina row lists headache, dizziness and flushing.",
      },
      {
        text: "Lomotil is a syrup vitamin and is not on the common list.",
        note: "Lomotil is printed in the common-medication column.",
      },
      {
        text: "Resonium C is an antibiotic on the Amoxil list.",
        note: "Resonium C is a common medication, not one of the five antibiotics.",
      },
      {
        text: "Softon is docusate sodium 100 mg, and Lomotil and Resonium C are on the common-medication list. Glycerin trinitrate, with isosorbide mononitrite and dinitrate, is listed for headache, dizziness and facial flushing.",
        note: "Correct. Resonium is also the potassium-removing example on the later safety page, where the laboratory result must be checked.",
      },
    ],
    answer: 3,
    page: "8-10",
  },
  {
    id: "cp-037",
    topicId: "CP",
    topic: "Medicine safety",
    scene: "You are about to give an antihypertensive and a diuretic, and the chart states no target pressure.",
    ask: "What extra check does this package add beyond the three checks and seven rights?",
    choices: [
      {
        text: "Give the drugs whenever systolic pressure is above 90, with no pulse check.",
        note: "This page wants both pressure and pulse, and withholds under 100 systolic or under 60 pulse when no target is written.",
      },
      {
        text: "Check identity first, then blood pressure and pulse. If systolic pressure is under 100 mmHg or the pulse is under 60 per minute, withhold the doses and tell the team nurse.",
        note: "Correct. If you are the team nurse, recheck the person and inform the doctor. This under-100 cut is the drug rule, not the observation table's under-90 cut.",
      },
      {
        text: "Withhold only if systolic pressure is above 160.",
        note: "Above 160 is the observation high cut, not this withhold rule.",
      },
      {
        text: "Look at the chart before you have confirmed the person's identity.",
        note: "The page says to confirm identity before reading the chart.",
      },
    ],
    answer: 1,
    page: "11",
  },
  {
    id: "cp-038",
    topicId: "CP",
    topic: "Medicine safety",
    scene: "The due drug is digoxin.",
    ask: "What pulse check is printed for a cardiac drug, and what is added for digoxin?",
    choices: [
      {
        text: "Give digoxin if the radial pulse is 52, because only blood pressure matters.",
        note: "Under 60 means withhold and tell the team nurse, and digoxin needs the apex.",
      },
      {
        text: "Count the apex only when the pulse is above 100.",
        note: "The apical check is part of giving digoxin, and the withhold cut is under 60.",
      },
      {
        text: "Withhold a cardiac drug and tell the team nurse if the pulse is under 60 per minute. For digoxin, listen to the apical heart rate with a stethoscope.",
        note: "Correct. A radial count alone does not meet the digoxin line.",
      },
      {
        text: "Skip the pulse because the three checks already include it.",
        note: "This page says the three checks and seven rights still missed this pulse check.",
      },
    ],
    answer: 2,
    page: "11",
  },
  {
    id: "cp-039",
    topicId: "CP",
    topic: "Medicine safety",
    scene: "A hypoglycaemic tablet is due.",
    ask: "What H'stix result means you withhold it?",
    choices: [
      {
        text: "Under 8 mmol/L, the top of the easy memory range.",
        note: "The withhold cut printed here is under 4, not under 8.",
      },
      {
        text: "Over 16 mmol/L only. A low reading is not a reason to withhold.",
        note: "Over 16 is the high-glucose pathway. This drug rule is the low reading.",
      },
      {
        text: "Any reading under 10 mmol/L.",
        note: "10 is not the printed withhold cut.",
      },
      {
        text: "Under 4 mmol/L, and you tell the team nurse.",
        note: "Correct. The same under-4 cut is the low-glucose action line. You do not give the tablet and hope the meal will catch up.",
      },
    ],
    answer: 3,
    page: "11",
  },
  {
    id: "cp-040",
    topicId: "CP",
    topic: "Medicine safety",
    scene: "Slow-K, potassium chloride syrup and sodium chloride are due, and the laboratory slip is back.",
    ask: "When do you withhold them?",
    choices: [
      {
        text: "Withhold if potassium is greater than 5.1 or sodium is greater than 145, and do not over-replace. If the drug is Resonium C or Resonium A, check the laboratory result first.",
        note: "Correct. The page tells you to read the renal-function potassium or sodium before supplementing.",
      },
      {
        text: "Withhold potassium only if it is under 3.5, and ignore a high result.",
        note: "The printed withhold is a high potassium, greater than 5.1, not a low one.",
      },
      {
        text: "Withhold sodium only when it is greater than 160.",
        note: "The printed sodium cut is greater than 145.",
      },
      {
        text: "Give Slow-K without the laboratory result because it is a supplement.",
        note: "The supplement is the reason you must see the result.",
      },
    ],
    answer: 0,
    page: "11",
  },
  {
    id: "cp-041",
    topicId: "CP",
    topic: "Medicine safety",
    scene: "Warfarin is prescribed daily and the dose is still in the trolley at noon.",
    ask: "Why is it given in the afternoon, and what range is the usual example?",
    choices: [
      {
        text: "Give warfarin at 07:00 because the afternoon dose is always late.",
        note: "The page says it is given in the afternoon so the result can be checked.",
      },
      {
        text: "The only acceptable INR range for every case is 3 to 4.",
        note: "The usual example printed is 1.5 to 2.5, and the case range must still be confirmed.",
      },
      {
        text: "It waits for the laboratory INR. The usual keep range quoted is 1.5 to 2.5, but each case differs, so confirm with the team nurse or the board, and look for subcutaneous bleeding. If the INR is too high, withhold.",
        note: "Correct. Do not assume every person keeps the same range.",
      },
      {
        text: "Subcutaneous bleeding is irrelevant to a warfarin round.",
        note: "The page tells you to look for it.",
      },
    ],
    answer: 2,
    page: "11",
  },
  {
    id: "cp-042",
    topicId: "CP",
    topic: "Medicine safety",
    scene: "A person had lower-bowel surgery four days ago and Dulcolax suppositories are prescribed.",
    ask: "What is the per-rectal restriction?",
    choices: [
      {
        text: "The ban lasts 24 hours only.",
        note: "The printed ban is seven days.",
      },
      {
        text: "Suppositories are safe as soon as the person passes flatus.",
        note: "The restriction is the seven-day wound rule, not flatus.",
      },
      {
        text: "Only oral Dulcolax is banned. Rectal doses are preferred after this surgery.",
        note: "The warning is about per-rectal drugs.",
      },
      {
        text: "Do not give a per-rectal drug such as a Fleet enema or Dulcolax within seven days after per-rectal or lower-gastrointestinal surgery, or the wound may burst and cause peritonitis.",
        note: "Correct. Four days is still inside the seven days.",
      },
    ],
    answer: 3,
    page: "11",
  },
  {
    id: "cp-043",
    topicId: "CP",
    topic: "Medicine safety",
    scene: "The sign says nil by mouth except medication, and the person is for theatre after fasting from midnight.",
    ask: "What do you do about insulin and oral diabetic drugs?",
    choices: [
      {
        text: "Withhold subcutaneous insulin and all oral diabetic drugs yourself. A full nil-by-mouth order means oral drugs are not given and are changed to intravenous drugs. Fasting-from-midnight doses that are still allowed use 50 ml of water at 07:00, or the operation may be delayed or cancelled.",
        note: "Correct. Being allowed other oral medicines does not rescue the diabetic drugs, because the person is not eating.",
      },
      {
        text: "Give the usual insulin because the sign allows medication.",
        note: "The page says you withhold insulin and oral diabetic drugs even on nil by mouth except medication.",
      },
      {
        text: "Give oral tablets with a full glass of juice while fasting from midnight.",
        note: "The printed vehicle is 50 ml of water at 07:00, not juice.",
      },
      {
        text: "Keep oral diabetic drugs and stop only the blood-pressure tablets.",
        note: "The diabetic drugs are the ones this point tells you to withhold.",
      },
    ],
    answer: 0,
    page: "11",
  },
  {
    id: "cp-044",
    topicId: "CP",
    topic: "PPP bloods",
    scene: "You are preparing blood tests under please-prepare-patient.",
    ask: "Why do platelets, haemoglobin and INR matter here?",
    choices: [
      {
        text: "Low platelets are useful because they reduce theatre bleeding.",
        note: "The page says platelets that are too low cannot stop bleeding.",
      },
      {
        text: "Platelets that are too low may not stop bleeding in theatre. Haemoglobin that is too low may need transfusion beforehand. An abnormal INR means a bleeding tendency. Liver and renal tests cover sodium and potassium, and RG means random glucose.",
        note: "Correct. These are preparation results, not optional extras.",
      },
      {
        text: "INR is checked only to adjust a diabetic dose.",
        note: "INR is printed for bleeding tendency.",
      },
      {
        text: "Random glucose is not part of the blood-test list.",
        note: "RG, random glucose, is on the list.",
      },
    ],
    answer: 1,
    page: "12",
  },
  {
    id: "cp-045",
    topicId: "CP",
    topic: "PPP medicines",
    scene: "Theatre is in three days and the person takes aspirin and Plavix.",
    ask: "Which withholding examples does the preparation page give?",
    choices: [
      {
        text: "Stop aspirin for one hour and keep Plavix until the trolley leaves.",
        note: "Aspirin is at least three days and Plavix is one week.",
      },
      {
        text: "Withhold only paracetamol. Antiplatelet drugs stay until induction.",
        note: "Aspirin and Plavix are named withholding examples.",
      },
      {
        text: "Anti-hyperglycaemic drugs are continued through nil by mouth.",
        note: "They are withheld for a nil-by-mouth case.",
      },
      {
        text: "Aspirin for at least three days, Plavix for one week, plus heparin, enoxaparin given IMI, warfarin, and anti-hyperglycaemic drugs when the person is nil by mouth.",
        note: "Correct. Enoxaparin is printed as IMI on this page.",
      },
    ],
    answer: 3,
    page: "12",
  },
  {
    id: "cp-046",
    topicId: "CP",
    topic: "PPP preparation",
    scene: "You are ticking the rest of the please-prepare-patient list.",
    ask: "Which items belong on it?",
    choices: [
      {
        text: "Weight and height in kilograms for anaesthetic doses, major consent by a medical officer and minor consent by a house officer, a urine stick for glucose and protein, mid-stream or catheter urine culture for a urology case, and U+RU plus an IPSS questionnaire for a prostate case.",
        note: "Correct. The list also includes an ECG and chest X-ray, site marking, clipping if required, a bath, fasting from midnight, and a nil-by-mouth sign.",
      },
      {
        text: "Weight in pounds, because anaesthetic doses on this page use pounds.",
        note: "The page says the unit should be kilograms.",
      },
      {
        text: "Minor consent signed by the medical officer and major consent by the student.",
        note: "Major consent is the medical officer and minor consent is the house officer.",
      },
      {
        text: "Skip urine tests for a urology case.",
        note: "Urology cases need a culture sample, and prostate cases need U+RU and an IPSS questionnaire.",
      },
    ],
    answer: 0,
    page: "12",
  },
  {
    id: "cp-047",
    topicId: "CP",
    topic: "Pre-operative check",
    scene: "You are checking the person before the porter arrives.",
    ask: "What identity and consent points does the pre-operative list require?",
    choices: [
      {
        text: "A wristband is enough. The consent does not need the anaesthetist's signature.",
        note: "The anaesthetist, the surgeon and the patient are all named.",
      },
      {
        text: "Check the name, Hong Kong identity number and bracelet, the time of the last food and drink, and a consent signed by the surgeon, the anaesthetist and the patient, including the diagnosis, the operation and the complications, with or without a fact sheet.",
        note: "Correct. Also check that the perioperative record and the theatre list match the person and the operation.",
      },
      {
        text: "Last food and drink can be left blank if the sign says fasting from midnight.",
        note: "The time of the last food and drink is its own check.",
      },
      {
        text: "The student's signature can replace the patient's signature.",
        note: "The patient's signature is required.",
      },
    ],
    answer: 1,
    page: "13",
  },
  {
    id: "cp-048",
    topicId: "CP",
    topic: "Pre-operative script",
    scene: "You are asking the pre-operative history in the ward's own words.",
    ask: "Which cluster matches the printed questions?",
    choices: [
      {
        text: "Ask about drug allergy only, and leave dentures, lenses and nail polish in place.",
        note: "Dentures are checked for removal, and lenses and nail polish come off.",
      },
      {
        text: "Infectious status never changes the theatre order.",
        note: "Those infections may place the person last.",
      },
      {
        text: "Ask about hepatitis, lung disease, heart disease, diabetes, blood pressure or an illness needing follow-up, using the sense of 有無肝炎、肺病、心藏病、糖尿、血壓或要覆診既病. Also ask food, drug or tape allergy, loose teeth or a denture and whether it comes out, local or general anaesthesia, contact lenses, and whether nail polish is off. MRSA, hepatitis B, CRE or VRE may mean this person goes last to theatre.",
        note: "Correct. Tape allergy is part of the allergy question, not an optional extra.",
      },
      {
        text: "Skip heart disease and diabetes because theatre will ask again.",
        note: "They are in the printed past-history question.",
      },
    ],
    answer: 2,
    page: "13",
  },
  {
    id: "cp-049",
    topicId: "CP",
    topic: "Pre-operative check",
    scene: "The anaesthetist has written drugs and fluids to go with the person.",
    ask: "Which preparation point matches the page?",
    choices: [
      {
        text: "Blood pressure and other vital signs are checked. Indicated blood-pressure and heart drugs are given with 50 ml of water. Underwear comes off and the theatre gown goes on, ties at the back. Jewellery, including metal, rings, a watch and a necklace, goes to the property cupboard. The plan may be general, spinal, local or MAC anaesthesia, and blood results, the chest film and the ECG should at least have been seen by the house officer.",
        note: "Correct. Printed fluid examples include half-and-half solution every 8 hours, 1D1S every 6 hours, and D10 with 10 mmol of potassium chloride plus Actrapid 4 units every 8 hours. Make the bed for the return.",
      },
      {
        text: "Give the morning cardiac drug with a large juice, not the 50 ml of water.",
        note: "The printed volume is 50 ml of water.",
      },
      {
        text: "Leave rings and the watch on because metal is allowed in theatre.",
        note: "Metal, rings, watches and necklaces come off.",
      },
      {
        text: "MAC is not an anaesthetic option on this page.",
        note: "GA, SA, LA or MAC are all named.",
      },
    ],
    answer: 0,
    page: "13",
  },
  {
    id: "cp-050",
    topicId: "CP",
    topic: "Recovery",
    scene: "The porter is ready and you have not picked up the theatre equipment.",
    ask: "What do you bring before you go to theatre?",
    choices: [
      {
        text: "Only the case notes. A recovery tray is packed by theatre.",
        note: "The ward brings the recovery tray.",
      },
      {
        text: "The recovery tray, and any special item the theatre nurse asked for, such as an extra pillow.",
        note: "Correct. You bring it before you go, not after the person returns.",
      },
      {
        text: "An extra pillow only if the person asks for comfort on the way.",
        note: "The extra pillow is the example of a special theatre request.",
      },
      {
        text: "The meal tray, so the person can eat in recovery.",
        note: "Food is not the item. Post-operative intake has its own timing rules.",
      },
    ],
    answer: 1,
    page: "14",
  },
  {
    id: "cp-051",
    topicId: "CP",
    topic: "Recovery",
    scene: "You meet the person in the recovery room.",
    ask: "What do you check before the ward accepts the return?",
    choices: [
      {
        text: "Only the wound. Identity was checked before theatre, so recovery skips it.",
        note: "Name, identity number and bracelet are checked again in recovery.",
      },
      {
        text: "Oxygen can be continued with no note of the litres or the stop time.",
        note: "You check the prescription in litres per minute and until when.",
      },
      {
        text: "Name, identity number, bracelet, conscious level and vital signs; the operation done, the post-operative diagnosis and the final method, general, spinal or local; estimated blood loss and intra-operative complications; whether the wound is actively bleeding; oxygen in litres per minute and until when; drugs given and the time; any drain, catheter and intravenous fluid; and the surgeon's post-operative orders.",
        note: "Correct. Identity is checked again in recovery, not assumed from the theatre list alone.",
      },
      {
        text: "Blood loss is a theatre secret and is not handed over.",
        note: "Estimated blood loss and complications are on the list.",
      },
    ],
    answer: 2,
    page: "14",
  },
  {
    id: "cp-052",
    topicId: "CP",
    topic: "Post-operative intake",
    scene: "The recovery note says diet as tolerated after a general anaesthetic.",
    ask: "When may this person drink or eat?",
    choices: [
      {
        text: "Six hours for every anaesthetic, including local.",
        note: "Local anaesthesia needs no wait on this page, and general anaesthesia with diet as tolerated is three hours.",
      },
      {
        text: "One hour after general anaesthesia and three hours after spinal anaesthesia.",
        note: "The times are three hours for general anaesthesia and one and a half hours for spinal anaesthesia.",
      },
      {
        text: "As soon as the person asks, with no team-nurse check.",
        note: "You confirm with the team nurse first.",
      },
      {
        text: "Three hours after a general anaesthetic if diet as tolerated is prescribed, one and a half hours after spinal anaesthesia, and no wait is required after local anaesthesia. Confirm with the team nurse before any drink or food.",
        note: "Correct. Do not use a single six-hour rule for every anaesthetic.",
      },
    ],
    answer: 3,
    page: "14",
  },
  {
    id: "cp-053",
    topicId: "CP",
    topic: "Return to ward",
    scene: "The person has just had a thyroidectomy and is back from recovery.",
    ask: "Which position and monitoring does the return list name for this operation?",
    choices: [
      {
        text: "Lie the person flat with no saturation monitoring.",
        note: "The thyroidectomy example is propped up, with continuous saturation monitoring.",
      },
      {
        text: "Continuous oxygen-saturation monitoring, a recovery tray or box, and propping up to 30 or 45 degrees unless another order says otherwise.",
        note: "Correct. Heavy oozing is reported to the team nurse. Mark the ooze on the outer dressing with a marker pen.",
      },
      {
        text: "Prop up to 90 degrees and remove the recovery tray.",
        note: "The printed angles are 30 or 45 degrees, and the tray or box is set up.",
      },
      {
        text: "Skip the position check because every operation uses the same posture.",
        note: "The page tells you to ensure the correct position, and gives thyroidectomy as the example.",
      },
    ],
    answer: 1,
    page: "15",
  },
  {
    id: "cp-054",
    topicId: "CP",
    topic: "Return to ward",
    scene: "You are writing the return note and the family wants the watch back.",
    ask: "What does the return list say about property, and what must the note contain?",
    choices: [
      {
        text: "Return valuables as soon as the trolley arrives, even if the person is still drowsy.",
        note: "Property waits until the person is fully conscious.",
      },
      {
        text: "The note needs only the time back. Wound and pain can wait until night.",
        note: "Wound, pain, tubes and education are all in the documentation line.",
      },
      {
        text: "Return property only when the person is fully conscious. Record the time back, the operation, general condition, vital signs, wound, pain level, intravenous fluid, any drain, nasogastric tube and catheter, and the education given.",
        note: "Correct. Also keep the drip secured, give prescribed oxygen, secure drain and catheter, teach PCA if there is one, check hypothermia care, hand over to the case nurse or in-charge, chart intake and output, and empty the bedside bag or drain first if that was ordered.",
      },
      {
        text: "Take down the intravenous fluid on arrival so the person can move.",
        note: "The drip is to be continuous and secured.",
      },
    ],
    answer: 2,
    page: "15",
  },
  {
    id: "cp-055",
    topicId: "CP",
    topic: "Intravenous rate",
    scene: "You are about to count a gravity drip.",
    ask: "What drop factor does this package print?",
    choices: [
      {
        text: "15 drops per ml, the other common giving-set figure.",
        note: "This page prints 20, not 15.",
      },
      {
        text: "60 drops per ml, a micro-drip figure.",
        note: "60 is not the printed factor.",
      },
      {
        text: "10 drops per ml.",
        note: "The printed factor is 20.",
      },
      {
        text: "20 drops per ml.",
        note: "Correct. The heading is drop factor equals drops per ml, and the value is 20. The table is built from that figure.",
      },
    ],
    answer: 3,
    page: "16",
  },
  {
    id: "cp-056",
    topicId: "CP",
    topic: "Intravenous rate",
    scene: "A 500 ml bag is to run over 8 hours and the drop factor is 20.",
    ask: "Which rate matches the printed table?",
    choices: [
      {
        text: "About 21 drops per minute, and about 2 drops in 5 seconds.",
        note: "Correct. The table prints 20.83 to 21 drops per minute and 1.74 to 2 drops in 5 seconds. That is volume times 20, divided by hours times 60.",
      },
      {
        text: "About 42 drops per minute, which is the 4-hour line.",
        note: "500 ml over 4 hours is about 42 drops per minute. Over 8 hours it is about 21.",
      },
      {
        text: "About 83 drops per minute.",
        note: "That is the 2-hour line for 500 ml.",
      },
      {
        text: "About 7 drops per minute.",
        note: "That is the 24-hour line, not the 8-hour line.",
      },
    ],
    answer: 0,
    page: "16",
  },
  {
    id: "cp-057",
    topicId: "CP",
    topic: "Intravenous rate",
    scene: "The order changes to 500 ml over 1 hour, then someone asks about a 24-hour rate.",
    ask: "Which pair matches the table?",
    choices: [
      {
        text: "Over 1 hour, about 67 drops per minute.",
        note: "The 1-hour figure is about 167, not 67.",
      },
      {
        text: "Over 24 hours, about 21 drops per minute.",
        note: "21 per minute is the 8-hour line.",
      },
      {
        text: "Over 1 hour, about 167 drops per minute, about 14 drops in 5 seconds. Over 24 hours, about 7 drops per minute.",
        note: "Correct. The 1-hour line is 166.66 to 167 per minute and 13.88 to 14 in 5 seconds. The 24-hour line is 6.94 to 7 per minute.",
      },
      {
        text: "Both orders run at 14 drops per minute.",
        note: "14 in 5 seconds belongs to the 1-hour line, not to both orders.",
      },
    ],
    answer: 2,
    page: "16",
  },
  {
    id: "cp-058",
    topicId: "CP",
    topic: "Wound dressing",
    scene: "You are asked for the seven items to see a wound.",
    ask: "Which set is the printed seven?",
    choices: [
      {
        text: "Gloves, a stitch cutter, plain gauze, micropore, a scalpel, saline 10 ml and a small plaster.",
        note: "A stitch cutter and a scalpel are not in the seven.",
      },
      {
        text: "A full dressing set, betadine, hydrogen peroxide, a trolley, scissors, an alcohol pad and a foam dressing.",
        note: "Those belong to the longer simple-materials list, not the seven see-wound items.",
      },
      {
        text: "Gloves, plain gauze and micropore only. Saline and the Tegaderm ruler are optional.",
        note: "Saline 10 ml and the large Tegaderm are two of the seven.",
      },
      {
        text: "Gloves, a plastic bag, plain gauze, micropore, a dressing applicator, single-use normal saline 10 ml, and a large Tegaderm used as a ruler.",
        note: "Correct. The large Tegaderm is for measuring, not a substitute for the saline.",
      },
    ],
    answer: 3,
    page: "17",
  },
  {
    id: "cp-059",
    topicId: "CP",
    topic: "Wound dressing",
    scene: "You are choosing a primary dressing and a solution from the simple-materials list.",
    ask: "Which names are on that list?",
    choices: [
      {
        text: "Primary examples include Jelonet, Mesalt, Duoderm, Aquacel Ag and Kaltostat. Solutions named are normal saline, Betadine, Hibitane and hydrogen peroxide.",
        note: "Correct. Secondary dressings include gauze, combined gauze and foam. Tape includes micropore, Tegaderm, a bandage and Omnifix.",
      },
      {
        text: "Primary dressings on this list are only dry gauze. Jelonet and Kaltostat are not named.",
        note: "Jelonet, Mesalt, Duoderm, Aquacel Ag and Kaltostat are all named as primary dressings.",
      },
      {
        text: "The only solution allowed is antibiotic powder.",
        note: "The solutions printed are saline, Betadine, Hibitane and hydrogen peroxide.",
      },
      {
        text: "Hydrogen peroxide is banned on this list.",
        note: "Hydrogen peroxide is one of the four named solutions.",
      },
    ],
    answer: 0,
    page: "17",
  },
  {
    id: "cp-060",
    topicId: "CP",
    topic: "Wound note",
    scene: "You are copying the style of the sample wound notes.",
    ask: "Which pair matches the samples?",
    choices: [
      {
        text: "Both wounds are recorded as 10 cm deep with heavy pus.",
        note: "The samples are small, with mild serous or mild haemoserous discharge.",
      },
      {
        text: "Normal saline to the left hip, 3 cm by 1 cm, mild serous discharge. Aqueous Hibitane to the coccyx, 3 by 1.5 by 0.5 cm, mild haemoserous discharge. In both, the surrounding skin is intact.",
        note: "Correct. Both samples say the person tolerated the dressing and understood simple wound teaching.",
      },
      {
        text: "The hip wound is Hibitane and the coccyx wound is left undescribed.",
        note: "The hip sample is normal saline and the coccyx sample is aqueous Hibitane.",
      },
      {
        text: "Surrounding skin is recorded as broken in both samples.",
        note: "Both samples say the surrounding skin is intact.",
      },
    ],
    answer: 1,
    page: "42",
  },
  {
    id: "cp-061",
    topicId: "CP",
    topic: "Oral medicines",
    scene: "You are setting up the medicine trolley before an administration exam.",
    ask: "What does the preparation list include?",
    choices: [
      {
        text: "A locked trolley, cold water only, and no memo paper.",
        note: "The locks are already open, the water is warm, and memo paper is on the list.",
      },
      {
        text: "Syrup cups are left in the treatment room until the end.",
        note: "Medicine cups and syrup cups are placed on the trolley.",
      },
      {
        text: "The drug book is not used on this trolley.",
        note: "The drug book is item 8.",
      },
      {
        text: "One trolley with all the locks already open, tissue, warm water, enough drugs, medicine cups and syrup cups on the trolley top, memo paper for items to report, an alcohol swab for hand hygiene, the drug book, and a small tray.",
        note: "Correct. The cups are taken out before you start reading the sheets.",
      },
    ],
    answer: 3,
    page: "18",
  },
  {
    id: "cp-062",
    topicId: "CP",
    topic: "Oral medicines",
    scene: "The exam uses IPMOE and you are told to scan in a Z pattern.",
    ask: "What do you read first?",
    choices: [
      {
        text: "The person's name, identity number and allergy history.",
        note: "Correct. You then read from the first drug. Doses to be given are mostly arranged at the front.",
      },
      {
        text: "The last drug on the list, then the allergy only if the person asks.",
        note: "Allergy is read at the start, with the name and identity number.",
      },
      {
        text: "Only the bed number, because the name is on the door.",
        note: "Name, identity and allergy come first.",
      },
      {
        text: "The pharmacy price of each item.",
        note: "Price is not part of the Z-pattern reading.",
      },
    ],
    answer: 0,
    page: "18",
  },
  {
    id: "cp-063",
    topicId: "CP",
    topic: "Oral medicines",
    scene: "One drug is already signed off, and you had marked pain, cough and itch to ask about.",
    ask: "Which reading rule matches the package?",
    choices: [
      {
        text: "As-needed questions count as one of the three checks, so you can skip a signed-off drug completely.",
        note: "Those questions are explicitly not part of the three checks, and a signed-off line is still read.",
      },
      {
        text: "Pain, cough, itch and other as-needed items are marked to ask and are not counted inside the three checks. A drug already signed off, or not yet due, is still read for the name, the doctor's signature not yet signed off, the route, the frequency and the dosage, and you state that it is not yet time, already signed off, or a local application that is not given now.",
        note: "Correct. You do not skip a signed-off line in silence.",
      },
      {
        text: "Give a not-yet-due drug if the cup looks empty.",
        note: "Not yet due means it is not given on this pass.",
      },
      {
        text: "Local-application ointment is poured into the oral cup.",
        note: "The reading line says LA is not given on that oral pass, and it is reported later if still not given.",
      },
    ],
    answer: 1,
    page: "18-19",
  },
  {
    id: "cp-064",
    topicId: "CP",
    topic: "Syrup check",
    scene: "The next item is a bottle of syrup.",
    ask: "How do the three checks handle the syrup?",
    choices: [
      {
        text: "Shake the bottle after you have signed the sheet, and read the level from above.",
        note: "You shake before pouring, and both later checks are at eye level.",
      },
      {
        text: "Eye level is only the third check. The second check is a glance from above.",
        note: "Both the second and the third checks are at eye level.",
      },
      {
        text: "First check the name, the dose and the expiry, matching identity if the bottle has one. On the second check, shake the bottle, pour the amount, and read it at eye level. On the third check, read the level at eye level again.",
        note: "Correct. Eye level is used twice, not once.",
      },
      {
        text: "Syrup is never shaken, because shaking changes the dose.",
        note: "The second check starts by shaking the bottle.",
      },
    ],
    answer: 2,
    page: "19",
  },
  {
    id: "cp-065",
    topicId: "CP",
    topic: "Oral medicines",
    scene: "You have a top-up bottle of tablets and a powder sachet.",
    ask: "Which check matches the tips?",
    choices: [
      {
        text: "A top-up bottle has no person identity to match, so you check the name, how many tablets the dose needs, and the expiry. The second check holds the tablet in the cap or a spoon. A powder sachet is not thrown away before the third check. A bagged dose must match the person, and the top-up date must be within one week.",
        note: "Correct. Foil expiry is checked on a bagged dose at the second check.",
      },
      {
        text: "Throw the powder sachet away as soon as you pour, then do the third check from memory.",
        note: "The third check keeps the sachet.",
      },
      {
        text: "A top-up bottle is checked against the bed number printed on the bottle.",
        note: "The tip says a top-up bottle has no person identity on it.",
      },
      {
        text: "Tablets may be tipped from the bottle straight into the cup with no second look.",
        note: "The second check holds the tablet in the cap or a spoon.",
      },
    ],
    answer: 0,
    page: "18-19",
  },
  {
    id: "cp-066",
    topicId: "CP",
    topic: "Oral medicines",
    scene: "The cups are full and one person says they will take medicines only after lunch.",
    ask: "What does the package require before you finish?",
    choices: [
      {
        text: "Throw the packets away before the team nurse looks, to keep the trolley tidy.",
        note: "The packets stay until that joint check.",
      },
      {
        text: "Keep the packets until the team nurse checks every cup with you, on a blue tray or a kidney dish. Do not recite a pile of side effects to the person. If someone will take medicines only after food, you must see those doses taken before you go off duty, or you fail. Report items such as Dulcolax not given and how many days the bowels have not opened, and local ointment not yet given.",
        note: "Correct. Side effects are asked separately so the person is not frightened off the dose.",
      },
      {
        text: "Tell the person every side effect on the page before each swallow.",
        note: "A pile of side effects is specifically discouraged.",
      },
      {
        text: "An after-food dose can be left unverified when your shift ends.",
        note: "If it is not seen to be taken before you go off duty, the package says you fail.",
      },
    ],
    answer: 1,
    page: "19",
  },
  {
    id: "cp-067",
    topicId: "CP",
    topic: "Catheterisation once",
    scene: "You are collecting equipment for a once-only catheter specimen.",
    ask: "Which catheter does the package name?",
    choices: [
      {
        text: "A Fr 16 silicone tube, the nasogastric aspiration size.",
        note: "Fr 16 on the nasogastric pages is for aspiration, not this catheterisation.",
      },
      {
        text: "A Fr 20 three-way catheter.",
        note: "Fr 20 or above, three-way, is the bladder-irrigation catheter.",
      },
      {
        text: "A Fr 10 Nelaton single-use catheter, black, with a round tip, plus a sterile specimen container.",
        note: "Correct. This is not the Fr 12 or 14 balloon catheter used for a change.",
      },
      {
        text: "Any Foley that is already open on the trolley.",
        note: "The once-only catheter is specified as Fr 10 Nelaton, black, round tip.",
      },
    ],
    answer: 2,
    page: "20",
  },
  {
    id: "cp-068",
    topicId: "CP",
    topic: "Catheterisation once",
    scene: "You are about to clean and label a once-only catheterisation.",
    ask: "Which antiseptic and identity step match the page?",
    choices: [
      {
        text: "Tisept is chlorhexidine 0.5 percent with no cetrimide, and you scan only at the end.",
        note: "The printed Tisept strength is 0.015 percent chlorhexidine plus 0.15 percent cetrimide, and the scan comes first.",
      },
      {
        text: "Unisept is the same mixture as Tisept.",
        note: "Unisept is chlorhexidine gluconate 0.05 percent.",
      },
      {
        text: "Identity is confirmed by asking the room number only.",
        note: "The once-only page uses the 2D scan of the bracelet and the worksheet.",
      },
      {
        text: "Tisept is chlorhexidine gluconate 0.015 percent plus cetrimide 0.15 percent, or Unisept is chlorhexidine gluconate 0.05 percent. Scan the bracelet and then the worksheet with the 2D scanner, and confirm the label, before you start.",
        note: "Correct. Yellow forceps lift the catheter. Blue forceps take the swabs.",
      },
    ],
    answer: 3,
    page: "20",
  },
  {
    id: "cp-069",
    topicId: "CP",
    topic: "Catheterisation once",
    scene: "The Nelaton catheter is in, but no urine appears.",
    ask: "What does the procedure tell you to try, and which compartment holds the urine?",
    choices: [
      {
        text: "Inflate a balloon and wait one hour.",
        note: "The once-only Nelaton steps do not use a balloon. They use a syringe if urine does not come.",
      },
      {
        text: "Keep the large compartment for urine. Aspirate with the syringe, because jelly may block the lumen or the person may have little urine. If the catheter went in too far, pull it back a little.",
        note: "Correct. Ordinary gloves are used to retract the foreskin or to part the labia with two pieces of gauze. Sterile gloves go on before the final clean and the insertion.",
      },
      {
        text: "Use the small compartment as the urine well.",
        note: "The large compartment is kept for urine. Solution goes in the small compartment.",
      },
      {
        text: "Remove the catheter at once and send an empty bottle.",
        note: "The page gives a syringe aspiration and a small withdrawal before you give up.",
      },
    ],
    answer: 1,
    page: "20",
  },
  {
    id: "cp-070",
    topicId: "CP",
    topic: "Catheter change",
    scene: "The order is to change an indwelling catheter, not to take a once-only specimen.",
    ask: "Which equipment and first actions match?",
    choices: [
      {
        text: "A black Fr 10 Nelaton and a specimen bottle, with no balloon test.",
        note: "That is the once-only set. A change uses Fr 12 or 14 and a balloon that is tested.",
      },
      {
        text: "Remove the old catheter with sterile gloves and do not look at whether it is intact.",
        note: "Latex gloves are used to remove it, and you check that it is intact.",
      },
      {
        text: "Water for injection 10 ml, two 10 ml syringes, a Fr 12 or 14 catheter, a bedside bag and hanger, micropore and latex gloves. Confirm the person on the bed card, remove the old catheter with latex gloves, check that it is intact, empty the old bag and note the urine, and hang the new bag.",
        note: "Correct. Test the new balloon by filling it and drawing the water back out before you insert.",
      },
      {
        text: "Leave the new bag on the trolley until the end.",
        note: "The new bedside bag is hung before you start the clean steps.",
      },
    ],
    answer: 2,
    page: "21",
  },
  {
    id: "cp-071",
    topicId: "CP",
    topic: "Catheter change",
    scene: "Urine has just appeared through the new catheter.",
    ask: "What do you do next, and what does the sample note record?",
    choices: [
      {
        text: "Inflate the balloon at the first drop of urine, with no further insertion.",
        note: "The page says insert another 2 to 5 cm, then inflate at once.",
      },
      {
        text: "Tape the catheter to the abdomen and record 200 ml as the sample amount.",
        note: "The tape is on the side of the thigh, and the sample amount is about 20 ml.",
      },
      {
        text: "The sample note says understanding was excellent and no holder was used.",
        note: "Understanding is doubtful in the sample, and a limb holder is applied.",
      },
      {
        text: "Advance another 2 to 5 cm, inflate the balloon at once, connect the bedside bag, and tape the catheter to the side of the thigh with micropore. The sample note records an old Fr 14 removed intact, a new Fr 14, about 20 ml of urine, micropore, fair tolerance, education the person may not have understood, and a limb holder so the catheter is not pulled out.",
        note: "Correct. Inflating before that extra 2 to 5 cm is not the printed sequence.",
      },
    ],
    answer: 3,
    page: "21-42",
  },
  {
    id: "cp-072",
    topicId: "CP",
    topic: "Nasogastric aims",
    scene: "A doctor has prescribed a nasogastric tube and you are explaining why it is being passed.",
    ask: "Which aims does the insertion chapter give?",
    choices: [
      {
        text: "Enteral feeding and medicines, a gastric specimen for the laboratory, decompression or drainage of gastric content, and lavage in poisoning. It is an invasive procedure and needs a doctor's order for the type and the indication.",
        note: "Correct. You also check two identifiers, past history, vital signs, nasal surgery, a deviated septum or facial trauma, and you choose the nostril with the better airflow.",
      },
      {
        text: "The only aim is lavage. Feeding through the tube is not listed.",
        note: "Feeding and medicines are the first uses named.",
      },
      {
        text: "A tube may be passed for comfort with no prescription.",
        note: "A doctor's order is required.",
      },
      {
        text: "The tube is for intravenous fluid.",
        note: "It is an enteral and gastric tube, not an intravenous line.",
      },
    ],
    answer: 0,
    page: "22",
  },
  {
    id: "cp-073",
    topicId: "CP",
    topic: "Nasogastric tube",
    scene: "You are picking the tube size and the change interval.",
    ask: "Which pair matches the preparation list?",
    choices: [
      {
        text: "Fr 10 for feeding and Fr 20 for aspiration, both changed daily.",
        note: "Those sizes are not the nasogastric sizes. Daily change is not printed.",
      },
      {
        text: "Silicone is changed every 7 days and PVC is left for 30 days.",
        note: "That swaps the two intervals.",
      },
      {
        text: "Usually Fr 12 or Fr 14 for feeding, and Fr 16 for aspiration. PVC is changed in 7 to 14 days. Silicone is changed at 30 days. pH paper is part of the equipment.",
        note: "Correct. The list also includes a 60 ml syringe, a spigot, water-soluble lubricant, a stethoscope and micropore.",
      },
      {
        text: "pH paper is left off the trolley because the stethoscope replaces it.",
        note: "pH paper is listed. The stethoscope is for the optional test, not a replacement.",
      },
    ],
    answer: 2,
    page: "22",
  },
  {
    id: "cp-074",
    topicId: "CP",
    topic: "Nasogastric insertion",
    scene: "The English steps say the person cannot sit and must lie flat.",
    ask: "Which position, measurement and lubrication match those English steps?",
    choices: [
      {
        text: "Use the head-down 15 to 30 degree position as the English instruction for a person who must lie flat.",
        note: "Head-down is the Chinese description. The English steps say reverse Trendelenburg.",
      },
      {
        text: "Lay the tube on the skin while you measure, and use oil on the first 20 cm.",
        note: "The English measurement does not touch the tube to the skin, and the lubricant length there is about 5 to 10 cm of water-soluble jelly.",
      },
      {
        text: "Leave the far end open so gastric fluid can drain during insertion.",
        note: "A spigot is added so gastric content does not drain out once the tube is in.",
      },
      {
        text: "If the person can sit, use high Fowler or an upright position. If the person must lie flat, use reverse Trendelenburg. Measure nose tip to the earlobe nearer that nostril, then to the xiphoid, without laying the tube on the skin. Lubricate about 5 to 10 cm, and spigot the far end before you insert.",
        note: "Correct. The Chinese tips separately describe a head-down slope of about 15 to 30 degrees, or a right-side lie, when the person cannot sit. Do not copy that head-down line into the English steps.",
      },
    ],
    answer: 3,
    page: "23-24",
  },
  {
    id: "cp-075",
    topicId: "CP",
    topic: "Nasogastric insertion",
    scene: "The tube has passed the nasopharynx and the person starts to cough violently.",
    ask: "What do the English steps tell you to do?",
    choices: [
      {
        text: "Pull the tube out at once if coughing is violent or there is respiratory distress. After the nasopharynx, ask the person to flex the head toward the chest. If the tube will not advance and choking continues, look in the mouth for a coil.",
        note: "Correct. A gag at the nasopharynx can mean you stop, withdraw a little, and let the person rest before trying again.",
      },
      {
        text: "Keep advancing while the person coughs, so the tube does not lose ground.",
        note: "Violent cough or respiratory distress means withdraw at once.",
      },
      {
        text: "Extend the neck fully after the nasopharynx to open the trachea.",
        note: "The head is flexed toward the chest to close the glottis.",
      },
      {
        text: "A coil in the mouth is ignored if the mark on the tube has been reached.",
        note: "You inspect the mouth for coiling when the tube will not advance with swallowing.",
      },
    ],
    answer: 0,
    page: "24",
  },
  {
    id: "cp-076",
    topicId: "CP",
    topic: "Nasogastric check",
    scene: "The English insertion pages tell you how to decide the tube is in the stomach.",
    ask: "Which statement matches those pages?",
    choices: [
      {
        text: "The whoosh is the required test, and pH is only a classroom option.",
        note: "The whoosh is labelled optional. pH of 5.5 or less is the bedside indication.",
      },
      {
        text: "Inject up to 10 to 30 ml of air, aspirate, and treat a gastric pH of 5.5 or less as a good indication, noting colour and amount. A whoosh over the epigastrium with a quick 10 ml of air is marked optional. A chest X-ray, as prescribed, is the golden-standard check on these insertion pages.",
        note: "Correct. You look in the mouth for a coil before you trust the aspirate, then spigot the tube again. Secure it with at least two pieces of micropore on the bridge of the nose.",
      },
      {
        text: "A pH of 7 or above confirms the stomach.",
        note: "The printed gastric pH is 5.5 or less, not 7 or above.",
      },
      {
        text: "If you hear a whoosh, the X-ray is cancelled as unnecessary.",
        note: "The X-ray, as prescribed, is still called the golden standard on the insertion pages.",
      },
    ],
    answer: 1,
    page: "25-26",
  },
  {
    id: "cp-077",
    topicId: "CP",
    topic: "Nasogastric check",
    scene: "You are following the Chinese insertion tips at the bedside.",
    ask: "Which tests do those tips treat as the main check, and which are optional?",
    choices: [
      {
        text: "Bubbles in the water bowl mean the tube is safely in the stomach.",
        note: "Bubbles are the optional sign of tracheal placement, and the tube is repassed.",
      },
      {
        text: "Always discard the aspirate, including clear gastric fluid.",
        note: "Clear aspirate goes back by gravity. Blood is the exception.",
      },
      {
        text: "Listening at the ear is the required golden standard in the Chinese tips.",
        note: "It is marked optional. The main bedside test is the aspirate and the pH.",
      },
      {
        text: "Inject 5 to 10 ml, aspirate, and a pH of 5.5 or below means the site is right. Unless the aspirate contains blood, let it flow back by gravity to spare electrolytes. The water-bubble test, listening at the ear, and the gurgle with 10 to 20 ml of air are marked optional, and air that was injected for the gurgle is drawn back out.",
        note: "Correct. No bubbles in the water is the optional sign of a right site. Bubbles suggest the trachea. Hearing no breath sound at the ear, or the person being able to hum and speak, is also only optional.",
      },
    ],
    answer: 3,
    page: "30",
  },
  {
    id: "cp-078",
    topicId: "CP",
    topic: "Nasogastric insertion",
    scene: "The Chinese tips give a length and a lubricant warning.",
    ask: "Which rule matches those tips?",
    choices: [
      {
        text: "An average adult length is about 45 to 55 cm, or take the nose-ear-xiphoid length, subtract 50 cm, divide by 2, then add 50 cm. Lubricate about 15 to 20 cm with water-soluble jelly, never oil. If the specimen is for cytology, use water or saline instead of jelly. After a gastrectomy the doctor passes the tube.",
        note: "Correct. Oil is forbidden because it does not dissolve and can injure the airway if the tube is in the trachea.",
      },
      {
        text: "Oil-based jelly is preferred, and the student passes the tube after a gastrectomy.",
        note: "Oil is forbidden, and the doctor passes the tube after gastrectomy so the suture line is not torn.",
      },
      {
        text: "The only adult length is 75 cm, lubricated for 2 cm with water.",
        note: "75 cm appears in a later sample mark. The Chinese length guide is about 45 to 55 cm, or the NEX formula, with about 15 to 20 cm lubricated.",
      },
      {
        text: "Cytology specimens should be heavily coated in jelly.",
        note: "Jelly can spoil a cytology sample, so water or saline is used.",
      },
    ],
    answer: 0,
    page: "29",
  },
  {
    id: "cp-079",
    topicId: "CP",
    topic: "Nasogastric X-ray",
    scene: "Someone says a chest film makes nasogastric placement foolproof.",
    ask: "What safety warning does the package print?",
    choices: [
      {
        text: "The package says misread films have never caused death, so any film is enough.",
        note: "It prints 12 deaths inside the 45 misread-film events.",
      },
      {
        text: "The usual test is still to aspirate and check the pH, and to X-ray if you still doubt. From 2005 in England and Wales the package cites 21 deaths and 79 serious incidents from tubes placed in the lung. Of those 100 events, 45, including 12 deaths, came from misread films. In March 2011 the National Patient Safety Agency issued guidance on reading those films safely. A check that nobody follows carefully is only decoration.",
        note: "Correct. Do not treat the film as safe just because it was taken.",
      },
      {
        text: "Auscultation replaced X-ray after 2011.",
        note: "The warning is about reading the film safely, not about dropping the pH-then-X-ray sequence.",
      },
      {
        text: "There were 45 deaths, all from pH paper, and no film errors.",
        note: "The 45 events are the misread films, and the deaths inside that group are 12. Overall deaths cited are 21.",
      },
    ],
    answer: 1,
    page: "30-31",
  },
  {
    id: "cp-080",
    topicId: "CP",
    topic: "Nasogastric note",
    scene: "You are modelling the progress-note sample dated 22 September 2020 at 10:00.",
    ask: "Which record matches that sample?",
    choices: [
      {
        text: "An Fr 16 tube to 75 cm, with pH 7.5 and no X-ray mentioned.",
        note: "The progress sample is Fr 12, 55 cm, pH 4.5, pending chest X-ray.",
      },
      {
        text: "The pH was 4.5, so the sample says the X-ray was cancelled.",
        note: "The sample still says confirmation by chest X-ray is pending.",
      },
      {
        text: "An Fr 12 tube was passed through the nostril to 55 cm. 10 ml of yellowish gastric fluid was aspirated and the pH was 4.5. The person tolerated it. Chest X-ray confirmation was still pending. The note is signed by nursing student Chan Mui Mui and RN Chan Tai Mui.",
        note: "Correct. A pH of 4.5 fits the 5.5-or-less bedside indication, and the sample still waits for the film.",
      },
      {
        text: "20 ml of green fluid, pH 8, signed by the doctor only.",
        note: "The sample is 10 ml yellowish, pH 4.5, signed by the student and the nurse.",
      },
    ],
    answer: 2,
    page: "27",
  },
  {
    id: "cp-081",
    topicId: "CP",
    topic: "Nasogastric note",
    scene: "A later sample describes a tube change rather than a first insertion.",
    ask: "Which details match that sample?",
    choices: [
      {
        text: "The old Fr 16 tube was removed and was intact. The new Fr 16 tube was marked 3.5, which the note equates to 75 cm. 10 ml of undigested milk was aspirated, pH 4.5. Tolerance was poor, with mild aggression, and mild nasal bleeding stopped after 3 minutes. Teaching was given but understanding was doubtful.",
        note: "Correct. Do not swap this sample with the Fr 12 progress note.",
      },
      {
        text: "A new Fr 12 tube at 55 cm, tolerated well, with no bleeding.",
        note: "That is the other sample. This one is Fr 16, mark 3.5 (75 cm), tolerated poorly, with brief bleeding.",
      },
      {
        text: "pH 6.5 and bleeding that continued for an hour.",
        note: "The pH is 4.5 and the bleeding stopped after 3 minutes.",
      },
      {
        text: "The old tube was not inspected.",
        note: "The sample says the old tube was removed and found intact.",
      },
    ],
    answer: 0,
    page: "42",
  },
  {
    id: "cp-082",
    topicId: "CP",
    topic: "Nasogastric residual",
    scene: "Before a feed you aspirate the stomach.",
    ask: "Which residual rule is printed on the feeding pages?",
    choices: [
      {
        text: "Under 200 ml, discard it. Over 200 ml, give double the feed.",
        note: "The printed continue cut is under 250 ml, and the residual is put back, not discarded.",
      },
      {
        text: "Under 250 ml, put the residual back and follow the feed prescription. Over 250 ml, or more than half of the previous feed on two consecutive feeds, tell the doctor. Over 500 ml, withhold the feed and tell the responsible staff.",
        note: "Correct. Putting back a residual under 250 ml is to avoid losing nutrients and electrolytes. Do not replace 250 with another cut.",
      },
      {
        text: "Any residual over 250 ml means withhold at once, and 500 ml is still safe to feed.",
        note: "Over 250 ml means tell the doctor. Over 500 ml is the withhold line.",
      },
      {
        text: "Put back a 520 ml residual and give the full feed.",
        note: "Over 500 ml means withhold the feed and inform the responsible staff.",
      },
    ],
    answer: 1,
    page: "34-35",
  },
  {
    id: "cp-083",
    topicId: "CP",
    topic: "Nasogastric feeding",
    scene: "The pH is acceptable and you are about to start the milk.",
    ask: "Which feeding sequence matches these pages?",
    choices: [
      {
        text: "Give the milk first and the medicines last, with no water flush.",
        note: "Medicines come before the milk, after a 10 ml flush.",
      },
      {
        text: "A pH of 6.5 is the feeding-page golden standard.",
        note: "The feeding pages say 5.5 or less.",
      },
      {
        text: "On the feeding pages a gastric pH of 5.5 or less is called a golden standard of placement. Flush 10 ml of water, give liquid or dissolved medicines before the milk, and finish an intermittent feed in about 30 to 60 minutes. Afterwards flush 50 or 100 ml of water as prescribed. Keep the person upright, or at least at 30 degrees, for 30 minutes. A continuous feed is checked, including the residual, every 4 hours, and the tube is flushed with 30 ml of water every 4 hours as prescribed.",
        note: "Correct. Absent bowel sounds alone do not forbid a feed, but pain, distension or tenderness must be reported. Formula is at room temperature, shaken, and in date, and the tubing is primed.",
      },
      {
        text: "Lie the person flat for the 30 minutes after the feed.",
        note: "The position is high Fowler or at least 30 degrees for 30 minutes.",
      },
    ],
    answer: 2,
    page: "33-36",
  },
  {
    id: "cp-084",
    topicId: "CP",
    topic: "Nasogastric feeding",
    scene: "One person is on BIPAP and another is breathing very fast.",
    ask: "Why does the package choose a feeding pump for some people?",
    choices: [
      {
        text: "BIPAP is a reason to give one large bolus, because the lungs protect the airway.",
        note: "The package says inflated lungs increase aspiration risk, so the feed is continuous.",
      },
      {
        text: "Intermittent feeding is banned for everyone.",
        note: "Intermittent feeding is described as the more suitable, generally recommended pattern.",
      },
      {
        text: "Respiratory distress is a reason to speed the bolus up.",
        note: "Distress is a reason to keep the person nil by mouth.",
      },
      {
        text: "Continuous feeding, for example 50 ml across 20 hours, is used with BIPAP or a ventilator because the inflated lungs push a full stomach down and raise vomiting and aspiration. Intermittent feeding, for example 250 ml five times, is generally preferred so the gut can rest. A person in respiratory distress is kept nil by mouth. Stop a feed if breathing distress, nausea or vomiting appears.",
        note: "Correct. Easy vomiting is another reason for a pump, so the stomach is not suddenly full.",
      },
    ],
    answer: 3,
    page: "36-39",
  },
  {
    id: "cp-085",
    topicId: "CP",
    topic: "Nasogastric feeding",
    scene: "You were to give 250 ml and you aspirate 125 ml of undigested milk. Classmates each pick a different action.",
    ask: "What does this critical-thinking section conclude?",
    choices: [
      {
        text: "The section says you must always discard the 125 ml.",
        note: "Discarding is only one of the five reasoned options.",
      },
      {
        text: "It does not crown one action. Refeed and skip a feed, discard and give a new 250 ml, mix 125 ml old with 125 ml new, add a full new 250 ml, or refeed and give the new 250 ml an hour later, each has a printed pro and con. Once you are registered you may use any of them if you know the reason. Adding the full new 250 ml on top of the old 125 ml risks a distended stomach and aspiration.",
        note: "Correct. This discussion does not erase the under-250, over-250 and over-500 rules on the feeding steps. Those cuts are a separate printed instruction.",
      },
      {
        text: "The section says students must add 250 ml of new milk to the 125 ml.",
        note: "That option is listed with the con of a larger volume and aspiration risk. It is not mandated.",
      },
      {
        text: "The section says every option is unsafe, so you never feed again that day.",
        note: "It says a registered nurse may use any option if the rationale is known.",
      },
    ],
    answer: 1,
    page: "39-40",
  },
  {
    id: "cp-086",
    topicId: "CP",
    topic: "Oxygen therapy",
    scene: "The prescription reads 2 litres by nasal cannula, and a classmate suggests 10 litres by the same cannula.",
    ask: "What flow rule and flowmeter check does the oxygen page print?",
    choices: [
      {
        text: "A nasal cannula is the device for 10 to 15 litres.",
        note: "Above the 1 to 6 litre cannula range, the page sends you to a face mask.",
      },
      {
        text: "Read the top of the ball as the true flow.",
        note: "The middle of the ball is the true position.",
      },
      {
        text: "A nasal cannula is for 1 to 6 litres per minute, or about 24 to 44 percent, because the anatomical dead space fills. Other flow rates go by face mask. The true reading is the middle of the ball. Point the prongs downward. An example order is 2 litres by cannula or 50 percent by face mask.",
        note: "Correct. Confirm the person and the prescription, including the bracelet, before you start.",
      },
      {
        text: "Point the prongs upward toward the eyes.",
        note: "The prongs curve downward.",
      },
    ],
    answer: 2,
    page: "43",
  },
  {
    id: "cp-087",
    topicId: "CP",
    topic: "Oxygen therapy",
    scene: "The cannula is on and the person asks if they may turn it up.",
    ask: "What safety teaching and follow-up does the page require?",
    choices: [
      {
        text: "Self-adjustment is allowed if the person feels short of breath.",
        note: "No self-adjustment is an explicit point.",
      },
      {
        text: "Recheck the saturation at the next shift, not in half an hour.",
        note: "The page says you will recheck after half an hour.",
      },
      {
        text: "Skin behind the ears is not inspected.",
        note: "The face, including the back of the ears, is checked for damage before the device goes on.",
      },
      {
        text: "Check the facial skin, including behind the ears, before you apply the cannula or mask. Explain no smoking and no self-adjustment. Prop the person up. Say you will recheck the saturation in half an hour. Chart the MEWS and report signs of suffocation. Clean your hands before and after touching the person.",
        note: "Correct. Do not leave the teaching until the end of the shift.",
      },
    ],
    answer: 3,
    page: "43-44",
  },
  {
    id: "cp-088",
    topicId: "CP",
    topic: "Airway suction",
    scene: "You can hear secretions and a nasopharyngeal suction is ordered.",
    ask: "How is the suction catheter handled?",
    choices: [
      {
        text: "Pass a Fr 12 to 14 catheter, packet unbroken and in date, about 10 to 15 cm into the nose with the suction off. Apply suction only as you withdraw, at 100 to 120 mmHg for an adult, rotating the catheter, and break the suction intermittently.",
        note: "Correct. Do not suction while you are still inserting.",
      },
      {
        text: "Suction on the way in at 150 mmHg so secretions are caught early.",
        note: "Suction is applied on the way out, at 100 to 120 mmHg, not on the way in.",
      },
      {
        text: "Insert about 25 cm and use a Fr 18 catheter as the printed size.",
        note: "The printed nasal distance is about 10 to 15 cm and the size is Fr 12 to 14.",
      },
      {
        text: "Keep the suction continuous with no rotation.",
        note: "The page wants rotation and intermittent suction.",
      },
    ],
    answer: 0,
    page: "45",
  },
  {
    id: "cp-089",
    topicId: "CP",
    topic: "Airway suction",
    scene: "You are preparing the suction trolley and your protective equipment.",
    ask: "What fluid and precautions match the page?",
    choices: [
      {
        text: "Only sterile water for injection may touch the tubing. Cold boiled water is banned.",
        note: "Cold boiled water is one of the three named irrigation fluids.",
      },
      {
        text: "A mask is optional and gloves are optional.",
        note: "Gloves and a mask are required. Gown and face shield are the optional items.",
      },
      {
        text: "Irrigate with normal saline, water, or cold boiled water. Hand hygiene, gloves and a mask are required. A gown and a face shield are optional. Check the bracelet and the order, look in the mouth and nose for blockage, prop the person up, and give a verbal report. An oximeter throughout is optional, but compare the condition before and after.",
        note: "Correct. Privacy is also provided.",
      },
      {
        text: "No report is needed if the saturation did not change.",
        note: "The page ends with a verbal report.",
      },
    ],
    answer: 2,
    page: "45",
  },
  {
    id: "cp-090",
    topicId: "CP",
    topic: "Inhaler",
    scene: "You are coaching a first metered-dose inhaler.",
    ask: "Which sequence matches the ten steps?",
    choices: [
      {
        text: "Hold the inhaler sideways, breathe in fast for 1 second, and do not pause between puffs.",
        note: "It is held upright, the breath is slow over 3 to 5 seconds, and you wait about 30 seconds.",
      },
      {
        text: "Seal the lips and also keep two finger-widths, both at the same time.",
        note: "Those are two alternative positions.",
      },
      {
        text: "Skip the rinse after a steroid inhaler.",
        note: "The page says to rinse after an inhaled steroid.",
      },
      {
        text: "Take off the cap and hold the inhaler upright. Shake it. Tip the head back and breathe out. Either hold it two finger-widths from the open mouth, or seal the lips on the mouthpiece. Press as a slow deep breath starts, over 3 to 5 seconds. Close the mouth, hold the breath for about 10 seconds, then breathe normally. Wait about 30 seconds between puffs and replace the cap. Rinse the mouth after an inhaled steroid such as QVAR, Flovent or Asmanex.",
        note: "Correct. The two mouth positions are alternatives, not two extra doses.",
      },
    ],
    answer: 3,
    page: "46",
  },
  {
    id: "cp-091",
    topicId: "CP",
    topic: "Inhaler",
    scene: "Three inhalers are due together: a steroid, an anticholinergic and a reliever.",
    ask: "What order and timing does the package print?",
    choices: [
      {
        text: "Ventolin first, the short-acting reliever. Then Atrovent, which starts in about 15 minutes and lasts 6 to 8 hours. Then Beclofort, the steroid inhaler.",
        note: "Correct. The reliever comes before the steroid, not after it.",
      },
      {
        text: "Beclofort first, then Ventolin, then Atrovent.",
        note: "The printed order is Ventolin, Atrovent, then Beclofort.",
      },
      {
        text: "Atrovent starts in about one minute and lasts one hour.",
        note: "The page says about 15 minutes to work and 6 to 8 hours of effect.",
      },
      {
        text: "Any order is acceptable because the drugs do not interact in the airway.",
        note: "The page prints a sequence, with the bronchodilator first.",
      },
    ],
    answer: 0,
    page: "46",
  },
  {
    id: "cp-092",
    topicId: "CP",
    topic: "Three-lead ECG",
    scene: "You are following the English three-lead note, not the Chinese electrode note.",
    ask: "Where do the English colours go?",
    choices: [
      {
        text: "RA is white, LA is black and LL is red, which is the Chinese note.",
        note: "Those colours are the other note on the same page. The English note is red, yellow and green.",
      },
      {
        text: "RA is red, inside the rib-cage frame just under the right clavicle near the shoulder. LA is yellow, under the left clavicle at the same level. LL is green, on the left, under the pectoral muscle at the lower edge of the left rib cage.",
        note: "Correct. Do not use the white-black-red Chinese colours for this English note.",
      },
      {
        text: "RA is yellow and LA is red.",
        note: "In the English note red is RA and yellow is LA.",
      },
      {
        text: "LL is green on the right lower ribs.",
        note: "The green electrode is on the left lower rib edge.",
      },
    ],
    answer: 1,
    page: "47",
  },
  {
    id: "cp-093",
    topicId: "CP",
    topic: "Three-lead ECG",
    scene: "You are now following the Chinese three-lead electrode note.",
    ask: "Which colours and sites does that note print?",
    choices: [
      {
        text: "RA white, LA yellow, LL green.",
        note: "Yellow and green are the English note. The Chinese LA is black and the Chinese LL is red.",
      },
      {
        text: "LL is red under the right clavicle.",
        note: "The red electrode in the Chinese note is the lower-left apex lead, not RA.",
      },
      {
        text: "All three Chinese leads are brown chest leads.",
        note: "Brown is a 12-lead chest colour, V4, not this three-lead note.",
      },
      {
        text: "RA, on the right, is white at the midpoint under the right clavicle. LA, on the left, is black at the midpoint under the left clavicle. LL, lower left, is red at the midpoint of the sternal tip between the 6th and 7th ribs, the apex.",
        note: "Correct. This is a different colour set from the English red, yellow and green note.",
      },
    ],
    answer: 3,
    page: "47",
  },
  {
    id: "cp-094",
    topicId: "CP",
    topic: "Twelve-lead ECG",
    scene: "You are placing the chest leads for a 12-lead ECG.",
    ask: "Which colours and sites match the page?",
    choices: [
      {
        text: "V1 red, 4th intercostal space, right sternal edge. V2 yellow, 4th space, left sternal edge. V3 green, between V2 and V4. V4 brown, 5th space, left mid-clavicular line. V5 black, 5th space, between V4 and V6. V6 purple, 5th space, left mid-axillary line.",
        note: "Correct. V3 is not on the same rib line as V2. It sits between V2 and V4.",
      },
      {
        text: "V1 yellow at the 5th space, left mid-axillary line.",
        note: "That site and the purple colour belong to V6. V1 is red at the 4th right sternal edge.",
      },
      {
        text: "V4 green at the 4th right sternal edge.",
        note: "Green is V3, between V2 and V4. V4 is brown at the 5th left mid-clavicular line.",
      },
      {
        text: "V2 black and V5 red.",
        note: "V2 is yellow and V5 is black.",
      },
    ],
    answer: 0,
    page: "48",
  },
  {
    id: "cp-095",
    topicId: "CP",
    topic: "Twelve-lead ECG",
    scene: "A classmate asks why a 12-lead test does not use 12 wires on the chest.",
    ask: "What does the page say about the electrodes?",
    choices: [
      {
        text: "Twelve separate chest electrodes are required, with no gel.",
        note: "The page says ten electrodes, and the pads contain gel.",
      },
      {
        text: "A recording called 12-lead uses ten electrodes. Some electrodes form a pair and that pair supplies two leads. The pads stick on and have conducting gel in the centre. The other side snaps onto the cable.",
        note: "Correct. Ten electrodes is not a missing-lead error.",
      },
      {
        text: "The cables are tied on with micropore because the pads do not stick.",
        note: "The pads are self-sticking and snap onto the cables.",
      },
      {
        text: "Each electrode can supply only one lead, so ten electrodes make a 10-lead ECG.",
        note: "The page says some electrodes form a pair that provides two leads.",
      },
    ],
    answer: 1,
    page: "48",
  },
  {
    id: "cp-096",
    topicId: "CP",
    topic: "Bladder irrigation",
    scene: "You are laying up a bladder irrigation, not a pleural tap.",
    ask: "Which items match the bladder list?",
    choices: [
      {
        text: "A 23 gauge angiocath and an Atrium chest drain as the irrigation set.",
        note: "Those are pleural-tap items. Bladder irrigation uses the Y-set and a three-way catheter.",
      },
      {
        text: "Lignocaine 5 percent and a 16 gauge long angiocath.",
        note: "Those are on the abdomen-tapping list.",
      },
      {
        text: "An S14 dressing set, a Y irrigation set with the white end rubber removed, a three-way catheter of Fr 20 or above, Hibitane which is blue or Tisept which is yellow, a bladder syringe, xylocaine jelly, and two 2-litre measuring jars.",
        note: "Correct. Also a drip stand, Hyperfix, an irrigation bedside bag, sterile gloves and an extra blue pad.",
      },
      {
        text: "Leave the white end rubber on the Y-set.",
        note: "The page says to remove the white end rubber tubing.",
      },
    ],
    answer: 2,
    page: "49",
  },
  {
    id: "cp-097",
    topicId: "CP",
    topic: "Abdomen tapping",
    scene: "The doctor is about to tap ascites.",
    ask: "What does the abdomen-tapping list put first, and which needle and anaesthetic does it name?",
    choices: [
      {
        text: "Give intravenous albumin first if it is prescribed. Use a 16 gauge long angiocath and lignocaine 5 percent, with 70 percent alcohol and povidone. If the first attempt fails, dress the site with gauze, combined gauze and Opsite, with or without Elastoplast.",
        note: "Correct. This list is not the pleural set and it is not the bladder Y-set.",
      },
      {
        text: "Start with an Atrium chest bottle and 2 percent lignocaine.",
        note: "2 percent lignocaine and the Atrium unit are on the pleural list. Abdomen tapping uses lignocaine 5 percent and a 16 gauge long angiocath.",
      },
      {
        text: "Albumin is given only after a failed tap.",
        note: "Albumin, if prescribed, is given before the tap.",
      },
      {
        text: "Use a Fr 10 Nelaton catheter as the tapping needle.",
        note: "The Nelaton is the once-only urinary catheter, not this tap.",
      },
    ],
    answer: 0,
    page: "49",
  },
  {
    id: "cp-098",
    topicId: "CP",
    topic: "Pleural tapping",
    scene: "You are setting a trolley for a pleural tap.",
    ask: "Which equipment identifies this list rather than an abdomen tap?",
    choices: [
      {
        text: "A 16 gauge long angiocath and lignocaine 5 percent as the main needle and drug.",
        note: "Those are the abdomen-tap items. Pleural tapping names a 23 gauge angiocath.",
      },
      {
        text: "A 23 gauge angiocath, a sterile blade, suture material, an Atrium disposable chest drainage unit, thoracic trocars and cannulae in three sizes, and a keyhole dressing.",
        note: "Correct. Also a mask, a gown, a safety stand, an oximeter and a suction machine.",
      },
      {
        text: "A three-way Fr 20 catheter and xylocaine jelly as the drainage method.",
        note: "That is bladder irrigation.",
      },
      {
        text: "No drainage unit is required.",
        note: "The Atrium disposable sterile chest drainage unit is on the list.",
      },
    ],
    answer: 1,
    page: "50",
  },
  {
    id: "cp-099",
    topicId: "CP",
    topic: "Pleural tapping",
    scene: "The pleural trolley is almost complete and you are checking the anaesthetic and the drain bottle.",
    ask: "Which details match the pleural list?",
    choices: [
      {
        text: "5 percent lignocaine and no water in the chamber.",
        note: "5 percent lignocaine is the abdomen-tap strength. The pleural list says 2 percent, and sterile water fills the chamber.",
      },
      {
        text: "Bare metal clamps, with the latex tubing removed.",
        note: "The blades are protected with latex tubing.",
      },
      {
        text: "The local anaesthetic named is 2 percent lignocaine. Sterile water is used to fill the chamber. Two pairs of clamps have their blades protected with latex tubing. A disinfectant example is 10 percent povidone iodine.",
        note: "Correct. There is also a 5 ml or 10 ml syringe, alcohol preps, adhesive tape, specimen bottles, and a safety pin as an optional item.",
      },
      {
        text: "1 percent povidone iodine is the printed example.",
        note: "The example is 10 percent povidone iodine solution.",
      },
    ],
    answer: 2,
    page: "50",
  },
  {
    id: "cp-100",
    topicId: "CP",
    topic: "Tapping trolleys",
    scene: "Three trolleys are labelled bladder irrigation, abdomen tap and pleural tap.",
    ask: "Which item belongs only with the pleural trolley?",
    choices: [
      {
        text: "Xylocaine jelly and a bladder syringe.",
        note: "Those are bladder-irrigation items.",
      },
      {
        text: "A 16 gauge long angiocath.",
        note: "That needle is on the abdomen-tap list. The pleural angiocath is 23 gauge.",
      },
      {
        text: "Hyperfix and two 2-litre jars.",
        note: "Those are on the bladder-irrigation list.",
      },
      {
        text: "Sterile water to fill the chamber of a chest drainage unit.",
        note: "Correct. Bladder irrigation is identified by the Y-set, xylocaine jelly and a three-way catheter of Fr 20 or above. Abdomen tapping is identified by intravenous albumin first, a 16 gauge long angiocath and lignocaine 5 percent.",
      },
    ],
    answer: 3,
    page: "49-50",
  },
  {
    id: "drug-001",
    topicId: "DRUG",
    topic: "ACE inhibitor",
    scene: "A nurse looks at Zestril, Capoten, Altace, and Renitec on an antihypertensive chart.",
    ask: "Which brand-to-generic set matches the note for this -pril group?",
    choices: [
      {
        text: "Zestril is lisinopril, Capoten is captopril, Altace is ramipril, and Renitec is enalapril, all ACE inhibitors.",
        note: "Correct. As the note writes it, these -pril drugs are angiotensin-converting enzyme inhibitors: Zestril (lisinopril), Capoten (captopril/acepril), Altace (ramipril), and Renitec (enalapril).",
      },
      {
        text: "Zestril is captopril, Capoten is enalapril, Altace is lisinopril, and Renitec is ramipril.",
        note: "No. Those generics are all in the ACE inhibitor list, but the note pairs them with different brands.",
      },
      {
        text: "Zestril is losartan, Capoten is valsartan, Altace is candesartan, and Renitec is irbesartan.",
        note: "No. Those -sartan names are the note's angiotensin II receptor blockers, not the -pril ACE inhibitors.",
      },
      {
        text: "Zestril is prazosin, Capoten is terazosin, Altace is methyldopa, and Renitec is hydralazine.",
        note: "No. Those drugs are elsewhere on the antihypertensive page, not the ACE inhibitor pairs.",
      },
    ],
    answer: 0,
    page: "1",
  },
  {
    id: "drug-002",
    topicId: "DRUG",
    topic: "Centrally acting alpha-2 agonist",
    scene: "A nurse looks at Aldomet on a chart for hypertension in pregnancy.",
    ask: "How does the note class Aldomet and its pregnancy use?",
    choices: [
      {
        text: "Aldomet is hydralazine, classed only as a hydrazinophthalazine vasodilator.",
        note: "No. Hydralazine is Apresoline on this page, not Aldomet.",
      },
      {
        text: "Aldomet is a selective alpha-1 blocker used for BPH and hypertension.",
        note: "No. That alpha-1 line belongs to the -osin drugs prazosin and terazosin.",
      },
      {
        text: "Aldomet is an ARB that blocks angiotensin II and reduces aldosterone.",
        note: "No. Blocking angiotensin II and reducing aldosterone is the note's ARB mechanism, not methyldopa.",
      },
      {
        text: "Aldomet is methyldopa, a centrally acting alpha-2 adrenergic agonist, written as especially suitable for hypertension in pregnancy.",
        note: "Correct. As the note writes it, Aldomet (methyldopa) is a centrally acting alpha-2 agonist for moderate to severe hypertension, especially pregnancy hypertension such as gestational hypertension and pre-eclampsia.",
      },
    ],
    answer: 3,
    page: "1",
  },
  {
    id: "drug-003",
    topicId: "DRUG",
    topic: "Alpha-1 blocker",
    scene: "A nurse looks at Minipress and Hytrin on a chart for blood pressure and prostate symptoms.",
    ask: "What suffix, generics, and uses does the note give these alpha-1 blockers?",
    choices: [
      {
        text: "The suffix is -olol; Minipress is metoprolol and Hytrin is atenolol.",
        note: "No. Metoprolol and atenolol are the note's selective beta-1 blockers, not these brands.",
      },
      {
        text: "The suffix is -pril; Minipress is lisinopril and Hytrin is captopril.",
        note: "No. Lisinopril and captopril are ACE inhibitors under Zestril and Capoten.",
      },
      {
        text: "The suffix is -osin; Minipress is prazosin and Hytrin is terazosin, selective alpha-1 blockers for BPH and hypertension.",
        note: "Correct. As the note writes it, alpha-1 adrenergic antagonists end in -osin; Minipress is prazosin and Hytrin is terazosin for BPH and hypertension.",
      },
      {
        text: "The suffix is -pine; Minipress is nifedipine and Hytrin is amlodipine.",
        note: "No. Nifedipine and amlodipine are dihydropyridine calcium blockers on this page.",
      },
    ],
    answer: 2,
    page: "1",
  },
  {
    id: "drug-004",
    topicId: "DRUG",
    topic: "Beta blocker",
    scene: "A nurse looks at Betaloc, Tenormin, Inderal, and Dilatrend on a beta-blocker chart.",
    ask: "How does the note split selective and non-selective agents here?",
    choices: [
      {
        text: "Selective agents are propranolol and carvedilol; non-selective agents are metoprolol and atenolol.",
        note: "No. The note puts propranolol and carvedilol on the non-selective line, not the selective beta-1 line.",
      },
      {
        text: "Selective beta-1 blockers are Betaloc (metoprolol) and Tenormin (atenolol); non-selective blockers are Inderal (propranolol) and Dilatrend (carvedilol).",
        note: "Correct. As the note writes it, -olol drugs divide into selective beta-1 blockers metoprolol and atenolol, and non-selective blockers propranolol and carvedilol.",
      },
      {
        text: "All four are non-DHP calcium blockers, and Dilatrend is diltiazem.",
        note: "No. Diltiazem is Herbesser/Cartia, a non-DHP calcium blocker, not carvedilol.",
      },
      {
        text: "Betaloc is verapamil and Tenormin is nifedipine.",
        note: "No. Verapamil is Isoptin and nifedipine is Adalat in the calcium-blocker section.",
      },
    ],
    answer: 1,
    page: "1",
  },
  {
    id: "drug-005",
    topicId: "DRUG",
    topic: "Calcium channel blocker",
    scene: "A nurse looks at Norvasc and Isoptin on the same cardiac chart.",
    ask: "How does the note contrast dihydropyridine and non-dihydropyridine calcium blockers?",
    choices: [
      {
        text: "DHPs such as nifedipine, amlodipine, nimodipine, and felodipine end in -pine and act mainly on vessels; non-DHPs verapamil and diltiazem act more on the heart.",
        note: "Correct. As the note writes it, -pine DHPs act mainly on vascular smooth muscle, while non-DHPs verapamil (Isoptin) and diltiazem (Herbesser/Cartia) act more on the heart, slowing rate and weakening contraction.",
      },
      {
        text: "The -pine suffix marks non-DHPs, which act mainly on the heart, and verapamil is a DHP.",
        note: "No. The note gives -pine to DHPs and places verapamil with the non-DHPs.",
      },
      {
        text: "Norvasc is a non-DHP and Isoptin is an ACE inhibitor ending in -pril.",
        note: "No. Norvasc is amlodipine, a DHP, and -pril is the ACE inhibitor suffix.",
      },
      {
        text: "Both groups block angiotensin II and reduce aldosterone.",
        note: "No. That mechanism sentence is written for ARBs ending in -sartan.",
      },
    ],
    answer: 0,
    page: "1",
  },
  {
    id: "drug-006",
    topicId: "DRUG",
    topic: "Vasodilator and ARB",
    scene: "A nurse looks at Apresoline beside losartan on an antihypertensive chart.",
    ask: "Which statement matches how the note classifies these drugs?",
    choices: [
      {
        text: "Apresoline is lisinopril, and -sartan drugs are ACE inhibitors ending in -pril.",
        note: "No. Lisinopril is Zestril, an ACE inhibitor; -sartan is the ARB suffix.",
      },
      {
        text: "Apresoline is verapamil, and losartan is a non-DHP calcium blocker.",
        note: "No. Verapamil is Isoptin, a non-DHP; losartan is listed with the ARBs.",
      },
      {
        text: "Both are selective alpha-1 blockers ending in -osin for BPH.",
        note: "No. The -osin alpha-1 blockers on this page are prazosin and terazosin.",
      },
      {
        text: "Apresoline is hydralazine, a hydrazinophthalazine vasodilator; -sartan drugs such as losartan, valsartan, candesartan, and irbesartan are ARBs that block angiotensin II, dilate vessels, and reduce aldosterone.",
        note: "Correct. As the note writes it, Apresoline (hydralazine) is a hydrazinophthalazine antihypertensive vasodilator, and ARBs ending in -sartan block angiotensin II, cause vasodilation, and reduce aldosterone.",
      },
    ],
    answer: 3,
    page: "1",
  },
  {
    id: "drug-007",
    topicId: "DRUG",
    topic: "Nitrate",
    scene: "A nurse looks at Isordil, Elantan, and Angised on an antianginal chart.",
    ask: "Which nitrate pairing does the note give?",
    choices: [
      {
        text: "Isordil is glyceryl trinitrate, Elantan is dipyridamole, and Angised is digoxin.",
        note: "No. Dipyridamole is Persantin and digoxin is Lanoxin, not these nitrate brands.",
      },
      {
        text: "All three are beta blockers, and Elantan is metoprolol.",
        note: "No. Metoprolol is Betaloc, a beta blocker, not a nitrate brand.",
      },
      {
        text: "Isordil is isosorbide dinitrate, Elantan is isosorbide mononitrate, and Angised TNG is glyceryl trinitrate.",
        note: "Correct. As the note writes it, these are antianginal nitrate vasodilators: Isordil (isosorbide dinitrate), Elantan (isosorbide mononitrate), and Angised TNG (glyceryl trinitrate).",
      },
      {
        text: "Isordil is amiodarone, Elantan is lignocaine, and Angised is phenytoin.",
        note: "No. Those three are antidysrhythmics (Cordarone, Xylocaine, and Dilantin), not nitrates.",
      },
    ],
    answer: 2,
    page: "2",
  },
  {
    id: "drug-008",
    topicId: "DRUG",
    topic: "Antiplatelet",
    scene: "A nurse looks at Persantin on a chart beside antianginal medicines.",
    ask: "What does the note call Persantin on this page?",
    choices: [
      {
        text: "Digoxin, a cardiac glycoside that inhibits Na/K-ATPase.",
        note: "No. That mechanism belongs to Lanoxin (digoxin), not Persantin.",
      },
      {
        text: "Dipyridamole, listed as an antianginal antiplatelet.",
        note: "Correct. As the note writes it, Persantin is dipyridamole and is classed as antianginal and antiplatelet.",
      },
      {
        text: "Phenytoin, a hydantoin anticonvulsant and antidysrhythmic.",
        note: "No. Phenytoin is Dilantin in the antidysrhythmic list.",
      },
      {
        text: "Glyceryl trinitrate, a nitrate vasodilator.",
        note: "No. Glyceryl trinitrate is Angised TNG, a nitrate, not Persantin.",
      },
    ],
    answer: 1,
    page: "2",
  },
  {
    id: "drug-009",
    topicId: "DRUG",
    topic: "Cardiac glycoside",
    scene: "A nurse looks at Lanoxin on a chart for atrial fibrillation and heart failure.",
    ask: "What mechanism and uses does the note give Lanoxin?",
    choices: [
      {
        text: "Digoxin inhibits Na/K-ATPase, raises calcium inside heart-muscle cells, and strengthens contraction; uses written are atrial fibrillation, atrial flutter, and congestive heart failure.",
        note: "Correct. As the note writes it, Lanoxin (digoxin) inhibits Na/K-ATPase, increases intracellular calcium, and strengthens contraction for atrial fibrillation, atrial flutter, and congestive heart failure.",
      },
      {
        text: "It is a class III antidysrhythmic and a noncompetitive alpha and beta antagonist.",
        note: "No. That class III line is written for Cordarone (amiodarone).",
      },
      {
        text: "It is a local anaesthetic antidysrhythmic also called lignocaine.",
        note: "No. Lignocaine/lidocaine is Xylocaine, not Lanoxin.",
      },
      {
        text: "It blocks angiotensin II binding and reduces aldosterone.",
        note: "No. That is the ARB mechanism on the antihypertensive page.",
      },
    ],
    answer: 0,
    page: "2",
  },
  {
    id: "drug-010",
    topicId: "DRUG",
    topic: "Antidysrhythmic",
    scene: "A nurse looks at Cordarone, Xylocaine, and Dilantin on an antidysrhythmic chart.",
    ask: "Which class line matches the note?",
    choices: [
      {
        text: "Cordarone is digoxin, Xylocaine is verapamil, and Dilantin is diltiazem.",
        note: "No. Digoxin is Lanoxin; verapamil and diltiazem are the non-DHP calcium blockers Isoptin and Herbesser.",
      },
      {
        text: "All three are nitrate vasodilators.",
        note: "No. The nitrate brands on this page are Isordil, Elantan, and Angised.",
      },
      {
        text: "Cordarone is a -pine DHP calcium blocker and Dilantin is an ARB ending in -sartan.",
        note: "No. DHPs and ARBs are separate classes; these three names are antidysrhythmics.",
      },
      {
        text: "Cordarone is amiodarone, a class III antidysrhythmic; Xylocaine is lignocaine/lidocaine, a local anaesthetic and antidysrhythmic; Dilantin is phenytoin, a hydantoin anticonvulsant and antidysrhythmic.",
        note: "Correct. As the note writes it, amiodarone is a class III antidysrhythmic and noncompetitive alpha and beta antagonist, lignocaine/lidocaine is a local anaesthetic antidysrhythmic, and phenytoin is the hydantoin antidysrhythmic.",
      },
    ],
    answer: 3,
    page: "2",
  },
  {
    id: "drug-011",
    topicId: "DRUG",
    topic: "Antacid",
    scene: "A nurse looks at Gelusil and Triact on a gastric chart.",
    ask: "Which ingredients and roles does the note give these mixtures?",
    choices: [
      {
        text: "Both are proton pump inhibitors ending in -zole.",
        note: "No. The -zole PPI brands on this page include Losec, Pariet, Pantaloc, Nexium, and Takepron.",
      },
      {
        text: "Both are H2 blockers, and simethicone is ranitidine.",
        note: "No. Ranitidine is Zantac, an H2-receptor antagonist ending in -dine.",
      },
      {
        text: "Both contain aluminium hydroxide, magnesium hydroxide, and simethicone; aluminium hydroxide is an antacid, magnesium hydroxide is an antacid and laxative, and simethicone is an anti-flatulent.",
        note: "Correct. As the note writes it, Gelusil and Triact combine aluminium hydroxide, magnesium hydroxide, and simethicone, with those antacid, laxative, and anti-flatulent roles.",
      },
      {
        text: "Gelusil is sucralfate and Triact is metoclopramide.",
        note: "No. Sucralfate is Carafate/Sulcrate, and metoclopramide is Maxolon.",
      },
    ],
    answer: 2,
    page: "3",
  },
  {
    id: "drug-012",
    topicId: "DRUG",
    topic: "Antacid",
    scene: "A nurse looks at Mucaine on a chart for stomach burning.",
    ask: "What does the note say Mucaine contains, and for what symptom?",
    choices: [
      {
        text: "It is rabeprazole, a proton pump inhibitor.",
        note: "No. Rabeprazole is Pariet, a PPI, not Mucaine.",
      },
      {
        text: "Aluminium hydroxide, magnesium hydroxide, and oxethazaine, a local anaesthetic, for stomach pain and heartburn from too much acid.",
        note: "Correct. As the note writes it, Mucaine is an antacid with aluminium hydroxide, magnesium hydroxide, and oxethazaine for 胃酸過多引起之胃痛及胃灼熱.",
      },
      {
        text: "It is sucralfate, listed only as an ulcer protectant.",
        note: "No. The protectant named here is Carafate/Sulcrate (sucralfate).",
      },
      {
        text: "It is bismuth subsalicylate for mild diarrhoea.",
        note: "No. Bismuth subsalicylate is the current identity of Kaopectate/Pepto-Bismol.",
      },
    ],
    answer: 1,
    page: "3",
  },
  {
    id: "drug-013",
    topicId: "DRUG",
    topic: "Proton pump inhibitor",
    scene: "A nurse looks at Pariet, Losec, Pantaloc, Nexium, and Takepron on an ulcer chart.",
    ask: "Which proton pump inhibitor pairs match the note?",
    choices: [
      {
        text: "Pariet is rabeprazole, Losec is omeprazole, Pantaloc is pantoprazole, Nexium is esomeprazole, and Takepron is lansoprazole.",
        note: "Correct. As the note writes it, proton pump inhibitors end in -zole: Pariet (rabeprazole), Losec (omeprazole), Pantaloc (pantoprazole), Nexium (esomeprazole), and Takepron (lansoprazole).",
      },
      {
        text: "Pariet is cimetidine, Losec is famotidine, and Pantaloc is ranitidine.",
        note: "No. Cimetidine, famotidine, and ranitidine are the H2-receptor antagonists ending in -dine.",
      },
      {
        text: "All five end in -dine and are H2 blockers.",
        note: "No. The note groups these brands under proton pump inhibitors with the suffix -zole.",
      },
      {
        text: "Pariet is sucralfate, Nexium is loperamide, and Takepron is bisacodyl.",
        note: "No. Those are a protectant, an antidiarrhoeal, and a stimulant laxative, not this PPI list.",
      },
    ],
    answer: 0,
    page: "3",
  },
  {
    id: "drug-014",
    topicId: "DRUG",
    topic: "H2-receptor antagonist",
    scene: "A nurse looks at Tagamet, Pepcidine, and Zantac on an ulcer chart.",
    ask: "Which duration and recall line matches the note?",
    choices: [
      {
        text: "All three are proton pump inhibitors ending in -zole, and none is described as recalled.",
        note: "No. The -zole drugs are the PPI list; these -dine drugs are H2 blockers.",
      },
      {
        text: "Pepcidine is omeprazole and Tagamet is sucralfate.",
        note: "No. Omeprazole is Losec and sucralfate is Carafate/Sulcrate.",
      },
      {
        text: "Tagamet is long-acting and famotidine is the drug recalled for NDMA.",
        note: "No. The note calls cimetidine short-acting and ties the NDMA recall to original ranitidine.",
      },
      {
        text: "Tagamet (cimetidine) is short-acting, Pepcidine (famotidine) is long-acting, and original Zantac (ranitidine) was recalled because of NDMA carcinogen risk.",
        note: "Correct. As the note writes it, cimetidine is short-acting, famotidine is long-acting, and original ranitidine (Zantac) was recalled for a carcinogen (NDMA).",
      },
    ],
    answer: 3,
    page: "3",
  },
  {
    id: "drug-015",
    topicId: "DRUG",
    topic: "Antiemetic",
    scene: "A nurse looks at Holopon and Maxolon on a nausea chart.",
    ask: "How does the note separate these two antiemetic names?",
    choices: [
      {
        text: "Both are stimulant laxatives, and Maxolon is senna.",
        note: "No. Senna is Senokot, a stimulant laxative, not metoclopramide.",
      },
      {
        text: "Holopon is prochlorperazine and Maxolon is promethazine.",
        note: "No. Prochlorperazine is Stemetil and promethazine is Phenergan/Phensedyl.",
      },
      {
        text: "Holopon/Buscopan is hyoscine butylbromide, an anticholinergic antispasmodic; Maxolon is metoclopramide, a dopaminergic blocker and GI stimulant.",
        note: "Correct. As the note writes it, Buscopan is hyoscine butylbromide (anticholinergic, antimuscarinic, antispasmodic) and Maxolon is metoclopramide, a dopaminergic blocker and GI stimulant.",
      },
      {
        text: "Holopon is sucralfate and Maxolon is omeprazole.",
        note: "No. Sucralfate is the ulcer protectant and omeprazole is Losec.",
      },
    ],
    answer: 2,
    page: "4",
  },
  {
    id: "drug-016",
    topicId: "DRUG",
    topic: "Antiemetic",
    scene: "A nurse looks at Stemetil and Phenergan on an antiemetic chart.",
    ask: "Which pairing matches the note?",
    choices: [
      {
        text: "Stemetil is metoclopramide and Phenergan is hyoscine.",
        note: "No. Metoclopramide is Maxolon and hyoscine butylbromide is Buscopan.",
      },
      {
        text: "Stemetil is prochlorperazine, an antiemetic, antipsychotic, and dopaminergic blocker; Phenergan/Phensedyl is promethazine, an H1 antihistamine, antiemetic, and phenothiazine.",
        note: "Correct. As the note writes it, Stemetil is prochlorperazine maleate and Phenergan is promethazine HCl, both with antiemetic and dopaminergic-blocker lines.",
      },
      {
        text: "Both are proton pump inhibitors ending in -zole.",
        note: "No. The -zole antiulcer drugs are a different GI group.",
      },
      {
        text: "Stemetil is loperamide and Phenergan is lactulose.",
        note: "No. Loperamide is Imodium and lactulose is Duphalac.",
      },
    ],
    answer: 1,
    page: "4",
  },
  {
    id: "drug-017",
    topicId: "DRUG",
    topic: "Laxative",
    scene: "A nurse looks at Dulcolax, Duphalac, Metamucil, and Senokot on a bowel chart.",
    ask: "Which laxative classes match the note?",
    choices: [
      {
        text: "Dulcolax (bisacodyl) and Senokot (senna) are stimulant laxatives; Duphalac (lactulose) is hyperosmotic and an ammonia detoxicant; Metamucil (psyllium) is bulk-forming.",
        note: "Correct. As the note writes it, bisacodyl and senna are stimulant laxatives, lactulose is a hyperosmotic laxative and ammonia detoxicant, and psyllium is bulk-forming.",
      },
      {
        text: "All four are opioid antidiarrhoeals.",
        note: "No. The antidiarrhoeals named nearby are loperamide, diphenoxylate with atropine, and bismuth subsalicylate.",
      },
      {
        text: "Lactulose is bulk-forming fibre and psyllium is the ammonia detoxicant.",
        note: "No. The note gives bulk-forming to psyllium and the ammonia-detoxicant line to lactulose.",
      },
      {
        text: "Bisacodyl is bismuth subsalicylate and senna is loperamide.",
        note: "No. Bismuth is Kaopectate/Pepto-Bismol and loperamide is Imodium.",
      },
    ],
    answer: 0,
    page: "4-5",
  },
  {
    id: "drug-018",
    topicId: "DRUG",
    topic: "Antidiarrhoeal",
    scene: "A nurse looks at Imodium, Lomotil, and Kaopectate on a diarrhoea chart.",
    ask: "Which identities match the note?",
    choices: [
      {
        text: "Imodium is senna, Lomotil is lactulose, and Kaopectate is psyllium.",
        note: "No. Senna, lactulose, and psyllium are the laxatives, not these antidiarrhoeals.",
      },
      {
        text: "All three are proton pump inhibitors ending in -zole.",
        note: "No. PPIs are the -zole antiulcer group.",
      },
      {
        text: "Kaopectate is still written as a kaolin-pectin mixture, and Imodium is sucralfate.",
        note: "No. The note says Kaopectate is no longer kaolin-pectin, and sucralfate is Carafate.",
      },
      {
        text: "Imodium is loperamide; Lomotil is diphenoxylate with atropine; Kaopectate, also named Pepto-Bismol, is now bismuth subsalicylate and is no longer a kaolin-pectin mixture.",
        note: "Correct. As the note writes it, Imodium is loperamide, Lomotil is diphenoxylate with atropine, and Kaopectate/Pepto-Bismol is bismuth subsalicylate, not the old kaolin-pectin mix.",
      },
    ],
    answer: 3,
    page: "4",
  },
  {
    id: "drug-019",
    topicId: "DRUG",
    topic: "Hepatic protector and anorectal preparation",
    scene: "A nurse looks at Essentiale, Anusol, Faktu, and Carafate on a GI chart.",
    ask: "Which roles match the note?",
    choices: [
      {
        text: "All four are stimulant laxatives.",
        note: "No. Stimulant laxatives in this section are bisacodyl and senna.",
      },
      {
        text: "Essentiale is loperamide, Anusol is omeprazole, and Carafate is senna.",
        note: "No. Loperamide, omeprazole, and senna are different GI drugs in the note.",
      },
      {
        text: "Essentiale (polyenylphosphatidylcholine) is a hepatic protector; Anusol and Faktu are anorectal preparations; Carafate/Sulcrate is sucralfate, an ulcer protectant.",
        note: "Correct. As the note writes it, Essentiale is PPC for liver protection, Anusol (zinc oxide, benzyl benzoate) and Faktu (policresulen, cinchocaine) are anorectal preparations, and Carafate/Sulcrate is sucralfate.",
      },
      {
        text: "Carafate is bismuth subsalicylate and Essentiale is a proton pump inhibitor.",
        note: "No. Bismuth is Kaopectate/Pepto-Bismol, and PPIs are the separate -zole list.",
      },
    ],
    answer: 2,
    page: "3-4",
  },
  {
    id: "drug-020",
    topicId: "DRUG",
    topic: "Laxative",
    scene: "A nurse looks at the comparison table for Metamucil and Duphalac.",
    ask: "How does that table contrast psyllium and lactulose?",
    choices: [
      {
        text: "Both are stimulant laxatives with onset in 15 to 60 minutes.",
        note: "No. The 15-60 minute line is the bisacodyl suppository, and these two are not both stimulants.",
      },
      {
        text: "Psyllium is a water-soluble fibre that forms a gel and increases stool bulk, with onset about 12 to 72 hours; lactulose is an osmotic laxative for constipation and hepatic encephalopathy, with onset about 24 to 48 hours.",
        note: "Correct. As the note writes it, psyllium absorbs water to form a gel and increase stool volume over 12-72 hours, while lactulose draws water into the bowel and is also written to reduce ammonia absorption in hepatic encephalopathy.",
      },
      {
        text: "Lactulose is the bulk-forming fibre and psyllium is the drug written for hepatic encephalopathy.",
        note: "No. The table gives hepatic encephalopathy to lactulose and the gel-forming fibre line to psyllium.",
      },
      {
        text: "Psyllium onset is 6 to 12 hours and the table lists galactosaemia under psyllium.",
        note: "No. The 6-12 hour oral onset and the galactosaemia line are written with the other laxatives, not as the psyllium onset.",
      },
    ],
    answer: 1,
    page: "5",
  },
  {
    id: "drug-021",
    topicId: "DRUG",
    topic: "Laxative",
    scene: "A nurse looks at bisacodyl and senna on a pre-procedure bowel chart.",
    ask: "What type and timing does the table give these two laxatives?",
    choices: [
      {
        text: "Both are stimulant laxatives for constipation and bowel emptying; oral onset is about 6 to 12 hours, bisacodyl suppositories are 15 to 60 minutes, and continuous use beyond 7 days is not advised.",
        note: "Correct. As the note writes it, bisacodyl and senna are stimulant laxatives, oral onset is 6-12 hours, a bisacodyl suppository is 15-60 minutes, and use is short-term, not more than 7 days in a row.",
      },
      {
        text: "Both are bulk-forming fibres that the table calls safe for daily long-term use.",
        note: "No. Daily long-term use is the psyllium column, not the stimulant columns.",
      },
      {
        text: "Senna is osmotic and is the laxative written for hepatic encephalopathy.",
        note: "No. The osmotic laxative for hepatic encephalopathy in the table is lactulose.",
      },
      {
        text: "Bisacodyl is an antidiarrhoeal that slows the gut, like loperamide.",
        note: "No. Loperamide is Imodium, an antidiarrhoeal, not the stimulant bisacodyl.",
      },
    ],
    answer: 0,
    page: "5",
  },
  {
    id: "drug-022",
    topicId: "DRUG",
    topic: "Anticholinergic bronchodilator",
    scene: "A nurse looks at Atrovent and Spiriva on a respiratory chart.",
    ask: "How does the note distinguish these anticholinergic bronchodilators?",
    choices: [
      {
        text: "Both are short-acting beta-2 agonists, and Spiriva is salbutamol.",
        note: "No. Salbutamol is Ventolin, a short-acting beta-2 agonist, not tiotropium.",
      },
      {
        text: "Atrovent is an inhaled corticosteroid and Spiriva is theophylline.",
        note: "No. Inhaled corticosteroids here include beclomethasone and budesonide; theophylline is Theodur/Nuelin.",
      },
      {
        text: "Spiriva is the short-acting agent and Atrovent is the 24-hour drug.",
        note: "No. The note calls ipratropium short-acting and tiotropium the long-acting 24-hour drug.",
      },
      {
        text: "Atrovent is ipratropium, a short-acting muscarinic antagonist; Spiriva is tiotropium, a long-acting muscarinic antagonist written as bronchodilating for 24 hours.",
        note: "Correct. As the note writes it, ipratropium is a SAMA that blocks M3 receptors, and tiotropium is a LAMA with bronchodilation lasting 24 hours.",
      },
    ],
    answer: 3,
    page: "6",
  },
  {
    id: "drug-023",
    topicId: "DRUG",
    topic: "Short-acting beta-2 agonist",
    scene: "A nurse looks at Ventolin, Xopenex, and Bricanyl on an asthma chart.",
    ask: "Which description matches the note?",
    choices: [
      {
        text: "They are long-acting muscarinic antagonists.",
        note: "No. The long-acting muscarinic antagonist in this section is tiotropium (Spiriva).",
      },
      {
        text: "Ventolin is ipratropium, Xopenex is fluticasone, and Bricanyl is budesonide.",
        note: "No. Ipratropium is Atrovent, and fluticasone and budesonide are corticosteroid names here.",
      },
      {
        text: "All three are short-acting beta-2 agonists: Ventolin is salbutamol, Xopenex is levosalbutamol, and Bricanyl is terbutaline, also written as a tocolytic.",
        note: "Correct. As the note writes it, Ventolin, Xopenex, and Bricanyl are SABAs; Xopenex is said to have fewer cardiac effects, Ventolin is mainly for acute attacks, and terbutaline is also a tocolytic (子宮抑制劑) written as suiting longer maintenance.",
      },
      {
        text: "Bricanyl is a xanthine that inhibits phosphodiesterase.",
        note: "No. The xanthine PDE inhibitor in the note is theophylline.",
      },
    ],
    answer: 2,
    page: "6",
  },
  {
    id: "drug-024",
    topicId: "DRUG",
    topic: "Inhaled corticosteroid",
    scene: "A nurse looks at Seretide, Becloforte, and Pulmicort on an inhaler chart.",
    ask: "What does the note say these inhalers contain?",
    choices: [
      {
        text: "Becloforte is tiotropium and Pulmicort is salbutamol.",
        note: "No. Tiotropium is Spiriva and salbutamol is Ventolin.",
      },
      {
        text: "Seretide is salmeterol (Serevent), a LABA, plus fluticasone; Becloforte/Beclovent is beclomethasone and Pulmicort is budesonide, both inhaled corticosteroids.",
        note: "Correct. As the note writes it, Seretide combines the LABA salmeterol with fluticasone, and beclomethasone and budesonide are inhaled glucocorticoids.",
      },
      {
        text: "All three are xanthines that inhibit phosphodiesterase.",
        note: "No. The xanthine bronchodilator named here is theophylline.",
      },
      {
        text: "Seretide is ipratropium plus theophylline.",
        note: "No. Ipratropium is Atrovent and theophylline is Theodur/Nuelin, not the Seretide pair.",
      },
    ],
    answer: 1,
    page: "6",
  },
  {
    id: "drug-025",
    topicId: "DRUG",
    topic: "Xanthine bronchodilator",
    scene: "A nurse looks at Theodur on a chart for wheeze.",
    ask: "What class and mechanism does the note give theophylline?",
    choices: [
      {
        text: "Theodur/Nuelin SR is theophylline, a xanthine bronchodilator and spasmolytic that inhibits phosphodiesterase.",
        note: "Correct. As the note writes it, theophylline is a xanthine (黃嘌呤類) and PDE inhibitor used as a bronchodilator for asthma, COPD, and bronchospasm.",
      },
      {
        text: "It is a long-acting muscarinic antagonist that blocks M3 receptors for 24 hours.",
        note: "No. That 24-hour M3 block is the tiotropium line.",
      },
      {
        text: "It is an inhaled glucocorticoid like budesonide.",
        note: "No. Budesonide is Pulmicort, an inhaled corticosteroid.",
      },
      {
        text: "It is a short-acting beta-2 agonist like salbutamol.",
        note: "No. Salbutamol is Ventolin, a SABA, not the xanthine.",
      },
    ],
    answer: 0,
    page: "6",
  },
  {
    id: "drug-026",
    topicId: "DRUG",
    topic: "Corticosteroid",
    scene: "A nurse looks at a corticosteroid teaching note beside prednisolone.",
    ask: "Which effects does this respiratory page list for corticosteroids?",
    choices: [
      {
        text: "They are written only as mucolytics that break mucus polysaccharides.",
        note: "No. Breaking mucus polysaccharides is the bromhexine line on this page.",
      },
      {
        text: "They block M3 receptors and are called SAMA drugs.",
        note: "No. SAMA is the ipratropium description.",
      },
      {
        text: "They are opioid antitussives acting on the cough centre.",
        note: "No. The opioid cough drug in the next pages is codeine; dextromethorphan is the non-opioid.",
      },
      {
        text: "Adrenal suppression through the HPA axis, osteoporosis, slowed growth in children, and glaucoma or cataract.",
        note: "Correct. As the note writes it, corticosteroids can suppress the HPA axis, weaken bone, slow growth in children, and raise the chance of glaucoma and cataract.",
      },
    ],
    answer: 3,
    page: "7",
  },
  {
    id: "drug-027",
    topicId: "DRUG",
    topic: "Mucolytic",
    scene: "A nurse looks at Bisolvon and Fluimucil on a cough chart.",
    ask: "What does the note say these two do?",
    choices: [
      {
        text: "Both are opioid antitussives, and Fluimucil is codeine.",
        note: "No. Codeine is the opioid antitussive; Fluimucil is N-acetylcysteine.",
      },
      {
        text: "Bisolvon is salbutamol and Fluimucil is ipratropium.",
        note: "No. Salbutamol and ipratropium are bronchodilators, not these mucolytic names.",
      },
      {
        text: "Bisolvon is bromhexine, a mucolytic for sputum that is hard to clear; Fluimucil is N-acetylcysteine, written for thick sputum and as a paracetamol-overdose antidote.",
        note: "Correct. As the note writes it, bromhexine is a mucolytic, and NAC (Fluimucil) is both a mucolytic and a paracetamol-overdose antidote.",
      },
      {
        text: "Fluimucil is only a nasal decongestant and has no antidote line.",
        note: "No. The nasal decongestant in the Actifed note is pseudoephedrine; NAC has an antidote line.",
      },
    ],
    answer: 2,
    page: "7",
  },
  {
    id: "drug-028",
    topicId: "DRUG",
    topic: "Expectorant and non-opioid antitussive",
    scene: "A nurse looks at MES and Actifed compound on a cold-symptom chart.",
    ask: "Which component roles match the note?",
    choices: [
      {
        text: "MES is codeine and Actifed is a LABA plus steroid inhaler.",
        note: "No. Codeine is a separate opioid antitussive, and the LABA-steroid inhaler is Seretide.",
      },
      {
        text: "MES is an expectorant stimulant with ammonia carbonate and ipecacuanha; Actifed compound pairs dextromethorphan, pseudoephedrine, and triprolidine.",
        note: "Correct. As the note writes it, MES stimulates cough or secretions, and Actifed compound is dextromethorphan (non-opioid antitussive), pseudoephedrine (nasal decongestant), and triprolidine (antihistamine).",
      },
      {
        text: "Dextromethorphan is an opioid, and pseudoephedrine is a mucolytic like bromhexine.",
        note: "No. The note calls dextromethorphan a non-opioid antitussive and pseudoephedrine a decongestant.",
      },
      {
        text: "Triprolidine is a xanthine PDE inhibitor.",
        note: "No. The xanthine PDE inhibitor is theophylline, not triprolidine.",
      },
    ],
    answer: 1,
    page: "7",
  },
  {
    id: "drug-029",
    topicId: "DRUG",
    topic: "Non-opioid antitussive",
    scene: "A nurse looks at dextromethorphan on a non-opioid cough chart.",
    ask: "How does the note describe its mechanism?",
    choices: [
      {
        text: "A non-opioid antitussive that suppresses the medullary cough centre and reduces the cough reflex.",
        note: "Correct. As the note writes it, dextromethorphan suppresses the medullary cough centre (延腦咳嗽中樞) and is not classed as an opioid antitussive.",
      },
      {
        text: "It binds opioid receptors and is the opioid antitussive codeine.",
        note: "No. Codeine is the opioid antitussive; dextromethorphan is the non-opioid.",
      },
      {
        text: "It blocks pulmonary M3 receptors like ipratropium.",
        note: "No. M3 blockade is the anticholinergic bronchodilator mechanism.",
      },
      {
        text: "It inhibits phosphodiesterase like theophylline.",
        note: "No. Phosphodiesterase inhibition is the theophylline line.",
      },
    ],
    answer: 0,
    page: "7",
  },
  {
    id: "drug-030",
    topicId: "DRUG",
    topic: "Opioid antitussive",
    scene: "A nurse looks at codeine phosphate on a cough chart.",
    ask: "What class and mechanism does the note give codeine?",
    choices: [
      {
        text: "A non-opioid antitussive that only suppresses cough and has no analgesic line.",
        note: "No. That non-opioid cough description is dextromethorphan.",
      },
      {
        text: "A first-generation antihistamine used for motion sickness.",
        note: "No. Motion sickness in this section is written for diphenhydramine (Benadryl).",
      },
      {
        text: "A short-acting beta-2 agonist also called terbutaline.",
        note: "No. Terbutaline is Bricanyl, a SABA, not codeine.",
      },
      {
        text: "An opioid antitussive and analgesic that acts on the central cough centre and on opioid receptors.",
        note: "Correct. As the note writes it, codeine phosphate is an opioid antitussive and analgesic acting on the central cough centre and on opioid receptors.",
      },
    ],
    answer: 3,
    page: "8",
  },
  {
    id: "drug-031",
    topicId: "DRUG",
    topic: "Opioid antitussive combination",
    scene: "A nurse looks at Ascopine on a cough-and-cold chart.",
    ask: "Which ingredients does the note list in Ascopine?",
    choices: [
      {
        text: "Dextromethorphan, pseudoephedrine, and triprolidine only.",
        note: "No. That trio is Actifed compound, not Ascopine.",
      },
      {
        text: "Salbutamol, ipratropium, and budesonide.",
        note: "No. Those are bronchodilator and corticosteroid inhaler drugs, not Ascopine.",
      },
      {
        text: "Codeine, Piriton (chlorpheniramine), caffeine anhydrous, and DL-methylephedrine.",
        note: "Correct. As the note writes it, Ascopine contains codeine, chlorpheniramine (Piriton), anhydrous caffeine, and DL-methylephedrine for coughs and cold symptoms.",
      },
      {
        text: "Bromhexine and N-acetylcysteine only.",
        note: "No. Those are the mucolytics Bisolvon and Fluimucil.",
      },
    ],
    answer: 2,
    page: "8",
  },
  {
    id: "drug-032",
    topicId: "DRUG",
    topic: "First-generation antihistamine",
    scene: "A nurse looks at Benadryl on an allergy and sleep chart.",
    ask: "What does the note say diphenhydramine does?",
    choices: [
      {
        text: "It is a second-generation antihistamine with no sedation line.",
        note: "No. The note puts diphenhydramine with first-generation H1 blockade and sedation.",
      },
      {
        text: "Benadryl is diphenhydramine, a first-generation antihistamine that blocks H1 receptors, has anticholinergic effects, and is written for allergy, motion sickness, and sleep.",
        note: "Correct. As the note writes it, diphenhydramine blocks H1 receptors, has anticholinergic effects, and is used for allergy, motion sickness, and short-term sleep.",
      },
      {
        text: "It is an opioid antitussive like codeine.",
        note: "No. Codeine is the opioid cough and pain drug; Benadryl is the antihistamine.",
      },
      {
        text: "It is a nasal decongestant that constricts nasal vessels, like pseudoephedrine.",
        note: "No. Pseudoephedrine is the decongestant in Actifed; Benadryl is diphenhydramine.",
      },
    ],
    answer: 1,
    page: "8",
  },
  {
    id: "drug-033",
    topicId: "DRUG",
    topic: "Anticonvulsant",
    scene: "A nurse looks at a seizure chart that names hydantoins and succinimides.",
    ask: "How does the note match these groups to seizure types?",
    choices: [
      {
        text: "Hydantoins are for generalized tonic-clonic seizures, status epilepticus, and psychomotor seizures; succinimides are for absence seizures.",
        note: "Correct. As the note writes it, hydantoins inhibit spread of seizure activity in the motor cortex for those major seizures, while succinimides inhibit spike-and-wave formation for absence seizures.",
      },
      {
        text: "Succinimides are for status epilepticus and hydantoins are only for absence seizures.",
        note: "No. The note gives absence seizures to succinimides and status epilepticus to hydantoins.",
      },
      {
        text: "Both groups are benzodiazepines used only for alcohol withdrawal.",
        note: "No. Alcohol-withdrawal use is written later with benzodiazepines such as diazepam.",
      },
      {
        text: "Hydantoins enhance GABA and are the barbiturate phenobarbital.",
        note: "No. Enhancing GABA and prolonging chloride-channel opening is the phenobarbital line.",
      },
    ],
    answer: 0,
    page: "9",
  },
  {
    id: "drug-034",
    topicId: "DRUG",
    topic: "Anticonvulsant",
    scene: "A nurse looks at Epilim, Dilantin, and Tegretol on a seizure chart.",
    ask: "Which brand-generic pairing matches the note?",
    choices: [
      {
        text: "Epilim is phenytoin, Dilantin is diazepam, and Tegretol is lorazepam.",
        note: "No. Diazepam is Valium and lorazepam is Ativan; Dilantin is phenytoin.",
      },
      {
        text: "Epilim is ethosuximide, Dilantin is phenobarbital, and Tegretol is valproate.",
        note: "No. Ethosuximide and phenobarbital appear as class examples, but these brands are valproate, phenytoin, and carbamazepine.",
      },
      {
        text: "All three are benzodiazepines, and Tegretol is lorazepam.",
        note: "No. The benzodiazepines named are diazepam and lorazepam, not this trio.",
      },
      {
        text: "Epilim is valproate, Dilantin is phenytoin, and Tegretol is carbamazepine.",
        note: "Correct. As the note writes it, Epilim is valproate, Dilantin is phenytoin (a hydantoin), and Tegretol is carbamazepine.",
      },
    ],
    answer: 3,
    page: "9",
  },
  {
    id: "drug-035",
    topicId: "DRUG",
    topic: "Anticonvulsant",
    scene: "A nurse looks at Tegretol beside a note about face pain and mood.",
    ask: "Which uses does the note write for carbamazepine?",
    choices: [
      {
        text: "Only absence seizures, as a succinimide.",
        note: "No. Absence seizures are the succinimide use; ethosuximide is the example.",
      },
      {
        text: "Parkinsonism and restless legs syndrome.",
        note: "No. Those uses are written for Sinemet, the carbidopa-levodopa product.",
      },
      {
        text: "Tonic-clonic, complex-partial, and mixed seizures, plus trigeminal neuralgia and bipolar disorder.",
        note: "Correct. As the note writes it, Tegretol (carbamazepine) is for tonic-clonic, complex-partial, and mixed seizures, trigeminal neuralgia, and bipolar disorder.",
      },
      {
        text: "Asthma and COPD as a bronchodilator.",
        note: "No. Asthma and COPD bronchodilation is the respiratory section, not carbamazepine.",
      },
    ],
    answer: 2,
    page: "9",
  },
  {
    id: "drug-036",
    topicId: "DRUG",
    topic: "Benzodiazepine",
    scene: "A nurse looks at Valium and Ativan on a neurologic chart.",
    ask: "What class does the note give these two?",
    choices: [
      {
        text: "Valium is phenytoin and Ativan is carbamazepine, both hydantoins.",
        note: "No. Phenytoin is Dilantin and carbamazepine is Tegretol.",
      },
      {
        text: "Both are benzodiazepines; Valium is diazepam and Ativan is lorazepam, and both have anticonvulsant lines.",
        note: "Correct. As the note writes it, Valium is diazepam and Ativan is lorazepam, benzodiazepines with anxiolytic and anticonvulsant actions.",
      },
      {
        text: "Both are barbiturates, and Ativan is phenobarbital.",
        note: "No. Phenobarbital is the barbiturate example; Ativan is lorazepam.",
      },
      {
        text: "Valium is valproate and Ativan is ethosuximide.",
        note: "No. Valproate is Epilim and ethosuximide is the succinimide example.",
      },
    ],
    answer: 1,
    page: "9",
  },
  {
    id: "drug-037",
    topicId: "DRUG",
    topic: "Benzodiazepine",
    scene: "A nurse looks at a benzodiazepine mechanism line beside diazepam.",
    ask: "What mechanism does the note give benzodiazepines?",
    choices: [
      {
        text: "They promote GABA binding at the GABA-A receptor, increase chloride inflow, and strengthen inhibitory transmission.",
        note: "Correct. As the note writes it, benzodiazepines such as diazepam and lorazepam promote GABA binding at GABA-A receptors and increase chloride influx.",
      },
      {
        text: "They block voltage-dependent sodium channels the way the note describes carbamazepine.",
        note: "No. Voltage-dependent sodium-channel blockade is the carbamazepine line.",
      },
      {
        text: "They inhibit T-type calcium channels the way the note describes ethosuximide.",
        note: "No. T-type calcium-channel inhibition is the succinimide (ethosuximide) line.",
      },
      {
        text: "They inhibit peripheral DOPA decarboxylase the way the note describes carbidopa.",
        note: "No. Peripheral DOPA decarboxylase inhibition is the carbidopa part of Sinemet.",
      },
    ],
    answer: 0,
    page: "10",
  },
  {
    id: "drug-038",
    topicId: "DRUG",
    topic: "Anticonvulsant",
    scene: "A nurse looks at Epilim and Tegretol mechanism lines.",
    ask: "Which mechanism summary matches the note?",
    choices: [
      {
        text: "Valproate is an anticholinergic and carbamazepine is levodopa.",
        note: "No. The anticholinergic is trihexyphenidyl and levodopa is part of Sinemet.",
      },
      {
        text: "Both only inhibit spike-and-wave discharges as succinimides.",
        note: "No. Spike-and-wave inhibition is the succinimide description.",
      },
      {
        text: "Carbamazepine inhibits Na/K-ATPase like digoxin.",
        note: "No. Na/K-ATPase inhibition is the digoxin mechanism.",
      },
      {
        text: "Valproate blocks voltage-dependent sodium channels and T-type calcium channels and increases GABA effect; carbamazepine blocks voltage-dependent sodium channels.",
        note: "Correct. As the note writes it, Epilim (valproate) affects sodium channels, T-type calcium channels, and GABA, while Tegretol (carbamazepine) blocks voltage-dependent sodium channels.",
      },
    ],
    answer: 3,
    page: "10",
  },
  {
    id: "drug-039",
    topicId: "DRUG",
    topic: "Antiparkinson agent",
    scene: "A nurse looks at Artane on a Parkinson chart.",
    ask: "What is Artane, and what balance does the note say it restores?",
    choices: [
      {
        text: "Artane is carbidopa-levodopa, a dopamine precursor combination.",
        note: "No. Carbidopa with levodopa is Sinemet, not Artane.",
      },
      {
        text: "Artane is haloperidol, a dopamine D2 blocker.",
        note: "No. Haloperidol is Haldol, a typical antipsychotic, not the anticholinergic.",
      },
      {
        text: "Artane is trihexyphenidyl, an anticholinergic that inhibits acetylcholine and restores dopamine-acetylcholine balance, reducing tremor and rigidity.",
        note: "Correct. As the note writes it, trihexyphenidyl blocks acetylcholine and restores dopamine-acetylcholine balance for parkinsonian symptoms and drug-induced extrapyramidal symptoms.",
      },
      {
        text: "Artane is phenytoin, a hydantoin anticonvulsant.",
        note: "No. Phenytoin is Dilantin, a hydantoin, not trihexyphenidyl.",
      },
    ],
    answer: 2,
    page: "10",
  },
  {
    id: "drug-040",
    topicId: "DRUG",
    topic: "Antiparkinson agent",
    scene: "A nurse looks at Sinemet 25/100 on a Parkinson chart.",
    ask: "How does the note explain the two parts of Sinemet?",
    choices: [
      {
        text: "Carbidopa becomes dopamine in the brain and levodopa only blocks acetylcholine.",
        note: "No. The note says levodopa becomes dopamine and carbidopa blocks peripheral decarboxylase.",
      },
      {
        text: "Levodopa is a dopamine precursor that crosses into the brain and becomes dopamine; carbidopa inhibits peripheral DOPA decarboxylase so more levodopa enters the brain.",
        note: "Correct. As the note writes it, Sinemet is carbidopa plus levodopa; carbidopa blocks peripheral decarboxylase and levodopa becomes dopamine in the brain.",
      },
      {
        text: "Sinemet is trihexyphenidyl, an anticholinergic only.",
        note: "No. Trihexyphenidyl is Artane; Sinemet is the dopamine-precursor combination.",
      },
      {
        text: "Both drugs block D2 receptors like an antipsychotic.",
        note: "No. D2 blockade is the haloperidol line, not Sinemet.",
      },
    ],
    answer: 1,
    page: "10",
  },
  {
    id: "drug-041",
    topicId: "DRUG",
    topic: "Antidiabetic",
    scene: "A nurse looks at an insulin order beside notes on oral antidiabetics.",
    ask: "Which insulin lines match the note?",
    choices: [
      {
        text: "Insulin is for ketoacidosis and type 1 and type 2 diabetes; warm it in the palms so cold insulin does not cause lipodystrophy, and rotate sites.",
        note: "Correct. As the note writes it, insulin is for ketoacidosis and type 1 and 2 diabetes, should be warmed by rotating in the palms, and sites include abdomen, upper back, thighs, upper arm, and buttocks. Oral antidiabetics are written for type 2 diabetes.",
      },
      {
        text: "Oral sulfonylureas are written as the first choice for type 1 diabetes.",
        note: "No. The note says sulfonylureas are not for loss of islet function in type 1 diabetes.",
      },
      {
        text: "Insulin is only a biguanide taken by mouth.",
        note: "No. The biguanide taken by mouth is metformin (Glucophage).",
      },
      {
        text: "Insulin and the oral agents are both SGLT-2 inhibitors.",
        note: "No. SGLT-2 inhibitors in the note are drugs such as dapagliflozin and empagliflozin.",
      },
    ],
    answer: 0,
    page: "11",
  },
  {
    id: "drug-042",
    topicId: "DRUG",
    topic: "Sulfonylurea",
    scene: "A nurse looks at Daonil, Diamicron, and Tol-Tab on a diabetes chart.",
    ask: "What class and generics does the note give?",
    choices: [
      {
        text: "They are biguanides, and Daonil is metformin.",
        note: "No. Metformin is Glucophage, the biguanide, not Daonil.",
      },
      {
        text: "They are alpha-glucosidase inhibitors, and Diamicron is acarbose.",
        note: "No. Acarbose is Glucobay, the alpha-glucosidase inhibitor.",
      },
      {
        text: "They are SGLT-2 inhibitors, and Tol-Tab is dapagliflozin.",
        note: "No. Dapagliflozin is Forxiga, an SGLT-2 inhibitor.",
      },
      {
        text: "They are sulfonylurea hypoglycaemics: Daonil is glibenclamide, Diamicron is gliclazide, and Tol-Tab is tolbutamide, stimulating beta cells to release insulin.",
        note: "Correct. As the note writes it, glibenclamide, gliclazide, and tolbutamide are sulfonylureas that stimulate pancreatic beta-cell insulin secretion for type 2 diabetes.",
      },
    ],
    answer: 3,
    page: "11",
  },
  {
    id: "drug-043",
    topicId: "DRUG",
    topic: "Biguanide and alpha-glucosidase inhibitor",
    scene: "A nurse looks at Glucophage and Glucobay on a type 2 diabetes chart.",
    ask: "How does the note separate their mechanisms?",
    choices: [
      {
        text: "Glucophage blocks SGLT-2 in the kidney and Glucobay is insulin.",
        note: "No. SGLT-2 blockade is dapagliflozin or empagliflozin, not metformin.",
      },
      {
        text: "Both stimulate beta cells the way sulfonylureas do.",
        note: "No. Stimulating beta cells is the sulfonylurea mechanism, not these two.",
      },
      {
        text: "Glucophage is metformin, a biguanide that suppresses hepatic gluconeogenesis, reduces intestinal glucose absorption, and increases insulin sensitivity; Glucobay is acarbose, which slows carbohydrate breakdown.",
        note: "Correct. As the note writes it, metformin works on liver glucose output, gut absorption, and insulin sensitivity, while acarbose slows carbohydrate digestion at the intestinal lining.",
      },
      {
        text: "Glucobay is sitagliptin and Glucophage is pioglitazone.",
        note: "No. Sitagliptin is Januvia, a DPP-4 inhibitor, and pioglitazone is Actos, a TZD.",
      },
    ],
    answer: 2,
    page: "11",
  },
  {
    id: "drug-044",
    topicId: "DRUG",
    topic: "DPP-4 inhibitor, SGLT-2 inhibitor, and TZD",
    scene: "A nurse looks at Januvia, Forxiga, and Actos on a diabetes chart.",
    ask: "Which class pairing matches the note?",
    choices: [
      {
        text: "All three are sulfonylureas, and Forxiga is glibenclamide.",
        note: "No. Glibenclamide is Daonil, a sulfonylurea, not dapagliflozin.",
      },
      {
        text: "Januvia (sitagliptin) is a DPP-4 inhibitor, Forxiga (dapagliflozin) is an SGLT-2 inhibitor, and Actos (pioglitazone) is a thiazolidinedione.",
        note: "Correct. As the note writes it, sitagliptin inhibits DPP-4, dapagliflozin inhibits SGLT-2 so glucose leaves in urine, and pioglitazone is a TZD that activates PPAR-gamma.",
      },
      {
        text: "Januvia is metformin, Forxiga is acarbose, and Actos is tolbutamide.",
        note: "No. Those generics belong to Glucophage, Glucobay, and Tol-Tab.",
      },
      {
        text: "Actos is empagliflozin and Forxiga is linagliptin.",
        note: "No. Empagliflozin is Jardiance, an SGLT-2 inhibitor, and linagliptin is a DPP-4 inhibitor.",
      },
    ],
    answer: 1,
    page: "11",
  },
  {
    id: "drug-045",
    topicId: "DRUG",
    topic: "Sulfonylurea",
    scene: "A nurse looks at generation notes for Daonil and tolbutamide.",
    ask: "How does the comparison table class these sulfonylureas?",
    choices: [
      {
        text: "Daonil (glibenclamide) and Diamicron (gliclazide) are second-generation; tolbutamide is first-generation and shorter-acting than glibenclamide.",
        note: "Correct. As the note writes it, glibenclamide and gliclazide are second-generation sulfonylureas and tolbutamide is first-generation with a shorter action than glibenclamide.",
      },
      {
        text: "Tolbutamide is a biguanide and glibenclamide is an SGLT-2 inhibitor.",
        note: "No. The biguanide is metformin and the SGLT-2 examples are dapagliflozin and empagliflozin.",
      },
      {
        text: "All three are alpha-glucosidase inhibitors.",
        note: "No. The alpha-glucosidase inhibitor in the table is acarbose.",
      },
      {
        text: "Gliclazide is first-generation and tolbutamide is a thiazolidinedione.",
        note: "No. The note calls gliclazide second-generation; TZDs are pioglitazone and rosiglitazone.",
      },
    ],
    answer: 0,
    page: "12",
  },
  {
    id: "drug-046",
    topicId: "DRUG",
    topic: "Sulfonylurea",
    scene: "A nurse looks at Diamicron on a chart that also mentions clotting and oxidation.",
    ask: "Besides lowering glucose, what extra actions does the note give gliclazide?",
    choices: [
      {
        text: "It inhibits SGLT-2 and causes glucose to leave in the urine.",
        note: "No. Urinary glucose loss is the SGLT-2 inhibitor mechanism.",
      },
      {
        text: "It is only an alpha-glucosidase inhibitor taken with the first bite of a meal.",
        note: "No. The first-bite instruction is written for acarbose (Glucobay).",
      },
      {
        text: "It blocks DPP-4 and is the generic sitagliptin.",
        note: "No. Sitagliptin is Januvia, a DPP-4 inhibitor.",
      },
      {
        text: "Fibrinolytic, antioxidant, and antiplatelet actions.",
        note: "Correct. As the note writes it, Diamicron (gliclazide) is a sulfonylurea with fibrinolytic, antioxidant, and antiplatelet actions.",
      },
    ],
    answer: 3,
    page: "12",
  },
  {
    id: "drug-047",
    topicId: "DRUG",
    topic: "Alpha-glucosidase inhibitor",
    scene: "A nurse looks at a hypoglycaemia note under Glucobay.",
    ask: "If hypoglycaemia occurs with acarbose, what does the note say to give?",
    choices: [
      {
        text: "Sucrose, because the note says acarbose speeds sucrose absorption.",
        note: "No. The note says absorption is delayed, so sucrose is not the rescue sugar.",
      },
      {
        text: "A sulfonylurea, because acarbose is itself a sulfonylurea.",
        note: "No. Acarbose is the alpha-glucosidase inhibitor, not a sulfonylurea.",
      },
      {
        text: "Glucose, not sucrose, because acarbose delays sucrose absorption.",
        note: "Correct. As the note writes it, Glucobay (acarbose) delays carbohydrate absorption, so hypoglycaemia is treated with glucose rather than sucrose.",
      },
      {
        text: "Insulin, because the note classes acarbose as a biguanide.",
        note: "No. The biguanide is metformin; acarbose is Glucobay.",
      },
    ],
    answer: 2,
    page: "12",
  },
  {
    id: "drug-048",
    topicId: "DRUG",
    topic: "Loop diuretic",
    scene: "A nurse looks at Lasix on a chart for pulmonary oedema.",
    ask: "What is Lasix, and where does the note say loop diuretics act?",
    choices: [
      {
        text: "Lasix is spironolactone, a potassium-sparing aldosterone antagonist.",
        note: "No. Spironolactone is Aldactone, the potassium-sparing diuretic.",
      },
      {
        text: "Lasix is furosemide, a loop diuretic on the thick ascending limb that inhibits the Na-K-2Cl transporter.",
        note: "Correct. As the note writes it, furosemide (also written frusemide) inhibits Na-K-2Cl transport on the thick ascending limb; bumetanide is the other loop diuretic named.",
      },
      {
        text: "Lasix is indapamide, acting only on the distal convoluted tubule.",
        note: "No. Indapamide is Natrilix, a thiazide-like diuretic.",
      },
      {
        text: "Lasix is mannitol, an osmotic diuretic.",
        note: "No. Mannitol is the osmotic diuretic, not Lasix.",
      },
    ],
    answer: 1,
    page: "13",
  },
  {
    id: "drug-049",
    topicId: "DRUG",
    topic: "Thiazide-like diuretic",
    scene: "A nurse looks at Natrilix and Diulo on a blood-pressure chart.",
    ask: "Which pairing matches the note?",
    choices: [
      {
        text: "Natrilix is indapamide and Diulo is metolazone; both are thiazide-like diuretics inhibiting Na/Cl reabsorption in the distal convoluted tubule.",
        note: "Correct. As the note writes it, indapamide and metolazone are thiazide-like diuretics, grouped with hydrochlorothiazide at the distal convoluted tubule.",
      },
      {
        text: "Both are loop diuretics, and Diulo is bumetanide.",
        note: "No. Bumetanide is listed with loop diuretics beside furosemide.",
      },
      {
        text: "Natrilix is acetazolamide and Diulo is mannitol.",
        note: "No. Acetazolamide is the carbonic anhydrase inhibitor and mannitol is osmotic.",
      },
      {
        text: "Both are potassium-sparing drugs, and Natrilix is amiloride.",
        note: "No. Amiloride is a potassium-sparing example; Natrilix is indapamide.",
      },
    ],
    answer: 0,
    page: "13",
  },
  {
    id: "drug-050",
    topicId: "DRUG",
    topic: "Potassium-sparing diuretic",
    scene: "A nurse looks at Aldactone on a heart-failure chart.",
    ask: "What class and potassium effect does the note give Aldactone?",
    choices: [
      {
        text: "It is a loop diuretic whose main electrolyte line is low potassium.",
        note: "No. Low potassium is a loop and thiazide problem in the note; spironolactone spares potassium.",
      },
      {
        text: "It is hydrochlorothiazide and has no aldosterone line.",
        note: "No. Hydrochlorothiazide is the thiazide example acting on Na/Cl reabsorption.",
      },
      {
        text: "It is acetazolamide, used for glaucoma and altitude sickness.",
        note: "No. Glaucoma and altitude sickness are acetazolamide uses.",
      },
      {
        text: "Aldactone is spironolactone, an aldosterone antagonist that lets sodium leave while potassium is kept.",
        note: "Correct. As the note writes it, spironolactone antagonises aldosterone, wastes sodium, and spares potassium for heart-failure oedema, hypertension, and high aldosterone states.",
      },
    ],
    answer: 3,
    page: "13",
  },
  {
    id: "drug-051",
    topicId: "DRUG",
    topic: "Osmotic diuretic",
    scene: "A nurse looks at mannitol on a chart for acute brain swelling.",
    ask: "What class and action does the note give mannitol?",
    choices: [
      {
        text: "A potassium-sparing aldosterone antagonist for cirrhotic ascites.",
        note: "No. Aldosterone antagonism and cirrhotic ascites are the spironolactone lines.",
      },
      {
        text: "A loop diuretic identical to furosemide.",
        note: "No. Furosemide is Lasix, the loop diuretic, not mannitol.",
      },
      {
        text: "An osmotic diuretic that holds water in the tubule, written for acute cerebral oedema, raised intracranial pressure, acute glaucoma, and promoting urine in acute renal failure.",
        note: "Correct. As the note writes it, mannitol is an osmotic diuretic for acute cerebral oedema, intracranial hypertension, acute glaucoma, and the oliguric phase of acute renal failure.",
      },
      {
        text: "A carbonic anhydrase inhibitor used only for altitude sickness.",
        note: "No. Altitude sickness is an acetazolamide use.",
      },
    ],
    answer: 2,
    page: "14",
  },
  {
    id: "drug-052",
    topicId: "DRUG",
    topic: "Carbonic anhydrase inhibitor",
    scene: "A nurse looks at acetazolamide on an eye-pressure chart.",
    ask: "What mechanism and uses does the note give?",
    choices: [
      {
        text: "It blocks the Na-K-2Cl transporter in the loop of Henle.",
        note: "No. Na-K-2Cl blockade is the loop-diuretic mechanism of furosemide.",
      },
      {
        text: "It inhibits carbonic anhydrase in the proximal tubule, reduces bicarbonate and sodium reabsorption, and is written for glaucoma, altitude sickness, and metabolic alkalosis.",
        note: "Correct. As the note writes it, acetazolamide is a carbonic anhydrase inhibitor for glaucoma, altitude sickness, and metabolic alkalosis.",
      },
      {
        text: "It is an osmotic diuretic given for acute cerebral oedema.",
        note: "No. Acute cerebral oedema is a mannitol use.",
      },
      {
        text: "It is indapamide, a thiazide-like antihypertensive.",
        note: "No. Indapamide is Natrilix, a thiazide-like diuretic.",
      },
    ],
    answer: 1,
    page: "14",
  },
  {
    id: "drug-053",
    topicId: "DRUG",
    topic: "Thiazide-like diuretic",
    scene: "A nurse looks at Diulo written next to Lasix.",
    ask: "What does the note say about using metolazone with a loop diuretic?",
    choices: [
      {
        text: "Metolazone inhibits Na/Cl reabsorption in the distal tubule, and combining it with a loop diuretic can strengthen the diuretic effect.",
        note: "Correct. As the note writes it, metolazone (Diulo) is thiazide-like and can increase diuresis when combined with a loop diuretic.",
      },
      {
        text: "Metolazone is potassium-sparing and cancels the effect of furosemide.",
        note: "No. Potassium-sparing drugs in the note include spironolactone, amiloride, and triamterene, not metolazone.",
      },
      {
        text: "The combination is described as two carbonic anhydrase inhibitors.",
        note: "No. Carbonic anhydrase inhibition is the acetazolamide mechanism.",
      },
      {
        text: "Diulo is mannitol and is not paired with Lasix in the note.",
        note: "No. The note does pair metolazone (Diulo) with loop diuretics such as Lasix.",
      },
    ],
    answer: 0,
    page: "14",
  },
  {
    id: "drug-054",
    topicId: "DRUG",
    topic: "Analgesic",
    scene: "A nurse looks at Panadol, Voltaren, and Brufen on a pain chart.",
    ask: "Which pairing matches the note?",
    choices: [
      {
        text: "Panadol is morphine, Voltaren is tramadol, and Brufen is pethidine.",
        note: "No. Morphine, tramadol (Ultram), and pethidine are opioid or central analgesics, not these brands.",
      },
      {
        text: "All three are opioid agonists acting on mu receptors.",
        note: "No. Mu-receptor agonism is the opioid analgesic line, not paracetamol or these NSAID brands.",
      },
      {
        text: "Voltaren is phenazopyridine and Brufen is dextropropoxyphene.",
        note: "No. Phenazopyridine is Pyridium and dextropropoxyphene is Doloxene.",
      },
      {
        text: "Panadol is paracetamol, an analgesic and antipyretic; Voltaren is diclofenac, an NSAID; Brufen is ibuprofen, an NSAID.",
        note: "Correct. As the note writes it, Panadol is paracetamol (acetaminophen), Voltaren is diclofenac sodium, and Brufen is ibuprofen.",
      },
    ],
    answer: 3,
    page: "15",
  },
  {
    id: "drug-055",
    topicId: "DRUG",
    topic: "NSAID",
    scene: "A nurse looks at Aspirin and Indocid on a pain-and-inflammation chart.",
    ask: "What extra uses does the note attach to these two?",
    choices: [
      {
        text: "Both are opioid agonists for severe postoperative pain only.",
        note: "No. Severe postoperative pain is written with opioids such as morphine and dihydrocodeine.",
      },
      {
        text: "Aspirin is paracetamol and the note gives paracetamol a strong anti-inflammatory action.",
        note: "No. Paracetamol is Panadol; a later line says paracetamol has no anti-inflammatory action.",
      },
      {
        text: "Aspirin is written for pain, inflammation, fever, and prevention of myocardial infarction, TIA, and thrombosis; Indocid (indomethacin) is also written for gout and a patent ductus arteriosus.",
        note: "Correct. As the note writes it, aspirin has analgesic, antirheumatic, antipyretic, antiplatelet, and NSAID lines, and indomethacin is written for gout pain and patent ductus arteriosus.",
      },
      {
        text: "Indocid is naproxen and aspirin is mefenamic acid.",
        note: "No. Naproxen is Naprosyn and mefenamic acid is Ponstan/Hostan.",
      },
    ],
    answer: 2,
    page: "15",
  },
  {
    id: "drug-056",
    topicId: "DRUG",
    topic: "Opioid analgesic",
    scene: "A nurse looks at DF118, Ultram, and morphine on a severe-pain chart.",
    ask: "Which identities match the note?",
    choices: [
      {
        text: "All three are NSAIDs that only inhibit prostaglandin synthesis.",
        note: "No. Prostaglandin inhibition is the non-opioid/NSAID line; these names are in the opioid group.",
      },
      {
        text: "DF118 is dihydrocodeine, a synthetic opioid analgesic and antitussive; Ultram is tramadol, a central analgesic; morphine is an opioid agonist.",
        note: "Correct. As the note writes it, dihydrocodeine, tramadol, and morphine are opioid or central analgesics, with morphine written for severe pain including around myocardial infarction.",
      },
      {
        text: "DF118 is ibuprofen, Ultram is aspirin, and morphine is paracetamol.",
        note: "No. Ibuprofen is Brufen, aspirin is acetylsalicylic acid, and paracetamol is Panadol.",
      },
      {
        text: "Ultram is phenazopyridine, a urinary local analgesic.",
        note: "No. Phenazopyridine is Pyridium, a local analgesic excreted in urine.",
      },
    ],
    answer: 1,
    page: "15",
  },
  {
    id: "drug-057",
    topicId: "DRUG",
    topic: "Analgesic",
    scene: "A nurse looks at Doloxene, Naprosyn, Ponstan, and Pyridium on a pain chart.",
    ask: "Which pairing matches the note?",
    choices: [
      {
        text: "Doloxene is dextropropoxyphene; Naprosyn is naproxen; Ponstan/Hostan is mefenamic acid; Pyridium is phenazopyridine, a local analgesic excreted in urine.",
        note: "Correct. As the note writes it, Doloxene is dextropropoxyphene, Naprosyn is naproxen, Ponstan is mefenamic acid, and Pyridium is phenazopyridine for urinary-tract pain.",
      },
      {
        text: "All four are strong mu agonists like morphine.",
        note: "No. Morphine is the strong opioid agonist; naproxen and mefenamic acid are NSAIDs.",
      },
      {
        text: "Pyridium is diclofenac and Ponstan is codeine.",
        note: "No. Diclofenac is Voltaren and codeine is a separate opioid antitussive and analgesic.",
      },
      {
        text: "Naprosyn is paracetamol and Doloxene is ibuprofen.",
        note: "No. Paracetamol is Panadol and ibuprofen is Brufen.",
      },
    ],
    answer: 0,
    page: "15",
  },
  {
    id: "drug-058",
    topicId: "DRUG",
    topic: "Non-opioid analgesic",
    scene: "A nurse looks at a mechanism line under Panadol.",
    ask: "How does the note describe paracetamol compared with an anti-inflammatory effect?",
    choices: [
      {
        text: "It is a full mu-receptor agonist like morphine.",
        note: "No. Full mu agonism is the morphine line.",
      },
      {
        text: "It is an NSAID with the same anti-inflammatory line as indomethacin.",
        note: "No. Indomethacin is Indocid, an NSAID; the note denies an anti-inflammatory action for paracetamol.",
      },
      {
        text: "It is a local urinary analgesic that dyes the urine.",
        note: "No. Urine colour change is written for phenazopyridine (Pyridium).",
      },
      {
        text: "It inhibits central prostaglandin synthesis to lower fever and pain, and the note says it has no anti-inflammatory action.",
        note: "Correct. As the note writes it, paracetamol inhibits central prostaglandin synthesis for fever and pain but has no anti-inflammatory effect.",
      },
    ],
    answer: 3,
    page: "16",
  },
  {
    id: "drug-059",
    topicId: "DRUG",
    topic: "Central analgesic",
    scene: "A nurse looks at Ultram on a moderate-to-severe pain chart.",
    ask: "What mechanism does the note give tramadol?",
    choices: [
      {
        text: "It only inhibits COX and is classed as an NSAID.",
        note: "No. COX inhibition is the NSAID mechanism, used for drugs such as diclofenac and naproxen.",
      },
      {
        text: "It is a local anaesthetic excreted in urine like phenazopyridine.",
        note: "No. Urinary local analgesia is the phenazopyridine line.",
      },
      {
        text: "Weak mu-receptor action plus inhibition of serotonin and noradrenaline reuptake.",
        note: "Correct. As the note writes it, tramadol has weak mu activity and inhibits 5-HT and noradrenaline reuptake.",
      },
      {
        text: "It blocks H1 receptors like a first-generation antihistamine.",
        note: "No. H1 blockade is the antihistamine mechanism, not tramadol.",
      },
    ],
    answer: 2,
    page: "16",
  },
  {
    id: "drug-060",
    topicId: "DRUG",
    topic: "Analgesic",
    scene: "A nurse looks at Dologesic and Pyridium on two charts.",
    ask: "Which description matches the note?",
    choices: [
      {
        text: "Dologesic is morphine plus ibuprofen, and Pyridium is a loop diuretic.",
        note: "No. Morphine and ibuprofen are separate analgesics; loop diuresis is furosemide.",
      },
      {
        text: "Dologesic combines paracetamol with dextropropoxyphene; Pyridium is phenazopyridine and can turn urine orange-red.",
        note: "Correct. As the note writes it, Dologesic is paracetamol plus dextropropoxyphene, and phenazopyridine is a local urinary analgesic that can colour urine red-orange.",
      },
      {
        text: "Pyridium is aspirin and Dologesic is sucralfate.",
        note: "No. Aspirin is acetylsalicylic acid and sucralfate is Carafate.",
      },
      {
        text: "Both are bulk-forming laxatives.",
        note: "No. The bulk-forming laxative is psyllium (Metamucil).",
      },
    ],
    answer: 1,
    page: "16",
  },
  {
    id: "drug-061",
    topicId: "DRUG",
    topic: "Antihistamine",
    scene: "A nurse looks at a teaching line about first- and second-generation antihistamines.",
    ask: "How does the note contrast the two generations?",
    choices: [
      {
        text: "First-generation drugs act in the CNS and periphery, cross the blood-brain barrier, and sedate; second-generation drugs act in the periphery and are written as non-sedating.",
        note: "Correct. As the note writes it, first-generation antihistamines cross into the brain and sedate, while second-generation drugs stay peripheral and do not cause sleepiness.",
      },
      {
        text: "Second-generation drugs are the ones that cross the blood-brain barrier and cause sedation.",
        note: "No. The note assigns blood-brain barrier crossing and sedation to the first generation.",
      },
      {
        text: "Both generations are opioid antitussives.",
        note: "No. Opioid antitussive action is the codeine line, not this antihistamine contrast.",
      },
      {
        text: "First-generation drugs are glucocorticoids that inhibit phospholipase A2.",
        note: "No. Phospholipase A2 inhibition is the glucocorticoid mechanism.",
      },
    ],
    answer: 0,
    page: "17",
  },
  {
    id: "drug-062",
    topicId: "DRUG",
    topic: "Antihistamine",
    scene: "A nurse looks at Piriton on an allergy chart.",
    ask: "What is Piriton in the note?",
    choices: [
      {
        text: "Promethazine, a phenothiazine used only as an antiemetic.",
        note: "No. Promethazine is Phenergan/Phensedyl, a different first-generation antihistamine.",
      },
      {
        text: "Lorazepam, a benzodiazepine anxiolytic.",
        note: "No. Lorazepam is Ativan, a benzodiazepine.",
      },
      {
        text: "Haloperidol, a dopamine D2 blocker.",
        note: "No. Haloperidol is Haldol, a typical antipsychotic.",
      },
      {
        text: "Chlorpheniramine maleate, a first-generation non-selective antihistamine, for allergy, rhinitis, and hypersensitive reactions.",
        note: "Correct. As the note writes it, Piriton is chlorpheniramine, a first-generation H1 blocker for allergic symptoms, rhinitis, and hypersensitivity reactions including transfusion reactions.",
      },
    ],
    answer: 3,
    page: "17",
  },
  {
    id: "drug-063",
    topicId: "DRUG",
    topic: "Antihistamine",
    scene: "A nurse looks at Phenergan and Atarax on an antihistamine chart.",
    ask: "Which pairing matches the note?",
    choices: [
      {
        text: "Both are second-generation non-sedating antihistamines.",
        note: "No. The note places both with first-generation H1 blockade and sedation.",
      },
      {
        text: "Atarax is furosemide and Phenergan is spironolactone.",
        note: "No. Furosemide is Lasix and spironolactone is Aldactone, diuretics rather than antihistamines.",
      },
      {
        text: "Phenergan is promethazine, an H1 blocker and phenothiazine; Atarax is hydroxyzine, an antihistamine with antianxiety, sedative, and antiemetic lines.",
        note: "Correct. As the note writes it, promethazine and hydroxyzine are first-generation H1 antihistamines, and hydroxyzine is also classed for anxiety, sedation, and itch.",
      },
      {
        text: "Phenergan is salbutamol and Atarax is theophylline.",
        note: "No. Salbutamol is Ventolin and theophylline is the xanthine bronchodilator.",
      },
    ],
    answer: 2,
    page: "17",
  },
  {
    id: "drug-064",
    topicId: "DRUG",
    topic: "Glucocorticoid",
    scene: "A nurse looks at prednisolone and hydrocortisone on a steroid chart.",
    ask: "How does the note compare them?",
    choices: [
      {
        text: "Hydrocortisone is 4 to 5 times more anti-inflammatory than prednisolone and has no salt-retaining activity.",
        note: "No. The note sets hydrocortisone as the potency standard of 1 and gives prednisolone the higher anti-inflammatory figure.",
      },
      {
        text: "Prednisolone is a synthetic intermediate-acting glucocorticoid about 4 to 5 times hydrocortisone; hydrocortisone is the natural short-acting glucocorticoid with clearer salt-retaining activity.",
        note: "Correct. As the note writes it, prednisolone is synthetic and about 4-5 times hydrocortisone in anti-inflammatory potency, while hydrocortisone is natural, short-acting, and stronger at retaining salt.",
      },
      {
        text: "Both are mineralocorticoids only, and prednisolone is fludrocortisone.",
        note: "No. Fludrocortisone is the mineralocorticoid example; prednisolone is a glucocorticoid.",
      },
      {
        text: "Prednisolone is an NSAID that inhibits COX and hydrocortisone is an antihistamine.",
        note: "No. COX inhibition is the NSAID line and H1 blockade is the antihistamine line.",
      },
    ],
    answer: 1,
    page: "18",
  },
  {
    id: "drug-065",
    topicId: "DRUG",
    topic: "Glucocorticoid",
    scene: "A nurse looks at a glucocorticoid mechanism line on an anti-inflammatory chart.",
    ask: "What mechanism does the note write?",
    choices: [
      {
        text: "They bind intracellular receptors, inhibit phospholipase A2 and COX-2, and reduce prostaglandins and leukotrienes.",
        note: "Correct. As the note writes it, glucocorticoids inhibit phospholipase A2 and COX-2, lowering prostaglandins and leukotrienes, which the note links to anti-inflammatory and immunosuppressant effects.",
      },
      {
        text: "They block H1 receptors and do not affect prostaglandins.",
        note: "No. H1 blockade is the antihistamine mechanism.",
      },
      {
        text: "They inhibit Na/K-ATPase in cardiac muscle.",
        note: "No. Na/K-ATPase inhibition is the digoxin mechanism.",
      },
      {
        text: "They block angiotensin II receptors.",
        note: "No. Angiotensin II receptor blockade is the ARB mechanism.",
      },
    ],
    answer: 0,
    page: "18",
  },
  {
    id: "drug-066",
    topicId: "DRUG",
    topic: "Mineralocorticoid",
    scene: "A nurse looks at fludrocortisone beside an adrenal-failure note.",
    ask: "What class and use does the note give fludrocortisone?",
    choices: [
      {
        text: "A loop diuretic that wastes sodium.",
        note: "No. Sodium wasting on the thick ascending limb is the loop diuretic action.",
      },
      {
        text: "An inhaled corticosteroid identical to budesonide.",
        note: "No. Budesonide is Pulmicort, an inhaled glucocorticoid in the respiratory section.",
      },
      {
        text: "A first-generation antihistamine for rhinitis.",
        note: "No. Rhinitis antihistamines here include chlorpheniramine and promethazine.",
      },
      {
        text: "A mineralocorticoid that promotes sodium reabsorption and potassium excretion, written for Addison's disease.",
        note: "Correct. As the note writes it, fludrocortisone is the mineralocorticoid example for Addison's disease, retaining sodium and water.",
      },
    ],
    answer: 3,
    page: "18",
  },
  {
    id: "drug-067",
    topicId: "DRUG",
    topic: "Benzodiazepine anxiolytic",
    scene: "A nurse looks at Ativan on an anxiety chart.",
    ask: "What class and receptor action does the note give Ativan?",
    choices: [
      {
        text: "Haloperidol, a butyrophenone that blocks D2 receptors.",
        note: "No. D2 blockade is the Haldol (haloperidol) line.",
      },
      {
        text: "An opioid that binds mu receptors.",
        note: "No. Mu-receptor binding is the opioid analgesic mechanism.",
      },
      {
        text: "Lorazepam, a benzodiazepine that enhances GABA, increases chloride entry, and hyperpolarises neurons.",
        note: "Correct. As the note writes it, Ativan (lorazepam) boosts GABA, increases chloride inflow, and is used for anxiety, insomnia, preoperative sedation, and seizures.",
      },
      {
        text: "Trihexyphenidyl, an anticholinergic for Parkinson symptoms.",
        note: "No. Trihexyphenidyl is Artane, not lorazepam.",
      },
    ],
    answer: 2,
    page: "19",
  },
  {
    id: "drug-068",
    topicId: "DRUG",
    topic: "Typical antipsychotic",
    scene: "A nurse looks at Haldol on a psychosis chart.",
    ask: "What does the note say Haldol does at receptors?",
    choices: [
      {
        text: "It is a benzodiazepine that promotes GABA-A chloride flow.",
        note: "No. GABA-A chloride flow is the lorazepam mechanism.",
      },
      {
        text: "Haloperidol is a typical antipsychotic (butyrophenone) that blocks D2 receptors and lowers dopamine activity.",
        note: "Correct. As the note writes it, Haldol (haloperidol) is a D2 blocker for psychosis, agitation, and vomiting, not a GABA-A benzodiazepine.",
      },
      {
        text: "It is trihexyphenidyl, an anticholinergic for Parkinson disease.",
        note: "No. Trihexyphenidyl is Artane.",
      },
      {
        text: "It is levodopa, a dopamine precursor.",
        note: "No. Levodopa is the dopamine precursor in Sinemet.",
      },
    ],
    answer: 1,
    page: "19",
  },
  {
    id: "drug-069",
    topicId: "DRUG",
    topic: "Anxiolytic and antipsychotic",
    scene: "A nurse looks at the chart note that pairs the letters A and H with two drugs.",
    ask: "What memory line does the note give?",
    choices: [
      {
        text: "A is Calm Anxiety for Ativan; H is Halt Hallucination for Haldol.",
        note: "Correct. As the note writes it, Ativan is linked to calming anxiety and Haldol to halting hallucination.",
      },
      {
        text: "A is Halt Hallucination for Ativan and H is Calm Anxiety for Haldol.",
        note: "No. The note pairs A with anxiety (Ativan) and H with hallucination (Haldol).",
      },
      {
        text: "Both letters refer to the antihistamines Piriton and Phenergan.",
        note: "No. Piriton and Phenergan are antihistamines, not this A/H memory line.",
      },
      {
        text: "A is allopurinol and H is hydrochlorothiazide.",
        note: "No. Allopurinol is Zyloric and hydrochlorothiazide is a thiazide diuretic, not this pair.",
      },
    ],
    answer: 0,
    page: "19",
  },
  {
    id: "drug-070",
    topicId: "DRUG",
    topic: "Anti-neoplastic antibiotic",
    scene: "A nurse looks at Doxil and Blenoxane on an oncology chart.",
    ask: "Which pairing matches the note?",
    choices: [
      {
        text: "Doxil is cisplatin and Blenoxane is tamoxifen.",
        note: "No. Cisplatin is an alkylating agent and tamoxifen is the hormone antagonist for estrogen-receptor positive breast cancer.",
      },
      {
        text: "Both are vinca alkaloids that stop microtubules.",
        note: "No. Microtubule inhibition is the vinblastine and vincristine line.",
      },
      {
        text: "Doxil is methotrexate and Blenoxane is fluorouracil.",
        note: "No. Methotrexate and fluorouracil are the antimetabolites.",
      },
      {
        text: "Doxil is doxorubicin and Blenoxane is bleomycin; both are anti-neoplastic antibiotics against rapidly proliferating malignant cells.",
        note: "Correct. As the note writes it, doxorubicin (Doxil) and bleomycin (Blenoxane) are anti-neoplastic antibiotics.",
      },
    ],
    answer: 3,
    page: "20",
  },
  {
    id: "drug-071",
    topicId: "DRUG",
    topic: "Alkylating agent",
    scene: "A nurse looks at cisplatin, carboplatin, and Ifex on a chemotherapy chart.",
    ask: "What class does the note give these three?",
    choices: [
      {
        text: "They are antitumour antibiotics like doxorubicin.",
        note: "No. Doxorubicin and bleomycin are the anti-neoplastic antibiotics.",
      },
      {
        text: "They are hormone antagonists, and cisplatin is tamoxifen.",
        note: "No. Tamoxifen is the anti-neoplastic written for estrogen-receptor positive breast cancer.",
      },
      {
        text: "Anti-neoplastic alkylating agents; Ifex is ifosfamide, and carboplatin is written for initial treatment of ovarian cancer.",
        note: "Correct. As the note writes it, cisplatin, carboplatin, and ifosfamide (Ifex) are alkylating anti-neoplastic agents.",
      },
      {
        text: "They are vinca alkaloids, and Ifex is vincristine.",
        note: "No. Vincristine is the miscellaneous vinca alkaloid, not ifosfamide.",
      },
    ],
    answer: 2,
    page: "20",
  },
  {
    id: "drug-072",
    topicId: "DRUG",
    topic: "Antimetabolite",
    scene: "A nurse looks at methotrexate and fluorouracil on an oncology chart.",
    ask: "How does the note class them?",
    choices: [
      {
        text: "Both are alkylating agents used only for initial ovarian cancer.",
        note: "No. Initial ovarian cancer is the carboplatin line; these two are antimetabolites.",
      },
      {
        text: "Both are anti-neoplastic antimetabolites against rapidly proliferating malignant cells, and methotrexate is also written for psoriasis and rheumatoid arthritis.",
        note: "Correct. As the note writes it, methotrexate and fluorouracil are antimetabolites; methotrexate is also listed for psoriasis and rheumatoid arthritis.",
      },
      {
        text: "Methotrexate is bleomycin and fluorouracil is doxorubicin.",
        note: "No. Bleomycin is Blenoxane and doxorubicin is Doxil, the antibiotic anti-neoplastics.",
      },
      {
        text: "Both are vinca alkaloids that block mitosis.",
        note: "No. Mitotic spindle blockade is the vinca alkaloid mechanism.",
      },
    ],
    answer: 1,
    page: "20",
  },
  {
    id: "drug-073",
    topicId: "DRUG",
    topic: "Anti-neoplastic",
    scene: "A nurse looks at tamoxifen, vinblastine, and vincristine on a cancer chart.",
    ask: "Which uses match the note?",
    choices: [
      {
        text: "Tamoxifen is written for advanced estrogen-receptor positive breast cancer; vinblastine and vincristine are anti-neoplastics, and vincristine is classed as miscellaneous.",
        note: "Correct. As the note writes it, tamoxifen is for estrogen-receptor positive breast cancer, and vinblastine and vincristine are anti-neoplastic agents, with vincristine marked miscellaneous.",
      },
      {
        text: "Tamoxifen is an alkylating agent for testicular cancer only.",
        note: "No. Testicular cancer appears with several cytotoxics, but tamoxifen is the hormone-directed breast-cancer drug.",
      },
      {
        text: "All three are anti-neoplastic antibiotics.",
        note: "No. The antibiotic anti-neoplastics named are doxorubicin and bleomycin.",
      },
      {
        text: "Vincristine is tamoxifen and vinblastine is ifosfamide.",
        note: "No. Ifosfamide is Ifex, an alkylating agent.",
      },
    ],
    answer: 0,
    page: "20",
  },
  {
    id: "drug-074",
    topicId: "DRUG",
    topic: "Anti-neoplastic",
    scene: "A nurse looks at mechanism lines for doxorubicin, cisplatin, and fluorouracil.",
    ask: "Which mechanism set matches the note?",
    choices: [
      {
        text: "All three block estrogen receptors.",
        note: "No. Estrogen-receptor blockade is the tamoxifen line.",
      },
      {
        text: "Cisplatin inhibits microtubule assembly and doxorubicin is a hormone antagonist.",
        note: "No. Microtubule assembly is the vinca line, and the hormone antagonist named is tamoxifen.",
      },
      {
        text: "Fluorouracil is a vinca alkaloid that stops the mitotic spindle.",
        note: "No. The mitotic-spindle drugs are vinblastine and vincristine.",
      },
      {
        text: "Doxorubicin binds DNA and inhibits DNA and RNA synthesis; cisplatin cross-links DNA; fluorouracil imitates a nucleotide and inhibits DNA synthesis.",
        note: "Correct. As the note writes it, antitumour antibiotics such as doxorubicin bind DNA, alkylators such as cisplatin cross-link DNA, and antimetabolites such as fluorouracil mimic nucleotides to block DNA synthesis.",
      },
    ],
    answer: 3,
    page: "21",
  },
  {
    id: "drug-075",
    topicId: "DRUG",
    topic: "Vinca alkaloid",
    scene: "A nurse looks at vinblastine and vincristine on a spindle diagram.",
    ask: "How does the note say vinca alkaloids work?",
    choices: [
      {
        text: "They cross-link DNA like alkylating agents.",
        note: "No. DNA cross-linking is the alkylating-agent mechanism, as with cisplatin.",
      },
      {
        text: "They block estrogen receptors like tamoxifen.",
        note: "No. Estrogen-receptor blockade is the tamoxifen mechanism.",
      },
      {
        text: "They inhibit microtubule polymerisation and stop cells in the mitotic M phase.",
        note: "Correct. As the note writes it, vinca alkaloids act on the mitotic spindle, inhibit microtubule assembly, and block M phase.",
      },
      {
        text: "They inhibit phosphodiesterase in bronchial muscle.",
        note: "No. Phosphodiesterase inhibition is the theophylline mechanism.",
      },
    ],
    answer: 2,
    page: "21",
  },
  {
    id: "drug-076",
    topicId: "DRUG",
    topic: "Anti-neoplastic antibiotic",
    scene: "A nurse looks at Blenoxane beside a DNA note.",
    ask: "What does the note say bleomycin does to DNA?",
    choices: [
      {
        text: "It blocks estrogen receptors in breast cancer.",
        note: "No. Estrogen-receptor blockade is written for tamoxifen.",
      },
      {
        text: "It causes DNA strand breaks and thereby stops proliferation.",
        note: "Correct. As the note writes it, bleomycin causes DNA chain breaks, unlike the estrogen-receptor block written for tamoxifen.",
      },
      {
        text: "It inhibits microtubules in M phase like vincristine.",
        note: "No. Microtubule inhibition is the vinca alkaloid mechanism.",
      },
      {
        text: "It is a xanthine oxidase inhibitor for gout.",
        note: "No. Xanthine oxidase inhibition is the allopurinol and febuxostat line.",
      },
    ],
    answer: 1,
    page: "21",
  },
  {
    id: "drug-077",
    topicId: "DRUG",
    topic: "Antigout",
    scene: "A nurse looks at Zyloric on a chronic gout chart.",
    ask: "What is Zyloric, and what enzyme does the note say it inhibits?",
    choices: [
      {
        text: "Allopurinol, a xanthine oxidase inhibitor that lowers uric acid synthesis for chronic gout.",
        note: "Correct. As the note writes it, Zyloric (allopurinol) inhibits xanthine oxidase, decreases uric acid formation, and is for chronic gout and hyperuricaemia.",
      },
      {
        text: "Colchicine, a microtubule inhibitor for acute joint inflammation.",
        note: "No. Colchicine is Colgout, the microtubule inhibitor, not Zyloric.",
      },
      {
        text: "Probenecid, a uricosuric that increases uric acid excretion.",
        note: "No. Probenecid is the uricosuric, not the xanthine oxidase inhibitor.",
      },
      {
        text: "Tranexamic acid, a haemostatic antifibrinolytic.",
        note: "No. Tranexamic acid is Transamin/Cyklokapron, a haemostatic.",
      },
    ],
    answer: 0,
    page: "22",
  },
  {
    id: "drug-078",
    topicId: "DRUG",
    topic: "Antigout",
    scene: "A nurse looks at Uloric and Colgout on a gout chart.",
    ask: "Which pairing matches the note?",
    choices: [
      {
        text: "Uloric is probenecid and Colgout is allopurinol.",
        note: "No. Probenecid is a uricosuric and allopurinol is Zyloric.",
      },
      {
        text: "Both are uricosuric agents that block uric acid reabsorption.",
        note: "No. Blocking uric acid reabsorption is the uricosuric mechanism of probenecid and sulfinpyrazone.",
      },
      {
        text: "Colgout is tranexamic acid and Uloric is warfarin.",
        note: "No. Tranexamic acid is the haemostatic and warfarin is the vitamin K antagonist anticoagulant.",
      },
      {
        text: "Uloric is febuxostat, another xanthine oxidase inhibitor; Colgout is colchicine, which inhibits microtubules and leukocyte migration into the joint.",
        note: "Correct. As the note writes it, febuxostat inhibits xanthine oxidase and colchicine inhibits microtubule polymerisation to reduce joint inflammation.",
      },
    ],
    answer: 3,
    page: "22",
  },
  {
    id: "drug-079",
    topicId: "DRUG",
    topic: "Uricosuric",
    scene: "A nurse looks at probenecid and sulfinpyrazone on a chronic gout chart.",
    ask: "What class and mechanism does the note give them?",
    choices: [
      {
        text: "Xanthine oxidase inhibitors that stop uric acid being formed.",
        note: "No. Stopping uric acid formation is allopurinol and febuxostat.",
      },
      {
        text: "Microtubule inhibitors used for acute gout inflammation.",
        note: "No. The microtubule inhibitor for gout is colchicine.",
      },
      {
        text: "Uricosuric agents that inhibit uric acid reabsorption in the renal tubule so more uric acid is excreted.",
        note: "Correct. As the note writes it, probenecid and sulfinpyrazone are uricosurics that block tubular reabsorption of uric acid.",
      },
      {
        text: "Loop diuretics that inhibit Na-K-2Cl transport.",
        note: "No. Na-K-2Cl inhibition is the loop diuretic mechanism of furosemide.",
      },
    ],
    answer: 2,
    page: "22",
  },
  {
    id: "drug-080",
    topicId: "DRUG",
    topic: "Haemostatic",
    scene: "A nurse looks at Transamin and Cyklokapron on a bleeding chart.",
    ask: "What drug and action does the note give these brands?",
    choices: [
      {
        text: "Both are warfarin, a vitamin K antagonist.",
        note: "No. Warfarin is Warfarin Norton, the vitamin K antagonist anticoagulant.",
      },
      {
        text: "Both are tranexamic acid, a haemostatic that inhibits plasmin and slows clot breakdown.",
        note: "Correct. As the note writes it, Transamin and Cyklokapron are tranexamic acid, inhibiting plasmin so clots are not dissolved and rebleeding is reduced.",
      },
      {
        text: "Both are enoxaparin, a low-molecular-weight heparin.",
        note: "No. Enoxaparin is Clexane, the low-molecular-weight heparin.",
      },
      {
        text: "Both are allopurinol, a xanthine oxidase inhibitor.",
        note: "No. Allopurinol is Zyloric, the xanthine oxidase inhibitor.",
      },
    ],
    answer: 1,
    page: "22",
  },
  {
    id: "drug-081",
    topicId: "DRUG",
    topic: "Anticoagulant",
    scene: "A nurse looks at Warfarin Norton on an anticoagulant chart.",
    ask: "What does the note say warfarin does?",
    choices: [
      {
        text: "Warfarin sodium inhibits synthesis of vitamin K-dependent factors II, VII, IX, and X, and is written for DVT, atrial fibrillation, embolisation, and myocardial infarction.",
        note: "Correct. As the note writes it, warfarin is a vitamin K antagonist anticoagulant affecting factors II, VII, IX, and X.",
      },
      {
        text: "It is an antiplatelet ADP-receptor blocker like clopidogrel.",
        note: "No. ADP-receptor blockade is the clopidogrel (Plavix) line.",
      },
      {
        text: "It inhibits factor Xa through antithrombin III like enoxaparin.",
        note: "No. Antithrombin III and factor Xa are the enoxaparin (Clexane) mechanism.",
      },
      {
        text: "It raises platelet cAMP like dipyridamole and is not called an anticoagulant.",
        note: "No. Raising platelet cAMP is the dipyridamole line; warfarin is the anticoagulant.",
      },
    ],
    answer: 0,
    page: "23",
  },
  {
    id: "drug-082",
    topicId: "DRUG",
    topic: "Anticoagulant and antiplatelet",
    scene: "A nurse looks at Clexane and Plavix on a clot-prevention chart.",
    ask: "Which pairing matches the note?",
    choices: [
      {
        text: "Clexane is warfarin and Plavix is tranexamic acid.",
        note: "No. Warfarin is the vitamin K antagonist and tranexamic acid is the haemostatic.",
      },
      {
        text: "Both are xanthine oxidase inhibitors.",
        note: "No. Xanthine oxidase inhibitors in the note are allopurinol and febuxostat.",
      },
      {
        text: "Plavix is heparin and Clexane is dipyridamole.",
        note: "No. Dipyridamole is Persantin; Clexane is the heparin product enoxaparin.",
      },
      {
        text: "Clexane is enoxaparin, a low-molecular-weight heparin that boosts antithrombin III and inhibits factor Xa; Plavix is clopidogrel, which blocks the platelet ADP receptor.",
        note: "Correct. As the note writes it, enoxaparin is LMWH acting through antithrombin III on factor Xa, and clopidogrel blocks ADP receptors on platelets.",
      },
    ],
    answer: 3,
    page: "23",
  },
  {
    id: "drug-083",
    topicId: "DRUG",
    topic: "Antiplatelet",
    scene: "A nurse looks at Persantin beside a heart-valve note.",
    ask: "What antiplatelet mechanism does the note give dipyridamole?",
    choices: [
      {
        text: "It inhibits vitamin K-dependent clotting factors II, VII, IX, and X.",
        note: "No. Those factors are the warfarin mechanism.",
      },
      {
        text: "It blocks the platelet ADP receptor like clopidogrel.",
        note: "No. ADP-receptor blockade is clopidogrel (Plavix).",
      },
      {
        text: "It inhibits platelet uptake of adenosine, raises cAMP inside platelets, and inhibits aggregation; the note also calls it a vasodilator.",
        note: "Correct. As the note writes it, Persantin (dipyridamole) raises platelet cAMP by inhibiting adenosine uptake and is used with warfarin for valve-related thromboembolism.",
      },
      {
        text: "It inhibits plasmin like tranexamic acid.",
        note: "No. Plasmin inhibition is the tranexamic acid mechanism.",
      },
    ],
    answer: 2,
    page: "23",
  },
  {
    id: "drug-084",
    topicId: "DRUG",
    topic: "Vitamin",
    scene: "A nurse looks at vitamin B1 and B6 indications on a chart.",
    ask: "Which uses match the note?",
    choices: [
      {
        text: "Both are statins that inhibit HMG-CoA reductase.",
        note: "No. HMG-CoA reductase inhibition is the simvastatin (Zocor) line.",
      },
      {
        text: "Thiamine is written for polyneuritis, optic neuropathy, and cardiovascular disease; pyridoxine is written for B6 deficiency, seizures, and isoniazid therapy.",
        note: "Correct. As the note writes it, thiamine (B1) is tied to polyneuritis and cardiovascular disease, and pyridoxine (B6) is tied to isoniazid therapy and neuropathy.",
      },
      {
        text: "Pyridoxine is calcium carbonate and thiamine is sodium polystyrene sulfonate.",
        note: "No. Calcium carbonate is Oscal/Caltrate and sodium polystyrene sulfonate is Resonium A.",
      },
      {
        text: "Thiamine is the antidote named for warfarin overdose.",
        note: "No. The note names vitamin K1 (phytonadione) for warfarin excess.",
      },
    ],
    answer: 1,
    page: "24",
  },
  {
    id: "drug-085",
    topicId: "DRUG",
    topic: "Vitamin and calcium supplement",
    scene: "A nurse looks at folic acid and Oscal on a supplement chart.",
    ask: "What does the note say these are?",
    choices: [
      {
        text: "Folic acid is vitamin B9 for folate deficiency and pregnancy; Oscal/Caltrate is calcium carbonate, an antacid and calcium supplement, with a line saying not for chronic therapy.",
        note: "Correct. As the note writes it, folic acid is vitamin B9 for deficiency and pregnancy, and Oscal/Caltrate is CaCO3, an antacid and calcium supplement, with the phrase not for chronic therapy.",
      },
      {
        text: "Oscal is simvastatin and folic acid is a loop diuretic.",
        note: "No. Simvastatin is Zocor and the loop diuretic is furosemide.",
      },
      {
        text: "Both are HMG-CoA reductase inhibitors taken at night.",
        note: "No. Night-time dosing in the note is the statin (simvastatin) point.",
      },
      {
        text: "Folic acid is vitamin B1 and Oscal is sodium polystyrene sulfonate.",
        note: "No. Vitamin B1 is thiamine and the potassium-binding resin is Resonium A.",
      },
    ],
    answer: 0,
    page: "23-24",
  },
  {
    id: "drug-086",
    topicId: "DRUG",
    topic: "Antilipidemic",
    scene: "A nurse looks at Zocor on a cholesterol chart.",
    ask: "What class and lipid effects does the note give Zocor?",
    choices: [
      {
        text: "It is warfarin and it inhibits vitamin K-dependent clotting factors.",
        note: "No. Vitamin K-dependent factors are the warfarin mechanism.",
      },
      {
        text: "It is allopurinol and it lowers uric acid rather than LDL.",
        note: "No. Lowering uric acid synthesis is allopurinol.",
      },
      {
        text: "It is tranexamic acid and it inhibits plasmin.",
        note: "No. Plasmin inhibition is tranexamic acid, not simvastatin.",
      },
      {
        text: "Simvastatin, an HMG-CoA reductase inhibitor that lowers LDL and triglycerides and raises HDL.",
        note: "Correct. As the note writes it, Zocor (simvastatin) inhibits HMG-CoA reductase, decreases LDL and triglycerides, and increases HDL.",
      },
    ],
    answer: 3,
    page: "24",
  },
  {
    id: "drug-087",
    topicId: "DRUG",
    topic: "Throat preparation",
    scene: "A nurse looks at Dequadin and Strepsils on a sore-throat chart.",
    ask: "How does the note class these throat preparations?",
    choices: [
      {
        text: "Both are systemic penicillins, and Dequadin is amoxicillin.",
        note: "No. Amoxicillin is Amoxil, a penicillin, not a throat lozenge.",
      },
      {
        text: "Strepsils is codeine and Dequadin is dextromethorphan.",
        note: "No. Codeine and dextromethorphan are cough suppressants in the respiratory section.",
      },
      {
        text: "Dequadin is dequalinium chloride, a quaternary-ammonium antiseptic lozenge; Strepsils contains dichlorobenzyl alcohol and amylmetacresol.",
        note: "Correct. As the note writes it, Dequadin is dequalinium and Strepsils is dichlorobenzyl alcohol plus amylmetacresol for mouth and throat infection or sore throat.",
      },
      {
        text: "Both are proton pump inhibitors for ulcer pain.",
        note: "No. Proton pump inhibitors are the -zole antiulcer drugs.",
      },
    ],
    answer: 2,
    page: "25",
  },
  {
    id: "drug-088",
    topicId: "DRUG",
    topic: "Potassium-binding resin",
    scene: "A nurse looks at Resonium A on a high-potassium chart.",
    ask: "What is Resonium A, and how does the note say it lowers potassium?",
    choices: [
      {
        text: "It is calcium carbonate, an antacid.",
        note: "No. Calcium carbonate is Oscal/Caltrate.",
      },
      {
        text: "Sodium polystyrene sulfonate, a resin that exchanges sodium for potassium in the gut so potassium leaves the body.",
        note: "Correct. As the note writes it, Resonium A is sodium polystyrene sulfonate for hyperkalaemia, swapping Na for K in the intestine.",
      },
      {
        text: "It is activated charcoal, which adsorbs many oral poisons.",
        note: "No. Activated charcoal is the adsorbent antidote, not the potassium resin.",
      },
      {
        text: "It is naloxone, an opioid antagonist.",
        note: "No. Naloxone is the opioid antagonist in the detoxifying list.",
      },
    ],
    answer: 1,
    page: "25",
  },
  {
    id: "drug-089",
    topicId: "DRUG",
    topic: "Potassium-binding resin",
    scene: "A nurse looks at a route note beside Resonium A.",
    ask: "Which routes does the note allow for Resonium A?",
    choices: [
      {
        text: "By mouth or as an enema.",
        note: "Correct. As the note writes it, sodium polystyrene sulfonate may be given orally or by enema for hyperkalaemia.",
      },
      {
        text: "Only as an intravenous bolus.",
        note: "No. The note gives oral and enema routes, not an intravenous bolus.",
      },
      {
        text: "Only as an inhaled bronchodilator.",
        note: "No. Inhaled bronchodilators in the note include salbutamol and ipratropium.",
      },
      {
        text: "Only as a throat lozenge like Dequadin.",
        note: "No. Dequadin is the throat lozenge; Resonium A is the potassium resin.",
      },
    ],
    answer: 0,
    page: "25",
  },
  {
    id: "drug-090",
    topicId: "DRUG",
    topic: "Detoxifying agent",
    scene: "A nurse looks at activated charcoal, N-acetylcysteine, and naloxone on an antidote chart.",
    ask: "Which poison match matches the note?",
    choices: [
      {
        text: "Naloxone is for benzodiazepines, NAC is for iron, and charcoal is for cyanide.",
        note: "No. Benzodiazepines map to flumazenil, iron to deferoxamine, and cyanide to hydroxocobalamin.",
      },
      {
        text: "All three reactivate acetylcholinesterase in organophosphate poisoning.",
        note: "No. Acetylcholinesterase reactivation is the pralidoxime line.",
      },
      {
        text: "Charcoal is vitamin K for warfarin, and naloxone is deferoxamine.",
        note: "No. Vitamin K1 is for warfarin and deferoxamine is the iron chelator.",
      },
      {
        text: "Activated charcoal adsorbs many oral poisons; N-acetylcysteine is the paracetamol antidote; naloxone reverses opioid effects such as heroin or morphine overdose.",
        note: "Correct. As the note writes it, charcoal is an adsorbent, NAC supplies a glutathione precursor in paracetamol poisoning, and naloxone competes at opioid receptors.",
      },
    ],
    answer: 3,
    page: "26",
  },
  {
    id: "drug-091",
    topicId: "DRUG",
    topic: "Detoxifying agent",
    scene: "A nurse looks at atropine, pralidoxime, flumazenil, and vitamin K1 on an antidote chart.",
    ask: "Which pairing matches the note?",
    choices: [
      {
        text: "Flumazenil is the opioid antidote and vitamin K1 is for paracetamol.",
        note: "No. The opioid antidote is naloxone and the paracetamol antidote is N-acetylcysteine.",
      },
      {
        text: "Pralidoxime is for iron overload and atropine is simvastatin.",
        note: "No. Iron overload is deferoxamine and simvastatin is the statin Zocor.",
      },
      {
        text: "Atropine and pralidoxime (2-PAM) are for organophosphate poisoning; flumazenil blocks the benzodiazepine site; vitamin K1 (phytonadione) is for warfarin excess.",
        note: "Correct. As the note writes it, atropine plus 2-PAM is the organophosphate pair, flumazenil antagonises benzodiazepines at GABA-A, and vitamin K1 is for warfarin over-anticoagulation.",
      },
      {
        text: "All four are heavy-metal chelators.",
        note: "No. Heavy-metal chelators in the note include dimercaprol and EDTA.",
      },
    ],
    answer: 2,
    page: "26",
  },
  {
    id: "drug-092",
    topicId: "DRUG",
    topic: "Detoxifying agent",
    scene: "A nurse looks at deferoxamine, dimercaprol, EDTA, and hydroxocobalamin.",
    ask: "Which poisoning match matches the note?",
    choices: [
      {
        text: "EDTA is for cyanide, hydroxocobalamin is for lead, and deferoxamine is for opioids.",
        note: "No. The note pairs EDTA with lead, hydroxocobalamin with cyanide, and naloxone with opioids.",
      },
      {
        text: "Deferoxamine chelates iron; dimercaprol (BAL) is for arsenic, mercury, and gold; EDTA is for lead; hydroxocobalamin binds cyanide.",
        note: "Correct. As the note writes it, deferoxamine is the iron chelator, BAL chelates arsenic, mercury, and gold, calcium disodium edetate is for lead, and hydroxocobalamin is a cyanide antidote.",
      },
      {
        text: "Dimercaprol is vitamin K and EDTA is naloxone.",
        note: "No. Vitamin K1 is phytonadione and naloxone is the opioid antagonist.",
      },
      {
        text: "All four are used only for paracetamol overdose.",
        note: "No. Paracetamol overdose in this table is N-acetylcysteine.",
      },
    ],
    answer: 1,
    page: "26",
  },
  {
    id: "drug-093",
    topicId: "DRUG",
    topic: "Antibiotic",
    scene: "A nurse looks at a table matching antibiotics to bacterial targets.",
    ask: "Which target pairing matches the note?",
    choices: [
      {
        text: "Beta-lactams inhibit cell-wall synthesis; macrolides act on the 50S ribosome; aminoglycosides act on the 30S ribosome; fluoroquinolones inhibit DNA gyrase.",
        note: "Correct. As the note writes it, beta-lactams attack the wall, macrolides hit 50S, streptomycin-type aminoglycosides hit 30S, and fluoroquinolones stop DNA gyrase.",
      },
      {
        text: "Macrolides inhibit cell-wall synthesis and beta-lactams inhibit DNA gyrase.",
        note: "No. The note gives the wall to beta-lactams and DNA gyrase to fluoroquinolones.",
      },
      {
        text: "Fluoroquinolones bind the 50S ribosome and metronidazole is an aminoglycoside.",
        note: "No. 50S is the macrolide target; metronidazole is written against anaerobic DNA, and streptomycin is the aminoglycoside.",
      },
      {
        text: "Aminoglycosides inhibit mycolic acid synthesis like isoniazid.",
        note: "No. Mycolic acid inhibition is the isoniazid line, not the aminoglycoside 30S line.",
      },
    ],
    answer: 0,
    page: "27",
  },
  {
    id: "drug-094",
    topicId: "DRUG",
    topic: "Antibiotic",
    scene: "A nurse looks at Klacid, Zinnat, Amoxil, and Flagyl on an infection chart.",
    ask: "Which identities match the note?",
    choices: [
      {
        text: "Klacid is streptomycin, Zinnat is ciprofloxacin, Amoxil is metronidazole, and Flagyl is erythromycin.",
        note: "No. Those classes are in the note, but the brands do not pair that way.",
      },
      {
        text: "All four are fluoroquinolones, and Flagyl is ciprofloxacin.",
        note: "No. Ciprofloxacin is Cipro, a fluoroquinolone; Flagyl is metronidazole.",
      },
      {
        text: "Zinnat is isoniazid and Klacid is ethambutol.",
        note: "No. Isoniazid is Rimifon and ethambutol is Myambutol, anti-tubercular drugs.",
      },
      {
        text: "Klacid is clarithromycin, a macrolide; Zinnat is oral cefuroxime, a second-generation cephalosporin; Amoxil is amoxicillin, a penicillin; Flagyl is metronidazole.",
        note: "Correct. As the note writes it, clarithromycin is a macrolide, cefuroxime is a second-generation cephalosporin (Zinnat by mouth, Zinacef by vein), amoxicillin is a penicillin, and metronidazole is Flagyl.",
      },
    ],
    answer: 3,
    page: "27",
  },
  {
    id: "drug-095",
    topicId: "DRUG",
    topic: "Antibiotic",
    scene: "A nurse looks at erythromycin and Augmentin on an antibiotic chart.",
    ask: "What mechanisms does the note give?",
    choices: [
      {
        text: "Erythromycin inhibits DNA gyrase and Augmentin is salbutamol plus fluticasone.",
        note: "No. DNA gyrase is the fluoroquinolone target, and salbutamol plus fluticasone is not this antibiotic pair.",
      },
      {
        text: "Both inhibit mycolic acid synthesis like isoniazid.",
        note: "No. Mycolic acid synthesis is the isoniazid mechanism.",
      },
      {
        text: "Erythromycin inhibits the 50S ribosomal subunit; Augmentin is amoxicillin plus clavulanic acid, the penicillin inhibiting the cell wall and clavulanic acid inhibiting beta-lactamase.",
        note: "Correct. As the note writes it, erythromycin blocks 50S protein synthesis and Augmentin pairs amoxicillin with the beta-lactamase inhibitor clavulanic acid.",
      },
      {
        text: "Augmentin is cefuroxime alone and erythromycin binds fungal ergosterol.",
        note: "No. Cefuroxime is Zinnat/Zinacef, and ergosterol binding is the nystatin line.",
      },
    ],
    answer: 2,
    page: "28",
  },
  {
    id: "drug-096",
    topicId: "DRUG",
    topic: "Antibiotic",
    scene: "A nurse looks at cloxacillin and Flagyl on a chart.",
    ask: "What special coverage does the note write?",
    choices: [
      {
        text: "Cloxacillin binds the 30S ribosome and Flagyl is a macrolide.",
        note: "No. 30S binding is streptomycin, and macrolides include erythromycin and clarithromycin.",
      },
      {
        text: "Cloxacillin is a beta-lactamase-resistant penicillin for gram-positive organisms such as staphylococci; metronidazole damages DNA and is written for anaerobes and protozoa.",
        note: "Correct. As the note writes it, cloxacillin resists beta-lactamase, and Flagyl (metronidazole) disrupts DNA in anaerobic bacteria and protozoa.",
      },
      {
        text: "Both are fluoroquinolones that only inhibit DNA gyrase.",
        note: "No. DNA gyrase inhibition is ciprofloxacin and levofloxacin.",
      },
      {
        text: "Flagyl is acyclovir, a guanine analogue for herpes.",
        note: "No. Acyclovir is the antiviral guanine analogue, not metronidazole.",
      },
    ],
    answer: 1,
    page: "28",
  },
  {
    id: "drug-097",
    topicId: "DRUG",
    topic: "Antibiotic",
    scene: "A nurse looks at Cipro, levofloxacin, and streptomycin.",
    ask: "Which class lines match the note?",
    choices: [
      {
        text: "Ciprofloxacin and levofloxacin are fluoroquinolones that inhibit DNA gyrase and topoisomerase IV; streptomycin is an aminoglycoside that binds the 30S ribosome and is also anti-tuberculosis.",
        note: "Correct. As the note writes it, the fluoroquinolones block DNA gyrase and topoisomerase IV, and streptomycin binds 30S and is listed as an anti-tuberculosis antibiotic.",
      },
      {
        text: "All three only inhibit cell-wall cross-linking like penicillins.",
        note: "No. Cell-wall cross-linking is the beta-lactam mechanism.",
      },
      {
        text: "Streptomycin is a macrolide on the 50S subunit and ciprofloxacin is metronidazole.",
        note: "No. 50S is the macrolide target and metronidazole is Flagyl.",
      },
      {
        text: "Levofloxacin is nystatin and ciprofloxacin is rifampicin.",
        note: "No. Nystatin is Mycostatin and rifampicin is Rifadin/Rimactane.",
      },
    ],
    answer: 0,
    page: "28",
  },
  {
    id: "drug-098",
    topicId: "DRUG",
    topic: "Antitubercular",
    scene: "A nurse looks at Rimifon, Rifadin, Myambutol, and Tebrazid on a tuberculosis chart.",
    ask: "Which generic pairing matches the note?",
    choices: [
      {
        text: "Rimifon is rifampicin, Myambutol is isoniazid, and Tebrazid is streptomycin.",
        note: "No. The note pairs Rimifon with isoniazid, Myambutol with ethambutol, and streptomycin is a separate antibiotic.",
      },
      {
        text: "All four are penicillins, and Rimifon is amoxicillin.",
        note: "No. Amoxicillin is Amoxil, a penicillin, not an anti-tubercular brand.",
      },
      {
        text: "Tebrazid is acyclovir and Myambutol is nystatin.",
        note: "No. Acyclovir is the antiviral and nystatin is Mycostatin.",
      },
      {
        text: "Rimifon is isoniazid, Rifadin/Rimactane is rifampicin, Myambutol is ethambutol, and Tebrazid is pyrazinamide.",
        note: "Correct. As the note writes it, the anti-tubercular set is isoniazid, rifampicin (rifampin), ethambutol, and pyrazinamide under those brand names.",
      },
    ],
    answer: 3,
    page: "29",
  },
  {
    id: "drug-099",
    topicId: "DRUG",
    topic: "Antitubercular",
    scene: "A nurse looks at mechanism lines for the four main anti-tubercular drugs.",
    ask: "Which mechanism set matches the note?",
    choices: [
      {
        text: "All four inhibit cell-wall peptidoglycan cross-linking like penicillins.",
        note: "No. Peptidoglycan cross-linking is the beta-lactam mechanism.",
      },
      {
        text: "Ethambutol binds ergosterol and pyrazinamide inhibits viral DNA polymerase.",
        note: "No. Ergosterol binding is nystatin and viral DNA polymerase is acyclovir.",
      },
      {
        text: "Isoniazid inhibits mycolic acid synthesis; rifampicin inhibits DNA-dependent RNA polymerase; ethambutol inhibits arabinosyl transferase; pyrazinamide interferes with lipid metabolism and membrane transport.",
        note: "Correct. As the note writes it, INH blocks mycolic acid and should never be used alone, rifampicin blocks RNA polymerase, ethambutol blocks arabinosyl transferase, and pyrazinamide disturbs lipid metabolism and membrane transport.",
      },
      {
        text: "Rifampicin inhibits DNA gyrase and isoniazid is metronidazole.",
        note: "No. DNA gyrase is the fluoroquinolone target and metronidazole is Flagyl.",
      },
    ],
    answer: 2,
    page: "29",
  },
  {
    id: "drug-100",
    topicId: "DRUG",
    topic: "Antiviral and antifungal",
    scene: "A nurse looks at acyclovir and Mycostatin on an infection chart.",
    ask: "Which mechanisms match the note?",
    choices: [
      {
        text: "Acyclovir binds ergosterol and nystatin inhibits mycolic acid.",
        note: "No. Ergosterol is the nystatin target and mycolic acid is the isoniazid target.",
      },
      {
        text: "Acyclovir is a guanine analogue that inhibits viral DNA polymerase for herpes simplex and varicella-zoster; Mycostatin is nystatin, which binds fungal ergosterol and disrupts the membrane.",
        note: "Correct. As the note writes it, acyclovir stops viral DNA polymerase and nystatin binds ergosterol; nystatin is for local or oral candida, not systemic fungal infection.",
      },
      {
        text: "Both are anti-tubercular drugs, and Mycostatin is ethambutol.",
        note: "No. Ethambutol is Myambutol, an anti-tubercular drug.",
      },
      {
        text: "Nystatin inhibits DNA gyrase and acyclovir is clavulanic acid.",
        note: "No. DNA gyrase is the fluoroquinolone target and clavulanic acid is the beta-lactamase inhibitor in Augmentin.",
      },
    ],
    answer: 1,
    page: "29",
  },
  ...LAB_QUESTIONS,
];
