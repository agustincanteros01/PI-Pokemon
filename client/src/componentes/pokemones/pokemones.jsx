import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons, filtroTipo } from '../../actions/actions.js';
import Card from '../card/card.jsx';
import SearchBar from '../searchBar/searchBar.jsx';

export default function Pokemones() {

  const dispatch = useDispatch();
  const allPokemones = useSelector((state) => state.allPokemones);
  const tipos = useSelector((state) => state.tipos);
  const pokemones = useSelector((state) => state.pokemones);

  console.log(tipos)



  const handleFiltroTipo = (e) => {
    dispatch(filtroTipo(e.target.value));
  }

  if (allPokemones.length === 0) {
    return (
      <h2>CARGANDO</h2>
    )
  } else {
    return (
      <div>
        <SearchBar />
        <div>
          <select onChange={(e) => { handleFiltroTipo(e) }}>
            <option key='todo' value="todos">todos</option>
            {
              tipos.map((t) => {
                return (
                  <option key={t.id} value={t.name}>{t.name}</option>
                )
              })
            }
          </select>
        </div>
        <div>
          <button></button>
        </div>
        {
          pokemones.length !== 0
            ?
            pokemones.map(p => {
              return (
                <Card id={p.id} name={p.name} altura={p.altura} velocidad={p.velocidad} peso={p.peso} fuerza={p.fuerza} tipo={p.tipo[0].map(n => { return n.name })} vida={p.vida} key={p.id} />
              )
            })
            :
            allPokemones.map(p => {
              return (
                <Card id={p.id} name={p.name} altura={p.altura} velocidad={p.velocidad} peso={p.peso} fuerza={p.fuerza} tipo={p.tipo[0].map(n => { return n.name })} vida={p.vida} key={p.id} />
              )
            })
        }
      </div>
    )
  }
};


