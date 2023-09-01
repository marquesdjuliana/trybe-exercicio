const { loginService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const verifyUser = async (req, res) => {
  const { body } = req;
  const { status, data } = await loginService.verifyUser(body);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  verifyUser,
};