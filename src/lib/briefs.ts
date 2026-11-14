import type { LectureId } from "@/lib/questions";

export type BriefSection = { heading: string; points: string[] };

export type Brief = {
  purpose: string;
  sections: BriefSection[];
};

export const BRIEFS: Record<LectureId, Brief> = {
  L1: {
    purpose:
      "Health economics is a way of deciding when resources have more than one use. Nursing already makes those decisions. This lecture names them.",
    sections: [
      {
        heading: "Scarcity is not a temporary mistake",
        points: [
          "Scarcity means needs stay larger than resources. An extra HK$1 billion does not end it. It holds in tax-funded, insurance, and hybrid systems.",
          "A shortage can clear. A delayed drug batch is a shortage. Years of waiting for an elective joint replacement is the lecture’s picture of scarcity.",
          "Waiting is already rationing. Nobody has to be formally refused for an economic problem to exist.",
        ],
      },
      {
        heading: "Opportunity cost is one next-best use",
        points: [
          "The cost of a choice is the single best thing you give up, not the wage, and not the sum of every alternative.",
          "Thirty minutes of duplicated paperwork costs the nursing care that time does not then provide.",
          "One monitored bed given to unstable patient A is monitoring that patient B does not get. B’s need stays valid.",
        ],
      },
      {
        heading: "Effectiveness, efficiency, equity, value",
        points: [
          "Efficacy is what a tidy trial can show. Effectiveness is whether it works for ordinary patients in ordinary practice. Completing a task is not the same as effectiveness.",
          "A false economy is cheap and produces no benefit. An early discharge that causes a 28-day return is not efficient.",
          "Equality gives similar inputs. Equity responds to need. Horizontal equity is similar care for similar need. Vertical equity is different care for different need.",
          "Value, following Porter (2010), is outcomes that matter relative to the resources used. It is not “the cheapest”, not “the most effective” alone, not a saving, and not the hospital’s view only.",
          "Utilitarianism maximises total health. Egalitarianism holds access even when the extra benefit is small. Williams’s fair innings gives priority to people with less chance of a full life.",
        ],
      },
      {
        heading: "Healthcare is not an ordinary market",
        points: [
          "Arrow (1963), as used here: uncertainty, information asymmetry, third-party payment and moral hazard, and externalities. Competitive equilibrium is a poor description of medical care.",
          "A vaccine’s protection of other people is a positive externality. A private market that only counts the person in the chair tends to under-provide it.",
          "How a fact is framed (“90% survive” against “10% die”) and a default (opt-out vaccination) change choices. Incentives are not the whole story.",
          "Perspective decides the answer. Nurse-led discharge can look costly or cheap depending on whose time, whose readmissions, and whose horizon you count.",
        ],
      },
      {
        heading: "Hong Kong, and how to open a case",
        points: [
          "The lecture’s chart puts spending at about 5.7% of GDP, with high life expectancy. Good outcomes have not abolished scarcity. Care is dual: public, tax-funded, largely through the Hospital Authority; and private, paid out of pocket or by insurance.",
          "Ageing can tighten scarcity. The workforce slide is a growth in nurses of 74.4% from 1996 to 2020, and still a projected shortfall of 1,669 by 2030, with 8.2 nurses per 1,000 against a benchmark of 9. That 1,669 is not the Hospital Authority full-time-equivalent series in Lecture 6.",
          "For a nutrition case such as an older adult with diabetes and malnutrition, do not stop at “elderly, so fund it”. Name the resources, the single next-best use, whether it works in practice, and who else is affected.",
        ],
      },
    ],
  },
  L2: {
    purpose:
      "This lecture is how to read a number before you spend. Statistics first, then who gains and who pays, then whether the next unit is still worth it.",
    sections: [
      {
        heading: "Skewed costs, intervals, and p-values",
        points: [
          "Health-care costs are often right-skewed. Use the median for a typical stay. Use the mean when you care about the total, because total cost tracks the mean times the number of stays. A catastrophic bill is a real cost, not a distortion to delete.",
          "Standard deviation is the spread of patients. Standard error is the precision of the mean. A larger sample tightens the standard error.",
          "A 95% confidence interval is not a 95% probability that this particular interval contains the truth. Over many repetitions, about 95 of 100 such intervals capture the true value. If a confidence interval for an extra cost excludes zero, the data favour a difference. They do not say every patient costs more.",
          "A p-value above 0.05 does not prove there is no effect, especially in a small sample. It is not the probability that the null hypothesis is true.",
          "An observational regression coefficient is the association with a one-unit change after the variables that were included. It is not automatic causation. Correlation is not a mechanism.",
        ],
      },
      {
        heading: "Private, external, and the margin",
        points: [
          "Private benefit accrues to the parties in the decision. External benefit falls on others, as when classmates are protected by a vaccine they did not receive. Social benefit is private plus external. External benefits are added, not subtracted.",
          "Marginal social benefit (MSB) is marginal private benefit plus marginal external benefit. Net marginal social benefit is MSB minus marginal social cost.",
          "Expand while MSB exceeds marginal social cost. The efficient quantity is where they are equal. Stop when the next unit costs more than it returns, even if earlier units were excellent. Do not use the average of old units to defend a bad next one, and do not close the units that still pass.",
        ],
      },
      {
        heading: "Cost-benefit analysis",
        points: [
          "CBA puts relevant costs and benefits in money so they can be compared. State the perspective, set a horizon long enough for the consequences, and count full opportunity costs: volunteer time, an owned room’s next-best use, caregiver time, training, and later complications.",
          "“No invoice” is not “no cost”. Do not double-count. A prevented admission is either saved bed-days or the monetised health gain from that episode, not both in full.",
          "CBA is the method when effects can be monetised. Cost-effectiveness analysis uses one natural clinical unit. Cost-utility analysis uses QALYs. ROI is not a fourth method.",
        ],
      },
      {
        heading: "ROI, ICER, and net health benefit",
        points: [
          "ROI = [present value of benefits − present value of costs] / present value of costs. The benefit–cost ratio is benefits divided by costs. Do not call 2.5 a 2.5% return.",
          "The lecture’s simplified electronic-record case: HK$1.0 million outlay and HK$0.5 million a year for five years. Undiscounted, benefits are HK$2.5 million, ROI is 150%, and the benefit–cost ratio is 2.5. Discounted at 3.5%, present-value benefits are about HK$2.26 million, so ROI is about 126% and the ratio about 2.26. A positive ROI does not prove this was the fairest or the best use of the budget.",
          "ICER = extra cost / extra effect. Net health benefit in QALYs is NHB = ΔE − ΔC / λ. λ is what you treat as the health forgone elsewhere per extra dollar, not a maximum sticker price.",
          "The lecture’s ward case: extra cost 30,000, λ of 30,000 per QALY, gain 1.5 QALYs. Health displaced elsewhere is 1.0 QALY, so NHB is +0.5. The ICER is 20,000, under λ. If the gain were only 0.8, NHB would be −0.2 and the ICER 37,500, over λ. The identified patient can still gain while population health falls.",
          "Net monetary benefit is λ × ΔE − ΔC. It has the same adopt-or-reject sign as NHB. NICE’s band from April 2026, about £25,000–£35,000 per QALY, is a policy rule. It is not Hong Kong’s threshold.",
          "On the cost-effectiveness plane, south-east (less costly, more effective) dominates. North-west is dominated. North-east is the trade-off. A cloud of uncertainty that crosses the willingness-to-pay line means some plausible draws reverse the decision.",
        ],
      },
    ],
  },
  L3: {
    purpose:
      "Lecture 2 taught how to read a result. This lecture puts microeconomics and health capital next to a ward decision, then shows which evaluation tool matches the question.",
    sections: [
      {
        heading: "Individual choices under a constraint",
        points: [
          "Microeconomics here is how one decision-maker allocates scarce resources: a patient, a household, a ward, a formulary.",
          "Skipping a drug because of the out-of-pocket price, an ICU that cannot hire under a wage ceiling, and a formulary cap are all allocation problems. Name which constraint is binding.",
          "Price elasticity of demand is the percentage change in quantity demanded divided by the percentage change in price. Willingness to pay is the most someone will pay, not what they are charged.",
          "A count of procedures is an output. Quality of life is an outcome. More output is not automatically a better outcome.",
        ],
      },
      {
        heading: "Grossman’s health capital",
        points: [
          "Health is a durable stock, not a meal you buy today. The lecture’s account is H(t+1) = (1 − δ) H(t) + I(t): the stock depreciates, and investment adds to it.",
          "People demand health. Medical care is a derived demand, one input among time and health behaviour. Depreciation rises with age, so maintaining the stock takes more investment later.",
          "Education, in the model, raises both the productive efficiency and the allocative efficiency of health production.",
          "The model is simplified and deterministic. It does not capture cognitive, emotional, or social reality. Nursing’s job is to translate it, not to pretend the bedside is the equation.",
          "When an older patient skips general-practice visits because of price, the Elderly Health Care Voucher is the lecture’s example of acting on the price.",
        ],
      },
      {
        heading: "QALYs and DALYs",
        points: [
          "A QALY is time weighted by utility. Anchors used here: 0 is dead, 1 is full health, and some states sit below 0. One year at utility 0.5 is half a QALY. Two years at 0.5 is one QALY.",
          "The lecture’s undiscounted comparison: a new path of 0.6, then 0.8, then 0.8 is 2.2 QALYs. Usual care of 0.6 for three years is 1.8. The gain is 0.4. A hip moving from 0.35 to 0.82 gains 0.47.",
          "Do not set a disability weight equal to one minus a utility. They are built differently.",
          "A DALY adds years lived with disability to years of life lost. Five years at a disability weight of 0.2 is 1 YLD. Ten years of life lost makes 11 DALYs in that example. More DALYs is worse, not better.",
        ],
      },
      {
        heading: "Which tool, and the decision rule",
        points: [
          "Cost-minimisation analysis is only valid when outcomes have been shown to be equivalent. Paracetamol at $1 against the same drug at $2 can be a minimisation. A $10,000 “saving” with worse side effects cannot.",
          "Cost-effectiveness analysis uses a natural unit. The pressure-injury example: (500 − 200) / (3 − 1) = $150 per injury avoided.",
          "Cost-utility analysis uses QALYs. Cost-benefit analysis uses money: adopt when the benefit–cost ratio exceeds 1 or net benefit is positive. A ratio of 2.1 is $2.10 of benefit per $1.",
          "Cost-consequence analysis sets several outcomes side by side and does not force one ratio. The community-nursing example pairs $2,400 against $2,000 with readmissions moving from 18% to 11% and carer burden from 48 to 39.",
          "Reject a dominated option (worse and more costly). Adopt a dominant one (better and less costly). Do not interpret a negative ICER by itself. NICE’s published range, cited on the slides from April 2026, is £25,000–£35,000 per QALY. It is not a Hong Kong rule.",
        ],
      },
    ],
  },
  L4: {
    purpose:
      "Every sentence about “demand” has to name a market. The patient fee, the nursing wage, and the general price level are three different diagrams.",
    sections: [
      {
        heading: "Demand, supply, and two different questions",
        points: [
          "Demand is the quantities people are willing and able to buy at different prices in a stated period. Supply is the quantities providers are willing and able to offer. Own-price means the price of the thing being studied.",
          "Need is not effective demand. Ms Chan’s clinical need can continue while a fall in income shifts her demand for a normal private service to the left.",
          "A price change moves along a curve: that is a change in quantity demanded or supplied. Income, preferences, illness, and substitutes shift demand. Input costs, technology, and the number of providers shift supply.",
          "The lecture’s movement examples: a fee from HK$150 to HK$100 raises quantity demanded from 200 to 300. A fee from HK$100 to HK$150 raises quantity supplied from 200 to 350. The curve itself stays put.",
        ],
      },
      {
        heading: "Equilibrium, ceilings, and which curve moved",
        points: [
          "For Qd = a − bP and Qs = c + dP, P* = (a − c) / (b + d). On Qd = 100 − 2P and Qs = 20 + 2P, the fee is HK$20 and both quantities are 60.",
          "On Qd = 500 − 2P and Qs = −100 + 3P, the market clears at HK$120 and 260 visits. At HK$150 there is a surplus (quantity demanded 200, supplied 350). At HK$80 there is a shortage (340 against 140).",
          "A legal maximum of HK$60 on that second market binds, because it is below HK$120. Quantity demanded becomes 380, quantity supplied 80, and the shortage is 300. A ceiling at or above equilibrium does not bind. Compare the two quantities at the ceiling price, not the old equilibrium with the new supply.",
          "If demand and supply both shift the same way, the quantity change is clear and the price change is not. If they shift in opposite directions, the price change is clear and the quantity change is not.",
        ],
      },
      {
        heading: "Elasticity and revenue",
        points: [
          "Use the midpoint method for a change between two points, unless the question says otherwise. Percentage changes use the average of the start and the end.",
          "If the absolute elasticity is above 1, demand is elastic and a higher price lowers revenue. If it equals 1, revenue is unchanged. If it is below 1, a higher price raises revenue. Revenue is price times quantity. It is not profit.",
          "The clinic pair HK$400 to HK$500, and 80 visits to 52, has an absolute midpoint elasticity of about 1.91. Weekly revenue falls from HK$32,000 to HK$26,000.",
          "Slope is not elasticity. On Q = 500 − 2P the point formula used in the lecture is |PED| = 2P / Q. At a price of 200 and quantity 100, that magnitude is 4.",
          "The 2017 accident-and-emergency fee rise from HK$100 to HK$180 (Wu et al., 2023) did not significantly change emergency attendances. Urgent attendances fell about 5.9% and non-urgent about 8.9%. From 1 January 2026 the eligible-person attendance fee on the slide is HK$400, with Categories I and II exempt.",
        ],
      },
      {
        heading: "Income, jobs, and the nursing buyer",
        points: [
          "GDP counts final production inside the economy in a period. A foreign-owned clinic producing in Hong Kong is inside Hong Kong GDP. Do not drop the whole clinic because the owner is not a resident.",
          "GNI = GDP + primary income from abroad − primary income paid abroad. Primary income is from work and from owning assets. Family remittances are not automatically primary income. The 2025 line, HK$ billion at current market prices: 3,331.8 + 334.4 = 3,666.2. The 334.4 is inflow 2,245.4 minus outflow 1,911.0, so GNI sits above GDP.",
          "Aggregate demand is consumption plus investment plus government spending plus net exports. The lecture’s illustration: 1,800 + 450 + 400 = 2,650 of domestic demand, net exports +100, GDP 2,750. Those are teaching figures, not the 2025 GNI table.",
          "Unemployment is unemployed people divided by the labour force. The 5% example is 0.2 million unemployed out of a labour force of 4.0 million. Participation is the labour force divided by the population aged 15 and over. A register is not a headcount, and two half-time nurses are one full-time equivalent.",
          "Nursing supply in the worked pair is inelastic: wages HK$30,000 to HK$36,000, nurses 60,000 to 63,000, midpoint elasticity about 0.27.",
          "Under the lecture’s monopsony assumptions the hospital is a dominant buyer, supply of nurses slopes up, and a higher wage has to be paid to staff already hired. Marginal resource cost therefore sits above the supply curve. Hire where that marginal resource cost meets the marginal revenue product, and read the wage off the supply curve. Wage and employment are both lower than under competition. Unfilled posts can sit next to that equilibrium. The lecture also says this is hard to sustain if nurses can move.",
        ],
      },
    ],
  },
  L5: {
    purpose:
      "Inputs become visits only through a process, and a payment rule changes what the provider is paid to do. The numbers are the lecture’s hypotheticals, not a wage scale.",
    sections: [
      {
        heading: "Production",
        points: [
          "Q = f(L, K). Output is the most that given labour, capital, and technology can produce. Inputs, process, service output, and health outcome are different stages. More visits are not automatically better health.",
          "The short run is any period in which at least one input is fixed. It is not a calendar length. The long run is when rooms, equipment, and staffing can all change.",
          "For this session the room is fixed and nurse-hours vary. Say which input moves before you calculate.",
        ],
      },
      {
        heading: "The clinic table",
        points: [
          "Nurse-hours and completed visits: (0, 0), (1, 4), (2, 10), (3, 18), (4, 24), (5, 28), (6, 30). Visits are treated as comparable.",
          "Total product is the whole output. Marginal product is the extra visits from the extra hour: at the fourth hour, (24 − 18) / (4 − 3) = 6. Average product is total visits divided by hours: at 5 hours, 28 / 5 = 5.6. When marginal product is below the average, the average falls.",
          "Marginal product rises through the third hour (8 visits) and then falls to 6, 4, and 2. Total visits still rise. Diminishing marginal product is not negative marginal product.",
          "Fixed cost is HK$120. Each nurse-hour costs HK$60. Total cost is fixed plus variable. At 4 hours, variable cost is HK$240 and total cost is HK$360. Average cost is 360 / 24 = HK$15. Marginal cost is the wage divided by marginal product: 60 / 6 = HK$10. The same step is (360 − 300) / (24 − 18).",
          "A higher fixed cost raises total cost everywhere and leaves marginal cost unchanged. A higher wage raises marginal cost. If marginal product is 8, marginal cost is HK$7.50. If it is 2, marginal cost is HK$30.",
        ],
      },
      {
        heading: "Scale, scope, and efficiency",
        points: [
          "Technical efficiency is the same output with fewer inputs, quality held comparable. A team that completes 40 visits in 10 hours beats one that needs 12.",
          "Allocative efficiency asks which mix of inputs is cheaper for that output. Staff HK$800 plus equipment HK$200 is HK$1,000. Staff HK$600 plus equipment HK$300 is HK$900. Same output, the second mix costs less.",
          "Economies of scope: vaccination at HK$40,000 and wound care at HK$35,000 cost HK$75,000 apart, and HK$65,000 together. The joint saving is HK$10,000.",
          "Economies of scale spread a fixed cost and can change the technique. A scanner at HK$60,000 is HK$600 a scan at 100 scans and HK$200 at 300. Spreading the fixed cost is only part of long-run scale. On the lecture’s illustrative curve, minimum efficient scale begins at 40 units. Bigger is not automatically more efficient.",
          "Donabedian: structure (staff, equipment, facilities), process (the care given), outcome (recovery, function, harm). A cost comparison without a quality comparison is unfinished. A more severe case-mix can raise cost without meaning inefficiency.",
          "An economic cost includes the next-best use. An owned room with no new bill can still have an opportunity cost.",
        ],
      },
      {
        heading: "How the provider is paid",
        points: [
          "Three different money questions: what the service uses (production cost), what the patient pays (the charge), and what the provider receives (payment). The Hospital Authority public-fee reform from 1 January 2026 does not make those three numbers equal.",
          "Name the unit first. Salary pays for time. Fee-for-service pays per item: 20 visits at HK$200 is HK$4,000, and 25 is HK$5,000, which pulls toward volume. Capitation pays per person: 100 people at HK$300 is HK$30,000, which can pull toward under-provision or avoiding people with greater need. Per diem pays the day and can lengthen stays. Case or DRG payment can push discharge earlier, or bend the code. A global budget watches the total and can show the pressure as access. Pay for performance only changes behaviour if the indicator changes the payment. Mixed payment is allowed.",
          "Moral hazard here is an incentive term, not a judgement of character. A queue appears when price does not clear the market. The queue is not the full cause. Adding assessment staff in an emergency department does not raise completed output if beds are the bottleneck.",
        ],
      },
      {
        heading: "Long-term care",
        points: [
          "Mrs Chan is ready to leave acute care, needs help with daily activities, her daughter works full time, and a home package is not available. That is a hypothetical for the economics, not a discharge plan.",
          "Need, effective demand, and a staffed place are three different facts. The Social Welfare Department assesses and matches. NGOs and private homes also provide residential care. A waiting list can sit where eligible demand exceeds places.",
          "The community-care voucher changes the funding route. It does not by itself create capacity or quality. VHIS is indemnity hospital insurance. Do not assume it covers residential long-term care.",
          "Informal care has an opportunity cost even with no wage. Families often cannot see quality before they choose, and some residents cannot report it. That information gap is a problem to manage. It is not proof of misconduct.",
        ],
      },
    ],
  },
  L6: {
    purpose:
      "Lecture 6, Jo Jo Kwan, 20 October 2026, is the health-care sector: who runs the system, who works in it, and how a medicine gets to market. It is not on the 27 October paper.",
    sections: [
      {
        heading: "Who does what in Hong Kong",
        points: [
          "The Health Bureau sets policy and allocates resources. The Department of Health advises, executes public-health work, and supervises private facilities. The Hospital Authority provides public hospital treatment and rehabilitation through clusters. The Primary Healthcare Commission oversees primary care and the District Health Centres.",
          "The public sector is the main provider of inpatient and specialist care. The private sector is the main provider of primary and outpatient care. Public funding is tax, and it is the safety net. Private funding is out of pocket, employers, and insurance, and it buys speed and choice with an affordability problem for some people.",
          "The profile slide used in class: population 7.54 million, about 21.8% aged over 65, life expectancy 82.5 for men and 87.9 for women, infant mortality 1.6 per 1,000, 16,180 doctors, 68,752 nurses, 43 public hospitals, and 30,636 Hospital Authority beds. A separate cluster map uses its own hospital count. Use the figure on the slide you are asked about.",
        ],
      },
      {
        heading: "The nursing and medical workforce",
        points: [
          "The 2022 Nursing Council count: 50,650 registered nurses (46,935 general, 3,704 psychiatric) and 15,842 enrolled nurses, totalling 66,492. Public against private: registered nurses 83% and 17%, enrolled nurses 66% and 34%. Registered nurses are 15% male.",
          "Continuing nursing education on the slide is 45 points for a registered nurse and 30 for an enrolled nurse, over a three-year cycle. Entry still runs through an accredited programme, the required practice, and the examination.",
          "Hospital Authority full-time-equivalent strength by cluster, as at 31 December 2025, sums to 96,771, including HAHO. The slide prints that total with a thousands separator. Full-time attrition over the rolling year to December 2025 is about 8.2%.",
        ],
      },
      {
        heading: "Shortage: use the series you were given",
        points: [
          "Manpower models named in the lecture: need-based, utilisation-based, benchmarking, and trend analysis. They answer different questions.",
          "The Legislative Council 2021 Hospital Authority doctor full-time-equivalent shortfall runs 660, 730, 800, 880, 960 for 2020, 2025, 2030, 2035, and 2040. The nurse series on the same source is 3,405, 3,235, 3,679, 4,337, and 5,060. Do not replace those with Lecture 1’s projected shortfall of 1,669.",
          "WHO factors cited for shortage include maldistribution, migration, training, supervision, dual practice, skill mix, and productivity. Lam (2023), for nursing, adds working conditions, satisfaction, promotion, family, migration intention, and the overseas licensing examination.",
        ],
      },
      {
        heading: "Agency and supplier-induced demand",
        points: [
          "The patient is the principal. The physician is the agent, hired because the patient is less informed about the diagnosis, the prognosis, the options, the effects, and the cost.",
          "Supplier-induced demand is the agent shifting demand outward, billing for extra services that raise the physician’s income. More physicians can, in that model, move demand as well as supply. It is a risk created by the information gap, not a description of every consultation.",
        ],
      },
      {
        heading: "Medicines",
        points: [
          "Spending rises with chronic disease, ageing, new high-cost products, and guidelines that widen who is treated.",
          "Of about 5,000 compounds, roughly 250 reach preclinical testing, about 5 enter human trials, and about 1 is approved. The mean path in the lecture is 13.5 years: preclinical 5, phase I 1.5, phase II 2, phase III 3.5, and review 1.5. The range given for the whole path is 12 to 15 years.",
          "Phase I, about 20 to 80 people, is first-in-human safety and dose. Phase II, several hundred, looks at efficacy and safety. Phase III, hundreds to thousands, compares the product with standard care and collects harms. Phase IV is after marketing: effectiveness and harms in ordinary use, and sometimes a new indication.",
          "The PhRMA figure used in class is about US$1 trillion on research and development since 2000, and US$83 billion in 2019. Patent loss changes the return. That is an industry fact in the lecture, not a reason to prefer one drug at the bedside.",
        ],
      },
    ],
  },
};
