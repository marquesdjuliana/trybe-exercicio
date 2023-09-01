const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8),
  email: Joi.string().email(),
  password: Joi.string().min(6),
  image: Joi.string(),
});
const postSchema = Joi.object({
  title: Joi.string(),
  content: Joi.string(),
  categoryIds: Joi.array(),
});
module.exports = {
  userSchema,
  postSchema,
};