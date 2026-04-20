import React, { useState } from 'react';

const ReadingModeToggle = () => {
  const [mode, setMode] = useState('bilingual'); // Default mode

  const handleToggle = () => {
    if (mode === 'bilingual') {
      setMode('turkish');
    } else if (mode === 'turkish') {
      setMode('kurdish');
    } else {
      setMode('bilingual');
    }
  };

  return (
    <div>
      <button onClick={handleToggle}>
        Switch to {mode === 'bilingual' ? 'Turkish-only' : mode === 'turkish' ? 'Kurdish-only' : 'Bilingual'}
      </button>
      <p>Current Mode: {mode}</p>
    </div>
  );
};

export default ReadingModeToggle;