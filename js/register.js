document.getElementById("signUp").onclick = function () {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var number = document.getElementById("phonenumber").value;
  var name = document.getElementById("username").value;

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
      // Add a new document in collection "cities"
      firebase.firestore().collection("users")
        .doc()
        .set({
          name: name,
          number: number,
          userId: user.uid
          
        })
        .then(() => {
          console.log("Document successfully written!");

          window.location.href = "booking.html"
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });

}