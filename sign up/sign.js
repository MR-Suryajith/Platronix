src = "https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js";
src = "https://www.gstatic.com/firebasejs/8.2.7/firebase-auth.js";
let output = document.getElementById("output");
// Your web app's Firebase configuration
var initialConfig = {
  apiKey: "AIzaSyBAEXfaeOWZntDKg2QaczerIk6l5cxl-NI", // change API keu
  authDomain: "platronix-9f52e.firebaseapp.com", // change domain
  projectId: "platronix-9f52e", // change project Id
};

// Initialize Firebase
firebase.initializeApp(initialConfig);
const authenticate = firebase.auth();
const database = firebase.database();
// Check if there are any active users
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var email = user.email;
    output.innerHTML = "Active user is " + email + "<br>";
  } else {
    output.innerHTML = "No active users" + "<br>";
  }
});

// add users
function addUsers() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

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
