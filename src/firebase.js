import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCDipAheEzAiGwSe2mn4n3AySOzxcrvPKI",
  authDomain: "food-wastage-management-8e763.firebaseapp.com",
  projectId: "food-wastage-management-8e763",
  storageBucket: "food-wastage-management-8e763.appspot.com",
  messagingSenderId: "48891073033",
  appId: "1:48891073033:web:b464c6ec40799a6fc89ed8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
