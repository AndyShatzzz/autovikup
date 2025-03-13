import React from "react";
import styles from "./whichCar.module.scss";

export const WhichCar = () => {
  return (
    <section id="whichCar" className={styles.container} data-image-index={1}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Какие авто мы выкупаем?</h2>
      </div>
    </section>
  );
};
