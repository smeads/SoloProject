const Item = require('../models').Item;

module.exports = {
  create(req, res) {
    return Item
      .create({
        name: req.body.name,
        votes: req.body.votes
      })
      .then(item => res.status(200).json(item))
      .catch(error => res.status(400).json(error));
  },
  list(req, res) {
    return Item
      .all()
      .then(items => res.status(200).json(items))
      .catch(error => res.status(400).json(error));
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
          return res.status(404).json({
            message: 'Item Not Found',
          });
        }
        return res.status(200).json(item);
      })
      .catch(error => res.status(400).json(error));
  },
  update(req, res) {
    console.log("PUT", req.body);
    return Item
      .findById(req.body.id)
      .then(item => {
        if (!item) {
            return res.status(404).json({
            message: 'Item Not Found',
          });
        }
        return item
        .update({
          votes: req.body.votes
        })
        .then(() => res.status(200).json(item))
        .catch((error) => res.status(400).json(error));
      })
      .catch((error) => res.status(400).json(error));
  },
  destroy(req, res) {
    return Item
      .findById(req.body.id)
      .then(item => {
        if (!item) {
            return res.status(404).json({
            message: 'Item Not Found',
          });
        }
        return item
        .destroy()
        .then(() => res.status(200).json(item))
        .catch((error) => res.status(400).json(error));
      })
      .catch((error) => res.status(400).json(error));
  },
};
