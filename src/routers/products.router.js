import {Router} from 'express';
const router = Router();

import { getAllProducts, getProductById } from '../controllers/products.controller.js';


// Prefijo para la ruta /api/products
router.get('/', getAllProducts);
router.get('/:id', getProductById);









export default router;