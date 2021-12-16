import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCKI5ugoATk4ZIPBpXYd_JvpotryjDDrzE",
  authDomain: "ctc-eg.firebaseapp.com",
  projectId: "ctc-eg",
  storageBucket: "ctc-eg.appspot.com",
  messagingSenderId: "350248348226",
  appId: "1:350248348226:web:b5afb039230ff97dfd5bdb",
  measurementId: "G-S9SXNB843P",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

export default app;
