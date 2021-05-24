// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAC5dXDQnATDy5lJf1ci0qfbYChwu_Iz1g",
    authDomain: "fb-clon-56c7e.firebaseapp.com",
    projectId: "fb-clon-56c7e",
    storageBucket: "fb-clon-56c7e.appspot.com",
    messagingSenderId: "776566737157",
    appId: "1:776566737157:web:856a9509558a1151668f6c",
    measurementId: "G-TG3RWPGLJ5"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };