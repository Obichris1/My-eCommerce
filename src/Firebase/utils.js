import { initializeApp} from 'firebase/app';
import 'firebase/firestore'
// import db from './firebase/firestore'

import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { firebaseConfig } from './config'
import { getFirestore,doc,setDoc, collection,getDoc,on} from 'firebase/firestore';


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const firestore = getFirestore(app)

const GoogleProvider = new GoogleAuthProvider()
GoogleProvider.setCustomParameters({prompt : 'select_account'})
export const signInWithGoogle = () => signInWithPopup(auth, GoogleProvider)


// handling users in the firestore database

export const handleUserProfile = async (userAuth , additionalData) => {

    if(!userAuth) return   // if there is no user...return userAuth

    const {uid} = userAuth    //destructuing the uid from the userAuth(user)

    const userRef = doc(firestore,  `users/${uid}`)   // returns a document that we can later add data to. 

    const snapShot = await getDoc(userRef);        // the .get() method returns an object of the users
    
    if (!snapShot.exists()){      //if user does not exists

        const{displayName, email} = userAuth;
        const timeStamp = new Date()

        try {

             await setDoc( userRef,{                              //set a user 
                displayName,
                email,
                createdDate : timeStamp,
                ...additionalData

            })         
            
        } catch (error) {
            console.log(error);
            
        }
    }

    return userRef                                       //return the user document


    
}