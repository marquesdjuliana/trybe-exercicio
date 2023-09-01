const { postService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const listAllPosts = async (req, res) => {
  const { status, data } = await postService.listAllPosts();
  return res.status(mapStatusHTTP(status)).json(data);
};
const createPost = async (req, res) => {
  const postData = req.body;
  const { id: userId } = req.user;
  const { status, data } = await postService.createPost(postData, userId);
  return res.status(mapStatusHTTP(status)).json(data);
};
const listPostById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await postService.listById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};
const updatePostById = async (req, res) => {
  const { id } = req.params;
  const updatedPostData = req.body;
  const requestinguserId = req.user.id;
  const { status, data } = await postService.updatePostById(id, requestinguserId, updatedPostData);
  return res.status(mapStatusHTTP(status)).json(data);
};
module.exports = {
  listAllPosts,
  createPost,
  listPostById,
  updatePostById,
};