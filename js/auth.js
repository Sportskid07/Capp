import { signInWithEmailAndPassword } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./firebase.js";

console.log("auth.js loaded");

window.addEventListener("load", () => {
  const btn = document.getElementById("loginBtn");

  if (!btn) {
    console.error("Login button not found");
    return;
  }

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

