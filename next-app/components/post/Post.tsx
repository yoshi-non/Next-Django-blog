import Link from 'next/link'
import React from 'react'

const Post = ({post}: any) => {
  return (
    <Link href={`/posts/${post.id}`}>
        <div className='p-4 cursor-pointer sm:w-1/2 lg:w-1/4'>
            <img src={post.image} alt="post" className='object-cover w-[200px] h-[200px]'/>
            <div className='text-center my-4'>
                <p>{post.title}</p>
            </div>
        </div>
    </Link>
  )
}

export default Post