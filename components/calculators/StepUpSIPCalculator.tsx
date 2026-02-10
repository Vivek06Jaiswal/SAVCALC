'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import CalculatorCard, { SliderField } from '@/components/CalculatorCard';
import ResultCard from '@/components/ResultCard';
import FAQAccordion from '@/components/FAQAccordion';
import { TopAd, HorizontalAd, InArticleAd, StickyBottomAd } from '@/components/AdSlot';
import { calculateStepUpSIP } from '@/lib/formulas';
import { useCurrency } from '@/context/CurrencyContext';
import { stepUpSipFAQs } from '@/lib/faq-data';
import { generateSoftwareAppSchema, generateFAQSchema } from '@/lib/structured-data';

const DonutChart = dynamic(() => import('@/components/ResultCard').then(mod => mod.DonutChart), {
    ssr: false,
    loading: () => <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto rounded-full bg-slate-100 dark:bg-slate-700 animate-pulse" />,
});

export default function StepUpSIPCalculator() {
    const { currencySymbol } = useCurrency();
    const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
    const [annualIncrease, setAnnualIncrease] = useState(10);
    const [expectedReturn, setExpectedReturn] = useState(12);
    const [timePeriod, setTimePeriod] = useState(10);

    const result = useMemo(() => {
        return calculateStepUpSIP(monthlyInvestment, annualIncrease, expectedReturn, timePeriod);
    }, [monthlyInvestment, annualIncrease, expectedReturn, timePeriod]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            {/* Centered content wrapper */}
            <div className="w-full flex flex-col items-center">
                <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">

                    <div className="text-center mb-8 md:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">
                            Free {currencySymbol} Step-Up SIP Calculator {new Date().getFullYear()}
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Plan your SIP with annual increment to maximize wealth creation.
                            See how increasing your investment each year accelerates your financial growth.
                        </p>
                    </div>

                    <TopAd className="mb-8" />

                    <div className="calculator-container mb-10 md:mb-16">
                        <CalculatorCard
                            title="Step-Up SIP Calculator"
                            description="Enter your investment details"
                        >
                            <div className="space-y-6">
                                <SliderField
                                    label="Starting Monthly Investment"
                                    id="monthly-investment"
                                    value={monthlyInvestment}
                                    onChange={setMonthlyInvestment}
                                    min={500}
                                    max={100000}
                                    step={500}
                                    formatValue={(v) => `${currencySymbol}${v.toLocaleString()}`}
                                    aria-label="Starting Monthly Investment"
                                />

                                <SliderField
                                    label="Annual Increase"
                                    id="annual-increase"
                                    value={annualIncrease}
                                    onChange={setAnnualIncrease}
                                    min={0}
                                    max={25}
                                    step={1}
                                    suffix="%"
                                    aria-label="Annual Increase Percentage"
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
                                title="Your Step-Up SIP Returns"
                                results={[
                                    { label: 'Total Value', value: result.totalValue, type: 'primary' },
                                    { label: 'Total Invested', value: result.totalInvestment, type: 'secondary' },
                                    { label: 'Est. Returns', value: result.estimatedReturns, type: 'highlight' },
                                ]}
                            />

                            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 md:p-6 border border-slate-200 dark:border-slate-700">
                                <DonutChart invested={result.totalInvestment} returns={result.estimatedReturns} />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mb-12">
                        <HorizontalAd />
                    </div>

                    <article className="seo-content">
                        <h2>What is a Step-Up SIP Calculator?</h2>
                        <p>
                            A Step-Up SIP Calculator is an advanced financial planning tool that helps you estimate
                            returns when you increase your Systematic Investment Plan amount periodically, typically
                            annually. Unlike a regular SIP where your monthly investment remains constant, a Step-Up
                            SIP allows you to increase your contribution by a fixed percentage each year, aligning
                            your investments with your growing income. If you want to check the returns without any annual increase, use our standard <Link href="/sip" className="text-emerald-600 hover:text-emerald-700 font-medium">SIP Calculator</Link>.
                        </p>
                        <p>
                            This approach is particularly powerful for young professionals who expect their salaries
                            to increase over time. By committing to increase your SIP by even 10% annually, you can
                            potentially accumulate 50-100% more wealth compared to a regular SIP over a 15-20 year
                            period. The Step-Up SIP calculator shows you exactly how much additional wealth you can
                            create through this simple strategy.
                        </p>

                        <InArticleAd />

                        <h2>How Does Step-Up SIP Work?</h2>
                        <p>
                            In a Step-Up SIP, your monthly investment increases by a fixed percentage each year.
                            For example, if you start with {currencySymbol}5,000 per month with a 10% annual step-up,
                            your investment progresses as follows:
                        </p>
                        <ul>
                            <li><strong>Year 1:</strong> {currencySymbol}5,000/month</li>
                            <li><strong>Year 2:</strong> {currencySymbol}5,500/month (+10%)</li>
                            <li><strong>Year 3:</strong> {currencySymbol}6,050/month (+10%)</li>
                            <li><strong>Year 5:</strong> {currencySymbol}7,321/month</li>
                            <li><strong>Year 10:</strong> {currencySymbol}11,790/month</li>
                        </ul>
                        <p>
                            This incremental approach ensures your investments keep pace with inflation and your
                            growing lifestyle, while still building substantial wealth through the power of compounding.
                        </p>

                        <h2>Benefits of Step-Up SIP</h2>
                        <ol>
                            <li>
                                <strong>Aligns with Income Growth:</strong> As your salary increases annually, your
                                investments grow proportionally, maintaining your investment-to-income ratio without
                                feeling burdensome.
                            </li>
                            <li>
                                <strong>Beats Inflation:</strong> A regular SIP amount loses purchasing power over
                                time due to inflation. Step-Up SIP ensures your real investment value keeps pace
                                with rising costs.
                            </li>
                            <li>
                                <strong>Significantly Higher Corpus:</strong> The additional investments in later years,
                                combined with earlier contributions growing longer, create a substantially larger
                                final corpus compared to regular SIPs.
                            </li>
                            <li>
                                <strong>Gradual Increase:</strong> The incremental nature means you barely notice the
                                higher investment amount, making it psychologically easier to commit more over time.
                            </li>
                            <li>
                                <strong>Flexible:</strong> You can choose your step-up percentage based on your expected
                                salary growth – conservative investors might choose 5%, while aggressive savers could
                                opt for 15-20%.
                            </li>
                        </ol>

                        <h2>Step-Up SIP vs Regular SIP: A Comparison</h2>
                        <p>
                            Consider an investor starting with {currencySymbol}10,000 monthly SIP at 12% expected return
                            for 20 years. Here&#39;s how the two approaches compare:
                        </p>
                        <ul>
                            <li><strong>Regular SIP:</strong> Total invested: {currencySymbol}24 lakhs → Final corpus: ~{currencySymbol}1 crore</li>
                            <li><strong>10% Step-Up SIP:</strong> Total invested: {currencySymbol}68 lakhs → Final corpus: ~{currencySymbol}2.5 crore</li>
                        </ul>
                        <p>
                            While you invest more in absolute terms with Step-Up SIP, the per-unit returns on your
                            money are similar. The key advantage is that you&#39;re committing to save more over time,
                            which naturally leads to greater wealth accumulation.
                        </p>

                        <h2>How to Use This Calculator</h2>
                        <p>
                            Start by entering your current monthly investment amount – this is what you can comfortably
                            invest today. Then set your annual step-up percentage based on your expected salary increases
                            (typically 8-15% for most professionals). Enter the expected return based on your fund choice,
                            and finally set your investment horizon. The calculator instantly shows your projected wealth.
                        </p>

                        <FAQAccordion items={stepUpSipFAQs} />
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
                        "Step-Up SIP Calculator",
                        "Calculate potential returns with annual step-up SIP investments.",
                        "https://savcalc.com/step-up-sip",
                        "https://savcalc.com/images/step-up-sip-calculator.jpg"
                    ))
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(stepUpSipFAQs))
                }}
            />
        </div>
    );
}
