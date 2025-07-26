import { getPostRepo } from "../repositories/post.mjs";

export const getPosts = () => {
    return getPostRepo();
}