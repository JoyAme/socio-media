import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCyxG5RyKFVm-_q6jHaxhL5CDC6XGFTQJs",
  authDomain: "josylinked.firebaseapp.com",
  projectId: "josylinked",
  storageBucket: "josylinked.appspot.com",
  messagingSenderId: "840404754107",
  appId: "1:840404754107:web:e136db641345262cdcd39e",
  measurementId: "G-EMWLSQFE6B"
};


const app = initializeApp(firebaseConfig);


export const db= getFirestore(app);
export const auth= getAuth();
// const analytics = getAnalytics(app);