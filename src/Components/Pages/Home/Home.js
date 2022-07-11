import React, { useState } from 'react';
import SlideData from '../../../server/banners/index.get.json';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Category from '../../../server/categories/index.get.json';
import './Home.css';

function Home() {
  const [current, setCurrent] = useState(0);
  const length = SlideData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SlideData) || SlideData.length <= 0) {
    return null;
  }

  return (
    <section className='home-main-sec'>
      <section className='slider'>
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        {SlideData.map((slide, index) => {
          return (
            <div
              className={index === current ? 'slide active' : 'slide'}
              key={index}>
              {index === current && (
                <img src={slide.bannerImageUrl} className='image' />
              )}
            </div>
          );
        })}
      </section>
      <section>
        {Category.map((items) =>
          items.enabled ? (
            <section className='container'>
              {items.order % 2 == 0 && items.enabled ? (
                <>
                  <section className='content-wrapper'>
                    <h2 className='content-header'>{items.name}</h2>
                    <p className='content-des'>{items.description}</p>
                    <button className='content-button'>
                      Explore {items.name}
                    </button>
                  </section>
                  <img src={items.imageUrl} className='cat-image' />
                </>
              ) : (
                <>
                  <img src={items.imageUrl} className='cat-image' />
                  <section className='content-wrapper'>
                    <h2 className='content-header'>{items.name}</h2>
                    <p className='content-des'>{items.description}</p>
                    <button className='content-button'>
                      Explore {items.name}
                    </button>
                  </section>
                </>
              )}
            </section>
          ) : null
        )}
      </section>
    </section>
  );
}

export default Home;
