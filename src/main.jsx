import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMNUGNNiRnzNeUUKFRtFSUJxGd3ciJhT0",
  authDomain: "otakucity-fb703.firebaseapp.com",
  projectId: "otakucity-fb703",
  storageBucket: "otakucity-fb703.appspot.com",
  messagingSenderId: "264339221760",
  appId: "1:264339221760:web:c39f25bb2271e70b11d7e5",
  measurementId: "G-LBPQGC889Y"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
