// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

console.log('inside firebase config', import.meta.env.VITE_appId)

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyAZY3PDwUk2kO6lkhG0VX0VFl3Ib1rANOQ",
    // authDomain: "b8a9-event-management-bdjahid.firebaseapp.com",
    // projectId: "b8a9-event-management-bdjahid",
    // storageBucket: "b8a9-event-management-bdjahid.appspot.com",
    // messagingSenderId: "375060570467",
    // appId: "1:375060570467:web:e0717361ac253b48807356",

    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;