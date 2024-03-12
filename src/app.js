// server.js
const express = require('express');
const app = express();
const productosRoutes = require('./routes/productos.routes');

// Middleware
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Servir archivos estáticos desde la carpeta 'uploads'

// Rutas
app.use('/api', productosRoutes);

// Iniciar servidor
const PORT =  3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});