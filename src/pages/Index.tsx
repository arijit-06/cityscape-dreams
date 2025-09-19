import React, { useState } from 'react';
import { HeroSlider } from '@/components/HeroSlider';
import { cities } from '@/data/cities';
import '@/styles/Home.css';

const Index = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveSlideIndex(index);
  };

  const handleCityClick = (cityIndex: number) => {
    setActiveSlideIndex(cityIndex);
  };

  return (
    <div className="home-page">
      <HeroSlider 
        slides={cities} 
        onSlideChange={handleSlideChange}
        activeIndex={activeSlideIndex}
      />
      
      <section className="city-explorer">
        <h2 className="city-explorer__title">Explore your City</h2>
        <div className="city-list">
          {cities.map((city, index) => (
            <button
              key={city.id}
              className={`city-list__item ${index === activeSlideIndex ? 'active' : ''}`}
              onClick={() => handleCityClick(index)}
            >
              {city.name}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
