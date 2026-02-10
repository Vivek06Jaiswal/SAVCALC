'use client';

import { ReactNode } from 'react';

interface CalculatorCardProps {
    title: string;
    description?: string;
    children: ReactNode;
}

export default function CalculatorCard({ title, description, children }: CalculatorCardProps) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
            {/* Header - Solid professional color */}
            <div className="bg-slate-800 dark:bg-slate-900 px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 text-center">
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white">{title}</h2>
                {description && (
                    <p className="text-slate-300 text-xs md:text-sm lg:text-base mt-1">{description}</p>
                )}
            </div>

            {/* Content - More padding on larger screens */}
            <div className="p-4 md:p-6 lg:p-8">
                <div className="max-w-md mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}

interface InputFieldProps {
    label: string;
    id: string;
    value: string | number;
    onChange: (value: string) => void;
    type?: 'text' | 'number';
    prefix?: string;
    suffix?: string;
    placeholder?: string;
    min?: number;
    max?: number;
    step?: number;
}

export function InputField({
    label,
    id,
    value,
    onChange,
    type = 'number',
    prefix,
    suffix,
    placeholder,
    min,
    max,
    step = 1
}: InputFieldProps) {
    return (
        <div className="space-y-1.5 md:space-y-2 lg:space-y-3">
            <label htmlFor={id} className="block text-sm md:text-base lg:text-lg font-medium text-slate-700 dark:text-slate-300">
                {label}
            </label>
            <div className="relative flex items-center">
                {prefix && (
                    <span className="absolute left-3 text-slate-500 dark:text-slate-400 font-medium text-sm lg:text-base">
                        {prefix}
                    </span>
                )}
                <input
                    type={type}
                    id={id}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    min={min}
                    max={max}
                    step={step}
                    className={`
            w-full rounded-lg md:rounded-xl lg:rounded-2xl border border-slate-200 dark:border-slate-700 
            bg-slate-50 dark:bg-slate-900 
            text-slate-900 dark:text-white text-base lg:text-lg
            py-3 lg:py-4 transition-colors
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            ${prefix ? 'pl-8' : 'pl-3'}
            ${suffix ? 'pr-12' : 'pr-3'}
          `}
                />
                {suffix && (
                    <span className="absolute right-3 text-slate-500 dark:text-slate-400 font-medium text-sm lg:text-base">
                        {suffix}
                    </span>
                )}
            </div>
        </div>
    );
}

interface SliderFieldProps {
    label: string;
    id: string;
    value: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
    step?: number;
    suffix?: string;
    formatValue?: (value: number) => string;
}

export function SliderField({
    label,
    id,
    value,
    onChange,
    min,
    max,
    step = 1,
    suffix = '',
    formatValue
}: SliderFieldProps) {
    const displayValue = formatValue ? formatValue(value) : `${value}${suffix}`;
    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className="space-y-2 md:space-y-3 lg:space-y-4">
            <div className="flex justify-between items-center gap-2">
                <label htmlFor={id} className="text-sm md:text-base lg:text-lg font-medium text-slate-700 dark:text-slate-300">
                    {label}
                </label>
                <span className="text-sm md:text-base lg:text-lg font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2.5 py-1 lg:px-4 lg:py-2 rounded-full whitespace-nowrap">
                    {displayValue}
                </span>
            </div>
            <input
                type="range"
                id={id}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                min={min}
                max={max}
                step={step}
                className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 lg:h-3"
                style={{
                    background: `linear-gradient(to right, #2563eb 0%, #2563eb ${percentage}%, #e2e8f0 ${percentage}%, #e2e8f0 100%)`
                }}
            />
            <div className="flex justify-between text-xs lg:text-sm text-slate-400">
                <span>{min}{suffix}</span>
                <span>{max}{suffix}</span>
            </div>
        </div>
    );
}
