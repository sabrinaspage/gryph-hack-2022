import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GryphRouter from './components/GryphRouter';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GryphRouter />
  </React.StrictMode>
);