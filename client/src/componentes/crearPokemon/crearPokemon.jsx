import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getTipos, postPokemones } from '../../actions/actions'


export default function CrearPokemon() {

  const dispatch = useDispatch()
  const tipos = useSelector((state) => state.tipos)

  const [pokemon, setPokemon] = useState({
    name: '',
    altura: 0,
    peso: 0,
    velocidad: 0,
    vida: 0,
    fuerza: 0,
    tipos: []
  })

  useEffect(() => {
    dispatch(getTipos())
  }, [dispatch])

  const handleChange = (e) => {

    if (e.target.name === 'name') {
      if (e.target.value.length >= 4 && e.target.value.length <= 15) {
        setPokemon({
          ...pokemon,
          name: e.target.value
        })
      }
    } else if (e.target.name === 'tipos') {
      if (pokemon.tipos.length <= 1) {
        setPokemon({
          ...pokemon,
          tipos: pokemon.tipos.concat([e.target.value])
        })
      } else {
        alert('Un pokemon puede tener un maximo de 2 tipos')
      }
    } else if (parseInt(e.target.min) === 1) {
      if (parseInt(e.target.value) >= parseInt(e.target.min)) {
        setPokemon({
          ...pokemon,
          [e.target.name]: parseInt(e.target.value)
        })
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(postPokemones(pokemon))
    console.log(pokemon)
  }

  return (
    <div>
      <Link to='/pokemones'><button type='submit'>VOLVER</button></Link>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <label>Nombre: </label>
        <input onChange={(e) => { handleChange(e) }} type="text" name='name' min='4' max='15' />
        <label>Altura: </label>
        <input onChange={(e) => { handleChange(e) }} type="number" name='altura' placeholder='en centimetros' min='1' max='500' />
        <label>Velocidad: </label>
        <input onChange={(e) => { handleChange(e) }} type="number" name='velocidad' min='1' />
        <label>Peso: </label>
        <input onChange={(e) => { handleChange(e) }} type="number" name='peso' placeholder='en kilogramos' min='1' />
        <label>Fuerza: </label>
        <input onChange={(e) => { handleChange(e) }} type="number" name='fuerza' min='1' />
        <label>Vida: </label>
        <input onChange={(e) => { handleChange(e) }} type="number" name='vida' min='1' />
        <select name='tipos' onChange={(e) => { handleChange(e) }}>
          {
            tipos.map((t) => {
              return (
                <option key={t.id} value={t.name}>{t.name}</option>
              )
            })
          }
        </select>
        <button type='submit'>Crear</button>
      </form>
    </div>
  )
}