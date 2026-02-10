'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

const PUB_ID = process.env.NEXT_PUBLIC_ADSENSE_PUB_ID;
const hasValidPubId = Boolean(PUB_ID && PUB_ID.length > 5 && !PUB_ID.includes('XXXX'));

// ─── Contextual fallback content shown when no pub ID is configured ───

const calculatorLinks = [
    { name: 'SIP Calculator', href: '/sip', icon: '📈', desc: 'Plan your monthly investments' },
    { name: 'EMI Calculator', href: '/emi', icon: '🏠', desc: 'Calculate loan EMIs' },
    { name: 'FD Calculator', href: '/fd', icon: '🏦', desc: 'Fixed deposit returns' },
    { name: 'RD Calculator', href: '/rd', icon: '💰', desc: 'Recurring deposit growth' },
    { name: 'SWP Calculator', href: '/swp', icon: '🔄', desc: 'Systematic withdrawal planning' },
    { name: 'Lumpsum Calculator', href: '/lumpsum', icon: '💎', desc: 'One-time investment returns' },
    { name: 'Step-Up SIP', href: '/step-up-sip', icon: '🚀', desc: 'SIP with annual increases' },
];

const financialTips = [
    { title: '💡 Start Early', text: 'Starting investments early lets compound interest work in your favour. Even small amounts grow significantly over decades.' },
    { title: '📊 Diversify', text: 'Spread investments across stocks, bonds, and fixed deposits to reduce risk while maintaining good returns.' },
    { title: '🎯 Set Goals', text: 'Define clear financial goals — retirement, education, home — and choose the right calculator to plan for each.' },
    { title: '⏰ Stay Consistent', text: 'Regular investing through SIP beats trying to time the market. Consistency is the key to wealth creation.' },
    { title: '🛡️ Emergency Fund', text: 'Keep 3-6 months of expenses in a liquid fund or savings account before investing aggressively.' },
];

function getRandomTip() {
    return financialTips[Math.floor(Math.random() * financialTips.length)];
}

function getRandomLinks(count: number, exclude?: string) {
    const filtered = exclude
        ? calculatorLinks.filter(l => !l.href.includes(exclude))
        : calculatorLinks;
    const shuffled = [...filtered].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// ─── Contextual Fallback Components ───

function TopFallback() {
    const tip = getRandomTip();
    const links = getRandomLinks(3);
    return (
        <div className="w-full bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl border border-emerald-200/50 dark:border-emerald-800/30 p-4 md:p-5">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                    <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-300 mb-1">{tip.title}</p>
                    <p className="text-sm text-emerald-700 dark:text-emerald-400 leading-relaxed">{tip.text}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {links.map(link => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="inline-flex items-center gap-1.5 text-xs font-medium bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-lg px-3 py-1.5 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 transition-colors"
                        >
                            <span>{link.icon}</span>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

function HorizontalFallback() {
    const links = getRandomLinks(4);
    return (
        <div className="w-full bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-5">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Explore More Calculators</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {links.map(link => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="flex flex-col items-center gap-1.5 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-center group"
                    >
                        <span className="text-2xl group-hover:scale-110 transition-transform">{link.icon}</span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{link.name}</span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">{link.desc}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

function InArticleFallback() {
    const tip = getRandomTip();
    return (
        <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-200/50 dark:border-blue-800/30 p-4 md:p-5">
            <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-1">{tip.title}</p>
            <p className="text-sm text-blue-700 dark:text-blue-400 leading-relaxed">{tip.text}</p>
        </div>
    );
}

// ─── Core AdSlot Component ───

interface AdSlotProps {
    slot: string;
    format?: 'leaderboard' | 'rectangle' | 'mobile-banner' | 'inline' | 'responsive';
    className?: string;
    fallback?: React.ReactNode;
}

export default function AdSlot({
    slot,
    format = 'inline',
    className = '',
    fallback,
}: AdSlotProps) {
    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        if (!hasValidPubId) return;

        const timeout = setTimeout(() => {
            try {
                if (typeof window !== 'undefined') {
                    if (adRef.current && adRef.current.innerHTML === '') {
                        (window.adsbygoogle = window.adsbygoogle || []).push({});
                    }
                }
            } catch (err) {
                console.error('AdSense error:', err);
            }
        }, 150);

        return () => clearTimeout(timeout);
    }, [slot]);

    const getAdStyles = () => {
        switch (format) {
            case 'leaderboard':
                return 'w-full max-w-[728px] h-[90px] min-h-[90px] rounded-lg overflow-hidden';
            case 'rectangle':
                return 'w-full max-w-[300px] h-[250px] min-h-[250px] rounded-lg overflow-hidden';
            case 'mobile-banner':
                return 'w-full h-[60px] min-h-[60px] rounded-lg overflow-hidden';
            case 'responsive':
                return 'w-full min-h-[100px] rounded-lg overflow-hidden';
            case 'inline':
            default:
                return 'w-full min-h-[100px] rounded-lg overflow-hidden';
        }
    };

    // No pub ID → show contextual fallback content
    if (!hasValidPubId) {
        return (
            <div className={`ad-wrapper flex justify-center ${className}`}>
                {fallback || null}
            </div>
        );
    }

    // Valid pub ID → show real Google ads
    return (
        <div className={`ad-wrapper flex justify-center ${className}`}>
            <div className={`relative bg-slate-50/50 dark:bg-slate-900/20 ${getAdStyles()}`}>
                <ins
                    ref={adRef}
                    className="adsbygoogle block"
                    data-ad-client={PUB_ID}
                    data-ad-slot={slot}
                    data-ad-format={format === 'inline' ? 'auto' : undefined}
                    data-full-width-responsive="true"
                />
            </div>
        </div>
    );
}

// ─── Pre-built Ad Slot Components ───

// Top Ad - Above the calculator
export function TopAd({ className = '' }: { className?: string }) {
    return (
        <AdSlot
            slot="top-ad"
            format="responsive"
            className={className}
            fallback={<TopFallback />}
        />
    );
}

// Horizontal Banner Ad - Below calculator results
export function HorizontalAd({ className = '' }: { className?: string }) {
    return (
        <AdSlot
            slot="below-calculator-ad"
            format="responsive"
            className={className}
            fallback={<HorizontalFallback />}
        />
    );
}

// In-Article - Within text content
export function InArticleAd({ className = '' }: { className?: string }) {
    return (
        <AdSlot
            slot="in-article-ad"
            format="inline"
            className={`my-8 ${className}`}
            fallback={<InArticleFallback />}
        />
    );
}

// Card Ad - For grid layouts (homepage calculator grid)
export function CardAd({ slot = 'card-ad', className = '' }: { slot?: string; className?: string }) {
    if (!hasValidPubId) {
        // Contextual fallback card matching calculator card style
        const tip = getRandomTip();
        const links = getRandomLinks(2);
        return (
            <div className={`relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 overflow-hidden ${className}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 opacity-50" />
                <div className="relative z-10">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-2xl mb-4 shadow-lg">
                        💡
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                        {tip.title.replace(/^.+\s/, '')}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                        {tip.text}
                    </p>
                    <div className="flex flex-col gap-2">
                        {links.map(link => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="inline-flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-medium transition-colors"
                            >
                                <span>{link.icon}</span>
                                {link.name} →
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    // Valid pub ID → Google ad
    return (
        <div className={`relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 opacity-5" />
            <div className="relative z-10">
                <ins
                    className="adsbygoogle block w-full h-full"
                    data-ad-client={PUB_ID}
                    data-ad-slot={slot}
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                />
            </div>
        </div>
    );
}
