import type { PreQuestion } from "./types";

export const LAB_QUESTIONS: PreQuestion[] = [
  {
    id: "lab-001",
    topicId: "LAB",
    topic: "White cells",
    scene: "A ward result shows a white-cell count, and a student asks which word the lecture uses for a low count.",
    ask: "Which pair matches the slide?",
    choices: [
      {
        text: "Leukopenia is the low count. Leukocytosis is the high count. The printed range is 3.89–9.93 × 10⁹/L.",
        note: "Correct. Those are the two terms and the range on the complete-blood-count slide.",
      },
      {
        text: "Leukocytosis is the low count, and the range starts at 11.",
        note: "No. Leukocytosis is the high count. 11 is not the top of this range.",
      },
      {
        text: "Neutropenia is the name this slide uses for any low white-cell count.",
        note: "No. Neutropenia is the later neutrophil slide. This slide’s word for a low total white count is leukopenia.",
      },
      {
        text: "A count of 3.89 is already called leukopenia.",
        note: "No. 3.89 is the bottom of the printed normal range, not a result below it.",
      },
    ],
    answer: 0,
    page: "4",
  },
  {
    id: "lab-002",
    topicId: "LAB",
    topic: "White cells",
    scene: "One person is on an antibiotic and has a low white count. Another is on a corticosteroid and has a high white count.",
    ask: "What does the lecture allow you to say?",
    choices: [
      {
        text: "Both drugs are on the low-count list.",
        note: "No. Corticosteroids are listed with the causes of a high count.",
      },
      {
        text: "An antibiotic is on the low-count list. A corticosteroid is on the high-count list.",
        note: "Correct. Antibiotics are named under leukopenia. Corticosteroids are named under leukocytosis.",
      },
      {
        text: "Both drugs are on the high-count list.",
        note: "No. Antibiotics are listed with the causes of a low count.",
      },
      {
        text: "Drugs are not mentioned. Only infections move the white count.",
        note: "No. Both slides name medicines as well as diseases.",
      },
    ],
    answer: 1,
    page: "4",
  },
  {
    id: "lab-003",
    topicId: "LAB",
    topic: "White cells",
    scene: "Two results come back on the same afternoon. One person has HIV. The other is pregnant, smokes, and has been exercising.",
    ask: "Which way does the lecture point each white count?",
    choices: [
      {
        text: "Pregnancy lowers the white count. Smoking raises it only if there is tuberculosis.",
        note: "No. Pregnancy is listed under leukocytosis, and smoking is listed there on its own.",
      },
      {
        text: "HIV raises the white count because it is an infection.",
        note: "No. HIV is named under leukopenia, even though other infections are named under leukocytosis.",
      },
      {
        text: "HIV is a cause of leukopenia. Pregnancy, smoking, and exercise are causes of leukocytosis.",
        note: "Correct. HIV sits with the low-count causes. Pregnancy, smoking, and exercise sit with the high-count causes.",
      },
      {
        text: "Exercise lowers the white count by using the cells up.",
        note: "No. Exercise is on the high-count list, not the low-count list.",
      },
    ],
    answer: 2,
    page: "4",
  },
  {
    id: "lab-004",
    topicId: "LAB",
    topic: "Haemoglobin",
    scene: "A haemoglobin of 10.2 g/dL is reported. The person has kidney failure and a long history of thalassaemia in the family.",
    ask: "How does this lecture name the result, and which causes apply?",
    choices: [
      {
        text: "The range is 13–17, so 10.2 is anaemia, but kidney failure is not a cause on this slide.",
        note: "No. This slide’s range is 11.5–14.8, and kidney failure is named.",
      },
      {
        text: "Thalassaemia raises haemoglobin. Only blood loss counts as anaemia.",
        note: "No. Abnormal haemoglobin structure, including thalassaemia and sickle cell, is a cause of anaemia.",
      },
      {
        text: "10.2 is inside 11.5–14.8, so the result is not anaemia.",
        note: "No. 10.2 is below 11.5.",
      },
      {
        text: "A low haemoglobin is anaemia. Kidney failure and thalassaemia are both on the cause list, with sickle cell, blood loss, iron, B12, folate, marrow replacement by cancer, and chemotherapy.",
        note: "Correct. The printed range is 11.5–14.8 g/dL, so 10.2 is below it, and both of those diseases are named.",
      },
    ],
    answer: 3,
    page: "5",
  },
  {
    id: "lab-005",
    topicId: "LAB",
    topic: "Anaemia treatment",
    scene: "A family has bought a large bottle of iron and intends to double the dose until the haemoglobin rises. The person is pale after a large bleed and the blood pressure is low.",
    ask: "What does the treatment slide say?",
    choices: [
      {
        text: "Too much supplement does not improve anaemia, and that has to be taught. Transfusion is for acute blood loss or severe haemolysis when perfusion has fallen. Intravenous fluid replaces volume.",
        note: "Correct. The three treatments are supplements, used with that warning, transfusion for those two settings, and fluid for lost volume.",
      },
      {
        text: "Double the iron. Supplements work in proportion to the dose, and transfusion is not mentioned.",
        note: "No. The slide says too much intake cannot improve anaemia.",
      },
      {
        text: "Transfuse, and do not give intravenous fluid, because fluid dilutes the new blood.",
        note: "No. Fluid is a separate treatment, to restore volume or electrolytes.",
      },
      {
        text: "Fluid alone replaces the red cells, so transfusion is only for a low platelet count.",
        note: "No. Fluid replaces volume. Transfusion is the treatment named for lost blood or severe haemolysis.",
      },
    ],
    answer: 0,
    page: "6",
  },
  {
    id: "lab-006",
    topicId: "LAB",
    topic: "Anaemia assessment",
    scene: "Before the care plan, the nurse asks about a sulfa antibiotic, how much alcohol and for how long, a sister with sickle cell disease, and daily marathon training.",
    ask: "Which of those questions does the lecture want?",
    choices: [
      {
        text: "Only the diet. Medicines and family history belong to the clotting lecture.",
        note: "No. Medication history and family history are both written on the anaemia assessment slide.",
      },
      {
        text: "All of them. Medicines can suppress marrow, cause haemolysis, or interfere with folate. Alcohol needs amount and duration. Some anaemias are inherited. Extreme exercise can reduce red-cell production and survival. Diet is the remaining item.",
        note: "Correct. Those are the assessment headings, together with the health history and the physical exam.",
      },
      {
        text: "Skip the training. Exercise raises haemoglobin and is not part of an anaemia history.",
        note: "No. Athletic endeavour is an assessment item because extreme exercise can decrease erythropoiesis and red-cell survival.",
      },
      {
        text: "Ask about alcohol only if the person is jaundiced. Amount and duration are not required.",
        note: "No. The slide asks for an accurate history of amount and duration.",
      },
    ],
    answer: 1,
    page: "7",
  },
  {
    id: "lab-007",
    topicId: "LAB",
    topic: "Nursing diagnosis",
    scene: "The haemoglobin is low, the person is exhausted, eating poorly, and the feet are cool.",
    ask: "Which nursing diagnoses does the lecture list?",
    choices: [
      {
        text: "Only acute pain, because anaemia is painful before it is tiring.",
        note: "No. Pain is not the diagnosis this slide writes. Fatigue is.",
      },
      {
        text: "Excess fluid volume, because a low haemoglobin means the plasma is overloaded.",
        note: "No. The perfusion diagnosis is insufficient haemoglobin, not fluid overload.",
      },
      {
        text: "Fatigue from decreased haemoglobin and less oxygen carried. Nutrition less than body requirements. Altered tissue perfusion from insufficient haemoglobin and haematocrit.",
        note: "Correct. Those are the three diagnoses on the NANDA slide.",
      },
      {
        text: "Nutrition more than body requirements, because supplements are the treatment.",
        note: "No. The nutrition diagnosis is less than body requirements.",
      },
    ],
    answer: 2,
    page: "8",
  },
  {
    id: "lab-008",
    topicId: "LAB",
    topic: "Planning",
    scene: "The team writes the anaemia goals at the end of the shift.",
    ask: "Which set is the one on the planning slide?",
    choices: [
      {
        text: "A normal haemoglobin by the next morning, and nothing else.",
        note: "No. The goals are about fatigue, nutrition, perfusion, compliance, and complications, not a same-day number.",
      },
      {
        text: "Less fatigue only. Nutrition and perfusion are evaluation items, not goals.",
        note: "No. Nutrition and perfusion are written as goals, and they return as outcomes.",
      },
      {
        text: "Compliance is left out, because the slide says teaching is optional.",
        note: "No. Compliance with prescribed therapy is one of the goals.",
      },
      {
        text: "Less fatigue, adequate nutrition, adequate tissue perfusion, compliance with the prescribed therapy, and no complications.",
        note: "Correct. Those five are the goals.",
      },
    ],
    answer: 3,
    page: "9",
  },
  {
    id: "lab-009",
    topicId: "LAB",
    topic: "Fatigue and food",
    scene: "A person with chronic anaemia stays in bed all day to “save energy.” They also drink heavily. The family cooks one traditional dish at every meal.",
    ask: "What does the intervention slide want?",
    choices: [
      {
        text: "Help them balance activity and rest. Chronic anaemia still needs some activity, or inactivity deconditions them. Alcohol interferes with the use of nutrients. Diet teaching includes the family and the way they cook.",
        note: "Correct. Priority-setting, continued activity, the alcohol warning, and cultural teaching are all on that slide.",
      },
      {
        text: "Strict bed rest until the haemoglobin is normal. Activity is for after discharge only.",
        note: "No. The slide says people with chronic anaemia need to keep some physical activity.",
      },
      {
        text: "Tell them alcohol improves iron absorption, so the intake should continue.",
        note: "No. Alcohol interferes with the utilisation of essential nutrients.",
      },
      {
        text: "Give a standard menu and do not involve the family, so the advice stays consistent.",
        note: "No. Teaching is individual, includes the family, and includes cultural preference and preparation.",
      },
    ],
    answer: 0,
    page: "10",
  },
  {
    id: "lab-010",
    topicId: "LAB",
    topic: "Transfusion watch",
    scene: "A transfusion has just started for severe haemolysis.",
    ask: "What does this lecture tell the nurse to monitor for perfusion?",
    choices: [
      {
        text: "Only the urine colour. Vital signs wait until the bag is finished.",
        note: "No. Vital signs and oximetry are the monitoring named during transfusion.",
      },
      {
        text: "Vital signs and the pulse oximeter, closely.",
        note: "Correct. That is the perfusion intervention written under blood-transfusion monitoring.",
      },
      {
        text: "A peak-flow rate, because anaemia is treated as asthma.",
        note: "No. Peak flow is not the transfusion watch on this slide.",
      },
      {
        text: "The Glasgow coma scale every minute, and no oximeter.",
        note: "No. The slide names vital signs and the pulse oximeter.",
      },
    ],
    answer: 1,
    page: "10",
  },
  {
    id: "lab-011",
    topicId: "LAB",
    topic: "High haemoglobin",
    scene: "A smoker who has just flown home from a high city has a haemoglobin above the range. They have also been dehydrated on the flight. A second person, an athlete, has been injecting erythropoietin.",
    ask: "How does the lecture separate these?",
    choices: [
      {
        text: "Dehydration causes a true, lasting rise. Fluid will not change the result.",
        note: "No. The slide says the false rise disappears when fluid balance is restored.",
      },
      {
        text: "Smoking lowers haemoglobin. Only altitude raises it.",
        note: "No. Both living at altitude and smoking are the common high results.",
      },
      {
        text: "Altitude and smoking raise haemoglobin. Dehydration makes a falsely high result that falls when fluid is restored. Erythropoietin abuse is a less common cause, with emphysema, some tumours, and polycythaemia rubra vera.",
        note: "Correct. Those are the groupings on the high-haemoglobin slide.",
      },
      {
        text: "Erythropoietin is a treatment for anaemia on this slide, not a cause of a high result.",
        note: "No. Abuse of erythropoietin by athletes is listed as an infrequent cause of a high haemoglobin.",
      },
    ],
    answer: 2,
    page: "12",
  },
  {
    id: "lab-012",
    topicId: "LAB",
    topic: "Low platelets",
    scene: "The platelet count is 90 × 10⁹/L. A student asks what the two broad reasons are.",
    ask: "What does the lecture say?",
    choices: [
      {
        text: "The range starts at 50, so 90 is normal.",
        note: "No. The printed range is 154–371.",
      },
      {
        text: "A low count means thrombocytosis, and the only cause is infection.",
        note: "No. Thrombocytosis is the high count, on a later slide.",
      },
      {
        text: "Platelets are low only when they are destroyed. The marrow is not part of this lecture.",
        note: "No. Failure of production is the first of the two categories.",
      },
      {
        text: "The range is 154–371 × 10⁹/L, so this is thrombocytopenia. Either the marrow cannot make enough, or platelets are used up or destroyed faster than they are made.",
        note: "Correct. Those are the two categories under the printed range.",
      },
    ],
    answer: 3,
    page: "13",
  },
  {
    id: "lab-013",
    topicId: "LAB",
    topic: "Causes of a low count",
    scene: "The drug chart shows aspirin and ibuprofen. The history includes hepatitis, lymphoma, and cirrhosis.",
    ask: "Where do those items sit?",
    choices: [
      {
        text: "All of them are examples of a low platelet count, together with HIV, leukaemia, sepsis, and toxic chemicals.",
        note: "Correct. That is the example list on the thrombocytopenia slide.",
      },
      {
        text: "Aspirin raises platelets. Only cirrhosis lowers them.",
        note: "No. Aspirin and ibuprofen are both on the low-count example list.",
      },
      {
        text: "Lymphoma is a cause of thrombocytosis only, never of a low count.",
        note: "No. Lymphoma is on the low-count examples. It returns later as a cause of a high count as well, but this list includes it.",
      },
      {
        text: "Hepatitis lowers neutrophils only. It is not a platelet example.",
        note: "No. Hepatitis is named on the platelet slide, with HIV.",
      },
    ],
    answer: 0,
    page: "13",
  },
  {
    id: "lab-014",
    topicId: "LAB",
    topic: "Raising the count",
    scene: "Medicines are being chosen for a person with immune thrombocytopenia.",
    ask: "Which drug does which job, on this lecture?",
    choices: [
      {
        text: "Immunoglobulin is given to raise the count directly, and corticosteroids are only for pain.",
        note: "No. Corticosteroids are the drugs said to try to increase the count. Immunoglobulin is for the autoimmune disease.",
      },
      {
        text: "Corticosteroids try to raise the platelet count. Intravenous immunoglobulin is for autoimmune disease and acute infection. WinRho is an alternate to that immunoglobulin.",
        note: "Correct. Those are the three medicine lines.",
      },
      {
        text: "WinRho replaces a platelet transfusion and is not related to immunoglobulin.",
        note: "No. The slide calls WinRho an alternate to traditional intravenous immunoglobulin.",
      },
      {
        text: "None of these drugs are for platelets. They are thyroid drugs.",
        note: "No. They are the medical treatment of the low platelet count.",
      },
    ],
    answer: 1,
    page: "14",
  },
  {
    id: "lab-015",
    topicId: "LAB",
    topic: "Surgery and rituximab",
    scene: "Medicines have not worked for an adult with immune thrombocytopenia. Another person has already had a splenectomy and still has lymphoma.",
    ask: "What does the lecture offer each of them?",
    choices: [
      {
        text: "Splenectomy is first-line for children, before any medicine.",
        note: "No. The slide says surgery if medicines do not work, and mostly for adults with immune thrombocytopenia.",
      },
      {
        text: "Rituximab is the plasma exchange used before any surgery.",
        note: "No. Plasma exchange is a different line, for thrombotic thrombocytopenic purpura. Rituximab is the drug named after splenectomy.",
      },
      {
        text: "Splenectomy is used mostly for adults with immune thrombocytopenia when medicines fail. Rituximab is used for lymphoma, leukaemia, and autoimmune disease after splenectomy.",
        note: "Correct. Those are the surgery line and the rituximab line.",
      },
      {
        text: "Remove the spleen for thrombotic thrombocytopenic purpura, and do not use rituximab at all.",
        note: "No. Plasma exchange is the treatment named for that purpura. Rituximab is on the medicine list.",
      },
    ],
    answer: 2,
    page: "14",
  },
  {
    id: "lab-016",
    topicId: "LAB",
    topic: "Replacing blood",
    scene: "One order is a platelet transfusion. Another is plasma exchange for thrombotic thrombocytopenic purpura.",
    ask: "What is each one, on this slide?",
    choices: [
      {
        text: "Plasma exchange is the first treatment for immune thrombocytopenia, and platelets are never transfused.",
        note: "No. Splenectomy is the surgery for immune thrombocytopenia. Plasma exchange is named for thrombotic thrombocytopenic purpura.",
      },
      {
        text: "Packed red cells are used only for a high platelet count.",
        note: "No. Transfusion replaces blood lost, with packed red cells or platelets, on the low-count treatment slide.",
      },
      {
        text: "Plasma exchange removes platelets and does not replace the plasma.",
        note: "No. The slide describes removal of the person’s plasma and replacement with donor plasma.",
      },
      {
        text: "Transfusion replaces lost blood with packed red cells or platelets. Plasma exchange removes the person’s plasma and replaces it with donor plasma, and it is the treatment named for thrombotic thrombocytopenic purpura.",
        note: "Correct. Those are the third and fourth treatments.",
      },
    ],
    answer: 3,
    page: "14",
  },
  {
    id: "lab-017",
    topicId: "LAB",
    topic: "Bleeding precautions, needles",
    scene: "The platelet count is very low. A colleague is about to give an intramuscular injection and then a rectal suppository.",
    ask: "What does the nursing list forbid?",
    choices: [
      {
        text: "No intramuscular or subcutaneous injection. Use a small needle for a venous or arterial puncture and press for a long time. No anticoagulant unless a doctor agrees. No rectal medicines, enemas, or vaginal douches.",
        note: "Correct. Those are on the intervention list, with watching for nosebleed, coughed blood, gum bleeding, and purpura.",
      },
      {
        text: "Intramuscular injection is preferred, because the muscle will tamponade the bleeding.",
        note: "No. Intramuscular and subcutaneous injections are to be avoided.",
      },
      {
        text: "A large needle is safer. Pressure is not needed after a venous sample.",
        note: "No. The slide says a small gauge and gentle prolonged pressure.",
      },
      {
        text: "Rectal medicines are encouraged, because the gut is not a bleeding site.",
        note: "No. Per-rectal medicines, enemas, and douches are on the avoid list.",
      },
    ],
    answer: 0,
    page: "15",
  },
  {
    id: "lab-018",
    topicId: "LAB",
    topic: "Mouth, food, strain",
    scene: "The same person asks if they may floss, eat a steak, and strain on the toilet.",
    ask: "What is the lecture’s advice?",
    choices: [
      {
        text: "Floss daily. Avoid the toothbrush, because bristles cut the gum.",
        note: "No. The toothbrush is the soft one they should use. Floss is what they should avoid.",
      },
      {
        text: "Soft toothbrush, no floss. A semi-solid or liquid diet. Enough fluid to avoid constipation. Do not strain.",
        note: "Correct. Those four points are together on the list.",
      },
      {
        text: "A high-fibre crust and straining are the way to prevent constipation.",
        note: "No. Fluid is the constipation advice, and straining is forbidden.",
      },
      {
        text: "Nil by mouth until the platelets recover.",
        note: "No. The diet is semi-solid or liquid, not a fast.",
      },
    ],
    answer: 1,
    page: "15",
  },
  {
    id: "lab-019",
    topicId: "LAB",
    topic: "Nosebleed and the bed",
    scene: "The person has a nosebleed. They also want to walk barefoot to the toilet at night.",
    ask: "What does the slide add?",
    choices: [
      {
        text: "Lie flat and blow the nose hard to clear the clot.",
        note: "No. The position is high Fowler’s, and nose-blowing is to be avoided.",
      },
      {
        text: "Raise the bed, take the rails down, and encourage bare feet so falls are less likely.",
        note: "No. The bed is kept low, the rails are up, and bare feet are avoided.",
      },
      {
        text: "High Fowler’s position, pressure, and ice. No nose-blowing. Moisten the mucosa with drops. Keep the bed low with the rails up. No bare feet, no tight clothes, and no contact sport.",
        note: "Correct. The nosebleed actions and the injury precautions are both on the list. Blood pressure is taken only when necessary.",
      },
      {
        text: "Ice is for a fever only. A nosebleed is treated with a hot pack.",
        note: "No. Ice and pressure are the local treatment named for epistaxis.",
      },
    ],
    answer: 2,
    page: "15",
  },
  {
    id: "lab-020",
    topicId: "LAB",
    topic: "What else to avoid",
    scene: "The person drinks daily, plays football, and uses an insecticide at work. They ask about aspirin for a headache, and about vaccines.",
    ask: "What does the same list say?",
    choices: [
      {
        text: "Aspirin is now safe, because the count is already low.",
        note: "No. Aspirin and ibuprofen are named again as medicines that increase bleeding.",
      },
      {
        text: "Alcohol protects platelets. Contact sport is encouraged to keep them circulating.",
        note: "No. Alcohol can worsen the bleeding problem, and contact sport is to be avoided.",
      },
      {
        text: "Vaccines are contraindicated. Insecticide exposure does not matter.",
        note: "No. Vaccination against those four infections is instructed, and pesticides are on the chemical list.",
      },
      {
        text: "Stop alcohol. No contact sport. Avoid pesticides, arsenic, and benzene. Avoid aspirin and ibuprofen. Vaccinate against mumps, measles, rubella, and chickenpox. Give mouth care with swabs or saline so the mucosa stays moist.",
        note: "Correct. Those are the remaining precautions, with reporting a transfusion reaction and watching intake and output.",
      },
    ],
    answer: 3,
    page: "15",
  },
  {
    id: "lab-021",
    topicId: "LAB",
    topic: "High platelets",
    scene: "The count is high after a splenectomy. The person also has iron-deficiency anaemia and takes an oral contraceptive.",
    ask: "What does the lecture call this, and what is the risk?",
    choices: [
      {
        text: "Thrombocytosis, usually reactive. Cancer, iron-deficiency and haemolytic anaemia, inflammatory bowel disease, rheumatoid arthritis, tuberculosis, splenectomy, and oral contraceptives are the causes named. Clotting and bleeding can both occur.",
        note: "Correct. The extra platelets may not function normally, so bleeding is possible as well as thrombosis.",
      },
      {
        text: "This is thrombocytopenia. A removed spleen always lowers the count.",
        note: "No. Loss of the spleen is on the high-count list.",
      },
      {
        text: "Only clotting is a risk. Platelet function stays normal when the count is high.",
        note: "No. The slide says the platelets may not function normally, so bleeding is also a problem.",
      },
      {
        text: "Oral contraceptives lower platelets and are a treatment for thrombocytosis.",
        note: "No. Oral contraceptives are listed as a cause of the high count.",
      },
    ],
    answer: 0,
    page: "16",
  },
  {
    id: "lab-022",
    topicId: "LAB",
    topic: "Treating a high count",
    scene: "The count is above 1,000,000/μL in someone whose thrombocytosis follows inflammatory bowel disease. A colleague wants a drug to lower the platelets directly, and also wants to withhold iron.",
    ask: "What does the treatment slide say?",
    choices: [
      {
        text: "Never give aspirin when the count is high. Aspirin is only for a low count.",
        note: "No. Aspirin is to be avoided when the count is low. At this very high count, 65 mg daily may be considered.",
      },
      {
        text: "Treat the cause. Iron may bring the count back to normal in inflammatory bowel disease. In general, do not treat the count itself. Above 1,000,000/μL, aspirin 65 mg daily may be considered to reduce the rare stroke or thrombosis.",
        note: "Correct. That is the whole of the short treatment slide.",
      },
      {
        text: "Give iron only if the count is low. A high count is treated by platelet transfusion.",
        note: "No. Iron is the example for inflammatory-bowel thrombocytosis. Transfusion is not the treatment of a high count.",
      },
      {
        text: "Lower the count first, with a direct drug, and ignore the bowel disease.",
        note: "No. The primary treatment addresses the underlying cause, and in general no treatment is aimed at the count itself.",
      },
    ],
    answer: 1,
    page: "17",
  },
  {
    id: "lab-023",
    topicId: "LAB",
    topic: "Neutrophils",
    scene: "The neutrophil count is 8.5 × 10⁹/L, and most of the white cells on the film are neutrophils.",
    ask: "What does the lecture call that, and what does it usually mean?",
    choices: [
      {
        text: "The range goes up to 15, so 8.5 is normal and needs no name.",
        note: "No. 7.42 is the top of the printed range.",
      },
      {
        text: "A high percentage is neutropenia, and it means the marrow has failed.",
        note: "No. Neutropenia is the low count. Neutrophilia is the high percentage.",
      },
      {
        text: "The range is 2.01–7.42 × 10⁹/L. A high percentage is neutrophilia, and it is read as a sign of infection.",
        note: "Correct. Neutrophils are described as most of the white cells that lead the immune response.",
      },
      {
        text: "Neutrophils are a kind of platelet. The count is read on the clotting screen.",
        note: "No. The slide says neutrophils are a type of white blood cell.",
      },
    ],
    answer: 2,
    page: "18",
  },
  {
    id: "lab-024",
    topicId: "LAB",
    topic: "Why neutrophils rise",
    scene: "There is no fever. The person has just had surgery, smokes, is on a steroid, and had a heart attack last week. The film still shows neutrophilia.",
    ask: "Is infection the only cause the lecture allows?",
    choices: [
      {
        text: "Only bacterial infection. Surgery and steroids do not move neutrophils.",
        note: "No. Surgery and steroid use are both on the high-neutrophil list.",
      },
      {
        text: "A heart attack lowers neutrophils. Steroids are on the low list.",
        note: "No. Heart attack and steroids are causes of a high neutrophil level.",
      },
      {
        text: "Chronic myeloid leukaemia is a cause of neutropenia, not neutrophilia.",
        note: "No. It is on the high-neutrophil list. Leukaemia returns on the low list as well, but this question is the high list.",
      },
      {
        text: "Infection, most likely bacterial, is the first cause, but the list also includes inflammation without infection, injury, surgery, tobacco, stress, hard exercise, steroids, heart attack, and chronic myeloid leukaemia.",
        note: "Correct. A high neutrophil count is not restricted to infection.",
      },
    ],
    answer: 3,
    page: "19",
  },
  {
    id: "lab-025",
    topicId: "LAB",
    topic: "Why neutrophils fall",
    scene: "The count is low. The person is on chemotherapy, afebrile this morning, and the note mentions Kostmann syndrome as a childhood diagnosis.",
    ask: "What else belongs on the low-neutrophil list, and which situation is the emergency?",
    choices: [
      {
        text: "Drugs, including chemotherapy, a suppressed immune system, marrow failure, aplastic anaemia, hepatitis A, B or C, HIV, sepsis, rheumatoid arthritis, leukaemia, and myelodysplastic syndrome. Febrile neutropenia is the medical emergency.",
        note: "Correct. Kostmann syndrome and cyclic neutropenia are the congenital examples beside those.",
      },
      {
        text: "Febrile neutropenia can wait until a source is proven on a culture.",
        note: "No. The slide calls febrile neutropenia a medical emergency.",
      },
      {
        text: "Chemotherapy raises neutrophils. Only congenital disease lowers them.",
        note: "No. Chemotherapy drugs are a leading cause of the low count.",
      },
      {
        text: "Hepatitis is not on this list. Only HIV lowers neutrophils.",
        note: "No. Hepatitis A, B, and C are all named.",
      },
    ],
    answer: 0,
    page: "20",
  },
  {
    id: "lab-026",
    topicId: "LAB",
    topic: "Treating neutropenia",
    scene: "The person is now febrile. No source has been found. They are also on a drug known to suppress the marrow, and the neutropenia after chemotherapy has been severe.",
    ask: "What does the treatment slide offer?",
    choices: [
      {
        text: "Do not give an antibiotic until a culture grows. Fever alone is observed.",
        note: "No. In neutropenic fever the assumption is that an infection is causing the fever.",
      },
      {
        text: "Treat a fever with antibiotics even when the source cannot be found. Granulocyte colony-stimulating factor stimulates the marrow and can be life-saving after chemotherapy. Change the offending drug if possible. A granulocyte transfusion is uncommon. Stem-cell transplant is for some severe marrow causes. Mild cases may need no treatment.",
        note: "Correct. Cause and severity decide the treatment.",
      },
      {
        text: "Colony-stimulating factor is withheld after chemotherapy because it suppresses the marrow further.",
        note: "No. It is used for a low count from chemotherapy and can be life-saving.",
      },
      {
        text: "A granulocyte transfusion is the usual first step for every mild neutropenia.",
        note: "No. Transfusion is described as very uncommon, and mild cases may need nothing.",
      },
    ],
    answer: 1,
    page: "21",
  },
  {
    id: "lab-027",
    topicId: "LAB",
    topic: "Staying safe with few neutrophils",
    scene: "A family asks about food, the shower, and the pet rabbit. They have also been told, on the platelet talk, never to floss.",
    ask: "Which precautions are the neutrophil ones?",
    choices: [
      {
        text: "The neutrophil diet is the same as a normal diet, including raw honey and undercooked meat.",
        note: "No. Those foods are on the avoid list.",
      },
      {
        text: "Flossing is forbidden in neutropenia, exactly as in thrombocytopenia.",
        note: "No. This slide includes flossing in good dental care. The floss ban is the platelet slide.",
      },
      {
        text: "Wash hands, brush and floss, avoid people who are ill, wear shoes, cover cuts, use an electric shaver, avoid animal waste and nappy changes, and avoid unpasteurised dairy, undercooked meat, and raw fruit, vegetables, grains, nuts, and honey. Stay out of hot tubs, ponds, and rivers.",
        note: "Correct. Flossing is wanted here. It was forbidden on the platelet list. Those are different precautions.",
      },
      {
        text: "Hot tubs are encouraged, because warm water raises the neutrophil count.",
        note: "No. Hot tubs, ponds, and rivers are to be avoided.",
      },
    ],
    answer: 2,
    page: "22",
  },
  {
    id: "lab-028",
    topicId: "LAB",
    topic: "Low sodium",
    scene: "Sodium is 128 mmol/L. The person is nauseated, exhausted, and dizzy, and they are on a diuretic after a large burn. They also have heart failure.",
    ask: "What is the range, and do those details fit?",
    choices: [
      {
        text: "The range is 145–155, so 128 is only mildly low and has no symptoms on this lecture.",
        note: "No. The range is 135–145, and those four symptoms are printed.",
      },
      {
        text: "A diuretic raises sodium. Burns are not a cause.",
        note: "No. Diuretics and large burns are both causes of a low sodium.",
      },
      {
        text: "Heart failure causes a high sodium only.",
        note: "No. Heart failure is on the low-sodium cause list.",
      },
      {
        text: "The range is 135–145 mmol/L. Nausea, vomiting, exhaustion, and dizziness are the symptoms. Diuretics, large burns, and heart failure are all causes, with antidepressants, some pain medicines, kidney or liver disease, diarrhoea, vomiting, high antidiuretic hormone, too much water, low urine output, sweat, ketonuria, hypothyroidism, and Addison’s disease.",
        note: "Correct. 128 is below 135, and the story uses causes from that list.",
      },
    ],
    answer: 3,
    page: "25",
  },
  {
    id: "lab-029",
    topicId: "LAB",
    topic: "Correcting a low sodium",
    scene: "Three people are hyponatraemic. One is volume-depleted. One is fluid-overloaded. One is euvolaemic.",
    ask: "What does the lecture do for each, and how fast may the sodium rise?",
    choices: [
      {
        text: "Low volume: 0.9% saline, no faster than 0.5 mmol/L per hour, and not more than 10 mmol/L in the first 24 hours even if the sodium is very low. High volume: restrict fluid, sometimes with a diuretic. Normal volume: treat the cause.",
        note: "Correct. Those are the three volume lines and the two speed limits.",
      },
      {
        text: "Low volume: free water, as fast as the line will run, aiming at a rise of 20 mmol/L in the first day.",
        note: "No. The fluid is 0.9% saline, and the rise is capped at 0.5 mmol/L per hour and 10 mmol/L in 24 hours.",
      },
      {
        text: "High volume: 0.9% saline at the same rate as the low-volume plan.",
        note: "No. High volume is fluid restriction, sometimes with a diuretic.",
      },
      {
        text: "The 10 mmol/L cap applies only to mild hyponatraemia. Severe hyponatraemia is corrected in one hour.",
        note: "No. The slide says even severe hyponatraemia should not rise more than 10 mmol/L in the first 24 hours.",
      },
    ],
    answer: 0,
    page: "26",
  },
  {
    id: "lab-030",
    topicId: "LAB",
    topic: "High sodium",
    scene: "Sodium is 151 mEq/L in an older person who is thirsty, weak, and tachycardic, with swollen hands.",
    ask: "How is hypernatraemia defined, and who is most affected?",
    choices: [
      {
        text: "Hypernatraemia starts at 160, and it is mainly a disease of young athletes.",
        note: "No. The definition on the slide is a level over 145, and the groups are older adults, infants, and the bedridden.",
      },
      {
        text: "A sodium over 145 mEq/L. Symptoms include thirst, fatigue, swollen hands and feet, weakness, insomnia, a fast heartbeat, and coma. It is most often a problem in older adults, infants, and people who are bedridden.",
        note: "Correct. 151 is over 145, and the person fits both the symptoms and the group.",
      },
      {
        text: "Swelling and a fast heartbeat mean the sodium is low, not high.",
        note: "No. Both are on the high-sodium symptom list.",
      },
      {
        text: "Thirst means the sodium is normal. Only coma counts as hypernatraemia.",
        note: "No. Thirst is the first symptom named.",
      },
    ],
    answer: 1,
    page: "27",
  },
  {
    id: "lab-031",
    topicId: "LAB",
    topic: "Causes of a high sodium",
    scene: "The history includes very little drinking, extra salt, diarrhoea, and lithium. A second person has Cushing’s syndrome.",
    ask: "Are these the lecture’s causes?",
    choices: [
      {
        text: "Lithium lowers sodium. It is not a high-sodium cause.",
        note: "No. Lithium is on the high-sodium cause list.",
      },
      {
        text: "Cushing’s syndrome is a low-sodium disease, filed with Addison’s.",
        note: "No. Addison’s is on the low-sodium list. Cushing’s is on the high-sodium list.",
      },
      {
        text: "Yes. Too little water, salty water, too much salt, sweat, diarrhoea, low vasopressin, high aldosterone, Cushing’s syndrome, oral contraceptives, corticosteroids, laxatives, lithium, and non-steroidal anti-inflammatory drugs.",
        note: "Correct. The story uses several of those, and Cushing’s is from excess cortisol on the same list.",
      },
      {
        text: "Diarrhoea lowers sodium only. It cannot raise it.",
        note: "No. Diarrhoea is named under both, in different slides. On this slide it is a cause of hypernatraemia.",
      },
    ],
    answer: 2,
    page: "27",
  },
  {
    id: "lab-032",
    topicId: "LAB",
    topic: "Treating a high sodium",
    scene: "The high sodium is from cranial diabetes insipidus, and an osmotic diuretic is still running. The person is confused.",
    ask: "What does the lecture want done?",
    choices: [
      {
        text: "Start the osmotic diuretic and withhold DDAVP, because antidiuretic hormone would raise the sodium further.",
        note: "No. DDAVP is the treatment named for cranial diabetes insipidus, and the osmotic diuretic is stopped.",
      },
      {
        text: "Restrict all fluid. High sodium is treated exactly like high-volume hyponatraemia.",
        note: "No. This slide replaces volume and free water. Fluid restriction was the high-volume low-sodium plan.",
      },
      {
        text: "Mental state is not assessed. Only the daily weight matters.",
        note: "No. Assessing mental state is an explicit line.",
      },
      {
        text: "Stop the free-water loss. Give DDAVP for cranial diabetes insipidus. Stop the osmotic diuretic. Replace intravascular volume and free water. Monitor the sodium and the fluid balance, and assess the mental state.",
        note: "Correct. Those are the five lines of the treatment slide.",
      },
    ],
    answer: 3,
    page: "28",
  },
  {
    id: "lab-033",
    topicId: "LAB",
    topic: "What potassium does",
    scene: "A student asks why the 3.5–5.0 mmol/L result matters before any symptom appears.",
    ask: "What three jobs does the lecture give potassium?",
    choices: [
      {
        text: "Nerves and muscles communicate. Nutrients move into cells and waste moves out. The heart functions.",
        note: "Correct. Those are the three jobs on the introductory potassium slide.",
      },
      {
        text: "Potassium only clots the blood. Nerve function is calcium’s job alone.",
        note: "No. Nerve and muscle communication is a potassium job. Clotting is listed under calcium.",
      },
      {
        text: "The range is 2.2–2.6, shared with calcium.",
        note: "No. 3.5–5.0 is potassium. 2.2–2.6 is calcium.",
      },
      {
        text: "Potassium’s only job is to raise the white-cell count.",
        note: "No. The three jobs are nerve and muscle, nutrient and waste movement, and the heart.",
      },
    ],
    answer: 0,
    page: "29",
  },
  {
    id: "lab-034",
    topicId: "LAB",
    topic: "Low potassium, causes",
    scene: "Potassium is 3.0 mmol/L. The person is on a diuretic, has diarrhoea, and uses a laxative every night. They also had insulin this morning and the gas shows an alkalosis.",
    ask: "What does the lecture call the common causes, and where do insulin and alkalosis fit?",
    choices: [
      {
        text: "Insulin raises the serum potassium by pulling it out of cells.",
        note: "No. The slide says insulin shifts potassium and lowers the concentration measured in the blood.",
      },
      {
        text: "Diuretics, diarrhoea, and chronic laxative abuse are the most common causes. Insulin and alkalosis move potassium into cells, so the measured blood level falls. Kidney loss, low magnesium, vomiting, enemas, an ileostomy, bronchodilators, steroids, theophylline, leukaemia, Cushing’s, and a poor intake are the other groups.",
        note: "Correct. Under 3.5 is the definition, and the story uses the common causes plus a shift.",
      },
      {
        text: "Laxatives are a cause of a high potassium, not a low one.",
        note: "No. Chronic laxative abuse is one of the three most common causes of a low potassium.",
      },
      {
        text: "Alkalosis raises potassium. Only acidosis shifts it into cells.",
        note: "No. Alkalosis is named as a shift that lowers the measured potassium.",
      },
    ],
    answer: 1,
    page: "30",
  },
  {
    id: "lab-035",
    topicId: "LAB",
    topic: "Low potassium, the person",
    scene: "The same person is weak, nauseated, and has not passed flatus since yesterday. The monitor shows an arrhythmia.",
    ask: "Which picture matches the slide?",
    choices: [
      {
        text: "Tall T waves and a slow pulse are the low-potassium picture.",
        note: "No. Tall T waves belong to the high-potassium slide. Low potassium is arrhythmia and possible arrest, without that description.",
      },
      {
        text: "A paralytic ileus means the potassium is high.",
        note: "No. Paralytic ileus is printed under hypokalaemia.",
      },
      {
        text: "Weakness, fatigue, nausea, vomiting, a paralytic ileus, and an arrhythmia that can go on to cardiac arrest.",
        note: "Correct. Those are the signs on the hypokalaemia slide.",
      },
      {
        text: "Low potassium has no gut symptoms. Only the heart is affected.",
        note: "No. Nausea, vomiting, and ileus are listed.",
      },
    ],
    answer: 2,
    page: "31",
  },
  {
    id: "lab-036",
    topicId: "LAB",
    topic: "Replacing potassium",
    scene: "The doctor has ordered intravenous potassium through a peripheral cannula.",
    ask: "What limits does the lecture print, and what else is watched?",
    choices: [
      {
        text: "Run 40 mmol in ten minutes through the peripheral vein if the arrhythmia is present.",
        note: "No. The rate limit is 20 mmol per hour, and a high concentration is not for a peripheral vein.",
      },
      {
        text: "Peripheral veins take any concentration. Only a central vein is limited to 60 mmol/L.",
        note: "No. The slide says a concentration greater than 60 mmol/L is not advisable for peripheral veins.",
      },
      {
        text: "Avoid banana and tomato. Those foods are for a high potassium only.",
        note: "No. Those foods are encouraged when the potassium is low. They are avoided later, for people at risk of a high potassium.",
      },
      {
        text: "Not faster than 20 mmol per hour. A concentration over 60 mmol/L is not advisable in a peripheral vein. Watch the electrocardiogram, renal function, and muscle power. Oral potassium is the other route. Foods named: orange, banana, kiwi, beef, fish, tomato.",
        note: "Correct. Those are the treatment and nursing lines.",
      },
    ],
    answer: 3,
    page: "32",
  },
  {
    id: "lab-037",
    topicId: "LAB",
    topic: "High potassium, causes",
    scene: "Potassium is 6.1 mmol/L. The person has a kidney injury, has missed their insulin, and has been given extra potassium in the feeds.",
    ask: "Which cause group is this?",
    choices: [
      {
        text: "Over 5 is hyperkalaemia. The cause groups are more intake, potassium moving out of cells, tissue breakdown, lack of insulin, kidney disease, and drugs.",
        note: "Correct. The story uses intake, insulin deficiency, and kidney disease.",
      },
      {
        text: "Over 5 is still normal. Hyperkalaemia starts at 7.",
        note: "No. The slide defines hyperkalaemia as potassium over 5 mmol/L.",
      },
      {
        text: "Lack of insulin causes a low potassium only.",
        note: "No. Insulin deficiency is a cause of hyperkalaemia. Insulin treatment, on the earlier slide, shifts potassium into cells.",
      },
      {
        text: "Kidney disease lowers potassium and cannot raise it.",
        note: "No. Kidney disorder is a listed cause of a high potassium. Kidney loss is also on the low-potassium slide, so the direction depends on which problem the lecture is describing.",
      },
    ],
    answer: 0,
    page: "33",
  },
  {
    id: "lab-038",
    topicId: "LAB",
    topic: "High potassium, the trace",
    scene: "The monitor changes from a fast rate to a slow rate. The T waves are tall. The tongue and hands feel numb, and the person is cramping.",
    ask: "Which potassium problem is that?",
    choices: [
      {
        text: "Hypokalaemia. Tall T waves are the low-potassium sign.",
        note: "No. Tall T waves are printed under hyperkalaemia.",
      },
      {
        text: "Hyperkalaemia. The trace can go from tachycardia to bradycardia to cardiac arrest, with tall T waves and other arrhythmias. Weakness, paralysis, and pins and needles of the tongue, face, hands, and feet, plus nausea, vomiting, and cramp.",
        note: "Correct. That is the high-potassium picture, as distinct from the low-potassium ileus and arrhythmia.",
      },
      {
        text: "A calcium problem. Tall T waves are Trousseau’s sign.",
        note: "No. Trousseau’s sign is a hand spasm from a cuff, on the calcium slides. Tall T waves are the potassium slide.",
      },
      {
        text: "A normal trace. Rate change and tall T waves are not linked to potassium.",
        note: "No. Both are on the hyperkalaemia sign list.",
      },
    ],
    answer: 1,
    page: "34",
  },
  {
    id: "lab-039",
    topicId: "LAB",
    topic: "Lowering potassium",
    scene: "The high potassium is moderate. Resonium is being discussed, and so is insulin.",
    ask: "Which resin is which, and what else does a moderate or severe rise get?",
    choices: [
      {
        text: "Resonium is for a low potassium, to stop gut losses.",
        note: "No. The resins are the mild treatment of a high potassium.",
      },
      {
        text: "Intravenous insulin is dangerous in hyperkalaemia because it drives potassium out of cells.",
        note: "No. Insulin with glucose is a treatment of moderate or severe hyperkalaemia. Insulin deficiency was a cause.",
      },
      {
        text: "Resonium A is sodium polystyrene sulfonate. Resonium C is calcium polystyrene sulfonate. They are the mild treatment, with less intake and a change of drugs. Moderate or severe: intravenous insulin with glucose, intravenous calcium, or dialysis. Watch the heart, the rhythm, and the level. People at risk avoid potassium-rich food.",
        note: "Correct. That is the treatment slide.",
      },
      {
        text: "Intravenous calcium is for hypocalcaemia only and has no place on the potassium slide.",
        note: "No. Intravenous calcium solution is named for moderate or severe hyperkalaemia.",
      },
    ],
    answer: 2,
    page: "35",
  },
  {
    id: "lab-040",
    topicId: "LAB",
    topic: "Where calcium sits",
    scene: "The calcium is 2.0 mmol/L. Before the symptoms, a student asks what the number is for.",
    ask: "What does the lecture say about the range, the stores, and the jobs?",
    choices: [
      {
        text: "The range is 0.7–1.1, and 99% of calcium is in the plasma.",
        note: "No. 0.7–1.1 is magnesium. Most calcium is in bone.",
      },
      {
        text: "Calcium’s only job is the clotting cascade. Muscle does not use it.",
        note: "No. Muscular contraction and relaxation are named, with nerve, heart, enzymes, bone, and clotting.",
      },
      {
        text: "2.0 is inside the range, so no symptom slide applies.",
        note: "No. 2.0 is below 2.2.",
      },
      {
        text: "The range is 2.2–2.6 mmol/L. About 99% is in bone, and about 1% is in extracellular fluid and soft tissue. Jobs: bone and teeth, contraction and relaxation of muscle, nerve and heart, enzyme activation, and normal clotting.",
        note: "Correct. Intracellular fluid is the fluid inside cells. Extracellular fluid is plasma plus the fluid around cells.",
      },
    ],
    answer: 3,
    page: "36",
  },
  {
    id: "lab-041",
    topicId: "LAB",
    topic: "Why calcium falls",
    scene: "The calcium is low the evening after a thyroidectomy in which the parathyroids were removed. Earlier in the day the person had a large transfusion of stored blood.",
    ask: "Which causes does the lecture rank first, and what else is on the list?",
    choices: [
      {
        text: "The most common causes are a parathyroid that works poorly or has been removed. Also low magnesium, high phosphate, a large amount of stored blood preserved with citrate, renal insufficiency, and poor absorption of vitamin D.",
        note: "Correct. Both parts of this history are on that cause list.",
      },
      {
        text: "Stored blood raises calcium because citrate is a calcium salt.",
        note: "No. Citrate-preserved blood is a cause of hypocalcaemia.",
      },
      {
        text: "Removing the parathyroid raises calcium. The operation is a cause of hypercalcaemia only.",
        note: "No. Surgical removal of the parathyroid is the common cause of a low calcium.",
      },
      {
        text: "Vitamin D deficiency raises calcium. It is not on the low-calcium list.",
        note: "No. Decreased intestinal absorption of vitamin D is a low-calcium cause.",
      },
    ],
    answer: 0,
    page: "37",
  },
  {
    id: "lab-042",
    topicId: "LAB",
    topic: "How a low calcium looks",
    scene: "The person has cramps, tingling fingers, and a seizure. The QT is long and the blood pressure is low.",
    ask: "What else does the lecture attach to hypocalcaemia?",
    choices: [
      {
        text: "A short QT and renal stones. Those are the low-calcium signs.",
        note: "No. A short QT and stones are on the high-calcium slide.",
      },
      {
        text: "A positive Chvostek or Trousseau sign, tetany, brisk reflexes, irritability, poorer thinking, a weaker myocardial contraction, and abnormal clotting, along with the cramps, tingling, seizures, long QT, and low blood pressure in the story.",
        note: "Correct. Those are the signs on the same slide as the causes.",
      },
      {
        text: "Clotting becomes faster. Low calcium makes the blood hypercoagulable on this slide.",
        note: "No. Abnormal clotting is the phrase, in the direction of a problem with clotting, listed with the other low-calcium signs.",
      },
      {
        text: "Reflexes are absent. Tetany is a high-calcium sign.",
        note: "No. Hyperactive reflexes and tetany are low-calcium signs.",
      },
    ],
    answer: 1,
    page: "37",
  },
  {
    id: "lab-043",
    topicId: "LAB",
    topic: "The two signs",
    scene: "A colleague taps the face in front of the ear, just below the cheekbone, and that side of the face twitches. Later a cuff is inflated above systolic pressure.",
    ask: "What are the names, and how long is the cuff held?",
    choices: [
      {
        text: "The tap is Trousseau’s sign. The cuff is Chvostek’s sign, held for 30 seconds.",
        note: "No. The names are the other way round, and the cuff is held for more than 3 minutes.",
      },
      {
        text: "Chvostek’s sign is a twitch on the opposite side of the face.",
        note: "No. The twitch is ipsilateral.",
      },
      {
        text: "The tap is Chvostek’s sign, and the twitch is on the same side. The cuff is Trousseau’s sign: above systolic pressure for more than 3 minutes, producing a carpal spasm.",
        note: "Correct. That is the wording on the numbness slide.",
      },
      {
        text: "Both signs diagnose a high calcium. A low calcium has no bedside test.",
        note: "No. They are printed on the low-calcium pages.",
      },
    ],
    answer: 2,
    page: "38",
  },
  {
    id: "lab-044",
    topicId: "LAB",
    topic: "Calcium gluconate",
    scene: "Calcium gluconate 10% has been sent to the ward. The person is hypocalcaemic but stable.",
    ask: "Who gives what, and what is in 10 mL?",
    choices: [
      {
        text: "10 mL is 272 mg. The nurse gives the bolus, and the doctor gives the infusion.",
        note: "No. 272 mg is calcium chloride. The gluconate bolus is the doctor’s injection.",
      },
      {
        text: "A nurse may push gluconate as a fast bolus if the pump is busy.",
        note: "No. The bolus is specified as the doctor’s slow injection with cardiac monitoring.",
      },
      {
        text: "Gluconate is oral only. No intravenous route is described.",
        note: "No. Infusion and a syringe pump over 1 to 2 hours are nurse routes, and the bolus is the doctor’s.",
      },
      {
        text: "10 mL is 93 mg, or 2.3 mmol, of elemental calcium. A nurse may give it by mouth, by infusion, or on a syringe pump over 1 to 2 hours. A bolus is the doctor’s slow injection, with the heart monitored.",
        note: "Correct. That split is the safety point of the slide.",
      },
    ],
    answer: 3,
    page: "39",
  },
  {
    id: "lab-045",
    topicId: "LAB",
    topic: "Calcium chloride",
    scene: "The alternative ampoule is calcium chloride 10%. Magnesium is also low.",
    ask: "How is the chloride given, and what else is checked?",
    choices: [
      {
        text: "10 mL is 272 mg, or 6.8 mmol. It is a slow intravenous injection by the doctor, with the heart monitored, and extravasation is the danger. Replace magnesium if it is low. Watch the electrocardiogram and the blood pressure. Recheck calcium, phosphate, magnesium, and the clotting profile.",
        note: "Correct. Extravasation is leakage of the drug into the tissue around the vein.",
      },
      {
        text: "The nurse may inject calcium chloride into a peripheral vein as fast as gluconate runs on a pump.",
        note: "No. Chloride is the doctor’s slow injection, with the extravasation warning.",
      },
      {
        text: "10 mL of chloride is 2.3 mmol, the same as gluconate.",
        note: "No. Chloride is 6.8 mmol in 10 mL. Gluconate is 2.3 mmol.",
      },
      {
        text: "Magnesium is irrelevant. A low magnesium is left until the calcium is normal for a week.",
        note: "No. Magnesium is replaced if the person is hypomagnesaemic.",
      },
    ],
    answer: 0,
    page: "39",
  },
  {
    id: "lab-046",
    topicId: "LAB",
    topic: "Why calcium rises",
    scene: "The calcium is high. The person has a parathyroid adenoma, has been in bed for three weeks, and takes a thiazide.",
    ask: "Which causes are those?",
    choices: [
      {
        text: "A thiazide lowers calcium. Only a loop diuretic raises it, and loop diuretics are the cause named here.",
        note: "No. Thiazide diuretics are the diuretic on the high-calcium list. Loop diuretics are not the cause named.",
      },
      {
        text: "Hyperparathyroidism, immobilisation, and a thiazide. Malignancy that pulls calcium from bone, and too much calcium or vitamin D, complete the list.",
        note: "Correct. Those are the five causes.",
      },
      {
        text: "Immobilisation lowers calcium by putting more of it into bone.",
        note: "No. Immobilisation causes bone loss and is a cause of hypercalcaemia.",
      },
      {
        text: "Hyperparathyroidism is the common cause of a low calcium, not a high one.",
        note: "No. A failing or removed parathyroid lowers calcium. Hyperparathyroidism raises it.",
      },
    ],
    answer: 1,
    page: "40",
  },
  {
    id: "lab-047",
    topicId: "LAB",
    topic: "How a high calcium looks",
    scene: "The person is constipated, confused, polyuric, and has severe bone pain. The QT is short.",
    ask: "Is this the high-calcium picture?",
    choices: [
      {
        text: "A short QT means the calcium is low.",
        note: "No. Prolonged QT is the low-calcium sign. A shortened QT is the high-calcium sign.",
      },
      {
        text: "Polyuria and stones are low-calcium findings, from a lack of the ion in the urine.",
        note: "No. They are printed under hypercalcaemia.",
      },
      {
        text: "Yes. Anorexia, constipation, weakness, lethargy, loss of tone, ataxia, low mood, fatigue, confusion, coma, a short QT, arrhythmias, heart block, polyuria, stones, bone pain, demineralisation, and pathologic fracture.",
        note: "Correct. A long QT was the low-calcium electrocardiogram. A short QT is this one.",
      },
      {
        text: "Bone pain means metastases only, and the calcium slide does not mention bone.",
        note: "No. Deep bone pain, demineralisation, and pathologic fracture are on the high-calcium sign list.",
      },
    ],
    answer: 2,
    page: "40",
  },
  {
    id: "lab-048",
    topicId: "LAB",
    topic: "Bringing calcium down",
    scene: "Supplements have been stopped. The person is still hypercalcaemic and drowsy.",
    ask: "What else does the lecture name?",
    choices: [
      {
        text: "More vitamin D, to drive the calcium back into bone.",
        note: "No. Vitamin D excess is a cause. The supplement is stopped.",
      },
      {
        text: "Keep the person in bed so the bones can recalcify.",
        note: "No. Early mobilisation is the instruction. Immobilisation was a cause.",
      },
      {
        text: "Dialysis is against a high calcium bath, to push calcium in.",
        note: "No. The dialysis bath is zero or low calcium.",
      },
      {
        text: "Pamidronate, calcitonin, and mithramycin. Dialysis with no calcium or a low calcium. Early mobilisation. Watch the circulation, the mental state, and the calcium level.",
        note: "Correct. Stopping calcium or vitamin D is the first line, and these are the rest.",
      },
    ],
    answer: 3,
    page: "41",
  },
  {
    id: "lab-049",
    topicId: "LAB",
    topic: "Magnesium",
    scene: "The renal panel prints magnesium 0.7–1.1 mmol/L. A student asks what the ion is for.",
    ask: "What does the lecture use it as, and what does it do?",
    choices: [
      {
        text: "An index of metabolic activity and of renal function. It is needed for clotting, it regulates neuromuscular activity, it is a cofactor for many enzymes, and it affects calcium metabolism.",
        note: "Correct. The range itself is on the renal-function slide. The jobs are on the magnesium slide.",
      },
      {
        text: "Magnesium is only a laxative. It has no clotting or enzyme role on this lecture.",
        note: "No. Clotting, neuromuscular activity, enzymes, and calcium metabolism are all named.",
      },
      {
        text: "The range is 2.2–2.6, the same as calcium.",
        note: "No. 2.2–2.6 is calcium. Magnesium is 0.7–1.1.",
      },
      {
        text: "A magnesium result says nothing about the kidney.",
        note: "No. It is used as an index of renal function as well as metabolic activity.",
      },
    ],
    answer: 0,
    page: "42",
  },
  {
    id: "lab-050",
    topicId: "LAB",
    topic: "High and low magnesium",
    scene: "One person has Addison’s disease and takes a magnesium antacid. Another drinks heavily and eats poorly. Both have kidney disease of different kinds.",
    ask: "Which pattern matches the slide?",
    choices: [
      {
        text: "Addison’s disease lowers magnesium. Antacids are irrelevant.",
        note: "No. Addison’s disease and magnesium antacids are high-magnesium causes.",
      },
      {
        text: "High magnesium: Addison’s disease, hypothyroidism, magnesium antacids or salts, renal insufficiency, uncontrolled diabetes. Low magnesium: alcoholism, chronic kidney disease, diabetic acidosis, hypoparathyroidism, malabsorption, malnutrition.",
        note: "Correct. Kidney disease appears on both sides, in different words, so the label has to be read carefully.",
      },
      {
        text: "Alcoholism raises magnesium. Malnutrition does the same.",
        note: "No. Both are low-magnesium causes.",
      },
      {
        text: "Uncontrolled diabetes lowers magnesium. Diabetic acidosis raises it.",
        note: "No. Uncontrolled diabetes is on the high list. Diabetic acidosis is on the low list.",
      },
    ],
    answer: 1,
    page: "43",
  },
  {
    id: "lab-051",
    topicId: "LAB",
    topic: "What phosphate is for",
    scene: "Phosphate is 0.8–1.4 mmol/L on the same panel.",
    ask: "What is it used for, and where does it come and go?",
    choices: [
      {
        text: "Phosphate is an enzyme that clots blood, and it is stored only in the liver.",
        note: "No. Clotting was calcium and magnesium. Phosphate is stored in bone and skeletal muscle.",
      },
      {
        text: "The kidney does not excrete phosphate. Only the gut loses it.",
        note: "No. The slide says the kidneys excrete it.",
      },
      {
        text: "Bone formation, storage and release of energy, urinary acid-base buffering, and carbohydrate metabolism. It is absorbed from food, excreted by the kidney, and stored in bone and skeletal muscle.",
        note: "Correct. That is the whole of the first phosphate slide.",
      },
      {
        text: "The range is 3.5–5.0, shared with potassium.",
        note: "No. 3.5–5.0 is potassium. Phosphate is 0.8–1.4.",
      },
    ],
    answer: 2,
    page: "44",
  },
  {
    id: "lab-052",
    topicId: "LAB",
    topic: "A high phosphate",
    scene: "The phosphate is high in renal failure, with a low calcium and a history of rhabdomyolysis.",
    ask: "Which other causes sit on that list?",
    choices: [
      {
        text: "Renal failure lowers phosphate. Only the gut raises it.",
        note: "No. Renal failure is a high-phosphate cause.",
      },
      {
        text: "Hypoparathyroidism lowers phosphate. It is not on the high list.",
        note: "No. Hypoparathyroidism is on the high-phosphate list. Hyperparathyroidism is on the low list.",
      },
      {
        text: "Rhabdomyolysis is a low-phosphate emergency.",
        note: "No. It is listed under increased phosphorus.",
      },
      {
        text: "Acidosis, acromegaly, advanced myeloma or lymphoma, bone metastases, haemolytic anaemia, hypocalcaemia, hypoparathyroidism, a high dietary or intravenous intake, liver disease, renal failure, rhabdomyolysis, and sarcoidosis.",
        note: "Correct. The story uses three of those.",
      },
    ],
    answer: 3,
    page: "45",
  },
  {
    id: "lab-053",
    topicId: "LAB",
    topic: "A low phosphate",
    scene: "The phosphate is low. The person has alcoholic liver disease in the history, takes antacids daily, and the child in the next bay has rickets. An adult in the same bay has osteomalacia.",
    ask: "Does the lecture group those together?",
    choices: [
      {
        text: "Yes, as low-phosphate causes, with alkalosis, diabetic acidosis, high calcium, too much insulin, hyperparathyroidism, a poor diet, malnutrition, sepsis, and vitamin D deficiency. Osteomalacia is the adult form named. Rickets is the child form.",
        note: "Correct. Chronic alcoholism and chronic antacid use are on the same list.",
      },
      {
        text: "Rickets raises phosphate. Only adults can have a low phosphate.",
        note: "No. Rickets is the childhood cause of a low phosphate on this slide.",
      },
      {
        text: "Antacids raise phosphate because they contain it.",
        note: "No. Chronic antacid ingestion is a cause of hypophosphataemia.",
      },
      {
        text: "Vitamin D deficiency raises phosphate and calcium together.",
        note: "No. Vitamin D deficiency is a low-phosphate cause, and poor vitamin D absorption was also a low-calcium cause.",
      },
    ],
    answer: 0,
    page: "45",
  },
  {
    id: "lab-054",
    topicId: "LAB",
    topic: "What creatinine is",
    scene: "A student thinks creatinine is a liver enzyme because it sits near the liver tests.",
    ask: "What does the lecture say it is?",
    choices: [
      {
        text: "A liver enzyme, released with ALT when hepatocytes die.",
        note: "No. Creatinine is described as muscle waste, filtered by the kidney.",
      },
      {
        text: "A waste molecule from muscle creatine. About 2% of the body’s creatine becomes creatinine each day. The kidney filters most of it. Production stays steady because muscle mass hardly changes from day to day.",
        note: "Correct. It is not a liver enzyme on this lecture.",
      },
      {
        text: "A hormone from the adrenal gland, which is why Addison’s disease changes it.",
        note: "No. Addison’s disease was a magnesium cause. Creatinine is muscle waste.",
      },
      {
        text: "Ten percent of creatine becomes creatinine each hour, so the level swings wildly through the day.",
        note: "No. About 2% a day, and production is described as essentially unchanged from day to day.",
      },
    ],
    answer: 1,
    page: "46",
  },
  {
    id: "lab-055",
    topicId: "LAB",
    topic: "The printed creatinine range",
    scene: "The slide prints creatinine “60 to 110 mmol/L.” A result of 80 mmol/L is about to be documented as normal.",
    ask: "What is the careful reading?",
    choices: [
      {
        text: "80 mmol/L is inside 60–110, so the kidney is normal and no unit check is needed.",
        note: "No. The figure matches the usual micromole range. A millimole result of 80 would not be a normal creatinine.",
      },
      {
        text: "The slide prints 60 to 110 µmol/L, so the millimole worry is invented.",
        note: "No. The renal panel and the later heading both print mmol/L. The caution is about that printed unit, not a denial of what the slide wrote.",
      },
      {
        text: "The slide does print 60 to 110 mmol/L. That figure is the usual micromole range. Do not treat 80 mmol/L as a normal creatinine. Check the laboratory’s unit before anyone acts on it.",
        note: "Correct. The number and the unit are both on the renal panel. Acting on the unit as printed would be unsafe.",
      },
      {
        text: "Any creatinine over 60, in any unit, means dialysis today.",
        note: "No. The lecture does not use 60 as a dialysis threshold.",
      },
    ],
    answer: 2,
    page: "24",
  },
  {
    id: "lab-056",
    topicId: "LAB",
    topic: "A high creatinine",
    scene: "Creatinine is high. The person is dry, has been training hard, eats a very high-protein diet, and has chronic kidney disease. They also take trimethoprim.",
    ask: "Which of those does the lecture list?",
    choices: [
      {
        text: "Exercise lowers creatinine by using it as fuel.",
        note: "No. Intense exercise is a cause of a high creatinine.",
      },
      {
        text: "Trimethoprim lowers the measured creatinine and is a treatment for kidney disease on this slide.",
        note: "No. It can cause a temporary increase in the measured level.",
      },
      {
        text: "A high-protein diet does not affect creatinine. Only muscle mass does.",
        note: "No. Increased consumption of protein is a high-creatinine cause.",
      },
      {
        text: "Chronic kidney disease, obstruction, dehydration, more protein, intense exercise, and some medicines. Trimethoprim and cimetidine can raise the measured level for a time.",
        note: "Correct. All of the story except a drug not on the list is on the high side. Trimethoprim is named.",
      },
    ],
    answer: 3,
    page: "47",
  },
  {
    id: "lab-057",
    topicId: "LAB",
    topic: "A low creatinine",
    scene: "The creatinine is low in late pregnancy, and low again in a person who has lost a great deal of muscle.",
    ask: "What does the lecture offer as the reasons?",
    choices: [
      {
        text: "Low muscle mass, pregnancy, and extreme weight loss. Pregnancy increases blood flow to the kidney, so more creatinine is cleared.",
        note: "Correct. Those are the three low causes.",
      },
      {
        text: "Pregnancy raises creatinine because the baby adds muscle waste.",
        note: "No. Pregnancy is a cause of a lower level, through higher renal blood flow.",
      },
      {
        text: "Low muscle mass raises creatinine, because each gram of muscle makes more waste.",
        note: "No. Low muscle mass is a cause of a low creatinine.",
      },
      {
        text: "Extreme weight loss raises creatinine by dehydrating the person. It is not on the low list.",
        note: "No. Extreme weight loss is listed under low creatinine. Dehydration is on the high list.",
      },
    ],
    answer: 0,
    page: "47",
  },
  {
    id: "lab-058",
    topicId: "LAB",
    topic: "Symptoms and the number",
    scene: "The creatinine is very high. The person says they feel well. Another person, with a milder rise, is breathless, swollen, and confused.",
    ask: "What does the lecture say about symptoms?",
    choices: [
      {
        text: "The creatinine level and the symptoms rise together. A well person cannot have severe kidney disease.",
        note: "No. The slide says some people have severe disease and a high creatinine with no symptoms.",
      },
      {
        text: "Symptoms of kidney dysfunction do not follow the creatinine level. Severe disease can be found by chance in someone with no symptoms. When symptoms occur they are non-specific: a dry feeling, fatigue, swelling, breathlessness, confusion, nausea, vomiting, neuropathy, dry skin.",
        note: "Correct. The number and the way the person feels are not the same information.",
      },
      {
        text: "Breathlessness and swelling mean the creatinine must be low.",
        note: "No. Those symptoms are listed among the possible symptoms of kidney failure, and they still do not track the number.",
      },
      {
        text: "Confusion is reserved for a high sodium. It is not a kidney-failure symptom here.",
        note: "No. Confusion is on the high-creatinine symptom list.",
      },
    ],
    answer: 1,
    page: "48",
  },
  {
    id: "lab-059",
    topicId: "LAB",
    topic: "Albumin",
    scene: "Albumin is low. The person has cirrhosis, and a hepatic malignancy is being investigated. The kidneys are also failing.",
    ask: "What does a low albumin mean here, and what might be prescribed?",
    choices: [
      {
        text: "A low albumin means acute hepatitis only. Cirrhosis raises albumin.",
        note: "No. The slide points a low albumin at chronic liver disease, especially cirrhosis and hepatic malignancy.",
      },
      {
        text: "The kidney does not affect albumin. Only the liver does.",
        note: "No. The slide says renal disorders also affect the albumin level.",
      },
      {
        text: "Albumin is made in the liver. A low level indicates chronic liver disease, especially cirrhosis and hepatic malignancy. Renal disease also affects it. The prescriptions named are intravenous albumin and a fluid restriction.",
        note: "Correct. Both the liver and the kidney are allowed by the slide.",
      },
      {
        text: "The treatment is a high-salt diet and no albumin infusion.",
        note: "No. Intravenous albumin and fluid restriction are the prescriptions named.",
      },
    ],
    answer: 2,
    page: "49",
  },
  {
    id: "lab-060",
    topicId: "LAB",
    topic: "Ammonia",
    scene: "Ammonia is very high. The person is confused, and the team is writing a bowel regimen.",
    ask: "Which regimen does the lecture print?",
    choices: [
      {
        text: "Lactulose 20 mL once a week, and no enemas, because the gut must not be emptied.",
        note: "No. Lactulose is 20 mL three times a day, and the enemas and the suppository are part of the same list.",
      },
      {
        text: "Senokot is 15 mg three times a day. Lactulose is the night dose.",
        note: "No. Senokot is 15 mg at night. Lactulose is three times a day.",
      },
      {
        text: "A high ammonia is treated with intravenous albumin, the same as a low albumin.",
        note: "No. Albumin is the albumin prescription. Ammonia has its own bowel regimen.",
      },
      {
        text: "A very high ammonia indicates hepatic encephalopathy or hepatic failure. Fleet enema, one tube rectally each day. Dulcolax, one suppository each day. Senokot 15 mg by mouth at night. Lactulose 20 mL by mouth three times a day.",
        note: "Correct. Those four, with those doses and routes, are the possible prescription.",
      },
    ],
    answer: 3,
    page: "49",
  },
  {
    id: "lab-061",
    topicId: "LAB",
    topic: "Bilirubin",
    scene: "One person’s bilirubin stays high for weeks. Another’s swings up and down. Both are jaundiced.",
    ask: "How does the lecture read the pattern?",
    choices: [
      {
        text: "The height of the bilirubin reflects the depth of the jaundice. A block in the biliary tract is the most frequent setting. A level that stays high suggests malignant disease. A level that fluctuates suggests a stone.",
        note: "Correct. That is the bilirubin slide.",
      },
      {
        text: "A fluctuating level means cancer. A sustained level means a stone.",
        note: "No. The slide pairs them the other way: sustained with malignancy, fluctuating with stone.",
      },
      {
        text: "Bilirubin does not track jaundice. Only GGT does.",
        note: "No. A raised bilirubin is said to reflect the depth of jaundice. GGT is the sensitive test for liver-cell dysfunction, on the next lines.",
      },
      {
        text: "Jaundice with a high bilirubin is always pre-hepatic haemolysis on this lecture.",
        note: "No. The slide’s setting is biliary obstruction, then malignancy, then stone.",
      },
    ],
    answer: 0,
    page: "50",
  },
  {
    id: "lab-062",
    topicId: "LAB",
    topic: "GGT and globulin",
    scene: "The liver tests show a high GGT, a high globulin, and a low albumin. There is no acute story.",
    ask: "What does the lecture use each result for?",
    choices: [
      {
        text: "GGT is specific for bone disease and says nothing about liver cells.",
        note: "No. The slide calls GGT sensitive for detecting liver-cell dysfunction. ALP is the duct enzyme on the next page.",
      },
      {
        text: "GGT is sensitive for liver-cell dysfunction. A high globulin with a low albumin is the pattern of chronic liver disease.",
        note: "Correct. Those two statements are the rest of that slide.",
      },
      {
        text: "Chronic liver disease lowers globulin and raises albumin.",
        note: "No. The pattern printed is a higher globulin and a lower albumin.",
      },
      {
        text: "Globulin replaces ammonia as the encephalopathy test.",
        note: "No. Ammonia is the encephalopathy test. Globulin is paired with albumin in chronic liver disease.",
      },
    ],
    answer: 1,
    page: "50",
  },
  {
    id: "lab-063",
    topicId: "LAB",
    topic: "ALT and AST",
    scene: "The request asks for ALT and AST after a blow to the liver.",
    ask: "What does the lecture say these enzymes show?",
    choices: [
      {
        text: "They are duct enzymes, used only for stones.",
        note: "No. ALP is the duct enzyme. ALT and AST are the damage and necrosis pair.",
      },
      {
        text: "AST is GPT. ALT is GOT.",
        note: "No. The slide pairs ALT with GPT and AST with GOT.",
      },
      {
        text: "ALT is GPT and AST is GOT. They index hepatic damage, they indicate ongoing hepatocellular necrosis, and they rise with traumatic liver injury.",
        note: "Correct. That is the opening of the enzyme slide, before the patterns.",
      },
      {
        text: "Trauma does not move them. Only a virus does.",
        note: "No. Traumatic liver injury is named.",
      },
    ],
    answer: 2,
    page: "51",
  },
  {
    id: "lab-064",
    topicId: "LAB",
    topic: "ALP",
    scene: "ALP is markedly high. The team is asking about a block, and about a possible liver tumour.",
    ask: "What is ALP on this lecture?",
    choices: [
      {
        text: "ALP is the enzyme of hepatocellular necrosis, and it falls in obstruction.",
        note: "No. A rise, not a fall, points to biliary obstruction. Necrosis is the ALT and AST line.",
      },
      {
        text: "ALP detects only bone secondaries. It is not a liver test here.",
        note: "No. Primary hepatic tumour and metastasis are both named, and the context is the liver-enzyme slide.",
      },
      {
        text: "A normal ALP excludes a stone. The slide says only a low ALP means obstruction.",
        note: "No. The arrow on the slide is a raised ALP in biliary obstruction.",
      },
      {
        text: "The duct enzyme. A rise points to biliary obstruction. It is also used to detect a primary hepatic tumour and metastases.",
        note: "Correct. That is the ALP line.",
      },
    ],
    answer: 3,
    page: "51",
  },
  {
    id: "lab-065",
    topicId: "LAB",
    topic: "Which enzyme, which disease",
    scene: "One result is a marked ALT rise after a new medicine. Another is a marked AST rise in a person with known cirrhosis, and the team also mentions myocardial necrosis.",
    ask: "Which pattern is which?",
    choices: [
      {
        text: "A marked ALT rise is acute hepatitis and liver damage from drugs and chemicals. A marked AST rise is myocardial necrosis, cirrhosis, chronic hepatitis, and liver cancer.",
        note: "Correct. Those are the two pattern lines. This lecture puts cirrhosis and liver cancer with AST.",
      },
      {
        text: "A marked ALT rise means a heart attack. AST is only for acute hepatitis.",
        note: "No. The slide places acute hepatitis and chemical damage with ALT, and myocardial necrosis with AST.",
      },
      {
        text: "Drugs lower ALT. They are not a cause of a rise.",
        note: "No. Liver damage from drugs and chemicals is the marked-ALT pattern.",
      },
      {
        text: "Cirrhosis is a marked-ALP disease only, and AST stays normal.",
        note: "No. Cirrhosis is on the marked-AST list.",
      },
    ],
    answer: 0,
    page: "51",
  },
  {
    id: "lab-066",
    topicId: "LAB",
    topic: "Reading the pair",
    scene: "Both transaminases are markedly up. In one person ALP is somewhat up. In another, ALP is markedly up as well.",
    ask: "How does the lecture split those two?",
    choices: [
      {
        text: "Any ALP rise with a transaminase rise means obstruction, whatever the size.",
        note: "No. A lesser ALP rise with a marked transaminase rise is called hepatocellular damage. Obstruction is the pattern in which ALP is also markedly up.",
      },
      {
        text: "Transaminases markedly up, and ALP up: hepatocellular damage. Transaminases markedly up, and ALP markedly up: biliary obstruction.",
        note: "Correct. The size of the ALP rise is the split.",
      },
      {
        text: "ALP has to be low to call it obstruction.",
        note: "No. Obstruction is a marked rise in ALP as well as in the transaminases.",
      },
      {
        text: "The transaminases are ignored once ALP is back. Only GGT is read with ALP.",
        note: "No. The two patterns on this slide are built from ALT, AST, and ALP together.",
      },
    ],
    answer: 1,
    page: "51",
  },
  {
    id: "lab-067",
    topicId: "LAB",
    topic: "APTT",
    scene: "APTT is longer than the control. The person is on an intravenous heparin infusion. A second person has haemophilia.",
    ask: "What pathway is APTT, and what else lengthens it?",
    choices: [
      {
        text: "APTT is the extrinsic pathway, lengthened by warfarin.",
        note: "No. Warfarin lengthens the INR and the prothrombin time. APTT is intrinsic, and heparin is its drug.",
      },
      {
        text: "Heparin shortens the APTT once the infusion is therapeutic.",
        note: "No. The slide says the APTT is increased by intravenous heparin.",
      },
      {
        text: "APTT is the intrinsic pathway, compared with a normal control. It is lengthened by intravenous heparin, haemophilia, or disseminated intravascular coagulation.",
        note: "Correct. Those three are the APTT line.",
      },
      {
        text: "Haemophilia is an extrinsic-pathway disease and does not move the APTT.",
        note: "No. Haemophilia is named on the APTT line.",
      },
    ],
    answer: 2,
    page: "52",
  },
  {
    id: "lab-068",
    topicId: "LAB",
    topic: "INR and DIC",
    scene: "The INR is high. One person takes warfarin. Another has liver failure. The team is also using the word DIC.",
    ask: "What does the lecture say?",
    choices: [
      {
        text: "Warfarin is watched with the APTT. The INR is for heparin.",
        note: "No. That swaps the two tests.",
      },
      {
        text: "Liver dysfunction shortens the prothrombin time because the liver makes more clotting factor.",
        note: "No. Liver dysfunction increases the INR and the prothrombin time.",
      },
      {
        text: "DIC means the clotting proteins have stopped working, so the tests shorten.",
        note: "No. The slide says the proteins that control clotting become overactive, and both APTT and INR are increased.",
      },
      {
        text: "INR and prothrombin time are the extrinsic pathway. They are increased by warfarin, liver dysfunction, or disseminated intravascular coagulation. In that disorder the proteins that control clotting become overactive.",
        note: "Correct. DIC is on both the APTT line and the INR line.",
      },
    ],
    answer: 3,
    page: "52",
  },
  {
    id: "lab-069",
    topicId: "LAB",
    topic: "The cascade drawing",
    scene: "The figure shows an intrinsic path from factor XII and an extrinsic path from factor VII. A grey key says “inactivated by heparin.”",
    ask: "Where do the paths meet, and what is the end of the drawing?",
    choices: [
      {
        text: "They meet at factor X, with factor V. Prothrombin becomes thrombin, fibrinogen becomes fibrin, and factor XIII makes the stable clot. The grey mark is the steps heparin inactivates.",
        note: "Correct. That is the left-hand cascade. The right-hand outline starts the intrinsic path at plasma contact and the extrinsic path at factor III from damaged tissue.",
      },
      {
        text: "Heparin inactivates factor VII only, on the extrinsic path, which is why the INR is the heparin test.",
        note: "No. The grey key is on the intrinsic cascade, and the previous slide attaches heparin to the APTT.",
      },
      {
        text: "The paths meet at factor XII. Fibrin is the start of the cascade, not the end.",
        note: "No. Factor XII is the start of the intrinsic path drawn. Fibrin, then the stable clot, is the end.",
      },
      {
        text: "Factor III is released by intact vessel wall, and platelets are not part of the clot on this figure.",
        note: "No. Damaged tissue releases factor III. Platelets and red cells are drawn joining the clot.",
      },
    ],
    answer: 0,
    page: "53",
  },
  {
    id: "lab-070",
    topicId: "LAB",
    topic: "Thyroid tests",
    scene: "A thyroid test is requested as TSH and free T4.",
    ask: "What does the lecture say each hormone does?",
    choices: [
      {
        text: "TSH is made in the thyroid. T4 is made in the pituitary and lowers the metabolic rate.",
        note: "No. TSH comes from the pituitary. T3 and T4 raise the metabolic rate.",
      },
      {
        text: "TSH comes from the pituitary, travels to the thyroid, and makes the cells produce more T3 and T4. T4 is thyroxine. T3 is triiodothyronine. Both raise the metabolic rate. The test is used to detect an underactive and an overactive gland.",
        note: "Correct. That is the thyroid-function slide.",
      },
      {
        text: "Free T4 is the only test. TSH is a tumour marker.",
        note: "No. The pair named is TSH and free T4, and TSH is the pituitary signal, not a tumour marker.",
      },
      {
        text: "T3 lowers the metabolic rate. Only T4 raises it.",
        note: "No. Both are said to increase the metabolic rate.",
      },
    ],
    answer: 1,
    page: "54",
  },
  {
    id: "lab-071",
    topicId: "LAB",
    topic: "Causes of an underactive thyroid",
    scene: "The history includes too little iodine, Hashimoto’s thyroiditis, lithium, and a thyroidectomy.",
    ask: "What else is on the cause list?",
    choices: [
      {
        text: "Hashimoto’s disease is the commonest cause of an overactive thyroid.",
        note: "No. Graves’ disease is the commonest overactive cause. Hashimoto’s is on the underactive list.",
      },
      {
        text: "Lithium and interferon stimulate the thyroid and are overactive causes.",
        note: "No. They are on the underactive list.",
      },
      {
        text: "No cause found, irradiation that injures the hypothalamus or the pituitary, late invasive fibrous thyroiditis, interferon, and a goitre, as well as the four in the story.",
        note: "Correct. Those are the causes of hypothyroidism on the slide.",
      },
      {
        text: "Removing the thyroid causes Graves’ disease.",
        note: "No. Surgical removal is an underactive cause. Thyroidectomy is also, later, a treatment for an overactive gland.",
      },
    ],
    answer: 2,
    page: "55",
  },
  {
    id: "lab-072",
    topicId: "LAB",
    topic: "Signs of an underactive thyroid",
    scene: "The skin is dry and coarse, the hands are cool, the pulse is slow, and there is swelling that does not pit in the way ordinary oedema does. Reflexes relax slowly.",
    ask: "What name does the lecture give the skin deposit, and what else is on the sign list?",
    choices: [
      {
        text: "The deposit is pretibial thickening from Graves’ disease, and the pulse should be fast.",
        note: "No. Pretibial thickening is the overactive slide. Myxoedema and a slow pulse are the underactive signs.",
      },
      {
        text: "Reflexes are brisk. Slow relaxation means a high calcium.",
        note: "No. Delayed relaxation of the tendon reflexes is an underactive-thyroid sign.",
      },
      {
        text: "Carpal tunnel is not a thyroid sign on this lecture.",
        note: "No. It is listed, with a short explanation of the nerve at the wrist.",
      },
      {
        text: "Myxoedema, a mucopolysaccharide deposit in the skin. Also hair loss, swollen limbs, carpal tunnel, and fluid in the pleura, the abdomen, or the pericardium.",
        note: "Correct. Dry coarse skin, cool extremities, a slow pulse, and delayed relaxation of tendon reflexes are the signs in the story.",
      },
    ],
    answer: 3,
    page: "56",
  },
  {
    id: "lab-073",
    topicId: "LAB",
    topic: "Symptoms of an underactive thyroid",
    scene: "The person is tired, cold, constipated, and gaining weight despite a poor appetite. The voice is hoarse and the periods are heavy.",
    ask: "Does the lecture list those, and what else sits with them?",
    choices: [
      {
        text: "Yes. Also poor memory and concentration, indigestion, breathlessness, abnormal sensation, and poor hearing.",
        note: "Correct. Those are the symptom column. Hair loss and a slow pulse were the sign column.",
      },
      {
        text: "Weight gain with a good appetite is the underactive pattern. A poor appetite means the thyroid is overactive.",
        note: "No. The slide says weight gain with poor appetite.",
      },
      {
        text: "Heavy periods are an overactive symptom. Underactive disease causes missed periods only.",
        note: "No. Heavy periods are on the underactive list. Missed or very light periods are on the overactive list.",
      },
      {
        text: "Feeling cold means infection, and the thyroid slide does not mention temperature preference.",
        note: "No. Feeling cold is an underactive symptom. Heat intolerance is the overactive one.",
      },
    ],
    answer: 0,
    page: "56",
  },
  {
    id: "lab-074",
    topicId: "LAB",
    topic: "Graves’ disease",
    scene: "The diagnosis is the commonest cause of an overactive thyroid.",
    ask: "What three parts does the lecture give that disease?",
    choices: [
      {
        text: "Hashimoto’s disease, in three parts: a slow pulse, a hoarse voice, and a goitre only.",
        note: "No. Hashimoto’s is an underactive cause. The three-part description is Graves’ disease.",
      },
      {
        text: "Graves’ disease. Swelling around the eyes from inflammation in the tissue, thickening of the skin over the lower legs, and an overactive gland.",
        note: "Correct. The slide says the disease constitutes those three parts.",
      },
      {
        text: "Graves’ disease is only an eye disease. The thyroid itself is underactive.",
        note: "No. Overactivity of the gland is the third part.",
      },
      {
        text: "The skin thickening is myxoedema of the hands, not the lower legs.",
        note: "No. The slide says thickening of the skin over the lower legs. Myxoedema was the underactive sign.",
      },
    ],
    answer: 1,
    page: "57",
  },
  {
    id: "lab-075",
    topicId: "LAB",
    topic: "The overactive picture",
    scene: "The person hates the heat, has a fast heart, a stare, moist warm skin, tremor, and loose frequent stools. They have lost weight. The periods are very light.",
    ask: "Which list is this, and which finding is on both thyroid lists?",
    choices: [
      {
        text: "The underactive list, because fatigue and hair loss can only mean a slow metabolism.",
        note: "No. Fatigue and hair loss appear on both. Heat, a fast heart, weight loss, and a stare are the overactive side.",
      },
      {
        text: "A stare and moist skin mean a low calcium, not a thyroid problem.",
        note: "No. Staring gaze and moist warm skin are on the overactive thyroid slide.",
      },
      {
        text: "The overactive list. Hair loss is also on the underactive list, so it does not separate them. Pulse, heat, and weight do.",
        note: "Correct. Weakness, fatigue, nervousness, low mood, palpitations, and breathlessness are on this list as well.",
      },
      {
        text: "Light periods mean an underactive gland.",
        note: "No. Heavy periods are the underactive symptom. Missing or very light periods are the overactive symptom.",
      },
    ],
    answer: 2,
    page: "58",
  },
  {
    id: "lab-076",
    topicId: "LAB",
    topic: "Treating an overactive thyroid",
    scene: "Treatment is being chosen for Graves’ disease.",
    ask: "What three treatments does the lecture name, and what does it not cover?",
    choices: [
      {
        text: "Radioactive iodine is for hypothyroidism, to make the gland grow back.",
        note: "No. It is used so the overactive gland cannot produce as many hormones.",
      },
      {
        text: "Thyroidectomy is only a cause of hypothyroidism, never a treatment.",
        note: "No. It is both: a cause on the underactive list, and a treatment on the overactive treatment slide.",
      },
      {
        text: "The only treatment is iodine supplements, the same as for iodine deficiency.",
        note: "No. Iodine deficiency is an underactive cause. The overactive treatments are a blocking drug, radioactive iodine, and surgery.",
      },
      {
        text: "A drug that stops the gland making excess hormone. Radioactive iodine, which breaks the gland down so it makes less. Thyroidectomy. Replacement hormone for an underactive gland is not on these slides.",
        note: "Correct. Those three are the treatment slide, and they are all for the overactive gland.",
      },
    ],
    answer: 3,
    page: "59",
  },
  {
    id: "lab-077",
    topicId: "LAB",
    topic: "What Astrup is",
    scene: "A request card says Astrup.",
    ask: "What is being measured?",
    choices: [
      {
        text: "An arterial blood gas: acid-base balance and oxygenation. It may also report lactate, haemoglobin, electrolytes, oxyhaemoglobin, carboxyhaemoglobin, and methaemoglobin. The four disorders are respiratory alkalosis, respiratory acidosis, metabolic alkalosis, and metabolic acidosis.",
        note: "Correct. Astrup is the name the lecture uses for the arterial gas.",
      },
      {
        text: "A venous clotting screen, APTT and INR only.",
        note: "No. That is the clotting profile. Astrup is the arterial gas.",
      },
      {
        text: "A thyroid panel, TSH and free T4.",
        note: "No. Those are the thyroid tests.",
      },
      {
        text: "Urine creatinine only, with no acid-base information.",
        note: "No. Acid-base balance and oxygenation are the point of the test.",
      },
    ],
    answer: 0,
    page: "60",
  },
  {
    id: "lab-078",
    topicId: "LAB",
    topic: "The pH lines",
    scene: "The results slide prints pH 7.38–7.42. The next teaching line calls acidemia a pH under 7.35 and alkalemia a pH over 7.45. One result is 7.36. Another is 7.30. A third is 7.48.",
    ask: "What can you say without adding a rule the lecture did not write?",
    choices: [
      {
        text: "7.36 is acidemia, because it is under 7.38.",
        note: "No. Acidemia is defined as under 7.35, not under 7.38.",
      },
      {
        text: "7.30 is acidemia. 7.48 is alkalemia. 7.36 is outside the printed 7.38–7.42 box and is not under 7.35, and the lecture does not give that gap its own name. If two processes are present, the pH shows the stronger one.",
        note: "Correct. Both printed statements are kept. The gap between them is not filled in.",
      },
      {
        text: "7.48 is still normal, because alkalemia starts at 7.55.",
        note: "No. Alkalemia is a pH over 7.45.",
      },
      {
        text: "The printed normal range is 7.35–7.45, and 7.38–7.42 is not what this slide says.",
        note: "No. This results slide prints 7.38–7.42. The 7.35 and 7.45 figures are the acidemia and alkalemia cuts.",
      },
    ],
    answer: 1,
    page: "61",
  },
  {
    id: "lab-079",
    topicId: "LAB",
    topic: "Carbon dioxide and oxygen",
    scene: "PaCO₂ is 50 mmHg and PaO₂ is 70 mmHg.",
    ask: "What are the ranges, and what does each number mean?",
    choices: [
      {
        text: "PaCO₂ 38–42 mmHg is this lecture’s range, so 50 is only just high.",
        note: "No. 38–42 is the medical FAQ. This lecture prints 35–45.",
      },
      {
        text: "A high PaCO₂ means too much ventilation.",
        note: "No. A high PaCO₂ is insufficient ventilation. Excessive ventilation lowers it.",
      },
      {
        text: "PaCO₂ 35–45 mmHg is ventilation. 50 is high, so this is respiratory acidosis from ventilation that is not enough, either as the cause or as compensation. PaO₂ 75–100 mmHg is oxygenation, so 70 is below that range.",
        note: "Correct. A low PaCO₂ would be respiratory alkalosis from too much ventilation.",
      },
      {
        text: "PaO₂ is the ventilation number. PaCO₂ is oxygenation.",
        note: "No. The slide assigns PaCO₂ to ventilation and PaO₂ to oxygenation.",
      },
    ],
    answer: 2,
    page: "62",
  },
  {
    id: "lab-080",
    topicId: "LAB",
    topic: "Bicarbonate and saturation",
    scene: "Bicarbonate is 18 mEq/L and saturation is 96%.",
    ask: "What does the lecture say?",
    choices: [
      {
        text: "Bicarbonate 22–28 is this lecture’s range, so 18 is only just low.",
        note: "No. 22–28 is the medical FAQ. This lecture prints 22–26.",
      },
      {
        text: "A low bicarbonate is respiratory alkalosis.",
        note: "No. A low bicarbonate suggests metabolic acidosis. Respiratory alkalosis is a low PaCO₂.",
      },
      {
        text: "Saturation must be under 90% before it is mentioned. 94–100% is not printed.",
        note: "No. The slide prints 94–100%.",
      },
      {
        text: "Bicarbonate 22–26 mEq/L. A low value suggests metabolic acidosis. A high value suggests metabolic alkalosis. Saturation on this slide is 94–100%, so 96% is inside it.",
        note: "Correct. 18 is below 22. The saturation range is not the same thing as the oxygen tension.",
      },
    ],
    answer: 3,
    page: "63",
  },
  {
    id: "lab-081",
    topicId: "LAB",
    topic: "Changing the ventilation",
    scene: "One person is in respiratory alkalosis. Another is in respiratory acidosis.",
    ask: "What does the lecture do to the ventilator, and what else?",
    choices: [
      {
        text: "Alkalosis: decrease ventilation, and treat the cause. Acidosis: increase ventilation, and treat the cause.",
        note: "Correct. Those are the two short treatment lines.",
      },
      {
        text: "Both are treated by increasing ventilation.",
        note: "No. Respiratory alkalosis is treated by decreasing ventilation.",
      },
      {
        text: "Respiratory acidosis is treated with intravenous bicarbonate first, and ventilation is left unchanged.",
        note: "No. The respiratory slide says increase ventilation and treat the cause. Bicarbonate is the later metabolic slide, and only at a stated pH.",
      },
      {
        text: "Treat the cause only. Ventilation is not adjusted for either disorder.",
        note: "No. Each line names a change in ventilation and treatment of the cause.",
      },
    ],
    answer: 0,
    page: "64",
  },
  {
    id: "lab-082",
    topicId: "LAB",
    topic: "The order of reading",
    scene: "A gas is on the desk. A student starts with the bicarbonate.",
    ask: "What order does the lecture teach, and what is carbon dioxide chemically?",
    choices: [
      {
        text: "Bicarbonate first, then pH, and carbon dioxide is a base.",
        note: "No. pH is first. Carbon dioxide is treated as an acid.",
      },
      {
        text: "pH first, then PO₂ for oxygenation, then PCO₂ for ventilation. Hypoventilation raises dissolved carbon dioxide. Carbon dioxide is an acid: with water it becomes carbonic acid, then hydrogen ion and bicarbonate. Plasma proteins buffer the hydrogen ion. The lung breathes carbon dioxide out, and the kidney loses it as acid in the urine.",
        note: "Correct. That is steps 1 to 3, including the chemistry on the ventilation slide.",
      },
      {
        text: "PO₂ is ventilation. A low PO₂ means the person is hypoventilating, by this lecture’s definition.",
        note: "No. PO₂ is oxygenation. Ventilation is read from PCO₂.",
      },
      {
        text: "The kidney removes carbon dioxide as a gas, and the lung removes it as bicarbonate.",
        note: "No. The lung eliminates it as gas. The kidney eliminates it as acid in the urine.",
      },
    ],
    answer: 1,
    page: "65",
  },
  {
    id: "lab-083",
    topicId: "LAB",
    topic: "Bicarbonate and base excess",
    scene: "The bicarbonate is low and the base excess is negative. There has been no change in ventilation.",
    ask: "How does the lecture read that, and what is base excess counting?",
    choices: [
      {
        text: "A negative base excess means a gain of alkali.",
        note: "No. A negative base excess goes with a fall in bicarbonate, which is acid.",
      },
      {
        text: "Base excess is another name for PaCO₂.",
        note: "No. PaCO₂ is the ventilation number. Base excess is grouped with bicarbonate.",
      },
      {
        text: "These two point to a metabolic process. Gain of acid or loss of bicarbonate drops the bicarbonate and makes base excess negative. Loss of acid, as in vomiting, or a gain of bicarbonate, raises both. Base excess counts proteins and haemoglobin as well as bicarbonate.",
        note: "Correct. The slide says these values are the metabolic side rather than the respiratory disturbance.",
      },
      {
        text: "Vomiting lowers bicarbonate and makes base excess negative.",
        note: "No. Loss of acid by vomiting raises bicarbonate and base excess.",
      },
    ],
    answer: 2,
    page: "68",
  },
  {
    id: "lab-084",
    topicId: "LAB",
    topic: "Compensation and the 0.08 rule",
    scene: "The primary problem is respiratory. The bicarbonate has started to move. PaCO₂ has risen by 10 mmHg from 40.",
    ask: "Which words, and what happens to the pH?",
    choices: [
      {
        text: "Compensation changes the component that caused the problem. Correction changes the other one.",
        note: "No. That swaps the two definitions on the slide.",
      },
      {
        text: "The target ratio is 10 to 1. The pH moves by 0.8 for every 10 mmHg.",
        note: "No. The ratio is 20 to 1, and the pH change is 0.08.",
      },
      {
        text: "A rise in PaCO₂ from 40 does not move pH. Only bicarbonate moves pH.",
        note: "No. The slide gives 0.08 of pH for each 10 mmHg of PaCO₂ away from 40.",
      },
      {
        text: "Compensation changes the component that was not the cause. Correction changes the component that was. The body aims at a bicarbonate to PaCO₂ ratio of 20 to 1, which gives a normal pH. Each 10 mmHg change in PaCO₂ from 40 moves the pH by 0.08.",
        note: "Correct. A respiratory primary problem is compensated by a metabolic move, not by a further respiratory one.",
      },
    ],
    answer: 3,
    page: "69",
  },
  {
    id: "lab-085",
    topicId: "LAB",
    topic: "ROME",
    scene: "The figure in the middle of the gas section says ROME, with normal carbon dioxide 35–45 mmHg and normal bicarbonate 22–26 mEq/L.",
    ask: "What does the mnemonic tell you to do?",
    choices: [
      {
        text: "Respiratory opposite: carbon dioxide moves opposite to the pH. Metabolic equal: bicarbonate moves the same way as the pH. Alkalosis is a pH over 7.45. Acidosis is a pH under 7.35.",
        note: "Correct. That is the figure. It is the direction tool. It is not a list of causes.",
      },
      {
        text: "Respiratory equal, metabolic opposite.",
        note: "No. The words on the figure are respiratory opposite, metabolic equal.",
      },
      {
        text: "ROME replaces the ranges. Carbon dioxide 22–26 and bicarbonate 35–45 are the normals it prints.",
        note: "No. The figure prints carbon dioxide 35–45 and bicarbonate 22–26, the same ranges as the earlier slides.",
      },
      {
        text: "Acidosis on this figure is any pH under 7.45.",
        note: "No. The low-pH label is under 7.35. Over 7.45 is the high-pH label.",
      },
    ],
    answer: 0,
    page: "70",
  },
  {
    id: "lab-086",
    topicId: "LAB",
    topic: "The table, respiratory",
    scene: "The uncompensated table shows respiratory alkalosis with pH up and carbon dioxide down, and the bicarbonate cell blank. The person is in pain and anxious, and they are hypoxic.",
    ask: "What cause does that row allow, and what does the respiratory-acidosis row say?",
    choices: [
      {
        text: "Pain and anxiety cause respiratory acidosis.",
        note: "No. They are examples under respiratory alkalosis.",
      },
      {
        text: "Hyperventilation, including a response to hypoxia, metabolic acidosis, a higher metabolic demand, pain, or anxiety. Respiratory acidosis is pH down and carbon dioxide up, from impaired breathing or a blocked airway. The compensating column is left blank.",
        note: "Correct. Do not fill the blank cell with a compensation the table does not print.",
      },
      {
        text: "Respiratory acidosis is carbon dioxide down.",
        note: "No. The acidosis row has carbon dioxide up.",
      },
      {
        text: "The blank bicarbonate cell means bicarbonate is zero.",
        note: "No. The cell is blank because the table is showing the uncompensated, primary change.",
      },
    ],
    answer: 1,
    page: "71",
  },
  {
    id: "lab-087",
    topicId: "LAB",
    topic: "The table, metabolic",
    scene: "The next two rows are metabolic. One person is vomiting and on a diuretic. Another has a high anion gap from ketoacidosis.",
    ask: "Which row is which?",
    choices: [
      {
        text: "Diuretics cause metabolic acidosis.",
        note: "No. Diuretic use is paired with volume depletion, such as vomiting, under metabolic alkalosis.",
      },
      {
        text: "A normal anion gap means a poison or lactate.",
        note: "No. Those are the high-anion-gap examples. A normal gap is gut or renal loss of bicarbonate.",
      },
      {
        text: "Vomiting and diuretics: metabolic alkalosis, pH up, bicarbonate up. Ketoacidosis: metabolic acidosis, pH down, bicarbonate down. The high-anion-gap causes are ketoacidosis, lactate, renal failure, and toxic ingestions. A normal anion gap is bicarbonate lost from the gut or the kidney.",
        note: "Correct. Carbon dioxide is the blank cell on these two rows.",
      },
      {
        text: "Ketoacidosis raises bicarbonate.",
        note: "No. Metabolic acidosis is a fall in bicarbonate and in pH.",
      },
    ],
    answer: 2,
    page: "71",
  },
  {
    id: "lab-088",
    topicId: "LAB",
    topic: "Treating a metabolic gas",
    scene: "One pH is 7.05 in ketoacidosis, with poor perfusion. Another person is in metabolic alkalosis and has a low potassium.",
    ask: "What does the lecture allow?",
    choices: [
      {
        text: "Give intravenous bicarbonate whenever the pH is under 7.35.",
        note: "No. The slide limits intravenous bicarbonate to a pH of 7.0 or less.",
      },
      {
        text: "Insulin is the treatment of metabolic alkalosis.",
        note: "No. Insulin is the ketoacidosis line, on the acidosis side.",
      },
      {
        text: "Diamox is for metabolic acidosis. Ammonium chloride is for respiratory alkalosis.",
        note: "No. Both are on the metabolic-alkalosis side.",
      },
      {
        text: "Acidosis: treat the cause, improve oxygenation or perfusion, insulin for ketoacidosis, dialysis for renal failure, an anti-diarrhoeal, and intravenous bicarbonate only if the pH is 7.0 or less. Alkalosis: treat the cause, replace potassium or chloride, a carbonic anhydrase inhibitor such as Diamox, or a buffer such as ammonium chloride.",
        note: "Correct. 7.05 meets the bicarbonate threshold. A pH of 7.25 would not, on this slide.",
      },
    ],
    answer: 3,
    page: "72",
  },
  {
    id: "lab-089",
    topicId: "LAB",
    topic: "AFP",
    scene: "AFP is above the laboratory’s usual level. The person is pregnant and also has liver disease. A classmate says the result proves a cancer.",
    ask: "What does the lecture actually say?",
    choices: [
      {
        text: "AFP is normally a very small amount. It rises with liver disease, some cancers, and pregnancy. A higher result does not always mean a health problem. Some people simply have more of it.",
        note: "Correct. The marker is not a diagnosis by itself.",
      },
      {
        text: "AFP is used only in pregnancy. Liver disease lowers it.",
        note: "No. Liver disease and some cancers raise it, as does pregnancy.",
      },
      {
        text: "Any rise proves a cancer. The slide does not mention false reassurance the other way.",
        note: "No. The slide says a higher level does not always mean a health problem.",
      },
      {
        text: "AFP monitors breast-cancer treatment. It is not a liver test.",
        note: "No. Breast-cancer response is CA 15-3. AFP is the liver, cancer, and pregnancy marker.",
      },
    ],
    answer: 0,
    page: "73",
  },
  {
    id: "lab-090",
    topicId: "LAB",
    topic: "CA 15-3 and CA 19-9",
    scene: "Two markers are on the same slide, for breast cancer and for the pancreas.",
    ask: "What is each one for?",
    choices: [
      {
        text: "CA 15-3 diagnoses pancreatic cancer. CA 19-9 is the breast screening test.",
        note: "No. That swaps the two markers.",
      },
      {
        text: "CA 15-3 monitors the response of breast cancer to treatment, and recurrence. CA 19-9 helps separate cancer of the pancreas from other conditions, and monitors response and recurrence.",
        note: "Correct. Neither line says the marker makes the diagnosis alone.",
      },
      {
        text: "Both are used only before any treatment, and neither is used for recurrence.",
        note: "No. Both are described as monitors of response, and of recurrence.",
      },
      {
        text: "CA 19-9 replaces lipase as the test that confirms acute pancreatitis.",
        note: "No. The slide uses CA 19-9 to help differentiate pancreatic cancer and to watch treatment. It does not call it the acute-pancreatitis enzyme.",
      },
    ],
    answer: 1,
    page: "73",
  },
  {
    id: "lab-091",
    topicId: "LAB",
    topic: "CEA and PSA",
    scene: "CEA is requested, and so is PSA. The person has no known cancer.",
    ask: "What does the lecture attach to each?",
    choices: [
      {
        text: "PSA is made only by malignant prostate cells. A detectable level is the diagnosis.",
        note: "No. The slide says normal cells as well as malignant cells.",
      },
      {
        text: "CEA is a prostate test. PSA is the colon test.",
        note: "No. PSA is the prostate protein. Colon and rectum are on the CEA list.",
      },
      {
        text: "CEA can be higher than normal in cancer of the bladder, breast, colon or rectum, lung, ovary, pancreas, stomach, or thyroid. PSA is a protein made by normal prostate cells as well as malignant ones.",
        note: "Correct. A PSA result is not, on this slide, proof of cancer by itself.",
      },
      {
        text: "CEA is limited to colon cancer. Lung and thyroid are not on its list.",
        note: "No. The list includes bladder, breast, colon or rectum, lung, ovary, pancreas, stomach, and thyroid.",
      },
    ],
    answer: 2,
    page: "73",
  },
  {
    id: "lab-092",
    topicId: "LAB",
    topic: "Why the heart markers appear",
    scene: "The laboratory phones a creatine kinase and a troponin after chest pain.",
    ask: "In what situations does the lecture say these markers enter the blood?",
    choices: [
      {
        text: "Only after a skeletal-muscle injury. The heart does not release them.",
        note: "No. Myocardial injury is the setting named, and heart failure is the other example.",
      },
      {
        text: "They are tumour markers, released by a cardiac cancer only.",
        note: "No. They are filed as serum enzymes and cardiac markers of injury, not as the tumour-marker list.",
      },
      {
        text: "They fall after infarction, because the injured muscle uses them up.",
        note: "No. They are released into the circulation after the injury.",
      },
      {
        text: "After myocardial injury, as in acute infarction, and in other conditions such as heart failure.",
        note: "Correct. That is the opening cardiac slide, before the timing of each marker.",
      },
    ],
    answer: 3,
    page: "74",
  },
  {
    id: "lab-093",
    topicId: "LAB",
    topic: "Creatine kinase timing",
    scene: "Muscle injury occurred at 08:00. It is now 14:30, then later the next day, then the fourth day.",
    ask: "What pattern does the lecture give creatine kinase?",
    choices: [
      {
        text: "It is in muscle and brain, and it reflects cell trauma. It rises within 6 hours, peaks at 18 hours, and is back to normal in 2 to 3 days. The test looks for myocardial damage, skeletal-muscle damage, or central-nervous-system damage.",
        note: "Correct. At 6.5 hours a rise is possible. By the fourth day the slide expects it to have returned to normal.",
      },
      {
        text: "It peaks at 6 hours and stays high for two weeks.",
        note: "No. The rise starts within 6 hours, the peak is at 18 hours, and the return is in 2 to 3 days.",
      },
      {
        text: "It is found only in the heart. Brain injury cannot raise it.",
        note: "No. Muscle and brain are both named, and central-nervous-system damage is one reason for the test.",
      },
      {
        text: "A normal result at 3 hours excludes muscle damage.",
        note: "No. The rise is described as beginning within 6 hours, so a very early sample can still be uninformative. The slide does not call 3 hours a rule-out.",
      },
    ],
    answer: 0,
    page: "75",
  },
  {
    id: "lab-094",
    topicId: "LAB",
    topic: "The MB fraction",
    scene: "The report specifies CPK-MB, and it is high. The person has not had a recognised infarction. They were defibrillated, and myocarditis is on the differential.",
    ask: "What else raises this fraction?",
    choices: [
      {
        text: "Only acute infarction. Defibrillation lowers the MB fraction.",
        note: "No. Defibrillation is on the increased-level list.",
      },
      {
        text: "Acute infarction, cardiac aneurysm surgery, defibrillation, cardiac ischaemia, myocarditis, and ventricular arrhythmias.",
        note: "Correct. Defibrillation and myocarditis are enough. An infarction is not the only item.",
      },
      {
        text: "Myocarditis is a skeletal-muscle cause and does not affect CPK-MB.",
        note: "No. Myocarditis is named on this cardiac list.",
      },
      {
        text: "Ventricular arrhythmias lower it, because the muscle is using the enzyme.",
        note: "No. Ventricular arrhythmias are an increased-level cause.",
      },
    ],
    answer: 1,
    page: "76",
  },
  {
    id: "lab-095",
    topicId: "LAB",
    topic: "Before a creatine kinase",
    scene: "The test was ordered to look at skeletal muscle. The person went to the gym this morning, had an intramuscular injection at noon, and drank last night.",
    ask: "What does the lecture say about those three?",
    choices: [
      {
        text: "Exercise is required before the test, so the muscle enzyme is detectable.",
        note: "No. Strenuous activity is to be avoided for 24 hours when skeletal muscle is the question.",
      },
      {
        text: "Alcohol raises the result truly, and the lecture wants the person to drink so the test is sensitive.",
        note: "No. Alcohol is avoided for 24 hours.",
      },
      {
        text: "For a skeletal-muscle question, no strenuous activity for 24 hours and no alcohol for 24 hours. An invasive procedure or an intramuscular injection can raise creatine kinase falsely.",
        note: "Correct. All three in the story are problems for this test.",
      },
      {
        text: "Intramuscular injections do not affect the level. Only surgery does.",
        note: "No. Intramuscular injections are named, with invasive procedures, as a false rise.",
      },
    ],
    answer: 2,
    page: "77",
  },
  {
    id: "lab-096",
    topicId: "LAB",
    topic: "Troponin I",
    scene: "Chest pain started four hours ago. Troponin I is up. A classmate says it will be normal again tomorrow, like creatine kinase, and that one sample is enough.",
    ask: "What does the lecture say?",
    choices: [
      {
        text: "Troponin I returns to normal in 2 to 3 days, and a sample before 12 hours is always negative.",
        note: "No. The rise can be as early as 3 hours, and the elevated period is 7 to 10 days.",
      },
      {
        text: "Troponin is only in skeletal muscle. An infarction does not release it.",
        note: "No. It is in myocardial and skeletal muscle, and infarction is the reason the level rises.",
      },
      {
        text: "A single sample at 4 hours finishes the diagnosis. Serial tests are for creatine kinase only.",
        note: "No. The slide says serial measurements are important.",
      },
      {
        text: "Troponin is a regulatory protein of striated muscle, heart and skeletal. Infarction releases more of it. It can be raised as early as 3 hours after infarction, and troponin I may stay raised for 7 to 10 days. Serial samples are needed. One high result tomorrow would still fit this window, and creatine kinase’s 2-to-3-day return is a different clock.",
        note: "Correct. Do not use a 10-to-15-day window from a different lecture, and do not use the creatine-kinase clock for troponin.",
      },
    ],
    answer: 3,
    page: "78",
  },
  {
    id: "lab-097",
    topicId: "LAB",
    topic: "Day six",
    scene: "It is day 6 after an infarction. Creatine kinase is back in range. Troponin I is still high.",
    ask: "Does that fit this lecture?",
    choices: [
      {
        text: "Yes. Creatine kinase is expected back to normal in 2 to 3 days. Troponin I may still be elevated at 7 to 10 days. The two clocks are not the same, and the troponin still needs to be read as a serial result, not as a single number.",
        note: "Correct. A normal creatine kinase on day 6 does not retire the troponin.",
      },
      {
        text: "Both should be normal by day 3. A high troponin on day 6 means a new infarction, and the lecture gives no other reading.",
        note: "No. Troponin I is allowed to stay up for 7 to 10 days after the original infarction.",
      },
      {
        text: "Troponin normalises first. Creatine kinase is the one that lasts 7 to 10 days.",
        note: "No. That swaps the two clocks.",
      },
      {
        text: "Neither marker is still interpretable after 24 hours.",
        note: "No. Creatine kinase peaks at 18 hours and lasts 2 to 3 days. Troponin I lasts longer.",
      },
    ],
    answer: 0,
    page: "75",
  },
  {
    id: "lab-098",
    topicId: "LAB",
    topic: "The opening list",
    scene: "A student asks which tests the second slide calls the common blood tests.",
    ask: "Which set is printed there?",
    choices: [
      {
        text: "Only a blood gas and a troponin. The blood count is a later lecture.",
        note: "No. The blood count is the first item. Troponin is not on the opening list.",
      },
      {
        text: "Complete blood count, liver and renal function, the clotting profile, thyroid function, Astrup, and tumour markers.",
        note: "Correct. Cardiac enzymes are taught at the end and are not on that opening list.",
      },
      {
        text: "The six items, plus a head-to-toe neurological chart.",
        note: "No. The list is blood tests only.",
      },
      {
        text: "Clotting is left off, because APTT and INR are not blood tests on this slide.",
        note: "No. The clotting profile is the third item.",
      },
    ],
    answer: 1,
    page: "2",
  },
  {
    id: "lab-099",
    topicId: "LAB",
    topic: "After the anaemia plan",
    scene: "The goals were less fatigue, enough food, enough perfusion, compliance, and no complications. It is now time to evaluate.",
    ask: "Which outcomes does the lecture expect?",
    choices: [
      {
        text: "A normal haemoglobin is the only outcome that counts.",
        note: "No. The outcomes are fatigue, nutrition, perfusion, and the absence of complications.",
      },
      {
        text: "Evaluation asks only whether the person enjoyed the teaching.",
        note: "No. The four outcomes are clinical, not a satisfaction score.",
      },
      {
        text: "The person reports less fatigue, attains and maintains adequate nutrition, maintains adequate perfusion, and has no complications.",
        note: "Correct. Those are the evaluation outcomes. Compliance was a goal. The evaluation slide does not restate it as its own line.",
      },
      {
        text: "Complications are expected, and their presence means the plan worked.",
        note: "No. Absence of complications is the outcome.",
      },
    ],
    answer: 2,
    page: "11",
  },
  {
    id: "lab-100",
    topicId: "LAB",
    topic: "Living with the plan",
    scene: "The person is going home on a high-dose corticosteroid for the anaemia plan, and they cannot see how the medicines fit a working day.",
    ask: "What does the compliance paragraph say?",
    choices: [
      {
        text: "Compliance is the doctor’s concern. The nurse does not help with the daily plan.",
        note: "No. The nurse assists the person to incorporate the plan into everyday activities.",
      },
      {
        text: "High-dose corticosteroids are stopped at discharge, so cost is irrelevant.",
        note: "No. The slide specifically mentions help with insurance or another way to obtain those medicines.",
      },
      {
        text: "The only compliance tool is a signed refusal of transfusion.",
        note: "No. Transfusion monitoring is a different paragraph. This one is about the everyday plan and the cost of the steroid.",
      },
      {
        text: "Help them build the plan into ordinary activities. People on high-dose corticosteroids may need help to get insurance cover, or another way to obtain the medicine.",
        note: "Correct. That is the compliance section, separate from the diet and the transfusion watch.",
      },
    ],
    answer: 3,
    page: "10",
  },
];
