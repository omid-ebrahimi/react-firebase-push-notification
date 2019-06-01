import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { initializeFirebase } from './push-notification';

ReactDOM.render(<App />, document.getElementById('root'));

initializeFirebase();

const messaging = firebase.messaging();
messaging.onMessage(notification => {
    alert('Notification: ' + JSON.stringify(notification))
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
