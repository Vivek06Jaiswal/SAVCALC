'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import CalculatorCard, { SliderField } from '@/components/CalculatorCard';
import ResultCard from '@/components/ResultCard';
import FAQAccordion from '@/components/FAQAccordion';
import { TopAd, HorizontalAd, InArticleAd } from '@/components/AdSlot';
import { calculateLumpsum } from '@/lib/formulas';
import { useCurrency } from '@/context/CurrencyContext';
import { lumpsumFAQs } from '@/lib/faq-data';
import { generateSoftwareAppSchema, generateFAQSchema } from '@/lib/structured-data';

const DonutChart = dynamic(() => import('@/components/ResultCard').then(mod => mod.DonutChart), {
    ssr: false,
    loading: () => <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto rounded-full bg-slate-100 dark:bg-slate-700 animate-pulse" />,
});

export default function LumpsumCalculator() {
    const { currencySymbol } = useCurrency();
    const [principal, setPrincipal] = useState(100000);
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);

    const result = useMemo(() => {
        return calculateLumpsum(principal, expectedReturn, timePeriod);
    }, [principal, expectedReturn, timePeriod]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            {/* Centered content wrapper */}
            <div className="w-full flex flex-col items-center">
                <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">

                    <div className="text-center mb-8 md:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">
                            Free {currencySymbol} Lumpsum Calculator {new Date().getFullYear()}
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Calculate the future value of your one-time investment. See how a single
                            investment can grow into substantial wealth through compound interest.
                        </p>
                    </div>

                    <TopAd className="mb-8" />

                    <div className="calculator-container mb-10 md:mb-16">
                        <CalculatorCard title="Lumpsum Calculator" description="Enter your investment details">
                            <div className="space-y-6">
                                <SliderField
                                    label="Investment Amount"
                                    id="principal"
                                    value={principal}
                                    onChange={setPrincipal}
                                    min={10000}
                                    max={10000000}
                                    step={10000}
                                    formatValue={(v) => `${currencySymbol}${(v / 1000).toFixed(0)}K`}
                                    aria-label="Investment Amount"
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
                                title="Your Lumpsum Returns"
                                results={[
                                    { label: 'Total Value', value: result.totalValue, type: 'primary' },
                                    { label: 'Invested', value: result.principal, type: 'secondary' },
                                    { label: 'Est. Returns', value: result.estimatedReturns, type: 'highlight' },
                                ]}
                            />

                            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 md:p-6 border border-slate-200 dark:border-slate-700">
                                <DonutChart invested={result.principal} returns={result.estimatedReturns} />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mb-12">
                        <HorizontalAd />
                    </div>

                    <article className="seo-content">
                        <h2>What is a Lumpsum Investment Calculator?</h2>
                        <p>
                            A Lumpsum Investment Calculator helps you estimate the future value of a one-time
                            investment in mutual funds, stocks, or other financial instruments. Unlike a Systematic
                            Investment Plan (SIP) where you invest regularly over time, lumpsum investing involves
                            putting a significant amount of money to work all at once. This calculator uses the
                            compound interest formula to project how your investment grows over your chosen time horizon.
                            If you plan to invest small amounts regularly instead, try our <Link href="/sip" className="text-emerald-600 hover:text-emerald-700 font-medium">SIP Calculator</Link>.
                        </p>
                        <p>
                            Lumpsum investments are ideal when you have access to a large sum of money – such as an
                            annual bonus, inheritance, property sale proceeds, matured fixed deposits, or retirement
                            benefits. By investing this amount in growth-oriented assets, you can potentially generate
                            significant wealth over time through the power of compounding.
                        </p>

                        <InArticleAd />

                        <h2>How is Lumpsum Return Calculated?</h2>
                        <p>
                            The lumpsum return calculation is based on the compound interest formula, which is simpler
                            than the SIP formula since there&#39;s only one investment to track:
                        </p>
                        <p>
                            <strong>A = P × (1 + r)^n</strong>
                        </p>
                        <p>Where:</p>
                        <ul>
                            <li><strong>A</strong> = Final amount (maturity value)</li>
                            <li><strong>P</strong> = Principal (initial investment)</li>
                            <li><strong>r</strong> = Annual rate of return (in decimal form)</li>
                            <li><strong>n</strong> = Number of years</li>
                        </ul>
                        <p>
                            This formula shows how compound interest works – your returns earn returns, leading to
                            exponential growth. The longer you stay invested, the more dramatic the compounding effect
                            becomes, which is why financial experts recommend a long investment horizon for equity investments.
                        </p>

                        <h2>Lumpsum vs SIP: Which is Better?</h2>
                        <p>
                            This is one of the most common questions in investment planning. Both approaches have their
                            merits, and the right choice depends on your circumstances:
                        </p>
                        <ol>
                            <li>
                                <strong>Lumpsum Investing:</strong>
                                <ul>
                                    <li>Better when markets are at relatively low valuations</li>
                                    <li>Your entire corpus earns returns from day one</li>
                                    <li>Suitable when you have large sums available</li>
                                    <li>Higher short-term volatility exposure</li>
                                </ul>
                            </li>
                            <li>
                                <strong>SIP Investing:</strong>
                                <ul>
                                    <li>Benefits from rupee cost averaging in volatile markets</li>
                                    <li>Suitable for salaried individuals with regular income</li>
                                    <li>Reduces timing risk – no need to predict markets</li>
                                    <li>Builds investment discipline</li>
                                </ul>
                            </li>
                        </ol>
                        <p>
                            Research shows that over very long periods (15+ years), lump sum investments often
                            outperform SIP by a small margin if invested in rising markets. However, SIP provides
                            better protection against poor timing. Many advisors recommend a hybrid approach – invest
                            lumpsum when available and maintain regular SIP contributions.
                        </p>

                        <h2>When Should You Invest Lumpsum?</h2>
                        <p>
                            Consider lumpsum investment in these scenarios:
                        </p>
                        <ul>
                            <li><strong>Bonus or Windfall:</strong> Annual performance bonus, gift money, or lottery winnings</li>
                            <li><strong>Inheritance:</strong> Money received as inheritance or from family</li>
                            <li><strong>Property Sale:</strong> Proceeds from selling real estate</li>
                            <li><strong>FD Maturity:</strong> When bank fixed deposits mature</li>
                            <li><strong>Retirement Benefits:</strong> Provident fund or gratuity payouts</li>
                            <li><strong>Business Sale:</strong> Proceeds from selling a business or stake</li>
                        </ul>
                        <p>
                            The key is to invest as soon as you have the money rather than trying to time the market.
                            Time in the market beats timing the market in the long run.
                        </p>

                        <FAQAccordion items={lumpsumFAQs} />
                    </article>
                </div>
            </div>


            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateSoftwareAppSchema(
                        "Lumpsum Calculator",
                        "Calculate returns on your one-time lumpsum investment.",
                        "https://savcalc.com/lumpsum",
                        "https://savcalc.com/images/lumpsum-calculator.jpg"
                    ))
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(lumpsumFAQs))
                }}
            />
        </div>
    );
}
