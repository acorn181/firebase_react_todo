import firebase from 'firebase';

// ほげ
const config = {
    apiKey: "AIzaSyDIWnbJ4Z4EX9dZpkgAH-pAXM0LbSe_jqM",
    authDomain: "sample-masahich.firebaseapp.com",
    databaseURL: "https://sample-masahich.firebaseio.com",
    projectId: "sample-masahich",
    storageBucket: "sample-masahich.appspot.com",
    messagingSenderId: "922515761638",
    appId: "1:922515761638:web:e8c5e293ad2a6f896e8e27",
    measurementId: "G-1L92SGZSWJ"
};
const firebaseApp = firebase.initializeApp(config);
export const firestore = firebaseApp.firestore();
