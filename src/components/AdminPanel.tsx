import React, { useState } from 'react';

const AdminPanel: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sentences, setSentences] = useState<{ turkish: string; kurdish: string }[]>([]);
  const [newTurkish, setNewTurkish] = useState('');
  const [newKurdish, setNewKurdish] = useState('');

  const handleLogin = () => {
    if (password === 'your_admin_password') { // Replace with actual password logic
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleAddSentence = () => {
    if (newTurkish && newKurdish) {
      setSentences([...sentences, { turkish: newTurkish, kurdish: newKurdish }]);
      setNewTurkish('');
      setNewKurdish('');
    }
  };

  const handleDeleteSentence = (index: number) => {
    const updatedSentences = sentences.filter((_, i) => i !== index);
    setSentences(updatedSentences);
  };

  if (!isAuthenticated) {
    return (
      <div>
        <h2>Admin Panel Login</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Admin Panel</h2>
      <h3>Add Sentence</h3>
      <input
        type="text"
        value={newTurkish}
        onChange={(e) => setNewTurkish(e.target.value)}
        placeholder="Turkish"
      />
      <input
        type="text"
        value={newKurdish}
        onChange={(e) => setNewKurdish(e.target.value)}
        placeholder="Kurdish"
      />
      <button onClick={handleAddSentence}>Add</button>

      <h3>Existing Sentences</h3>
      <ul>
        {sentences.map((sentence, index) => (
          <li key={index}>
            {sentence.turkish} - {sentence.kurdish}
            <button onClick={() => handleDeleteSentence(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;