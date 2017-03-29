const itemsController = require('../controllers').items;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Items API!',
  }));

  app.post('/api/items', itemsController.create);
  app.get('/api/items', itemsController.list);
  app.get('/api/items/:name', itemsController.retrieve);
  app.put('/api/items', itemsController.update);
  app.delete('/api/items', itemsController.destroy);
};
