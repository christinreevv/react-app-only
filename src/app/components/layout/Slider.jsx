import '../../assets/styles/main.scss';
import React, { useState } from 'react';
import '../../assets/styles/CircleDots.css'; // Подключение стилей

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Текущий слайд
  const totalSlides = 6; // Всего блоков
  const slidesToShow = 4; // Сколько блоков показывать одновременно

  // Массив блоков с данными
  const slides = [
    { year: 1987, text: 'Блаблабла 1987' },
    { year: 1988, text: 'Блаблабла 1988' },
    { year: 1989, text: 'Блаблабла 1989' },
    { year: 1990, text: 'Блаблабла 1990' },
    { year: 1991, text: 'Блаблабла 1991' },
    { year: 1992, text: 'Блаблабла 1992' },
  ];

  // Обработчик нажатия на стрелки
  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Вычисляем видимые слайды
  const visibleSlides = slides.slice(currentSlide, currentSlide + slidesToShow).concat(
    currentSlide + slidesToShow > totalSlides
      ? slides.slice(0, (currentSlide + slidesToShow) % totalSlides)
      : []
  );

  return (
    <div className="slider-container" style={{ position: 'relative' }}>
      {/* Стрелки для навигации */}
      <div className="slider-arrows" style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
        <button onClick={handlePrev} className="arrow prev">←</button>
        <button onClick={handleNext} className="arrow next">→</button>
      </div>

      <div className="slider" style={{ display: 'flex', overflow: 'hidden' }}>
        {visibleSlides.map((slide, index) => (
          <div key={index} className="slider-item" style={{ flex: '1 0 25%', padding: '10px', boxSizing: 'border-box' }}>
            <div className="slider-year" style={{ color: index === 0 ? '#ff5733' : '#000', fontSize: '24px' }}>
              {slide.year}
            </div>
            <div className="slider-text">{slide.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};





<div className="text-slider" style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden', width: '100%', position: 'relative' }}>
  {currentTextSlide > 0 && (  // Отображаем стрелку влево, если есть предыдущий слайд
    <button onClick={() => handleTextSlideChange(-1)} className="arrow prev" style={{ position: 'absolute', left: '10px', zIndex: 1 }}></button>
  )}

  <div style={{ display: 'flex', transform: `translateX(-${currentTextSlide * (100 / slidesToShow)}%)`, transition: 'transform 0.5s ease-in-out', width: `${(currentTextSlides.length * (100 / slidesToShow))}%` }}>
    {currentTextSlides.map((slide, index) => (
      <div key={index} className="slider-item" style={{ flex: '1 0 33.33%', padding: '10px', boxSizing: 'border-box' }}>
        <div className="slider-year" style={{ fontSize: '24px' }}>
          {slide.year}
        </div>
        <div className="slider-text">{slide.text}</div>
      </div>
    ))}
  </div>

  {currentTextSlide < currentTextSlides.length - 1 && (  // Отображаем стрелку вправо, если есть следующий слайд
    <button onClick={() => handleTextSlideChange(1)} className="arrow next" style={{ position: 'absolute', right: '10px', zIndex: 1 }}>▶</button>
  )}
</div>




export default Slider;
