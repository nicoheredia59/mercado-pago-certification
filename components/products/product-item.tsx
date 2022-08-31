import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { useSWRConfig } from 'swr'

interface Props {
  id: number
  name: string
  description: string
  price: number
  image: string
}

const ProductItem: React.FC<Props> = ({ id, name, description, price, image }) => {
  const { mutate } = useSWRConfig()
  const router = useRouter()

  const handleClick = async () => {
    await mutate('/api/mercadopago/preference/create', async () => {
      const response =  await axios.request({
        url: '/api/mercadopago/preference/create',
        method: 'POST',
        data: {
          id,
          name,
          description,
          price,
          image
        }
      }).then((res) => {
        router.push(res.data.preference_data.init_point)

        return res.data
      })
      .catch((error) =>{
        throw new Error('error', error)
      })
      
      return response
    })
  }
  return (
    <article className='w-[300px] rounded-lg p-5 shadow-xl'>
      <div className=' flex justify-center items-start rounded-lg bg-slate-300 mb-5'>
        <Image
          src={'/images/mbp16.png'}
          alt={'Product image'}
          width={200}
          height={200}
          objectFit={'contain'}
        />
      </div>
      <span className='flex justify-between w-full'>
        <h2 className='font-bold'>{name}</h2>
        <p>$<span className='font-bold'>{price}</span></p>
      </span>
      <p className='text-ellipsis overflow-hidden h-[100px]'>{description}</p>
      <span>
        <button onClick={async () =>{await handleClick()}} className='font-bold p-3 rounded-lg mt-5 bg-[#3483fa] hover:bg-[#2c6fd4] text-white w-full text-center'>Comprar con Mercado Pago</button>
      </span>
    </article>
  )
}

export default ProductItem
