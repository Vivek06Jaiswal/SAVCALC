'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import CalculatorCard, { SliderField } from '@/components/CalculatorCard';
import ResultCard from '@/components/ResultCard';
import FAQAccordion from '@/components/FAQAccordion';
import { TopAd, HorizontalAd, InArticleAd, StickyBottomAd } from '@/components/AdSlot';
import { calculateRD } from '@/lib/formulas';
import { useCurrency } from '@/context/CurrencyContext';
import { rdFAQs } from '@/lib/faq-data';
import { generateSoftwareAppSchema, generateFAQSchema } from '@/lib/structured-data';

const DonutChart = dynamic(() => import('@/components/ResultCard').then(mod => mod.DonutChart), {
    ssr: false,
    loading: () => <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto rounded-full bg-slate-100 dark:bg-slate-700 animate-pulse" />,
});

export default function RDCalculator() {
    const { currencySymbol } = useCurrency();
    const [monthlyDeposit, setMonthlyDeposit] = useState(5000);
    const [interestRate, setInterestRate] = useState(7);
    const [timePeriod, setTimePeriod] = useState(5);

    const result = useMemo(() => {
        return calculateRD(monthlyDeposit, interestRate, timePeriod);
    }, [monthlyDeposit, interestRate, timePeriod]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            {/* Centered content wrapper */}
            <div className="w-full flex flex-col items-center">
                <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">

                    <div className="text-center mb-8 md:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">
                            Free {currencySymbol} RD Calculator {new Date().getFullYear()}
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Calculate Recurring Deposit maturity amount and interest earned.
                            Plan your monthly savings with guaranteed returns from bank RD schemes.
                        </p>
                    </div>

                    <TopAd className="mb-8" />

                    <div className="calculator-container mb-10 md:mb-16">
                        <CalculatorCard title="RD Calculator" description="Enter your deposit details">
                            <div className="space-y-6">
                                <SliderField
                                    label="Monthly Deposit"
                                    id="monthly-deposit"
                                    value={monthlyDeposit}
                                    onChange={setMonthlyDeposit}
                                    min={500}
                                    max={100000}
                                    step={500}
                                    formatValue={(v) => `${currencySymbol}${v.toLocaleString()}`}
                                    aria-label="Monthly Deposit Amount"
                                />

                                <SliderField
                                    label="Interest Rate (p.a.)"
                                    id="interest-rate"
                                    value={interestRate}
                                    onChange={setInterestRate}
                                    min={1}
                                    max={12}
                                    step={0.1}
                                    suffix="%"
                                    aria-label="Annual Interest Rate"
                                />

                                <SliderField
                                    label="Tenure"
                                    id="time-period"
                                    value={timePeriod}
                                    onChange={setTimePeriod}
                                    min={1}
                                    max={10}
                                    step={1}
                                    suffix=" years"
                                    aria-label="Deposit Tenure in Years"
                                />
                            </div>
                        </CalculatorCard>

                        <div className="space-y-6">
                            <ResultCard
                                title="RD Returns"
                                results={[
                                    { label: 'Maturity Value', value: result.maturityValue, type: 'primary' },
                                    { label: 'Total Deposited', value: result.totalDeposit, type: 'secondary' },
                                    { label: 'Interest Earned', value: result.interestEarned, type: 'highlight' },
                                ]}
                            />

                            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 md:p-6 border border-slate-200 dark:border-slate-700">
                                <DonutChart invested={result.totalDeposit} returns={result.interestEarned} />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mb-12">
                        <HorizontalAd />
                    </div>

                    <article className="seo-content">
                        <h2>What is a Recurring Deposit (RD) Calculator?</h2>
                        <p>
                            A Recurring Deposit Calculator helps you estimate the maturity value when you invest a
                            fixed amount every month in a bank RD account. Unlike Fixed Deposits where you invest a
                            lump sum at once, Recurring Deposits allow you to build savings gradually through regular
                            monthly contributions, making them ideal for salaried individuals who want to save a
                            portion of their income with guaranteed returns.
                        </p>
                        <p>
                            RD combines the discipline of regular saving with the security of fixed interest rates,
                            making it a popular choice for short to medium-term financial goals like vacation funds,
                            emergency savings, or accumulating down payments. The RD calculator shows you exactly how
                            much your monthly savings will grow into over your chosen tenure. For better long-term returns, compare RD with our <Link href="/sip" className="text-emerald-600 hover:text-emerald-700 font-medium">SIP Calculator</Link>.
                        </p>

                        <InArticleAd />

                        <h2>How is RD Interest Calculated?</h2>
                        <p>
                            RD interest calculation is more complex than FD because each monthly deposit earns interest
                            for a different duration. The first deposit earns interest for the entire tenure, while
                            the last deposit earns interest only for the final quarter. Banks typically compound
                            interest quarterly using this process:
                        </p>
                        <ul>
                            <li>Each monthly installment is treated as a separate mini-FD</li>
                            <li>Interest is compounded quarterly (most common) or monthly</li>
                            <li>The first installment earns interest for n months, second for (n-1) months, and so on</li>
                            <li>All these amounts are summed to get the maturity value</li>
                        </ul>
                        <p>
                            The effective yield on RD is slightly lower than FD at the same rate because your money
                            is invested gradually rather than from day one. However, this is offset by the flexibility
                            of not needing a large lump sum upfront.
                        </p>

                        <h2>Benefits of Recurring Deposit</h2>
                        <p>
                            RD offers several advantages that make it an excellent savings tool:
                        </p>
                        <ol>
                            <li>
                                <strong>Disciplined Savings:</strong> Automatic monthly deduction builds a consistent
                                saving habit without requiring willpower each month. Most banks offer auto-debit
                                facility linked to your savings account.
                            </li>
                            <li>
                                <strong>Guaranteed Returns:</strong> Unlike market-linked investments, RD offers
                                fixed, guaranteed interest rates. You know exactly what you&#39;ll receive at maturity,
                                allowing for precise financial planning.
                            </li>
                            <li>
                                <strong>Low Entry Barrier:</strong> Start with as little as {currencySymbol}100 per
                                month at many banks, making it accessible to everyone regardless of income level.
                            </li>
                            <li>
                                <strong>Loan Facility:</strong> Banks offer loans up to 90% of your RD value at
                                competitive interest rates, providing liquidity without breaking the deposit.
                            </li>
                            <li>
                                <strong>Flexible Tenure:</strong> Choose tenures from 6 months to 10 years based on
                                your savings goal timeline.
                            </li>
                            <li>
                                <strong>Multiple RDs Allowed:</strong> You can open multiple RD accounts for different
                                goals – one for vacation, another for emergency fund, etc.
                            </li>
                        </ol>

                        <h2>RD vs SIP: Which is Better?</h2>
                        <p>
                            Both RD and SIP involve regular monthly investments, but they serve different purposes:
                        </p>
                        <ul>
                            <li>
                                <strong>Recurring Deposit:</strong>
                                <ul>
                                    <li>Guaranteed returns (6-8% typically)</li>
                                    <li>Zero risk – bank deposits are insured</li>
                                    <li>Fixed tenure with penalties for early closure</li>
                                    <li>Interest is fully taxable</li>
                                    <li>Best for: Short-term goals (1-3 years), conservative investors</li>
                                </ul>
                            </li>
                            <li>
                                <strong>SIP (Mutual Funds):</strong>
                                <ul>
                                    <li>Market-linked returns (historically 10-15% for equity)</li>
                                    <li>Higher risk due to market volatility</li>
                                    <li>Highly flexible – modify or stop anytime</li>
                                    <li>LTCG tax benefits for equity funds</li>
                                    <li>Best for: Long-term goals (5+ years), growth-oriented investors</li>
                                </ul>
                            </li>
                        </ul>
                        <p>
                            Many advisors recommend using RD for short-term goals where capital protection is essential,
                            and SIP for long-term wealth creation where you can ride out market volatility.
                        </p>

                        <h2>Tips for Maximizing RD Returns</h2>
                        <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-600 dark:text-slate-300">
                            <li><strong>Compare Rates:</strong> Small finance banks often offer 0.5-1% higher rates than large banks</li>
                            <li><strong>Choose Longer Tenure:</strong> Higher tenure often means better interest rates</li>
                            <li><strong>Senior Citizen Accounts:</strong> If eligible, get the additional 0.25-0.50% interest</li>
                            <li><strong>Start Early in Month:</strong> Beginning RD early maximizes days of interest earned</li>
                            <li><strong>Avoid Premature Withdrawal:</strong> Breaking RD incurs penalties; plan your liquidity</li>
                        </ul>

                        <FAQAccordion items={rdFAQs} />
                    </article>
                </div>
            </div>

            {/* Sticky Bottom Ad for Mobile */}
            <StickyBottomAd />

            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateSoftwareAppSchema(
                        "RD Calculator",
                        "Calculate your Recurring Deposit maturity amount.",
                        "https://savcalc.com/rd",
                        "https://savcalc.com/images/rd-calculator.jpg"
                    ))
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(rdFAQs))
                }}
            />
        </div>
    );
}
