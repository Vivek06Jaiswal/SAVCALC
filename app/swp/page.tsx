import { Metadata } from 'next';
import SWPCalculator from '@/components/calculators/SWPCalculator';

export async function generateMetadata(): Promise<Metadata> {
    const year = new Date().getFullYear();
    return {
        title: `SWP Calculator ${year} - Free Systematic Withdrawal Plan Calculator`,
        description: `Calculate your monthly withdrawals with our free SWP Calculator ${year}. Plan your retirement income from mutual funds systematically.`,
        keywords: [`SWP calculator ${year}`, "systematic withdrawal plan", "mutual fund withdrawal", "retirement income calculator", "pension calculator"],
    };
}

export default function SWPPage() {
    return <SWPCalculator />;
}
