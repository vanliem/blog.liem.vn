var faker = require('faker');

module.exports = {
  tableName: 'tags',
  autoPK: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id: { type: 'integer', primaryKey: true },
    tag_name: { type: 'string', notNull: true, required: true },
    created_at: { type: 'datetime', notNull: true },
    updated_at: { type: 'datetime' },

    //Relationship
    articles: { collection: 'article', via: 'tag_id', through: 'articletag' }
  },
  seedData: [
    { tag_name: faker.lorem.sentence() },
    { tag_name: faker.lorem.sentence() },
    { tag_name: faker.lorem.sentence() },
    { tag_name: faker.lorem.sentence() },
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

