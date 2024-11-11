// Main JavaScript file

// Import necessary Firebase functions and variables
import {
	getAuth,
	createUserWithEmailAndPassword,
	// databsee
	db,
	setDoc,
	doc,
	onAuthStateChanged,
	auth,
	provider,
	signInWithPopup,
	GoogleAuthProvider,
} from './firebase.js';

// Import Google authentication function and button reference
import { googleFuntion, googleBtn } from './signin.js';

// User status tracking
onAuthStateChanged(auth, (user) => {
	if (user) {
		console.log('User is already signed in:', user);
	
	} else {
		console.log('No user signed in');
		if (!window.location.href == 'http://127.0.0.1:5501/signin.html') {
			console.log('hi');
			window.location.href = 'signin.html';
		}
	}
});
// Getting signup fields
let signupBtn = document.getElementById('signupBtn');
let signupEmail = document.getElementById('signUpEmail');
let signUpName = document.getElementById('signUpName');
let signupPassword = document.getElementById('signUpPassword');
let signupAddress = document.getElementById('signUpAddress');
let signupPhone = document.getElementById('signUpPhone');

// Loader functionality
let loader = document.getElementsByClassName('loader')[0];
const startLoader = () => {
	loader.style.display = 'block';
};

const endLoader = () => {
	loader.style.display = 'none';
};

signupBtn &&
	signupBtn.addEventListener('click', () => {
		let email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(signupEmail.value.trim());
		let phoneNo = /^\+1\s\(\d{3}\)\s\d{3}-\d{4}$/.test(signupPhone.value.trim());

		if (email && signupPassword.value.trim() && signupAddress.value.trim() && phoneNo) {
			startLoader();

			createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
				.then(async (userCredential) => {
					Swal.fire({
						text: 'Your account has been created',
						icon: 'success',
					});
					const user = userCredential.user;
					let userObj = {
						address: signupAddress.value.trim(),
						phone: signupPhone.value.trim(),
						name: signUpName.value.trim(),
					};
					try {
						await setDoc(doc(db, 'users', user.uid), {
							...userObj,
						});
					} catch (e) {
						console.log(e);
					}

					endLoader();
					setTimeout(() => {
						window.location = 'signin.html';
					}, 1500);
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					endLoader();

					switch (errorCode.trim()) {
						case 'auth/weak-password':
							Swal.fire({
								icon: 'error',
								title: 'Oops...',
								text: 'Password length should be at least 6 characters',
							});
							break;
						case 'auth/email-already-in-use':
							Swal.fire({
								icon: 'error',
								title: 'Oops...',
								text: 'An account with this email already exists. Please try logging in or use a different email.',
							});
							break;
						default:
							console.log('Unknown error:', errorCode);
							Swal.fire({
								icon: 'error',
								title: 'Error',
								text: 'Something went wrong, please try again.',
							});
					}
				});
		} else {
			if (!email) {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Please enter a valid email address.',
				});
			} else if (!phoneNo) {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Invalid phone number. Please enter a phone number with the correct format (e.g., +1 234-567-8901).',
				});
			} else {
				endLoader();
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Please fill out all the required fields.',
				});
			}
		}
	});

// Wait until the DOM is fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
	// Google login button event listener
	googleBtn.addEventListener('click', googleFuntion);
	
});

// Exporting startLoader and endLoader

export { startLoader, endLoader };
