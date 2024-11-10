// import { profileButton } from './home.js';
// console.log(profileButton);

// document.addEventListener('DOMContentLoaded', () => {
// 	console.log(profileButton);

// 	const openDialogButton = profileButton;
// 	const dialogBackdrop = document.getElementById('dialog-backdrop');
// 	const cancelButton = document.getElementById('cancelbtn');

// 	// Check if elements are defined
// 	console.log(openDialogButton);
// 	console.log(cancelButton);

// 	// Function to show dialog
// 	function showDialog() {
// 		dialogBackdrop.classList.remove('hidden', 'pointer-events-none');
// 		dialogBackdrop.classList.add('opacity-100');
// 	}

// 	// Function to hide dialog
// 	function hideDialog() {
// 		dialogBackdrop.classList.add('hidden', 'pointer-events-none');
// 		dialogBackdrop.classList.remove('opacity-100');
// 	}

// 	// Event listeners
// 	openDialogButton && openDialogButton.addEventListener('click', showDialog);
// 	cancelButton && cancelButton.addEventListener('click', hideDialog);

// 	// Close modal on outside click
// 	dialogBackdrop &&
// 		dialogBackdrop.addEventListener('click', (e) => {
// 			if (e.target === dialogBackdrop) {
// 				hideDialog();
// 			}
// 		});
// });
