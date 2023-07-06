import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAFgVMrmhAMNhmfX1-D89mLu6th10svtQY",
    authDomain: "inov8-landing.firebaseapp.com",
    databaseURL: "https://inov8-landing-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "inov8-landing",
    storageBucket: "inov8-landing.appspot.com",
    messagingSenderId: "295616181031",
    appId: "1:295616181031:web:e952bf30da12b7b1e76f02",
    measurementId: "G-Y8RKL9HBED"
  };

const app = initializeApp(firebaseConfig);
export const signupDB = getFirestore(app);