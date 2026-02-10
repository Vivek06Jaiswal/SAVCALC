'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import CalculatorCard, { SliderField } from '@/components/CalculatorCard';
import ResultCard from '@/components/ResultCard';
import FAQAccordion from '@/components/FAQAccordion';
import { TopAd, HorizontalAd, InArticleAd } from '@/components/AdSlot';
import { calculateSWP } from '@/lib/formulas';
import { useCurrency } from '@/context/CurrencyContext';
import { swpFAQs } from '@/lib/faq-data';
import { generateSoftwareAppSchema, generateFAQSchema } from '@/lib/structured-data';

export default function SWPCalculator() {
    const { currencySymbol, formatCurrency } = useCurrency();
    const [totalInvestment, setTotalInvestment] = useState(5000000);
    const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(30000);
    const [expectedReturn, setExpectedReturn] = useState(8);

    const result = useMemo(() => {
        return calculateSWP(totalInvestment, monthlyWithdrawal, expectedReturn);
    }, [totalInvestment, monthlyWithdrawal, expectedReturn]);

    const years = Math.floor(result.durationMonths / 12);
    const months = result.durationMonths % 12;

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            {/* Centered content wrapper */}
            <div className="w-full flex flex-col items-center">
                <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">

                    <div className="text-center mb-8 md:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">
                            Free {currencySymbol} SWP Calculator {new Date().getFullYear()}
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Plan your systematic withdrawals from your investment corpus.
                            Calculate how long your money will last with regular monthly withdrawals.
                        </p>
                    </div>

                    <TopAd className="mb-8" />

                    <div className="calculator-container mb-10 md:mb-16">
                        <CalculatorCard title="SWP Calculator" description="Enter your withdrawal plan">
                            <div className="space-y-6">
                                <SliderField
                                    label="Total Investment"
                                    id="total-investment"
                                    value={totalInvestment}
                                    onChange={setTotalInvestment}
                                    min={100000}
                                    max={50000000}
                                    step={100000}
                                    formatValue={(v) => `${currencySymbol}${(v / 100000).toFixed(1)}L`}
                                    aria-label="Total Investment Corpus"
                                />

                                <SliderField
                                    label="Monthly Withdrawal"
                                    id="monthly-withdrawal"
                                    value={monthlyWithdrawal}
                                    onChange={setMonthlyWithdrawal}
                                    min={5000}
                                    max={500000}
                                    step={5000}
                                    formatValue={(v) => `${currencySymbol}${v.toLocaleString()}`}
                                    aria-label="Monthly Withdrawal Amount"
                                />

                                <SliderField
                                    label="Expected Return (p.a.)"
                                    id="expected-return"
                                    value={expectedReturn}
                                    onChange={setExpectedReturn}
                                    min={1}
                                    max={15}
                                    step={0.5}
                                    suffix="%"
                                    aria-label="Expected Return Rate"
                                />
                            </div>
                        </CalculatorCard>

                        <div className="space-y-6">
                            <ResultCard
                                title="SWP Summary"
                                results={[
                                    { label: 'Total Withdrawn', value: result.totalWithdrawn, type: 'primary' },
                                    { label: 'Initial Corpus', value: totalInvestment, type: 'secondary' },
                                    { label: 'Final Balance', value: Math.max(0, result.finalBalance), type: 'highlight' },
                                ]}
                            />

                            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-xl p-5 md:p-6 border border-blue-200 dark:border-blue-700">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">
                                    Withdrawal Duration
                                </h3>
                                <p className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
                                    {years} years {months > 0 ? `${months} months` : ''}
                                </p>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                                    at {formatCurrency(monthlyWithdrawal)}/month with {expectedReturn}% returns
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mb-12">
                        <HorizontalAd />
                    </div>

                    <article className="seo-content">
                        <h2>What is an SWP Calculator?</h2>
                        <p>
                            A Systematic Withdrawal Plan (SWP) Calculator helps you plan regular withdrawals from
                            your investment corpus while the remaining amount continues to earn returns. Unlike a
                            Fixed Deposit where you withdraw the entire amount at maturity, SWP allows you to withdraw
                            a fixed amount periodically – typically monthly – while your remaining investment keeps
                            growing through market returns or interest.
                        </p>
                        <p>
                            SWP is particularly valuable for retirees who need regular income but want their savings
                            to last as long as possible. The calculator helps you determine how long your corpus will
                            sustain your desired withdrawal rate, and how much you&#39;ll eventually withdraw in total.
                            If you are looking to build a corpus instead, check our <Link href="/sip" className="text-emerald-600 hover:text-emerald-700 font-medium">SIP Calculator</Link>.
                        </p>

                        <InArticleAd />

                        <h2>How Does SWP Work?</h2>
                        <p>
                            When you set up an SWP, your investment corpus is placed in a mutual fund or similar
                            instrument. Each month, a fixed amount is redeemed and credited to your bank account.
                            The remaining units continue to earn returns based on market performance. Here&#39;s the
                            mathematical working:
                        </p>
                        <ul>
                            <li>Your corpus grows by the expected return rate (applied monthly)</li>
                            <li>The monthly withdrawal is deducted from this growing corpus</li>
                            <li>If returns exceed withdrawals, your corpus actually increases</li>
                            <li>If withdrawals exceed returns, your corpus diminishes over time</li>
                        </ul>
                        <p>
                            The &quot;safe withdrawal rate&quot; is the percentage where your corpus sustains indefinitely.
                            Many financial planners use the &quot;4% rule&quot; – withdrawing 4% of your corpus annually
                            (about 0.33% monthly) should make your money last 30+ years under most market conditions.
                        </p>

                        <h2>SWP for Retirement Planning</h2>
                        <p>
                            SWP has become a cornerstone of modern retirement planning. Here&#39;s why retirees prefer
                            SWP over traditional options:
                        </p>
                        <ol>
                            <li>
                                <strong>Tax Efficiency:</strong> In many countries, SWP withdrawals from equity funds
                                held over a year attract lower long-term capital gains tax compared to interest income
                                from FDs which is taxed at your marginal rate.
                            </li>
                            <li>
                                <strong>Inflation Protection:</strong> If invested in equity-oriented funds, your
                                remaining corpus can potentially grow faster than inflation, preserving purchasing power.
                            </li>
                            <li>
                                <strong>Regular Income:</strong> Unlike dividends which are uncertain, SWP provides
                                predictable monthly cash flow for household expenses.
                            </li>
                            <li>
                                <strong>Flexibility:</strong> You can increase, decrease, or pause withdrawals based
                                on your changing needs – something fixed income products don&#39;t allow.
                            </li>
                            <li>
                                <strong>No Lock-in:</strong> Unlike pension plans or annuities, your corpus remains
                                liquid and accessible in emergencies.
                            </li>
                        </ol>

                        <h2>Optimizing Your SWP</h2>
                        <p>
                            To make your corpus last longer with SWP, consider these strategies:
                        </p>
                        <ul>
                            <li><strong>Start Conservative:</strong> Begin with a lower withdrawal rate (3-4% annually) and increase gradually</li>
                            <li><strong>Bucket Strategy:</strong> Keep 2-3 years expenses in liquid/debt funds, rest in equity for growth</li>
                            <li><strong>Variable Withdrawals:</strong> Reduce withdrawals in down markets to preserve capital</li>
                            <li><strong>Supplement with Other Income:</strong> Combine SWP with rental income, pension, or part-time work</li>
                        </ul>

                        <FAQAccordion items={swpFAQs} />
                    </article>
                </div>
            </div>


            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateSoftwareAppSchema(
                        "SWP Calculator",
                        "Calculate your systematic withdrawal plan details.",
                        "https://savcalc.com/swp",
                        "https://savcalc.com/images/swp-calculator.jpg"
                    ))
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(swpFAQs))
                }}
            />
        </div>
    );
}
