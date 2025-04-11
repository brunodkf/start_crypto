"use client";

import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface Crypto {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
}

interface CryptoContextType {
    cryptos: Crypto[];
    isLoading: boolean;
}

export const CryptoContext = createContext<CryptoContextType | undefined>(undefined);
CryptoContext.displayName = "Cryptomoedas";

export function CryptoProvider({ children }: { children: React.ReactNode }) {
    const [cryptos, setCryptos] = useState<Crypto[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getCoins = async () => {
            try {
                const response = await axios.get("/api/crypto");

                setCryptos(response.data);

            } catch (error) {

                console.error("Erro ao buscar criptomoedas: ", error);
             
                
            } finally {

                setIsLoading(false);
            }
        };

        getCoins();

        const interval = setInterval(getCoins, 60000); 
        return () => clearInterval(interval);
    }, []);

    return <CryptoContext.Provider value={{ cryptos, isLoading }}>{children}</CryptoContext.Provider>;
}

export function useCrypto() {
    const context = useContext(CryptoContext);
    if (!context) {
        throw new Error("useCrypto deve ser usado dentro de um CryptoProvider");
    }
    return context;
}
