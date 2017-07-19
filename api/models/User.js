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
    articles: { collection: 'article', via: 'user_id'},
    pony: { model: 'author' },
    comments: { collection: 'comment', via: 'user_id', through: 'commentarticle' },
  },

  beforeCreate: function (values, next) {
    values.created_at = new Date();

    next();
  },

  beforeUpdate: function (values, next) {
    values.updated_at = new Date();
    next();
  }
};

