import  firebase from "firebase";
import 'firebase/storage'
import "firebase/auth"


var firebaseConfig = {
    apiKey: "AIzaSyAHeiR8J_KeVd2NoZQIG4rRon6qgxp7ImE",
    authDomain: "liyonta-weblk.firebaseapp.com",
    databaseURL: "https://liyonta-weblk-default-rtdb.firebaseio.com",
    projectId: "liyonta-weblk",
    storageBucket: "liyonta-weblk.appspot.com",
    messagingSenderId: "931453816706",
    appId: "1:931453816706:web:12e98bde5d280dc104899b",
    measurementId: "G-FD35PQBR4N"
  };
  
  var fireDb = firebase.initializeApp(firebaseConfig);
  var firebasedb = fireDb.database().ref()

  const projectStorage  = firebase.storage();
  const projectFirestore  = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  const storage = firebase.storage();
  
  export const auth = firebase.auth()
  export  {projectStorage , projectFirestore , firebasedb , timestamp , storage, firebase as default};