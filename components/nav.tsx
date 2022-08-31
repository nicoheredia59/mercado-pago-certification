import Link from 'next/link'
import React from 'react'

const NavBar: React.FC = () => {
  return (
    <header>
      <nav className='flex justify-center items-center'>
        <Link href={'/'}>
          <a className='text-lg'>Tu tienda 🏪</a>
        </Link>
      </nav>
    </header>
  )
}

export default NavBar