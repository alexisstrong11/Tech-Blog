const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const postData = require('./postData.json');
const commentData = require('./commentData.json')