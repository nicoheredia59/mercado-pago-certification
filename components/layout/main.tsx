import Head from 'next/head'
import React from 'react'
import Footer from '../footer'
import NavBar from '../nav'

interface Props {
  children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Tu Tienda 🏪</title>
        <meta name='' content=''/>
      </Head>
      <NavBar />
      <main>
        <div className='md:container md:mx-auto'>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
