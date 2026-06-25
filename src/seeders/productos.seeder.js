import db from '../config/firebase.js';
import { collection, addDoc } from "firebase/firestore";

const productsCollection = collection(db, "products");


// Productos de prueba para poblar la base de datos
const productos = [
    {
        title: "World of Warcraft",
        description: "MMORPG ambientado en el mundo de Azeroth.",
        price: 15.00,
        stock: 100
    },
    {
        title: "The Witcher 3: Wild Hunt",
        description: "RPG ambientado en un mundo abierto lleno de monstruos y aventuras.",
        price: 19.99,
        stock: 50
    },
    {
        title: "Cyberpunk 2077",
        description: "RPG de mundo abierto ambientado en un futuro distópico.",
        price: 29.99,
        stock: 75
    }
]

const createProducts = () => {
    productos.forEach( async (producto) => {
        await addDoc(productsCollection, producto);
    })
}
createProducts();

