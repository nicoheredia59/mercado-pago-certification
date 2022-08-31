import React from 'react'
import { products } from '../../assets/products'
import ProductItem from './product-item'

const ProductList: React.FC = () => {
  return (
    <div className='flex justify-center items-center flex-col my-5'>
      <h1 className='font-bold text-xl'>Listado de productos</h1>
      <div className='flex justify-center flex-wrap  py-10 gap-10'>
        {
          products.map((product) => (
            <ProductItem
              id={product.id}
              key={product.id}
              description={product.description}
              name={product.title}
              price={product.unit_price}
              image={product.picture_url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ProductList
