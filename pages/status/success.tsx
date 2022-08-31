import React from 'react'
import Link from 'next/link'

const Success: React.FC = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className='font-bold text-3xl'>Felicidades!</h1>
      <p>Tu compra a sido concretada con exito</p>
      <Link href={'/'}>
        <a className='hover:underline'>Volver al inicio</a>
      </Link>
    </div>
  )
}

export default Success