import React, { useState } from 'react';

const SentenceList = ({ sentences }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="sentence-list">
      {sentences.map((sentence, index) => (
        <div key={index} className="sentence-item">
          <div onClick={() => toggleExpand(index)} className="sentence-header">
            <p>{sentence.text}</p>
          </div>
          {expandedIndex === index && (
            <div className="sentence-details">
              <div className="translations">
                <p><strong>Translation:</strong> {sentence.translation}</p>
                {sentence.alternativeTranslations && (
                  <div className="alternative-translations">
                    <strong>Alternative Translations:</strong>
                    <ul>
                      {sentence.alternativeTranslations.map((alt, i) => (
                        <li key={i}>{alt}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SentenceList;
