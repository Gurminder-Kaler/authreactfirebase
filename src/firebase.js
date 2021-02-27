import firebase from "firebase/app";
import "firebase/auth";
{
  console.log("Firebase Connected");
}
const app = firebase.initializeApp({
  apiKey: "AIzaSyAu7YLceJfd-s0mkfIrFQ_I94Ih0qiaRGc",
  authDomain: "auth-development-7aeff.firebaseapp.com",
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: "auth-development-7aeff",
  storageBucket: "auth-development-7aeff.appspot.com",
  messagingSenderId: "252171817823",
  appId: "1:252171817823:web:4f15a59d4024ff61eddcea",
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = app.auth();
export default app;
