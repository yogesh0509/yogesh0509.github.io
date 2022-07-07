import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ViewportcontextProvider } from './components/Context/ViewportContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <ViewportcontextProvider>
    <App />
  </ViewportcontextProvider>
);
