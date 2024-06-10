import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const createPosts = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json("please fill all fields");
    }

    const newPost = await Post.create({
      title,
      content
    });

    if (!newPost) {
      return res.status(400)("Post couldn't be created.");
    }

    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const retreivePosts = async (req, res, next) => {
  try {
    const posts = await Post.findAll();

    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const retreivePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    const post = await Post.findByPk(id);

    if (!post) {
      return res.status(404).json("Post not found.");
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatePosts = async (req, res, next) => {
  try {
    
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deletePosts = async (req, res, next) => {
  try {
    
  } catch (error) {
    res.status(500).json(error);
  }
};
