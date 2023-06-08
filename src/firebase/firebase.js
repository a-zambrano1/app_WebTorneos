import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./firebase-config";
import { initializeApp } from 'firebase/app';
import { getAuth, browserLocalPersistence, setPersistence } from 'firebase/auth'

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
(async () => {
  await setPersistence(auth, browserLocalPersistence);
})();
export default getFirestore(app);