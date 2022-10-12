import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCRDV3iKA_Sdcxyn0opmCdWHB5stHXenxQ",
  authDomain: "book-store-b5801.firebaseapp.com",
  projectId: "book-store-b5801",
  storageBucket: "book-store-b5801.appspot.com",
  messagingSenderId: "351141450718",
  appId: "1:351141450718:web:31b46e0af976f7e57d034f",
  measurementId: "G-GB4LCRCLZZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);