import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ReadingModeContextType {
    readingMode: 'bilingual' | 'turkish-only' | 'kurdish-only';
    setReadingMode: (mode: 'bilingual' | 'turkish-only' | 'kurdish-only') => void;
}

const ReadingModeContext = createContext<ReadingModeContextType | undefined>(undefined);

export const ReadingModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [readingMode, setReadingMode] = useState<'bilingual' | 'turkish-only' | 'kurdish-only'>('bilingual');

    return (
        <ReadingModeContext.Provider value={{ readingMode, setReadingMode }}>
            {children}
        </ReadingModeContext.Provider>
    );
};

export const useReadingMode = () => {
    const context = useContext(ReadingModeContext);
    if (!context) {
        throw new Error('useReadingMode must be used within ReadingModeProvider');
    }
    return context;
};