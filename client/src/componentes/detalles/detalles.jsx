import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function Detalles() {

  const pokeDetalles = useSelector((state) => state.detalles);

  if (pokeDetalles.length > 1) {
    return (
      <div>CARGANDO</div>
    )
  } else {
    return (
      <div>
        <Link to='/pokemones'><button type='submit'>VOLVER</button></Link>
        {
          pokeDetalles.map((p) => {
            return (
              <div key={p.id}>
                <h2>{p.name}</h2>
                <h4>ID: {p.id}</h4>
                <h4>ALTURA: {p.altura}</h4>
                <h4>VELOCIDAD: {p.velocidad}</h4>
                <h4>PESO: {p.peso}</h4>
                <h4>FUERZA: {p.fuerza}</h4>
                <h4>TIPOS: {`${p.tipo[0][0].name}, ${p.tipo[0][1].name}`}</h4>
                <h4>VIDA: {p.vida}</h4>
              </div>
            )
          })
        }
      </div>
    );
  }
}
