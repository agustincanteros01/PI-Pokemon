import React from 'react'

export default function Paginado({ pokemonesPorPagina, pokemones, paginado }) {

  const numeroPagina = []

  for (let i = 1; i <= Math.ceil(pokemones / pokemonesPorPagina); i++) {
    numeroPagina.push(i)
  }

  return (
    <nav>
      <ul>
        {
          numeroPagina && numeroPagina.map(p => {
            return (
              <li key={p} >
                <a onClick={() => paginado(p)}>{p}</a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )

}