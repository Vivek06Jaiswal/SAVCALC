import { Metadata } from 'next';
import { createCalculatorMetadata, createFAQSchema, createSoftwareApplicationSchema } from '@/lib/seo';
import { sipFAQs } from '@/lib/faq-data';
import JsonLd from '@/components/JsonLd';

export function generateMetadata(): Metadata {
    return createCalculatorMetadata({
        name: 'SIP Calculator',
        slug: 'sip',
        title: 'Free SIP Calculator',
        description: 'Calculate your SIP returns with our free online calculator. Plan your mutual fund investments, see projected growth, and achieve your financial goals.',
        keywords: ['SIP calculator', 'mutual fund calculator', 'investment calculator', 'SIP returns', 'systematic investment plan'],
    });
}

export default function SIPLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <JsonLd data={createSoftwareApplicationSchema({
                name: 'SIP Calculator',
                description: 'Free online SIP calculator to estimate mutual fund returns with compound interest.',
                slug: 'sip',
            })} />
            <JsonLd data={createFAQSchema(sipFAQs)} />
            {children}
        </>
    );
}
