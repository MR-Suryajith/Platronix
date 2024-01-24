src = "https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js";
src = "https://www.gstatic.com/firebasejs/8.2.7/firebase-database.js";

let output = document.getElementById("output");

// Your web app's Firebase configuration
var initialConfig = {
  apiKey: "AIzaSyBAEXfaeOWZntDKg2QaczerIk6l5cxl-NI",
  authDomain: "platronix-9f52e.firebaseapp.com",
  databaseURL: "https://platronix-9f52e-default-rtdb.firebaseio.com",
  projectId: "platronix-9f52e",
  storageBucket: "platronix-9f52e.appspot.com",
  messagingSenderId: "210843765767",
  appId: "1:210843765767:web:dfed850007c515bfbaaea2",
  measurementId: "G-SVS4VHZG7Y",
};

// Initialize Firebase
firebase.initializeApp(initialConfig);
const authenticate = firebase.auth();
const database = firebase.database();
// Check if there are any active users


// add users
function addUsers() {
  var firstname = document.getElementById("First Name").value;
  var lasttname = document.getElementById("Last Name").value;
  var username = document.getElementById("Username").value;
  var email = document.getElementById("Email Adress").value;
  var password = document.getElementById("password").value;
  var Confirmpassword = document.getElementById("Confirm Password").value;

  // adding users via the promise
  authenticate
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      output.innerHTML = "User added successfully";
      ("<br>");
    })
    .catch((e) => {
      output.innerHTML = "Some error occurred - " + e.message + "<br>";
    });
}

// login function
function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  authenticate
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      output.innerHTML = "User login successfully" + "<br>";
      window.location.href = "index.html";
    })
    .catch((e) => {
      output.innerHTML = "Some error occurred - " + e.message + "<br>";
    });
}

// logout currently logged-in user
