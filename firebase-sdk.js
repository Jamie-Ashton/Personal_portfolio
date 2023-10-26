
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase, ref, set} from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaPJ1NS3zYXnEsAbPpH6PqHBR5oOUbIdA",
  authDomain: "personal-portfolio-85009.firebaseapp.com",
  databaseURL: "https://personal-portfolio-85009-default-rtdb.firebaseio.com",
  projectId: "personal-portfolio-85009",
  storageBucket: "personal-portfolio-85009.appspot.com",
  messagingSenderId: "826713326618",
  appId: "1:826713326618:web:7a19401dff54da23ab7da3",
  measurementId: "G-29F4PDWSB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function writeUserData(userId, name, email, imageUrl) {
const db = getDatabase();
const reference = ref(db, 'user/' + userId);
set(reference, {
  username: name,
  email: email,
  profile_picture : imageUrl
});
}

writeUserData("jamie", "ashton,", "jamienoealashton@gmail.com", "myimageURL")
