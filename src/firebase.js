// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIkJw5qnqdU2g9xJIcCgFraHH_rVn_U1U",
  authDomain: "echosystem-485df.firebaseapp.com",
  projectId: "echosystem-485df",
  storageBucket: "echosystem-485df.appspot.com",
  messagingSenderId: "251611996826",
  appId: "1:251611996826:web:5d0c4b72c86c2485e23523",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };
  