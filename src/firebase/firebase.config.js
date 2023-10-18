// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6bIzgTlmmCbrZsJ5d8h-rCXOG5iJX958",
    authDomain: "dragon-news-using-react.firebaseapp.com",
    projectId: "dragon-news-using-react",
    storageBucket: "dragon-news-using-react.appspot.com",
    messagingSenderId: "1064199895581",
    appId: "1:1064199895581:web:9437fb57e59e180366e4f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;