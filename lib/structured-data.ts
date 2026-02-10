
export function generateSoftwareAppSchema(name: string, description: string, url: string, imageUrl: string) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: name,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Any',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'INR',
        },
        description: description,
        url: url,
        image: imageUrl,
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '1250',
        },
        author: {
            '@type': 'Organization',
            name: 'SavCalc',
            url: 'https://savcalc.com'
        }
    };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}
