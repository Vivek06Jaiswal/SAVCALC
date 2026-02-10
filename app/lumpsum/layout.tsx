import { Metadata } from 'next';
import { createCalculatorMetadata, createFAQSchema, createSoftwareApplicationSchema } from '@/lib/seo';
import { lumpsumFAQs } from '@/lib/faq-data';
import JsonLd from '@/components/JsonLd';

export function generateMetadata(): Metadata {
    return createCalculatorMetadata({
        name: 'Lumpsum Calculator',
        slug: 'lumpsum',
        title: 'Free Lumpsum Calculator',
        description: 'Calculate lumpsum investment returns with compound interest. See how your one-time investment can grow over time.',
        keywords: ['lumpsum calculator', 'one-time investment calculator', 'compound interest calculator', 'investment returns'],
    });
}

export default function LumpsumLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <JsonLd data={createSoftwareApplicationSchema({
                name: 'Lumpsum Calculator',
                description: 'Free lumpsum investment calculator to estimate one-time investment growth with compound interest.',
                slug: 'lumpsum',
            })} />
            <JsonLd data={createFAQSchema(lumpsumFAQs)} />
            {children}
        </>
    );
}
