export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            {/* Centered Content Container */}
            <div className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
                <div className="w-full max-w-4xl mx-auto">
                    {/* Page Header */}
                    <div className="text-center mb-12 md:mb-16">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            Contact Us
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Have questions, suggestions, or feedback? We&#39;d love to hear from you.
                            Reach out to us via email and we&#39;ll get back to you as soon as possible.
                        </p>
                    </div>

                    {/* Contact Info Cards */}
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 text-center">
                            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center">
                                <svg className="w-7 h-7 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-2">Email</h3>
                            <p className="text-slate-600 dark:text-slate-400">calcsav@gmail.com</p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 text-center">
                            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                                <svg className="w-7 h-7 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-2">Response Time</h3>
                            <p className="text-slate-600 dark:text-slate-400">Within 24-48 hours</p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-700 text-center">
                            <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center">
                                <svg className="w-7 h-7 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-2">Feedback</h3>
                            <p className="text-slate-600 dark:text-slate-400">Always welcome!</p>
                        </div>
                    </div>

                    {/* Email CTA Section */}
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/50 dark:to-teal-900/50 flex items-center justify-center">
                            <svg className="w-10 h-10 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            Get in Touch
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-md mx-auto">
                            Drop us an email and we&#39;ll respond within 24-48 hours. We value every piece of feedback!
                        </p>
                        <a
                            href="mailto:calcsav@gmail.com"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-emerald-500/30 transition-all text-lg"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Email Us
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
