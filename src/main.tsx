import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom/client
import { App } from './app';
import './index.css';

// Define the container element where you want to mount your React application
const container = document.getElementById('root');

// Check if the container element exists before rendering
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Container element not found');
}
