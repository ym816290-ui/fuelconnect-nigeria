import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDzYN13ha9KSS4Q6CNn4GiegCzeNdLfI5I",
    authDomain: "fuelconnect-nigeria.firebaseapp.com",
    projectId: "fuelconnect-nigeria",
    storageBucket: "fuelconnect-nigeria.firebasestorage.app",
    messagingSenderId: "346356529363",
    appId: "1:346356529363:web:e3ba160b4dd76f1ae5fc26",
    measurementId: "G-YNT0B08YF1"
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
