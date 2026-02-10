/**
 * Centralized FAQ data for all calculators.
 * Shared between page.tsx (rendering) and layout.tsx (JSON-LD schema).
 */

export interface FAQItem {
    question: string;
    answer: string;
}

export const sipFAQs: FAQItem[] = [
    {
        question: "What is the ideal SIP amount I should invest?",
        answer: "Financial experts recommend investing 15-20% of your monthly take-home salary through SIP. However, the right amount depends on your financial goals, existing obligations, and risk tolerance. Start with an amount you can invest consistently without straining your budget, and increase it gradually as your income grows."
    },
    {
        question: "Are SIP returns guaranteed?",
        answer: "No, SIP returns are not guaranteed as they depend on market performance. Mutual funds invest in market-linked instruments like stocks and bonds, which fluctuate in value. However, historical data shows that equity mutual funds have delivered average returns of 10-15% CAGR over 10+ year periods, though past performance doesn't guarantee future results."
    },
    {
        question: "Can I withdraw my SIP investment anytime?",
        answer: "Yes, most open-ended mutual fund SIPs allow you to redeem your units anytime. However, some schemes like ELSS have a mandatory 3-year lock-in period. Also, consider exit loads (typically 1% if redeemed within one year) and tax implications before withdrawing."
    },
    {
        question: "What is the difference between SIP and lump sum investment?",
        answer: "In SIP, you invest a fixed amount regularly over time, benefiting from rupee cost averaging. In lump sum, you invest a large amount at once, which works better when markets are at relatively low levels. SIP is generally recommended for salaried individuals, while lump sum suits those with surplus funds like bonuses or inheritance."
    },
    {
        question: "How long should I continue my SIP?",
        answer: "The longer you invest, the better your returns due to compounding. For wealth creation goals, a minimum of 5-7 years is recommended for equity SIPs. For retirement planning, continue SIPs for 15-25 years to build a substantial corpus that can generate passive income."
    }
];

export const stepUpSipFAQs: FAQItem[] = [
    {
        question: "What is the ideal step-up percentage?",
        answer: "A step-up of 10% annually is considered ideal as it roughly matches the average salary increment in most industries. However, you should base this on your actual expected income growth. If you're early in your career with rapid growth potential, 15% might work. Conservative savers might prefer 5-7%."
    },
    {
        question: "Can I change the step-up percentage mid-way?",
        answer: "Yes, most fund houses allow you to modify your step-up percentage or even switch to a regular SIP anytime. This flexibility lets you adjust based on actual life circumstances like promotions, job changes, or family responsibilities."
    },
    {
        question: "Is step-up SIP better than lump sum top-ups?",
        answer: "Both approaches have merit. Step-up SIP is automated and ensures consistent increase, while lump sum top-ups (like investing your annual bonus) can be more flexible. Many investors use a combination – maintain a step-up SIP and add lump sums when available."
    },
    {
        question: "What if I can't afford the increased amount in some year?",
        answer: "You can usually pause or reduce your SIP amount if needed. The step-up is a commitment, not a legal obligation. However, try to maintain consistency for optimal results. If reducing, aim to return to your step-up schedule as soon as finances allow."
    }
];

export const lumpsumFAQs: FAQItem[] = [
    {
        question: "Is lumpsum investment risky?",
        answer: "Lumpsum investment carries higher short-term volatility risk since your entire amount is exposed to market movements from day one. However, if you have a long investment horizon (7+ years for equity), this risk diminishes significantly. Historical data shows equity investments rarely deliver negative returns over 7+ year periods."
    },
    {
        question: "What returns can I expect from lumpsum investment?",
        answer: "Returns depend on the asset class chosen. Historically, equity mutual funds have delivered 10-15% CAGR over long periods, while debt funds offer 6-8%. These are averages – actual returns vary based on market conditions and fund selection. Past performance doesn't guarantee future results."
    },
    {
        question: "Should I wait for market correction to invest lumpsum?",
        answer: "Timing the market is notoriously difficult, even for professionals. Studies show that investors who stay invested consistently outperform those who try to time entry points. If you're concerned about timing, consider investing 50% immediately and the rest through a Systematic Transfer Plan (STP) over 3-6 months."
    },
    {
        question: "What is the minimum amount for lumpsum investment?",
        answer: "Most mutual funds accept lumpsum investments with relatively low minimum amounts. However, the ideal amount depends on your financial goals and how much of your total portfolio this represents. Ensure you maintain adequate emergency funds before making any lumpsum investment."
    }
];

