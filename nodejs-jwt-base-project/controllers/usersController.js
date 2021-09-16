const userService = require('../services/userService');

module.exports = async (req, res) => {
  const { username, password } = req.body;
  const result = await userService.create(username, password);
  
  return res.status(result.status).json({ message: result.message });
};
