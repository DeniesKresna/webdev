import {Post} from '../models/post.mjs'

const mockPosts = [
    new Post(1, "First Post", "This is the first post", "Alice", new Date(), new Date()),
    new Post(2, "Second Post", "This is the second post", new Date(), new Date())
]

export const getPostRepo = () => {
    return mockPosts
}