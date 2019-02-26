const models = require('../../models');
module.exports.list = (req, res) => {
  models.Item.findAll({
    attributes: ['id', 'name', 'sort_number']
  })
    .then((items) => {
      res.json({ data: items, success: true, statusCode: 200 });
    })
    .catch((error) => {
      res.json(error.toString());
    })

}

module.exports.create = (req, res) => {
  const { item } = req.body;
  models.Item.create(item)
  .then(resp => {
    res.json({ data: resp, success: true, statusCode: 200 });
  })
  .catch(error => {
    res.json(error.toString());
  })
}

module.exports.updateItemsOrder = (req, res) => {
  debugger
  const {old_sort_number, new_sort_number} = req.body;

}

