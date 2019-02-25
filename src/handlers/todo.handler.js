const models = require('../../models');
debugger
module.exports.list = (req, res) => {
  models.Item.findAll()
    .then((items) => {
      res.json({ data: items, success: true, statusCode: 200 });
    })
    .catch((error) => {
      res.json(error.toString());
    })

}

module.exports.create = (req, res) => {
  console.log('inside the todo handler create');
}

