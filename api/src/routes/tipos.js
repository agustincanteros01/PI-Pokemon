const express = require('express');
const app = express();
const axios = require('axios');
const { Tipo } = require('../db.js');

app.get('/', async (req, res) => {

  try {
    const tipos = await axios.get(process.env.API_KEY_TYPES).then(t => {
      return t.data.results;
    })

    const tiposDb = await Promise.all(tipos.map(async t => {
      const creados = await Tipo.findOrCreate({
        where: { name: t.name },
        defaults: { name: t.name }
      })

      return creados

    }))

    res.send(tiposDb);
  } catch (e) {
    console.log(e)
    res.send(e)
  }

});

module.exports = app;