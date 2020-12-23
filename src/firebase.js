import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyD9SP6hjUSflUMwecc4WhvFcjodB9vsIN4",
    authDomain: "facebook-clone-3a7d2.firebaseapp.com",
    projectId: "facebook-clone-3a7d2",
    storageBucket: "facebook-clone-3a7d2.appspot.com",
    messagingSenderId: "647422996581",
    appId: "1:647422996581:web:08310b0dafd86cd008968c",
    measurementId: "G-4DQ1MQVJRE"
  };
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth =firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;