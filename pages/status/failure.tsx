import React from 'react'
import Link from 'next/link'

const Failure: React.FC = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
       <h1 className='font-bold text-3xl '>Ups...</h1>
      <p>Parece que algo a ocurrido, o has decidido cancelar tu compra</p>
      <Link href={'/'}>
        <a className='hover:underline'>Volver al inicio</a>
      </Link>
    </div>
  )
}

export default Failure