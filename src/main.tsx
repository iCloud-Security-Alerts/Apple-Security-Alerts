import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// This is the critical 'Mounting' logic
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Failed to find the root element. Check your index.html for <div id='root'></div>");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
