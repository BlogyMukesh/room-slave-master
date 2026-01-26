importScripts("https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.14.6/firebase-messaging.js",
);
const firebaseConfig = {
  apiKey: "AIzaSyCjPbIbxPcWL4dq-qrR6ejtrBPygxlmTqI",
  authDomain: "push-funox.firebaseapp.com",
  projectId: "push-funox",
  storageBucket: "push-funox.firebasestorage.app",
  messagingSenderId: "419349256615",
  appId: "1:419349256615:web:35155d095caa61b20d3e82",
  measurementId: "G-7FZG7EJY2C",
};
firebase.initializeApp(firebaseConfig);
firebase.messaging();
