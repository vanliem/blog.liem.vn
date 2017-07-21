var faker = require('faker');
var articleModel = require('./Article');
var commentModel = require('./Comment');
var userModel = require('./User');

var articleIds = [];
var commentIds = [];
var userIds = [];

for (var i = 1; i <= articleModel.seedData.length; i++) {
  articleIds.push(i);
}
for (var i = 1; i <= commentModel.seedData.length; i++) {
  commentIds.push(i);
}
for (var i = 1; i <= userModel.seedData.length; i++) {
  userIds.push(i);
}

module.exports = {
  tableName: 'comment_article',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    article_id: { model: 'article' },
    comment_id: { model: 'comment' },
    user_id: { model: 'user' }
  },

  seedData: [
    {
      article_id: faker.random.arrayElement(articleIds),
      comment_id: faker.random.arrayElement(commentIds),
      user_id: faker.random.arrayElement(userIds),
    },
    {
      article_id: faker.random.arrayElement(articleIds),
      comment_id: faker.random.arrayElement(commentIds),
      user_id: faker.random.arrayElement(userIds),
    },
    {
      article_id: faker.random.arrayElement(articleIds),
      comment_id: faker.random.arrayElement(commentIds),
      user_id: faker.random.arrayElement(userIds),
    },
    {
      article_id: faker.random.arrayElement(articleIds),
      comment_id: faker.random.arrayElement(commentIds),
      user_id: faker.random.arrayElement(userIds),
    },
    {
      article_id: faker.random.arrayElement(articleIds),
      comment_id: faker.random.arrayElement(commentIds),
      user_id: faker.random.arrayElement(userIds),
    },
    {
      article_id: faker.random.arrayElement(articleIds),
      comment_id: faker.random.arrayElement(commentIds),
      user_id: faker.random.arrayElement(userIds),
    },
    {
      article_id: faker.random.arrayElement(articleIds),
      comment_id: faker.random.arrayElement(commentIds),
      user_id: faker.random.arrayElement(userIds),
    },
    {
      article_id: faker.random.arrayElement(articleIds),
      comment_id: faker.random.arrayElement(commentIds),
      user_id: faker.random.arrayElement(userIds),
    },
    {
      article_id: faker.random.arrayElement(articleIds),
      comment_id: faker.random.arrayElement(commentIds),
      user_id: faker.random.arrayElement(userIds),
    },
    {
      article_id: faker.random.arrayElement(articleIds),
      comment_id: faker.random.arrayElement(commentIds),
      user_id: faker.random.arrayElement(userIds),
    },
    {
      article_id: faker.random.arrayElement(articleIds),
      comment_id: faker.random.arrayElement(commentIds),
      user_id: faker.random.arrayElement(userIds),
    },
  ],
};

