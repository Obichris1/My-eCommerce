import { initializeApp} from 'firebase/app';
import 'firebase/firestore'

import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { firebaseConfig } from './config'
import { getFirestore } from 'firebase/firestore';


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const firestore = getFirestore(app)

const GoogleProvider = new GoogleAuthProvider()
export const signInWithGoogle = () => signInWithPopup(auth, GoogleProvider)