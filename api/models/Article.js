module.exports = {
  tableName: 'articles',
	autoPK: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,

	attributes: {
  	id: { type: 'integer', primaryKey: true, unique: true },
  	category_id: { model: 'category', notNull: true, required: true },
  	user_id: { model: 'user', notNull: true, required: true },
  	title: { type: 'string', notNull: true, required: true	},
  	short_description: { type: 'text', notNull: true, required: true	},
  	description: { type: 'text', notNull: true, required: true	},
  	status: { type: 'boolean', defaultsTo: 0, notNull: true },
    created_at: { type: 'datetime', notNull: true},
    updated_at: { type: 'datetime' },
    deleted_at: { type: 'datetime' },
    articles: { collection: 'tag', via: 'article_id', through: 'articletag' },
    comments: { collection: 'comment', via: 'article_id', through: 'commentarticle' },
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
