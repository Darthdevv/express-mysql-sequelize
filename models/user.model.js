import { DataTypes } from "sequelize";
import { sequelize } from "../db/database.js";
import Post from "./post.model.js";
import Comment from "./comment.model.js";

const User = sequelize.define(
  "Users",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    freezeTableName: true
  }
);

console.log(User === sequelize.models.Users);


User.hasMany(Post, {
  foreignKey: "authorId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
User.hasMany(Comment, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Post.hasMany(Comment, {
  foreignKey: "postId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
Post.belongsTo(User, { foreignKey: "authorId", as: "author" });
Comment.belongsTo(User, { foreignKey: "userId", as: "user" });
Comment.belongsTo(Post, { foreignKey: "postId", as: "post" });


export default User;