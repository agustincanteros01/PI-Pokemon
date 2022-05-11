const express = require('express');
const app = express();
const { Pokemon } = require('../db.js');

app.post('/', async (req, res) => {

  try {
    
    const { name, vida, fuerza, defensa, velocidad, altura, peso, tipo } = req.body;

    const creacionPoke = await Pokemon.findOrCreate({
      where: { name: name },
      defaults: {
        name,
        vida,
        fuerza,
        defensa,
        velocidad,
        altura,
        peso,
        tipo
      }
    });

    if(creacionPoke.length < 0){
      res.status(400)
    }else{
      res.status(201).send(creacionPoke)
    }

  }catch(e){

    console.log(e)

    res.send(e)

  }

})

module.exports = app;