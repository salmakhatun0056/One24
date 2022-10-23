// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDX4sJDUJh8EsT6hkv2RqKZzfHRAi1eGRo",
    authDomain: "one24-b60fa.firebaseapp.com",
    projectId: "one24-b60fa",
    storageBucket: "one24-b60fa.appspot.com",
    messagingSenderId: "120197614929",
    appId: "1:120197614929:web:e10393da043e6c91829770"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;