
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app-check.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/13.4.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc
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

const app = initializeApp(firebaseConfig);

const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaEnterpriseProvider(
    "6Lc01zQuAAAAAF311EEQsaUrN2V4LQcZDDICzRJj"
  ),
  isTokenAutoRefreshEnabled: true
});

const auth = getAuth(app);

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

if (loginForm && loginMessage) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const selectedRole = document.getElementById("role").value;

    loginMessage.textContent = "Signing in...";

    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const userRef = doc(db, "users", result.user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await signOut(auth);
        loginMessage.textContent =
          "Your account role has not been assigned yet. Please contact support.";
        return;
      }

      const userData = userSnap.data();

      if (
  userData.role !== selectedRole ||
  !["active", "pending"].includes(userData.status) ||
  (selectedRole === "buyer" && userData.status !== "active")
) {
        await signOut(auth);
        loginMessage.textContent =
          "Account type or account status is not valid. Please contact support.";
        return;
      }

      if (userData.role === "super_admin") {
        window.location.href = "admin.html";
      } else if (userData.role === "buyer") {
        window.location.href = "buyer-dashboard.html";
      } else if (userData.role === "supplier") {
        window.location.href = "supplier-dashboard.html";
      } else {
        await signOut(auth);
        loginMessage.textContent =
          "Unrecognized account role. Please contact support.";
      }

    } catch (error) {
      console.error("FuelConnect login error:", error);

      if (error.code === "auth/invalid-credential") {
        loginMessage.textContent =
          "Email or password is incorrect.";
      } else if (error.code === "permission-denied") {
        loginMessage.textContent =
          "Account access is not configured yet. Please contact support.";
      } else {
        loginMessage.textContent =
          error.message || "Unable to sign in. Please try again.";
      }
    }
  });
}
const forgotPasswordLink = document.getElementById("forgotPasswordLink");

if (forgotPasswordLink) {
  forgotPasswordLink.addEventListener("click", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();

    if (!email) {
      loginMessage.textContent =
        "Please enter your email address first.";
      return;
    }

    loginMessage.textContent = "Sending password reset email...";

    try {
      await sendPasswordResetEmail(auth, email);

      loginMessage.textContent =
        "If an account exists with this email, a password reset link will be sent. Please check your inbox.";
    } catch (error) {
      console.error("Password reset error:", error);

      loginMessage.textContent =
        "Unable to send reset email. Please check your email address and try again.";
    }
  });
}

