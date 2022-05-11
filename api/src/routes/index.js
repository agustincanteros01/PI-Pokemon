const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemons = require('./pokemons.js');
const pokemons_id = require('./pokemons_id.js');
const pokemons_post = require('./pokemons_post.js');
const tipos = require('./tipos.js');
const prueba = require('./prueba_while.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemons', pokemons);
router.use('/pokemons', pokemons_id);
router.use('/pokemons', pokemons_post);
router.use('/types', tipos);
router.use('/prueba',prueba);

module.exports = router;
