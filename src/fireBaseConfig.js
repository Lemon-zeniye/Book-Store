import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";


// const firebaseConfig = {
//   apiKey: "AIzaSyCRDV3iKA_Sdcxyn0opmCdWHB5stHXenxQ",
//   authDomain: "book-store-b5801.firebaseapp.com",
//   projectId: "book-store-b5801",
//   storageBucket: "book-store-b5801.appspot.com",
//   messagingSenderId: "351141450718",
//   appId: "1:351141450718:web:31b46e0af976f7e57d034f",
//   measurementId: "G-GB4LCRCLZZ"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAG180CYiV6_kpQaMf2sKNYydKiYhK3KCI",
  authDomain: "bookstoretwo-1712d.firebaseapp.com",
  projectId: "bookstoretwo-1712d",
  storageBucket: "bookstoretwo-1712d.appspot.com",
  messagingSenderId: "632103848852",
  appId: "1:632103848852:web:dad11674a386737de9dd81",
  measurementId: "G-KJEBKB0ZL0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

