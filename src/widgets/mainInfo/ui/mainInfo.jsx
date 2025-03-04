import Image from "next/image";
import React from "react";
import styles from "./mainInfo.module.scss";
import FeedBack from "@/entities/feedBack/ui/feedBack";

export const MainInfo = () => {
  return (
    <section className={styles.container} data-image-index={0}>
      {/* <div className={styles.imgContainer}>
        <Image className={styles.img} src={img1} alt="Автомобиль" />
      </div> */}
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Выкупим Ваш автомобиль в день заявки{" "}
            <span className={styles.colorRed}>за 1 час</span>
          </h1>
          <p className={styles.subtitle}>
            Удаленно оценим Вашу машину за 10 минут и предложим{" "}
            <span className={styles.colorRed}>лучшую</span> цену
          </p>
          <p className={styles.subtitle}>
            Выезд специалиста и оценка вашего авто -{" "}
            <span className={styles.colorRed}>0 руб</span>
          </p>
          <p className={styles.subtitle}>
            Эвакуатор при необходимости -{" "}
            <span className={styles.colorRed}>за счёт компании</span>
          </p>
        </div>
        <div className={styles.feedBackContainer}>
          <FeedBack />
        </div>
      </div>
    </section>
  );
};
