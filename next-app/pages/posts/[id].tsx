import { useRouter } from 'next/router'
import React from 'react'
import { getAllPostIds, getPostData } from '../../lib/posts'

const PostData = ({post}: any) => {
  const router = useRouter()

  if (router.isFallback || !post) {
    return (
        <div>Loading...</div>
    )
  }

  return (
    <div className='space-y-5 w-full'>
      <div className='flex justify-center flex-col items-center mb-5'>
        <h1 className='text-3xl mb-3 font-bold'>{post.title}</h1>
        <p className='mb-3'>{post.created_at}</p>
        <div className='border w-14'></div>
      </div>
      <p className='whitespace-pre-wrap'>{post.content}</p>
    </div>
  )
}

export default PostData

// 投稿一覧のIDを取得
export const getStaticPaths = async () => {
    const paths = await getAllPostIds()
    return {
        paths,
        fallback: true,
    }
}

// 投稿詳細のデータを取得
export const getStaticProps = async ({params}: any) => {
    const post = await getPostData(params.id)
    return {
        props: {
            post,
        },
        revalidate: 3,
    }
}
