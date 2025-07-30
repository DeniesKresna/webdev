import { addPost, deletePostById, getAllPosts, updatePostById } from "../usecases/post.mjs"

export const getAllPostHandler = async (req, res) => {
    const posts = await getAllPosts()
    res.status(200).json({
        success: true,
        data: posts
    })
}

export const addPostHandler = async (req, res) => {
    const postData = req.body
    console.log(postData)
    const posts = await addPost(postData)
    res.status(200).json({
        success: true,
        data: posts,
        message: "sukses tambah data"
    })
}

export const updatePostByIdHandler = async (req, res) => {
    const id = req.params.id
    const postData = req.body
    const posts = await updatePostById(id, postData)
    res.status(200).json({
        success: true,
        data: posts,
        message: "sukses tambah data"
    })
}

export const deletePostByIdHandler = async (req, res) => {
    const id = req.params.id
    const posts = await deletePostById(id)
    res.status(200).json({
        success: true,
        data: posts,
        message: "sukses hapus data"
    })
}