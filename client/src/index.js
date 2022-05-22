import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store.js';
import { Provider } from 'react-redux';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Pokemones from './componentes/pokemones/pokemones.jsx';
import Detalles from './componentes/detalles/detalles';
import CrearPokemon from './componentes/crearPokemon/crearPokemon';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/' element={<App />} />
          <Route exact path='/pokemones' element={<Pokemones />} />
          <Route exact path='/pokemones/:id' element={<Detalles />} />
          <Route exact path='/pokemones/creacion' element={<CrearPokemon />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
