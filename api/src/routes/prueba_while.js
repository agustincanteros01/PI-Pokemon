const { default: axios } = require('axios');
const express = require('express');
const app = express();

app.get('/', async (req, res) => {

  const poke = await axios.get(process.env.API_KEY).then(p => {
    return p.data;
  })

  let next = poke.next;

  console.log(next)

  let arr = []

  while(next){
    let temp = await axios.get(next).then(p => {
      return p.data
    })
    arr = arr.concat(temp.results)
    next = temp.next
  }

  console.log(arr)
  res.send('OK')

})

module.exports = app;