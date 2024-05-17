import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDQmCpaS_9k5UeKHGWFmxYiElzpKilRDog",
  authDomain: "technology-sa.firebaseapp.com",
  projectId: "technology-sa",
  storageBucket: "technology-sa.appspot.com",
  messagingSenderId: "430172191896",
  appId: "1:430172191896:web:5e4c956c8358a85a5464ed"
};


export const app = initializeApp(firebaseConfig);