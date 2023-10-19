// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiDMBzUsHUFKZWGFKupd2F3lFgAp_GEKw",
  authDomain: "my-assainment-10.firebaseapp.com",
  projectId: "my-assainment-10",
  storageBucket: "my-assainment-10.appspot.com",
  messagingSenderId: "222172781700",
  appId: "1:222172781700:web:0504f8e8fbc40092faf6d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;