"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./bgWrapper.module.scss";

export const BgWrapper = ({ children, images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]); // По умолчанию первая картинка
  const [opacity, setOpacity] = useState(1); // По умолчанию фон видим
  const sectionsRef = useRef([]); // Рефы для отслеживаемых блоков

  useEffect(() => {
    const observerOptions = {
      root: null, // Используем viewport как область наблюдения
      rootMargin: "0px",
      threshold: 0.2, // Срабатывает, когда 30% элемента в зоне видимости
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Получаем индекс картинки из атрибута data-image-index
          const imageIndex = entry.target.getAttribute("data-image-index");
          if (imageIndex !== null) {
            setCurrentImage(images[imageIndex]); // Устанавливаем соответствующее изображение
            setOpacity(1); // Плавно показываем фон
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Наблюдаем за всеми блоками
    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Очистка при размонтировании
    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [images]);

  // Добавляем рефы к дочерним элементам
  const enhancedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      ref: (el) => (sectionsRef.current[index] = el), // Привязываем реф к каждому блоку
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image
          src={currentImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          style={{ opacity: opacity, transition: "opacity 0.3s linear" }} // Анимация появления фона
        />
        {/* Градиентный слой для затемнения */}
        <div
          className={styles.overlay}
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 1))`,
          }}
        />
      </div>
      {enhancedChildren}
    </div>
  );
};
