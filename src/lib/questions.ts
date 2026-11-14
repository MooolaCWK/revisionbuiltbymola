export type LectureId = "L1" | "L2" | "L3" | "L4" | "L5" | "L6";

export type Choice = { text: string; note: string };

export type Question = {
  id: string;
  lecture: LectureId;
  topic: string;
  scene: string;
  ask: string;
  choices: Choice[];
  answer: number;
};

export const LECTURES: Record<
  LectureId,
  { n: string; title: string; line: string; exam: boolean }
> = {
  L1: {
    n: "01",
    title: "Scarcity and value",
    line: "Choice, opportunity cost, equity, and the Hong Kong system",
    exam: true,
  },
  L2: {
    n: "02",
    title: "Evidence and value",
    line: "Statistics, social costs, marginal analysis, ICER and NHB",
    exam: true,
  },
  L3: {
    n: "03",
    title: "Health capital",
    line: "Microeconomics and the Grossman model at the bedside",
    exam: true,
  },
  L4: {
    n: "04",
    title: "Supply and demand",
    line: "Markets, elasticity, GNI, and nursing labour",
    exam: true,
  },
  L5: {
    n: "05",
    title: "Cost and production",
    line: "The clinic table, scale, efficiency, and payment",
    exam: true,
  },
  L6: {
    n: "06",
    title: "The care sector",
    line: "Extra practice. Not on the 27 October paper.",
    exam: false,
  },
};

const q = (
  id: string,
  lecture: LectureId,
  topic: string,
  scene: string,
  ask: string,
  choices: Choice[],
  answer: number,
): Question => {
  let hash = 0;
  for (let i = 0; i < id.length; i += 1) hash = (hash * 33 + id.charCodeAt(i)) >>> 0;
  const shift = hash % choices.length;
  const spun =
    shift === 0 ? choices : choices.slice(shift).concat(choices.slice(0, shift));
  return {
    id,
    lecture,
    topic,
    scene,
    ask,
    choices: spun,
    answer: (answer - shift + choices.length) % choices.length,
  };
};

