import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";
import Comment from "./comment.model.js";
import User from "./user.model.js";

const Post = sequelize.define(
  "Posts",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

console.log(Post === sequelize.models.Posts);



export default Post;
