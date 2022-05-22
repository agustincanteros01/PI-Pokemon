import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons, filtroTipo, getTipos } from '../../actions/actions.js';
import Card from '../card/card.jsx';
import SearchBar from '../searchBar/searchBar.jsx';
import { Link } from 'react-router-dom';
import Paginado from '../paginado/paginado.jsx';

export default function Pokemones() {

  const dispatch = useDispatch();
  const allPokemones = useSelector((state) => state.allPokemones);
  const tipos = useSelector((state) => state.tipos);
  const pokemones = useSelector((state) => state.pokemones);
  const [paginaActual, setPaginaActual] = useState(1)
  const [pokemonesPagina, setPokemonesPagina] = useState(12)
  const indexUltimoPoke = paginaActual * pokemonesPagina
  const indexPrimerPoke = indexUltimoPoke - pokemonesPagina
  const pokemonesAcutales = pokemones.length !== 0 ? pokemones.slice(indexPrimerPoke, indexUltimoPoke) : allPokemones.slice(indexPrimerPoke, indexUltimoPoke)

  const paginado = (numeroPagina) => {
    setPaginaActual(numeroPagina)
  }

  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  useEffect(() => {
    dispatch(getTipos())
  }, [dispatch])

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
        <Link to='/pokemones/creacion'><button>Crear pokemon</button></Link>
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

        <Paginado pokemonesPorPagina={pokemonesPagina} pokemones={allPokemones.length} paginado={paginado} />
        
        {
          pokemones.length !== 0
            ?
            pokemonesAcutales.map(p => {
              return (
                <Card id={p.id} name={p.name} altura={p.altura} velocidad={p.velocidad} peso={p.peso} fuerza={p.fuerza} tipos={p.tipos.map(n => { return n.name })} vida={p.vida} key={p.id} />
              )
            })
            :
            pokemonesAcutales.map(p => {
              return (
                <Card id={p.id} name={p.name} altura={p.altura} velocidad={p.velocidad} peso={p.peso} fuerza={p.fuerza} tipos={p.tipos.map(n => { return n.name })} vida={p.vida} key={p.id} />
              )
            })
        }
      </div>
    )
  }
};


