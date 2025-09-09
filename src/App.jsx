import ProductPage from './ProductPage'
import './App.css'

import image1 from './assets/image-product-1.jpg';
import thumb1 from './assets/image-product-1-thumbnail.jpg';
import image2 from './assets/image-product-2.jpg';
import thumb2 from './assets/image-product-2-thumbnail.jpg';
import image3 from './assets/image-product-3.jpg';
import thumb3 from './assets/image-product-3-thumbnail.jpg';
import image4 from './assets/image-product-4.jpg';
import thumb4 from './assets/image-product-4-thumbnail.jpg';

const product = {
  info: {
    company: 'Sneaker Company',
    title: 'Fall Limited Edition Sneakers',
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 250.00,
    discount: 50,
    stock: 25
  },
  images: [
    { main: image1, thumbnail: thumb1 },
    { main: image2, thumbnail: thumb2 },
    { main: image3, thumbnail: thumb3 },
    { main: image4, thumbnail: thumb4 },
  ]
}

function App() {
  return (
    <>
    < ProductPage product={product}/>
    </>
  )
}

export default App
