import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPokemonesPorNombre } from '../../actions/actions';

export default function SearchBar() {

  const dispatch = useDispatch();

  const [pokemnon, setPokemon] = useState('');

  const formSubmit = (e) => {
    e.preventDefault()
    dispatch(getPokemonesPorNombre(pokemnon))
    e.target[0].value = ''
  }

  const handleChange = (e) => {
    setPokemon(e.target.value)
  }

  return (
    <div>
      <form onSubmit={(e) => { formSubmit(e) }}>
        <input id='inputName' placeholder='Busca un pokemon' type="text" onChange={(e) => { handleChange(e) }} />
        <button type='submit'>Buscar</button>
      </form>
    </div>
  )
}