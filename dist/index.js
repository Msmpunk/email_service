"use strict";

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./api/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
const port = process.env.PORT || 4000;
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use('/api/v1', _routes.default);
app.use((req, res) => {
  res.status(404).send({
    url: req.originalUrl + 'Not found'
  });
});
const server = app.listen(port, function () {
  console.log('Listening on port ' + server.address().port);
});