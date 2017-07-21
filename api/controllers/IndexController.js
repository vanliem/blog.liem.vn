var async = require('async');

module.exports = {
	index: function (req, res) {
    var data = null;
	  //http://jsoneditoronline.org/?id=af90232ca200bceb7df211f37cd103ad
    async.parallel({
      articles: function (callback) {
        Article.find({
          limit: 10,
          sort: 'created_at DESC'
        })
        .populate('category').populate('user').populate('medias')
        .exec(function (err, articles) {
          if (err) {
            return res.serverError(err);
          }
          callback(null, articles);
        });
      },
      tags: function (callback) {
        Tag.find().exec(function (err, tags) {
          if (err) {
            return res.serverError(err);
          }

          callback(null, tags);
        });
      },
      categories: function (callback) {
        Category.find().exec(function (err, categories) {
          if (err) {
            return res.serverError(err);
          }
            callback(null, categories);
        });
      }
    }, function (err, results) {
      if (err) {
        return res.serverError(err);
      }
      return res.view('homepage', {data: results});
      //return res.json(results);
    });
  }
};

