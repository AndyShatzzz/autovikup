import React from "react";
import styles from "./whichCarContent.module.scss";
import Image from "next/image";
import whcar1 from "../image/whcar1.webp";
import whcar2 from "../image/whcar2.webp";
import whcar3 from "../image/whcar3.webp";
import whcar4 from "../image/whcar4.webp";
import whcar5 from "../image/whcar5.webp";
import whcar6 from "../image/whcar6.webp";

export const WhichCarContent = () => {
  const arrData = [
    {
      image: whcar6,
      subtitle: "Автомобили эконом класса",
      text: "Выкуп автомобилей эконом класса в день обращения, предложим больше, чем другие",
    },
    {
      image: whcar5,
      subtitle: "Отечественные автомобили",
      text: "Выкупим Ваш автомобиль отечественного производства любого года выпуска, в любом состоянии",
    },
    {
      image: whcar1,
      subtitle: "С пробегом или новые",
      text: "Быстрый выкуп автомобилей с пробегом и без. Гарантия срочного выкупа авто в день обращения",
    },
    {
      image: whcar2,
      subtitle: "В кредите или залоге",
      text: "Срочный выкуп кредитных и залоговых автомобилей с ПТС и без в день обращения",
    },
    {
      image: whcar3,
      subtitle: "После ДТП или битые",
      text: "Выкуп автомобилей после аварии в любом состоянии. Гарантируем срочный выкуп в день обращения по лучшей цене",
    },
    {
      image: whcar4,
      subtitle: "С другими проблемами",
      text: "Выкупим автомобиль с запретом на регистрационные действия или другими ограничениями. Даем гарантию выкупа в день обращения",
    },
  ];
  return (
    <section className={styles.contentContainer}>
      <div className={styles.gridContainer}>
        {arrData.map((item, i) => (
          <div className={styles.gridItem} key={i}>
            <Image className={styles.image} src={item.image} alt="Автомобиль" />
            <h3 className={styles.subtitle}>{item.subtitle}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
