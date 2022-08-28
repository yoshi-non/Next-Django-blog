import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
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
    </div>
  )
}

export default Home
