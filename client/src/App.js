import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPokemons, getTipos } from './actions/actions.js';

function App(props) {

  async function llamadaApi(){
    await props.getPokemons()
    await props.getTipos()
  }

  if (props.pokemones.length === 0) {
    return (
      <div>
        <Link to='/pokemones'><button onClick={() => llamadaApi()}>INICIO</button></Link>
      </div>
    )
  } else {
    return (
      <div>
        <Link to='/pokemones'><button>INICIO</button></Link>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  pokemones: state.pokemones,
  tipos: state.tipos
})

export default connect(mapStateToProps, { getPokemons, getTipos })(App)
