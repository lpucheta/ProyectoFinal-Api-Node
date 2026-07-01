import db from '../config/firebase.js';
import { collection, getDocs, getDoc ,doc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");

export const getAllProducts = async () => {
    try{
        const snapshot = await getDocs(productsCollection);

        const productos = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return productos;

    } catch(error){
        console.error("Error al obtener los productos:", error);
        //throw error;
    }

}