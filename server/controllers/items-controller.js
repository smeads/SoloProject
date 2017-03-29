const Item = require('../models').Item;

module.exports = {
  create(req, res) {
    return Item
      .create({
        name: req.body.name,
        votes: req.body.votes
      })
      .then(item => res.status(201).send(item))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Item
      .all()
      .then(items => res.status(200).send(items))
      .catch(error => res.status(400).send(error));
  },
  retrieve(req, res) {
    return Item
      .findAll({
        where: {
          name: req.params.name
        }
      })
      .then(item => {
        if (!item) {
          return res.status(404).send({
            message: 'Item Not Found',
          });
        }
        return res.status(200).send(item);
      })
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Item
      .findById(req.body.id)
      .then(item => {
        if (!item) {
            return res.status(404).send({
            message: 'Item Not Found',
          });
        }
        return item
        .update({
          name: req.body.name,
          votes: req.body.votes
        })
        .then(() => res.status(200).send(item))
        .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
  destroy(req, res) {
    return Item
      .findById(req.body.id)
      .then(item => {
        if (!item) {
            return res.status(404).send({
            message: 'Item Not Found',
          });
        }
        return item
        .destroy()
        .then(() => res.status(200).send(item))
        .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
