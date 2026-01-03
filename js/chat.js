import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const messagesDiv = document.getElementById("messages");
const input = document.getElementById("msgInput");
const btn = document.getElementById("sendBtn");

const q = query(collection(db, "messages"), orderBy("time"));

onSnapshot(q, snapshot => {
  messagesDiv.innerHTML = "";
  snapshot.forEach(doc => {
    const p = document.createElement("p");
    p.textContent = doc.data().text;
    messagesDiv.appendChild(p);
  });
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

btn.addEventListener("click", async () => {
  if (input.value.trim() === "") return;

  await addDoc(collection(db, "messages"), {
    text: input.value,
    time: Date.now()
  });

  input.value = "";
});
