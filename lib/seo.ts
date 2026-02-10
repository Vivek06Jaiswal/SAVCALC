import { Metadata } from 'next';

const SITE_NAME = 'SavCalc';
const SITE_URL = 'https://savcalc.com';

interface CalculatorMetaConfig {
    name: string;           // e.g. "SIP Calculator"
    slug: string;           // e.g. "sip"
    title: string;          // e.g. "Free SIP Calculator"
    description: string;
    keywords: string[];
}

/**
 * Generates Next.js Metadata with a dynamic year.
 * Called from each calculator's layout.tsx via generateMetadata().
 */
export function createCalculatorMetadata(config: CalculatorMetaConfig): Metadata {
    const year = new Date().getFullYear();
    const fullTitle = `${config.title} ${year} | ${SITE_NAME}`;

    return {
        title: fullTitle,
        description: config.description,
        keywords: config.keywords,
        openGraph: {
            title: fullTitle,
            description: config.description,
            type: 'website',
            url: `${SITE_URL}/${config.slug}`,
            siteName: SITE_NAME,
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description: config.description,
        },
        alternates: {
            canonical: `${SITE_URL}/${config.slug}`,
        },
    };
}

interface FAQItem {
    question: string;
    answer: string;
}

/**
 * Creates a FAQPage JSON-LD schema from an array of FAQ items.
 */
export function createFAQSchema(faqs: FAQItem[]) {
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

interface SoftwareAppConfig {
    name: string;
    description: string;
    slug: string;
}

/**
 * Creates a SoftwareApplication JSON-LD schema for a calculator page.
 */
export function createSoftwareApplicationSchema(config: SoftwareAppConfig) {
    return {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: `${config.name} - ${SITE_NAME}`,
        description: config.description,
        url: `${SITE_URL}/${config.slug}`,
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'All',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '1250',
            bestRating: '5',
            worstRating: '1',
        },
    };
}
