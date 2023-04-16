import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './style.scss';
import theme from './components/theme';

import App from './components/App';

const root = createRoot(document.getElementById('main'));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
);
