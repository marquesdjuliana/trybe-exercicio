const route = require('express').Router();
const { postController } = require('../controllers');
const validateToken = require('../middlewares/validateToken');
const { validatePost, validateUpdatePostById } = require('../middlewares/validateFields');

route.get('/', validateToken, postController.listAllPosts);
route.get('/:id', validateToken, postController.listPostById);
route.post('/', validateToken, validatePost, postController.createPost);
route.put('/:id', validateToken, validateUpdatePostById, postController.updatePostById);
module.exports = route;