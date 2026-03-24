import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXm1MbM5Yq9ArzY11yIwovZY-Mpx3lnsM",
  authDomain: "manish-dairy-177f6.firebaseapp.com",
  projectId: "manish-dairy-177f6",
  appId: "1:660197742932:web:4f15c8fc2843dd44d9d0c1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);