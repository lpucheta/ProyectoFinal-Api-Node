import {
     getAllProducts as getAllProductsModel,
     getProductById as getProductByIdModel,
     createProduct as createProductModel,
     deleteProduct as deleteProductModel
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

export const createProduct = async (req, res) => {
    const { title, description, price, stock } = req.body;

    if(!title || !description || price === undefined || stock === undefined || price <= 0){
        return res.status(400).json({
            error: "Todos los campos son obligatorios: title, description, price, stock y el precio debe ser mayor o igual a 0"
        });
    }

    try{
        const newProductData = {
            title,
            description,
            price,
            stock
        };

        const newProduct = await createProductModel(newProductData);
        return res.status(201).json(newProduct);

    } catch(error){
        console.error("Error al crear el producto:", error);
        return res.status(500).json({
             error: "Error al crear el producto" 
            });
        }
}


export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    try{
        const deletedProduct = await deleteProductModel(id);

        if(!deletedProduct){
            return res.status(404).json({
                error: `Producto con ID ${id} no encontrado`
            });
        }

        return res.status(200).json({
            message: `Producto con ID ${id} eliminado correctamente`,
            data: deletedProduct
        });

    }catch(error){
        console.error("Error al eliminar el producto:", error);
        return res.status(500).json({
             error: "Error al eliminar el producto" 
            });
    }
}