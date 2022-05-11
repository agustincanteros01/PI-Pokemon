const express = require('express');
const app = express();
const axios = require('axios');

app.get('/:id', async (req, res) => {

  const { id } = req.params

  const pokeDetalles = await axios.get(process.env.API_LOCAL).then(p => {

    const filtroPoke = p.data.filter(f => f.id.toString() === id)

    return filtroPoke

  }).catch(e => {

    console.log(e)

  })

  res.send(pokeDetalles)
})

module.exports = app;