var faker = require('faker');

module.exports = {
  tableName: 'article_tag',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    article_id: { model: 'article' },
    tag_id: { model: 'tag' }
  },

  seedData: [
    {
      article_id: faker.random.arrayElement([1,2]),
      tag_id: faker.random.arrayElement([1,2]),
    },
    {
      article_id: faker.random.arrayElement([1,2]),
      tag_id: faker.random.arrayElement([1,2]),
    },
  ],
};

