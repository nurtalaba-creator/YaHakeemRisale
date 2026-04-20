import React, { useState } from 'react';

const SentenceCard: React.FC<{ turkeyText: string; kurdishText: string; }> = ({ turkeyText, kurdishText }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="sentence-card">
            <div className="card-header" onClick={toggleCollapse} style={{ cursor: 'pointer' }}>
                <h2>Click to {isOpen ? 'collapse' : 'expand'}</h2>
            </div>
            {isOpen && (
                <div className="card-body">
                    <p><strong>Turkish:</strong> {turkeyText}</p>
                    <p><strong>Kurdish:</strong> {kurdishText}</p>
                </div>
            )}
        </div>
    );
};

export default SentenceCard;