import { Metadata } from 'next';
import RDCalculator from '@/components/calculators/RDCalculator';

export async function generateMetadata(): Promise<Metadata> {
    const year = new Date().getFullYear();
    return {
        title: `RD Calculator ${year} - Free Recurring Deposit Maturity Calculator`,
        description: `Calculate RD maturity amount and interest with our free Recurring Deposit Calculator ${year}. Plan your monthly savings with guaranteed returns.`,
        keywords: [`RD calculator ${year}`, "recurring deposit calculator", "post office RD calculator", "bank RD interest", "monthly savings calculator"],
    };
}

export default function RDPage() {
    return <RDCalculator />;
}
