import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'
import firebaseConfig from './FirebaseConf'
  
//bootstrap dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

