import { Metadata } from 'next';
import { createCalculatorMetadata, createFAQSchema, createSoftwareApplicationSchema } from '@/lib/seo';
import { rdFAQs } from '@/lib/faq-data';
import JsonLd from '@/components/JsonLd';

export function generateMetadata(): Metadata {
    return createCalculatorMetadata({
        name: 'RD Calculator',
        slug: 'rd',
        title: 'Free RD Calculator',
        description: 'Calculate Recurring Deposit maturity amount and interest earned. Plan your monthly savings with our free RD calculator.',
        keywords: ['RD calculator', 'recurring deposit calculator', 'RD interest calculator', 'monthly savings calculator'],
    });
}

export default function RDLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <JsonLd data={createSoftwareApplicationSchema({
                name: 'RD Calculator',
                description: 'Free recurring deposit calculator to estimate maturity value and interest earned.',
                slug: 'rd',
            })} />
            <JsonLd data={createFAQSchema(rdFAQs)} />
            {children}
        </>
    );
}
