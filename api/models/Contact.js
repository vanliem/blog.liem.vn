module.exports = {
  tableName: 'contacts',
  autoPK: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id: { type: 'integer', primaryKey: true },
    full_name: { type: 'string', notNull: true, required: true },
    email: { type: 'email', required: true, notNull: true },
    subject: { type: 'text', notNull: true, required: true },
    message: { type: 'text', notNull: true, required: true },
    created_at: { type: 'datetime', notNull: true},
    updated_at: { type: 'datetime' },
    deleted_at: { type: 'datetime' }
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

