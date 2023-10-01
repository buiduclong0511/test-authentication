// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFhz2fGogkBVKTzsG5VttT-WSIMrKp2NU",
  authDomain: "test-d56ca.firebaseapp.com",
  projectId: "test-d56ca",
  storageBucket: "test-d56ca.appspot.com",
  messagingSenderId: "667070881960",
  appId: "1:667070881960:web:a2cd84007f62fc9b2fa29d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app