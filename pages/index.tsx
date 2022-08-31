import type { NextPage } from 'next'
import ProductList from '../components/products/product-list'

const Home: NextPage = () => {
  return (
    <div className=''>
      <ProductList />
    </div>
  )
}

export default Home
