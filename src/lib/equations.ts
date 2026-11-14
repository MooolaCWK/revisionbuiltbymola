import type { LectureId } from "@/lib/questions";

export type Equation = { expr: string; use: string };

export const EQUATION_NOTE: Partial<Record<LectureId, string>> = {
  L1: "Lecture 1 has no formula to rearrange. Opportunity cost is the single next-best use you give up, not a wage and not the sum of every alternative.",
  L6: "Lecture 6 has no formula to rearrange. Keep three counts apart: the 2022 register (66,492 nurses), the Hospital Authority full-time-equivalent shortfall (3,679 nurses in 2030 on that series), and the trial phases.",
};

export const EQUATIONS: Record<LectureId, Equation[]> = {
  L1: [],
  L6: [],
  L2: [
    {
      expr: "Budget total ≈ mean × number of stays",
      use: "Turns a mean cost into a budget. Use the median, not this, when you want a typical stay. Do not drop the expensive tail.",
    },
    {
      expr: "SE = SD / √n",
      use: "How precisely the mean is estimated. SD is the spread of the patients. A bigger sample shrinks the standard error, not the spread.",
    },
    {
      expr: "95% CI for a mean ≈ mean ± 1.96 × SE",
      use: "A range from a repeated-sampling procedure. It is not a 95% probability that this one interval contains the truth. If the interval for a difference excludes zero, the data favour a difference.",
    },
    {
      expr: "MSB = marginal private benefit + marginal external benefit",
      use: "The benefit of one more unit to society, including people who were not in the chair. External benefit is added, not subtracted.",
    },
    {
      expr: "Net marginal social benefit = MSB − MSC",
      use: "Whether the next unit is worth doing. Expand while it is positive. Stop when the next unit turns negative, even if earlier units were excellent.",
    },
    {
      expr: "ICER = ΔC / ΔE",
      use: "Extra cost for each extra unit of effect. Use the increments, not the new programme’s total cost over the new total effect.",
    },
    {
      expr: "NHB = ΔE − ΔC / λ",
      use: "Health gained minus the health displaced elsewhere when that money is spent. Positive means the extra effect is worth the extra cost at this threshold λ. λ is a benchmark per QALY, not a maximum sticker price.",
    },
    {
      expr: "NMB = λ × ΔE − ΔC",
      use: "The same adopt-or-reject verdict as net health benefit, written in money. NHB = NMB / λ.",
    },
    {
      expr: "ROI = (present value of benefits − present value of costs) / present value of costs",
      use: "Net return per dollar spent, after you have stated the perspective and the horizon. A positive ROI does not prove this was the best or the fairest use.",
    },
    {
      expr: "Benefit–cost ratio = present value of benefits / present value of costs",
      use: "Benefit per dollar of cost. A ratio of 2.5 is not a 250% ROI. ROI uses the net benefit in the numerator.",
    },
  ],
  L3: [
    {
      expr: "H(t+1) = (1 − δt) × Ht + It",
      use: "Next year’s health stock, as written on slide 61. δt is depreciation that year, so age wears the stock down. It is investment this year. People demand health. Visits and medicines are inputs into that stock, a derived demand.",
    },
    {
      expr: "QALY = Σ (years × utility)",
      use: "Length of life weighted by how good that time is. In this lecture, 0 is dead and 1 is full health. Some states sit below 0. Two years at utility 0.5, with no discounting, are 1 QALY.",
    },
    {
      expr: "YLD = years × disability weight.   DALY = YLL + YLD",
      use: "Burden of disease. Years of life lost plus years lived with disability. A larger DALY is worse. Do not set the disability weight equal to 1 minus a utility.",
    },
    {
      expr: "ICER = (C₂ − C₁) / (E₂ − E₁)",
      use: "Extra cost per extra outcome. Natural units make it a cost-effectiveness analysis. QALYs make it a cost-utility analysis. Do not read a negative ICER on its own: if the new option is cheaper and better, it dominates.",
    },
  ],
  L4: [
    {
      expr: "Qd = a − bP    and    Qs = c + dP",
      use: "Quantity demanded and quantity supplied at a fee P, other things equal. A price change moves along the curve. Income, illness, or the number of providers shifts the whole curve.",
    },
    {
      expr: "P* = (a − c) / (b + d)",
      use: "The fee at which quantity demanded equals quantity supplied. Put P* back into either equation and check that both give the same Q*.",
    },
    {
      expr: "Shortage = Qd − Qs    at the posted fee",
      use: "How many wanted visits have no slot, when the fee is held below equilibrium. A surplus is Qs − Qd. Compare the two quantities at that fee, not the old equilibrium with the new supply.",
    },
    {
      expr: "Midpoint change = (new − old) / average of the two.   Elasticity = %ΔQ / %ΔP",
      use: "Responsiveness between two points. The lecture asks for the midpoint unless it says otherwise. Absolute elasticity above 1 is elastic: raising the price lowers revenue. Revenue is price times quantity, not profit.",
    },
    {
      expr: "On Q = 500 − 2P only:   point |PED| = 2P / Q",
      use: "Elasticity at one point on that straight line. At P = 200, Q = 100, so the magnitude is 4. The slope, 2, is not the elasticity.",
    },
    {
      expr: "GNI = GDP + primary income from abroad − primary income paid abroad",
      use: "Income of residents, wherever it was earned. GDP is production inside the territory. A clinic producing in Hong Kong is in Hong Kong GDP even if the owner lives elsewhere.",
    },
    {
      expr: "GDP = C + I + G + (X − M)",
      use: "Final spending on what the economy produced. This is a different diagram from a clinic fee and from a nursing wage.",
    },
    {
      expr: "Unemployment rate = unemployed / (employed + unemployed) × 100",
      use: "The share of the labour force without work. The bottom is the labour force, not the whole adult population. Participation is the labour force divided by the population aged 15 and over.",
    },
    {
      expr: "Hire where marginal resource cost = marginal revenue product",
      use: "The monopsony stop-rule. Because a higher wage is also paid to nurses already hired, marginal resource cost sits above the supply curve. The wage you pay is read off the supply curve, below the competitive wage.",
    },
  ],
  L5: [
    {
      expr: "Q = f(L, K)",
      use: "The most service output available from labour and capital, given the technology. It is not a promise about health outcomes. More visits are not automatically better health.",
    },
    {
      expr: "Marginal product = ΔQ / ΔL",
      use: "Visits added by the extra nurse-hour. At the fourth hour the table goes from 18 to 24, so marginal product is 6. It is not the average of all four hours.",
    },
    {
      expr: "Average product = Q / L",
      use: "Visits per hour so far. When marginal product drops below the average, the average falls. At 5 hours and 28 visits, average product is 5.6 and the fifth hour’s marginal product is 4.",
    },
    {
      expr: "Total cost = fixed cost + variable cost.   Variable cost = wage × hours",
      use: "The full cost of a session. In the teaching clinic the room is HK$120 and each nurse-hour is HK$60. At 4 hours, variable cost is HK$240 and total cost is HK$360.",
    },
    {
      expr: "Average cost = total cost / Q",
      use: "Cost per completed visit. At 24 visits and HK$360, average cost is HK$15.",
    },
    {
      expr: "Marginal cost = Δ total cost / ΔQ = wage / marginal product",
      use: "The extra cost of one more visit. Wage HK$60 and marginal product 6 gives HK$10. A higher room charge raises total cost and leaves marginal cost unchanged. A higher wage raises it.",
    },
  ],
};
