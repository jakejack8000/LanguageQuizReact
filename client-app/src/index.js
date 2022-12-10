import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import store from './store/store'
import { Provider } from 'react-redux'
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
addEventListener('popstate', () => { window.location.replace('/') });
root.render(
      <Provider store={store}>
    <App />
      </Provider>
);
