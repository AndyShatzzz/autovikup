import React from "react";
import styles from "./mainInfo.module.scss";
import FeedBack from "@/entities/feedBack/ui/feedBack";
import { FeedBackMobileButton } from "@/features/feedBackMobileButton/ui/feedBackMobileButton";

export const MainInfo = () => {
  return (
    <section className={styles.container} data-image-index={0}>
      <div className={styles.visuallyHidden} itemProp="description">
        <h2>
          Автовыкуп 48 — срочный выкуп автомобилей в Липецке и Липецкой области
        </h2>
        <h2>Выкуп авто в Липецке — бесплатная оценка за 10 минут</h2>
        <h2>Авто выкуп Липецк — деньги сразу наличными или на карту</h2>
        <h2>
          Выкуп авто Липецк — выкупаем любые автомобили в Липецке и Липецкой
          области
        </h2>
        <h2>
          Срочный выкуп авто 48 регион — выкуп автомобилей с юридическими
          проблемами в Липецке и Липецкой области
        </h2>
        <p>
          Профессиональный выкуп авто любой марки и состояния: битые, кредитные,
          после ДТП, с юридическими проблемами. Работаем по всему Черноземью:
          Липецк, Елец, Грязи, Данков.
        </p>
        <ul>
          <li>Выкуп авто Липецк — до 95% рыночной стоимости</li>
          <li>Автовыкуп Липецк — бесплатная оценка за 10 минут</li>
          <li>Выкуп авто в Липецкой области — выезд специалиста</li>
          <li>Срочный выкуп 48 регион — деньги сразу наличными</li>
        </ul>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Срочный выкуп автомобилей в Липецке и Липецкой области
            <span className={styles.colorRed}> за 1 час!</span>
            <span className={styles.title}>
              {" "}
              Работаем по всему{" "}
              <span className={styles.colorRed}>Черноземью!</span>
            </span>
          </h1>
          <p className={styles.subtitle}>
            Выкупаем автомобили{" "}
            <span className={styles.colorRed}>
              любого состояния, а так же с юридическими проблемами
            </span>
          </p>

          <p className={styles.subtitle}>
            Удаленно оценим и выкупим Вашу машину за{" "}
            <span className={styles.colorRed}> 10 минут</span>
          </p>
          <p className={styles.subtitle}>
            Цена выше рынка —
            <span className={styles.colorRed}>
              {" "}
              честный расчет без скрытых вычетов
            </span>
          </p>
          <p className={styles.subtitle}>
            Юридический сопровождение —{" "}
            <span className={styles.colorRed}>
              {" "}
              снятие авто с учета в день сделки, подготовка документов для
              выкупа авто
            </span>
          </p>
          <p className={styles.subtitle}>
            Рекомендуйте нас друзьям и зарабатывайте
            <span className={styles.colorRed}> от 10 000 рублей </span>
            на свою карту за каждую успешную сделку
          </p>
          <p className={styles.subtitle}>
            Эвакуатор при необходимости —{" "}
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
