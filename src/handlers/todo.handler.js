const models = require('../../models');
const Op = models.Sequelize.Op;
const sequelize = models.sequelize;
debugger
module.exports.list = (req, res) => {
  models.Item.findAll({
      attributes: ['id', 'name', 'sort_number'],
      order: [
        ['sort_number', 'ASC'],
      ]
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
};

module.exports.updateItemsOrder = async(req, res) => {
  debugger
  const {
    old_sort_number,
    new_sort_number,
    selected_item_id
  } = req.body;
  debugger
  if (new_sort_number < old_sort_number) {
    debugger
    const higherRange = old_sort_number - 1;
    const lowerRange = new_sort_number;
    debugger
    const updateResp = await models.Item.update({
      sort_number: sequelize.literal('sort_number + 1')
    }, {
      where: {
        sort_number: {
          [Op.lte]: higherRange,
          [Op.gte]: lowerRange,
        }
      }
    }).catch(error => res.json(error.toString()))
    const item = await models.Item.findById(selected_item_id)
      .catch(error => res.json(error.toString()));
    debugger
    const itemUpdateresp = await item.update({ sort_number: new_sort_number }).catch(error => res.json(error.toString()));
    debugger
    res.json({ data: itemUpdateresp, success: true, statusCode: 200 });
  }
  else if(old_sort_number < new_sort_number) {
    debugger
    const higherRange = old_sort_number + 1;
    const lowerRange = new_sort_number;
    debugger
        const updateResp = await models.Item.update({
      sort_number: sequelize.literal('sort_number -1')
    }, {
      where: {
        sort_number: {
          [Op.lte]: lowerRange,
          [Op.gte]: higherRange,
        }
      }
    }).catch(error => res.json(error.toString()));
    debugger
    const item = await models.Item.findById(selected_item_id)
      .catch(error => res.json(error.toString()));
    debugger
    const itemUpdateresp = await item.update({ sort_number: new_sort_number }).catch(error => res.json(error.toString()));
    res.json({ data: itemUpdateresp, success: true, statusCode: 200 });
  }
}
