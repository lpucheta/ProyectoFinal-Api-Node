import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json({ message: 'Servidor funcionando' });
});

// Prefijos para las rutas




app.use((req, res) => {
    res.status(404).json({
        message: 'Ruta no encontrada'
    });
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

