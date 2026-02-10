import { Metadata } from 'next';
import FDCalculator from '@/components/calculators/FDCalculator';

export async function generateMetadata(): Promise<Metadata> {
    const year = new Date().getFullYear();
    return {
        title: `FD Calculator ${year} - Free Fixed Deposit Maturity Calculator`,
        description: `Calculate fixed deposit maturity amount and interest with our free FD Calculator ${year}. Compare FD returns for different tenures and banks.`,
        keywords: [`FD calculator ${year}`, "fixed deposit calculator", "term deposit calculator", "bank interest calculator", "post office FD"],
    };
}

export default function FDPage() {
    return <FDCalculator />;
}
