import React from "react";
import styles from "./carPriceMessenger.module.scss";

export const CarPriceMessenger = () => {
  return (
    <section id="carPrice" className={styles.container} data-image-index={2}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          Проведем оценку Вашего автомобиля в мессенджерах
        </h2>
      </div>
    </section>
  );
};
