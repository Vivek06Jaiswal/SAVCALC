'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCurrency, currencies, CurrencyCode } from '@/context/CurrencyContext';

const navLinks = [
    { name: 'SIP', href: '/sip' },
    { name: 'Step-Up SIP', href: '/step-up-sip' },
    { name: 'Lumpsum', href: '/lumpsum' },
    { name: 'SWP', href: '/swp' },
    { name: 'FD', href: '/fd' },
    { name: 'RD', href: '/rd' },
    { name: 'EMI', href: '/emi' },
];

export default function Header() {
    const { currency, setCurrency } = useCurrency();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currencyMenuOpen, setCurrencyMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700">
            <div className="w-full flex justify-center">
                <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-500/25 group-hover:shadow-emerald-500/40 transition-shadow">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                                SavCalc
                            </span>
                        </Link>

                        {/* Navigation - Desktop */}
                        <nav className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-3 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all text-sm font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            {/* Currency Selector - Modern Button Style */}
                            <div className="relative">
                                <button
                                    onClick={() => setCurrencyMenuOpen(!currencyMenuOpen)}
                                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                >
                                    <span className="text-lg">{currency.symbol}</span>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                                        {currency.code}
                                    </span>
                                    <svg
                                        className={`w-4 h-4 text-slate-500 transition-transform ${currencyMenuOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {/* Currency Dropdown */}
                                {currencyMenuOpen && (
                                    <>
                                        <div
                                            className="fixed inset-0 z-10"
                                            onClick={() => setCurrencyMenuOpen(false)}
                                        />
                                        <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-20">
                                            <div className="p-2">
                                                <div className="px-3 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                                    Select Currency
                                                </div>
                                                {Object.values(currencies).map((curr) => (
                                                    <button
                                                        key={curr.code}
                                                        onClick={() => {
                                                            setCurrency(curr.code as CurrencyCode);
                                                            setCurrencyMenuOpen(false);
                                                        }}
                                                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${currency.code === curr.code
                                                            ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                                                            : 'hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200'
                                                            }`}
                                                    >
                                                        <span className="text-xl w-8 text-center">{curr.symbol}</span>
                                                        <div>
                                                            <div className="font-medium">{curr.code}</div>
                                                            <div className="text-xs text-slate-500 dark:text-slate-400">
                                                                {curr.code === 'USD' && 'US Dollar'}
                                                                {curr.code === 'GBP' && 'British Pound'}
                                                                {curr.code === 'EUR' && 'Euro'}
                                                                {curr.code === 'INR' && 'Indian Rupee'}
                                                            </div>
                                                        </div>
                                                        {currency.code === curr.code && (
                                                            <svg className="w-5 h-5 ml-auto text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                            >
                                {mobileMenuOpen ? (
                                    <svg className="w-5 h-5 text-slate-700 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5 text-slate-700 dark:text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
                    <div className="w-full flex justify-center">
                        <nav className="w-full max-w-7xl px-4 py-4 grid grid-cols-2 gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="px-4 py-3 rounded-xl text-center text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}
