
// importing
 import { getAuth,createUserWithEmailAndPassword } from "./firebase.js"


 const auth = getAuth();



let siginUpBtn = document.getElementById("signupBtn")
let signupEmail = document.getElementById("signupEmail")
let signupPassword = document.getElementById("signupPassword")

// you can use regrex to verify the format of email address
// you can check the user if the user giving the fields or not (nesting checking)



siginUpBtn.addEventListener("click",()=>{
    if(signupEmail.value.trim() && signupPassword.value.trim()){
        createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          switch (errorMessage){
           case "Firebase: Error (auth/email-already-in-use).":
            console.log("use other email");
            break;
            
          }
          
        });

    }
    else{
        console.log("insert your data");
        
    }

    location.href = "signin.html"
    
})


