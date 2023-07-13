// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgIEUWgD1kBZslO7z9UhXfUkgSQvLnNVk",
  authDomain: "vite-auth-b449c.firebaseapp.com",
  projectId: "vite-auth-b449c",
  storageBucket: "vite-auth-b449c.appspot.com",
  messagingSenderId: "705704698629",
  appId: "1:705704698629:web:d35ee085e919aaaec84d6c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
