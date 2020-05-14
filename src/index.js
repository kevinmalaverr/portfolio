import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import * as serviceWorker from './serviceWorker';

//bootstrap dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <Contact></Contact>,
  document.getElementById('root')
);

