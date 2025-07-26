import { addPostRepo, deletePostByIdRepo, getAllPostRepo, updatePostByIdRepo } from "../repositories/post.mjs"

export const getPostByTitle = async () => {
    return await getAllPostRepo()
}

export const getAllPosts = async () => {
    return await getAllPostRepo()
}

export const addPost = async (postData) => {
    return await addPostRepo(postData)
}

export const updatePostById = async (id, postData) => {
    return await updatePostByIdRepo(id, postData)
}

export const deletePostById = async (id) => {
    return await deletePostByIdRepo(id)
}