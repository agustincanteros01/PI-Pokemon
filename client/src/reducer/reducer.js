const initialState = {
  pokemones: [],
  tipos: [],
  poke_detalles: []
}

function rootReducer(state = initialState, { type, payload }) {
  if (type === 'GET_POKEMONES') {
    return {
      ...state,
      pokemones: state.pokemones.concat(payload)
    }
  }

  if (type === 'GET_TIPOS') {
    return {
      ...state,
      tipos: state.tipos.concat(payload)
    }
  }

  if (type === 'POST_POKEMONES') {
    return {
      ...state,
      pokemones: state.pokemones.concat(payload)
    }
  }

  if (type === 'FILTRO_TIPO') {

    let filtroPoke = []

    const allPokemones = state.pokemones;

    if (payload === 'todos') {
      filtroPoke.concat(allPokemones);
    } else {
      for (let i = 0; i < allPokemones.length; i++) {
        allPokemones[i].tipo.map(t => {
          if (t === payload) {
            filtroPoke.push(allPokemones[i])
          }
        })
      }
    }
    if (filtroPoke.length === 0) {
      alert('No se encontraron pokemones con ese tipo')
      return {
        ...state,
        pokemones: allPokemones
      }
    } else {
      return {
        ...state,
        pokemones: filtroPoke
      }
    }

  }

  return state
}

export default rootReducer;