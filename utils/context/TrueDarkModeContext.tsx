// utils/context/TrueDarkModeContext.tsx
import React, { createContext, useContext, useState } from "react";

interface TrueDarkModeContextProps {
    trueDarkMode: boolean;
    setTrueDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrueDarkModeContext = createContext<TrueDarkModeContextProps | undefined>(undefined);

export const TrueDarkModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [trueDarkMode, setTrueDarkMode] = useState(false);

    return (
        <TrueDarkModeContext.Provider value={{ trueDarkMode, setTrueDarkMode }}>
            {children}
        </TrueDarkModeContext.Provider>
    );
};

export const useTrueDarkMode = () => {
    const context = useContext(TrueDarkModeContext);
    if (!context) {
        throw new Error("useTrueDarkMode must be used within a TrueDarkModeProvider");
    }
    return context;
};
