const { Router } = require('express');
const DevController = require('../controllers/DevController');
const SearchController = require('../controllers/SearchController');

const routes = Router();
routes.get('/healthCheck', (req,res)=> res.json({status:"OK"}))
routes.get('/devs', DevController.index)
routes.delete('/devs/:id', DevController.destroy)
routes.get('/search', SearchController.index)
routes.post('/devs', DevController.store)

module.exports = routes;