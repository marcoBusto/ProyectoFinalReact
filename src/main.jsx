import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRm2lIbii7m3pN88CrWPaEs8E_YXb6YCg",
  authDomain: "proyectofinal-9c1f7.firebaseapp.com",
  databaseURL: "https://proyectofinal-9c1f7-default-rtdb.firebaseio.com",
  projectId: "proyectofinal-9c1f7",
  storageBucket: "proyectofinal-9c1f7.appspot.com",
  messagingSenderId: "27408017125",
  appId: "1:27408017125:web:feab25b3e514f5d139d60c",
  measurementId: "G-J4THLMY8PT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
