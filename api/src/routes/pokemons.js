const express = require('express');
const app = express();
const axios = require('axios');
const { Pokemon, Tipo } = require('../db.js');

app.get('/', async (req, res) => {

  if (!req.query.name) { //Si no existe query busco los pokemones de la api y de la db
    try {
      const pokemones = await axios.get(process.env.API_KEY).then(p => {
        return p.data;
      }).catch(e => {
        return e
      })

      const pokemones2 = await axios.get(pokemones.next).then(p => {
        return p.data.results;
      }).catch(e => {
        return e
      })

      let pokemones3 = pokemones.results.concat(pokemones2)

      const PokeData = await Promise.all(pokemones3.map(async p => {

        let obj = {};

        const datos = await axios.get(p.url).then(a => {

          const Poke = {
            name: a.data.name,
            id: a.data.id,
            vida: a.data.stats[0].base_stat,
            fuerza: a.data.stats[1].base_stat,
            defensa: a.data.stats[2].base_stat,
            velocidad: a.data.stats[5].base_stat,
            peso: a.data.weight,
            altura: a.data.height,
            tipo: a.data.types.map(p => {
              return p.type.name
            })
          }

          return Poke

        }).catch(e => {
          return e
        })

        Object.assign(obj, datos)

        return obj

      }))

      //Ya busque los pokemones de la api, ahora voy por los de la db

      const pokeDb = await Pokemon.findAll({
        attributes: ['name', 'id', 'vida', 'fuerza', 'defensa', 'altura', 'peso', 'velocidad'],
        include: {
          model: Tipo,
          attributes: {
            include: ['name']
          }
        }
      })

      let DataFinal = PokeData.concat(pokeDb)

      res.send(DataFinal)

    } catch (e) {

      res.send(e)

    }

  } else {

    try {

      const { name } = req.query

      const pokeDetalles = await axios.get(process.env.API_KEY).then(p => {

        return p.data.results

      })

      const nombrePoke = pokeDetalles.filter(p => p.name === name)

      if (nombrePoke.length > 0) {

        const datosPoke = await axios.get(nombrePoke[0].url).then(p => {
          return {
            name: p.data.name,
            id: p.data.id,
            vida: p.data.stats[0].base_stat,
            fuerza: p.data.stats[1].base_stat,
            defensa: p.data.stats[2].base_stat,
            velocidad: p.data.stats[5].base_stat,
            peso: p.data.weight,
            altura: p.data.height
          }
        })

        res.send(datosPoke)

      } else {
        res.json({ message: 'No se encontro el pokemon' })
      }

    } catch (e) {

      res.send(e)

    }
  }

})

module.exports = app;