// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyDLyc0rx_eaZFZfpx1nri1u2f7ToObMUlk",
//   authDomain: "my-photography-site-995a1.firebaseapp.com",
//   projectId: "my-photography-site-995a1",
//   storageBucket: "my-photography-site-995a1.appspot.com",
//   messagingSenderId: "172676968873",
//   appId: "1:172676968873:web:83c4bc7e7eab48f2f394b8"
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;