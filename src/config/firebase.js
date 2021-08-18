import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCeYkuluUE3I4ftKb06GsMghjf9KIs21lE",
    authDomain: "crested-trilogy-322110.firebaseapp.com",
    projectId: "crested-trilogy-322110",
    storageBucket: "crested-trilogy-322110.appspot.com",
    messagingSenderId: "372363830323",
    appId: "1:372363830323:web:1aaad9229b666a60a76f46"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
};

export default firebase;

