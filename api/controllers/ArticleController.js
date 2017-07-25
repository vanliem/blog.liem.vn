'use strict';
/**
 * PostController
 *
 * @description :: Server-side logic for managing Posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



  /**
   * `PostController.create()`
   */
  create: function (req, res) {
   /* //Get Params
    let title = req.param('title'),
      content = req.param('content'),
      userId = req.param('user_id'),
      cateName = req.param('category_name');

    //Check Params
    if (!title) return res.badRequest('Invalid title');
    if (!content) return res.badRequest('Invalid content');
    if (!userId) return res.badRequest('Invalid userId');
    if (!cateName) return res.badRequest('Invalid cateName');

    //Create data
    Category.findOrCreate({name: cateName})
      .then(_category => {
        if (!_category) throw new Error('Unable to create category record');

        return _category;
      })

      .then(_category => {
        return Post.create({
          title: title,
          content: content,
          user: userId,
          category: _category.id
        });
      })

      .then(_post => {
        if (!_post) throw new Error('Unable to create new post');

        return res.json({post: _post});
      })
      .catch(err => res.serverError(err.message));*/
  },


  /**
   * `PostController.findAll()`
   */
  findAll: function (req, res) {
    /*Post.find()
      .populate('user')
      .populate('category')
      .then(_posts => {
        if (!_posts || _posts.length === 0) {
          throw new Error('No posts found');
        }

        return res.ok(_posts)
      })
      .catch(err => res.serverError(err.message));*/
  },


  /**
   * `PostController.findOne()`
   */
  findOne: function (req, res) {
    let articleId = req.params.id;

    if (!articleId) return res.badRequest({err: 'missing post id'});

    Article.findOne({id: articleId})
      .populate('category')
      .populate('user')
      .populate('tags')
      .populate('comments')
      .exec(function (err, article) {
        if (err) {
          return res.serverError(err);
        }

        return res.json(article);
      });
  },


  /**
   * `PostController.delete()`
   */
  delete: function (req, res) {
    /*let postId = req.params.id;
    if (!postId) return res.badRequest({err: 'Post_id is missing'});

    Post.destroy({id: postId})
      .then(_post => {
        if (!_post || _post.length === 0) return res.notFound({ err: 'No post found in our record' });

        res.ok(`Post is deleted with id: ${postId}`);
      })
      .catch(err => res.serverError(err.message));*/
  },


  /**
   * `PostController.update()`
   */
  update: function (req, res) {
    /*//Get Params
    let title = req.param('title'),
      content = req.param('content'),
      userId = req.param('user_id'),
      cateId = req.param('category_id'),
      postId = req.params.id;

    //Check Params
    if (!postId) return res.badRequest({err: 'Post_id is missing'});
    if (!title) return res.badRequest('Invalid title');
    if (!content) return res.badRequest('Invalid content');
    if (!userId) return res.badRequest('Invalid userId');
    if (!cateId) return res.badRequest('Invalid cateId');

    let post = {
      title: title,
      content: content,
      user: userId,
      category: cateId
    };

    Post.update({id: postId, post})
      .then(_post => {
        if (!_post[0] || _post[0].length === 0) return res.notFound({ err: 'No post found' });

        return res.ok(_post);
      })
      .catch(err => res.serverError(err.message));*/
  }
};

