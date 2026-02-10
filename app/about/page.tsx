import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'About Us | SavCalc',
    description: 'Learn about SavCalc - your trusted destination for accurate, free financial calculators.',
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            {/* Centered Content Container */}
            <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                <div className="w-full max-w-4xl mx-auto">
                    {/* Page Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            About SavCalc
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            SavCalc is your trusted companion for financial planning and calculations.
                            We provide a comprehensive suite of free, accurate, and easy-to-use financial
                            calculators to help you make informed decisions about your money.
                        </p>
                    </div>

                    {/* Mission Section */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700 mb-10 md:mb-12">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                            Our Mission
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                            We believe that everyone deserves access to professional-grade financial tools.
                            Our mission is to democratize financial planning by providing accurate,
                            user-friendly calculators that help individuals and families plan their
                            investments, loans, and savings with confidence.
                        </p>
                    </div>

                    {/* What We Offer Section */}
                    <div className="mb-10 md:mb-12">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8">
                            What We Offer
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            {[
                                { name: 'SIP Calculator', desc: 'Plan your systematic investments' },
                                { name: 'Step-Up SIP', desc: 'Investments with annual increase' },
                                { name: 'Lumpsum Calculator', desc: 'One-time investment returns' },
                                { name: 'SWP Calculator', desc: 'Systematic withdrawal planning' },
                                { name: 'FD Calculator', desc: 'Fixed deposit maturity' },
                                { name: 'RD Calculator', desc: 'Recurring deposit returns' },
                                { name: 'EMI Calculator', desc: 'Loan EMI calculations' },
                            ].map((tool) => (
                                <div key={tool.name} className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-5 md:p-6 border border-slate-200 dark:border-slate-700">
                                    <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-1">{tool.name}</h3>
                                    <p className="text-slate-600 dark:text-slate-400">{tool.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Why Choose Us Section */}
                    <div className="mb-10 md:mb-12">
                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-6 md:mb-8">
                            Why Choose Us?
                        </h2>
                        <ul className="space-y-4 md:space-y-5">
                            {[
                                { title: '100% Free', desc: 'All our calculators are completely free to use, forever.' },
                                { title: 'Accurate Results', desc: 'We use standard financial formulas used by banks and institutions.' },
                                { title: 'Multi-Currency', desc: 'Support for USD, GBP, EUR, and INR with locale-aware formatting.' },
                                { title: 'Privacy First', desc: "We don't store your financial data. All calculations happen locally." },
                                { title: 'Educational Content', desc: 'Each calculator includes detailed explanations and FAQs.' },
                            ].map((item) => (
                                <li key={item.title} className="flex items-start gap-4 bg-white dark:bg-slate-800/50 rounded-xl p-4 md:p-5 border border-slate-200 dark:border-slate-700">
                                    <span className="text-emerald-500 text-xl mt-0.5">✓</span>
                                    <div>
                                        <strong className="text-slate-900 dark:text-white block mb-1">{item.title}</strong>
                                        <span className="text-slate-600 dark:text-slate-400">{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 md:p-10 lg:p-12 text-white text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Start Planning Today</h2>
                        <p className="mb-8 opacity-90 text-lg max-w-lg mx-auto">
                            Take control of your financial future with our free calculators.
                        </p>
                        <Link
                            href="/"
                            className="inline-block bg-white text-emerald-600 font-semibold px-8 py-4 rounded-xl hover:bg-emerald-50 transition-colors text-lg"
                        >
                            Explore Calculators
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
