import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import store from './store/store'
import { Provider } from 'react-redux'
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
console.log(store)
root.render(
  <StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </StrictMode>
);