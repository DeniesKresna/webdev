import e from "express";
import { addPostHandler, deletePostByIdHandler, getAllPostHandler, updatePostByIdHandler } from "../handlers/post.mjs";
import { addUserHandler, getUserByEmailHandler, getUserByIdHandler, getUsersHandler, loginUserHandler } from "../handlers/user.mjs";
import { logReqMiddleware } from "./log-req-mid.mjs";
import {authMiddleware} from "./auth-mid.mjs"

const router = e.Router()

// get, post, put, delete
//localhosh:4000/posts
router.use(logReqMiddleware)

router.get("/posts", getAllPostHandler)
router.post("/posts", addPostHandler)
router.put("/posts/:id", updatePostByIdHandler)
router.delete("/posts/:id", deletePostByIdHandler)

router.get("/users", getUsersHandler)
router.post("/users", authMiddleware, addUserHandler)
router.get("/users/:id", getUserByIdHandler)
router.get("/users/email/:email", getUserByEmailHandler)
router.post("/users/auth", loginUserHandler)

export default router