import { Metadata } from 'next';
import { createCalculatorMetadata, createFAQSchema, createSoftwareApplicationSchema } from '@/lib/seo';
import { swpFAQs } from '@/lib/faq-data';
import JsonLd from '@/components/JsonLd';

export function generateMetadata(): Metadata {
    return createCalculatorMetadata({
        name: 'SWP Calculator',
        slug: 'swp',
        title: 'Free SWP Calculator',
        description: 'Calculate SWP returns and plan regular income from your investments. See how long your corpus will last with systematic withdrawals.',
        keywords: ['SWP calculator', 'systematic withdrawal plan', 'retirement income calculator', 'mutual fund withdrawal'],
    });
}

export default function SWPLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <JsonLd data={createSoftwareApplicationSchema({
                name: 'SWP Calculator',
                description: 'Free SWP calculator to plan systematic withdrawals from your investment corpus.',
                slug: 'swp',
            })} />
            <JsonLd data={createFAQSchema(swpFAQs)} />
            {children}
        </>
    );
}
