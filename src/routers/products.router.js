import {Router} from 'express';
const router = Router();

import { getAllProducts, getProductById, createProduct, deleteProduct } from '../controllers/products.controller.js';
import {authentication} from '../middlewares/auth.middleware.js';

// Prefijo para la ruta /api/products
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.delete('/:id', authentication, deleteProduct);
router.post('/', authentication, createProduct);


export default router;