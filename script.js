import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

// Za a saka Firebase configuration ɗinku a nan bayan mun duba shi.
const firebaseConfig = {
  // Kada ku ƙirƙiri ko ku saka wani bayani a nan tukuna.
};

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("Welcome to FuelConnect Nigeria!");
    });
  });

  console.log("FuelConnect Nigeria Web App loaded successfully.");
});
