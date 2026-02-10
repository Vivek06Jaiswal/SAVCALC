'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import CalculatorCard, { SliderField } from '@/components/CalculatorCard';
import ResultCard from '@/components/ResultCard';
import FAQAccordion from '@/components/FAQAccordion';
import { TopAd, HorizontalAd, InArticleAd, StickyBottomAd } from '@/components/AdSlot';
import { calculateEMI } from '@/lib/formulas';
import { useCurrency } from '@/context/CurrencyContext';
import { emiFAQs } from '@/lib/faq-data';
import { generateSoftwareAppSchema, generateFAQSchema } from '@/lib/structured-data';

const DonutChart = dynamic(() => import('@/components/ResultCard').then(mod => mod.DonutChart), {
    ssr: false,
    loading: () => <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto rounded-full bg-slate-100 dark:bg-slate-700 animate-pulse" />,
});

export default function EMICalculator() {
    const { currencySymbol, formatCurrency } = useCurrency();
    const [principal, setPrincipal] = useState(5000000);
    const [interestRate, setInterestRate] = useState(8.5);
    const [tenure, setTenure] = useState(20);

    const result = useMemo(() => {
        return calculateEMI(principal, interestRate, tenure);
    }, [principal, interestRate, tenure]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            {/* Centered content wrapper */}
            <div className="w-full flex flex-col items-center">
                <div className="w-full max-w-6xl mx-auto px-4 py-8 md:py-12">

                    <div className="text-center mb-8 md:mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3">
                            Free {currencySymbol} EMI Calculator {new Date().getFullYear()}
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Calculate your loan EMI, total interest, and payment schedule.
                            Plan home loans, car loans, and personal loans with accuracy.
                        </p>
                    </div>

                    <TopAd className="mb-8" />

                    <div className="calculator-container mb-10 md:mb-16">
                        <CalculatorCard title="EMI Calculator" description="Enter your loan details">
                            <div className="space-y-6">
                                <SliderField
                                    label="Loan Amount"
                                    id="principal"
                                    value={principal}
                                    onChange={setPrincipal}
                                    min={100000}
                                    max={50000000}
                                    step={100000}
                                    formatValue={(v) => `${currencySymbol}${(v / 100000).toFixed(1)}L`}
                                    aria-label="Loan Amount"
                                />

                                <SliderField
                                    label="Interest Rate (p.a.)"
                                    id="interest-rate"
                                    value={interestRate}
                                    onChange={setInterestRate}
                                    min={1}
                                    max={20}
                                    step={0.1}
                                    suffix="%"
                                    aria-label="Annual Interest Rate"
                                />

                                <SliderField
                                    label="Loan Tenure"
                                    id="tenure"
                                    value={tenure}
                                    onChange={setTenure}
                                    min={1}
                                    max={30}
                                    step={1}
                                    suffix=" years"
                                    aria-label="Loan Tenure in Years"
                                />
                            </div>
                        </CalculatorCard>

                        <div className="space-y-6">
                            <ResultCard
                                title="EMI Details"
                                results={[
                                    { label: 'Monthly EMI', value: result.emi, type: 'primary' },
                                    { label: 'Principal Amount', value: result.principal, type: 'secondary' },
                                    { label: 'Total Interest', value: result.totalInterest, type: 'highlight' },
                                ]}
                            />

                            <div className="bg-white dark:bg-slate-800 rounded-xl p-5 md:p-6 border border-slate-200 dark:border-slate-700">
                                <div className="text-center mb-4">
                                    <span className="text-sm text-slate-500 dark:text-slate-400">Total Payment</span>
                                    <div className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                                        {formatCurrency(result.totalPayment)}
                                    </div>
                                </div>
                                <DonutChart invested={result.principal} returns={result.totalInterest} />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center mb-12">
                        <HorizontalAd />
                    </div>

                    <article className="seo-content">
                        <h2>What is an EMI Calculator?</h2>
                        <p>
                            An EMI (Equated Monthly Installment) Calculator is an essential financial planning tool
                            that helps you determine the monthly payment amount for any type of loan. Whether you&#39;re
                            planning to take a home loan, car loan, personal loan, or education loan, this calculator
                            provides accurate EMI figures based on three key inputs: the loan amount (principal),
                            interest rate, and repayment tenure.
                        </p>
                        <p>
                            Understanding your EMI before taking a loan is crucial for financial planning. It helps
                            you assess whether the monthly payment fits within your budget, compare different loan
                            offers, and make informed decisions about loan amount and tenure. Our calculator also shows
                            the total interest you&#39;ll pay over the loan&#39;s lifetime, helping you understand the true
                            cost of borrowing. Planning to prepay? Use our <Link href="/sip" className="text-emerald-600 hover:text-emerald-700 font-medium">SIP Calculator</Link> to build a repayment corpus.
                        </p>

                        <InArticleAd />

                        <h2>How is EMI Calculated?</h2>
                        <p>
                            EMI is calculated using the reducing balance method, where interest is charged on the
                            outstanding principal, which decreases with each payment. The formula is:
                        </p>
                        <p>
                            <strong>EMI = P × r × (1 + r)^n / [(1 + r)^n – 1]</strong>
                        </p>
                        <p>Where:</p>
                        <ul>
                            <li><strong>P</strong> = Principal loan amount</li>
                            <li><strong>r</strong> = Monthly interest rate (annual rate / 12 / 100)</li>
                            <li><strong>n</strong> = Total number of monthly installments (years × 12)</li>
                        </ul>
                        <p>
                            Each EMI payment consists of two components: principal repayment and interest. In the
                            early years of a loan, a larger portion of your EMI goes toward interest, while toward
                            the end, most of it goes toward principal. This is why making prepayments early in the
                            loan tenure saves more interest.
                        </p>

                        <h2>Components of Your EMI</h2>
                        <p>
                            Understanding how your EMI is structured helps in financial planning:
                        </p>
                        <ol>
                            <li>
                                <strong>Principal Component:</strong> The portion that reduces your outstanding loan
                                balance. This increases over time as outstanding principal decreases.
                            </li>
                            <li>
                                <strong>Interest Component:</strong> The bank&#39;s charges for lending you money. This
                                is higher initially when your outstanding loan is large, and decreases over time.
                            </li>
                        </ol>
                        <p>
                            For example, on a {currencySymbol}50 lakh home loan at 8.5% for 20 years, your EMI might
                            be about {currencySymbol}43,391. In the first month, approximately {currencySymbol}35,417
                            goes to interest and only {currencySymbol}7,974 to principal. By the last year, almost
                            the entire EMI goes to principal.
                        </p>

                        <h2>Tips to Reduce Your Loan Burden</h2>
                        <p>
                            Here are proven strategies to minimize the cost of borrowing:
                        </p>
                        <ul>
                            <li>
                                <strong>Increase Down Payment:</strong> A larger down payment means smaller loan
                                amount, lower EMI, and significantly less total interest paid.
                            </li>
                            <li>
                                <strong>Choose Shorter Tenure:</strong> While this means higher EMI, you save
                                substantially on total interest. A 15-year tenure versus 30-year can save you
                                almost half the interest amount.
                            </li>
                            <li>
                                <strong>Make Prepayments:</strong> Using bonuses or windfalls to prepay reduces
                                outstanding principal, saving future interest. Prepay as early as possible for
                                maximum benefit.
                            </li>
                            <li>
                                <strong>Consider Balance Transfer:</strong> If a competitor offers significantly
                                lower rates (0.5%+ difference), transferring your loan can save substantial interest,
                                even after transfer costs.
                            </li>
                            <li>
                                <strong>Choose Floating Rate Wisely:</strong> In falling interest rate environments,
                                floating rates benefit you. In rising periods, they increase your burden.
                            </li>
                        </ul>

                        <h2>Current Loan Interest Rates ({new Date().getFullYear()})</h2>
                        <p>
                            Here are typical interest rate ranges for different loan types:
                        </p>
                        <ul>
                            <li><strong>Home Loan:</strong> 8.0% - 9.5% (varies by credit score, loan amount)</li>
                            <li><strong>Car Loan:</strong> 8.5% - 12% (new cars get better rates than used)</li>
                            <li><strong>Personal Loan:</strong> 10% - 18% (highly dependent on credit score)</li>
                            <li><strong>Education Loan:</strong> 8% - 14% (lower for secured, government schemes)</li>
                            <li><strong>Gold Loan:</strong> 7% - 12% (among the lowest due to collateral)</li>
                        </ul>
                        <p>
                            Always compare rates from multiple lenders. Even a 0.25% difference can save you
                            lakhs over a long-tenure home loan.
                        </p>

                        <FAQAccordion items={emiFAQs} />
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
                        "EMI Calculator",
                        "Calculate your loan EMI and interest.",
                        "https://savcalc.com/emi",
                        "https://savcalc.com/images/emi-calculator.jpg"
                    ))
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateFAQSchema(emiFAQs))
                }}
            />
        </div>
    );
}
