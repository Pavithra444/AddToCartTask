import { useState } from 'react'
import React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';


function App() {

  const [cart, setCart] = useState([]);

  const products = [
        {
          id: 1,
          image: 'https://cliosilks.com/cdn/shop/articles/blog-Cover.jpg?v=1686996035',
          name: 'KanchiSilk',
          price:8999.00,
        },
        {
          id: 2,
          image: 'https://www.drishtiias.com/images/uploads/1627546206_image2.jpg',
          name: 'BanarasSilk',
          price: 4850.00,
        },
        {
          id: 3,
          image: 'https://www.prashantisarees.com/cdn/shop/files/pochampally-silk-saree-pale-yellow-and-purple-with-allover-ikat-weaves-and-long-annam-zari-woven-border-prashanti-sarees-1.jpg?v=1703589281',
          name: 'PochamPalli',
          price: 3500.00,
        },
        {
          id: 4,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJwm3Niz5YRRCPU88Nj4Su5C1Dxq4CfVkYNg&s',
          name: 'NegamamSaree',
          price: 2500.99,
        },
        {
            id: 5,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8eMFVLN2xXDNbh_jA75euYrTUEfBrtyfwOXIhh3BXbr43LIO2nrmZ9MUNDXxREM0be_c&usqp=CAU',
            name: 'SilkCotton',
            price: 1600.00,
          },
          {
            id: 6,
            image: 'https://utsarees.in/cdn/shop/files/WhatsAppImage2024-06-24at11.25.20AM.jpg?v=1719213298',
            name: 'Vivaha',
            price: 15000.00,
          },
          {
            id: 7,
            image: 'https://heerfashion.com/public/products/09-2020/productIDl76B3a0lMCf5nSDVTzeHMLh9MsU4ZJEKL6pzQGkD.jpeg',
            name: 'PavithraSilk',
            price: 500000.99,
          },
          {
            id: 8,
            image: 'https://i.pinimg.com/236x/34/6e/0b/346e0b866a900e1f19f1659ab4748cdd.jpg',
            name: 'SoftSilk',
            price: 7000.00,
          },
      ];

  // Add product to the cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove product from the cart
  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  // Check if a product is in the cart
  const isInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <div className='AppDiv'>
      <Topbar/>
      <Header cartLength={cart.length} />
      <Banner/>
      <ProductList
        products={products}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        isInCart={isInCart}
      />
    </div>
  );
}

export default App;


