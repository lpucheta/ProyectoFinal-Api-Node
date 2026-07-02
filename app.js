import express from 'express';
import cors from 'cors';

import productsRouter from './src/routers/products.router.js';
import authRouter from './src/routers/auth.router.js';


const app = express();

// Middleware (bodyparser pero nativo de express y cors)
app.use(express.json());
app.use(cors());

// Ruta general para verificar que el servidor está funcionando
app.get('/', (req, res) => {
    res.json({ message: 'Servidor funcionando' });
});


// Prefijos para las rutas
app.use('/api/products', productsRouter);
app.use('/api/auth', authRouter);


// Ruta no encontrada
app.use((req, res) => {
    res.status(404).json({
        message: 'Ruta no encontrada'
    });
});

export default app;