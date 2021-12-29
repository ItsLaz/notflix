import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyCfG6mSqk3XfHU45RZuepuGEKENX579wQk',
    authDomain: 'notflix-77345.firebaseapp.com',
    projectId: 'notflix-77345',
    storageBucket: 'notflix-77345.appspot.com',
    messagingSenderId: '811321929444',
    appId: '1:811321929444:web:de7df211fceb62eaa906f1',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
