import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './style.scss';

import App from './components/App';

const root = createRoot(document.getElementById('main'));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
);