export const swpFAQs: FAQItem[] = [
    {
        question: "What is a safe SWP withdrawal rate?",
        answer: "The commonly cited '4% rule' suggests you can withdraw 4% of your corpus annually (adjusted for inflation) with a high probability of your money lasting 30 years. For conservative planning or early retirement, consider 3-3.5%. In stable markets with good returns, you might sustain 5-6%."
    },
    {
        question: "Can my SWP corpus grow while I'm withdrawing?",
        answer: "Yes, if your returns exceed your withdrawal rate. For example, if your fund returns 10% annually and you withdraw 6%, your corpus grows by approximately 4% per year. This is the ideal scenario and why many retirees prefer equity-oriented funds for SWP despite short-term volatility."
    },
    {
        question: "Is SWP better than Fixed Deposit interest?",
        answer: "For tax-efficient income and inflation protection, SWP from equity funds often outperforms FD interest for those in higher tax brackets with long time horizons. However, FDs offer capital protection and guaranteed returns. Many retirees use both – FDs for stability and SWP from equity for growth."
    },
    {
        question: "What happens in a market crash during SWP?",
        answer: "During market downturns, you sell more units to meet your fixed withdrawal amount, which can deplete your corpus faster. This is called 'sequence of returns risk.' Mitigation strategies include keeping 2-3 years expenses in stable funds, reducing withdrawals temporarily, or using a bucket approach with different asset allocations."
    }
];

export const fdFAQs: FAQItem[] = [
    {
        question: "Is FD interest taxable?",
        answer: "Yes, FD interest is typically taxable as 'Income from Other Sources' and added to your total income. Tax treatment varies by country – banks may deduct withholding tax if interest exceeds certain thresholds. Check your local tax regulations for applicable exemptions."
    },
    {
        question: "What happens if I break my FD early?",
        answer: "Premature withdrawal typically incurs a penalty of 0.5-1% reduction in interest rate. You'll receive interest at the rate applicable for the period you actually held the FD, minus the penalty. Some banks don't charge penalties for partial withdrawal if you maintain minimum balance."
    },
    {
        question: "How does FD compare to stocks or mutual funds?",
        answer: "FDs are significantly safer as they offer guaranteed returns with deposit insurance in most countries. However, FD returns often barely beat inflation after taxes. Mutual funds carry market risk but offer higher potential returns. Most advisors recommend a mix of both based on your risk tolerance and goals."
    },
    {
        question: "Does compounding frequency matter for FD?",
        answer: "Monthly compounding yields slightly higher returns than quarterly. The difference is typically around 1% over a 5-year period. Choose what your bank offers; while more frequent compounding is marginally better, the difference is modest for most deposits."
    }
];

export const rdFAQs: FAQItem[] = [
    {
        question: "What happens if I miss an RD installment?",
        answer: "Missing an installment usually attracts a penalty of 1-2% of the installment amount. Most banks provide a grace period (typically 5-10 days) to make late payments. Repeated defaults may lead to premature closure of the account with applicable penalties."
    },
    {
        question: "Can I increase my RD amount during the tenure?",
        answer: "No, the monthly installment amount is fixed at the time of opening and cannot be changed during the tenure. If you want to save more, you would need to open a new RD account with the higher amount or consider a flexible deposit product if your bank offers one."
    },
    {
        question: "Is RD interest taxable?",
        answer: "Yes, RD interest is typically taxable as 'Income from Other Sources' and added to your annual income. Tax treatment varies by country – check your local tax regulations for thresholds and exemptions applicable to deposit interest income."
    },
    {
        question: "Which bank offers the highest RD rate?",
        answer: "Small finance banks like AU Small Finance, Equitas, and Unity Small Finance typically offer 0.5-1% higher rates than PSU and major private banks. However, rates change frequently. Always compare current rates across banks before opening. Consider the bank's credibility and ensure your deposit is within the DICGC insurance limit."
    }
];

export const emiFAQs: FAQItem[] = [
    {
        question: "What is the ideal EMI to salary ratio?",
        answer: "Financial experts recommend keeping all your EMIs (including the new loan) within 40-50% of your monthly net salary. Banks typically use FOIR (Fixed Obligations to Income Ratio) of 50-60% for determining loan eligibility. If you have other financial goals, aim for a lower ratio of 30-35%."
    },
    {
        question: "Can I change my EMI during the loan tenure?",
        answer: "Yes, you have several options: (1) Request tenure modification, which changes EMI while keeping rate same (2) Make partial prepayments to reduce outstanding and thus EMI or tenure (3) Some banks offer step-up EMI loans where EMI increases over time. Contact your lender for available options."
    },
    {
        question: "Is longer or shorter tenure better?",
        answer: "It depends on your financial situation. Shorter tenure means higher EMI but much lower total interest. For example, at 8.5% interest: a 10-year tenure costs roughly 50% of the principal as interest vs over 100% for 20 years. Choose the shortest tenure you can comfortably afford."
    },
    {
        question: "What happens if I miss an EMI payment?",
        answer: "Missing EMI attracts penalty charges (typically 1-2% of EMI amount) and negatively impacts your credit score (can drop 50-100 points). Multiple defaults can lead to the loan being classified as NPA, legal notices, and in extreme cases, auction of collateral. Always maintain 3-6 months EMI as emergency fund."
    }
];
