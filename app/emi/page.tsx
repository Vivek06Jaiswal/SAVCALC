import { Metadata } from 'next';
import EMICalculator from '@/components/calculators/EMICalculator';

export async function generateMetadata(): Promise<Metadata> {
    const year = new Date().getFullYear();
    return {
        title: `EMI Calculator ${year} - Free Loan EMI Calculator`,
        description: `Calculate your Home Loan, Car Loan & Personal Loan EMI with our free EMI Calculator ${year}. Get detailed payment schedule and interest breakdown.`,
        keywords: [`EMI calculator ${year}`, "loan calculator", "home loan EMI", "car loan EMI", "personal loan calculator"],
    };
}

export default function EMIPage() {
    return <EMICalculator />;
}
