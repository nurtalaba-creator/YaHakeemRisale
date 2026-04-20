import React, { useState } from 'react';

const ReadingView = () => {
    const [expandedSentences, setExpandedSentences] = useState({});
    const [showTranslation, setShowTranslation] = useState(false);

    const sentences = [
        { 
            original: 'Sentence in original language', 
            translation: 'Sentence in translated language',
        },
        { 
            original: 'Another original sentence', 
            translation: 'Another translation',
        },
        // Add more sentences as needed
    ];

    const toggleExpand = (index) => {
        setExpandedSentences((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    const handleTranslationToggle = () => {
        setShowTranslation((prev) => !prev);
    };

    return (
        <div>
            <h1>Bilingual Reading</h1>
            {sentences.map((sentence, index) => (
                <div key={index}>
                    <div>
                        <button onClick={() => toggleExpand(index)}>
                            {expandedSentences[index] ? '-' : '+'} 
                        </button>
                        <span>{sentence.original}</span>
                    </div>
                    {expandedSentences[index] && <p>{sentence.translation}</p>}
                </div>
            ))}
            <button onClick={handleTranslationToggle}>
                {showTranslation ? 'Hide Translation Panel' : 'Show Translation Panel'}
            </button>
            {showTranslation && (
                <div>
                    <h2>Alternative Translations</h2>
                    {/* Add alternative translations here */}
                </div>
            )}
        </div>
    );
};

export default ReadingView;