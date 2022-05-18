const initialState = {
  allPokemones: [],
  tipos: [],
  pokemones: []
}

function rootReducer(state = initialState, { type, payload }) {
  if (type === 'GET_POKEMONES') {
    return {
      ...state,
      allPokemones: state.allPokemones.concat(payload),
      pokemones: state.pokemones.concat(payload)
    }
  }

  if (type === 'GET_POKEMON_NOMBRE') {
    return {
      ...state,
      pokemones: payload
    }
  }

  if (type === 'GET_TIPOS') {

    const tiposPoke = []

    payload.forEach(t => {
      tiposPoke.push(t[0])
    })

    return {
      ...state,
      tipos: state.tipos.concat(tiposPoke)
    }
  }

  if (type === 'POST_POKEMONES') {
    return {
      ...state,
      allPokemones: state.allPokemones.concat(payload)
    }
  }

  if (type === 'FILTRO_TIPO') {

    const allPokemones = state.allPokemones;

    const pokeFiltro = payload === 'todos' ? allPokemones :
      allPokemones.filter((t) =>

        t.tipo[0].map((p) => p.name)[0] === payload
        ||
        t.tipo[0].map((p) => p.name)[1] === payload
      )

    if (pokeFiltro.length === 0) {
      alert('No se encontraron pokemones de ese tipo');
    } else {
      return {
        ...state,
        pokemones: pokeFiltro
      }
    }

  }

  return state
}

export default rootReducer;