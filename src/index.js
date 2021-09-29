import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhodXwVBoI4TTdFfn9WwdSoyOo4S-i1s0",
  authDomain: "react-calculator-38fbd.firebaseapp.com",
  projectId: "react-calculator-38fbd",
  storageBucket: "react-calculator-38fbd.appspot.com",
  messagingSenderId: "746375505471",
  appId: "1:746375505471:web:55b51852a5fb58160b3a8a",
  measurementId: "G-VLFWQ1RH83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);

ReactDOM.render(<App />, document.getElementById("root"))