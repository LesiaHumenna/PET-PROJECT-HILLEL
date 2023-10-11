import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMRpJrbid8M--id7Lw2f1MrlhC_ez07ug",
  authDomain: "fast-food-restaurant-3a068.firebaseapp.com",
  projectId: "fast-food-restaurant-3a068",
  storageBucket: "fast-food-restaurant-3a068.appspot.com",
  messagingSenderId: "518725047178",
  appId: "1:518725047178:web:4a27846b2159110f606e73",
  measurementId: "G-W8TEZXJ25K",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
