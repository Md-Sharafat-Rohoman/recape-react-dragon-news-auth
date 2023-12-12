// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB963L3dRt-OCBcxT1DTl-IEpxptqQXeng",
  authDomain: "react-dragon-news-auth-345a8.firebaseapp.com",
  projectId: "react-dragon-news-auth-345a8",
  storageBucket: "react-dragon-news-auth-345a8.appspot.com",
  messagingSenderId: "416187159385",
  appId: "1:416187159385:web:3cbad609003987a2507248"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;