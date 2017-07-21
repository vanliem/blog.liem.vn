var faker = require('faker');
const MEDIA_TYPE = [
  {image: 0},
  {audio: 1},
  {video: 2},
];

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
      article_id: faker.random.arrayElement([1, 2, 3, 4, 5, 6]),
      user_id: faker.random.arrayElement([1, 2, 3])
    },
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement([1, 2, 3, 4, 5, 6]),
      user_id: faker.random.arrayElement([1,2, 3])
    },
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement([1, 2, 3, 4, 5, 6]),
      user_id: faker.random.arrayElement([1,2, 3])
    },
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement([1, 2, 3, 4, 5, 6]),
      user_id: faker.random.arrayElement([1,2, 3])
    },
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement([1, 2, 3, 4, 5, 6]),
      user_id: faker.random.arrayElement([1, 2, 3])
    },
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement([1, 2, 3, 4, 5, 6]),
      user_id: faker.random.arrayElement([1,2, 3])
    },
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement([1, 2, 3, 4, 5, 6]),
      user_id: faker.random.arrayElement([1,2, 3])
    },
    {
      path: faker.random.image(),
      article_id: faker.random.arrayElement([1, 2, 3, 4, 5, 6]),
      user_id: faker.random.arrayElement([1,2, 3])
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

