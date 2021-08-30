
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyChXOkERIXIHrqqgeJj8u7J24uRVFKdBoA",
  authDomain: "game-9035c.firebaseapp.com",
  databaseURL: "https://game-9035c-default-rtdb.firebaseio.com",
  projectId: "game-9035c",
  storageBucket: "game-9035c.appspot.com",
  messagingSenderId: "889122120437",
  appId: "1:889122120437:web:1db105a729461f4b0f1bbc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  localStorage.setItem("roomname", room_name);

  window.location = "kwitter_page.html";

  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding Room Name"
  });

}



function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code

      //End code
    });
  });
}
getData();
