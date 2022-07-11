import React, { useEffect, useState } from 'react';
import ProductItems from '../../../server/products/index.get.json';
import ProductCat from '../../../server/categories/index.get.json';
import './Products.css';

function Products({ handleClick, cart }) {
  const [data, setData] = useState(ProductItems);
  const filterResult = (catItem) => {
    const result = ProductItems.filter((curItem) => {
      return curItem.category === catItem;
    });
    setData(result);
  };
  return (
    <div className='product-main'>
      <section className='sidebar-sec'>
        {ProductCat.map((cat, i) => (
          <button
            onClick={() => filterResult(cat.id)}
            className='sidebar-button'
            key={i}>
            {cat.name}
          </button>
        ))}
      </section>

      <section className='product-sec'>
        {data.map((items, i) => (
          <div key={i} className='card-wrapper'>
            <h3 className='card-title'>{items.name}</h3>
            <figure>
              <img src={items.imageURL} className='image-wrapper' />
            </figure>
            <p className='card-description'>{items.description}</p>
            <section className='card-price-sec'>
              <p className='card-price'>MRP Rs.{items.price}</p>
              <button
                onClick={() => handleClick(items)}
                className='card-buy-button'>
                Buy Now
              </button>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Products;
