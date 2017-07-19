/**
 * Comment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'comments',
  autoPK: true,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    id: { type: 'integer', primaryKey: true },
    parent_id: { type: 'integer' },
    content: { type: 'string', notNull: true, required: true },
    status: { type: 'boolean', defaultsTo: false , notNull: true },
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

