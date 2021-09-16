const userService = require('../services/userService');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await userService.create(username, password);
    
    return res.status(result.status).json({ message: result.message });
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};
