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
    //Get Params
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
      .catch(err => res.serverError(err.message));
  },


  /**
   * `PostController.findAll()`
   */
  findAll: function (req, res) {
    return res.json({
      todo: 'findAll() is not implemented yet!'
    });
  },


  /**
   * `PostController.findOne()`
   */
  findOne: function (req, res) {
    return res.json({
      todo: 'findOne() is not implemented yet!'
    });
  },


  /**
   * `PostController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  },


  /**
   * `PostController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  }
};

