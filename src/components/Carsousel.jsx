// Carousel.js
import React, { useState, useEffect } from 'react';
import './style/Carsousel.css'; // Import the CSS file

const Carousel = () => {
  const [currentI, setCurrentI] = useState(0);

  const slides = [
    {
      imgSrc: './assets/c1.jpg',
      title: 'What is a Deepfake',
      text: 'A deepfake is a form of media created using artificial intelligence that can alter or generate realistic images and videos, making it look like someone said or did something they never actually did. These manipulations can be used to deceive or spread misinformation.'
    },
    {
      imgSrc: './assets/c2.jpg',
      title: 'What Does Our Platform Do',
      text: 'Our platform analyzes uploaded images and videos to detect signs of manipulation or forgery. Using advanced algorithms and machine learning models, we provide you with a detailed report indicating whether the media is genuine or altered.'
    },
    {
      imgSrc: './assets/c3.jpg',
      title: 'Why Deepfake Detection is Crucial',
      text: 'Deepfakes can spread misinformation and undermine trust in digital media. By using our detection tool, you help safeguard against fraudulent content and protect the integrity of information.'
    },
    {
      imgSrc: './assets/c4.jpg',
      title: 'Features You will Love',
      text: 'Fast and accurate analysis - User-friendly interface - Detailed reports - High security for your uploads - Continuous updates to tackle new deepfake technologies.'
    },
    {
      imgSrc: './assets/c1.jpg',
      title: 'Try It Now',
      text: 'Ready to verify your media? Upload your image or video today and see if it’s authentic or manipulated. Join the fight against misinformation and stay informed.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentI(prevIndex => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const showSlide = (index) => {
    setCurrentI(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-images" style={{ transform: `translateX(-${currentI* 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide.imgSrc} alt={`Slide ${index + 1}`} className="carousel-image" />
            <div className="carousel-content">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={() => setCurrentI((currentI- 1 + slides.length) % slides.length)}>&lt;</button>
      <button className="carousel-button next" onClick={() => setCurrentI((currentI + 1) % slides.length)}>&gt;</button>
      <div className="carousel-dots">
        {slides.map((_, index) => (
          <span key={index} className={`dot ${currentI === index ? 'active' : ''}`}></span>
        ))}
      </div>
    </div>
    
  );
};

export default Carousel;
