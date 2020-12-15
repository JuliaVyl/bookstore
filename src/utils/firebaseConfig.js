import firebase from "firebase/app";

export function firebaseIni() {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "bookstore-web-1820c.firebaseapp.com",
    projectId: "bookstore-web-1820c",
    storageBucket: "bookstore-web-1820c.appspot.com",
    messagingSenderId: "602679837378",
    appId: "1:602679837378:web:f789de0544c07cf421b15b",
    measurementId: "G-YBVDB3K57Q"
  };
  
  firebase.initializeApp(firebaseConfig);
}

