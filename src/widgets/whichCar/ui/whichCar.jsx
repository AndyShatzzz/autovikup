import React from "react";
import styles from "./whichCar.module.scss";
// import Image from "next/image";
// import whcar1 from "../image/whcar1.webp";
// import whcar2 from "../image/whcar2.webp";
// import whcar3 from "../image/whcar3.webp";
// import whcar4 from "../image/whcar4.webp";

export const WhichCar = () => {
  return (
    <section className={styles.container} data-image-index={1}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Какие авто мы выкупаем?</h2>
      </div>
      {/* <div className={styles.contentContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem}>
            <Image className={styles.image} src={whcar1} alt="Автомобиль" />
            <h3 className={styles.subtitle}>С пробегом или новые</h3>
            <p className={styles.text}>
              Быстрый выкуп автомобилей с пробегом и без. Гарантия срочного
              выкупа авто в день обращения
            </p>
          </div>
          <div className={styles.gridItem}>
            <Image className={styles.image} src={whcar2} alt="Автомобиль" />
            <h3 className={styles.subtitle}>В кредите или залоге</h3>
            <p className={styles.text}>
              Срочный выкуп кредитных и залоговых автомобилей с ПТС и без в день
              обращения
            </p>
          </div>
          <div className={styles.gridItem}>
            <Image className={styles.image} src={whcar3} alt="Автомобиль" />
            <h3 className={styles.subtitle}>После ДТП или битые</h3>
            <p className={styles.text}>
              Выкуп автомобилей после аварии в любом состоянии. Гарантируем
              срочный выкуп в день обращения по лучшей цене
            </p>
          </div>
          <div className={styles.gridItem}>
            <Image className={styles.image} src={whcar4} alt="Автомобиль" />
            <h3 className={styles.subtitle}>С другими проблемами</h3>
            <p className={styles.text}>
              Выкупим автомобиль с запретом на регистрационные действия или
              другими ограничениями. Даем гарантию выкупа в день обращения
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};
