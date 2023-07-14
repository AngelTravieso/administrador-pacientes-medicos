import React from 'react';
import ReactDOM from 'react-dom/client';
import { PatientManagerApp } from './PatientManagerApp';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PatientManagerApp />
  </React.StrictMode>,
)
