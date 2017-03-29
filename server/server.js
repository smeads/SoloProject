const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('../server/routes')(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.listen(3000, () => {
  console.log('listening at http://localhost:3000');
});

module.exports = app;
