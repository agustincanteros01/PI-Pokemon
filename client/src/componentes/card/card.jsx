import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getDetalles } from '../../actions/actions';
import { useDispatch } from 'react-redux';

export default function Card({ id, name, altura, velocidad, peso, fuerza, tipo, vida }) {

  const dispatch = useDispatch();
  const [pokemon, setPokemon] = useState('');

  const handleClick = (e) => {
    dispatch(getDetalles(e.target.textContent))
  }

  return (
    <div>
      <Link to={`/pokemones/${id}`}><h2 onClick={(e) => { handleClick(e) }}>{name}</h2></Link>
      <h4>ID: {id}</h4>
      <h4>ALTURA: {altura}</h4>
      <h4>VELOCIDAD: {velocidad}</h4>
      <h4>PESO: {peso}</h4>
      <h4>FUERZA: {fuerza}</h4>
      <h4>TIPOS: {`${tipo}`}</h4>
      <h4>VIDA: {vida}</h4>
    </div>
  );
};