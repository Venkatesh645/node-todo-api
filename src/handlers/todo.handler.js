module.exports.list = (req, res) => {
  res.json('hello');
}

module.exports.create = (req, res) => {
  console.log('inside the todo handler create');
}

