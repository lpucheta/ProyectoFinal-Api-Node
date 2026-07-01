import {Router} from 'express';
const router = Router();

import { getAllProducts } from '../controllers/products.controller.js';


// Prefijo para la ruta /api/products
//Todos los productos
router.get('/', getAllProducts);









export default router;