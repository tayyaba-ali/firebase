import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import {
	// database
	getFirestore,
	collection,
	addDoc,
	getDocs,
	getDoc,
	doc,
	setDoc,
	
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';
import {
	// authenticaion
	createUserWithEmailAndPassword,

	// manage users
	signOut,
	updateProfile,
	deleteUser,
	// state tracking
	onAuthStateChanged,
	// email verificaition
	sendEmailVerification,
	// sigin
	signInWithEmailAndPassword,
	reauthenticateWithCredential,
	
	
EmailAuthProvider,
	// google
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
} from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';

const firebaseConfig = {
	apiKey: 'AIzaSyAooU0d-6boB47m3NkhPXaI_bj8B7-EctE',
	authDomain: 'fir-uthentication-5942c.firebaseapp.com',
	projectId: 'fir-uthentication-5942c',
	storageBucket: 'fir-uthentication-5942c.firebasestorage.app',
	messagingSenderId: '708235174726',
	appId: '1:708235174726:web:bdbf34aabb8a1f26aabb47',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



// google 
const provider = new GoogleAuthProvider();
const auth = getAuth();
export {
	getAuth,
	signOut,
	createUserWithEmailAndPassword,
	updateProfile,
	deleteUser,

	// signin
	signInWithEmailAndPassword,
	onAuthStateChanged,
	sendEmailVerification,
	GoogleAuthProvider,
	signInWithPopup,
	getFirestore,
	collection,
	addDoc,
	db,
	getDocs,
	getDoc,
	doc,
	setDoc,
	// google
	auth,
	provider,
	reauthenticateWithCredential,

	EmailAuthProvider,
};
