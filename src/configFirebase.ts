// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaKOujQKXWWf5E47pTz9BzjWq7mxDUdiQ",
  authDomain: "queuing-system-b4ccc.firebaseapp.com",
  databaseURL: "https://queuing-system-b4ccc-default-rtdb.firebaseio.com",
  projectId: "queuing-system-b4ccc",
  storageBucket: "queuing-system-b4ccc.appspot.com",
  messagingSenderId: "237225839808",
  appId: "1:237225839808:web:9b7310e4d6dd46b306f125",
  measurementId: "G-44RJ2TE6YN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

