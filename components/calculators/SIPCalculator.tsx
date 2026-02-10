'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import CalculatorCard, { SliderField } from '@/components/CalculatorCard';
import ResultCard from '@/components/ResultCard';
import FAQAccordion from '@/components/FAQAccordion';
import { TopAd, HorizontalAd, InArticleAd, StickyBottomAd } from '@/components/AdSlot';
import { calculateSIP } from '@/lib/formulas';
import { useCurrency } from '@/context/CurrencyContext';
import { sipFAQs } from '@/lib/faq-data';
import { generateSoftwareAppSchema, generateFAQSchema } from '@/lib/structured-data';

const DonutChart = dynamic(() => import('@/components/ResultCard').then(mod => mod.DonutChart), {
    ssr: false,
    loading: () => <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto rounded-full bg-slate-100 dark:bg-slate-700 animate-pulse" />,
});

export default function SIPCalculator() {
    const { currencySymbol } = useCurrency();
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);

    const result = useMemo(() => {
        return calculateSIP(monthlyInvestment, expectedReturn, timePeriod);
    }, [monthlyInvestment, expectedReturn, timePeriod]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            {/* Centered content wrapper */}
            <div className="w-full flex flex-col items-center">
                <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">

                    {/* Page Header */}
                    <div className="text-center mb-8 md:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">
                            Free {currencySymbol} SIP Calculator {new Date().getFullYear()}
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Calculate the future value of your Systematic Investment Plan with our accurate,
                            easy-to-use SIP calculator. Plan your wealth creation journey today.
                        </p>
                    </div>

                    {/* Top Ad - Responsive (Leaderboard on desktop, Banner on mobile) */}
                    <TopAd className="mb-8" />

                    {/* Calculator Section */}
                    <div className="calculator-container mb-10 md:mb-16">
                        <CalculatorCard
                            title="SIP Calculator"
                            description="Enter your investment details"
                        >
                            <div className="space-y-6">
                                <SliderField
                                    label="Monthly Investment"
                                    id="monthly-investment"
                                    value={monthlyInvestment}
                                    onChange={setMonthlyInvestment}
                                    min={500}
                                    max={100000}
                                    step={500}
                                    formatValue={(v) => `${currencySymbol}${v.toLocaleString()}`}
                                    aria-label="Monthly Investment Amount"
                                />

                                <SliderField
                                    label="Expected Return (p.a.)"
                                    id="expected-return"
                                    value={expectedReturn}
                                    onChange={setExpectedReturn}
                                    min={1}
                                    max={30}
                                    step={0.5}
                                    suffix="%"
                                    aria-label="Expected Return Rate"
                                />

                                <SliderField
                                    label="Time Period"
                                    id="time-period"
                                    value={timePeriod}
                                    onChange={setTimePeriod}
                                    min={1}
                                    max={40}
                                    step={1}
                                    suffix=" years"
                                    aria-label="Investment Duration in Years"
                                />
                            </div>
                        </CalculatorCard>

                        <div className="space-y-6">
                            <ResultCard
                                title="Your SIP Returns"
                                results={[
                                    { label: 'Total Value', value: result.totalValue, type: 'primary' },
                                    { label: 'Invested Amount', value: result.totalInvestment, type: 'secondary' },
                                    { label: 'Est. Returns', value: result.estimatedReturns, type: 'highlight' },
                                ]}
                            />

                            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 md:p-6 border border-slate-200 dark:border-slate-700">
                                <DonutChart
                                    invested={result.totalInvestment}
                                    returns={result.estimatedReturns}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Square Ad - After Results */}
                    <div className="flex justify-center mb-12">
                        <HorizontalAd />
                    </div>

                    {/* SEO Content - 600+ words */}
                    <article className="seo-content">
                        <h2>What is a SIP Calculator?</h2>
                        <p>
                            A SIP (Systematic Investment Plan) Calculator is a powerful financial tool that helps
                            you estimate the potential returns on your regular mutual fund investments. When you
                            invest through SIP, you commit to investing a fixed amount at regular intervals,
                            typically monthly, into a mutual fund scheme of your choice. This calculator uses
                            the power of compound interest to project how your investments grow over time.
                        </p>
                        <p>
                            Unlike lump sum investments where you invest a large amount at once, SIP allows you
                            to spread your investments over time. This approach is particularly beneficial for
                            salaried individuals who can allocate a portion of their monthly income towards
                            building long-term wealth. The SIP calculator helps you understand exactly how much
                            corpus you can accumulate based on your investment amount, expected returns, and
                            investment duration. For those with a large sum to invest at once, use our <Link href="/lumpsum" className="text-emerald-600 hover:text-emerald-700 font-medium">Lumpsum Calculator</Link> to compare returns.
                        </p>

                        <InArticleAd />

                        <h2>How is SIP Return Calculated?</h2>
                        <p>
                            The SIP calculator uses a mathematical formula based on compound interest to calculate
                            returns. Since each monthly installment earns returns for different periods (the first
                            installment grows for the entire tenure, while the last one grows only for a month),
                            the calculation considers the time value of each investment.
                        </p>
                        <p>
                            The formula used is: <strong>M = P × ({`{[1 + i]^n – 1}`} / i) × (1 + i)</strong>
                        </p>
                        <p>Where:</p>
                        <ul>
                            <li><strong>M</strong> = Maturity amount (final corpus)</li>
                            <li><strong>P</strong> = Monthly investment amount</li>
                            <li><strong>i</strong> = Monthly rate of return (annual rate divided by 12)</li>
                            <li><strong>n</strong> = Total number of installments (years × 12)</li>
                        </ul>
                        <p>
                            This formula accounts for the compounding effect where your returns also generate
                            returns over time, leading to exponential growth of your investment.
                        </p>

                        <h2>Benefits of Investing Through SIP</h2>
                        <p>
                            Systematic Investment Plans offer multiple advantages that make them an ideal choice
                            for both new and experienced investors:
                        </p>
                        <ol>
                            <li>
                                <strong>Rupee Cost Averaging:</strong> When markets are down, your fixed SIP amount
                                buys more units, and when markets are up, it buys fewer units. This averaging effect
                                reduces the impact of market volatility on your portfolio.
                            </li>
                            <li>
                                <strong>Power of Compounding:</strong> Your investment grows exponentially as returns
                                generate their own returns. The longer you stay invested, the more significant this
                                compounding effect becomes.
                            </li>
                            <li>
                                <strong>Financial Discipline:</strong> SIP automates your investment process, ensuring
                                you invest regularly without having to remember or make active decisions each month.
                            </li>
                            <li>
                                <strong>Start Small:</strong> You can begin your investment journey with as little as
                                {currencySymbol}500 per month, making it accessible to everyone regardless of income level.
                            </li>
                            <li>
                                <strong>Flexibility:</strong> Most SIP plans allow you to increase, decrease, pause,
                                or stop your investments without any penalties, giving you complete control over your
                                financial journey.
                            </li>
                            <li>
                                <strong>No Need to Time the Market:</strong> Since you invest regularly regardless of
                                market conditions, you don&#39;t need to worry about finding the perfect entry point.
                            </li>
                        </ol>

                        <h2>How to Use This SIP Calculator</h2>
                        <p>
                            Using our SIP calculator is straightforward. Simply adjust the three sliders to match
                            your investment plan. Set your monthly investment amount based on how much you can
                            comfortably allocate each month. Enter the expected annual return based on historical
                            fund performance – equity funds typically deliver 10-15% annually over long periods.
                            Finally, set your investment duration based on your financial goals.
                        </p>
                        <p>
                            The calculator instantly shows you the total corpus you&#39;ll accumulate, how much of it
                            is your invested amount, and the estimated returns earned through the investment period.
                        </p>

                        <FAQAccordion items={sipFAQs} />
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
                        "SIP Calculator",
                        "Calculate your Systematic Investment Plan returns with our free SIP calculator.",
                        "https://savcalc.com/sip",
                        "https://savcalc.com/images/sip-calculator.jpg"
                    ))
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(sipFAQs))
                }}
            />
        </div>
    );
}
