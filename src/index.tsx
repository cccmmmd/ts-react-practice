import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hook from './components/Hook-hoc'
import Useffect from './components/Useffect'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Useffect />
    <Hook />
    <App />
  </React.StrictMode>
);

