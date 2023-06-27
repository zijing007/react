import React from 'react';
import ReactDOM from 'react-dom/client';
//importer css
import './index.css';
//importer
import Fiche from './Fiche';
import Radio from './Radio';
import Submit from './submit';
import Model from './Model';
import Fiche2 from './Fiche2';
import Fiche3 from './Fiche3';
//default
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Fiche />
    <Radio />
    <Submit />
    <Model />
    <Fiche2 />
    <Fiche3 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
