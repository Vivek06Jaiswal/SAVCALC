import { Metadata } from 'next';
import StepUpSIPCalculator from '@/components/calculators/StepUpSIPCalculator';

export async function generateMetadata(): Promise<Metadata> {
    const year = new Date().getFullYear();
    return {
        title: `Step-Up SIP Calculator ${year} - Free Annual Increase SIP Calculator`,
        description: `Calculate returns with annual step-up SIP. Free Step-Up SIP Calculator ${year} shows how increasing investments yearly creates more wealth.`,
        keywords: [`step up SIP calculator ${year}`, "annual increase SIP", "top up SIP calculator", "SIP with yearly increment", "mutual fund step up"],
    };
}

export default function StepUpSIPPage() {
    return <StepUpSIPCalculator />;
}
