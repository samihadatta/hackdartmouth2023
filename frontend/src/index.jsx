import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import Chatbot from './chatbot';
import './style.scss';

function App() {
  return (
    <ChakraProvider>
      <div>
        <h1>Title</h1>
        <Chatbot />
      </div>
    </ChakraProvider>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);
