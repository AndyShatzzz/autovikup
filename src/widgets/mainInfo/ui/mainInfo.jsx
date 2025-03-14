"use client";
import React, { useState } from "react";
import styles from "./mainInfo.module.scss";
import FeedBack from "@/entities/feedBack/ui/feedBack";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import { SpeedDial } from "@mui/material";
import { FeedBackPopup } from "@/widgets/feedBackPopup/ui/feedBackPopup";

export const MainInfo = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <section className={styles.container} data-image-index={0}>
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
          <button
            onClick={() => setIsOpenModal(true)}
            className={styles.feedBackButton}
          >
            Оставить заявку
          </button>
        </div>
        <div className={styles.feedBackContainer}>
          <FeedBack />
        </div>
      </div>
      <SpeedDial
        className={styles.speedDeal}
        ariaLabel="social-media"
        sx={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
        }}
        title="Заказать звонок"
        icon={<PhoneForwardedIcon />}
        onClick={() => setIsOpenModal(true)}
      ></SpeedDial>
      {isOpenModal && (
        <FeedBackPopup
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </section>
  );
};
