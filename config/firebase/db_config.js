import firebase from 'firebase/app';
import 'firebase/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBz4tN7zvbTQb3JBu3ROu7Hp-ePMrHbb64",
    authDomain: "flashcardapp-7f4f8.firebaseapp.com",
    projectId: "flashcardapp-7f4f8",
    storageBucket: "flashcardapp-7f4f8.firebasestorage.app",
    messagingSenderId: "104377682313",
    appId: "1:104377682313:web:1784967e925ecaacbfb958",
    measurementId: "G-Z17FPLCQ1H"
};

const app = !firebase.apps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };