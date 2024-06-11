import Comment from "../models/comment.model.js";



export const createComments = async (req, res, next) => {
  try {
    const { content } = req.body;

    if ( !content) {
      return res.status(400).json("please fill content field");
    }

    const newComment = await Comment.create({
      content,
    });

    if (!newComment) {
      return res.status(400)("Comment couldn't be created.");
    }

    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const retreiveComments = async (req, res, next) => {
  try {
    const comments = await Comment.findAll();

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const retreiveComment = async (req, res, next) => {
  try {
    const { id } = req.params;

    const comment = await Comment.findByPk(id);

    if (!comment) {
      return res.status(404).json("Comment not found.");
    }

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateComments = async (req, res, next) => {
  try {
    const { content } = req.body;

    const { id } = req.params;

    const updatedComment = await Comment.update(
      {
        content
      },
      {
        where: { id },
      }
    );

    if (!updatedComment[0]) {
      return res.status(400).json("failed to update the comment.");
    }

    return res.status(200).json({
      message: "Comment updated successfully.",
      updatedComment,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteComments = async (req, res, next) => {
  try {
    
  } catch (error) {
    res.status(500).json(error);
  }
};