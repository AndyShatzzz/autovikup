"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./bgWrapper.module.scss";

export const BgWrapper = ({ children, images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [opacity, setOpacity] = useState(1);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
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

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [images]);

  const enhancedChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      ref: (el) => (sectionsRef.current[index] = el),
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image
          className={styles.image}
          src={currentImage}
          alt="Background"
          quality={100}
          style={{ opacity: opacity, transition: "opacity 0.3s linear" }}
        />
        {/* Градиентный слой для затемнения */}
        <div
          className={styles.overlay}
          style={{
            background: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5) 20%, rgba(0, 0, 0, 1))`,
          }}
        />
      </div>
      {enhancedChildren}
    </div>
  );
};
