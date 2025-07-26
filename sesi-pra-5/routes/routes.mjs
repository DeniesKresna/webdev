import e from "express";
import { addPostHandler, deletePostHandler, getAllPostHandler, updatePostHandler } from "../handlers/post.mjs";

const router = e.Router()

router.get("/posts", getAllPostHandler)
router.post("/posts", addPostHandler)
router.put('/posts/:id', updatePostHandler);
router.delete('/posts/:id', deletePostHandler); 

export default router