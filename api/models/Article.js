var faker = require('faker');
const ARTICLE_STATUS = [
  { 'hide': 0 },
  { 'show': 1 }
];
var categoryModel = require('./Category');
var userModel = require('./User');

var cateIds = [];
var userIds = [];

for (var i = 1; i <= categoryModel.seedData.length; i++) {
  cateIds.push(i);
}
for (var i = 1; i <= userModel.seedData.length; i++) {
  userIds.push(i);
}

module.exports = {
  tableName: 'articles',
	autoPK: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  statuses: ARTICLE_STATUS,

	attributes: {
  	id: { type: 'integer', primaryKey: true, unique: true },
  	title: { type: 'string', notNull: true, required: true },
    short_description: { type: 'text', notNull: true, required: true },
    description: { type: 'text', notNull: true, required: true },
    status: { type: 'boolean', defaultsTo: ARTICLE_STATUS[0].hide, notNull: true },
    created_at: { type: 'datetime', notNull: true },
    updated_at: { type: 'datetime' },
    deleted_at: { type: 'datetime' },

    //Relationship
    category: { model: 'category', columnName: 'category_id', notNull: true, required: true },
    user: { model: 'user', columnName: 'user_id', notNull: true, required: true },
    tags: { collection: 'tag', via: 'article_id', through: 'articletag' },
    comments: { collection: 'comment', via: 'article_id', through: 'commentarticle' },
    medias: { collection: 'media', via: 'article_id' },
	},

  seedData: [
    {
      title: faker.lorem.sentence(),
      short_description: faker.lorem.sentences(),
      description: faker.lorem.lines(),
      category: faker.random.arrayElement(cateIds),
      user: faker.random.arrayElement(userIds)
    },
    {
      title: faker.lorem.sentence(),
      short_description: faker.lorem.sentences(),
      description: faker.lorem.lines(),
      category: faker.random.arrayElement(cateIds),
      user: faker.random.arrayElement(userIds)
    },
    {
      title: faker.lorem.sentence(),
      short_description: faker.lorem.sentences(),
      description: faker.lorem.lines(),
      category: faker.random.arrayElement(cateIds),
      user: faker.random.arrayElement(userIds)
    },
    {
      title: faker.lorem.sentence(),
      short_description: faker.lorem.sentences(),
      description: faker.lorem.lines(),
      category: faker.random.arrayElement(cateIds),
      user: faker.random.arrayElement(userIds)
    },
    {
      title: faker.lorem.sentence(),
      short_description: faker.lorem.sentences(),
      description: faker.lorem.lines(),
      category: faker.random.arrayElement(cateIds),
      user: faker.random.arrayElement(userIds)
    },
    {
      title: faker.lorem.sentence(),
      short_description: faker.lorem.sentences(),
      description: faker.lorem.lines(),
      category: faker.random.arrayElement(cateIds),
      user: faker.random.arrayElement(userIds)
    },
    {
      title: faker.lorem.sentence(),
      short_description: faker.lorem.sentences(),
      description: faker.lorem.lines(),
      category: faker.random.arrayElement(cateIds),
      user: faker.random.arrayElement(userIds)
    },
    {
      title: faker.lorem.sentence(),
      short_description: faker.lorem.sentences(),
      description: faker.lorem.lines(),
      category: faker.random.arrayElement(cateIds),
      user: faker.random.arrayElement(userIds)
    },
    {
      title: faker.lorem.sentence(),
      short_description: faker.lorem.sentences(),
      description: faker.lorem.lines(),
      category: faker.random.arrayElement(cateIds),
      user: faker.random.arrayElement(userIds)
    },
    {
      title: faker.lorem.sentence(),
      short_description: faker.lorem.sentences(),
      description: faker.lorem.lines(),
      category: faker.random.arrayElement(cateIds),
      user: faker.random.arrayElement(userIds)
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
