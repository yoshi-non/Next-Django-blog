import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  const { data: session } = useSession();

  return (
    <header className='container flex flex-row items-center mx-auto px-5 py-14 max-w-screen-lg'>
        <Link href="/">
            <a className='text-4xl font-bold text-red-300'>Blog StartUp</a>
        </Link>
        <nav className='ml-auto'>
            <Link href="/about">
                <a className='mr-5'>About</a>
            </Link>
            {session && session.accessToken ? (
                <>
                    <Link href="/profile">
                        <a className='mr-5'>Profile</a>
                    </Link>
                    <button onClick={() => signOut()}>Logout</button>
                </>
              ) : (
                <>
                    <button onClick={() => signIn()}>Login</button>
                </>
              )
            }
        </nav>
    </header>
  )
}

export default Navigation