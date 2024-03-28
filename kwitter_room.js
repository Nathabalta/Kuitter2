

var firebaseConfig = {
      apiKey: "AIzaSyAU1z_7UwoeRQx16S7W3XNxZqgIMDSYHoE",
      authDomain: "kuitter-06-03-24.firebaseapp.com",
      databaseURL: "https://kuitter-06-03-24-default-rtdb.firebaseio.com",
      projectId: "kuitter-06-03-24",
      storageBucket: "kuitter-06-03-24.appspot.com",
      messagingSenderId: "158797358198",
      appId: "1:158797358198:web:b18b4a3f566d76a033eb57"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
   user_name = localStorage.getItem("user_name");
   room_name = localStorage.getItem("room_name");
   document.getElementById("user_name").innerHTML = "Hola " + user_name + "!";
   function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpuse:"Adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location.replace("kwitter_page.html");
   }

   

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
row = "<div class = 'room_name' id ="+ Room_names + "onclick = 'redirectToRoomName(this.id)'>#"+ Room_names + " </div><hr>";
document.getElementById("output").innerHTML += row;
      //Final del código
      });});}
getData();


function redirectToRoomName(Room_names) { console.log(Room_names); localStorage.setItem("room_name", Room_names); window.location = "kwitter_page.html"; }


function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("kwitter_page.html");
}