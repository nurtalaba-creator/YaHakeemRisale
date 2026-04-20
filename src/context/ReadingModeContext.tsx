import React, { createContext, useContext, useEffect, useState } from 'react';

// Types for reading modes
export type ReadingMode = 'bilingual' | 'turkish-only' | 'kurdish-only';

// Context type
interface ReadingModeContextType {
    readingMode: ReadingMode;
    setReadingMode: (mode: ReadingMode) => void;
}

// Create the context
const ReadingModeContext = createContext<ReadingModeContextType | undefined>(undefined);

// Provider component
export const ReadingModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [readingMode, setReadingMode] = useState<ReadingMode>('bilingual');

    // Load reading mode from localStorage
    useEffect(() => {
        const storedMode = localStorage.getItem('readingMode') as ReadingMode;
        if (storedMode) {
            setReadingMode(storedMode);
        }
    }, []);

    // Store reading mode in localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('readingMode', readingMode);
    }, [readingMode]);

    return (
        <ReadingModeContext.Provider value={{ readingMode, setReadingMode }}>
            {children}
        </ReadingModeContext.Provider>
    );
};

// Hook to use the ReadingModeContext
export const useReadingMode = (): ReadingModeContextType => {
    const context = useContext(ReadingModeContext);
    if (!context) {
        throw new Error('useReadingMode must be used within a ReadingModeProvider');
    }
    return context;
};
