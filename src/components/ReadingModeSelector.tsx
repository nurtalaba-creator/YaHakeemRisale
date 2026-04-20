import React, { useState } from 'react';

const ReadingModeSelector = () => {
    const [mode, setMode] = useState('bilingual');

    const handleModeChange = (selectedMode) => {
        setMode(selectedMode);
    };

    return (
        <div>
            <button onClick={() => handleModeChange('bilingual')}>
                Bilingual
            </button>
            <button onClick={() => handleModeChange('turkish-only')}>
                Turkish Only
            </button>
            <button onClick={() => handleModeChange('kurdish-only')}>
                Kurdish Only
            </button>
            <div>
                Current Mode: {mode}
            </div>
        </div>
    );
};

export default ReadingModeSelector;