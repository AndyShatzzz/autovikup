import { IconButton } from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export const AutoReviewFeedback = ({ isOpenModal, setIsOpenModal }) => {
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
        <FeedBack isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      </div>
    </section>
  );
};
