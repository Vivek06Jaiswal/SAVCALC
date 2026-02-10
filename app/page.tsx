import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { CardAd } from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Free Financial Calculators 2026 | SIP, EMI, FD, RD',
  description: 'Calculate your investments, loans, and savings with our free financial calculators. SIP, EMI, FD, RD, SWP, and Lumpsum calculators with multi-currency support.',
};

const calculators = [
  {
    name: 'SIP Calculator',
    description: 'Calculate returns on systematic investment plans with compound interest',
    href: '/sip',
    icon: '📈',
    gradient: 'from-emerald-400 to-teal-500',
  },
  {
    name: 'Step-Up SIP',
    description: 'Plan SIP with annual increase in investment amount',
    href: '/step-up-sip',
    icon: '📊',
    gradient: 'from-teal-400 to-cyan-500',
  },
  {
    name: 'Lumpsum',
    description: 'Calculate one-time investment growth over time',
    href: '/lumpsum',
    icon: '💰',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    name: 'SWP Calculator',
    description: 'Plan systematic withdrawals from your investment corpus',
    href: '/swp',
    icon: '🏦',
    gradient: 'from-cyan-400 to-teal-500',
  },
  {
    name: 'FD Calculator',
    description: 'Calculate fixed deposit maturity amount and interest',
    href: '/fd',
    icon: '🔒',
    gradient: 'from-teal-400 to-green-500',
  },
  {
    name: 'RD Calculator',
    description: 'Calculate recurring deposit returns and maturity value',
    href: '/rd',
    icon: '🗓️',
    gradient: 'from-emerald-400 to-cyan-500',
  },
  {
    name: 'EMI Calculator',
    description: 'Calculate loan EMI, total interest, and payment schedule',
    href: '/emi',
    icon: '🏠',
    gradient: 'from-green-400 to-teal-500',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Green Gradient */}
      <section className="relative py-20 md:py-28 lg:py-36 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-slate-900 dark:via-emerald-950/30 dark:to-slate-900 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-200/40 to-teal-200/40 dark:from-emerald-800/20 dark:to-teal-800/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-200/40 to-cyan-200/40 dark:from-teal-800/20 dark:to-cyan-800/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 dark:from-emerald-800/10 dark:to-teal-800/10 rounded-full blur-3xl" />
        </div>

        {/* Centered Content Container */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center px-4">
          <div className="w-full max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-emerald-200 dark:border-emerald-800 mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm text-slate-600 dark:text-slate-300">
                Multi-Currency Support: <strong>$, £, €, ₹</strong>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Smart Financial
              <span className="block bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                Calculators
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10">
              Plan your investments, loans, and savings with our comprehensive
              suite of free financial calculators. Accurate, fast, and easy to use.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/sip"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#calculators"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold rounded-2xl border border-slate-200 dark:border-slate-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all"
              >
                View All Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Cards Section */}
      <section id="calculators" className="py-20 md:py-28 bg-white dark:bg-slate-900">
        {/* Full-width centered container */}
        <div className="w-full flex flex-col items-center px-4">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Financial Calculators
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                Choose from our collection of accurate, easy-to-use financial calculators
              </p>
            </div>

            {/* Calculator Grid with Ad Slots */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {calculators.map((calc, index) => (
                <React.Fragment key={calc.name}>
                  {/* Insert first ad after 2nd calculator (index 2) */}
                  {index === 2 && (
                    <CardAd key="ad-slot-1" slot="homepage-grid-1" />
                  )}

                  <Link
                    key={calc.name}
                    href={calc.href}
                    className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${calc.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                    <div className="relative z-10">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${calc.gradient} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                        {calc.icon}
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {calc.name}
                      </h3>

                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {calc.description}
                      </p>

                      <div className="mt-4 flex items-center text-emerald-600 dark:text-emerald-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Calculate Now
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>

                  {/* Insert second ad after 5th calculator (index 5) */}
                  {index === 5 && (
                    <CardAd key="ad-slot-2" slot="homepage-grid-2" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800/50 dark:to-slate-900">
        {/* Full-width centered container */}
        <div className="w-full flex flex-col items-center px-4">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Why Use Our Calculators?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900/50 dark:to-fuchsia-900/50 flex items-center justify-center shadow-lg">
                  <span className="text-3xl">💱</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Multi-Currency</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Switch between USD, GBP, EUR, and INR with locale-aware formatting
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 dark:from-pink-900/50 dark:to-rose-900/50 flex items-center justify-center shadow-lg">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Instant Results</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Real-time calculations as you adjust sliders – no refresh needed
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/50 dark:to-orange-900/50 flex items-center justify-center shadow-lg">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">100% Free</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  No signup, no hidden fees, no data collection – just calculate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
