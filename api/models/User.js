var bcrypt = require('bcrypt');
const saltRounds = 10;
var faker = require('faker');

module.exports = {
  tableName: 'users',
  autoPK: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id: { type: 'integer', unique: true, primaryKey: true },
    email: { type: 'email', unique: true, required: true, notNull: true },
    full_name: { type: 'string', required: true },
    password: { type: 'string', required: true, notNull: true },
    last_login: { type: 'datetime' },
    ip: { type: 'string' },
    created_at: { type: 'datetime', notNull: true},
    updated_at: { type: 'datetime' },
    deleted_at: { type: 'datetime' },

    //Relationship
    articles: { collection: 'article', via: 'user'},
    pony: { model: 'author' },
    comments: { collection: 'comment', via: 'user_id', through: 'commentarticle' },
  },

  seedData: [
    {
      email: faker.internet.email(),
      full_name: faker.name.findName('Example'),
      password: 123456,
      last_login: new Date(),
      ip: faker.internet.ip()
    },
    {
      email: faker.internet.email(),
      full_name: faker.name.findName('Example'),
      password: 123456,
      last_login: new Date(),
      ip: faker.internet.ip()
    },
    {
      email: faker.internet.email(),
      full_name: faker.name.findName('Example'),
      password: 123456,
      last_login: new Date(),
      ip: faker.internet.ip()
    },
    {
      email: faker.internet.email(),
      full_name: faker.name.findName('Example'),
      password: 123456,
      last_login: new Date(),
      ip: faker.internet.ip()
    },
    {
      email: 'vanliem2204@gmail.com',
      full_name: 'Le Van Liem',
      password: 123456,
      last_login: new Date(),
      ip: faker.internet.ip()
    },
  ],

  beforeCreate: function (values, next) {
    values.created_at = new Date();

    bcrypt.hash(values.password, saltRounds, function (err, hash) {
      if (err) return next(err);
      values.password = hash;

      next();
    });
  },

  beforeUpdate: function (values, next) {
    values.updated_at = new Date();
    next();
  }
};

