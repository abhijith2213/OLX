import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAePi9jNL6Dl-uDmcGd4YX03FB-P2K_uKU",
    authDomain: "olx-clone-b1bbe.firebaseapp.com",
    projectId: "olx-clone-b1bbe",
    storageBucket: "olx-clone-b1bbe.appspot.com",
    messagingSenderId: "873873270249",
    appId: "1:873873270249:web:88804e8fdc0902e74f9778",
    measurementId: "G-70PS0GT7FB"
  };

export default  firebase.initializeApp(firebaseConfig);

