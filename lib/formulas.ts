/**
 * Financial Formulas Library
 * Contains all calculation logic for the Global Finance Hub
 */

// ============================================
// SIP (Systematic Investment Plan) Calculator
// Formula: M = P × ({[1 + i]^n – 1} / i) × (1 + i)
// ============================================
export interface SIPResult {
  totalInvestment: number;
  estimatedReturns: number;
  totalValue: number;
}

export function calculateSIP(
  monthlyInvestment: number,
  expectedReturnRate: number,
  timePeriodYears: number
): SIPResult {
  const monthlyRate = expectedReturnRate / 12 / 100;
  const months = timePeriodYears * 12;

  if (monthlyRate === 0) {
    const totalInvestment = monthlyInvestment * months;
    return {
      totalInvestment,
      estimatedReturns: 0,
      totalValue: totalInvestment
    };
  }

  const totalValue = monthlyInvestment *
    ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
    (1 + monthlyRate);

  const totalInvestment = monthlyInvestment * months;
  const estimatedReturns = totalValue - totalInvestment;

  return {
    totalInvestment,
    estimatedReturns,
    totalValue
  };
}

// ============================================
// Step-Up SIP Calculator
// SIP with annual step-up (increase) percentage
// ============================================
export interface StepUpSIPResult {
  totalInvestment: number;
  estimatedReturns: number;
  totalValue: number;
  yearWiseBreakdown: Array<{
    year: number;
    monthlyAmount: number;
    yearlyInvestment: number;
    yearEndValue: number;
  }>;
}

export function calculateStepUpSIP(
  initialMonthlyInvestment: number,
  annualStepUpPercent: number,
  expectedReturnRate: number,
  timePeriodYears: number
): StepUpSIPResult {
  const monthlyRate = expectedReturnRate / 12 / 100;
  let totalValue = 0;
  let totalInvestment = 0;
  const yearWiseBreakdown = [];
  let currentMonthly = initialMonthlyInvestment;

  for (let year = 1; year <= timePeriodYears; year++) {
    const yearlyInvestment = currentMonthly * 12;

    for (let month = 1; month <= 12; month++) {
      totalValue = (totalValue + currentMonthly) * (1 + monthlyRate);
    }

    totalInvestment += yearlyInvestment;
    yearWiseBreakdown.push({
      year,
      monthlyAmount: currentMonthly,
      yearlyInvestment,
      yearEndValue: totalValue
    });

    currentMonthly = currentMonthly * (1 + annualStepUpPercent / 100);
  }

  return {
    totalInvestment,
    estimatedReturns: totalValue - totalInvestment,
    totalValue,
    yearWiseBreakdown
  };
}

// ============================================
// Lumpsum Calculator
// Formula: A = P(1 + r/n)^(nt)
// ============================================
export interface LumpsumResult {
  principal: number;
  estimatedReturns: number;
  totalValue: number;
}

export function calculateLumpsum(
  principal: number,
  expectedReturnRate: number,
  timePeriodYears: number,
  compoundingFrequency: number = 12 // Monthly compounding by default
): LumpsumResult {
  const rate = expectedReturnRate / 100;
  const totalValue = principal * Math.pow(1 + rate / compoundingFrequency, compoundingFrequency * timePeriodYears);
  const estimatedReturns = totalValue - principal;

  return {
    principal,
    estimatedReturns,
    totalValue
  };
}

// ============================================
// SWP (Systematic Withdrawal Plan) Calculator
// ============================================
export interface SWPResult {
  initialInvestment: number;
  totalWithdrawal: number;
  totalWithdrawn: number; // Alias for totalWithdrawal
  finalBalance: number;
  monthsLasted: number;
  durationMonths: number; // Alias for monthsLasted
  monthlyBreakdown: Array<{
    month: number;
    openingBalance: number;
    withdrawal: number;
    interest: number;
    closingBalance: number;
  }>;
}

