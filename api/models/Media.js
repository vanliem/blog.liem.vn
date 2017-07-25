var faker = require('faker');
var articleModel = require('./Article');
var userModel = require('./User');
var articleIds = [];
var userIds = [];
const MEDIA_TYPE = [
  {image: 0},
  {audio: 1},
  {video: 2},
];

for (var i = 1; i <= articleModel.seedData.length; i++) {
  articleIds.push(i);
}
for (var i = 1; i <= userModel.seedData.length; i++) {
  userIds.push(i);
}

module.exports = {
  tableName: 'medias',
  autoPK: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id: { type: 'integer' , primaryKey: true },
    type: { type: 'string', defaultsTo: MEDIA_TYPE[0].image , notNull: true },
    path: { type: 'string', required: true, notNull: true },
    created_at: { type: 'datetime', notNull: true },
    updated_at: { type: 'datetime' },
    deleted_at: { type: 'datetime' },

    //Relationship
    article_id: { model: 'article', notNull: true },
    user_id: { model: 'user', notNull: true },
  },

  seedData: [
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement(articleIds),
      user_id: faker.random.arrayElement(userIds)
    },
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement(articleIds),
      user_id: faker.random.arrayElement(userIds)
    },
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement(articleIds),
      user_id: faker.random.arrayElement(userIds)
    },
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement(articleIds),
      user_id: faker.random.arrayElement(userIds)
    },
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement(articleIds),
      user_id: faker.random.arrayElement(userIds)
    },
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement(articleIds),
      user_id: faker.random.arrayElement(userIds)
    },
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement(articleIds),
      user_id: faker.random.arrayElement(userIds)
    },
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement(articleIds),
      user_id: faker.random.arrayElement(userIds)
    },
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement(articleIds),
      user_id: faker.random.arrayElement(userIds)
    },
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement(articleIds),
      user_id: faker.random.arrayElement(userIds)
    },
  ],

  beforeCreate: function (values, next) {
    values.created_at = new Date();
    next();
  },

  beforeUpdate: function (values, next) {
    values.updated_at = new Date();
    next();
  }
};

