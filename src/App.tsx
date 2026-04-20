import React from 'react';
import { ReadingModeProvider } from './ReadingModeProvider';
import ReadingView from './ReadingView';
import AdminPanel from './AdminPanel';

const App = () => {
  return (
    <ReadingModeProvider>
      <ReadingView />
      <AdminPanel />
    </ReadingModeProvider>
  );
};

export default App;