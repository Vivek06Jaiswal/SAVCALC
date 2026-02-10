import Link from 'next/link';

const calculators = [
    { name: 'SIP Calculator', href: '/sip' },
    { name: 'Step-Up SIP', href: '/step-up-sip' },
    { name: 'Lumpsum', href: '/lumpsum' },
    { name: 'SWP Calculator', href: '/swp' },
    { name: 'FD Calculator', href: '/fd' },
    { name: 'RD Calculator', href: '/rd' },
    { name: 'EMI Calculator', href: '/emi' },
];

const legal = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
];

export default function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                                SavCalc
                            </span>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md">
                            Your trusted destination for accurate financial calculations. Plan your investments,
                            loans, and savings with our comprehensive suite of free financial calculators.
                        </p>
                    </div>

                    {/* Calculators */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Calculators</h3>
                        <ul className="space-y-2">
                            {calculators.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Legal</h3>
                        <ul className="space-y-2">
                            {legal.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            © {new Date().getFullYear()} SavCalc. All rights reserved.
                        </p>
                        <p className="text-xs text-slate-400 dark:text-slate-500 text-center max-w-md">
                            Disclaimer: These calculators are for educational purposes only.
                            Please consult a financial advisor for professional advice.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
