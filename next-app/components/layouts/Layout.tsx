import React from 'react'
import Navigation from './Navigation'

const Layout = (props: any) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navigation/>

            <main className='container flex flex-1 justify-center mx-auto px-5 max-w-screen-lg'>
                {props.children}
            </main>

            <footer className='flex items-center justify-center w-full h-20 text-sm border-t'>
                &copy; 2022 Next - Django - Blog
            </footer>
        </div>
    )
}

export default Layout