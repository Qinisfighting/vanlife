import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
  } from "firebase/firestore"
  import { getAuth } from "firebase/auth";
  import { getDatabase } from 'firebase/database';
  import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCx4jCyaZqqSEQ6Fs_1osmAzLKx46uOyyY",
  authDomain: "qinsvanlife.firebaseapp.com",
  projectId: "qinsvanlife",
  storageBucket: "qinsvanlife.appspot.com",
  messagingSenderId: "10917108861",
  appId: "1:10917108861:web:bfe9769ccb16b534132514",
  measurementId: "G-G3SPS3JGYP"
};
const app = initializeApp(firebaseConfig);
//const isLoggedIn = localStorage.getItem("loggedin")

//export const user = auth.currentUser;
export default app;
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app);
export const database = getDatabase(app);

const vansCollectionRef = collection(db, "vans")

export async function getVans(id) {

    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))
    return id? dataArr.filter(item => item.id === id)[0] : dataArr
  }
  
  export async function getHostVans(id) {
    const querySnapshot = await getDocs(vansCollectionRef)
    const dataArr = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))
    return id? dataArr.filter(item => item.id === id)[0]
           : dataArr.filter(item => item.hostId === '123') 
           // : dataArr.filter(item => user?item.hostId === "123"
             //                            :item.hostId === user.uid) 
  }




/**
 * data fetch call from raw json file instead of from fasebase
 * 
 * const url =  "https://raw.githubusercontent.com/Qinisfighting/vanlife/main/src/vansData.json"

export async function getVans(id) { 
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return id? data.filter(item => item.id === id)[0] : data
}

export async function getHostVans(id) {
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch hostvans", 
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return id? data.filter(item => item.id === id)[0]
             : data.filter(item => item.hostId === '123')
}

 * 
 * 
 */

