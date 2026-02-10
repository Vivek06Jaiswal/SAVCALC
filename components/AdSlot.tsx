'use client';

import { useEffect, useRef } from 'react';

declare global {
    interface Window {
        adsbygoogle: unknown[];
    }
}

interface AdSlotProps {
    slot: string;
    format?: 'leaderboard' | 'rectangle' | 'mobile-banner' | 'inline' | 'responsive';
    className?: string;
}

export default function AdSlot({
    slot,
    format = 'inline',
    className = ''
}: AdSlotProps) {
    const adRef = useRef<HTMLModElement>(null);

    useEffect(() => {
        // We wrap it in a small timeout to ensure the DOM is fully ready 
        // for the Google script to "find" our <ins> tag.
        const timeout = setTimeout(() => {
            try {
                if (typeof window !== 'undefined') {
                    // Check if an ad is already inside to prevent "Duplicate" errors
                    if (adRef.current && adRef.current.innerHTML === '') {
                        (window.adsbygoogle = window.adsbygoogle || []).push({});
                    }
                }
            } catch (err) {
                console.error('AdSense error:', err);
            }
        }, 150);

        return () => clearTimeout(timeout);
    }, [slot]); // Re-run if the slot changes (important for page transitions)

    const getAdStyles = () => {
        switch (format) {
            case 'leaderboard':
                return 'w-full max-w-[728px] h-[90px] min-h-[90px] rounded-lg overflow-hidden';
            case 'rectangle':
                return 'w-full max-w-[300px] h-[250px] min-h-[250px] rounded-lg overflow-hidden';
            case 'mobile-banner':
                return 'w-full h-[60px] min-h-[60px] rounded-lg overflow-hidden';
            case 'responsive':
                // Responsive ads need a min-height to prevent 0-height collapse before load
                return 'w-full min-h-[100px] rounded-lg overflow-hidden';
            case 'inline':
            default:
                return 'w-full min-h-[100px] rounded-lg overflow-hidden';
        }
    };

    return (
        <div className={`ad-wrapper flex justify-center ${className}`}>
            <div className={`relative bg-slate-50/50 dark:bg-slate-900/20 ${getAdStyles()}`}>
                <ins
                    ref={adRef}
                    className="adsbygoogle block"
                    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" // PUT YOUR PUBLISHER ID HERE
                    data-ad-slot={slot}
                    data-ad-format={format === 'inline' ? 'auto' : undefined}
                    data-full-width-responsive="true"
                />

                {/* Dev Mode UI */}
                {process.env.NODE_ENV === 'development' && (
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 border border-dashed border-slate-300 dark:border-slate-600 rounded-lg flex items-center justify-center pointer-events-none">
                        <span className="text-slate-400 dark:text-slate-500 text-xs font-bold uppercase tracking-widest">
                            Ad Slot: {format}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}

// Top Ad - Above the calculator, responsive on all devices
export function TopAd({ className = '' }: { className?: string }) {
    return (
        <AdSlot
            slot="top-ad"
            format="responsive"
            className={className}
        />
    );
}

// Horizontal Banner Ad - Below calculator results, responsive on all devices
export function HorizontalAd({ className = '' }: { className?: string }) {
    return (
        <AdSlot
            slot="below-calculator-ad"
            format="responsive"
            className={className}
        />
    );
}

// In-Article - Within text content, responsive on all devices
export function InArticleAd({ className = '' }: { className?: string }) {
    return (
        <AdSlot
            slot="in-article-ad"
            format="inline"
            className={`my-8 ${className}`}
        />
    );
}

// Sticky Bottom Ad - For mobile only
// High visibility, non-intrusive, horizontal format
export function StickyBottomAd() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700 py-1.5 px-2 safe-area-inset-bottom shadow-lg">
            <AdSlot
                slot="sticky-bottom-320x50"
                format="mobile-banner"
                className="!min-h-[50px]"
            />
        </div>
    );
}

// Card Ad - For grid layouts (homepage calculator grid)
// Matches the exact card styling of calculator cards
// In dev: shows clean placeholder. In production: shows Google ads.
export function CardAd({ slot = 'card-ad', className = '' }: { slot?: string; className?: string }) {
    const isDev = process.env.NODE_ENV === 'development';

    return (
        <div className={`relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 overflow-hidden ${className}`}>
            {/* Gradient overlay - same as calculator cards */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 opacity-5" />

            <div className="relative z-10">
                {/* Development placeholder - clean card matching calculator style */}
                {isDev ? (
                    <>
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-500 flex items-center justify-center text-2xl mb-4 shadow-lg">
                            📢
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                            Sponsored
                        </h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            Advertisement space for relevant financial products and services
                        </p>
                    </>
                ) : (
                    /* Production - Google will render their ad content here */
                    <ins
                        className="adsbygoogle block w-full h-full"
                        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                        data-ad-slot={slot}
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    />
                )}
            </div>
        </div>
    );
}
