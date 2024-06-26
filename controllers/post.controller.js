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
    const { title, content } = req.body;

    const { id } = req.params;

    const updatedPost = await Post.update(
      {
        title,
        content
      },
      {
        where: { id },
      }
    )

    if (!updatedPost[0]) {
      return res.status(400).json("failed to update the post.");
    }

    res.status(200).json({
      message: 'Post updated successfully.',
      updatedPost
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deletePosts = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedPost = await Post.destroy({
      where: { id }
    })

    if (!deletedPost) {
      return res.status(400).json("failed to delete the post.");
    }

    res.status(204).json({
      message: "Post deleted successfully.",
      deletedPost,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
