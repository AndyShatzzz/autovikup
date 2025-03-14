"use client";
import React, { useEffect, useRef } from "react";
import styles from "./feedBackPopup.module.scss";
import FeedBack from "@/entities/feedBack/ui/feedBack";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const FeedBackPopup = ({ isOpenModal, setIsOpenModal }) => {
  const popupRef = useRef();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setIsOpenModal(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [setIsOpenModal]);

  return (
    <section className={styles.wrapperAbsolute}>
      <div className={styles.feedBackContainer} ref={popupRef}>
        <IconButton
          sx={{ width: "40px", height: "40px" }}
          className={styles.buttonClose}
          onClick={() => setIsOpenModal(false)}
        >
          <CloseIcon sx={{ width: "40px", height: "40px", color: "#FFF" }} />
        </IconButton>
        <FeedBack isOpenModal={isOpenModal} />
      </div>
    </section>
  );
};
