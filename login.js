
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("Welcome to FuelConnect Nigeria!");
    });
  });

  console.log("FuelConnect Nigeria Web App loaded successfully.");
});

const firebaseConfig = {
    apiKey: "AIzaSyDzYN13ha9KSS4Q6CNn4GiegCzeNdLfI5I",
    authDomain: "fuelconnect-nigeria.firebaseapp.com",
    projectId: "fuelconnect-nigeria",
    storageBucket: "fuelconnect-nigeria.firebasestorage.app",
    messagingSenderId: "346356529363",
    appId: "1:346356529363:web:e3ba160b4dd76f1ae5fc26",
    measurementId: "G-YNT0B08YF1"
  };// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Cloud Firestore
const db = getFirestore(app);

// Monitor authentication state
onAuthStateChanged(auth, function (user) {
  if (user) {
    console.log("User is signed in.");
  } else {
    console.log("No user is signed in.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      console.log("Welcome to FuelConnect Nigeria!");
    });
  });

  console.log("FuelConnect Nigeria Web App loaded successfully.");
});
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const selectedRole = document.getElementById("role").value;

  loginMessage.textContent = "Signing in...";

  try {
    const result = await signInWithEmailAndPassword(auth, email, password);

    const userRef = doc(db, "users", result.user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await auth.signOut();
      throw new Error("Account role has not been assigned. Please contact support.");
    }

    const userData = userSnap.data();

    if (userData.status !== "active" || userData.role !== selectedRole) {
      await auth.signOut();
      throw new Error("Account type or account status is not valid.");
    }

    loginMessage.textContent = "Login successful!";
  } catch (error) {
    loginMessage.textContent = error.message;
  }
});
