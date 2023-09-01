const { Category, BlogPost } = require('../models');

const verifyFields = (requiredFields, requestBody) => {
  for (let i = 0; i < requiredFields.length; i += 1) {
    const field = requiredFields[i];
    if (!(field in requestBody) || requestBody[field].length === 0) {
      return false;
    }
  }
  return true;
};

const verifyCategoryIds = async (categories) => {
  const categoryQueries = categories.map(async (categoryId) => {
    const queriedCategory = await Category.findOne({ where: { id: categoryId } });
    return queriedCategory !== null;
  });
  const categoryResults = await Promise.all(categoryQueries);
  return categoryResults.every((result) => result);
};
const verifyUserId = async (userId, postId) => {
  const post = await BlogPost.findOne({ where: { id: postId, userId } });
  return !!post;
};
module.exports = {
  verifyFields,
  verifyCategoryIds,
  verifyUserId,
};