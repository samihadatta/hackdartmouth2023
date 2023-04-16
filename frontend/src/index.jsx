import React from 'react';
// import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
// import { createStore, applyMiddleware, compose } from 'redux';
import { ChakraProvider } from '@chakra-ui/react';
import './style.scss';

import App from './components/App';

// this creates the store with the reducers, and does some other stuff to initialize devtools
// // boilerplate to copy, don't have to know
// const store = createStore(reducers, {}, compose(
//   applyMiddleware(),
//   window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
// ));

const root = createRoot(document.getElementById('main'));
root.render(
  // <Provider store={store}>
  <ChakraProvider>
    <App />
  </ChakraProvider>,

  // </Provider>,
);
