// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, doc, addDoc, set } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA7zfT5wT7YHuG9UPv-AgYcGzw1taChcw",
  authDomain: "clone-57593.firebaseapp.com",
  projectId: "clone-57593",
  storageBucket: "clone-57593.appspot.com",
  messagingSenderId: "881719108422",
  appId: "1:881719108422:web:991fffe62957061584fb47",
};
// Use this to initialize the firebase App
const app = initializeApp(firebaseConfig);

//init services
export const auth = getAuth(app);
export const db = getFirestore();

//collection reference
//const colRef = collection(db, 'users');

// export const update = db
//   .collection("users")
//   .doc("frank")
//   .set({
//     name: "Frank",
//     favorites: {
//       food: "Pizza",
//       color: "Blue",
//       subject: "Recess",
//     },
//     age: 12,
//   })
//   .then(function () {
//     console.log("Frank created");
//   });
