const express = require('express');
const app = express();
const { Pokemon, Tipos } = require('../db.js');

app.post('/', async (req, res) => {

  try {

    const { name, vida, fuerza, defensa, velocidad, altura, peso, tipos } = req.body;

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

    if (tipos.length === 2) {
      const tipoData = await Tipos.findAll({
        where: { name: tipos[0] },
        attributes: ['name', 'id']
      })
      const tipoData1 = await Tipos.findAll({
        where: { name: tipos[1] },
        attributes: ['name', 'id']
      })

      if (created === true) {

        creacionPoke.addTipos(tipoData[0])
        creacionPoke.addTipos(tipoData1[0])
        res.status(201).send(creacionPoke)

      } else if (created === false) {
        res.status(200).send({ message: 'El pokemon ya existe', pokemon: creacionPoke })
      }

    } else {
      const tipoData = await Tipos.findAll({
        where: { name: tipos },
        attributes: ['name', 'id']
      })

      if (created === true) {

        creacionPoke.addTipos(tipoData[0])
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