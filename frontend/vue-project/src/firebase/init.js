// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-dTLWAlv9o2X_CsFnXu0uf72rXJApK88",
  authDomain: "calorie-counter-130f7.firebaseapp.com",
  projectId: "calorie-counter-130f7",
  storageBucket: "calorie-counter-130f7.appspot.com",
  messagingSenderId: "986622747576",
  appId: "1:986622747576:web:f8e55bba6a28dcd7dee54d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore();
export default db