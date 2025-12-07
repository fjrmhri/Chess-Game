import { getAuth } from "firebase/auth";
import { getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { firebaseConfig } from "@/config/firebase";

const app = getApps()[0] ?? initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { app, auth, db };