export const QUESTIONS: Question[] = [
  q(
    "l1-billion",
    "L1",
    "Scarcity",
    "A ward manager hears that healthcare has been given an extra HK$1 billion and says the shortage of beds is now over, so priority-setting can stop.",
    "Which reading matches the lecture?",
    [
      {
        text: "Scarcity ends once the budget grows, because scarcity is only a planning failure.",
        note: "The lecture treats scarcity as permanent. More money uncovers latent demand; it does not satisfy every need.",
      },
      {
        text: "The extra billion removes scarcity in tax-funded systems, but not in insurance systems.",
        note: "The slide says scarcity holds across tax-funded, insurance, and hybrid systems.",
      },
      {
        text: "Scarcity remains. Needs stay larger than resources, so every yes is still a hidden no.",
        note: "Correct. Scarcity is relative to unlimited need, not a fixed budget. Extra funding does not abolish it.",
      },
      {
        text: "Scarcity remains only if the billion is spent on technology rather than nurses.",
        note: "The claim does not depend on which service absorbs the money. Alternative uses remain.",
      },
    ],
    2,
  ),
  q(
    "l1-shortage",
    "L1",
    "Scarcity",
    "This month one ward cannot get a usual antibiotic because a batch is delayed. Separately, public hospitals have waited years for some elective joint replacements.",
    "How should the two situations be distinguished?",
    [
      {
        text: "Both are shortages, and both will disappear if purchasing is tightened.",
        note: "Long joint-replacement waits are used as structural scarcity, not a temporary supply glitch.",
      },
      {
        text: "The drug delay is a shortage that may end. Long elective waits express scarcity, which does not.",
        note: "Correct. A shortage is a temporary imbalance. Scarcity is a standing condition because resources have rival uses.",
      },
      {
        text: "The joint-replacement wait is a shortage. The drug delay is scarcity because drugs are clinical.",
        note: "That reverses the lecture’s examples.",
      },
      {
        text: "Neither is an economic problem if nobody is formally refused care.",
        note: "Waiting is already a form of rationing. Refusal is only the extreme end.",
      },
    ],
    1,
  ),
  q(
    "l1-thirty",
    "L1",
    "Opportunity cost",
    "A nurse spends 30 minutes re-entering the same admission data. A colleague asks what that half-hour cost.",
    "Which answer is the economic one?",
    [
      {
        text: "Half an hour of her salary, because cost means the invoice.",
        note: "The lecture explicitly rejects the wage as the true cost of duplicated paperwork.",
      },
      {
        text: "Nothing, because the hospital already pays her wage whether she types or not.",
        note: "No extra bill is not the same as no opportunity cost. The time had another use.",
      },
      {
        text: "The sum of every task she might have done in those 30 minutes.",
        note: "Opportunity cost is the single next-best alternative, not the sum of all alternatives.",
      },
      {
        text: "The nursing care that could have been given instead — the next-best use of that time.",
        note: "Correct. Opportunity cost is the value of the next-best alternative forgone, not the price on an invoice.",
      },
    ],
    3,
  ),
  q(
    "l1-bed",
    "L1",
    "Opportunity cost",
    "One monitored bed is free. Patient A is unstable and at high immediate risk. Patient B is stable now but may deteriorate if left unmonitored. The bed goes to A.",
    "What is true of the opportunity cost?",
    [
      {
        text: "There is no opportunity cost, because A was the clinically urgent patient.",
        note: "Urgency explains the choice. It does not erase what was given up.",
      },
      {
        text: "The opportunity cost is the monitoring B did not receive. B’s need is still real.",
        note: "Correct. Giving the bed to A forgoes the benefit to B. That does not make B’s need invalid.",
      },
      {
        text: "The opportunity cost is A’s and B’s needs added together.",
        note: "Only the next-best forgone option counts, not a sum of every claim.",
      },
      {
        text: "The opportunity cost is the daily room charge on the finance sheet.",
        note: "The economic cost is the forgone use, not merely the posted price.",
      },
    ],
    1,
  ),
  q(
    "l1-efficacy",
    "L1",
    "Effectiveness",
    "A medication-reminder app cut missed doses in a trial of selected, tech-confident patients with extra support. In an ordinary clinic rollout, language, phones, and family IT support get in the way.",
    "Which distinction is the lecture drawing?",
    [
      {
        text: "The trial showed effectiveness. The rollout failure is a nursing problem, not an economic one.",
        note: "Effectiveness is defined as results under ordinary conditions. The gap is the teaching point.",
      },
      {
        text: "The trial speaks to efficacy. Effectiveness asks whether it works for typical patients in ordinary practice.",
        note: "Correct. Efficacy: can it work under ideal conditions? Effectiveness: does it work in real practice?",
      },
      {
        text: "Efficacy and effectiveness are the same concept. Only the sample size changes.",
        note: "The lecture separates them by conditions and by who is included.",
      },
      {
        text: "If the leaflet or the app was delivered, effectiveness is already shown.",
        note: "Task completion is not effectiveness. The health outcome has to change.",
      },
    ],
    1,
  ),
  q(
    "l1-false-economy",
    "L1",
    "Efficiency",
    "A unit replaces a nurse-led discharge plan with a one-page checklist that is quick to tick and changes nothing that patients do after they go home. Readmissions do not fall.",
    "How does the four-box contrast classify this?",
    [
      {
        text: "Efficient, because it uses little staff time.",
        note: "A cheap process with no benefit is the lecture’s false economy. Efficiency is not low spending.",
      },
      {
        text: "Effective, because every patient received the checklist.",
        note: "Handing something out is not an outcome.",
      },
      {
        text: "A false economy: little resource use, and no health benefit.",
        note: "Correct. Effectiveness has to be established before efficiency is claimed. Zero benefit over any cost is poor use.",
      },
      {
        text: "High value, because the hospital spent less this week.",
        note: "Value is outcomes relative to resources, not a smaller bill by itself.",
      },
    ],
    2,
  ),
  q(
    "l1-discharge",
    "L1",
    "Efficiency",
    "Sending frail older patients home a day earlier frees beds this week. Several come back within 28 days with problems the extra day and a proper plan would have caught.",
    "Which statement fits the lecture?",
    [
      {
        text: "The early discharges were efficient because today’s length of stay fell.",
        note: "The discharge trap: a shorter stay that causes a bounce-back can raise total resource use.",
      },
      {
        text: "They were efficient if the readmissions are coded under a different team.",
        note: "Shifting the bill does not remove the resource use.",
      },
      {
        text: "They were not efficient. Downstream readmissions belong in the judgement.",
        note: "Correct. Efficiency asks about the resources needed for the outcome, including what happens next.",
      },
      {
        text: "Efficiency cannot be discussed once a patient has left the ward.",
        note: "The lecture wants the wider and longer view, including readmissions.",
      },
    ],
    2,
  ),
  q(
    "l1-leaflet",
    "L1",
    "Equity",
    "Every patient on a ward is given the same English discharge leaflet and one follow-up phone call. Some cannot read the leaflet. One older patient lives alone and does not pick up.",
    "What is the equity point?",
    [
      {
        text: "The ward has achieved equity, because everyone received the same items.",
        note: "That is equality of inputs. Equity responds to relevant differences in need.",
      },
      {
        text: "Horizontal equity means people with greater barriers should get less, so the queue stays equal.",
        note: "Horizontal equity is similar care for similar need. Different need calls for vertical equity.",
      },
      {
        text: "Same treatment is not automatically fair. Different need can justify translated material, teach-back, or extra visits.",
        note: "Correct. Equality gives everyone the same thing. Vertical equity varies care with need.",
      },
      {
        text: "Equity only concerns which cluster the hospital sits in, not the leaflet.",
        note: "The lecture applies equity to ordinary nursing choices, including information and follow-up.",
      },
    ],
    2,
  ),
  q(
    "l1-value-false",
    "L1",
    "Value",
    "A formulary meeting argues about a high-cost drug. Four claims are made.",
    "Which one matches the lecture’s idea of value?",
    [
      {
        text: "It has the highest value if it is the cheapest option on the list.",
        note: "Marked false in the lecture. Cheapest is not automatically highest value.",
      },
      {
        text: "It has the highest value if it is the most effective option, whatever it consumes.",
        note: "Also marked false. Effectiveness without the resource side is not value.",
      },
      {
        text: "Value is the outcomes that matter, set against the resources used to achieve them.",
        note: "Correct. Following Porter, value rises when meaningful outcomes are achieved efficiently. It is not a saving, and not the hospital’s view alone.",
      },
      {
        text: "Value means the hospital’s financial saving, judged only from the hospital’s books.",
        note: "The lecture rejects both “value = savings” and “only the hospital decides”.",
      },
    ],
    2,
  ),
  q(
    "l1-fair-innings",
    "L1",
    "Allocation",
    "In a severe triage discussion, three rules are on the table: maximise total health gain, give people with less chance of a full life extra priority, or offer equal access even when expected benefit is small.",
    "Which label matches “prioritise those who have had less chance of a full life”?",
    [
      {
        text: "Utilitarianism, because it maximises total health gained.",
        note: "That is the utilitarian rule on the slide, which favours high-volume, cost-effective care.",
      },
      {
        text: "The fair-innings argument.",
        note: "Correct. Williams’s fair innings, as taught here, prioritises people who have had less opportunity to live a full life, and it tends to favour the younger in age-group trade-offs.",
      },
      {
        text: "Egalitarianism, because everyone must receive identical treatment.",
        note: "The egalitarian contrast on the slide is equal access or equal treatment, even when the gain is small.",
      },
      {
        text: "Supplier-induced demand.",
        note: "That is a different idea: the clinician can influence how much care is used.",
      },
    ],
    1,
  ),
  q(
    "l1-arrow",
    "L1",
    "Markets",
    "A student says hospital care is just another competitive market: buyers know what they need, illness is planned, and the user pays the full bill.",
    "What does the lecture, following Arrow, say is wrong with that picture?",
    [
      {
        text: "Nothing. Healthcare meets the ordinary competitive assumptions.",
        note: "The comparison table says the opposite on information, demand, payment, and external effects.",
      },
      {
        text: "Only the equity concern differs. Information and payment work as in ordinary markets.",
        note: "Information asymmetry, unpredictable illness, and third-party payment are all part of the contrast.",
      },
      {
        text: "Uncertainty and uneven information are built in, someone else often pays, and effects spill onto other people.",
        note: "Correct. Arrow’s point, as used here: competitive equilibrium fails in medical care because uncertainty is pervasive.",
      },
      {
        text: "The only difference is that nurses are salaried.",
        note: "Payment method for staff is not the contrast drawn on that slide.",
      },
    ],
    2,
  ),
  q(
    "l1-frame",
    "L1",
    "Behaviour",
    "The same operation is described to one patient as “90% survive” and to another as “10% die”. The facts are identical. The second patient declines.",
    "What is this an example of?",
    [
      {
        text: "A change in clinical effectiveness.",
        note: "The outcomes described are the same. The presentation changed.",
      },
      {
        text: "Framing. How a fact is presented can change the choice even when the fact does not.",
        note: "Correct. The lecture uses this pair, with defaults and time preference, to show people are not purely calculating.",
      },
      {
        text: "Adverse selection in an insurance pool.",
        note: "Adverse selection is about higher-risk people being more likely to buy cover.",
      },
      {
        text: "A movement along the demand curve caused by own-price.",
        note: "No price changed.",
      },
    ],
    1,
  ),
  q(
    "l1-default",
    "L1",
    "Behaviour",
    "A clinic switches seasonal vaccination from “book yourself if you want it” to an automatic appointment that people can decline.",
    "What is the lecture’s point about that design?",
    [
      {
        text: "It bans refusal, so uptake rises by removing choice.",
        note: "An opt-out default still leaves a choice. That is why it is choice architecture, not a ban.",
      },
      {
        text: "Defaults do not matter if the clinical facts stay the same.",
        note: "The slide says small changes in presentation alter choices.",
      },
      {
        text: "An opt-out default can raise uptake without relying on incentives alone.",
        note: "Correct. Choice architecture is taught alongside the point that incentives are not the whole story.",
      },
      {
        text: "This is moral hazard, because the vaccine is free.",
        note: "Moral hazard is about using more care when someone else pays the marginal cost. The example here is the default.",
      },
    ],
    2,
  ),
  q(
    "l1-externality",
    "L1",
    "Externalities",
    "A private market sells vaccines only to people who pay for their own protection. Neighbours who never catch the infection pay nothing and are not in the deal.",
    "What does the lecture expect you to conclude?",
    [
      {
        text: "The private market will provide the socially useful amount, because buyers know their own benefit.",
        note: "Buyers under-value benefits that fall on other people, so the market under-provides vaccination.",
      },
      {
        text: "There is a positive externality, and a pure private market tends to under-provide the vaccine.",
        note: "Correct. An externality falls on people outside the decision. Vaccination is the lecture’s positive case.",
      },
      {
        text: "This is a negative externality, like the harm from smoking on bystanders.",
        note: "Smoking and antibiotic resistance are the negative examples. Vaccination benefits third parties.",
      },
      {
        text: "Externalities only exist when the Hospital Authority sets a fee.",
        note: "The definition is about spillovers, not about who the provider is.",
      },
    ],
    1,
  ),
  q(
    "l1-perspective",
    "L1",
    "Perspective",
    "A nurse-led discharge service uses extra nursing time. It may cut readmissions, shorten families’ unsupported care, and get some patients back to paid work sooner.",
    "Why can the same service look costly to one party and worthwhile to another?",
    [
      {
        text: "It cannot. A cost is a cost from every perspective.",
        note: "Perspective decides whose costs and benefits are counted. The slide says the verdict can change.",
      },
      {
        text: "Only the patient’s comfort is allowed in a health-economic perspective.",
        note: "The lecture walks through employer, caregiver, hospital, and system views.",
      },
      {
        text: "The hospital counts the extra staff time. A wider perspective also counts readmissions, caregiving, and time off work.",
        note: "Correct. Whether it looks costly depends on whose costs and benefits are inside the frame.",
      },
      {
        text: "Perspective matters only for private hospitals, not for HA services.",
        note: "The worked case is a nurse-led service discussed from the hospital and the wider system.",
      },
    ],
    2,
  ),
  q(
    "l1-hk-spend",
    "L1",
    "Hong Kong",
    "A relative says Hong Kong must be spending a very high share of the economy on health, because life expectancy is among the best in the world.",
    "Which comparison does the lecture actually draw?",
    [
      {
        text: "Spending is about 5.7% of GDP, alongside high life expectancy. Good outcomes have not abolished scarcity.",
        note: "Correct. The dual public–private system is presented with that low share and with continuing pressure from ageing, chronic illness, waits, and technology.",
      },
      {
        text: "Spending is about 15% of GDP, which is why waits have disappeared.",
        note: "The chart label used in class is about 5.7% of GDP, and waits are still part of the story.",
      },
      {
        text: "Life expectancy is high because the private sector provides most inpatient care.",
        note: "Public hospitals carry heavily subsidised inpatient and specialist care. The private side is largely out-of-pocket and insurance.",
      },
      {
        text: "Ageing removes scarcity, because survival is a success.",
        note: "The lecture calls ageing a success that still increases resource pressure. Good outcomes can increase scarcity.",
      },
    ],
    0,
  ),
  q(
    "l1-workforce",
    "L1",
    "Hong Kong",
    "Someone argues the nursing workforce grew 74.4% from 1996 to 2020, so a shortage of nurses cannot be real. The lecture’s workforce slide is on the table.",
    "What should you say?",
    [
      {
        text: "Growth rules out a shortage. Headcount and need move together automatically.",
        note: "The slide says shortages persist despite that growth.",
      },
      {
        text: "Hong Kong has 8.2 nurses per 1,000 people, which is above the benchmark of 9 cited there, so the system is overstaffed.",
        note: "8.2 is below the benchmark of 9 given on the slide.",
      },
      {
        text: "Headcount rose, and the lecture still cites a projected shortfall of 1,669 nurses by 2030, with 8.2 nurses per 1,000 against a benchmark of 9.",
        note: "Correct. Use this series as taught in Lecture 1. Do not swap it for a different Hospital Authority full-time-equivalent projection from another lecture.",
      },
      {
        text: "The shortfall figure means scarcity has ended and only a temporary drug shortage remains.",
        note: "A workforce gap is one pressure inside ongoing scarcity. It is not the definition of a temporary shortage.",
      },
    ],
    2,
  ),
  q(
    "l1-mrs-chan",
    "L1",
    "Nutrition",
    "Mrs Chan is 78, has type 2 diabetes, has lost weight, has little income, struggles to cook, and keeps coming back into hospital. A classmate says the case is settled: she is elderly and vulnerable, so extra nutrition support is automatically the right buy.",
    "What does the lecture say is still missing?",
    [
      {
        text: "Nothing. Vulnerability is a full health-economic answer.",
        note: "The slide warns against jumping to that. It is not yet an economic argument.",
      },
      {
        text: "Only the price of the supplement. Outcomes and alternatives are clinical, not economic.",
        note: "The required answer names scarce resources, alternative uses, expected outcomes, and who else is affected.",
      },
      {
        text: "Which scarce resources it uses, what else those resources could do, whether it works in practice, and who else is affected.",
        note: "Correct. Withdrawing support only to save money is cost-cutting. Targeting people who benefit is value-conscious care. The case still has to be argued.",
      },
      {
        text: "Whether the supplement is efficacious in a tightly selected trial, and nothing about home life.",
        note: "Real-world barriers, household resources, and downstream admissions are part of the case.",
      },
    ],
    2,
  ),

  q(
    "l2-mean",
    "L2",
    "Statistics",
    "A ward’s cost per stay is right-skewed. Most stays cluster at a modest cost. A few very long stays pull the average up. A manager wants one number for a “typical” stay, and the finance office wants a number that will scale to a budget.",
    "Which pair fits the lecture’s warning about skewed costs?",
    [
      {
        text: "Use the mean for a typical patient. The median cannot say anything about total spending.",
        note: "In a right skew the mean is pulled up by the costly tail, so it is a poor picture of the typical stay.",
      },
      {
        text: "Prefer the median for a typical stay. Keep the mean when you care about the total, because total cost tracks the mean times the number of stays.",
        note: "Correct. Skewed costs are why the mean and the median answer different questions. Neither replaces the other.",
      },
      {
        text: "Delete the expensive stays, then report the mean as if the case-mix had not changed.",
        note: "Those stays are real resource use. Dropping them hides the budget problem.",
      },
      {
        text: "The mean and the median are always close for costs, so the choice does not matter.",
        note: "The whole point of this outcome is that health-care costs are often skewed, so the choice matters.",
      },
    ],
    1,
  ),
  q(
    "l2-ci",
    "L2",
    "Statistics",
    "A study reports a mean extra cost of a new pathway versus usual care. The 95% confidence interval runs from HK$400 to HK$2,200.",
    "What can you fairly say?",
    [
      {
        text: "The true extra cost is HK$400, because that is the bottom of the interval.",
        note: "The interval is a range of values compatible with the data at that confidence level, not a pair of candidates with the end as the truth.",
      },
      {
        text: "There is no evidence of a difference, because the interval is wide.",
        note: "Width is uncertainty. This interval does not cross zero.",
      },
      {
        text: "Zero is outside the interval, so at this confidence level the data favour a higher mean cost, not no difference. The interval does not say every patient costs more.",
        note: "Correct. Read the interval against the value of no difference. Do not turn it into a guarantee for each person.",
      },
      {
        text: "A confidence interval is significant only when it includes zero.",
        note: "For a difference, including zero is the pattern that does not exclude no difference.",
      },
    ],
    2,
  ),
  q(
    "l2-p",
    "L2",
    "Statistics",
    "A small pilot of a falls bundle finds fewer falls, but the p-value is 0.18. A colleague says this proves the bundle does nothing.",
    "What is the better reading?",
    [
      {
        text: "A p-value above 0.05 proves there is no effect.",
        note: "Absence of statistical significance is not proof of no effect, especially in a small sample. That over-reading is what the statistical-tools outcome warns against.",
      },
      {
        text: "The p-value is the probability that the null hypothesis is true.",
        note: "It is not. Treat it as a measure of surprise under a stated model, and read it with the interval and the size of the effect.",
      },
      {
        text: "The result is uncertain. Non-significance does not prove no effect, and the interval and sample size still have to be read.",
        note: "Correct. Do not turn a single cut-off into a clinical verdict. Uncertainty is the point of the tool.",
      },
      {
        text: "Ignore the estimate and fund the bundle because the p-value is above 0.05.",
        note: "A high p-value is not evidence in favour of spending. It means the data do not settle the question.",
      },
    ],
    2,
  ),
  q(
    "l2-regression",
    "L2",
    "Statistics",
    "An observational study reports that, holding the other variables in the model constant, each extra nurse-led coaching visit is associated with a shorter stay. No one randomised the visits.",
    "How should a resource decision use that coefficient?",
    [
      {
        text: "As proof that adding visits will cause stays to shorten by that amount on your ward.",
        note: "A regression coefficient from observational data is an association after adjustment, not automatic causation.",
      },
      {
        text: "As the change in the outcome linked to a one-unit change in visits, given the other variables that were included. Causation still needs a design that can support it.",
        note: "Correct. Adjusted association can guide questions. It does not by itself justify a staffing bid.",
      },
      {
        text: "As a meaningless number, because regression cannot describe health data.",
        note: "The lecture wants you to read regression, not discard it. Reading it includes knowing what it does not show.",
      },
      {
        text: "As a confidence interval. Coefficients and intervals are the same object.",
        note: "The coefficient is the estimate. The interval describes uncertainty around it.",
      },
    ],
    1,
  ),
  q(
    "l2-social",
    "L2",
    "Social benefit",
    "A school-age vaccination session costs the clinic time and vaccine. The child is less likely to become ill. Classmates who were not vaccinated are also less likely to catch the infection.",
    "How should the benefits be classed before a go or stop decision?",
    [
      {
        text: "Only the child’s benefit counts. Classmates are outside the budget heading.",
        note: "That drops the external benefit and can make a socially worthwhile programme look poor.",
      },
      {
        text: "The child’s gain is the private benefit. The classmates’ gain is an external benefit. Social benefit includes both.",
        note: "Correct. Social impact is private plus external. Nursing programmes often create spillovers beyond the person in the chair.",
      },
      {
        text: "Classmates’ protection is a private benefit, because they live in the same city.",
        note: "Private, here, means accruing to the parties in the decision. The spillover is external.",
      },
      {
        text: "External benefits are subtracted from private benefits to avoid double counting.",
        note: "They are added into the social total, not subtracted.",
      },
    ],
    1,
  ),
  q(
    "l2-nmsb",
    "L2",
    "Marginal analysis",
    "For one more home-visit slot, private benefit is 80, external benefit is 30, and marginal social cost is 100. Use MSB = private + external, and net marginal social benefit = MSB − MSC.",
    "What should the service do with a small expansion?",
    [
      {
        text: "Stop. Private benefit (80) is below marginal social cost (100).",
        note: "That test ignores the external benefit. The social rule uses MSB, not private benefit alone.",
      },
      {
        text: "Expand while net marginal social benefit is positive. Here MSB is 110 and net benefit is 10.",
        note: "Correct. Keep going while MSB exceeds MSC. Do not stop merely because the private piece is smaller than MSC.",
      },
      {
        text: "Expand without limit, because external benefits are always larger than costs.",
        note: "The rule is marginal. A later slot can have a smaller MSB or a higher MSC.",
      },
      {
        text: "Expand only when MSB is maximised, even if MSC is larger still.",
        note: "The stopping rule is MSB compared with MSC, not “make MSB as large as possible”.",
      },
    ],
    1,
  ),
  q(
    "l2-stop",
    "L2",
    "Marginal analysis",
    "A clinic has been adding evening slots. For the next slot, marginal social benefit is now below marginal social cost. The manager says the programme must continue because the first slots were very valuable.",
    "What does marginal analysis say?",
    [
      {
        text: "Stop adding slots. The next one takes more social cost than it returns, even if earlier ones were worth doing.",
        note: "Correct. The decision to expand or stop is made at the margin. Past gains do not rescue a slot with negative net marginal social benefit.",
      },
      {
        text: "Continue, because average benefit since the programme opened is still high.",
        note: "The average of old slots is the wrong comparison for the next slot.",
      },
      {
        text: "Continue until marginal social benefit is zero, whatever marginal social cost is.",
        note: "Zero benefit is not the rule. Compare benefit with cost at the margin.",
      },
      {
        text: "Shut the whole service, including the slots that still have MSB above MSC.",
        note: "A bad next slot is not a reason to close slots that still pass the test.",
      },
    ],
    0,
  ),
  q(
    "l2-cba",
    "L2",
    "Cost-benefit",
    "A hospital CBA of a new clinic counts this year’s staffing bill and the fees patients pay. It ignores volunteer time, the room’s next-best use, caregiver time, and complications after the first year.",
    "Which flaw matches the lecture’s CBA checklist?",
    [
      {
        text: "None. A CBA should use the cash the hospital will pay this year, and nothing else.",
        note: "The lecture asks for a stated perspective, a time horizon long enough for the consequences, and full opportunity costs.",
      },
      {
        text: "The horizon is too short, and resources without an invoice are still economic costs. The perspective has to be stated.",
        note: "Correct. “No bill” is not “no cost”. A hospital frame and a one-year frame can both mislead if they are silent.",
      },
      {
        text: "CBA is invalid if any benefit is converted into money.",
        note: "Monetising benefits is what lets CBA compare costs and benefits in one unit. The discipline is to be explicit about what was valued.",
      },
      {
        text: "Volunteer time should be excluded so the result looks more efficient.",
        note: "Leaving out a real resource use biases the result. It does not make the programme more efficient.",
      },
    ],
    1,
  ),
  q(
    "l2-icer",
    "L2",
    "ICER",
    "Usual care costs HK$20,000 and yields 10 QALYs in the model. The new service costs HK$50,000 and yields 12 QALYs. A decision-maker’s willingness to pay is HK$20,000 per QALY.",
    "What is the ICER, and how does it sit against that threshold?",
    [
      {
        text: "HK$15,000 per QALY, and it is under the threshold, so the extra cost is within what the threshold says is acceptable.",
        note: "Correct. ΔC = 30,000 and ΔE = 2, so ICER = 15,000 per QALY, which is under a HK$20,000 threshold.",
      },
      {
        text: "HK$30,000 per QALY, because you divide the new cost by the extra QALYs.",
        note: "ICER uses incremental cost and incremental effect, not the new programme’s total cost over the gain.",
      },
      {
        text: "HK$2,500 per QALY, because you divide the extra cost by the new total of 12 QALYs.",
        note: "The denominator is the extra outcome, 2 QALYs, not the new total.",
      },
      {
        text: "HK$15,000 per QALY, which is over a HK$20,000 threshold, so it should be rejected.",
        note: "15,000 is below 20,000, not above. Being under the threshold supports adoption on this rule.",
      },
    ],
    0,
  ),
  q(
    "l2-nhb",
    "L2",
    "Net health benefit",
    "Use net health benefit in health units: NHB = ΔE − ΔC / λ. A pathway costs HK$150,000 more and produces 2 extra QALYs. The threshold λ is HK$100,000 per QALY.",
    "What is the NHB, and what does the sign mean?",
    [
      {
        text: "NHB = 0.5 QALY. It is positive, so the gain is worth more than the extra cost at this threshold.",
        note: "Correct. 150,000 / 100,000 = 1.5. NHB = 2 − 1.5 = 0.5. Positive NHB and an ICER below λ are the same verdict.",
      },
      {
        text: "NHB = −148,000. Subtract the money from the QALYs without using the threshold.",
        note: "QALYs and dollars cannot be subtracted until the threshold puts them in the same unit.",
      },
      {
        text: "NHB = HK$75,000, which is the ICER.",
        note: "The ICER is ΔC / ΔE = 75,000 per QALY. That is not the NHB.",
      },
      {
        text: "NHB = −0.5, so the pathway fails the threshold.",
        note: "The sign is positive. 2 minus 1.5 is plus 0.5.",
      },
    ],
    0,
  ),
  q(
    "l2-plane",
    "L2",
    "Cost-effectiveness plane",
    "On a cost-effectiveness plane, the new programme is plotted against usual care. One cloud of uncertainty sits entirely in the south-east: less costly and more effective in every draw. Another cloud sits in the north-east and straddles the willingness-to-pay line.",
    "How do you read the two clouds?",
    [
      {
        text: "The south-east cloud dominates usual care. The north-east cloud needs the threshold, and crossing the line means the decision is uncertain.",
        note: "Correct. South-east is a win on both axes. North-east is the trade-off quadrant. A cloud across the threshold line means some plausible draws reverse the decision.",
      },
      {
        text: "South-east means dominated, because lower cost cannot be an improvement.",
        note: "Lower cost and better outcomes is dominance in favour of the new programme, not against it.",
      },
      {
        text: "Any cloud that is not a single point should be ignored.",
        note: "The cloud is how the lecture asks you to see uncertainty, not a reason to discard the analysis.",
      },
      {
        text: "North-west and south-east mean the same thing.",
        note: "North-west is more costly and less effective: dominated. South-east is the opposite.",
      },
    ],
    0,
  ),
  q(
    "l2-roi",
    "L2",
    "ROI",
    "A prevention project costs HK$200,000. The analysis counts HK$260,000 of monetised benefit. Using ROI = (benefit − cost) / cost, a manager says 30% proves the project is the fairest use of the nursing budget.",
    "What can the ROI actually support?",
    [
      {
        text: "On these figures the monetised benefits exceed the costs by 30% of the outlay. It does not, by itself, show fairness or that nothing better was displaced.",
        note: "Correct. ROI is only as good as the perspective, the horizon, and what was counted. Equity and opportunity cost are separate questions.",
      },
      {
        text: "30% means the project produces 30 extra QALYs.",
        note: "This ROI is a money ratio. It is not a QALY count. If benefits were never monetised, ROI is the wrong tool.",
      },
      {
        text: "A positive ROI means marginal social benefit is below marginal social cost.",
        note: "Benefits above costs points the other way, and only for the items that were included.",
      },
      {
        text: "ROI = 260,000 / 200,000 = 30%. The manager’s percentage is the right arithmetic.",
        note: "260,000 / 200,000 = 1.3, a benefit–cost ratio. The net ROI in the question is (60,000) / 200,000 = 0.30. Do not mix the two.",
      },
    ],
    0,
  ),

  q(
    "l3-stock",
    "L3",
    "Grossman",
    "A student describes health as something you either have today or you buy, like a meal. The lecture’s Grossman framing is on the board, including the “health bank account”.",
    "Which restatement matches that framing?",
    [
      {
        text: "Health is a durable stock. It depreciates, and people invest in it. Medical care is one input, not the thing demanded for its own sake alone.",
        note: "Correct. The model treats health as capital. Care, time, and health behaviour are ways of adding to the stock.",
      },
      {
        text: "Health cannot depreciate. Only machines depreciate.",
        note: "Depreciation of health capital, faster at older ages, is why maintaining the stock takes more investment later.",
      },
      {
        text: "People demand appointments. Health is the leftover after the appointment is billed.",
        note: "The demand the model starts from is for health capital. Visits are derived from that.",
      },
      {
        text: "The model is a full description of every ward, with no simplifying assumptions.",
        note: "The lecture treats it as a simplified, deterministic account that nursing still has to translate into bedside judgement.",
      },
    ],
    0,
  ),
  q(
    "l3-skip",
    "L3",
    "Demand",
    "A patient understands the prescription and still does not collect it after seeing the out-of-pocket charge. A colleague says this proves the patient does not value health.",
    "What is the more careful economic reading?",
    [
      {
        text: "The price of an input into health production rose. Skipping the drug can be a constrained choice, not proof that health has no value.",
        note: "Correct. The lecture’s ward example is exactly this: out-of-pocket costs push people off a prescribed input.",
      },
      {
        text: "Demand for health capital ignores prices. Non-adherence is only forgetfulness.",
        note: "Prices of inputs are part of how much investment people can make.",
      },
      {
        text: "The prescription is a consumption good like entertainment, so clinical need is irrelevant.",
        note: "The point of the model is that care is mostly an input into a stock the person cares about.",
      },
      {
        text: "Information is perfect here, because a prescription was written.",
        note: "A written prescription does not remove uncertainty about effect, side-effects, or the household budget.",
      },
    ],
    0,
  ),
  q(
    "l3-icu",
    "L3",
    "Scarcity",
    "The ICU is short of nurses on a Tuesday. The roster was not filled at the wage the hospital is allowed to pay, and agency cover was capped.",
    "Which “invisible choice” is this?",
    [
      {
        text: "A patient’s choice to skip a drug because of a copayment.",
        note: "That is the patient-side example. This one sits with the hospital.",
      },
      {
        text: "A hospital choice shaped by the wage it can offer and by operating limits.",
        note: "Correct. The lecture uses understaffing under wage ceilings and operational limits as the hospital’s invisible choice.",
      },
      {
        text: "A formulary cap that removes a drug from the shelf.",
        note: "That is the system example about a life-saving drug becoming inaccessible.",
      },
      {
        text: "Proof that the Grossman model forbids any staffing decision.",
        note: "The model is a way to see investment in health. It is not a ban on talking about labour.",
      },
    ],
    1,
  ),
  q(
    "l3-formulary",
    "L3",
    "Rationing",
    "A drug with a clear clinical role disappears from routine use after a formulary cost cap. Prescribers are told to use an older alternative.",
    "What kind of choice is the lecture pointing at?",
    [
      {
        text: "A system choice. A budget rule rations who can receive the drug.",
        note: "Correct. Formulary caps are the lecture’s picture of rationing above the individual bedside.",
      },
      {
        text: "A pure clinical choice with no opportunity cost, because a guideline exists.",
        note: "A cap is an allocation rule. The forgone benefit for people who would have received the drug is the opportunity cost.",
      },
      {
        text: "Evidence that efficacy and effectiveness are identical.",
        note: "A funding rule does not collapse those two ideas.",
      },
      {
        text: "Supplier-induced demand, because the drug was removed.",
        note: "Inducement is extra use encouraged by the supplier. A cap restricts use.",
      },
    ],
    0,
  ),
  q(
    "l3-depreciation",
    "L3",
    "Grossman",
    "Two patients invest similar time and attention in their health. The older patient’s stock still slides faster. A junior says the model has failed because both “tried equally”.",
    "What is the model doing?",
    [
      {
        text: "Predicting that equal effort always produces an equal stock, at every age.",
        note: "Depreciation rises with age in the standard Grossman account used in this lecture. The same investment need not hold the stock flat.",
      },
      {
        text: "Allowing the stock to wear out faster later in life, so more investment may be needed just to stand still.",
        note: "Correct. That is why older patients can need more maintenance for the same health capital.",
      },
      {
        text: "Treating medical care as the only input that can ever add to the stock.",
        note: "Time, diet, and other behaviours are also investments. Care is not the sole input.",
      },
      {
        text: "Saying prevention is worthless because depreciation is inevitable.",
        note: "Depreciation is why investment matters. It is not an argument for doing nothing.",
      },
    ],
    1,
  ),
  q(
    "l3-utility",
    "L3",
    "Utility",
    "A patient turns down a slightly more effective plan because the travel and the side-effects would wreck the week she has with her grandchildren. The plan is inside the formulary.",
    "How can utility language describe this without sneering?",
    [
      {
        text: "She is irrational, because any health gain must be accepted.",
        note: "Utility here includes what she values, not only the clinical endpoint.",
      },
      {
        text: "She is weighing the health gain against other things she values, inside a real constraint on time and comfort.",
        note: "Correct. Microeconomics starts from purposeful choice under scarcity, including non-money costs.",
      },
      {
        text: "Utility is the hospital’s revenue from the plan she declined.",
        note: "Utility is the person’s valuation of the outcome, not the provider’s fee.",
      },
      {
        text: "Once a drug is effective in a trial, patient values are outside economics.",
        note: "The lecture’s point is that those values are inside the choice.",
      },
    ],
    1,
  ),
  q(
    "l3-derived",
    "L3",
    "Demand",
    "A public clinic cuts the fee for a physiotherapy course. Visits rise. A classmate says this is a shift in the demand for health capital caused by a change in taste.",
    "Which description is tighter?",
    [
      {
        text: "The own-price of an input fell, so quantity demanded of that input moved along its demand curve. Taste need not have changed.",
        note: "Correct. Do not call every price response a shift, and do not confuse demand for a visit with demand for the health stock itself.",
      },
      {
        text: "Health capital’s price is the physiotherapy fee, so the Grossman stock and the visit are the same good.",
        note: "The visit is an input. The stock is what the person is trying to hold or rebuild.",
      },
      {
        text: "Quantity demanded cannot change unless income changes.",
        note: "Own-price changes quantity demanded along the curve. Income shifts the curve.",
      },
      {
        text: "A lower fee is a supply shock, so the demand curve is the wrong object.",
        note: "The fee is the price buyers face. Their response is on the demand side.",
      },
    ],
    0,
  ),
  q(
    "l3-translate",
    "L3",
    "Using the model",
    "A senior says the Grossman equation is enough to discharge a frail patient: the stock depreciates, therefore send them home and let the family invest.",
    "What is the lecture’s caution?",
    [
      {
        text: "The equation replaces clinical judgement. If the algebra is satisfied, the discharge is justified.",
        note: "The lecture’s line is that the model is a simplification and that nursing has to translate it. It is not a discharge order.",
      },
      {
        text: "Use the model to see health as a stock that needs investment, then look at whether the home can actually supply that investment.",
        note: "Correct. Family time, housing, and follow-up are the real inputs. The equation does not observe them for you.",
      },
      {
        text: "Depreciation means community care cannot change the stock, so the model does not apply after discharge.",
        note: "Community care is one of the investments the stock can receive.",
      },
      {
        text: "The model forbids any discussion of unpaid family time.",
        note: "Unpaid time is an input with an opportunity cost. Leaving it out is the mistake.",
      },
    ],
    1,
  ),

  q(
    "l3-equation",
    "L3",
    "Grossman",
    "A nurse is shown next year’s health stock as whatever is left after depreciation, plus what was invested this year.",
    "Which expression matches the lecture?",
    [
      {
        text: "H(t+1) = (1 − δ) H(t) + I(t). The stock wears out at rate δ, and gross investment I adds to what remains.",
        note: "Correct. Medical care, diet, exercise, and rest sit inside I. δ is depreciation, which the lecture ties to ageing.",
      },
      {
        text: "H(t+1) = H(t) − I(t). Investment subtracts from the stock.",
        note: "Investment is added. Depreciation is what reduces the carried-forward stock.",
      },
      {
        text: "H(t+1) = δ × I(t). Age and behaviour are the same variable.",
        note: "Depreciation and investment are separate terms.",
      },
      {
        text: "The lecture gives no stock equation, only a demand curve.",
        note: "The stock equation is the centre of the Grossman block, including the later form with a time-varying δ.",
      },
    ],
    0,
  ),
  q(
    "l3-qaly",
    "L3",
    "QALYs",
    "An evaluation assumes everyone survives three years and nothing is discounted. The new programme gives utility 0.6 in year 1 and 0.8 in years 2 and 3. Usual care stays at utility 0.6 for all three years.",
    "How many QALYs are gained?",
    [
      {
        text: "0.4 QALY. The new programme accumulates 2.2 and usual care accumulates 1.8.",
        note: "Correct. 0.6 + 0.8 + 0.8 = 2.2. Usual care is 0.6 × 3 = 1.8. The gain is 2.2 − 1.8 = 0.4. Accumulated QALYs and QALYs gained are not the same number.",
      },
      {
        text: "2.2 QALYs, the new programme’s total.",
        note: "2.2 is accumulated QALYs. The comparator still has to be subtracted.",
      },
      {
        text: "1.8 QALYs, because that is the larger clinical change.",
        note: "1.8 is the comparator’s total, not the incremental gain.",
      },
      {
        text: "1.0 QALY, because two years at utility 0.8 equal one year of perfect health.",
        note: "Two years at 0.5 utility equal 1.0 QALY. That identity is taught, but it is not this sum.",
      },
    ],
    0,
  ),
  q(
    "l3-daly",
    "L3",
    "DALYs",
    "A teaching example: someone lives 5 years with a disability weight of 0.2, then dies with 10 years of life expectancy remaining.",
    "What is the total burden in the lecture’s arithmetic, and which way is “better”?",
    [
      {
        text: "11 DALYs. Years lived with disability are 1 and years of life lost are 10. Fewer DALYs lost is the better direction.",
        note: "Correct. YLD = 5 × 0.2 = 1. YLL = 10. DALYs = YLL + YLD = 11. One DALY is one lost year of healthy life. Do not assume disability weight equals 1 minus a QALY utility.",
      },
      {
        text: "1 DALY, because only the disability weight is counted.",
        note: "1.0 is the YLD piece alone.",
      },
      {
        text: "10 DALYs, and a higher DALY total is a better outcome.",
        note: "10 is YLL alone. Higher DALYs mean more healthy life lost, which is worse. Higher QALYs mean the opposite.",
      },
      {
        text: "0.8 DALYs, because a utility of 0.8 is defined as 1 minus the disability weight.",
        note: "The lecture says not to treat disability weight and utility as mathematical complements. They are built differently.",
      },
    ],
    0,
  ),
  q(
    "l3-icer-injury",
    "L3",
    "ICER",
    "A new pressure-injury protocol costs $500 per patient and prevents 3 injuries. Standard care costs $200 and prevents 1. Outcomes are in natural units.",
    "What is the ICER, and which tool is this?",
    [
      {
        text: "$150 per injury prevented, from a cost-effectiveness analysis. Compare that incremental figure with an explicit threshold after checking dominance.",
        note: "Correct. ICER = (500 − 200) / (3 − 1) = 150. CEA uses natural units. It cannot be lined up against a QALY result from another ward without further work.",
      },
      {
        text: "$300 per injury, because 500 minus 200 is the whole answer.",
        note: "300 is only ΔCost. Divide by the two extra injuries avoided.",
      },
      {
        text: "$150 per QALY, so this is a cost-utility analysis.",
        note: "The unit is injuries, not QALYs. QALYs would make it a CUA.",
      },
      {
        text: "Choose the cheaper total automatically. This is cost-minimisation.",
        note: "CMA requires outcomes already shown to be equivalent. Here the effects differ, so CMA is the wrong tool.",
      },
    ],
    0,
  ),
  q(
    "l3-cma",
    "L3",
    "Choosing a tool",
    "Two generic 500 mg paracetamol products have been shown, head to head, to work the same way. One costs about $1 and the other about $2. A different proposal claims a $10,000 saving for a cheaper antiemetic that causes severe nausea and extra nursing time.",
    "Where is cost-minimisation actually allowed?",
    [
      {
        text: "Only for the paracetamol pair, where equivalence is evidenced. The antiemetic saving is not a valid CMA if the outcomes are not equivalent.",
        note: "Correct. CMA asks which is cheaper only after credible evidence says the consequences match. A cheaper pill that creates new nursing work fails that test.",
      },
      {
        text: "For both, because both mention a lower price.",
        note: "A lower price with worse consequences is not cost-minimisation.",
      },
      {
        text: "For neither. CMA is never used when two drugs share a dose.",
        note: "Identical generics are the lecture’s valid CMA example.",
      },
      {
        text: "For the antiemetic only, because the saving is larger.",
        note: "The size of the saving does not repair a broken equivalence claim.",
      },
    ],
    0,
  ),
  q(
    "l3-plane-rule",
    "L3",
    "Decision rules",
    "Four results come back for a dressing change. One is worse and more expensive. One is better and cheaper. One is better and more expensive, with a negative ICER someone wants to quote on its own. A cost-benefit study reports a benefit–cost ratio of 2.1.",
    "Which reading follows the lecture’s rules?",
    [
      {
        text: "Reject the dominated option. Adopt the cheaper-and-better option. Do not interpret a negative ICER on its own. A benefit–cost ratio of 2.1 means about $2.10 back per $1, which clears a rule of BCR above 1.",
        note: "Correct. Dominance is decided before any threshold. Trade-off quadrants need a willingness-to-pay line or net benefit. CBA in this lecture uses BCR above 1 or net benefit above zero.",
      },
      {
        text: "A negative ICER always means adopt, and a BCR of 2.1 means the programme loses money.",
        note: "The lecture says not to read a negative ICER alone. BCR 2.1 is a return above cost, the dressing slide’s $2.10 per $1.",
      },
      {
        text: "Worse and more expensive can still be adopted if the hospital prefers the brand.",
        note: "That quadrant is the reject quadrant.",
      },
      {
        text: "Cost-consequence analysis would have forced a single yes, because it produces an ICER.",
        note: "CCA keeps a dashboard and does not collapse to one ratio. Stakeholders weigh the pieces.",
      },
    ],
    0,
  ),
  q(
    "l3-output",
    "L3",
    "Output and outcome",
    "A unit celebrates 100 extra procedures. Pain scores, walking, and time back with family are not in the report. Funding is tied to the procedure count.",
    "What distinction is being missed?",
    [
      {
        text: "Output is what the service does. Outcome is how the patient changes. Paying for volume can raise procedures without raising health.",
        note: "Correct. The lecture sets 100 procedures beside quality of life on purpose, and asks whether funding is buying volume or the patient’s trajectory.",
      },
      {
        text: "Output and outcome are the same word in economic evaluation.",
        note: "They are separated: volume versus well-being.",
      },
      {
        text: "One hundred procedures are 100 QALYs by definition.",
        note: "A QALY multiplies a utility weight by time. A procedure count does not.",
      },
      {
        text: "Patient-reported pain is a process measure, not an outcome.",
        note: "Pain and daily function are the patient-reported outcome dimension. Process is things like time-to-treatment.",
      },
    ],
    0,
  ),
  q(
    "l3-voucher",
    "L3",
    "Hong Kong",
    "An older patient skips private GP visits. Chronic problems worsen without anyone noticing. Money, not motivation, is the constraint the team writes down.",
    "Which response matches the lecture’s matrix?",
    [
      {
        text: "Treat the skips as simple non-compliance and stop asking about price.",
        note: "The Hong Kong lens says this may be a rational response to price, time, and biology, not a label of non-compliance.",
      },
      {
        text: "The variable is price. Help the patient use the Elderly Health Care Voucher so the effective price of a visit falls.",
        note: "Correct. That is the elderly row of the diagnostic matrix: skips GP visits, chronic disease unnoticed, strategy is voucher access.",
      },
      {
        text: "The variable is education only. A voucher cannot change investment in health capital.",
        note: "A lower effective price can expand gross investment. Education is a different lever, about how well inputs are used.",
      },
      {
        text: "Depreciation has stopped, so prevention would be wasted.",
        note: "The chronic-patient row is the opposite: depreciation is fast, so act before the stock leaks further.",
      },
    ],
    1,
  ),

  q(
    "l4-ms-chan",
    "L4",
    "Demand",
    "Ms Chan needs chronic-care follow-up. Her income falls and she postpones a private consultation. Her clinical need has not changed. The same week a hospital reports unfilled nursing posts.",
    "Which reading matches the lecture’s opening case?",
    [
      {
        text: "Her use fell because need fell. The vacancies are the same market, just seen from the other side.",
        note: "Need continued. The lecture separates the patient-service market from the nursing-labour market.",
      },
      {
        text: "Her demand for private care shifted because ability to pay changed. The vacancies are a different market.",
        note: "Correct. Willing and able is the definition. A lower income can cut use while need remains. Staffing is not the same relationship.",
      },
      {
        text: "This is a movement along her demand curve, caused by the hospital’s wage.",
        note: "Her own consultation price is not what changed in the story. Income is a shifter. The wage belongs to the labour market.",
      },
      {
        text: "Quantity demanded is unchanged whenever clinical need is unchanged.",
        note: "Demand requires willingness and ability. Need alone does not fix the quantity.",
      },
    ],
    1,
  ),
  q(
    "l4-definitions",
    "L4",
    "Demand and supply",
    "A tutor asks for the own-price demand curve of wound-care visits at a private clinic this quarter.",
    "What should be on the axis, in the lecture’s words?",
    [
      {
        text: "Quantities patients are willing and able to purchase at different prices of that service, in a stated period.",
        note: "Correct. Own-price means the price of the service being studied, not the price of a substitute.",
      },
      {
        text: "The number of people who have a wound, regardless of price or ability to pay.",
        note: "That is closer to need. Demand adds willing and able, at stated prices.",
      },
      {
        text: "Quantities the clinic wishes it could provide if staffing were unlimited.",
        note: "Supply is what providers are willing and able to offer, not an unlimited wish.",
      },
      {
        text: "One quantity, at today’s price only. A curve is not allowed.",
        note: "The curve is the set of quantities at different prices. One point is a quantity demanded.",
      },
    ],
    0,
  ),
  q(
    "l4-movement",
    "L4",
    "Shifts",
    "The private clinic raises the fee for a wound-care visit. Nothing else about patients’ incomes or the clinical picture changes. Fewer visits are booked.",
    "What happened?",
    [
      {
        text: "Demand shifted left.",
        note: "The relationship between price and quantity did not change. The price did. That is a movement along demand.",
      },
      {
        text: "Quantity demanded fell. This is a movement along the demand curve, not a new demand curve.",
        note: "Correct. Own-price changes quantity demanded. A shift needs a non-price determinant such as income, tastes, or the price of a related service.",
      },
      {
        text: "Supply shifted left, because patients bought less.",
        note: "The buyers’ response to price is on the demand side.",
      },
      {
        text: "Equilibrium cannot change if only the fee changes.",
        note: "A movement along demand, with a given supply curve, is exactly how a higher price can produce a new equilibrium quantity.",
      },
    ],
    1,
  ),
  q(
    "l4-shortage",
    "L4",
    "Equilibrium",
    "At the posted fee, patients want 80 clinic slots this week and the clinic can staff 50. The manager calls it a shortage and also calls it “equilibrium, because the fee has not changed”.",
    "What is the accurate description?",
    [
      {
        text: "It is a shortage: quantity demanded exceeds quantity supplied at that price. It is not an equilibrium.",
        note: "Correct. Equilibrium is where the two quantities match. A persistent gap at the going price is a shortage.",
      },
      {
        text: "It is a surplus, because the clinic is busy.",
        note: "A surplus is quantity supplied above quantity demanded.",
      },
      {
        text: "It is equilibrium, because every shortage is an equilibrium by definition.",
        note: "The lecture asks you to explain shortages as a departure from the quantity that clears.",
      },
      {
        text: "It is a shift of supply caused by patients wanting more.",
        note: "Wanting more at the same price is the demand side. The gap is the shortage.",
      },
    ],
    0,
  ),
  q(
    "l4-elasticity",
    "L4",
    "Elasticity",
    "Use the midpoint method. |E| = |(Q2 − Q1) / ((Q1 + Q2) / 2)| ÷ |(P2 − P1) / ((P1 + P2) / 2)|. The fee rises from HK$100 to HK$140 and visits fall from 90 to 60.",
    "What is |E|, and how do you describe demand?",
    [
      {
        text: "1.20, elastic. Quantity responds more than proportionally.",
        note: "Correct. |%ΔQ| = 30/75 = 0.40. |%ΔP| = 40/120 = 1/3. 0.40 ÷ (1/3) = 1.20. Above 1 is elastic.",
      },
      {
        text: "0.83, inelastic. Use the reciprocal of the midpoint ratio.",
        note: "That flips the formula. Elasticity is the quantity response divided by the price response.",
      },
      {
        text: "0.40, inelastic, because that is the percentage change in quantity.",
        note: "0.40 is only the quantity half. You still divide by the price change.",
      },
      {
        text: "Exactly 1, because (90 − 60) / 90 equals (140 − 100) / 100.",
        note: "That is a rough starting-point comparison, and it is not even equal (0.33 versus 0.40). The midpoint method is the one required here.",
      },
    ],
    0,
  ),
  q(
    "l4-inelastic",
    "L4",
    "Elasticity",
    "A service has a midpoint price elasticity of 0.3. The department raises the fee, hoping to cut congestion sharply.",
    "What should they expect, holding other things constant?",
    [
      {
        text: "A large fall in quantity, because any fee change wipes out demand.",
        note: "0.3 is inelastic. Quantity moves less than proportionally.",
      },
      {
        text: "A less-than-proportional fall in quantity. Access may worsen for some people without clearing much congestion.",
        note: "Correct. Inelastic demand is a weak quantity response. It is also why a fee can raise revenue while doing little to volume.",
      },
      {
        text: "No change in quantity demanded, because inelastic means the curve is horizontal.",
        note: "A horizontal demand curve is perfectly elastic. Inelastic curves are steep.",
      },
      {
        text: "A shift of the supply curve equal to 0.3.",
        note: "Elasticity here describes demand’s response to own-price. It is not a supply shift.",
      },
    ],
    1,
  ),
  q(
    "l4-gni",
    "L4",
    "GNI",
    "A briefing treats Hong Kong’s gross national income as “the value of goods produced inside the territory, full stop.” The lecture’s economic-conditions outcome is about GNI.",
    "What is missing?",
    [
      {
        text: "Nothing. GNI and domestic production are the same statistic by definition.",
        note: "GNI adds net primary income from abroad. Residents’ income from outside, and payments the other way, move GNI relative to domestic product.",
      },
      {
        text: "GNI includes net primary income with the rest of the world. It is not only output produced inside Hong Kong.",
        note: "Correct. That is why the census release cited for this lecture talks about GNI and external primary income flows.",
      },
      {
        text: "GNI excludes wages and only counts hospital budgets.",
        note: "GNI is a whole-economy income measure, not a health-budget line.",
      },
      {
        text: "GNI is the number of nurses per 1,000 population.",
        note: "That is a workforce density figure from another part of the course, not GNI.",
      },
    ],
    1,
  ),
  q(
    "l4-aggregate",
    "L4",
    "Economic conditions",
    "A downturn cuts aggregate demand. Private clinics notice emptier appointment books. Public wards do not suddenly have fewer sick people.",
    "Which link is the lecture asking you to make?",
    [
      {
        text: "Employment and household income can fall with aggregate demand, and private use of care can fall with them, even when clinical need does not.",
        note: "Correct. Need and effective demand part company when income and jobs move.",
      },
      {
        text: "Aggregate demand is the same curve as one patient’s demand for wound care.",
        note: "Aggregate demand is an economy-wide relationship. One clinic’s demand curve is a single market.",
      },
      {
        text: "A recession increases quantity demanded of every health service, because prices always fall.",
        note: "The Ms Chan pattern is the opposite for private care: less ability to pay, less use.",
      },
      {
        text: "Employment cannot affect health care, because illness is biological.",
        note: "Biology does not fix the ability to pay or the staffing the system can sustain.",
      },
    ],
    0,
  ),
  q(
    "l4-monopsony",
    "L4",
    "Monopsony",
    "Assume the lecture’s monopsony case: one dominant buyer of nursing labour, an upward-sloping supply of nurses, and hiring set where the marginal cost of labour meets the value of what the extra nurse produces. Compare that with a competitive labour market on the same diagram.",
    "What does the model predict?",
    [
      {
        text: "A higher wage and higher employment than competition, because a large employer can always pay more.",
        note: "The monopsony prediction under these assumptions runs the other way.",
      },
      {
        text: "The same wage as competition, but with chronic vacancies by assumption.",
        note: "Vacancies can appear in other stories. This model’s comparison is a lower wage read off the supply curve, and lower employment.",
      },
      {
        text: "A lower wage and lower employment than the competitive outcome.",
        note: "Correct. The marginal cost of hiring lies above the wage, so the buyer stops short of the competitive quantity and pays the lower supply-curve wage.",
      },
      {
        text: "A lower wage but higher employment, because cheaper labour is hired in larger numbers.",
        note: "That would mix the monopsony wage with a competitive quantity. The model cuts both.",
      },
    ],
    2,
  ),
  q(
    "l4-two-markets",
    "L4",
    "Markets",
    "A commentator says “the nursing shortage will vanish if we cut the fee patients pay, because demand will fall.”",
    "Why is that not one market?",
    [
      {
        text: "The patient fee is the own-price in the service market. Nurse employment is hired in the labour market. Cutting the fee does not automatically fill posts.",
        note: "Correct. The lecture’s rule is to name the market before you move a curve. A lower fee can even raise quantity demanded of visits and increase the derived demand for nurses.",
      },
      {
        text: "They are one market. Patient fees are nurse wages.",
        note: "The opening case says the two relationships are different.",
      },
      {
        text: "Cutting the fee shifts the supply of nurses to the right.",
        note: "The fee is not the wage. It does not, by itself, move labour supply.",
      },
      {
        text: "Demand and quantity demanded are the same word, so any fee change fills vacancies.",
        note: "The lecture asks you to keep those words apart, and to keep the markets apart.",
      },
    ],
    0,
  ),
  q(
    "l4-equilibrium",
    "L4",
    "Equilibrium",
    "A private-visit market is given as Qd = 100 − 2P and Qs = 20 + 2P. P is the fee. Use P* = (a − c) / (b + d), then check both quantities.",
    "What is the equilibrium?",
    [
      {
        text: "Fee HK$20, and 60 visits. Both quantity demanded and quantity supplied equal 60.",
        note: "Correct. a = 100, b = 2, c = 20, d = 2. P* = (100 − 20) / (2 + 2) = 20. Qd = 100 − 40 = 60. Qs = 20 + 40 = 60.",
      },
      {
        text: "Fee HK$80, because 100 − 20 is the price.",
        note: "80 is the numerator. It still has to be divided by (b + d), which is 4.",
      },
      {
        text: "Fee HK$20, and 100 visits, the demand intercept.",
        note: "100 is quantity demanded only if the fee is zero.",
      },
      {
        text: "Fee HK$40 and 20 visits.",
        note: "That mixes the supply intercept with a half-finished price.",
      },
    ],
    0,
  ),
  q(
    "l4-ceiling",
    "L4",
    "Price ceiling",
    "Use Qd = 500 − 2P and Qs = −100 + 3P. Without a ceiling the market clears at HK$120 and 260 visits. A legal maximum of HK$60 is imposed.",
    "What does the lecture’s arithmetic show?",
    [
      {
        text: "The ceiling binds. Quantity demanded is 380, quantity supplied is 80, and the shortage is 300 visits a month.",
        note: "Correct. At 60, Qd = 500 − 120 = 380 and Qs = −100 + 180 = 80. A ceiling below equilibrium is binding. Waiting or another rule may have to allocate the 80 slots.",
      },
      {
        text: "No effect. A ceiling below the equilibrium price is non-binding.",
        note: "The lecture says a ceiling at or above equilibrium is non-binding. HK$60 is below HK$120, so it binds.",
      },
      {
        text: "A surplus of 300, because providers want to sell more when the fee is held down.",
        note: "Quantity supplied falls, to 80. The gap is excess demand, not excess supply.",
      },
      {
        text: "A shortage of 180, the difference between 260 and 80.",
        note: "Compare quantity demanded and quantity supplied at the ceiling price, not the old equilibrium quantity with the new supply.",
      },
    ],
    0,
  ),
  q(
    "l4-clinic-fee",
    "L4",
    "Elasticity",
    "A clinic raises its fee from HK$400 to HK$500. Consultations fall from 80 a week to 52. Use the midpoint method the lecture works on this pair.",
    "What happens over this interval?",
    [
      {
        text: "Demand is elastic, about 1.91 in absolute value, and weekly revenue falls from HK$32,000 to HK$26,000.",
        note: "Correct. Average price 450, average quantity 66. The quantity change is about −42% and the price change about +22%. Revenue = price × quantity, and it is not the same thing as profit.",
      },
      {
        text: "Demand is inelastic, so revenue must rise when the fee rises.",
        note: "That revenue rule is for inelastic demand. This interval is elastic, and the takings fall.",
      },
      {
        text: "The absolute elasticity is about 0.52, using the starting fee as the only base.",
        note: "The lecture asks for the midpoint unless a question says otherwise. The two directions would not match if you used the starting value.",
      },
      {
        text: "Revenue is unchanged because the midpoint percentages cancel.",
        note: "The percentages are how you get the elasticity. Revenue is a separate multiplication: 400 × 80 versus 500 × 52.",
      },
    ],
    0,
  ),
  q(
    "l4-labour-e",
    "L4",
    "Labour supply",
    "In the lecture’s nursing example the monthly wage moves from HK$30,000 to HK$36,000 and the number of nurses willing to work moves from 60,000 to 63,000. Use midpoint changes.",
    "How responsive is this labour supply?",
    [
      {
        text: "About 0.27. Supply is inelastic: a 1% wage rise corresponds to roughly a 0.27% rise in labour supplied.",
        note: "Correct. 3,000 / 61,500 is about 4.88%. 6,000 / 33,000 is about 18.18%. 4.88 / 18.18 is about 0.268.",
      },
      {
        text: "About 3.7, elastic, because the wage change is larger than the headcount change in dollars.",
        note: "That inverts the ratio. Elasticity is the percentage change in labour divided by the percentage change in the wage.",
      },
      {
        text: "5%, which is also the unemployment rate in the worked example.",
        note: "The 5% example is 0.2 million unemployed out of a labour force of 4.0 million. It is a different calculation.",
      },
      {
        text: "Exactly 1, because both the wage and the headcount rose.",
        note: "Both rising does not make the percentages equal.",
      },
    ],
    0,
  ),
  q(
    "l4-gni-number",
    "L4",
    "GNI",
    "The lecture’s 2025 line, in HK$ billion at current market prices, is GNI = 3,331.8 + 334.4 = 3,666.2. Net primary income is inflow 2,245.4 minus outflow 1,911.0.",
    "Which reading is right?",
    [
      {
        text: "GNI is above the GDP figure in that sum because net primary income is positive, at 334.4 billion.",
        note: "Correct. GNI = GDP + primary income from abroad − primary income paid abroad. A negative net flow would have put GNI below GDP. Do not drop a whole clinic from GDP because the owner is not a resident.",
      },
      {
        text: "GNI is 3,331.8 and GDP is 3,666.2.",
        note: "That swaps the two. 3,666.2 is the GNI.",
      },
      {
        text: "Net primary income is 2,245.4, the inflow alone.",
        note: "The inflow still has the outflow taken off: 2,245.4 − 1,911.0 = 334.4.",
      },
      {
        text: "Family remittances are automatically inside primary income, so they explain the whole gap.",
        note: "The lecture says family remittances are not automatically primary income. Primary income is from work and from owning assets.",
      },
    ],
    0,
  ),
  q(
    "l4-monopsony-posts",
    "L4",
    "Monopsony",
    "A hospital that dominates local nursing jobs posts vacancies and says it would like more nurses at the current wage. It does not raise that wage. On the lecture’s diagram the marginal resource cost of another nurse lies above the supply curve, because raising one nurse’s wage means raising the others too.",
    "What can be true at the same time?",
    [
      {
        text: "The hospital can be in equilibrium, hiring where marginal resource cost meets marginal revenue product, and still report unfilled posts. It will not pay the higher wage that would bring those nurses in.",
        note: "Correct. The wage paid is read off the supply curve, below the competitive wage, and employment is lower. A reported shortage can sit next to that equilibrium. The lecture also notes this is hard to sustain if nurses can move to other employers.",
      },
      {
        text: "Unfilled posts prove the wage is above the competitive wage.",
        note: "The model’s wage is below the competitive wage, not above it.",
      },
      {
        text: "Marginal resource cost equals the new nurse’s wage only. Existing staff are irrelevant.",
        note: "The worked steps add the matching rise paid to nurses already hired. That is why marginal resource cost sits above supply.",
      },
      {
        text: "The hospital hires up to the point where supply crosses demand, then pays the demand-curve wage.",
        note: "That is the competitive point on the diagram. The monopsony stops earlier, where marginal resource cost meets the demand (marginal revenue product) curve.",
      },
    ],
    0,
  ),

  q(
    "l5-mp",
    "L5",
    "Marginal product",
    "The teaching clinic keeps rooms fixed and records comparable visits. At 3 nurse-hours it completes 18 visits. At 4 nurse-hours it completes 24.",
    "What is the marginal product of the fourth nurse-hour?",
    [
      {
        text: "6 additional visits from that extra hour.",
        note: "Correct. MP = (24 − 18) / (4 − 3) = 6. It describes the additional hour, not all four hours.",
      },
      {
        text: "6 visits per nurse-hour on average across the four hours.",
        note: "That is average product at 4 hours, which happens also to be 6. The question asks for the marginal hour.",
      },
      {
        text: "24 visits, the total product.",
        note: "Total product asks how much altogether. Marginal product asks what the last increment added.",
      },
      {
        text: "HK$10 per extra visit.",
        note: "That is the marginal cost of the same step, not the marginal product. MP is in visits, not dollars.",
      },
    ],
    0,
  ),
  q(
    "l5-diminish",
    "L5",
    "Diminishing MP",
    "Marginal product rises to 8 visits at the third nurse-hour, then falls to 6, 4, and 2. Total visits still go from 18 to 24, 28, and 30. Rooms stay fixed.",
    "Which sentence is the one the lecture wants?",
    [
      {
        text: "Total output must be falling, because marginal product is falling.",
        note: "Falling additional gains can sit alongside rising total output. The table shows that.",
      },
      {
        text: "Marginal product has turned negative, so another hour reduces visits.",
        note: "2 is still positive. Negative marginal product would mean total output falls.",
      },
      {
        text: "After the third hour, each extra hour adds fewer visits, while total visits still rise.",
        note: "Correct. Diminishing marginal productivity in this example starts after the third hour. The fixed rooms are the bottleneck in the story.",
      },
      {
        text: "Diminishing marginal productivity means the clinic should stop as soon as marginal product is no longer rising.",
        note: "A smaller but still useful gain can be worth buying. The cost side has to enter before you stop.",
      },
    ],
    2,
  ),
  q(
    "l5-ap",
    "L5",
    "Average product",
    "At 5 nurse-hours the clinic completes 28 visits. The fifth hour added 4 visits.",
    "Which pair is right, and what does it imply for the average?",
    [
      {
        text: "Average product is 5.6 and marginal product is 4, so the average is being pulled down.",
        note: "Correct. AP = 28 / 5 = 5.6. When marginal product is below average product, the average falls.",
      },
      {
        text: "Average product is 4 and marginal product is 5.6.",
        note: "That swaps the two. Average uses all the hours. Marginal uses the last step.",
      },
      {
        text: "Both are 28, because 28 visits were completed.",
        note: "28 is total product.",
      },
      {
        text: "Average product is 5.6 and marginal product is 4, so the average must be rising.",
        note: "The average falls when the marginal value is below it. It rises when the marginal value is above it.",
      },
    ],
    0,
  ),
  q(
    "l5-unequal",
    "L5",
    "Marginal product",
    "Nurse-hours jump from 4 to 6, and visits jump from 24 to 30. Someone divides 6 extra visits by 1 and calls the marginal product 6.",
    "What is the marginal product over this interval?",
    [
      {
        text: "3 visits per nurse-hour. The extra output has to be divided by the extra input of 2 hours.",
        note: "Correct. MP = 6 / 2 = 3 when the step is bigger than one hour.",
      },
      {
        text: "6 visits per nurse-hour, because output rose by 6.",
        note: "That forgets to divide by ΔL. The lecture flags this when the increment is not 1.",
      },
      {
        text: "30 visits per nurse-hour.",
        note: "30 is the new total product.",
      },
      {
        text: "5 visits per nurse-hour, the average product at 6 hours.",
        note: "AP at 6 hours is 30 / 6 = 5. That is not the marginal product of the interval.",
      },
    ],
    0,
  ),
  q(
    "l5-ac",
    "L5",
    "Average cost",
    "Fixed cost is HK$120 a session. Each nurse-hour costs HK$60. At 4 nurse-hours the clinic completes 24 visits.",
    "What is average cost per visit?",
    [
      {
        text: "HK$15.",
        note: "Correct. VC = 4 × 60 = 240. TC = 120 + 240 = 360. AC = 360 / 24 = 15. That is AFC 5 plus AVC 10.",
      },
      {
        text: "HK$10, the average variable cost.",
        note: "AVC = 240 / 24 = 10. Average cost also carries the fixed cost.",
      },
      {
        text: "HK$5, the average fixed cost.",
        note: "AFC = 120 / 24 = 5. It is only one part of average cost.",
      },
      {
        text: "HK$60, the wage.",
        note: "The wage is the price of an input, not the cost per visit.",
      },
    ],
    0,
  ),
  q(
    "l5-mc",
    "L5",
    "Marginal cost",
    "Between 18 and 24 visits, total cost rises from HK$300 to HK$360.",
    "What is marginal cost on that interval?",
    [
      {
        text: "HK$10 per additional visit.",
        note: "Correct. MC = (360 − 300) / (24 − 18) = 60 / 6 = 10. Marginal cost uses differences, not totals.",
      },
      {
        text: "HK$15, which is average cost at 24 visits.",
        note: "Average cost spreads the whole total. Marginal cost prices the extra visits only.",
      },
      {
        text: "HK$60 per visit, the wage of the extra hour.",
        note: "HK$60 is the extra cost of the hour. Six visits share it, so the cost per extra visit is 10.",
      },
      {
        text: "HK$6, because marginal product on this step is 6.",
        note: "6 is a productivity figure. With a HK$60 hour, MC = 60 / 6 = 10, not 6.",
      },
    ],
    0,
  ),
  q(
    "l5-link",
    "L5",
    "Marginal cost",
    "The wage stays HK$60. One extra hour adds 8 visits. A later extra hour adds only 2.",
    "What happens to marginal cost?",
    [
      {
        text: "It falls from HK$7.50 to HK$30.",
        note: "The direction is wrong. 60 / 8 = 7.50 and 60 / 2 = 30, so marginal cost rises.",
      },
      {
        text: "It rises from HK$7.50 to HK$30 per extra visit, because lower marginal product raises marginal cost when the wage is fixed.",
        note: "Correct. In this one-variable model, MC = wage / MP.",
      },
      {
        text: "It stays HK$60, because the wage did not change.",
        note: "The wage is per hour. Marginal cost is per extra visit, so productivity changes it.",
      },
      {
        text: "It becomes zero once diminishing returns start.",
        note: "Diminishing but still positive marginal product means a higher, not a zero, marginal cost.",
      },
    ],
    1,
  ),
  q(
    "l5-fixed",
    "L5",
    "Costs",
    "The room charge rises from HK$120 to HK$180. The wage per nurse-hour does not change.",
    "Which effects follow in this model?",
    [
      {
        text: "Total cost is HK$60 higher at every output. Marginal cost is unchanged.",
        note: "Correct. A fixed-cost change shifts total cost in parallel. Marginal cost comes from changes in variable cost.",
      },
      {
        text: "Marginal cost rises by HK$60 on every interval.",
        note: "That is the sort of effect a higher wage has, not a higher room charge.",
      },
      {
        text: "Variable cost rises by HK$60, and fixed cost does not.",
        note: "The room charge is the fixed cost in the example.",
      },
      {
        text: "Average cost falls, because the clinic is paying more.",
        note: "A higher fixed cost raises average cost. It does not lower it.",
      },
    ],
    0,
  ),
  q(
    "l5-tech",
    "L5",
    "Technical efficiency",
    "Team A uses 10 nurse-hours to complete 40 comparable visits. Team B uses 12 nurse-hours for the same 40 visits at the same quality. Both arrangements are feasible.",
    "What can you say?",
    [
      {
        text: "B is more efficient because it uses more nursing input.",
        note: "More input for the same output is avoidable use, not a virtue.",
      },
      {
        text: "A uses fewer inputs for the same output, so B is technically inefficient relative to A.",
        note: "Correct. Technical efficiency is about physical waste. Wages were not required for this comparison.",
      },
      {
        text: "This is an allocative comparison, and it cannot be made until equipment prices are known.",
        note: "Allocative efficiency chooses the least-cost mix given prices. Here the issue is wasted hours for the same output.",
      },
      {
        text: "Nothing, unless the patients are in intensive care.",
        note: "The lecture’s rule is comparable output and quality. These visits are stated as comparable.",
      },
    ],
    1,
  ),
  q(
    "l5-alloc",
    "L5",
    "Allocative efficiency",
    "Two ways of producing the same visits, both without wasted inputs: arrangement A costs HK$800 of staff and HK$200 of equipment. Arrangement B costs HK$600 of staff and HK$300 of equipment.",
    "Which is allocatively efficient at these prices?",
    [
      {
        text: "A, because technical efficiency is enough to settle the least-cost mix.",
        note: "The lecture’s point is that two technically efficient mixes can have different costs.",
      },
      {
        text: "B, because the total input bill is HK$900 rather than HK$1,000.",
        note: "Correct. Allocative efficiency in production picks the feasible mix with the lower cost at current input prices.",
      },
      {
        text: "They are equal, because both are technically efficient.",
        note: "Technical efficiency does not establish the least-cost mix.",
      },
      {
        text: "A, because it uses less equipment and equipment is always the scarce input.",
        note: "Scarcity of an input shows up in its price. Here the totals favour B.",
      },
    ],
    1,
  ),
  q(
    "l5-scope",
    "L5",
    "Scope",
    "A vaccination clinic would cost HK$40,000 alone. A wound clinic would cost HK$35,000 alone. Run together, at the same output and quality, they cost HK$65,000.",
    "What does the lecture call this?",
    [
      {
        text: "Economies of scope. Joint cost is HK$10,000 below the sum of separate costs.",
        note: "Correct. Scope is about the mix of different services sharing resources, not about a larger volume of one service.",
      },
      {
        text: "Economies of scale, because two clinics are more volume.",
        note: "Scale is more of a comparable service. These are different services.",
      },
      {
        text: "No saving, because HK$65,000 is more than either clinic on its own.",
        note: "The comparison is with the sum of the separate costs, HK$75,000.",
      },
      {
        text: "Diseconomies of scope, because coordination always dominates shared reception.",
        note: "Diseconomies of scope are possible, but this arithmetic shows a saving.",
      },
    ],
    0,
  ),
  q(
    "l5-scale",
    "L5",
    "Scale",
    "A scanner’s monthly cost is HK$60,000. At 100 scans the equipment cost is HK$600 each. At 300 scans it is HK$200 each. A planner concludes that any larger hospital is therefore more efficient, forever.",
    "What does the lecture add?",
    [
      {
        text: "Spreading this fixed cost is the whole of a long-run scale decision. Bigger is always cheaper.",
        note: "The slide says the fixed-cost example is only part of a long-run decision. Another machine or building changes the picture.",
      },
      {
        text: "Using the existing machine more fully spreads its cost. Long-run expansion can still hit diseconomies, and minimum efficient scale is not “as large as possible”.",
        note: "Correct. In the illustrative curve, minimum long-run average cost begins at 40 units and further volume need not lower unit cost.",
      },
      {
        text: "This is economies of scope, because scans and clinics are different products.",
        note: "More scans of the same kind are a scale story.",
      },
      {
        text: "Average cost must rise as soon as any fixed cost is spread.",
        note: "Spreading a fixed cost lowers that component of average cost. It can rise later for other reasons.",
      },
    ],
    1,
  ),
  q(
    "l5-short",
    "L5",
    "Short run",
    "A classmate says the clinic example is a short run because the session lasts one afternoon, and anything under a month is short-run by definition.",
    "What does the lecture say the short run actually is?",
    [
      {
        text: "A period in which at least one input is fixed. Here, nurse-hours change and the rooms do not. The calendar length is not the definition.",
        note: "Correct. A different decision can have different fixed inputs. Always say which input is held still.",
      },
      {
        text: "Any decision under 30 days.",
        note: "The slide says the distinction is about input flexibility, not a fixed number of months.",
      },
      {
        text: "The long run, because four nurse-hours is a small number.",
        note: "The size of the variable input does not decide short run versus long run.",
      },
      {
        text: "Neither, because both labour and capital appear in Q = f(L, K).",
        note: "The production function includes both. The short run is when one of them cannot be changed for this decision.",
      },
    ],
    0,
  ),
  q(
    "l5-ffs",
    "L5",
    "Payment",
    "A clinic is paid HK$200 per billable visit. Twenty visits bring HK$4,000. Twenty-five bring HK$5,000.",
    "Which incentive does the lecture attach to this unit of payment?",
    [
      {
        text: "More billable activity raises revenue. That can support access, and it can also encourage unnecessary volume. Profit still depends on the extra cost.",
        note: "Correct. Fee-for-service pays per service. The HK$1,000 is extra revenue, not automatic profit.",
      },
      {
        text: "Revenue is fixed for the month, so an extra visit is unpaid.",
        note: "That description fits capitation or a global budget, not a fee per visit.",
      },
      {
        text: "The incentive is to lengthen each inpatient stay.",
        note: "That is the per-diem concern.",
      },
      {
        text: "The incentive is to avoid enrolling people with greater needs.",
        note: "That risk is discussed under capitation, which pays per person, not per visit.",
      },
    ],
    0,
  ),
  q(
    "l5-capitation",
    "L5",
    "Payment",
    "A practice receives HK$300 a month for each of 100 enrolled people, to cover a defined set of services.",
    "What is true under that contract?",
    [
      {
        text: "Monthly revenue is HK$30,000, and extra visits do not by themselves increase it. The risk is under-provision or avoiding people with greater needs.",
        note: "Correct. Capitation pays per person for the defined cover. Risk adjustment is how need can re-enter the payment.",
      },
      {
        text: "Revenue rises by HK$300 for every extra visit.",
        note: "That would be a fee, not a per-person payment.",
      },
      {
        text: "The practice is paid per inpatient day.",
        note: "Per diem is a different unit.",
      },
      {
        text: "There is no incentive problem, because professional standards are mentioned in the lecture.",
        note: "Standards matter, and the lecture still names under-provision and selection as the risks to watch.",
      },
    ],
    0,
  ),
  q(
    "l5-drg",
    "L5",
    "Payment",
    "A purchaser pays a fixed sum for a classified admission. The ward can keep any difference if the stay is cheaper than the payment.",
    "Which pair of tendencies does the lecture highlight?",
    [
      {
        text: "Control of cost per case, with risks that include discharging too early and stretching the coding.",
        note: "Correct. Case payment and DRGs pay per classified case. The incentive is not “more days” and not “more separate fees”.",
      },
      {
        text: "Longer stays, because each extra day is paid.",
        note: "That is per diem.",
      },
      {
        text: "No financial interest in cost per case, because the payment is salaried.",
        note: "Salary is paid for time employed, not for the case.",
      },
      {
        text: "A global budget for the whole year, so one admission does not have its own price.",
        note: "A global budget is a period payment for a body of work, not a price per case.",
      },
    ],
    0,
  ),
  q(
    "l5-moral",
    "L5",
    "Hospitals",
    "After a subsidy, patients pay little at the desk and some attend for problems they would have watched at home. A comment in the notes calls this a character flaw.",
    "How does the lecture use the term moral hazard?",
    [
      {
        text: "As an economic response to a lower price at the point of use. Extra use can be beneficial or low-value. It is not a judgement of character.",
        note: "Correct. Insurance or subsidy lowers the price the user faces. The word is about incentives, not virtue.",
      },
      {
        text: "As proof the patient did not need care.",
        note: "The lecture says additional use can include beneficial care as well as low-value care.",
      },
      {
        text: "As a failure of the production function Q = f(L, K).",
        note: "That function describes output from inputs. Moral hazard describes the demand side when someone else pays.",
      },
      {
        text: "As a per-diem payment rule.",
        note: "Per diem is how the hospital is paid for days, not the patient’s response to a subsidy.",
      },
    ],
    0,
  ),
  q(
    "l5-queue",
    "L5",
    "Hospitals",
    "A specialist clinic has a long queue. Prices are not being used to clear it. A report says the queue itself is the full explanation of the problem.",
    "What does the lecture say a queue is?",
    [
      {
        text: "A form of rationing when price does not clear the market. It describes an access constraint. It is not the full cause.",
        note: "Correct. Urgency rules and referral rules also shape who gets through. Look for the capacity underneath the queue.",
      },
      {
        text: "Proof that demand is zero.",
        note: "A queue means more people are seeking care than can be seen now.",
      },
      {
        text: "Evidence that moral hazard cannot occur in public clinics.",
        note: "Subsidised prices are exactly where moral hazard is discussed.",
      },
      {
        text: "A surplus of specialist slots.",
        note: "A surplus would be unused slots, not a queue.",
      },
    ],
    0,
  ),
  q(
    "l5-bottleneck",
    "L5",
    "Hospitals",
    "The emergency department adds assessment nurses. The first wait shortens. Patients then stack up because there is nowhere to admit them.",
    "What should be asked before adding still more assessment staff?",
    [
      {
        text: "Which constraint is actually limiting completed care. Extra staff at the front may not raise the system’s output if beds are the bottleneck.",
        note: "Correct. Capacity is a combination of resources. One more input does little if another stays fixed and binding.",
      },
      {
        text: "Nothing. Assessment output is the hospital’s output.",
        note: "The lecture separates a faster first assessment from a completed pathway.",
      },
      {
        text: "Whether the queue proves staff prefer a shortage.",
        note: "A queue is an access constraint, not a motive.",
      },
      {
        text: "Whether average cost must fall whenever any staff are added.",
        note: "Adding a non-binding input can raise cost without raising completed output.",
      },
    ],
    0,
  ),
  q(
    "l5-informal",
    "L5",
    "Long-term care",
    "Mrs Chan can leave the acute ward. She needs help to move and to manage the day. Her daughter works full time. A home-care package is not available yet. The daughter says “if I do it, it is free”.",
    "What should an economic note record?",
    [
      {
        text: "Unpaid care uses time that had another use. It is not costless. Need, a subsidised place, and what the family can actually do are related but not the same thing.",
        note: "Correct. Informal care has an opportunity cost. The lecture also separates need from effective demand and from a place being available.",
      },
      {
        text: "The daughter’s time has no cost because no wage is paid.",
        note: "That is the mistake the slide corrects.",
      },
      {
        text: "VHIS hospital insurance can be assumed to fund the residential place.",
        note: "The lecture says not to assume hospital indemnity covers long-term care. Read the policy.",
      },
      {
        text: "A community-care voucher creates the nurses and the slots by itself.",
        note: "A voucher changes the funding route. Capacity and quality still have to exist.",
      },
    ],
    0,
  ),

  q(
    "l6-bureau",
    "L6",
    "Hong Kong system",
    "A policy paper, a public-hospital bed plan, a private-clinic inspection, and the brief for District Health Centres land on the same desk. Four organisations are mentioned.",
    "Who does the lecture assign to policy and the purse, as against running the public hospitals?",
    [
      {
        text: "The Hospital Authority writes policy and allocates the whole health budget. The Health Bureau runs the wards.",
        note: "That swaps the two. The Health Bureau holds policy and resource allocation. The Hospital Authority provides public hospital services through its clusters.",
      },
      {
        text: "The Health Bureau is responsible for policy and allocating resources. The Hospital Authority provides public hospital treatment and rehabilitation.",
        note: "Correct. The Department of Health executes public-health work and supervises private facilities. The Primary Healthcare Commission oversees primary-care strategy and the District Health Centres.",
      },
      {
        text: "The Department of Health allocates cluster budgets and employs all private doctors.",
        note: "The Department of Health is the government’s public-health agency, not the cluster budget holder.",
      },
      {
        text: "The Nursing Council allocates Hospital Authority beds.",
        note: "The Nursing Council registers and regulates nurses. It does not run the bed plan.",
      },
    ],
    1,
  ),
  q(
    "l6-mix",
    "L6",
    "Hong Kong system",
    "A family asks where most inpatient care sits, and where most ordinary outpatient care sits, in the picture drawn in this lecture.",
    "Which split is the one taught?",
    [
      {
        text: "The public sector is the main provider of inpatient and specialist care. The private sector is the main provider of primary and outpatient care.",
        note: "Correct. Funding differs too: tax subsidy on the public side, and out-of-pocket, employer, and private insurance money on the other.",
      },
      {
        text: "The private sector provides most inpatient care because it has more beds.",
        note: "The lecture’s split is the other way for inpatient and specialist care.",
      },
      {
        text: "Both sectors provide the same mix. Only the logo changes.",
        note: "The lecture treats the mix as a structural feature, and as part of the sustainability problem.",
      },
      {
        text: "Primary care is provided only by public hospitals.",
        note: "Primary and outpatient care are described as mainly private, with the Primary Healthcare Commission and District Health Centres as the public strategy.",
      },
    ],
    0,
  ),
  q(
    "l6-sid",
    "L6",
    "Agency",
    "More doctors enter a market. Instead of only competing on price, some recommend extra procedures that bring in fees the patient would not have asked for.",
    "Which names does the lecture use?",
    [
      {
        text: "Supplier-induced demand, as one form of the agency problem. Patients are the principals. Physicians are the agents, and they can shift demand outward.",
        note: "Correct. Imperfect information is why the patient delegates. Inducement is using that role to generate extra billed services.",
      },
      {
        text: "A standard demand shift from a rise in patient income.",
        note: "The trigger in the slide is an increase in the supply of physicians, followed by induced demand.",
      },
      {
        text: "Monopsony. The patient is the sole buyer of labour.",
        note: "Monopsony is a labour-market story about a dominant employer. This slide is about clinical advice and fees.",
      },
      {
        text: "Phase IV surveillance, because the extra procedures are a trial.",
        note: "Phase IV follows a drug after marketing. It is not the name of induced demand.",
      },
    ],
    0,
  ),
  q(
    "l6-phase",
    "L6",
    "Medicines",
    "A company wants to know whether a new drug works better than current care, in large groups, and to collect adverse effects before approval. A small first-in-human safety run has already been done.",
    "Which phase is the large comparative one?",
    [
      {
        text: "Phase I, in about 20 to 80 people, aimed at a safe dose range.",
        note: "That is the first human safety step, not the large comparison.",
      },
      {
        text: "Phase II, in several hundred people, to look at efficacy and safety.",
        note: "Phase II studies whether it works as intended, but it is not the large comparative trial described.",
      },
      {
        text: "Phase III, from several hundred to several thousand people, against a standard or usual care, while adverse effects are monitored.",
        note: "Correct. Phase IV is the one after marketing, in ordinary use.",
      },
      {
        text: "The preclinical animal study.",
        note: "Animals come before any of the human phases.",
      },
    ],
    2,
  ),
  q(
    "l6-attrition",
    "L6",
    "Medicines",
    "A briefing claims that once a compound is discovered, approval is the usual result, and that the whole path takes about two years.",
    "Which account matches the lecture’s R&D slide?",
    [
      {
        text: "About 250 of 5,000 compounds reach preclinical testing, about 5 enter human trials, and about 1 is approved. A typical path is about 12 to 15 years, with a mean around 13.5.",
        note: "Correct. The profit on a success is large precisely because most compounds never arrive. Discovery and preclinical testing alone are given a mean of 5 years.",
      },
      {
        text: "Five thousand compounds are approved for every one that enters a trial.",
        note: "That reverses the funnel.",
      },
      {
        text: "Phase III is the shortest human phase, at half a year.",
        note: "The mean lengths given are Phase I 1.5 years, Phase II 2 years, Phase III 3.5 years, and review 1.5 years.",
      },
      {
        text: "Spending on research has been negligible since 2000.",
        note: "The slide cites about US$1 trillion of industry R&D since 2000, and US$83 billion in 2019.",
      },
    ],
    0,
  ),
  q(
    "l6-models",
    "L6",
    "Workforce",
    "A planner must say how many nurses Hong Kong will need. One method starts from illness and the care that would meet it. Another starts from how many visits and admissions the system has been using.",
    "Which labels does the lecture use?",
    [
      {
        text: "The first is a need-based model. The second is a demand or utilisation-based model. Benchmarking and trend analysis are further methods, not synonyms for those two.",
        note: "Correct. Need-based work asks what the population’s illness would require. Utilisation-based work projects from how services have actually been used, which policy and technology can change.",
      },
      {
        text: "Both are trend analysis, because both mention the future.",
        note: "Trend analysis projects historical growth. It is listed separately.",
      },
      {
        text: "Utilisation-based models ignore policy and technology by definition.",
        note: "The lecture says they can be affected by practice patterns, technology, and policy.",
      },
      {
        text: "Need-based models only count the nurses who already hold a licence.",
        note: "Counting the current register is a stock. A need-based projection asks what future illness would require.",
      },
    ],
    0,
  ),
  q(
    "l6-shortfall",
    "L6",
    "Workforce",
    "A manager quotes a single nurse-shortfall figure for 2030 and treats every published number as the same count. This lecture’s Hospital Authority series, from the Legislative Council paper it cites, is in front of you.",
    "What does that series say, and what should you not do with it?",
    [
      {
        text: "The HA full-time-equivalent shortfall is 3,405 in 2020, 3,235 in 2025, then 3,679 in 2030, 4,337 in 2035 and 5,060 in 2040. Do not treat a different lecture’s 1,669 figure as the same series.",
        note: "Correct. Same word, “shortfall”, different source and different count. Quote the series you are actually using.",
      },
      {
        text: "The shortfall falls every year to 2040, so no retention policy is discussed.",
        note: "After 2025 the cited series rises. Retention, training places, and overseas registration are all on the measures slides.",
      },
      {
        text: "Doctor and nurse shortfalls in that paper are identical.",
        note: "The doctor series in the same lecture runs 660, 730, 800, 880, 960. It is a different profession and a smaller count.",
      },
      {
        text: "The only cause listed is examination failure.",
        note: "Causes named include working conditions, job satisfaction, promotion, family, migration intention, and the licensing route for overseas-trained nurses.",
      },
    ],
    0,
  ),
  q(
    "l6-cne",
    "L6",
    "Regulation",
    "A registered nurse and an enrolled nurse are checking what continuing education they must show for the current three-year cycle.",
    "Which requirement does the lecture state?",
    [
      {
        text: "45 points for the registered nurse and 30 for the enrolled nurse, over three years.",
        note: "Correct. The lecture ties continuing education to staying on the register, alongside the entry barriers of an accredited programme, the required practice, and the examination.",
      },
      {
        text: "30 points for the registered nurse and 45 for the enrolled nurse.",
        note: "That swaps the two figures.",
      },
      {
        text: "The same 15 points for both, counted over one year.",
        note: "The cycle given is three years, and the points differ by register.",
      },
      {
        text: "No continuing education applies once the licence is first issued.",
        note: "The slide says registered and enrolled nurses must meet the requirement for the cycle.",
      },
    ],
    0,
  ),
  q(
    "l1-same-need",
    "L1",
    "Equity",
    "Two patients have the same stage of disease and the same capacity to benefit from a community dressing clinic. One lives next to the clinic. The other cannot afford the bus fare and does not attend.",
    "Which distinction does the lecture want?",
    [
      {
        text: "This is equal care, because both were offered the same clinic.",
        note: "An identical offer is equality of the input. It ignores a barrier that stops one person with the same need from using it.",
      },
      {
        text: "Horizontal equity asks for a similar chance of care when need is similar. The fare is part of whether that chance is real.",
        note: "Correct. Horizontal equity is similar treatment for similar need. Access costs can break it even when the clinical offer looks the same.",
      },
      {
        text: "Vertical equity requires both patients to receive identical resources.",
        note: "Vertical equity is different care for different need. These two needs were described as the same.",
      },
      {
        text: "There is no economic issue, because the clinic’s budget did not change.",
        note: "The patient’s travel is a resource. A barrier to use is already an allocation problem.",
      },
    ],
    1,
  ),
  q(
    "l1-family-time",
    "L1",
    "Stakeholders",
    "A ward starts a dressing plan that uses no extra hospital stock. The daughter takes unpaid leave twice a week to do the home dressings.",
    "What has the hospital-only view missed?",
    [
      {
        text: "Nothing. If the hospital pays nothing more, the economic cost is zero.",
        note: "The daughter’s time has a next-best use. A hospital frame that ignores it understates the cost.",
      },
      {
        text: "The daughter’s time is a resource, and she is a stakeholder. Whose costs you count depends on the perspective.",
        note: "Correct. Stakeholders include families, not only the ward budget. Unpaid time is still an opportunity cost.",
      },
      {
        text: "The daughter’s leave is a clinical outcome, so it belongs in the numerator of an ICER.",
        note: "Lost work is a resource use, a cost, not a health outcome.",
      },
      {
        text: "Family time counts only when the daughter is a registered nurse.",
        note: "The opportunity cost does not depend on her registration. It depends on the alternative use of her time.",
      },
    ],
    1,
  ),
  q(
    "l1-home-feed",
    "L1",
    "Effectiveness",
    "A high-protein supplement raises intake in a tightly supervised trial ward. On the same patient’s discharge, the household shares one fridge and the supplement is finished by other people. She is readmitted, malnourished.",
    "Which reading fits the lecture?",
    [
      {
        text: "The trial result is efficacy. The home failure is about effectiveness: ordinary conditions, not the selected trial.",
        note: "Correct. Efficacy is what happens under ideal conditions. Effectiveness asks whether it works in ordinary life. The shared fridge is part of that.",
      },
      {
        text: "The trial has failed, so the supplement has no efficacy.",
        note: "The trial did what a trial can do. The later failure is a different question.",
      },
      {
        text: "Effectiveness and efficacy are the same word once a product is licensed.",
        note: "The lecture keeps them apart. A licence does not make ordinary use identical to the trial.",
      },
      {
        text: "The readmission shows scarcity has ended, because the product exists.",
        note: "A product on the shelf does not end scarcity. Household resources and supervision are still limited.",
      },
    ],
    0,
  ),
  q(
    "l2-se",
    "L2",
    "Statistics",
    "Two wards have the same spread of length of stay. One estimate of the mean uses 40 stays. The other uses 400. A colleague treats the standard deviation and the standard error as the same object.",
    "What should change, and what should not?",
    [
      {
        text: "The standard deviation must fall because the sample is larger.",
        note: "Standard deviation describes the spread of the stays. A larger sample does not, by itself, make patients more alike.",
      },
      {
        text: "The standard error of the mean should be smaller in the larger sample. The standard deviation is still the spread of the stays.",
        note: "Correct. Standard deviation is how far stays sit from the mean. Standard error is how precisely the mean is estimated. More stays tighten the standard error.",
      },
      {
        text: "Both numbers are the confidence interval.",
        note: "The interval is built from the estimate and its precision. It is not another name for the standard deviation.",
      },
      {
        text: "The larger sample proves the true mean is the sample mean.",
        note: "A larger sample estimates the mean more precisely. It does not turn the sample mean into a known constant.",
      },
    ],
    1,
  ),
  q(
    "l2-double",
    "L2",
    "Cost-benefit",
    "A cost-benefit analysis of an early-review clinic counts the money saved from avoided bed-days. It also counts, in full, a monetised QALY for each of those same avoided admissions.",
    "What has gone wrong?",
    [
      {
        text: "Nothing. Benefits should be counted in every unit that can be given a price.",
        note: "The same avoided admission would be doing two jobs. The lecture warns against that double count.",
      },
      {
        text: "The avoided admission can be saved bed-days or a monetised health gain from that episode, not both in full.",
        note: "Correct. Pick one full accounting of that consequence. Counting both inflates the benefit.",
      },
      {
        text: "QALYs are forbidden inside any cost-benefit analysis.",
        note: "Monetised health gain can be a benefit. The error is counting the same episode twice, not the unit itself.",
      },
      {
        text: "Bed-days are a health outcome, so they belong only in a QALY.",
        note: "A bed-day is a resource. A QALY is a health outcome. They are different, which is why adding both in full for one admission is the mistake.",
      },
    ],
    1,
  ),
  q(
    "l2-emr",
    "L2",
    "ROI",
    "The lecture’s simplified record system costs HK$1.0 million and is credited with HK$0.5 million of benefit a year for five years, with no recurrent cost in the toy case. Undiscounted benefits are HK$2.5 million.",
    "Which pair matches the slide, and what does a positive result not show?",
    [
      {
        text: "Undiscounted ROI is 150% and the benefit–cost ratio is 2.5. Discounting at 3.5% lowers both. A positive ROI still does not prove this was the best use of the budget.",
        note: "Correct. ROI = (2.5 − 1.0) / 1.0 = 150%. The ratio is 2.5 / 1.0 = 2.5. At 3.5% the slide’s present-value benefits are about HK$2.26 million, so ROI is about 126% and the ratio about 2.26.",
      },
      {
        text: "ROI is 250%, because 2.5 million divided by 1.0 million is the return.",
        note: "2.5 is the benefit–cost ratio, not a 250% ROI. ROI uses the net benefit, 1.5 million, over the outlay.",
      },
      {
        text: "Discounting raises the ROI, because future benefits are preferred.",
        note: "Discounting shrinks future benefits. On the slide the undiscounted 150% falls to about 126%.",
      },
      {
        text: "A positive ROI means marginal social benefit is below marginal social cost.",
        note: "Benefits above the costs that were counted point the other way, and only for those items. Equity and displaced uses are still open.",
      },
    ],
    0,
  ),
  q(
    "l2-nmb",
    "L2",
    "Net benefit",
    "Use the lecture’s ward case. Extra cost is 30,000. The threshold λ is 30,000 per QALY. The extra health gain is 1.5 QALYs. Net monetary benefit is λ × ΔE − ΔC.",
    "What do NHB and NMB say together?",
    [
      {
        text: "NHB is +0.5 QALY and NMB is 15,000. The signs agree, so both favour the intervention at this threshold.",
        note: "Correct. Health displaced is 30,000 / 30,000 = 1 QALY, so NHB = 1.5 − 1 = 0.5. NMB = 30,000 × 1.5 − 30,000 = 15,000. NHB = NMB / λ.",
      },
      {
        text: "NMB is 45,000, because you stop at λ × ΔE.",
        note: "45,000 is the monetary value of the health gain. The extra cost still has to be taken off.",
      },
      {
        text: "NHB is positive and NMB is negative, so the two rules conflict.",
        note: "They are built to share a sign. A conflict here is an arithmetic error, not a new decision rule.",
      },
      {
        text: "NMB is the ICER, which is 20,000.",
        note: "The ICER is ΔC / ΔE = 20,000 per QALY. That is a third object. It also sits under λ, which is the same adopt signal.",
      },
    ],
    0,
  ),
  q(
    "l3-weight",
    "L3",
    "Utility",
    "A student converts a utility of 0.8 straight into a disability weight of 0.2, because 1 − 0.8 = 0.2, and then builds a DALY from that weight.",
    "What does the lecture forbid?",
    [
      {
        text: "Nothing. Utility and disability weight are defined as complements.",
        note: "The lecture tells you not to set the disability weight equal to one minus the utility. They are built differently.",
      },
      {
        text: "Do not turn one minus a utility into a disability weight. A QALY and a DALY are not mirrors you can swap by subtraction.",
        note: "Correct. Keep the instruments apart. A utility of 0.8 is not, by that arithmetic, a disability weight of 0.2.",
      },
      {
        text: "Utilities cannot sit between 0 and 1.",
        note: "The anchors used in class are 0 for dead and 1 for full health, with some states below 0. The error is the conversion, not the 0.8.",
      },
      {
        text: "DALYs are preferred whenever a utility is available, because more DALYs is better.",
        note: "More DALYs is worse. And availability of a utility does not license the subtraction.",
      },
    ],
    1,
  ),
  q(
    "l3-half",
    "L3",
    "QALY",
    "After a stroke, a patient is expected to live two more years at a utility of 0.5, with no discounting in this exercise.",
    "How many QALYs is that?",
    [
      {
        text: "2 QALYs, because two years are two years.",
        note: "Years count only after they are weighted by utility. Unweighted years are not QALYs.",
      },
      {
        text: "0.5 QALY, because the utility is 0.5.",
        note: "0.5 would be one year at that utility. There are two years.",
      },
      {
        text: "1 QALY. Each year contributes 0.5, and 0.5 + 0.5 = 1.",
        note: "Correct. QALYs add utility-weighted time. Two years at 0.5, undiscounted, are one QALY.",
      },
      {
        text: "0.25 QALY, because the utility is squared for a two-year span.",
        note: "Nothing in the lecture squares the weight. You multiply each period’s length by its utility and add.",
      },
    ],
    2,
  ),
  q(
    "l3-negative",
    "L3",
    "ICER",
    "A new dressing costs less than usual care and, in the same study, heals more wounds. A classmate reports the ICER as a negative number and says a negative cost per wound is too odd to interpret, so the dressing should be rejected.",
    "What is the better reading?",
    [
      {
        text: "Reject it. A negative ICER means the new dressing is dominated.",
        note: "Dominated means more costly and less effective. This dressing is less costly and more effective.",
      },
      {
        text: "The dressing dominates usual care. Do not decide from the negative ratio alone. Say which option is better on both cost and effect.",
        note: "Correct. When one option wins on both axes, call the dominance. A negative ICER is easy to misread, which is why the lecture says not to interpret it by itself.",
      },
      {
        text: "Adopt it only if the negative ICER is below the NICE pound threshold.",
        note: "A threshold comparison is for a trade-off, more cost for more effect. There is no trade-off in this pair.",
      },
      {
        text: "Switch to cost-minimisation, because any negative number proves the outcomes are equivalent.",
        note: "The outcomes are not equivalent. More wounds healed is a difference. Minimisation would be the wrong tool.",
      },
    ],
    1,
  ),
  q(
    "l3-cca",
    "L3",
    "Consequences",
    "A community nursing team is compared with usual care. Cost moves from $2,000 to $2,400. Readmissions move from 18% to 11%. Carer burden moves from 48 to 39. Nobody has collapsed those three into one ratio.",
    "Which tool is this, and what must you not pretend?",
    [
      {
        text: "It is a cost-consequence analysis. The dashboard does not produce a single cost-per-outcome verdict.",
        note: "Correct. You read the consequences side by side. There is no one ICER hiding in the three numbers.",
      },
      {
        text: "It is cost-minimisation, because both arms are nursing care.",
        note: "Minimisation needs equivalent outcomes. Readmissions and carer burden both moved.",
      },
      {
        text: "The ICER is $400 / 7 percentage points, and that single number replaces the burden score.",
        note: "That would throw away a consequence the table was built to show. Cost-consequence analysis refuses that collapse.",
      },
      {
        text: "It is a cost-benefit analysis, because three outcomes were listed.",
        note: "Listing outcomes is not the same as monetising them. No benefit–cost ratio was calculated.",
      },
    ],
    0,
  ),
  q(
    "l4-surplus",
    "L4",
    "Equilibrium",
    "Use Qd = 500 − 2P and Qs = −100 + 3P. The market clears at HK$120. A clinic posts a fee of HK$150.",
    "What gap does the lecture’s arithmetic give?",
    [
      {
        text: "Quantity demanded is 200, quantity supplied is 350, and there is a surplus of 150 visits.",
        note: "Correct. At 150, Qd = 500 − 300 = 200 and Qs = −100 + 450 = 350. The unsold gap is excess supply.",
      },
      {
        text: "A shortage of 150, because a higher fee always raises demand.",
        note: "A higher own-price moves quantity demanded down, not up. The gap at HK$150 is excess supply.",
      },
      {
        text: "No gap. Any posted fee is an equilibrium.",
        note: "Equilibrium is where the two quantities are equal. At HK$150 they are not.",
      },
      {
        text: "Quantity demanded is 350 and quantity supplied is 200.",
        note: "That swaps the two sides. Demand is the downward relationship.",
      },
    ],
    0,
  ),
  q(
    "l4-both-shift",
    "L4",
    "Shifts",
    "An outbreak raises demand for a clinic’s visits, and at the same time more nurses are rostered, which shifts supply to the right as well. A manager says the fee must rise.",
    "What can you say without more information?",
    [
      {
        text: "The fee must rise and the number of visits must fall.",
        note: "Both curves moving right pushes quantity up. The fee can rise or fall. The manager has claimed the wrong certainty.",
      },
      {
        text: "Quantity rises. The fee might rise or fall, so a prediction that the fee must rise is not supported.",
        note: "Correct. Same-direction shifts make the quantity change clear and the price change indeterminate.",
      },
      {
        text: "The fee rises and the quantity is indeterminate.",
        note: "That is the pattern when the curves move in opposite directions.",
      },
      {
        text: "Neither curve has moved, because patients and nurses are in one market.",
        note: "The outbreak is a demand shift. Extra rostered capacity is a supply shift. They are two movements.",
      },
    ],
    1,
  ),
  q(
    "l4-point",
    "L4",
    "Elasticity",
    "A demand curve is Q = 500 − 2P. The lecture’s point formula on this line is the absolute elasticity 2P / Q. The current fee is HK$200.",
    "What is the elasticity at that point, and what must you not confuse it with?",
    [
      {
        text: "Quantity is 100 and the absolute elasticity is 4. The slope is 2, and the slope is not the elasticity.",
        note: "Correct. Q = 500 − 400 = 100. Then 2 × 200 / 100 = 4. A steep or flat slope does not, by itself, name the elasticity.",
      },
      {
        text: "The elasticity is 2, because the slope is 2.",
        note: "The slope is an input to the point formula here, not the elasticity.",
      },
      {
        text: "Quantity is 500 and the elasticity is 0.8.",
        note: "500 is quantity only at a zero fee. At HK$200 the quantity is 100.",
      },
      {
        text: "The elasticity is 1.91, the clinic midpoint from a different example.",
        note: "1.91 was the midpoint over HK$400 to HK$500. This question asks for the point formula at HK$200.",
      },
    ],
    0,
  ),
  q(
    "l4-fte",
    "L4",
    "Labour",
    "A ward counts two nurses, each employed at 0.5, and a colleague adds them as two full nurses when estimating vacancies. Another colleague reads the Nursing Council register as this morning’s roster.",
    "Which correction matches the lecture?",
    [
      {
        text: "The two posts are 1.0 full-time equivalent. A register, a headcount, and a full-time-equivalent strength are different counts.",
        note: "Correct. Two half-time nurses are one full-time equivalent. The register is not the roster, and neither is automatically the funded strength.",
      },
      {
        text: "Full-time equivalent adds the people, so the ward has 2.0.",
        note: "Full-time equivalent weights the time. Two halves are one, not two.",
      },
      {
        text: "The register is the full-time-equivalent strength by definition.",
        note: "Registration, heads on a shift, and contracted fractions answer different questions.",
      },
      {
        text: "A 0.5 nurse cannot be counted in supply at all.",
        note: "Part-time labour is supplied. It is counted as a fraction of a full-time equivalent, not as zero.",
      },
    ],
    0,
  ),
  q(
    "l5-fc-up",
    "L5",
    "Fixed cost",
    "The teaching clinic’s room charge rises from HK$120 to HK$180. The wage stays HK$60 an hour. Visits at each nurse-hour stay the same.",
    "What happens to total cost and to marginal cost?",
    [
      {
        text: "Total cost rises by HK$60 at every row, including zero visits. Marginal cost on each step is unchanged.",
        note: "Correct. Fixed cost enters total cost everywhere. Marginal cost is the extra cost of extra visits, and that extra still comes from the wage and the marginal product.",
      },
      {
        text: "Marginal cost rises by HK$60, because every cost rises.",
        note: "A fixed charge does not change the cost of one more visit. The wage and the marginal product do.",
      },
      {
        text: "Total cost is unchanged, because fixed cost is sunk and therefore ignored.",
        note: "The table still adds the fixed cost into total cost. Sunk, for a decision already made, is a different question from leaving it out of the account.",
      },
      {
        text: "Average cost falls, because a higher room charge spreads the wage.",
        note: "A higher fixed cost raises average cost. It does not spread the wage. The wage is the variable piece.",
      },
    ],
    0,
  ),
  q(
    "l5-diem",
    "L5",
    "Payment",
    "A hospital is paid a fixed sum for each inpatient day. A consultant notes that some stays have become longer, with no change in case severity.",
    "Which incentive is the lecture pointing at?",
    [
      {
        text: "Per diem. An extra eligible day can raise what the hospital receives, so the stay has a weaker reason to shorten.",
        note: "Correct. Name the unit first. The unit here is the day. The patient’s room charge is a separate number.",
      },
      {
        text: "Capitation. The hospital is paid once per person per year, so longer stays cut its income.",
        note: "Capitation does not rise with the day. This contract pays the day.",
      },
      {
        text: "Fee-for-service for the patient, because the patient pays the hotel fee.",
        note: "What the patient pays is the charge. What the hospital receives per day is the provider payment. The lecture keeps them apart.",
      },
      {
        text: "A global budget, which pays more whenever a stay runs long.",
        note: "A global budget is a sum for a period. It does not automatically grow with one more day.",
      },
    ],
    0,
  ),
  q(
    "l5-three-money",
    "L5",
    "Payment",
    "From 1 January 2026 the public attendance fee for an eligible person changes. A student writes one number in the notes and labels it production cost, patient charge, and Hospital Authority revenue.",
    "What should the three labels have been?",
    [
      {
        text: "Three different questions. Production cost is the resources used. The charge is what the patient pays. Provider payment is what the hospital receives, and from whom.",
        note: "Correct. A fee reform does not make those three amounts equal. The lecture asks you to keep the labels apart.",
      },
      {
        text: "One number is enough, because a public fee is set equal to average cost.",
        note: "The lecture’s point is that the charge, the cost, and the provider’s receipt can differ.",
      },
      {
        text: "Production cost is what the patient pays. The charge is what the nurse is paid.",
        note: "That scrambles the three questions. The nurse’s pay is a labour price, not the patient’s charge.",
      },
      {
        text: "Provider payment is always fee-for-service once a patient is charged anything.",
        note: "A patient charge does not tell you the contract with the provider. The unit of payment still has to be named.",
      },
    ],
    0,
  ),
  q(
    "l6-funnel",
    "L6",
    "Medicines",
    "A classmate says most compounds that enter discovery become licensed drugs within two years. The lecture’s research-and-development funnel is on the slide.",
    "Which account matches that slide?",
    [
      {
        text: "Of about 5,000 compounds, roughly 250 reach preclinical testing, about five enter human trials, and about one is approved. The mean path shown is 13.5 years, inside a 12-to-15-year range.",
        note: "Correct. The mean split is preclinical 5, phase I 1.5, phase II 2, phase III 3.5, and review 1.5. Two years is not the path on the slide.",
      },
      {
        text: "Five thousand compounds enter human trials, and half are approved.",
        note: "Human trials are the narrow end of the funnel, about five of those compounds, not the 5,000.",
      },
      {
        text: "The mean time is 1.5 years, which is the whole of research and development.",
        note: "1.5 years is the mean length given for phase I, and again for review. It is not the total.",
      },
      {
        text: "Approval is certain once preclinical testing starts.",
        note: "The slide’s point is the opposite: most compounds drop out, and about one of the original field is approved.",
      },
    ],
    0,
  ),
  q(
    "l6-split",
    "L6",
    "Workforce",
    "Someone plans private-sector recruitment as if most registered nurses in Hong Kong already worked outside the public sector. They are using the lecture’s 2022 structure slide.",
    "What does that slide say?",
    [
      {
        text: "Registered nurses were 50,650 and enrolled nurses 15,842, totalling 66,492. Registered nurses were about 83% public and 17% private.",
        note: "Correct. Enrolled nurses on the same slide were about 66% public and 34% private. A plan that assumes most registered nurses are already private has the shares the wrong way around.",
      },
      {
        text: "Most registered nurses work in the private sector, about 83%.",
        note: "83% is the public share for registered nurses, not the private share.",
      },
      {
        text: "The 66,492 figure is the Hospital Authority full-time-equivalent shortfall for 2030.",
        note: "66,492 is the 2022 register total. The Authority shortfall series is a different table, and 2030 on that series is 3,679.",
      },
      {
        text: "Enrolled nurses and registered nurses have the same public-private split.",
        note: "The slide separates them: 83/17 for registered nurses and 66/34 for enrolled nurses.",
      },
    ],
    0,
  ),
];

const seen = new Set<string>();
for (const item of QUESTIONS) {
  if (seen.has(item.id)) throw new Error(`Duplicate question id ${item.id}`);
  seen.add(item.id);
  if (item.choices.length !== 4 || item.answer < 0 || item.answer > 3) {
    throw new Error(`Bad choices for ${item.id}`);
  }
}

export const EXAM_DATE = new Date("2026-10-27T15:00:00+08:00");

export const CLINIC = [
  { L: 0, Q: 0 },
  { L: 1, Q: 4 },
  { L: 2, Q: 10 },
  { L: 3, Q: 18 },
  { L: 4, Q: 24 },
  { L: 5, Q: 28 },
  { L: 6, Q: 30 },
] as const;

export const CLINIC_FC = 120;
export const CLINIC_WAGE = 60;
