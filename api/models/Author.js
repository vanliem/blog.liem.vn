var faker = require('faker');

module.exports = {
  tableName: 'authors',
  autoPK: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id: { type: 'integer', primaryKey: true },
    introduction: { type: 'text', notNull: true, required: true },
    created_at: { type: 'datetime', notNull: true},
    updated_at: { type: 'datetime' },
    deleted_at: { type: 'datetime' },

    //Relationship
    user_id: { model: 'user', unique: true },
  },

  seedData: [
    {
      introduction: faker.lorem.paragraph(),
      user_id: 3
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

