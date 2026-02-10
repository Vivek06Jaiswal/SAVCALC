'use client';

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

export type CurrencyCode = 'USD' | 'GBP' | 'EUR' | 'INR';

export interface Currency {
    code: CurrencyCode;
    symbol: string;
    name: string;
    locale: string;
}

export const currencies: Record<CurrencyCode, Currency> = {
    USD: { code: 'USD', symbol: '$', name: 'US Dollar', locale: 'en-US' },
    GBP: { code: 'GBP', symbol: '£', name: 'British Pound', locale: 'en-GB' },
    EUR: { code: 'EUR', symbol: '€', name: 'Euro', locale: 'de-DE' },
    INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee', locale: 'en-IN' },
};

interface CurrencyContextType {
    currency: Currency;
    setCurrency: (code: CurrencyCode) => void;
    formatCurrency: (value: number, showDecimals?: boolean) => string;
    currencySymbol: string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

interface CurrencyProviderProps {
    children: ReactNode;
}

export function CurrencyProvider({ children }: CurrencyProviderProps) {
    const [currencyCode, setCurrencyCode] = useState<CurrencyCode>('USD');

    useEffect(() => {
        const saved = localStorage.getItem('preferred-currency') as CurrencyCode;
        if (saved && currencies[saved]) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setCurrencyCode(saved);
        }
    }, []);

    const setCurrency = useCallback((code: CurrencyCode) => {
        setCurrencyCode(code);
        localStorage.setItem('preferred-currency', code);
    }, []);

    const currency = currencies[currencyCode];

    const formatCurrency = useCallback((value: number, showDecimals: boolean = true) => {
        return new Intl.NumberFormat(currency.locale, {
            style: 'currency',
            currency: currency.code,
            minimumFractionDigits: showDecimals ? 2 : 0,
            maximumFractionDigits: showDecimals ? 2 : 0,
        }).format(value);
    }, [currency]);

    return (
        <CurrencyContext.Provider
            value={{
                currency,
                setCurrency,
                formatCurrency,
                currencySymbol: currency.symbol
            }}
        >
            {children}
        </CurrencyContext.Provider>
    );
}

export function useCurrency() {
    const context = useContext(CurrencyContext);
    if (context === undefined) {
        throw new Error('useCurrency must be used within a CurrencyProvider');
    }
    return context;
}
