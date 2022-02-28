import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBL7lnHXJbV9Us3Kn3dTRsYEn_xZREFhYo",
  authDomain: "my-react-application1.firebaseapp.com",
  projectId: "my-react-application1",
  storageBucket: "my-react-application1.appspot.com",
  messagingSenderId: "18938938174",
  appId: "1:18938938174:web:f33539394545111e32e26f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };