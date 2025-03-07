import React from "react";
import styles from "./WhatCarBuy.module.scss";
import { CarBuyCarousel } from "@/widgets/carBuyCarousel/ui/carBuyCarousel/carBuyCarousel";
import img1 from "@/shared/images/bg1.webp";
import img2 from "@/shared/images/bg2.webp";
import img3 from "@/shared/images/bg3.webp";
import img4 from "@/shared/images/bg4.webp";

export const WhatCarBuy = () => {
  const arrData = [
    {
      img: img1,
      subtitle1: "BMW M5 Competition",
      subtitle2: "4.4л (625лс.) АТ",
      price: "5 000 000",
      text: "Продала автомобиль через сервис Авто Выкуп 48, мою машину оценили быстро и рассмотрели даже после аварии. Все документы оформила компания, я ничего не делала, только подписала бланки и получила деньги, все быстро и профессионально, я довольна.",
    },
    {
      img: img2,
      subtitle1: "BMW M3",
      subtitle2: "3.0л (460лс.) АТ",
      price: "3 000 000",
      text: "Продала автомобиль через сервис Авто Выкуп 48, мою машину оценили быстро и рассмотрели даже после аварии. Все документы оформила компания, я ничего не делала, только подписала бланки и получила деньги, все быстро и профессионально, я довольна.",
    },
    {
      img: img3,
      subtitle1: "Nissan GTR R35",
      subtitle2: "3.8л (580лс.) РКП",
      price: "1 500 000",
      text: "Продала автомобиль через сервис Авто Выкуп 48, мою машину оценили быстро и рассмотрели даже после аварии. Все документы оформила компания, я ничего не делала, только подписала бланки и получила деньги, все быстро и профессионально, я довольна.",
    },
    {
      img: img4,
      subtitle1: "Mercedes AMG GT",
      subtitle2: "4.0л (600лс.) РКП",
      price: "6 500 000",
      text: "Продала автомобиль через сервис Авто Выкуп 48, мою машину оценили быстро и рассмотрели даже после аварии. Все документы оформила компания, я ничего не делала, только подписала бланки и получила деньги, все быстро и профессионально, я довольна.",
    },
  ];

  return (
    <section className={styles.container} data-image-index={3}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Примеры выкупленных автомобилей</h2>
      </div>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselWrapper}>
          <CarBuyCarousel slides={arrData} />
        </div>
      </div>
    </section>
  );
};
