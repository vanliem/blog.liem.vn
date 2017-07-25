var faker = require('faker');
var articleModel = require('./Article');
var tagModel = require('./Tag');
var articleIds = [];
var tagIds = [];

for (var i = 1; i <= articleModel.seedData.length; i++) {
  articleIds.push(i);
}
for (var i = 1; i <= tagModel.seedData.length; i++) {
  tagIds.push(i);
}

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
      article_id: faker.random.arrayElement(articleIds),
      tag_id: faker.random.arrayElement(tagIds),
    },
    {
      article_id: faker.random.arrayElement(articleIds),
      tag_id: faker.random.arrayElement(tagIds),
    },
    {
      article_id: faker.random.arrayElement(articleIds),
      tag_id: faker.random.arrayElement(tagIds),
    },
    {
      article_id: faker.random.arrayElement(articleIds),
      tag_id: faker.random.arrayElement(tagIds),
    },
    {
      article_id: faker.random.arrayElement(articleIds),
      tag_id: faker.random.arrayElement(tagIds),
    },
  ],
};

