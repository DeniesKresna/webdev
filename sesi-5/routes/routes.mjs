import e from "express";
import { addPostHandler, deletePostByIdHandler, getAllPostHandler, updatePostByIdHandler } from "../handlers/post.mjs";

const router = e.Router()

// get, post, put, delete
//localhosh:4000/posts
router.get("/posts", getAllPostHandler)
router.post("/posts", addPostHandler)
router.put("/posts/:id", updatePostByIdHandler)
router.delete("/posts/:id", deletePostByIdHandler)

export default router