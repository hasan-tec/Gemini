import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth instead of firebase.auth()

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBqjrVdGtOegefbHucx3w2Q5kdmRsegl8",
  authDomain: "gemini-7c550.firebaseapp.com",
  projectId: "gemini-7c550",
  storageBucket: "gemini-7c550.appspot.com",
  messagingSenderId: "147695898480",
  appId: "1:147695898480:web:14c2e69d1ac849df3889b5",
  measurementId: "G-D6SY7S8HF0"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get a reference to the authentication service
const auth = getAuth(app); // Use getAuth with the initialized app

export { auth };



