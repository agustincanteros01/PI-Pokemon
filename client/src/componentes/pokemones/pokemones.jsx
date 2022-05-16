import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons, getTipos, filtroTipo } from '../../actions/actions.js';
import Card from '../card/card.jsx';

export default function Pokemones() {

  const dispatch = useDispatch();
  const pokemones = useSelector((state) => state.pokemones);
  const tipos = useSelector((state) => state.tipos);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTipos());
  }, [dispatch]);

  const handleFiltroTipo = (e) => {
    dispatch(filtroTipo(e.target.value));
  }

  if (pokemones.length === 0) {
    return (
      <h2>CARGANDO</h2>
    )
  } else {
    return (
      <div>
        <div>
          <select onChange={(e) => { handleFiltroTipo(e) }}>
            <option value="todos">todos</option>
            {
              tipos?.map(t => {
                return (
                  <option key={t[0].id} value={t[0].name}>{t[0].name}</option>
                )
              })
            }
          </select>
        </div>
        {
          pokemones?.map(p => {
            return (
              <Card id={p.id} name={p.name} altura={p.altura} velocidad={p.velocidad} peso={p.peso} fuerza={p.fuerza} tipo={p.tipo} vida={p.vida} key={p.id} />
            )
          })
        }
      </div>
    )
  }
};