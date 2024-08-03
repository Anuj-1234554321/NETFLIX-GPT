// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5xsyy0niJYaVcQaU5YdggeFp1MMkG4HU",
  authDomain: "netflix-gpt-c7610.firebaseapp.com",
  projectId: "netflix-gpt-c7610",
  storageBucket: "netflix-gpt-c7610.appspot.com",
  messagingSenderId: "493797065762",
  appId: "1:493797065762:web:aa194284b321811df7b67b",
  measurementId: "G-9Q54S5Z4HC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

// Set the persistence to local to avoid relying on third-party cookies
setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Persistence set to local");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export { auth };
