import React from 'react'
import Link from 'next/link'

const Pending: React.FC = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className='font-bold text-3xl '>Espera un poco mas...</h1>
      <p>Estamos procesando tu pago, mientras tanto sigue nevgando</p>
      <Link href={'/'}>
        <a className='hover:underline'>Volver al inicio</a>
      </Link>
    </div>
  )
}

export default Pending