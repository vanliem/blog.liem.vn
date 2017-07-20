var faker = require('faker');

module.exports = {
  tableName: 'comment_article',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    article_id: { model: 'article' },
    tag_id: { model: 'tag' },
    user_id: { model: 'user' }
  },

  seedData: [
    {
      article_id: faker.random.arrayElement([1,2]),
      tag_id: faker.random.arrayElement([1,2]),
      user_id: faker.random.arrayElement([1,2]),
    },
    {
      article_id: faker.random.arrayElement([1,2]),
      tag_id: faker.random.arrayElement([1,2]),
      user_id: faker.random.arrayElement([1,2]),
    },
  ],
};

