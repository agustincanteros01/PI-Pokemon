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

  return state
}

export default rootReducer;