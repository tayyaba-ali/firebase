import {
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  updateProfile,
  signOut,
} from "./firebase.js";

const auth = getAuth();
let profilePage = document.getElementById("profile-page");

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(user);

    profilePage.innerHTML = `<div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Full Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">${user.displayName}</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                  Profile pic
                  <img src="${user.photoURL}"   width="75px" /> 
                  </p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">${user.email}</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Phone</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">(097) 234-5678</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Mobile</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">(098) 765-4321</p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Address</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">Bay Area, San Francisco, CA</p>
                </div>
                 <div class="col-sm-9">
                  <p class="text-muted mb-0">${
                    user.emailVerified ? "yes" : "no"
                  }</p>
                </div>
              </div>
            </div>

            
<button type="button" class="btn btn-success" id="verifyEmail">Verify your email</button>
          </div>
          <button type="button" class="btn btn-success" id="updateProfile">Update profile</button>
           <button type="button" class="btn btn-success" id="signOut">Sign Out</button>
          </div>`;

    //   verifyEmail
    document.getElementById("verifyEmail").addEventListener("click", () => {
      sendEmailVerification(auth.currentUser).then(() => {
        console.log("email has been sent");
      });
    });

    //   update profile

    document.getElementById("updateProfile").addEventListener("click", () => {
      updateProfile(auth.currentUser, {
        displayName: "Saylani",
        photoURL:
          "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png",
      })
        .then(() => {
          console.log("update");
        })
        .catch((error) => {
          console.log(error);
        });
    });


    // sigh out 
    document.getElementById("signOut").addEventListener("click", () => {
        signOut(auth).then(() => {
            console.log("user has been signed out");

            
          }).catch((error) => {
            console.log(error);
            
          });
      });

  } else {
    console.log("user is logout out");
  }
});
