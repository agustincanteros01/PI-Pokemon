const express = require('express');
const app = express();
const { Pokemon, Tipo } = require('../db.js');

app.post('/', async (req, res) => {

  try {

    const { name, vida, fuerza, defensa, velocidad, altura, peso, tipo } = req.body;

    const [creacionPoke, created] = await Pokemon.findOrCreate({
      where: { name: name },
      defaults: {
        name,
        vida,
        fuerza,
        defensa,
        velocidad,
        altura,
        peso
      }
    });

    const [dataValues] = await Tipo.findAll({
      where: { name: tipo },
      attributes: ['name', 'id']
    })

    if (created === true) {

      creacionPoke.addTipo(dataValues)
      res.status(201).send(creacionPoke)
      
    } else if (created === false) {
      res.status(200).send({ message: 'El pokemon ya existe', pokemon: creacionPoke })
    }

  } catch (e) {

    console.log(e)

    res.send(e)

  }

})

module.exports = app;