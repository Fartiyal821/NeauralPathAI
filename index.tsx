
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Check if we already have a root to prevent "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot()"
const root = (window as any)._reactRoot || ReactDOM.createRoot(rootElement);
(window as any)._reactRoot = root;

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
