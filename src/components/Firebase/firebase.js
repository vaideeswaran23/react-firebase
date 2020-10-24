import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
//     measurementId: process.env.REACT_APP_MEASUREMENT_ID
//   };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyBlWf1myB0kQ4nxrpMXITfCORLsM5MP0q0",
    authDomain: "my-firebase-project-vaidee.firebaseapp.com",
    databaseURL: "https://my-firebase-project-vaidee.firebaseio.com",
    projectId: "my-firebase-project-vaidee",
    storageBucket: "my-firebase-project-vaidee.appspot.com",
    messagingSenderId: "192498256200",
    appId: "1:192498256200:web:548403d646409ee0270b7d",
    measurementId: "G-L86444BHWW"
  };
  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
      this.db = app.database();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

  }
  
  export default Firebase;