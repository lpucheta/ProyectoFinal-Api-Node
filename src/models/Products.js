import db from '../config/firebase.js';
import { collection, getDocs, getDoc ,doc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");


// Todos los productos
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
        throw error;
    }

}

// Producto por Id
export const getProductById = async (id) => {
    try{
        const productRef = doc(productsCollection, id);
        const snapshot = await getDoc(productRef);

        if(!snapshot.exists()){
            return null;
        }
        return {
            id: snapshot.id,
            ...snapshot.data()
        }

    } catch(error){
        console.error("Error al obtener el producto:", error);
        throw error;
    }
}

// Crear un nuevo producto

export const createProduct = async(productData)=> {
    try{
        const docRef = await addDoc(productsCollection, productData);
        return { 
            id: docRef.id,
            ...productData 
        };
    }catch(error){
        console.error("Error al crear el producto:", error);
        throw error;
    }
}




