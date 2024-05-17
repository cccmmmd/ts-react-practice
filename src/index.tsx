import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import App from './App';
import Context from './components/Context';
import Hook from './components/Hook-hoc'
import Form from './components/Form'
import Useffect from './components/Useffect'
import Fetch from './components/Fetch'
import Usefetch from './components/Usefetch'
import Useref from './components/Useref'
import Memo from './components/Memo'



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Memo/>
    <Context/>
    <Form />
    <Useref />
    <Usefetch/>
    <Fetch/>
    {/* <Useffect /> */}
    <Hook />
    <App />
  </React.StrictMode>
);

