import { generateToken } from '../utils/token.generator.js';

const default_user = {
    id: 1,
    name: 'Usuario de prueba',
    email: process.env.DEFAULT_USER_EMAIL,
    password: process.env.DEFAULT_USER_PASSWORD
}

export const login = (req, res) => {
    try{
        const { email, password } = req.body;

        if(!email?.trim() || !password?.trim()){
            return res.status(400).json({ message: 'Email y contraseña son obligatorios' });
        }

        if(email !== default_user.email || password !== default_user.password){
            return res.status(401).json({ message: 'Email o contraseña incorrectos' });
        }

        const token = generateToken(default_user);

        return res.status(200).json({
            message: 'Inicio de sesión exitoso',
            token
         });

    }catch(error){
        console.error('Error en el login:', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }

}