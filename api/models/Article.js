var faker = require('faker');
const ARTICLE_STATUS = [
  { 'hide': 0 },
  { 'show': 1 }
];

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
    category_id: { model: 'category', notNull: true, required: true },
    user_id: { model: 'user', notNull: true, required: true },
    tags: { collection: 'tag', via: 'article_id', through: 'articletag' },
    comments: { collection: 'comment', via: 'article_id', through: 'commentarticle' },
    medias: { collection: 'media', via: 'article_id' },
	},

  seedData: [
    {
      title: faker.lorem.sentence(),
      short_description: faker.lorem.paragraph(),
      description: faker.lorem.paragraph(),
      category_id: faker.random.arrayElement([1,2]),
      user_id: faker.random.arrayElement([1,2])
    },
    {
      title: faker.lorem.sentence(),
      short_description: faker.lorem.paragraph(),
      description: faker.lorem.paragraph(),
      category_id: faker.random.arrayElement([1,2]),
      user_id: faker.random.arrayElement([1,2])
    },
    {
      title: faker.lorem.sentence(),
      short_description: faker.lorem.paragraph(),
      description: faker.lorem.paragraph(),
      category_id: faker.random.arrayElement([1,2]),
      user_id: faker.random.arrayElement([1,2])
    }
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
