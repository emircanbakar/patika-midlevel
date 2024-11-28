const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const addblog = await Post.find({});
  res.render('index', { addblog });
};

exports.createPost = async (req, res) => {
  await Post.create(req.body);
  res.redirect('/');
};

exports.getOnePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.render('post', {
    post,
  });
};
