module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'blog_posts',
        key: 'id',
      }
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'categories',
        key: 'id',
      }
    }
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'posts_categories',
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, { through: PostCategory, foreignKey: 'category_id', otherKey: 'post_id', as: 'posts'});
    models.BlogPost.belongsToMany(models.Category, { through: PostCategory, foreignKey: 'post_id', otherKey: 'category_id', as: 'categories'});
  }

  return PostCategory;
}