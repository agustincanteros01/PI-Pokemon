import axios from 'axios';

export function getPokemons() {
  return async function (dispatch) {
    return await axios.get('http://localhost:3001/pokemons').then(d => {
      return d.data
    }).then(pokemones => {
      dispatch({ type: 'GET_POKEMONES', payload: pokemones })
    })
  }
}

export function getTipos() {
  return async function (dispatch) {
    return await axios.get('http://localhost:3001/types').then(d => {
      return d.data
    }).then(tipos => {
      dispatch({ type: 'GET_TIPOS', payload: tipos })
    })
  }
}

export function postPokemones(datos) {
  return function (dispatch) {
    return axios.post('http://localhost:3001/pokemons', {
      name: datos.name,
      vida: datos.vida,
      fuerza: datos.fuerza,
      defensa: datos.defensa,
      velocidad: datos.velocidad,
      altura: datos.altura,
      peso: datos.peso,
      tipo: datos.tipo
    }).then(poke => {
      dispatch({ type: 'POST_POKEMONES', payload: poke })
    })
  }
}

export function filtroTipo(dato) {
  console.log(dato)
  return function (dispatch) {
    dispatch({ type: 'FILTRO_TIPO', payload: dato });
  }
}