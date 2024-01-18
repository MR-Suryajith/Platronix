const firebaseConfig = {
    apiKey: "AIzaSyAMstWHVnqvGOJIpAtfk-nAMzKn1hb_PlM",
    authDomain: "platronix.firebaseapp.com",
    databaseURL: "https://platronix-default-rtdb.firebaseio.com",
    projectId: "platronix",
    storageBucket: "platronix.appspot.com",
    messagingSenderId: "1035820636155",
    appId: "1:1035820636155:web:15ea0b42c681e3e3f41d5e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var PlatronixDB = firebase.database().ref('Platronix');
  document.getElementById('Platronix').addEventListener('submit',loginform);

  function loginform(e){
    e.preventDefault();
    var username = getElementVal('username');
    var password =getElementVal('password');
    saveMessasges(username,password);

  }

  const saveMessasges = (username,password) =>{
    var newPlatronix = PlatronixDB.push();
    newPlatronix.set({
      username:username,
      password:password,
    });
  }
  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  
  };