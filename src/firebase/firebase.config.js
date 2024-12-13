// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp5K2ypKnE2u0ZJ4URbDlspt6UyvZrNnQ",
  authDomain: "sunnah-store-61f32.firebaseapp.com",
  projectId: "sunnah-store-61f32",
  storageBucket: "sunnah-store-61f32.firebasestorage.app",
  messagingSenderId: "937561443905",
  appId: "1:937561443905:web:1897c77dc53ae0898000c0",
  measurementId: "G-L5JZ9C66W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);