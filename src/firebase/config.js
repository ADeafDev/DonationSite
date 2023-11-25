import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC8YKWEkLY9C50KSF_Vl-Xq0qcHgzJTdy8",
    authDomain: "simple-donation-form.firebaseapp.com",
    projectId: "simple-donation-form",
    storageBucket: "simple-donation-form.appspot.com",
    messagingSenderId: "236229123436",
    appId: "1:236229123436:web:e74496841c71e97beca749"
  };

 // Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const projectFirestore = getFirestore(app);

export { projectFirestore };