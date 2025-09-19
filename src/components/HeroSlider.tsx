import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { City } from '@/data/cities';
import '../styles/Home.css';

interface HeroSliderProps {
  slides: City[];
  onSlideChange?: (index: number) => void;
  activeIndex?: number;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ 
  slides, 
  onSlideChange,
  activeIndex: externalActiveIndex 
}) => {
  const [internalActiveIndex, setInternalActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Use external activeIndex if provided, otherwise use internal state
  const activeIndex = externalActiveIndex !== undefined ? externalActiveIndex : internalActiveIndex;

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    const newIndex = (activeIndex + 1) % slides.length;
    setIsTransitioning(true);
    
    if (externalActiveIndex === undefined) {
      setInternalActiveIndex(newIndex);
    }
    onSlideChange?.(newIndex);
    
    setTimeout(() => setIsTransitioning(false), 300);
  }, [activeIndex, slides.length, onSlideChange, externalActiveIndex, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    const newIndex = (activeIndex - 1 + slides.length) % slides.length;
    setIsTransitioning(true);
    
    if (externalActiveIndex === undefined) {
      setInternalActiveIndex(newIndex);
    }
    onSlideChange?.(newIndex);
    
    setTimeout(() => setIsTransitioning(false), 300);
  }, [activeIndex, slides.length, onSlideChange, externalActiveIndex, isTransitioning]);

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Sync internal state with external activeIndex
  useEffect(() => {
    if (externalActiveIndex !== undefined && externalActiveIndex !== internalActiveIndex) {
      setInternalActiveIndex(externalActiveIndex);
    }
  }, [externalActiveIndex, internalActiveIndex]);

  if (!slides || slides.length === 0) {
    return null;
  }

  const currentSlide = slides[activeIndex];

  return (
    <div className="hero-slider">
      <div className="hero-slider__container">
        <div className="hero-slider__image-container">
          <img 
            src={currentSlide.imageUrl} 
            alt={currentSlide.name}
            className={`hero-slider__image ${isTransitioning ? 'transitioning' : ''}`}
          />
          <div className="hero-slider__overlay" />
          
          <div className="hero-slider__content">
            <h1 className="hero-slider__title">{currentSlide.name.toUpperCase()}</h1>
            <p className="hero-slider__tagline">"{currentSlide.tagline}"</p>
          </div>
        </div>

        <button 
          className="hero-slider__nav hero-slider__nav--prev" 
          onClick={prevSlide}
          disabled={isTransitioning}
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          className="hero-slider__nav hero-slider__nav--next" 
          onClick={nextSlide}
          disabled={isTransitioning}
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        <div className="hero-slider__indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-slider__indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                if (isTransitioning) return;
                setIsTransitioning(true);
                if (externalActiveIndex === undefined) {
                  setInternalActiveIndex(index);
                }
                onSlideChange?.(index);
                setTimeout(() => setIsTransitioning(false), 300);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;