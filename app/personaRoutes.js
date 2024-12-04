const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');

router.get('/', personaController.getAllPersonas);

router.post('/personas', personaController.addPersona);

router.put('/personas/:id', personaController.updatePersona);

router.delete('/personas/:id', personaController.deletePersona);

module.exports = router;