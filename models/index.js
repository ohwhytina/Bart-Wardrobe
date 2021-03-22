// import all models
const Post = require('./Post');
const User = require('./User');
const Reply = require('./Reply');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

User.hasMany(Reply, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

Reply.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: "CASCADE"
});

Reply.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: "CASCADE"
});

Post.hasMany(Reply, {
  foreignKey: 'post_id',
  onDelete: "CASCADE"
});

module.exports = { User, Post, Reply };