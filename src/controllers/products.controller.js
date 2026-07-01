import {
     getAllProducts as getAllProductsModel,
     getProductById as getProductByIdModel
    } from '../models/Products.js';


export const getAllProducts = async (req, res) => {
    try{
        const productos = await getAllProductsModel();
        return res.status(200).json(productos);

    } catch(error){
        console.error("Error al obtener los productos:", error);
        return res.status(500).json({
             error: "Error al obtener los productos" 
            });
    }
}


export const getProductById = async (req, res) => {
    const { id } = req.params;

    try{
        const producto = await getProductByIdModel(id);

        if(!producto){
            return res.status(404).json({
                error: `Producto con ID ${id} no encontrado`
            });
        }

        return res.status(200).json(producto);

    } catch(error){
        console.error("Error al obtener el producto:", error);
        return res.status(500).json({
             error: "Error al obtener el producto" 
            });
    }
}