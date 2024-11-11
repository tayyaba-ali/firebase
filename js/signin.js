import { signInWithEmailAndPassword, provider, getAuth, GoogleAuthProvider, signInWithPopup } from './firebase.js';

// importing loader
import { startLoader,endLoader } from './app.js';

const auth = getAuth();

let signInPassword = document.getElementById('signInPassword');
let signInEmail = document.getElementById('signInEmail');

let signIn = document.getElementById('signIpBtn');

signIn && signIn.addEventListener('click', () => {
	let email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(signInEmail.value.trim());

	if (email && signInPassword.value.trim()) {
		startLoader();
		signInWithEmailAndPassword(auth, signInEmail.value.trim(), signInPassword.value)
			.then(async (userCredential) => {
				Swal.fire({
					text: 'Logged In',
					icon: 'success',
				});
				const user = userCredential.user;
				setTimeout(() => {
					window.location = 'home.html';
				}, 1500);
				console.log(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode);
				console.log(errorMessage);

				endLoader();

				switch (errorCode.trim()) {
					case 'auth/wrong-password':
						Swal.fire({
							icon: 'error',
							title: 'Oops...',
							text: 'Wrong Password',
						});
						break;
					case 'auth/invalid-credential':
						Swal.fire({
							icon: 'error',
							title: 'Oops...',
							text: 'No user found with this email address.. Please try logging in or use a different email.',
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
	}
	else {
		Swal.fire({
			icon: 'error',
			title: 'Oops...',
			text: 'Please fill out all the required fields.',
		});
	}
});





// Created google btn here will export to main file 

let googleBtn = document.getElementById('loginWithGoogle');
const googleFuntion = () => {
	startLoader();
	signInWithPopup(auth, provider)
		.then((result) => {
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			const user = result.user;
			endLoader();

			console.log(user);
			Swal.fire({
				text: 'user has been successfully logged in with google',
				icon: 'success',
			});
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			const email = error?.customData?.email;
			const credential = GoogleAuthProvider?.credentialFromError(error);
			console.log(errorCode);
			console.log(errorMessage);
			endLoader();
		});
};
googleBtn.addEventListener('click', googleFuntion);

export { googleFuntion, googleBtn };