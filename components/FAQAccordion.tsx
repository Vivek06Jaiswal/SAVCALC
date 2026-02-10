'use client';

import { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
    title?: string;
}

export default function FAQAccordion({ items, title = "Frequently Asked Questions" }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-section mt-12 md:mt-16 pt-8 md:pt-10 border-t border-slate-200 dark:border-slate-700">
            {/* Section Header */}
            <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                    {title}
                </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4 md:space-y-5">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                            ? 'border-emerald-300 dark:border-emerald-700 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-900/20 dark:to-teal-900/20 shadow-lg shadow-emerald-500/10'
                            : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-slate-300 dark:hover:border-slate-600'
                            }`}
                    >
                        {/* Question Button */}
                        <button
                            onClick={() => toggleItem(index)}
                            className="w-full flex items-center justify-between gap-4 p-4 md:p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-2xl"
                        >
                            <div className="flex items-center gap-3 md:gap-4">
                                {/* Number Badge */}
                                <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${openIndex === index
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                                    }`}>
                                    {index + 1}
                                </span>
                                <span className={`font-semibold text-sm md:text-base transition-colors ${openIndex === index
                                    ? 'text-emerald-700 dark:text-emerald-300'
                                    : 'text-slate-900 dark:text-white'
                                    }`}>
                                    {item.question}
                                </span>
                            </div>

                            {/* Arrow Icon */}
                            <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${openIndex === index
                                ? 'bg-emerald-500 rotate-180'
                                : 'bg-slate-100 dark:bg-slate-700'
                                }`}>
                                <svg
                                    className={`w-4 h-4 transition-colors ${openIndex === index ? 'text-white' : 'text-slate-600 dark:text-slate-300'
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>

                        {/* Answer Content */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="px-4 md:px-5 pb-5 pt-0 pl-[4.25rem] md:pl-[4.75rem]">
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Helpful Tip */}
            <div className="mt-6 md:mt-8 p-4 md:p-5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            <span className="font-semibold text-slate-900 dark:text-white">Have more questions?</span>{' '}
                            Feel free to <a href="/contact" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">contact us</a> and we&#39;ll be happy to help!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
