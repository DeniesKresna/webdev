import e from "express";
import { addPostHandler, deletePostByIdHandler, getAllPostHandler, updatePostByIdHandler } from "../handlers/post.mjs";
import { getUserslHandler, getUserByEmailHandler, addUserHandler, loginUserHandler, deteleUserByIdHandler } from "../handlers/user.mjs";
import { logReqMiddleware } from "./log-req-mid.mjs";
import { authMiddleware } from "./auth-mid.mjs";

const router = e.Router()

router.get("/posts", getAllPostHandler)
router.post("/posts", logReqMiddleware, addPostHandler)
router.put("/posts/:id", updatePostByIdHandler)
router.delete("/posts/:id", deletePostByIdHandler)

router.get("/users", getUserslHandler)
router.get("/users/email/:email", getUserByEmailHandler)
router.post("/users", authMiddleware, addUserHandler)
router.post("/users/login", logReqMiddleware, loginUserHandler)
router.delete("/users/:id", authMiddleware, deteleUserByIdHandler)

export default router