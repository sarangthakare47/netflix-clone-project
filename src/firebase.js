import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBn-P7Ee-tVLdN2ZaJWUABvLvY82eZk-gA",
  authDomain: "netflix-clone-b357e.firebaseapp.com",
  projectId: "netflix-clone-b357e",
  storageBucket: "netflix-clone-b357e.firebasestorage.app",
  messagingSenderId: "999457615270",
  appId: "1:999457615270:web:99db3dc80cb27108dbb367"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password );
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        });
    } catch (error) {
        console.log(error);
        alert(error);
        
    }
}

const login = async(email, password)=>{
     try {
        await signInWithEmailAndPassword(auth, email, password);
     } catch (error) {
        
        console.log(error);
        alert(error);
     }
}
const logout = ()=>{
    signOut(auth);
}
export{auth, db, login, signup, logout};



