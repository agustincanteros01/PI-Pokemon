import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function Pokemones(props) {

  const [poke, setPoke] = useState()

  if (props.pokemones.length === 0) {
    return (
      <div>HOLA</div>
    )
  } else {
    return (
      <div>CHAU</div>
    )
  }

}

const mapStateToProps = state => ({
  pokemones: state.pokemones,
  tipos: state.tipos
})

export default connect(mapStateToProps, {})(Pokemones)