import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_API_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_API_APP_ID

// }

const firebaseConfig = {
  apiKey: "AIzaSyCEplzJcikeKCgzSiW_JII7aNvs63uIv7Y",
  authDomain: "konyv-kemping.firebaseapp.com",
  projectId: "konyv-kemping",
  storageBucket: "konyv-kemping.appspot.com",
  messagingSenderId: "617911695196",
  appId: "1:617911695196:web:adf6b7f5cae8cf0cce3399"

}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const database = getFirestore(app);
export default app