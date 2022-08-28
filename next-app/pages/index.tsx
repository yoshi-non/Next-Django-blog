import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Post from '../components/post/Post'
import { getAllPostsData } from '../lib/posts'

const Home: NextPage = ({posts}: any) => {
  return (
    <div>
      <Head>
        <title>Blog StartUp</title>
      </Head>
      <div className='mb-10 p-3 border rounded'>
        <Image
          className='object-cover rounded'
          src="/bg-cafe.jpg"
          alt='top'
          width={1280}
          height={500}
        />
      </div>
      <div className='flex justify-center flex-col items-center mb-10'>
        <div className='text-lg mb-3'>BLOG POSTS</div>
        <div className='border w-14'></div>
      </div>
      <div className='flex flex-wrap m-4 mb-5'>
        {posts && posts.map((post: any) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const posts = await getAllPostsData()
  return {
    props: { posts },
    revalidate: 3,
  }
}