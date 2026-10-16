import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Keep generated metadata for non-JavaScript crawlers, then hand ownership to
// React 19's native head hoisting. Helmet 3 does not replace legacy data-rh tags.
document.head.querySelectorAll('[data-rh="true"]').forEach(tag => tag.remove());

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
