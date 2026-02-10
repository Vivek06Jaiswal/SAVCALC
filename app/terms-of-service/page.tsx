import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | SavCalc',
    description: 'Terms of Service for SavCalc - Read about the terms and conditions governing your use of our financial calculators.',
};

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                <div className="w-full max-w-4xl mx-auto">
                    {/* Page Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">
                            Last updated: February 10, 2026
                        </p>
                    </div>

                    <div className="space-y-8 md:space-y-10">
                        {/* Acceptance */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-5">
                                1. Acceptance of Terms
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                                By accessing and using SavCalc (&quot;the Website&quot;), you accept and agree to be bound
                                by these Terms of Service. If you do not agree to these terms, please do not use
                                our website. We reserve the right to modify these terms at any time, and your
                                continued use of the Website constitutes acceptance of any changes.
                            </p>
                        </section>

                        {/* Description of Service */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-5">
                                2. Description of Service
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg mb-4">
                                SavCalc provides free online financial calculators including but not limited to:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2 text-base md:text-lg">
                                <li>SIP (Systematic Investment Plan) Calculator</li>
                                <li>Step-Up SIP Calculator</li>
                                <li>Lumpsum Investment Calculator</li>
                                <li>SWP (Systematic Withdrawal Plan) Calculator</li>
                                <li>FD (Fixed Deposit) Calculator</li>
                                <li>RD (Recurring Deposit) Calculator</li>
                                <li>EMI (Equated Monthly Installment) Calculator</li>
                            </ul>
                        </section>

                        {/* Disclaimer */}
                        <section className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 md:p-8 lg:p-10 border border-amber-200 dark:border-amber-700">
                            <h2 className="text-xl md:text-2xl font-bold text-amber-800 dark:text-amber-200 mb-4 md:mb-5">
                                ⚠️ 3. Financial Disclaimer
                            </h2>
                            <div className="space-y-4 text-amber-700 dark:text-amber-300">
                                <p className="leading-relaxed">
                                    <strong>Not Financial Advice:</strong> The calculators and information provided on
                                    this Website are for educational and informational purposes only. They do not
                                    constitute financial, investment, tax, or legal advice.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>No Guarantees:</strong> While we strive for accuracy, we make no warranties
                                    or guarantees regarding the accuracy, reliability, or completeness of any
                                    calculations or information. Actual financial results may vary significantly
                                    from projections.
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Professional Advice:</strong> Always consult qualified financial advisors,
                                    tax professionals, or legal counsel before making any financial decisions.
                                </p>
                            </div>
                        </section>

                        {/* User Responsibilities */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-5">
                                4. User Responsibilities
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg mb-4">
                                By using this Website, you agree to:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2 text-base md:text-lg">
                                <li>Use the calculators and tools for lawful purposes only</li>
                                <li>Not attempt to disrupt, damage, or interfere with the Website&apos;s functionality</li>
                                <li>Not use automated tools to scrape or harvest data from the Website</li>
                                <li>Not attempt to reverse-engineer any part of the Website</li>
                                <li>Verify all calculations independently before making financial decisions</li>
                            </ul>
                        </section>

                        {/* Intellectual Property */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-5">
                                5. Intellectual Property
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                                All content, design, graphics, logos, and software on this Website are the
                                property of SavCalc and are protected by applicable copyright and trademark
                                laws. You may not reproduce, distribute, modify, or create derivative works
                                from any content on this Website without our prior written consent.
                            </p>
                        </section>

                        {/* Limitation of Liability */}
                        <section className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 md:p-8 lg:p-10 border border-red-200 dark:border-red-700">
                            <h2 className="text-xl md:text-2xl font-bold text-red-800 dark:text-red-200 mb-4 md:mb-5">
                                6. Limitation of Liability
                            </h2>
                            <div className="space-y-4 text-red-700 dark:text-red-300">
                                <p className="leading-relaxed">
                                    To the fullest extent permitted by law, SavCalc and its operators shall not
                                    be liable for any direct, indirect, incidental, special, consequential, or
                                    punitive damages arising from:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Your use of or inability to use the Website</li>
                                    <li>Any errors or inaccuracies in calculations or content</li>
                                    <li>Any financial decisions made based on information from the Website</li>
                                    <li>Unauthorized access to or alteration of your data</li>
                                    <li>Any interruption or cessation of the Website&apos;s services</li>
                                </ul>
                            </div>
                        </section>

                        {/* Third-Party Content */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-5">
                                7. Third-Party Content &amp; Advertising
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg mb-4">
                                This Website displays advertisements through Google AdSense. We are not
                                responsible for the content, accuracy, or practices of third-party advertisements
                                or the websites they link to.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                                Any links to external websites are provided for convenience only. We do not
                                endorse or assume responsibility for the content or policies of third-party
                                websites.
                            </p>
                        </section>

                        {/* Privacy */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-5">
                                8. Privacy
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                                Your use of this Website is also governed by our{' '}
                                <a href="/privacy-policy" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
                                    Privacy Policy
                                </a>
                                , which explains how we collect, use, and protect your information.
                            </p>
                        </section>

                        {/* Termination */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-5">
                                9. Termination
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                                We reserve the right to restrict or terminate your access to the Website at
                                any time, without notice, for any reason, including violation of these Terms
                                of Service.
                            </p>
                        </section>

                        {/* Governing Law */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-5">
                                10. Governing Law
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                                These Terms of Service shall be governed by and construed in accordance with
                                the laws of India. Any disputes arising from these terms shall be subject to
                                the exclusive jurisdiction of the courts of India.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-5">
                                11. Contact Us
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed text-base md:text-lg">
                                If you have any questions about these Terms of Service, please contact us at:
                            </p>
                            <ul className="text-slate-600 dark:text-slate-400 space-y-3 text-base md:text-lg">
                                <li><strong>Email:</strong> calcsav@gmail.com</li>
                                <li><strong>Website:</strong> <a href="/contact" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">Contact Page</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
