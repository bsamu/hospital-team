import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
import ErrorBoundary from './components/ErrorBoundary'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </React.StrictMode>
=======
import ErrorBoundary from './components/ErrorBoundary';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
  </React.StrictMode>
>>>>>>> fdf350530c1b7326d43eee5eed70e655daca0694
);
