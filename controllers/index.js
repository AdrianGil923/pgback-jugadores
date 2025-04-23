const models = require("../database/models");

const createJugador = async (req, res) => {
   console.log('creating jugador');

   try {
      const jugador = await models.Jugador.create(req.body);
      return res.status(201).json({ jugador });
   } catch (error) {
      return res.status(500).send({ error: error.message });
   }
};

const deleteJugador = async (req, res) => {
   console.log('deleting jugador...');

   try {
      const jugador = await models.Jugador.findOne({ where: { id: req.params.id } });
      if (jugador) {
         console.log(jugador);
         await jugador.destroy();
         return res.status(200).json({ "deleted": req.params.id });
      } else {
         return res.status(404).json({ "error": `Jugador con ID ${req.params.id} no encontrado` });
      }
   } catch (error) {
      return res.status(500).send({ error: error.message });
   }
};

const updateJugador = async (req, res) => {
   console.log('updating jugador...');

   try {
      const jugador = await models.Jugador.findOne({ where: { id: req.params.id } });
      if (jugador) {
         console.log(jugador);
         jugador.nombre = req.body.nombre;
         jugador.posicion = req.body.posicion;
         jugador.edad = req.body.edad;
         jugador.team = req.body.team;
         jugador.goles = req.body.goles;
         jugador.asistencias = req.body.asistencias;
         await jugador.save();
         return res.status(200).json({ "updated": jugador });
      } else {
         return res.status(404).json({ "error": `Jugador con ID ${req.params.id} no encontrado` });
      }
   } catch (error) {
      return res.status(500).send({ error: error.message });
   }
};

const getAllJugador = async (req, res) => {
   console.log('getting jugadores');

   try {
      const jugadores = await models.Jugador.findAll();
      return res.status(200).json({ jugadores });
   } catch (error) {
      return res.status(500).send({ error: error.message });
   }
};

const getJugadorById = async (req, res) => {
   console.log('getting jugador by ID...');

   try {
      const jugador = await models.Jugador.findOne({ where: { id: req.params.id } });
      if (jugador) {
         return res.status(200).json({ jugador });
      } else {
         return res.status(404).json({ error: `Jugador con ID ${req.params.id} no encontrado` });
      }
   } catch (error) {
      return res.status(500).send({ error: error.message });
   }
};

module.exports = {
   createJugador,
   getAllJugador,
   deleteJugador,
   updateJugador,
   getJugadorById
};

