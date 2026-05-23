const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
app.use(cors());
app.use(express.json());

// 1. Configuración de Swagger
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Pet Care - Adopción Canina',
      version: '1.0.0',
      description: 'Endpoints para la gestión de mascotas y adopciones.',
    },
    servers: [{ url: 'http://localhost:5000' }]
  },
  apis: ['./server.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Base de datos simulada en memoria (Mock Data)
let mascotas = [
  { id: 1, nombre: "Toby", edad: "2 años", estado_medico: "Vacunado", foto_url: "https://images.unsplash.com/photo-1543466835-00a7907e9de1" },
  { id: 2, nombre: "Luna", edad: "5 meses", estado_medico: "Desparasitada", foto_url: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e" }
];

/**
 * @openapi
 * /api/mascotas:
 * get:
 * summary: Obtener el catálogo de mascotas
 * responses:
 * 200:
 * description: Lista de perros disponibles devuelta con éxito.
 */
app.get('/api/mascotas', (req, res) => {
  res.status(200).json(mascotas);
});

/**
 * @openapi
 * /api/mascotas:
 * post:
 * summary: Registrar una nueva mascota
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * nombre:
 * type: string
 * edad:
 * type: string
 * estado_medico:
 * type: string
 */
app.post('/api/mascotas', (req, res) => {
  const { nombre, edad, estado_medico } = req.body;
  const nuevaMascota = { id: mascotas.length + 1, nombre, edad, estado_medico, foto_url: "https://images.unsplash.com/photo-1537151625747-7ae8704189d4" };
  mascotas.push(nuevaMascota);
  res.status(201).json({ mensaje: "Mascota guardada", mascota: nuevaMascota });
});

// Endpoint simulado para Login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  // Simulación de roles para pruebas 
  if (email === "admin@refugio.com") {
    res.json({ token: "token-fake-123", usuario: { nombre: "Fundación San Roque", rol: "Fundacion", email } });
  } else {
    res.json({ token: "token-fake-456", usuario: { nombre: "Camilo Pérez", rol: "Adoptante", email } });
  }
});

app.listen(5000, () => console.log('Servidor ejecutándose en http://localhost:5000'));