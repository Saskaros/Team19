
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCrRgYXNRD1vtIPfI2SwAGT0d0GUleayYg",
    authDomain: "comp1800-team19.firebaseapp.com",
    projectId: "comp1800-team19",
    storageBucket: "comp1800-team19.appspot.com",
    messagingSenderId: "10374778089",
    appId: "1:10374778089:web:54394fc2561ca6d1b03478"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore(); //add this to read and write
  var storage = firebase.storage(); //get a reference to the storage service, which is used to create reference in your storage
