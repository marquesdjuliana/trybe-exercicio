const route = require('express').Router();
const { userController } = require('../controllers');
const { validateUser } = require('../middlewares/validateFields');
const validateToken = require('../middlewares/validateToken');

route.get('/', validateToken, userController.listAllUsers);
route.get('/:id', validateToken, userController.getUserById);
route.post('/', validateUser, userController.createUser);

module.exports = route;