// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJiiF9YXrynKzt5gYE7DcV4XI6rBuG51Q",
    authDomain: "hello-project-1a4e2.firebaseapp.com",
    projectId: "hello-project-1a4e2",
    storageBucket: "hello-project-1a4e2.appspot.com",
    messagingSenderId: "370726300511",
    appId: "1:370726300511:web:ac8aeb82d2b3954913a4ea",
    measurementId: "G-25XLGC6TCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);