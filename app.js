import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.json({ message: 'Servidor funcionando' });
});

// Prefijos para las rutas




app.use((req, res) => {
    res.status(404).json({
        message: 'Ruta no encontrada'
    });
});

export default app;