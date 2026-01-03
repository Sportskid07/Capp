import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCzqMdM4om2ZQawvNSY5ToTfztqYmSJEbs",
  authDomain: "capp-334e2.firebaseapp.com",
  projectId: "capp-334e2",
  storageBucket: "capp-334e2.appspot.com",
  messagingSenderId: "260888838612",
  appId: "1:260888838612:web:71b7a609be7e4b5b4e1641"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
