const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

// Criar e Listar Devs
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

// Buscar Devs
routes.get('/search', SearchController.index);

module.exports = routes;
