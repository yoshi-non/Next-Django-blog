// Django APIサーバーURL
const SERVERURL = "http://127.0.0.1:8000/"

// 投稿一覧を取得
export const getAllPostsData = async () => {
    const res = await fetch(new URL(`${SERVERURL}api/post/`))
    const posts = await res.json()
    return posts
}

// 投稿一覧のIDを取得
export const getAllPostIds = async () => {
    const res = await fetch(new URL(`${SERVERURL}api/post/`))
    const posts = await res.json()
    return posts.map((post: any) => {
        return {
            params: {
                id: String(post.id),
            },
        }
    })
}

// 投稿詳細を取得
export const getPostData = async (id: string) => {
    const res = await fetch(new URL(`${SERVERURL}api/post/${id}/`))
    const post = await res.json()
    return post
}