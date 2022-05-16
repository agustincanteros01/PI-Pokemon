import React from 'react';

export default function Card({ id, name, altura, velocidad, peso, fuerza, tipo, vida }) {

  return (
    <div>
      <h2>{name}</h2>
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