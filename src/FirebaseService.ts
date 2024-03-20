// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlgpIxqjulzHTaHWPMB5MW57p-YYSzdUE",
  authDomain: "test-db-db7f8.firebaseapp.com",
  databaseURL: "https://test-db-db7f8-default-rtdb.firebaseio.com",
  projectId: "test-db-db7f8",
  storageBucket: "test-db-db7f8.appspot.com",
  messagingSenderId: "72522286608",
  appId: "1:72522286608:web:268c10c21f4f36ba8d2c95",
  measurementId: "G-Y87WZME9YW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;