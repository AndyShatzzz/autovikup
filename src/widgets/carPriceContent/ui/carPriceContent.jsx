import React from "react";
import styles from "./carPriceContent.module.scss";
import Image from "next/image";
import chat1 from "../images/chat1.webp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

export const CarPriceContent = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.contentContainer}>
          <div className={styles.subtitleContainer}>
            <h3 className={styles.subtitle}>
              Быстро оценим Ваш автомобиль в мессенджерах за 10 минут
            </h3>
          </div>
          <div className={styles.subtitleContainer}>
            <h3 className={styles.subtitle}>Отправляйте фото в мессенджеры</h3>
          </div>
          <div className={styles.subtitleContainer}>
            <h3 className={styles.subtitle}>
              Если цена Вас устраивает, договариваемся о месте и времени встречи
            </h3>
          </div>
          <div className={styles.socialContainer}>
            <a
              className={styles.whatsApp}
              href="https://wa.me/79205206969"
              target="blank"
            >
              <WhatsAppIcon className={styles.icon} />
              Whats App
            </a>
            <a
              className={styles.telegram}
              href="https://t.me/ilusha_tarasov"
              target="blank"
            >
              <TelegramIcon className={styles.icon} />
              Telegram
            </a>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <Image className={styles.img} src={chat1} alt="Картинка переписки" />
        </div>
      </div>
    </section>
  );
};
