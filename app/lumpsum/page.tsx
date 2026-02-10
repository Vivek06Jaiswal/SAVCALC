import { Metadata } from 'next';
import LumpsumCalculator from '@/components/calculators/LumpsumCalculator';

export async function generateMetadata(): Promise<Metadata> {
    const year = new Date().getFullYear();
    return {
        title: `Lumpsum Calculator ${year} - Free One-time Investment Calculator`,
        description: `Calculate lumpsum investment returns with our free tool ${year}. Estimate the future value of your one-time mutual fund investment.`,
        keywords: [`lumpsum calculator ${year}`, "one time investment calculator", "mutual fund lumpsum", "investment return calculator", "FD vs mutual fund"],
    };
}

export default function LumpsumPage() {
    return <LumpsumCalculator />;
}
