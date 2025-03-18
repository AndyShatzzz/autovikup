"use client";
import React, { useState } from "react";
import styles from "./feedBackMobileButton.module.scss";
import { FeedBackPopup } from "@/widgets/feedBackPopup/ui/feedBackPopup";

export const FeedBackMobileButton = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpenModal(true)}
        className={styles.feedBackButton}
      >
        Оставить заявку
      </button>
      {isOpenModal && (
        <FeedBackPopup
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      )}
    </>
  );
};
