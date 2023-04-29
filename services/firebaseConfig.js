import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtc-83KTYDY7Z6h2uK8YqIzFvebziyAK8",
  authDomain: "rn-social-90a5a.firebaseapp.com",
  projectId: "rn-social-90a5a",
  storageBucket: "rn-social-90a5a.appspot.com",
  messagingSenderId: "228694175357",
  appId: "1:228694175357:web:7b9057f1684078033bcb14"
};

const authConfig = initializeApp(firebaseConfig);
const auth = getAuth(authConfig);
const db = getFirestore(authConfig);
const storage = getStorage(authConfig);

export { auth, db, storage };