module.exports = {
  tableName: 'medias',
  autoPK: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id: { type: 'integer' , primaryKey: true },
    content: { type: 'string', notNull: true, required: true },
    type: { type: 'string', defaultsTo: 0 , notNull: true },

    created_at: { type: 'datetime', notNull: true },
    updated_at: { type: 'datetime' },
    deleted_at: { type: 'datetime' },

    //Relationship
    article_id: { model: 'article', notNull: true },
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

