var async = require('async');

module.exports.bootstrap = function(cb) {
  async.series([
    Tag.seed, Category.seed, User.seed, Article.seed, ArticleTag.seed,
    Comment.seed, CommentArticle.seed, Author.seed, Media.seed
  ], cb);
  //cb();
};
