//YOUR FIREBASE LINKS
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
     room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
like=message_data['like'];
message=message_data['message'];
namewithtag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
var message_with_tag="<h4 class='message_h4'>"+message+'</h4>';
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='update_like(this.id)'>";
var span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
row=namewithtag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
 
//End code
      } });  }); }
getData();
function send(){
     msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
function update_like(message_id){
console.log("clicked on like button-"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
});
}