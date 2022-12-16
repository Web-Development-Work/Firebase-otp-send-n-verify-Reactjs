import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD6OnVHaNwY0W3zUtdjuoFLCYMdiVfc9Os",
  authDomain: "otpverifys.firebaseapp.com",
  projectId: "otpverifys",
  storageBucket: "otpverifys.appspot.com",
  messagingSenderId: "924667939905",
  appId: "1:924667939905:web:c1fcfb6b194cc60e1a0ac0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase
