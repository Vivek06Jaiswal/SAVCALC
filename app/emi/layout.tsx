import { Metadata } from 'next';
import { createCalculatorMetadata, createFAQSchema, createSoftwareApplicationSchema } from '@/lib/seo';
import { emiFAQs } from '@/lib/faq-data';
import JsonLd from '@/components/JsonLd';

export function generateMetadata(): Metadata {
    return createCalculatorMetadata({
        name: 'EMI Calculator',
        slug: 'emi',
        title: 'Free EMI Calculator',
        description: 'Calculate loan EMI for home loans, car loans, and personal loans. See total interest payable and monthly payment breakdown.',
        keywords: ['EMI calculator', 'home loan EMI', 'car loan calculator', 'personal loan EMI', 'loan calculator'],
    });
}

export default function EMILayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <JsonLd data={createSoftwareApplicationSchema({
                name: 'EMI Calculator',
                description: 'Free EMI calculator for home loans, car loans, and personal loans.',
                slug: 'emi',
            })} />
            <JsonLd data={createFAQSchema(emiFAQs)} />
            {children}
        </>
    );
}
