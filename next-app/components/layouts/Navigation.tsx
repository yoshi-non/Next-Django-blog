import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <header className='container flex flex-row items-center mx-auto px-5 py-14 max-w-screen-lg'>
        <Link href="/">
            <a className='text-4xl font-bold text-red-300'>Blog StartUp</a>
        </Link>
        <nav className='ml-auto'>
            <Link href="/about">
                <a className='mr-5'>About</a>
            </Link>
        </nav>
    </header>
  )
}

export default Navigation