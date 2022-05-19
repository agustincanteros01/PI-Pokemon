import './App.css';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getTipos, getPokemons } from './actions/actions';

export default function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTipos());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  return (
    <div>
      <Link to='/pokemones'><button>INICIO</button></Link>
    </div>
  )
}


