import e from "express";
import { getPostHandler } from "../handlers/post.mjs";

const router = e.Router()

router.get("/posts", getPostHandler)

export default router