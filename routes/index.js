const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/jugador', controllers.createJugador);
router.get('/jugador', controllers.getAllJugador); // Rutas para obtener todos los jugadores
router.get('/jugador/:id', controllers.getJugadorById); // Ruta para obtener jugador por ID
router.delete('/jugador/:id', controllers.deleteJugador); // Ruta corregida para eliminar jugador por ID
router.put('/jugador/:id', controllers.updateJugador); // Ruta corregida para actualizar jugador por ID

module.exports = router;

