import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyDM8Pzpyb_uJHG08PYmlX94H6CZd-RRqQo",
    authDomain: "lucas-marioplan.firebaseapp.com",
    databaseURL: "https://lucas-marioplan.firebaseio.com",
    projectId: "lucas-marioplan",
    storageBucket: "lucas-marioplan.appspot.com",
    messagingSenderId: "508096727682",
    appId: "1:508096727682:web:1f81a9ceb373f4f1ef829b",
    measurementId: "G-M04P3HWNY2"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;