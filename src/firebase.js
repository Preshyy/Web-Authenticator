// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJ4-lZq6VJWqKE8cWqMUE9KVSim0k1Nis",
  authDomain: "fir-auth-a1acd.firebaseapp.com",
  projectId: "fir-auth-a1acd",
  storageBucket: "fir-auth-a1acd.firebasestorage.app",
  messagingSenderId: "627491302975",
  appId: "1:627491302975:web:24b85806e06506b9e5128a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app