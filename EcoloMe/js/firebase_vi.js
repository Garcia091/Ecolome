import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBijdgyvFjDNCMM9Is0LLsTSBa29yvaZD0",
    authDomain: "videos-fa652.firebaseapp.com",
    projectId: "videos-fa652",
    storageBucket: "videos-fa652.appspot.com",
    messagingSenderId: "917666442737",
    appId: "1:917666442737:web:2d2457d50fb4f815a3e850"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and getDocs, a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

//Gaurdar Colección
export const saveVideo = (title,video) =>
  addDoc(collection(db, "videos"), { title,video });


// Extraer Colección
export const getTasks = () => getDocs(collection(db, 'videos'))

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "videos"), callback);
