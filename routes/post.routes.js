import { Router } from "express";
import { createPosts, deletePosts, retreivePost, retreivePosts, updatePosts } from "../controllers/post.controller.js";


const router = Router();

router.route("/").get(retreivePosts).post(createPosts);
router.route("/:id").get(retreivePost).put(updatePosts).delete(deletePosts);


export default router;
