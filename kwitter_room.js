
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

     user_name=localStorage.getItem("user_name");
     document.getElementById("username").innerHTML="Welcome" +user_name +"!";
     function addroom()
     {
           var Room_name=document.getElementById("room_name").value;
           firbase.database().ref("/").child(Room_name).update({
               purpose:"adding_room_name"  
           });
           localStorage.setItem("Room_name",Room_name);
           window.location="Kwitter_page.html";
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_name"- +Room_names);
      row="<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Room_name",name);
      window.location="Kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
