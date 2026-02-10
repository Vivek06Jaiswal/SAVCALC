import { Metadata } from 'next';
import SIPCalculator from '@/components/calculators/SIPCalculator';

export async function generateMetadata(): Promise<Metadata> {
    const year = new Date().getFullYear();
    return {
        title: `SIP Calculator ${year} - Free Systematic Investment Plan Calculator`,
        description: `Calculate your SIP returns with our free SIP Calculator ${year}. Estimate future value of your monthly mutual fund investments with inflation adjustment.`,
        keywords: [`SIP calculator ${year}`, "systematic investment plan", "mutual fund calculator", "SIP return calculator", "investment planner"],
    };
}

export default function SIPPage() {
    return <SIPCalculator />;
}
