import React, { useState } from 'react';
import gsap from 'gsap'; import '../../assets/styles/main.scss';
import '../../assets/styles/CircleDots.scss';

import { useEffect, useRef } from "react";

const CircleDots = () => {
  const [rotationAngle, setRotationAngle] = useState(0); // Текущий угол вращения круга
  const [year1, setYear1] = useState(1982); // Начальный год для первого спана
  const [year2, setYear2] = useState(1986); // Начальный год для второго спана
  const totalDots = 6; // Количество точек
  const radius = 250; // Радиус окружности
  const [currentSlide, setCurrentSlide] = useState(0); // Текущий слайд
  const totalSlides = 6; // Всего блоков
  const slidesToShow = 3; // Сколько блоков показывать одновременно
  const [currentTextSlide, setCurrentTextSlide] = useState(0); // Текущий текстовый слайд
  const words = ['Кино', 'Литература', 'Театр', 'Музыка', 'Живопись', 'Архитектура'];
  const [setIsDragging] = useState(false);

  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const [clickedDots, setClickedDots] = useState(Array(totalDots).fill(false)); // Отслеживание клика по точкам


  const [hoveredDot, setHoveredDot] = useState(null); // Стейт для точки при наведении



  const [activeDot, setActiveDot] = useState(null);




  const handleDotClick = (index, direction) => { 
    setActiveDot(index);  // Устанавливаем нажатую точку как активную
    handleSlideChange(index - currentSlide);  // Меняем слайд в зависимости от клика
    
    // Вычисления для поворота
    const newActiveDot = (activeDot + direction + totalDots) % totalDots;
    const angleDifference = (360 / totalDots) * direction;
    const newRotationAngle = rotationAngle - angleDifference;
    setActiveDot(newActiveDot);
    setRotationAngle(newRotationAngle);

    // Вычисление угла для поворота точки к правому верхнему углу
    const currentAngle = (index / totalDots) * 360;
    const rotationToTopRight = 300 - currentAngle;
    setRotationAngle(rotationToTopRight);
};

  const slides = [
    { year: 1982, text: 'Компания Philips представила первый в мире коммерческий компакт-диск (CD)' },
    { year: 1983, text: 'Интернет перешел на протокол TCP/IP. Этот момент считается официальным "рождением" современного интернета' },
    { year: 1984, text: 'Катастрофа на химическом заводе в Бхопале, Индия, вызванная утечкой метилизоцианата' },
    { year: 1985, text: 'Состоялся благотворительный концерт "Live Aid", прошедший одновременно в Лондоне и Филадельфии' },
    { year: 1986, text: 'Авария на Чернобыльской АЭС, одна из крупнейших техногенных катастроф в истории' }
  ];

  const slidesSecond = [
    { year: 1987, text: 'Компания Philips представила первый в мире коммерческий компакт-диск (CD)' },
    { year: 1988, text: 'Microsoft выпустила Windows 2.1, одну из ключевых версий своей операционной системы, которая стала основой для дальнейших разработок' },
    { year: 1989, text: 'падение Берлинской стены, символизировавшее конец разделения Германии и начало объединения Восточной и Западной Европы' },
    { year: 1990, text: 'Запущен космический телескоп "Хаббл", ставший важнейшим инструментом для наблюдения космоса' },
    { year: 1991, text: 'Распад Советского Союза, ознаменовавший окончание существования одного из крупнейших государств в мировой истории и завершение Холодной войны' },
    { year: 1992, text: 'Отправлено первое в мире текстовое сообщение (SMS)' }
  ];

  const slidesThird = [
    { year: 1992, text: 'Отправлено первое в мире текстовое сообщение (SMS)' },
    { year: 1993, text: 'Основание Всемирной сети (WWW) стало доступно для широкой публики, что дало толчок развитию интернета и глобального информационного обмена' },
    { year: 1994, text: 'Первый браузер Netscape Navigator стал доступен пользователям, что способствовало ускорению распространения интернета среди широкой аудитории' },
    { year: 1995, text: 'Microsoft выпустила операционную систему Windows 95, ставшую важнейшим событием в компьютерной индустрии и популяризировавшую графический интерфейс' },
    { year: 1996, text: 'Клонирование овцы Долли, первое успешное клонирование млекопитающего из взрослой клетки' },
    { year: 1997, text: 'В Японии был выпущен первый портативный цифровой ассистент (PDA) PalmPilot' }
  ];

  const slidesFourth = [
    { year: 1998, text: 'Запуск первого модуля Международной космической станции (МКС), который положил начало многолетнему проекту международного сотрудничества в космосе' },
    { year: 1999, text: 'Введение евро как единой валюты для 11 стран-членов Европейского Союза, что стало важным этапом экономической интеграции в Европе' },
    { year: 2000, text: 'Индекс NASDAQ достиг своего пика перед крахом доткомов, что стало символом разрыва пузыря интернет-компаний и массового спада на фондовом рынке' },
    { year: 2001, text: 'Террористические атаки на Всемирный торговый центр и Пентагон в США, ставшие переломным моментом в глобальной безопасности и началом "войны с террором' },
    { year: 2002, text: 'Банкноты и монеты евро вошли в обращение в странах Европейского Союза' },
    { year: 2003, text: 'Катастрофа космического шаттла "Колумбия" при входе в атмосферу, что привело к гибели всех семи членов экипажа' }
  ];

  const slidesFifth = [
    { year: 2004, text: 'Создание социальной сети Facebook Марком Цукербергом' },
    { year: 2005, text: 'Ураган "Катрина" обрушился на южное побережье США, вызвав массовые разрушения и наводнения в Новом Орлеане' },
    { year: 2006, text: 'Компания Google приобрела видеоплатформу YouTube за $1,65 млрд.' },
    { year: 2007, text: 'Apple выпустила первый iPhone, который революционизировал рынок мобильных устройств и изменил способы коммуникации' },
    { year: 2008, text: 'Крах банка Lehman Brothers, который стал отправной точкой мирового финансового кризиса' },
    { year: 2009, text: 'Создание первой транзакции с использованием криптовалюты Bitcoin' }
  ];

  const slidesSix = [
    { year: 2010, text: 'Землетрясение на Гаити, вызвавшее масштабные разрушения и гибель десятков тысяч людей' },
    { year: 2011, text: 'Землетрясение и цунами в Японии, которые привели к аварии на атомной станции "Фукусима-1' },
    { year: 2012, text: 'Успешная посадка марсохода "Кьюриосити" на Марс' },
    { year: 2013, text: 'Заключено временное соглашение между Ираном и странами "шестерки" по ядерной программе' },
    { year: 2014, text: 'Основана компания "Alibaba", ставшая крупнейшей в мире платформой для электронной коммерции' },
    { year: 2015, text: 'Зарегистрирована первая в истории гравитационная волна на детекторе LIGO' }
  ];
  const slidesSeven = [
    { year: 2016, text: 'Великобритания проголосовала за выход из Европейского Союза (Brexit), что стало важным политическим событием с далеко идущими последствиями для Европы' },
    { year: 2017, text: 'Запуск проекта "MeToo", который привлёк внимание к проблеме сексуальных домогательств и неравенства в обществе' },
    { year: 2018, text: 'В США прошли выборы, на которых рекордное количество женщин было избрано в Конгресс' },
    { year: 2019, text: 'Пожар в соборе Парижской Богоматери, который привёл к значительным повреждениям исторического памятника' },
    { year: 2020, text: 'Всемирная организация здравоохранения объявила пандемию COVID-19, вызванную новым коронавирусом' },
    { year: 2021, text: 'Космический аппарат "Персеверанс" успешно приземлился на Марсе' }
  ];

  const slidesArray = [slides, slidesSecond, slidesThird, slidesFourth, slidesFifth, slidesSix, slidesSeven];




  // Функция для получения угла конкретной точки
  const totalTextSlides = Math.ceil(slidesArray[currentSlide].length / slidesToShow); // Всего текстовых слайдов

  const handleSlideChange = (direction) => {

    const newActiveDot = (activeDot + direction + totalDots) % totalDots;

    const angleDifference = (360 / totalDots) * direction;
    const newRotationAngle = rotationAngle - angleDifference;
    setRotationAngle(newRotationAngle);

    gsap.to('.circle', {
      rotation: newRotationAngle,
      duration: 1,
      ease: 'power2.out',
      transformOrigin: 'center center',
    });


    const newIndex = (currentSlide + direction + slidesArray.length) % slidesArray.length;
    setCurrentSlide(newIndex);

    // Находим все слайды после изменения
    const slideElements = document.querySelectorAll('.slider-item');

    // Применяем замедленную анимацию для всех слайдов
    gsap.fromTo(slideElements,
      { opacity: 0 },    // Начальное состояние — прозрачные
      { opacity: 1, duration: 2 } // Конечное состояние — видимые, время анимации 2 секунды
    );

    const newSlide = (currentSlide + direction + totalSlides) % totalSlides;
    setCurrentSlide(newSlide);
    setCurrentTextSlide(0); // Сбрасываем текстовые слайды при смене слайда
    updateYears(newSlide);


  };

  const handleTextSlideChange = (direction) => {


    const newTextSlide = (currentTextSlide + direction + totalTextSlides) % totalTextSlides;
    setCurrentTextSlide(newTextSlide);

  };


  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - sliderRef.current.offsetLeft; // сохраняем начальную позицию
    scrollLeft.current = sliderRef.current.scrollLeft; // сохраняем текущее состояние прокрутки
    sliderRef.current.style.cursor = 'grabbing';
  };

  // Обработчик выхода мыши
  const handleMouseLeave = () => {
    isDragging.current = false;
    sliderRef.current.style.cursor = 'grab';
  };

  // Обработчик отпускания мыши
  const handleMouseUp = () => {
    isDragging.current = false;
    sliderRef.current.style.cursor = 'grab';
  };

  // Обработчик движения мыши
  const handleMouseMove = (e) => {
    if (!isDragging.current) return; // Если не перетаскиваем, ничего не делаем
    e.preventDefault(); // Отменяем стандартное поведение
    const x = e.pageX - sliderRef.current.offsetLeft; // Получаем положение мыши
    const walk = (x - startX.current) * 1; // Прокрутка
    sliderRef.current.scrollLeft = scrollLeft.current - walk; // Обновляем прокрутку
  };
  const updateYears = (slideIndex) => {
    const years = slidesArray[slideIndex].map(slide => slide.year);
    animateYears(years[0], years[years.length - 1]);
  };

  const animateYears = (targetYear1, targetYear2) => {
    gsap.to({ year: year1 }, {
      year: targetYear1,
      duration: 2,
      roundProps: 'year',
      onUpdate: function () {
        setYear1(Math.round(this.targets()[0].year));
      },
      ease: 'power2.out',
    });

    gsap.to({ year: year2 }, {
      year: targetYear2,
      duration: 2,
      roundProps: 'year',
      onUpdate: function () {
        setYear2(Math.round(this.targets()[0].year));
      },
      ease: 'power2.out',
    });
  };


  const currentTextSlides = slidesArray[currentSlide].slice(currentTextSlide * slidesToShow, (currentTextSlide + 1) * slidesToShow);

  return (
    <div className="content">
      <div className="main__objects">
        <p>
          <span className="year1">{year1}</span>{" "}
          <span className="year2">{year2}</span>
        </p>
      </div>
      <div className="circle-dots">
  <div className="circle">
    {Array.from({ length: totalDots }).map((_, index) => {
      const angle = (index / totalDots) * 360;
      const x = (radius * Math.cos((angle * Math.PI) / 180)).toFixed(2);
      const y = (radius * Math.sin((angle * Math.PI) / 180)).toFixed(2);

      return (
        <div
  key={index}
  className={`dot ${index === activeDot ? 'active' : ''}`}
  onClick={() => handleDotClick(index)}
  onMouseOver={() => setHoveredDot(index)}
  onMouseOut={() => setHoveredDot(null)}
  id="dot"
  style={{
    position: "absolute",
    borderRadius: "50%",
    left: `calc(51% + ${x}px - ${index === activeDot ? "15px" : "5px"})`,
    top: `calc(51% + ${y}px - ${index === activeDot ? "15px" : "5px"})`,
  }}
>
  {/* Отображаем номер точки */}
  <span
    className={`dot-number ${index === activeDot || index === hoveredDot ? 'visible' : ''}`}
    style={{
      transform: `rotate(-${rotationAngle}deg)`,
    }}
  >
    {index + 1}
  </span>

  {/* Отображаем категорию только при нажатии на точку */}
  {index === activeDot && (
    <span
      className="category-label visible" // Категория станет видимой после нажатия на точку
      style={{
        position: "absolute",
        left: "calc(100% + 10px)",  // Сдвигаем категорию вправо от точки
        top: "50%",  // Центрируем по вертикали относительно точки
        transform: "translateY(-50%)",
        background: "#fff",  // Фон категории
        padding: "2px 5px",  // Добавляем немного отступов
        borderRadius: "3px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2)",  // Тень для контраста
        whiteSpace: "nowrap",  // Чтобы текст не переносился
        color: 'black',
      }}
    >
      {words[index]}
    </span>
  )}
</div>



      );
    })}
  </div>
</div>
     <hr></hr>
 
      <div className="slider-container" style={{ textAlign: "left" }}>
        <div id='position' style={{ margin: "0 10px", fontSize: "18px" }}>
          {String(currentSlide + 1).padStart(2, "0")}/06
        </div>
        <div
          className="slider-arrows"
          style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}
        >
          <button
            onClick={() => handleSlideChange(-1)}
            className="arrow prev"
          ></button>
          <button
            onClick={() => handleSlideChange(1)}
            className="arrow next"
          ></button>
        </div>
        <div className="text-slider" style={{ display: 'flex', justifyContent: 'center', overflow: 'hidden', width: '100%', position: 'relative' }}>
          {currentTextSlide > 0 && (
            <button onClick={() => handleTextSlideChange(-1)} className="arrow prev" style={{
              position: "absolute",
              left: "10px",
              zIndex: 2,
              cursor: "pointer",
              opacity: 1
            }}></button>
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
            <button id="next" onClick={() => handleTextSlideChange(1)} className="arrow next" style={{
              position: "absolute",
              right: "10px",
              zIndex: 2,
              cursor: "pointer",
              opacity: 1,
            }}></button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CircleDots;