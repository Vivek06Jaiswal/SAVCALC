import { Metadata } from 'next';
import { createCalculatorMetadata, createFAQSchema, createSoftwareApplicationSchema } from '@/lib/seo';
import { stepUpSipFAQs } from '@/lib/faq-data';
import JsonLd from '@/components/JsonLd';

export function generateMetadata(): Metadata {
    return createCalculatorMetadata({
        name: 'Step-Up SIP Calculator',
        slug: 'step-up-sip',
        title: 'Free Step-Up SIP Calculator',
        description: 'Calculate Step-Up SIP returns with annual investment increase. Plan your incremental investing strategy and maximize wealth creation.',
        keywords: ['step-up SIP calculator', 'top-up SIP', 'incremental SIP', 'SIP with annual increase'],
    });
}

export default function StepUpSIPLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <JsonLd data={createSoftwareApplicationSchema({
                name: 'Step-Up SIP Calculator',
                description: 'Free Step-Up SIP calculator with annual increment to maximize wealth creation.',
                slug: 'step-up-sip',
            })} />
            <JsonLd data={createFAQSchema(stepUpSipFAQs)} />
            {children}
        </>
    );
}
