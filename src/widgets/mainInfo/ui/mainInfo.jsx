import React from "react";
import styles from "./mainInfo.module.scss";
import FeedBack from "@/entities/feedBack/ui/feedBack";
import { FeedBackMobileButton } from "@/features/feedBackMobileButton/ui/feedBackMobileButton";

export const MainInfo = () => {
  return (
    <section className={styles.container} data-image-index={0}>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Выкупим Ваш автомобиль в день заявки{" "}
            <span className={styles.colorRed}>за 1 час</span>
          </h1>
          <p className={styles.subtitle}>
            <span className={styles.colorRed}>Снимем авто с учета</span> в день
            сделки! Больше никаких штрафов или звонков от новых владельцев. Мы
            гарантируем{" "}
            <span className={styles.colorRed}>честную и прозрачную </span>
            сделку!
          </p>
          <p className={styles.subtitle}>
            Удаленно оценим Вашу машину за
            <span className={styles.colorRed}> 10 минут</span>
          </p>
          <p className={styles.subtitle}>
            Готовы предложить Вам
            <span className={styles.colorRed}> больше,</span> чем другие
          </p>
          <p className={styles.subtitle}>
            Работаем по всему
            <span className={styles.colorRed}> Черноземью</span>
          </p>
          <p className={styles.subtitle}>
            Рекомендуйте нас друзьям и зарабатывайте
            <span className={styles.colorRed}> от 10 000 рублей </span>
            на свою карту за каждую успешную сделку
          </p>
          <p className={styles.subtitle}>
            Эвакуатор при необходимости -{" "}
            <span className={styles.colorRed}>за счёт компании</span>
          </p>
          <FeedBackMobileButton />
        </div>
        <div className={styles.feedBackContainer}>
          <FeedBack />
        </div>
      </div>
    </section>
  );
};
