import { getPosts } from "../usecases/post.mjs";

export const getPostHandler = (req, res) => {
    try {
        const posts = getPosts()
        res.status(200).json({
            success: true,
            data: posts
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed get posts"
        })
    }
}