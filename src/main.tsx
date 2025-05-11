
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './global.css'; // Ensure global.css is loaded explicitly

// Force font loading check
document.addEventListener('DOMContentLoaded', () => {
  console.info('Checking Nasalization font loading...');
  // Add a test element to verify font loading
  const testEl = document.createElement('div');
  testEl.style.fontFamily = 'Nasalization, sans-serif';
  testEl.style.position = 'absolute';
  testEl.style.visibility = 'hidden';
  testEl.textContent = 'Font Test';
  document.body.appendChild(testEl);
  
  // Log whether the font is loaded
  setTimeout(() => {
    const computedFont = window.getComputedStyle(testEl).fontFamily;
    console.info('Font loaded:', computedFont.includes('Nasalization') ? 'Yes' : 'No', computedFont);
    document.body.removeChild(testEl);
  }, 500);
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
