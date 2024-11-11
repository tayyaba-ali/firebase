import {
	signOut,

	deleteUser,
	reauthenticateWithCredential,
	auth,
	collection,
	db,
	getDoc,
	doc,
	EmailAuthProvider,
} from './firebase.js';

// Dropdown Menu Toggle
// document.getElementById('user-menu-button').addEventListener('click', () => {
// 	const dropdownMenu = document.getElementById('dropdown-menu');
// 	dropdownMenu.classList.toggle('hidden');
// });
// let profileButton = document.getElementById('open-dialog-button');
// profileButton.addEventListener(("click"), () => {
//     window.location="profile.html"
// })
// export { profileButton };

// User status tracking



// display name funcion
const displayName = (name) => {
	console.log(name);
	
	document.getElementById('userName').innerHTML = `
        <div class='flex justify-center items-center space-x-4'>
            <h1
                class='rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white'
                aria-current='page'>
                ${name || 'Guest'}
            </h1>
        </div>`;
};

console.log(auth.currentUser);


if (auth.currentUser) {
	let uid = auth.currentUser.uid;
	console.log('User is already signed in:', uid);

	const docRef = doc(db, 'users', uid);
	const docSnap = await getDoc(docRef);
	if (docSnap.exists()) {
		displayName(docSnap.data().name);
	} else {
		// docSnap.data() will be undefined in this case
		displayName(auth.currentUser.name);
	}
} else {
	console.log('No user signed in');
	// window.location.href = 'signin.html';
}

let logoutBtn = document.getElementById('logout');
logoutBtn.addEventListener('click', () => {
	signOut(auth)
		.then(() => {
			Swal.fire({
				text: 'Your account has been logged out',
				icon: 'success',
			});
			
			if (!(window.location.href == "http://127.0.0.1:5501/signin.html")) {
			
				window.location.href="signin.html"
			}
		})
		.catch((error) => {
			console.log(error);
		});
});

// deleting profile

// let dltPro = document.getElementById('dltPro');


// const user = auth.currentUser;



// dltPro.addEventListener('click', () => {

// 	deleteUser(user)
// 		.then(() => {
// 			localStorage.removeItem('currentUser');
// 			Swal.fire({
// 				text: 'Your account has been delted',
// 				icon: 'success',
// 			});
// 			if (!window.location.href == 'http://127.0.0.1:5501/index.html') {
// 				window.location.href == 'index.html';
// 			}
// 		})
// 		.catch((error) => {
// 			console.log(error);
// 		});
// });


// reauthenticateWithCredential(user, credential)
// 	.then(() => {
// 		console.log("done");
		
// 		// User re-authenticated.
// 	})
// 	.catch((error) => {
// 		console.log(error);
		
// 		// An error ocurred
// 		// ...
// 	});



// 	const promptForCredentials = () => {
// 		const email = prompt('gujek@mailinator.co');
// 		const password = prompt('');
// 		return { email, password };
// 	};

// 	dltPro.addEventListener('click', () => {
// 		if (user) {
// 			// Prompt user to enter email and password again
// 			const { email, password } = promptForCredentials();
// 			const credential = EmailAuthProvider.credential(email, password);

// 			// Reauthenticate user
// 			reauthenticateWithCredential(user, credential)
// 				.then(() => {
// 					// After reauthentication, delete user
// 					return deleteUser(user);
// 				})
// 				.then(() => {
// 					localStorage.removeItem('currentUser');
// 					Swal.fire({
// 						text: 'Your account has been deleted',
// 						icon: 'success',
// 					});
// 					window.location.href = 'index.html';
// 				})
// 				.catch((error) => {
// 					console.error('Error during deletion:', error);
// 					Swal.fire({
// 						icon: 'error',
// 						text: 'Reauthentication failed. Unable to delete account.',
// 					});
// 				});
// 		} else {
// 			console.log('No authenticated user found');
// 		}
// 	});
