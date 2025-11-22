// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6e9iyE-CyOIL0E4qcoc5IWvprYFYWsjo",
  authDomain: "blackwhite-f216c.firebaseapp.com",
  projectId: "blackwhite-f216c",
  storageBucket: "blackwhite-f216c.firebasestorage.app",
  messagingSenderId: "482138627056",
  appId: "1:482138627056:web:c576a01672a9e64b0e5b35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)