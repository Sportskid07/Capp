console.log("auth.js loaded");

import { signInWithEmailAndPassword } from 
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./js/firebase.js";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("loginBtn");

  btn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "chat.html";
      })
      .catch(err => {
        alert(err.message);
        console.error(err);
      });
  });
});
import { signInWithEmailAndPassword } from 
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./firebase.js";

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("loginBtn");

  btn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.href = "chat.html";
      })
      .catch(err => {
        alert(err.message);
        console.error(err);
      });
  });
});


