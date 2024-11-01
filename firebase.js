
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  import { getAuth ,signOut ,createUserWithEmailAndPassword ,updateProfile,signInWithEmailAndPassword,onAuthStateChanged,sendEmailVerification  } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";



  const firebaseConfig = {
    apiKey: "AIzaSyAooU0d-6boB47m3NkhPXaI_bj8B7-EctE",
    authDomain: "fir-uthentication-5942c.firebaseapp.com",
    projectId: "fir-uthentication-5942c",
    storageBucket: "fir-uthentication-5942c.appspot.com",
    messagingSenderId: "708235174726",
    appId: "1:708235174726:web:bdbf34aabb8a1f26aabb47"
  };

  const app = initializeApp(firebaseConfig);

  export {getAuth,signOut ,createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword,onAuthStateChanged ,sendEmailVerification }
