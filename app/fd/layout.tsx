import { Metadata } from 'next';
import { createCalculatorMetadata, createFAQSchema, createSoftwareApplicationSchema } from '@/lib/seo';
import { fdFAQs } from '@/lib/faq-data';
import JsonLd from '@/components/JsonLd';

export function generateMetadata(): Metadata {
    return createCalculatorMetadata({
        name: 'FD Calculator',
        slug: 'fd',
        title: 'Free FD Calculator',
        description: 'Calculate Fixed Deposit maturity amount and interest earned. Compare FD rates and tenures with our free FD calculator.',
        keywords: ['FD calculator', 'fixed deposit calculator', 'FD interest calculator', 'bank deposit returns'],
    });
}

export default function FDLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <JsonLd data={createSoftwareApplicationSchema({
                name: 'FD Calculator',
                description: 'Free fixed deposit calculator to estimate maturity amount and interest earned.',
                slug: 'fd',
            })} />
            <JsonLd data={createFAQSchema(fdFAQs)} />
            {children}
        </>
    );
}
