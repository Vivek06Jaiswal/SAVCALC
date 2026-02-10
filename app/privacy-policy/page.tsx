import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | SavCalc',
    description: 'Privacy Policy for SavCalc - Learn how we handle your data, our cookie policy, and financial disclaimer.',
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            {/* Centered Content Container */}
            <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                <div className="w-full max-w-4xl mx-auto">
                    {/* Page Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-slate-500 dark:text-slate-400 text-lg">
                            Last updated: February 9, 2026
                        </p>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-8 md:space-y-10">
                        {/* Introduction */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-5">
                                Introduction
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                                Welcome to SavCalc (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting
                                your privacy and ensuring you have a positive experience on our website. This
                                Privacy Policy explains how we collect, use, disclose, and safeguard your
                                information when you visit our website.
                            </p>
                        </section>

                        {/* Information We Collect */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-5">
                                Information We Collect
                            </h2>

                            <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-3">
                                Automatically Collected Information
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                                When you visit our website, we may automatically collect certain information, including:
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 space-y-2 mb-8">
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>Pages visited and time spent</li>
                                <li>Referring website</li>
                                <li>IP address (anonymized)</li>
                                <li>Device type</li>
                            </ul>

                            <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-3">
                                Calculator Input Data
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                <strong>Important:</strong> All financial calculations are performed locally in your
                                browser. We do not collect, store, or transmit any of the financial data you
                                enter into our calculators, including investment amounts, interest rates, or
                                any personal financial information.
                            </p>
                        </section>

                        {/* Cookie Disclosure */}
                        <section className="bg-amber-50 dark:bg-amber-900/20 rounded-2xl p-6 md:p-8 lg:p-10 border border-amber-200 dark:border-amber-700">
                            <h2 className="text-xl md:text-2xl font-bold text-amber-800 dark:text-amber-200 mb-4 md:mb-5">
                                🍪 Cookie Disclosure for Google AdSense
                            </h2>
                            <p className="text-amber-700 dark:text-amber-300 mb-6 leading-relaxed">
                                We use Google AdSense to display advertisements on our website. Google AdSense
                                and its partners may use cookies and similar technologies to serve ads based
                                on your prior visits to our website or other websites.
                            </p>

                            <h3 className="font-semibold text-amber-800 dark:text-amber-200 text-lg mb-3">
                                What are cookies?
                            </h3>
                            <p className="text-amber-700 dark:text-amber-300 mb-6 leading-relaxed">
                                Cookies are small text files stored on your device that help websites remember
                                information about your visit, such as your preferred language and other settings.
                            </p>

                            <h3 className="font-semibold text-amber-800 dark:text-amber-200 text-lg mb-3">
                                Types of cookies used:
                            </h3>
                            <ul className="list-disc pl-6 text-amber-700 dark:text-amber-300 space-y-3 mb-6">
                                <li><strong>Essential cookies:</strong> Required for website functionality (theme preference, currency selection)</li>
                                <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
                                <li><strong>Advertising cookies:</strong> Used by Google AdSense to show relevant ads</li>
                            </ul>

                            <h3 className="font-semibold text-amber-800 dark:text-amber-200 text-lg mb-3">
                                How to manage cookies:
                            </h3>
                            <p className="text-amber-700 dark:text-amber-300 mb-3">
                                You can control and manage cookies in several ways:
                            </p>
                            <ul className="list-disc pl-6 text-amber-700 dark:text-amber-300 space-y-3">
                                <li>
                                    Visit <a href="https://www.google.com/settings/ads" className="underline font-medium" target="_blank" rel="noopener noreferrer">
                                        Google&#39;s Ad Settings
                                    </a> to manage ad personalization
                                </li>
                                <li>
                                    Use <a href="https://optout.aboutads.info/" className="underline font-medium" target="_blank" rel="noopener noreferrer">
                                        aboutads.info
                                    </a> to opt out of personalized advertising
                                </li>
                                <li>Adjust your browser settings to block or delete cookies</li>
                                <li>Use private/incognito browsing mode</li>
                            </ul>
                        </section>

                        {/* Financial Disclaimer */}
                        <section className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-6 md:p-8 lg:p-10 border border-red-200 dark:border-red-700">
                            <h2 className="text-xl md:text-2xl font-bold text-red-800 dark:text-red-200 mb-4 md:mb-5">
                                ⚠️ Financial Disclaimer
                            </h2>
                            <p className="text-red-700 dark:text-red-300 mb-6 leading-relaxed font-medium">
                                The calculators and tools provided on SavCalc are for educational
                                and informational purposes only.
                            </p>

                            <div className="space-y-5 text-red-700 dark:text-red-300">
                                <p className="leading-relaxed">
                                    <strong>Not Financial Advice:</strong> The information and calculations provided
                                    on this website do not constitute financial, investment, tax, or legal advice.
                                    We are not registered financial advisors, investment advisors, or tax professionals.
                                </p>

                                <p className="leading-relaxed">
                                    <strong>No Guarantee of Accuracy:</strong> While we strive to provide accurate
                                    calculations using standard financial formulas, we cannot guarantee the accuracy,
                                    completeness, or timeliness of the information. Market conditions, interest rates,
                                    and financial products change frequently.
                                </p>

                                <p className="leading-relaxed">
                                    <strong>Actual Results May Vary:</strong> The projections and estimates provided
                                    by our calculators are based on the inputs you provide and historical averages.
                                    Actual investment returns, loan terms, and deposit rates may differ significantly.
                                </p>

                                <p className="leading-relaxed">
                                    <strong>Consult a Professional:</strong> Before making any financial decisions,
                                    we strongly recommend consulting with qualified financial advisors, tax
                                    professionals, or legal counsel who can provide personalized advice based
                                    on your specific circumstances.
                                </p>

                                <p className="leading-relaxed">
                                    <strong>No Liability:</strong> SavCalc and its operators shall not be held
                                    liable for any losses, damages, or financial decisions made based on the
                                    information or calculations provided on this website.
                                </p>
                            </div>
                        </section>

                        {/* Third-Party Links */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-5">
                                Third-Party Links
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                                Our website may contain links to third-party websites. We are not responsible
                                for the privacy practices or content of these external sites. We encourage
                                you to read the privacy policies of any third-party websites you visit.
                            </p>
                        </section>

                        {/* Data Security */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-5">
                                Data Security
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                                We implement industry-standard security measures to protect the limited
                                information we collect. However, no method of transmission over the Internet
                                or electronic storage is 100% secure. We strive to use commercially acceptable
                                means to protect your information but cannot guarantee absolute security.
                            </p>
                        </section>

                        {/* Children's Privacy */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-5">
                                Children&#39;s Privacy
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                                Our website is not intended for children under the age of 13. We do not
                                knowingly collect personal information from children under 13. If you believe
                                we have collected information from a child under 13, please contact us
                                immediately.
                            </p>
                        </section>

                        {/* Changes to Policy */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-5">
                                Changes to This Privacy Policy
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                                We may update this Privacy Policy from time to time. We will notify you of
                                any changes by posting the new Privacy Policy on this page and updating the
                                &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically
                                for any changes.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-200 dark:border-slate-700">
                            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-4 md:mb-5">
                                Contact Us
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-5 leading-relaxed text-base md:text-lg">
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <ul className="text-slate-600 dark:text-slate-400 space-y-3 text-base md:text-lg">
                                <li><strong>Email:</strong> calcsav@gmail.com</li>
                                <li><strong>Website:</strong> <a href="/contact" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">Contact Form</a></li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
