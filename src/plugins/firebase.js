// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjzPxXRVwN85UdMQhMvQAuP7eo2s8nMM8",
    authDomain: "sso-care.firebaseapp.com",
    projectId: "sso-care",
    storageBucket: "sso-care.firebasestorage.app",
    messagingSenderId: "623584120913",
    appId: "1:623584120913:web:6c36d4cde90212e4296870",
    measurementId: "G-1DNDL6WG9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);