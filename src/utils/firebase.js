
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "aiinverview.firebaseapp.com",
  projectId: "aiinverview",
  storageBucket: "aiinverview.firebasestorage.app",
  messagingSenderId: "1075815404427",
  appId: "1:1075815404427:web:e5384ba4ff135419a7d58e",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export { auth, provider }