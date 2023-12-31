// models/Post.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
  },
  { sequelize }
);

module.exports = Post;
