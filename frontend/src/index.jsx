import React from 'react';
import { createRoot } from 'react-dom/client';
import Chatbot from './chatbot';
import './style.scss';

function App() {
  return (
    <div>
      <h1>This is our title</h1>
      <Chatbot />
    </div>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
