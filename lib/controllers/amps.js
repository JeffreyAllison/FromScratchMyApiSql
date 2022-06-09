const { Router } = require('express');
const Amp = require('../models/Amp');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const id = req.params.id;
    const IdAmp = await Amp.getById(id);
    res.json(IdAmp);
  })

  .get('/', async (req, res) => {
    const Amps = await Amp.getAll();
    const newAmps = Amps.map((amp) => {
      return {
        id: amp.id,
        name: amp.name,
      };
    });
    res.json(newAmps);
  });
