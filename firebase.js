var firebaseConfig = {
    apiKey: "AIzaSyDUEZuGq_uPrfJxP3ZADHZW4ZqFnFyHXNk",
    authDomain: "wedding-app-40ddf.firebaseapp.com",
    projectId: "wedding-app-40ddf",
    storageBucket: "wedding-app-40ddf.firebasestorage.app",
    messagingSenderId: "367662907469",
    appId: "1:367662907469:web:a7c0922ff39f460603dc04"
    };
  
  
  var app = firebase.initializeApp(firebaseConfig);
  
  
  function signup(){
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var password = document.getElementById('password');
  
      firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user);
      
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      
    });
      
    }
  
  
    function login(){
      var email = document.getElementById('Loginemail');
      var password = document.getElementById('Loginpassword');
  
  
      firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
       console.log(user);
       window.location.href = './firebase.html'
       
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        
      });
  
    }