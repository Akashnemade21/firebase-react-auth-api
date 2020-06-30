import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDcOqxlBfS5tBQfGcPuTpgnJCNs_C5tcYk",
  authDomain: "first-pro-71e91.firebaseapp.com",
  databaseURL: "https://first-pro-71e91.firebaseio.com",
  projectId: "first-pro-71e91",
  storageBucket: "first-pro-71e91.appspot.com",
  messagingSenderId: "1015178498017",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;
