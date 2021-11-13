
var firebaseConfig = {
    apiKey: "AIzaSyDtmDzRTEjJazKNo5eMcrgOjZZ8LQ62qaA",
    authDomain: "kwitter-71c92.firebaseapp.com",
    databaseURL: "https://kwitter-71c92-default-rtdb.firebaseio.com",
    projectId: "kwitter-71c92",
    storageBucket: "kwitter-71c92.appspot.com",
    messagingSenderId: "655033931111",
    appId: "1:655033931111:web:1796fd246b2bc3a2dd4bc2"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   function adduser(){
       username=document.getElementById("username").value;
       firebase.database().ref("/").child(username).update({
           purpose:"adding user"
       });
   }

