import { getAllProducts as getAllProductsModel } from '../models/Products.js';


export const getAllProducts = async (req, res) => {
    try{
        const productos = await getAllProductsModel();
        return res.status(200).json(productos);

    } catch(error){
        console.error("Error al obtener los productos:", error);
        res.status(500).json({ error: "Error al obtener los productos" });
    }
}