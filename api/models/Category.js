var faker = require('faker');

module.exports = {
  tableName: 'categories',
  autoPK: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
  	id: { type: 'integer', unique: true, primaryKey: true },
    title: { type: 'string', required: true },
    created_at: { type: 'datetime', notNull: true },
    updated_at: { type: 'datetime' },
    deleted_at: { type: 'datetime' },

    //Relationship
    articles: { collection: 'article', via: 'category_id' },
  },
  seedData: [
    { title: faker.lorem.sentence() },
    { title: faker.lorem.sentence() },
    { title: faker.lorem.sentence() },
    { title: faker.lorem.sentence() },
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
