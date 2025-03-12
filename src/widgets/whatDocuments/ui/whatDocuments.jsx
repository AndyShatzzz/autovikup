import React from "react";
import styles from "./whatDocuments.module.scss";
import Image from "next/image";
import wdCar1 from "../images/wdCar1.webp";
import wdCar2 from "../images/wdCar2.webp";
import wdCar3 from "../images/wdCar3.webp";
import wdCar4 from "../images/wdCar4.webp";

export const WhatDocuments = () => {
  const data = [
    {
      clName: "number1",
      image: wdCar1,
      number: "01",
      subtitle: "ПТС",
      text: "Паспорт транспортного средства выкупаемого автомобиля",
    },
    {
      clName: "number2",
      image: wdCar2,
      number: "02",
      subtitle: "СТС",
      text: "Свидетельство регистрации транспортного средства, которое хотите продать",
    },
    {
      clName: "number3",
      image: wdCar3,
      number: "03",
      subtitle: "Паспорт владельца",
      text: "Паспорт собстенника транспортного средства, на которого зарегистрирован автомобиль",
    },
    {
      clName: "number4",
      image: wdCar4,
      number: "04",
      subtitle: "Рассмотрим без документов",
      text: "Индивидуально рассмотрим случаи при отсутствии каких-либо документов и предложим лучший вариант",
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Документы для быстрого выкупа авто</h2>
      <div className={styles.gridContent}>
        {data.map((item, i) => (
          <div className={styles.gridItem} key={i}>
            <Image className={styles.image} src={item.image} alt="Картинка" />
            <div className={styles.overlay}></div>
            <p className={`${styles.number} ${styles[item.clName]}`}>
              {item.number}
            </p>
            <div className={styles.textContainer}>
              <h3 className={styles.subtitle}>{item.subtitle}</h3>
              <p className={styles.text}>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
