import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faWind,
  faTemperatureThreeQuarters,
} from '@fortawesome/free-solid-svg-icons';
import './index.css';

library.add(faWind, faTemperatureThreeQuarters);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
