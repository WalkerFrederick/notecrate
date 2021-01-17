import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCu0OtToxRxjTH4MD6VnnVQj9jOZhugjdQ",
    authDomain: "notecrate-5849b.firebaseapp.com",
    projectId: "notecrate-5849b",
    storageBucket: "notecrate-5849b.appspot.com",
    messagingSenderId: "1086540562059",
    appId: "1:1086540562059:web:c5777872f5898376399e8e",
    measurementId: "G-MFCCV62KSX"
};
 
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
  }
  doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password);

}

export default Firebase;
