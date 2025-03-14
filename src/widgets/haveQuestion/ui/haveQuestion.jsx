"use client";
import React, { useState } from "react";
import styles from "./haveQuestion.module.scss";
import Image from "next/image";
import questionImg1 from "../images/questionImg1.webp";
import { FeedBackPopup } from "@/widgets/feedBackPopup/ui/feedBackPopup";

export const HaveQuestion = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <section className={styles.questionContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.imageWrapper}>
          <Image className={styles.image} src={questionImg1} alt="Картинка" />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Остались вопросы? Проконсультируем!</h2>
          <p className={styles.text}>
            Расскажем об условиях продажи, необходимых документах, критериях
            оценки и других тонкостях
          </p>
          <button
            onClick={() => setIsOpenModal(true)}
            className={styles.button}
          >
            Получить консультацию
          </button>
        </div>
      </div>
      {isOpenModal && (
        <FeedBackPopup
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </section>
  );
};
