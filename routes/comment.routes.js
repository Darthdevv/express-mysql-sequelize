import { Router } from "express";
import { createComments, deleteComments, retreiveComment, retreiveComments, updateComments } from "../controllers/comment.controller.js";

const router = Router();

router.route("/").get(retreiveComments).post(createComments);
router.route("/:id").get(retreiveComment).put(updateComments).delete(deleteComments);

export default router;
