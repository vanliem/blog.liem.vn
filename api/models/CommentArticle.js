module.exports = {
  tableName: 'comment_article',
  autoPK: false,
  autoCreatedAt: false,
  autoUpdatedAt: false,

  attributes: {
    article_id: { model: 'article' },
    tag_id: { model: 'tag' },
    user_id: { model: 'user' }
  }
};

