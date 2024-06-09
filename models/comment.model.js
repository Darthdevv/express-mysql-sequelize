import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";
import Post from "./post.model.js";
import User from "./user.model.js";

const Comment = sequelize.define(
  "Comments",
  {
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

console.log(Comment === sequelize.models.Comments);




export default Comment;
