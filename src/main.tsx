// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from "./navigation/AppRouter";
import './index.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
