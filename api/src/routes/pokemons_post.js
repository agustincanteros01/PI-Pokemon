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

    if (tipo.length === 2) {
      const tipoData = await Tipo.findAll({
        where: { name: tipo[0] },
        attributes: ['name', 'id']
      })
      const tipoData1 = await Tipo.findAll({
        where: { name: tipo[1] },
        attributes: ['name', 'id']
      })

      if (created === true) {

        creacionPoke.addTipo(tipoData[0])
        creacionPoke.addTipo(tipoData1[0])
        res.status(201).send(creacionPoke)

      } else if (created === false) {
        res.status(200).send({ message: 'El pokemon ya existe', pokemon: creacionPoke })
      }

    } else {
      const tipoData = await Tipo.findAll({
        where: { name: tipo },
        attributes: ['name', 'id']
      })

      if (created === true) {

        creacionPoke.addTipo(tipoData[0])
        res.status(201).send(creacionPoke)

      } else if (created === false) {
        res.status(200).send({ message: 'El pokemon ya existe', pokemon: creacionPoke })
      }
    }

  } catch (e) {

    console.log(e)

    res.send(e)

  }

})

module.exports = app;