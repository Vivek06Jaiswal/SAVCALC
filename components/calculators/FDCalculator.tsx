'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import CalculatorCard, { SliderField } from '@/components/CalculatorCard';
import ResultCard from '@/components/ResultCard';
import FAQAccordion from '@/components/FAQAccordion';
import { TopAd, HorizontalAd, InArticleAd } from '@/components/AdSlot';
import { calculateFD } from '@/lib/formulas';
import { useCurrency } from '@/context/CurrencyContext';
import { fdFAQs } from '@/lib/faq-data';
import { generateSoftwareAppSchema, generateFAQSchema } from '@/lib/structured-data';

const DonutChart = dynamic(() => import('@/components/ResultCard').then(mod => mod.DonutChart), {
    ssr: false,
    loading: () => <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto rounded-full bg-slate-100 dark:bg-slate-700 animate-pulse" />,
});

export default function FDCalculator() {
    const { currencySymbol } = useCurrency();
    const [principal, setPrincipal] = useState(100000);
    const [interestRate, setInterestRate] = useState(7);
    const [timePeriod, setTimePeriod] = useState(5);
    const [compoundingFrequency, setCompoundingFrequency] = useState(4);

    const result = useMemo(() => {
        return calculateFD(principal, interestRate, timePeriod, compoundingFrequency);
    }, [principal, interestRate, timePeriod, compoundingFrequency]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            {/* Centered content wrapper */}
            <div className="w-full flex flex-col items-center">
                <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">

                    <div className="text-center mb-8 md:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">
                            Free {currencySymbol} FD Calculator {new Date().getFullYear()}
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Calculate Fixed Deposit maturity amount and interest earned.
                            Compare returns with different compounding frequencies and tenures.
                        </p>
                    </div>

                    <TopAd className="mb-8" />

                    <div className="calculator-container mb-10 md:mb-16">
                        <CalculatorCard title="FD Calculator" description="Enter your deposit details">
                            <div className="space-y-6">
                                <SliderField
                                    label="Principal Amount"
                                    id="principal"
                                    value={principal}
                                    onChange={setPrincipal}
                                    min={10000}
                                    max={10000000}
                                    step={10000}
                                    formatValue={(v) => `${currencySymbol}${(v / 1000).toFixed(0)}K`}
                                    aria-label="Investment Principal Amount"
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
                                    aria-label="Interest Rate"
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
                                    aria-label="Investment Tenure in Years"
                                />

                                <div className="space-y-3">
                                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Compounding Frequency
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {[
                                            { label: 'Monthly', value: 12 },
                                            { label: 'Quarterly', value: 4 },
                                            { label: 'Half-Yearly', value: 2 },
                                            { label: 'Yearly', value: 1 },
                                        ].map((option) => (
                                            <button
                                                key={option.value}
                                                onClick={() => setCompoundingFrequency(option.value)}
                                                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${compoundingFrequency === option.value
                                                    ? 'bg-blue-600 text-white shadow-lg'
                                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                                                    }`}
                                                aria-label={`Compounding Frequency: ${option.label}`}
                                                aria-pressed={compoundingFrequency === option.value}
                                            >
                                                {option.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CalculatorCard>

                        <div className="space-y-6">
                            <ResultCard
                                title="FD Returns"
                                results={[
                                    { label: 'Maturity Value', value: result.maturityValue, type: 'primary' },
                                    { label: 'Principal', value: result.principal, type: 'secondary' },
                                    { label: 'Interest Earned', value: result.interestEarned, type: 'highlight' },
                                ]}
                            />

                            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 md:p-6 border border-slate-200 dark:border-slate-700">
                                <DonutChart invested={result.principal} returns={result.interestEarned} />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mb-12">
                        <HorizontalAd />
                    </div>

                    <article className="seo-content">
                        <h2>What is an FD Calculator?</h2>
                        <p>
                            A Fixed Deposit (FD) Calculator is a financial tool that helps you estimate the maturity
                            amount and interest earned on your bank fixed deposit. When you place money in an FD, the
                            bank pays you a fixed interest rate for a predetermined tenure. The FD calculator shows
                            you exactly how much your deposit will grow based on the principal, interest rate, tenure,
                            and compounding frequency.
                        </p>
                        <p>
                            Fixed Deposits are among the safest investment options available, offering guaranteed returns
                            regardless of market conditions. They&#39;re particularly popular among risk-averse investors,
                            senior citizens seeking regular income, and anyone looking to park funds for a specific period
                            with certainty about returns. For higher returns, you might consider <Link href="/sip" className="text-emerald-600 hover:text-emerald-700 font-medium">Mutual Fund SIPs</Link>, though they carry market risk.
                        </p>

                        <InArticleAd />

                        <h2>How is FD Interest Calculated?</h2>
                        <p>
                            FD interest is calculated using the compound interest formula. Unlike simple interest where
                            you earn interest only on the principal, compound interest means you earn interest on
                            accumulated interest as well. The formula is:
                        </p>
                        <p>
                            <strong>A = P × (1 + r/n)^(n×t)</strong>
                        </p>
                        <p>Where:</p>
                        <ul>
                            <li><strong>A</strong> = Maturity amount</li>
                            <li><strong>P</strong> = Principal deposit amount</li>
                            <li><strong>r</strong> = Annual interest rate (in decimal)</li>
                            <li><strong>n</strong> = Compounding frequency per year</li>
                            <li><strong>t</strong> = Time in years</li>
                        </ul>
                        <p>
                            The compounding frequency significantly affects your returns. Monthly compounding yields
                            more than quarterly, which yields more than yearly compounding – though the difference
                            becomes more noticeable with larger principals and longer tenures.
                        </p>

                        <h2>Types of Fixed Deposits</h2>
                        <p>
                            Banks offer various FD types to suit different needs:
                        </p>
                        <ol>
                            <li>
                                <strong>Regular FD:</strong> Standard deposit with flexible tenure from 7 days to 10 years.
                                Interest can be paid monthly, quarterly, or at maturity.
                            </li>

                            <li>
                                <strong>Senior Citizen FD:</strong> Offers 0.25-0.50% higher interest rate for depositors
                                aged 60 and above. Some banks offer super senior citizen rates for those 80+.
                            </li>
                            <li>
                                <strong>Cumulative FD:</strong> Interest is compounded and paid at maturity, yielding
                                higher effective returns.
                            </li>
                            <li>
                                <strong>Non-Cumulative FD:</strong> Interest is paid out periodically (monthly/quarterly) –
                                ideal for those needing regular income.
                            </li>
                            <li>
                                <strong>Flexi FD:</strong> Linked to savings account, automatically transfers surplus
                                to FD and back when needed.
                            </li>
                        </ol>

                        <h2>FD Interest Rates in {new Date().getFullYear()}</h2>
                        <p>
                            Current FD interest rates vary by bank and tenure. Here&#39;s a general range:
                        </p>
                        <ul>
                            <li><strong>Major Banks:</strong> 6.0% - 7.25%</li>
                            <li><strong>Small Finance Banks:</strong> 7.5% - 8.5%</li>
                            <li><strong>NBFCs/Corporate Deposits:</strong> 7.0% - 9.0%</li>
                            <li><strong>Senior Citizens:</strong> +0.25% to +0.50% additional</li>
                        </ul>
                        <p>
                            Note that higher-interest deposits may carry higher risk. Small finance banks and NBFCs
                            should be evaluated for their credit ratings and deposit insurance coverage.
                        </p>

                        <FAQAccordion items={fdFAQs} />
                    </article>
                </div>
            </div>


            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateSoftwareAppSchema(
                        "FD Calculator",
                        "Calculate your Fixed Deposit maturity amount.",
                        "https://savcalc.com/fd",
                        "https://savcalc.com/images/fd-calculator.jpg"
                    ))
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(fdFAQs))
                }}
            />
        </div>
    );
}