export function calculateSWP(
  initialInvestment: number,
  monthlyWithdrawal: number,
  expectedReturnRate: number,
  timePeriodYears?: number // Optional - if not provided, calculates until balance runs out
): SWPResult {
  const monthlyRate = expectedReturnRate / 12 / 100;
  // If timePeriodYears not provided, use a very long period (100 years) and let it run until balance depletes
  const maxMonths = timePeriodYears ? timePeriodYears * 12 : 1200;
  let balance = initialInvestment;
  let totalWithdrawal = 0;
  let monthsLasted = 0;
  const monthlyBreakdown = [];

  for (let month = 1; month <= maxMonths; month++) {
    if (balance <= 0) break;

    const openingBalance = balance;
    const interest = balance * monthlyRate;
    balance += interest;

    const withdrawal = Math.min(monthlyWithdrawal, balance);
    balance -= withdrawal;
    totalWithdrawal += withdrawal;
    monthsLasted = month;

    monthlyBreakdown.push({
      month,
      openingBalance,
      withdrawal,
      interest,
      closingBalance: balance
    });

    if (balance <= 0) break;
  }

  return {
    initialInvestment,
    totalWithdrawal,
    totalWithdrawn: totalWithdrawal, // Alias
    finalBalance: Math.max(0, balance),
    monthsLasted,
    durationMonths: monthsLasted, // Alias
    monthlyBreakdown
  };
}

// ============================================
// FD (Fixed Deposit) Calculator
// Formula: A = P(1 + r/n)^(nt) for compound interest
// Or A = P(1 + rt) for simple interest
// ============================================
export interface FDResult {
  principal: number;
  interestEarned: number;
  maturityValue: number;
}

export function calculateFD(
  principal: number,
  interestRate: number,
  timePeriodYears: number,
  compoundingFrequency: number = 4, // Quarterly compounding is common for FD
  isSimpleInterest: boolean = false
): FDResult {
  const rate = interestRate / 100;
  let maturityValue: number;

  if (isSimpleInterest) {
    maturityValue = principal * (1 + rate * timePeriodYears);
  } else {
    maturityValue = principal * Math.pow(1 + rate / compoundingFrequency, compoundingFrequency * timePeriodYears);
  }

  return {
    principal,
    interestEarned: maturityValue - principal,
    maturityValue
  };
}

// ============================================
// RD (Recurring Deposit) Calculator
// Formula: M = P × [(1 + r/n)^(nt) - 1] / (1 - (1 + r/n)^(-1/3))
// Simplified for quarterly compounding
// ============================================
export interface RDResult {
  monthlyDeposit: number;
  totalDeposit: number;
  interestEarned: number;
  maturityValue: number;
}

export function calculateRD(
  monthlyDeposit: number,
  interestRate: number,
  timePeriodYears: number
): RDResult {
  const rate = interestRate / 100;
  const months = timePeriodYears * 12;
  const quarterlyRate = rate / 4;

  // RD interest calculation (quarterly compounding)
  let maturityValue = 0;

  for (let month = 1; month <= months; month++) {
    const remainingMonths = months - month + 1;
    const quarters = remainingMonths / 3;
    const amount = monthlyDeposit * Math.pow(1 + quarterlyRate, quarters);
    maturityValue += amount;
  }

  const totalDeposit = monthlyDeposit * months;

  return {
    monthlyDeposit,
    totalDeposit,
    interestEarned: maturityValue - totalDeposit,
    maturityValue
  };
}

// ============================================
// EMI (Equated Monthly Installment) Calculator
// Formula: EMI = P × r × (1 + r)^n / ((1 + r)^n – 1)
// ============================================
export interface EMIResult {
  emi: number;
  totalPayment: number;
  totalInterest: number;
  principal: number;
  amortizationSchedule: Array<{
    month: number;
    emi: number;
    principalPaid: number;
    interestPaid: number;
    balance: number;
  }>;
}

export function calculateEMI(
  principal: number,
  interestRate: number,
  tenureYears: number
): EMIResult {
  const monthlyRate = interestRate / 12 / 100;
  const months = tenureYears * 12;

  if (monthlyRate === 0) {
    const emi = principal / months;
    return {
      emi,
      totalPayment: principal,
      totalInterest: 0,
      principal,
      amortizationSchedule: []
    };
  }

  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) /
    (Math.pow(1 + monthlyRate, months) - 1);

  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  // Generate amortization schedule
  const amortizationSchedule = [];
  let balance = principal;

  for (let month = 1; month <= months; month++) {
    const interestPaid = balance * monthlyRate;
    const principalPaid = emi - interestPaid;
    balance -= principalPaid;

    amortizationSchedule.push({
      month,
      emi,
      principalPaid,
      interestPaid,
      balance: Math.max(0, balance)
    });
  }

  return {
    emi,
    totalPayment,
    totalInterest,
    principal,
    amortizationSchedule
  };
}

// ============================================
// Utility Functions
// ============================================

export function formatNumber(value: number, decimals: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(value);
}

export function parseFormattedNumber(value: string): number {
  return parseFloat(value.replace(/[^0-9.-]/g, '')) || 0;
}
