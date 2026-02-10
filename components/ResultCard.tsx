'use client';

import { useCurrency } from '@/context/CurrencyContext';

interface ResultItem {
    label: string;
    value: number;
    type?: 'primary' | 'secondary' | 'highlight';
}

interface ResultCardProps {
    title?: string;
    results: ResultItem[];
}

export default function ResultCard({ title, results }: ResultCardProps) {
    const { formatCurrency } = useCurrency();

    return (
        <div className="bg-slate-50 dark:from-slate-800 rounded-xl lg:rounded-2xl p-4 md:p-6 lg:p-8 border border-slate-200 dark:border-slate-700">
            {title && (
                <h3 className="text-xs md:text-sm lg:text-base font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-3 md:mb-4 lg:mb-5 text-center">
                    {title}
                </h3>
            )}

            <div className="max-w-sm mx-auto space-y-3 md:space-y-4 lg:space-y-5">
                {results.map((result, index) => (
                    <div
                        key={index}
                        className={`
              flex justify-between items-center gap-2
              ${result.type === 'primary' ? 'pb-3 md:pb-4 lg:pb-5 border-b border-slate-200 dark:border-slate-700' : ''}
            `}
                    >
                        <span className="text-slate-600 dark:text-slate-400 text-sm md:text-base lg:text-lg">
                            {result.label}
                        </span>
                        <span
                            className={`
                font-bold text-right
                ${result.type === 'primary'
                                    ? 'text-2xl md:text-3xl lg:text-4xl text-slate-900 dark:text-white'
                                    : result.type === 'highlight'
                                        ? 'text-lg md:text-xl lg:text-2xl text-green-600 dark:text-green-400'
                                        : 'text-lg md:text-xl lg:text-2xl text-slate-700 dark:text-slate-300'
                                }
              `}
                        >
                            {formatCurrency(result.value)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

interface DonutChartProps {
    invested: number;
    returns: number;
    size?: number;
}

export function DonutChart({ invested, returns }: DonutChartProps) {
    const { formatCurrency } = useCurrency();
    const total = invested + returns;
    const investedPercent = total > 0 ? (invested / total) * 100 : 50;
    const returnsPercent = total > 0 ? (returns / total) * 100 : 50;

    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const investedDash = (investedPercent / 100) * circumference;

    return (
        <div className="flex flex-col items-center gap-4 md:gap-5 lg:gap-6">
            {/* Responsive SVG - Much larger on desktop */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
                <svg viewBox="0 0 160 160" className="w-full h-full transform -rotate-90">
                    {/* Background - Returns portion (green for growth/profit) */}
                    <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="16"
                        className="opacity-80"
                    />
                    {/* Invested portion (blue for stability) */}
                    <circle
                        cx="80"
                        cy="80"
                        r={radius}
                        fill="none"
                        stroke="#2563eb"
                        strokeWidth="16"
                        strokeDasharray={`${investedDash} ${circumference}`}
                        strokeLinecap="round"
                        className="transition-all duration-500"
                    />
                </svg>

                {/* Center text - Larger on desktop */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xs md:text-sm lg:text-base text-slate-500 dark:text-slate-400">Total</span>
                    <span className="text-base md:text-lg lg:text-xl font-bold text-slate-900 dark:text-white">
                        {formatCurrency(total, false)}
                    </span>
                </div>
            </div>

            {/* Legend - Larger on desktop */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-blue-600" />
                    <span className="text-xs md:text-sm lg:text-base text-slate-600 dark:text-slate-400">
                        Invested ({investedPercent.toFixed(0)}%)
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-green-500" />
                    <span className="text-xs md:text-sm lg:text-base text-slate-600 dark:text-slate-400">
                        Returns ({returnsPercent.toFixed(0)}%)
                    </span>
                </div>
            </div>
        </div>
    );
}
