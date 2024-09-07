const express = require('express');
const ContaController = require('./controllers/ContaController');
const CategoriaController = require('./controllers/CategoriaController');
const TransacaoController = require('./controllers/TransacaoController');

const routes = express.Router();

routes.get('/contas', ContaController.index);
routes.post('/contas', ContaController.store);
routes.get('/contas/:id', ContaController.show);
routes.put('/contas/:id', ContaController.update);
routes.delete('/contas/:id', ContaController.destroy);

routes.get('/categorias', CategoriaController.index);
routes.post('/categorias', CategoriaController.store);
routes.get('/categorias/:id', CategoriaController.show);
routes.put('/categorias/:id', CategoriaController.update);
routes.delete('/categorias/:id', CategoriaController.destroy);

routes.get('/transacoes', TransacaoController.index);
routes.post('/transacoes', TransacaoController.store);
routes.get('/transacoes/:id', TransacaoController.show);
routes.put('/transacoes/:id', TransacaoController.update);
routes.delete('/transacoes/:id', TransacaoController.destroy);

module.exports = routes;
