import React from "react";
import styles from "./WhatCarBuy.module.scss";
import { CarBuyCarousel } from "@/widgets/carBuyCarousel/ui/carBuyCarousel/carBuyCarousel";
import car1 from "../images/car1.webp";
import car2 from "../images/car2.webp";
import car3 from "../images/car3.webp";
import car4 from "../images/car4.webp";
import car5 from "../images/car5.webp";
import car6 from "../images/car6.webp";
import car7 from "../images/car7.webp";

export const WhatCarBuy = () => {
  const arrData = [
    {
      img: car1,
      subtitle1: "Mercedes CLA",
      subtitle2: "2013г 1.6л (156лс.) AMT",
      text: "Нужно было продать машину срочно. Сами же знаете как страшно связываться неизвестно с кем и что будет. Настроился на защитный манер, а тут все тактично. Оценили и объяснили почему такая стоимость - согласился, ведь оценка устроила и документы все оформили, и деньги сразу. Никаких проблем. Доволен так то.",
    },
    {
      img: car2,
      subtitle1: "Hyundai Solaris",
      subtitle2: "2017г 1.6л (123с.) АТ",
      text: "Приятные сотрудники. Выкупили машину на 40 тысяч дороже, чем мне предлагали другие. Договор официальный, всё с этим хорошо, сняли с учета в день сделки. Приятно, когда всё получается по уму!",
    },
    {
      img: car3,
      subtitle1: "Renault Sandero",
      subtitle2: "2010г 1.6л (102лс.) МКПП",
      text: "Очень доволен их работой. Сотрудник для оценки приехал быстро, был очень вежливый и скрупулезный, смотрел очень внимательно, но самое главное, цену назначил адекватную. Это было очень приятно. С оформлением документов тоже никаких проблем не было. Сэкономили мне кучу нервов и сил, спасибо.",
    },
    {
      img: car4,
      subtitle1: "Mercedes AMG GT",
      subtitle2: "4.0л (600лс.) РКП",
      text: "Продала автомобиль через сервис Авто Выкуп 48, мою машину оценили быстро и рассмотрели даже после аварии. Все документы оформила компания, я ничего не делала, только подписала бланки и получила деньги, все быстро и профессионально, я довольна.",
    },
    {
      img: car5,
      subtitle1: "Mercedes AMG GT",
      subtitle2: "4.0л (600лс.) РКП",
      text: "Продала автомобиль через сервис Авто Выкуп 48, мою машину оценили быстро и рассмотрели даже после аварии. Все документы оформила компания, я ничего не делала, только подписала бланки и получила деньги, все быстро и профессионально, я довольна.",
    },
    {
      img: car6,
      subtitle1: "Mercedes AMG GT",
      subtitle2: "4.0л (600лс.) РКП",
      text: "Продала автомобиль через сервис Авто Выкуп 48, мою машину оценили быстро и рассмотрели даже после аварии. Все документы оформила компания, я ничего не делала, только подписала бланки и получила деньги, все быстро и профессионально, я довольна.",
    },
    {
      img: car7,
      subtitle1: "Mercedes AMG GT",
      subtitle2: "4.0л (600лс.) РКП",
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
