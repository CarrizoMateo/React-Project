import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChHu6Rp8OfZrd4OYQVISPBdl5j9PtvwWU",
  authDomain: "react-project-3f646.firebaseapp.com",
  projectId: "react-project-3f646",
  storageBucket: "react-project-3f646.appspot.com",
  messagingSenderId: "885625581465",
  appId: "1:885625581465:web:698bf0784139be92ac6d08",
  measurementId: "G-31DT792E8D",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
