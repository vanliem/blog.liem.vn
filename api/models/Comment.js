const COMMENT_STATUS = [
  { 'hide': 0 },
  { 'show': 1 }
];

module.exports = {
  tableName: 'comments',
  autoPK: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,
  statuses: COMMENT_STATUS,

  attributes: {
    id: { type: 'integer', primaryKey: true },
    parent_id: { collection: 'user', via: 'id' },
    content: { type: 'string', notNull: true, required: true },
    status: { type: 'boolean', defaultsTo: COMMENT_STATUS[0].hide , notNull: true },
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

