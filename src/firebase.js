import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAMDTs4ousrY_NnE-RvofliNYVSdJ9JCW4",
  authDomain: "financetracker-5ff7b.firebaseapp.com",
  projectId: "financetracker-5ff7b",
  storageBucket: "financetracker-5ff7b.appspot.com",
  messagingSenderId: "468890218792",
  appId: "1:468890218792:web:358130235cfad51f45e01d",
  measurementId: "G-NHNHG16EW2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
