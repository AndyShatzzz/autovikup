"use client";

import { Box, TextField, Button, Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./feedBack.module.scss";
// import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";

export default function FeedBack() {
  const [postMessage, setPostMessage] = useState("");
  const [isSuccessPost, setIsSuccessPost] = useState(false);
  const ref = useRef();

  // useEffect(() => {
  //   const checkIfClickedOutside = (e) => {
  //     if (ref.current && !ref.current.contains(e.target)) {
  //       setIsOpenModal(false);
  //     }
  //   };
  //   document.addEventListener("click", checkIfClickedOutside);
  //   return () => {
  //     document.removeEventListener("click", checkIfClickedOutside);
  //   };
  // }, [setIsOpenModal]);

  const form = useForm({
    mode: "onChange",
  });
  const { register, formState } = form;
  const { errors, isSubmitting, isDirty, isValid } = formState;

  // function sendEmail(e) {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_pibp90b",
  //       "template_0rq9l6m",
  //       e.target || "",
  //       "EtuIb7Ig5UkGSVB_B"
  //     )
  //     .then(
  //       () => {
  //         form.reset();
  //         setPostMessage(
  //           "Контактные данные успешно отправлены, наш специалист в ближайшее время свяжется с Вами"
  //         );
  //         setIsSuccessPost(true);
  //         setTimeout(() => {
  //           setIsOpenModal(false);
  //         }, 2000);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // }

  return (
    <>
      {/* <div className={styles.wrapperAbsolute}></div> */}
      <div className={styles.modal} ref={ref}>
        <Box
          className={styles.formContainer}
          component="form"
          method="POST"
          // onSubmit={sendEmail}
          bgcolor="background.paper"
        >
          <h2 className={styles.title}>Бесплатно оценим Ваш автомобиль!</h2>
          <p className={styles.subtitle}>
            Заполните короткую форму и мы свяжемся с Вами в течение 10 минут
          </p>
          <p className={styles.subtitle}>
            Или Вы можете позвонить нам:{" "}
            <a className={styles.linkPhone} href="tel:+79205206969">
              +7(920) 520-69-69
            </a>
          </p>
          <TextField
            className={styles.textInput}
            fullWidth
            label="Марка автомобиля, год выпуска"
            {...register("carModel", {
              required: {
                value: true,
                message: "Данное поле является обязательным",
              },
              pattern: {
                value: /[a-zA-Zа-яА-ЯЁё -]+$/,
                message:
                  "Имя может содержать только латиницу, кириллицу, пробел и дефис",
              },
            })}
            inputProps={{
              style: {
                height: "20px",
              },
            }}
            helperText={errors.fromName?.message}
          />
          <TextField
            className={styles.textInput}
            label="Номер телефона"
            fullWidth
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "Данное поле является обязательным",
              },
              pattern: {
                value: /^7\d{10}$/,
                message:
                  "Поле номер телефона должен начинаться с 7 и содержать 11 цифр",
              },
            })}
            inputProps={{
              style: {
                height: "20px",
              },
            }}
            helperText={errors.phoneNumber?.message}
          />

          <Button
            className={styles.textInput}
            type="submit"
            variant="contained"
            disabled={isSubmitting || !isDirty || !isValid}
            fullWidth
          >
            Заказать звонок
          </Button>
          <p className={styles.personalData}>
            Нажимая {`"Заказать звонок"`}, вы принимаете
            <a
              target="blank"
              className={styles.personalDataLink}
              href="https://tahoguru.ru/personal-data-agreament-tahoguru.pdf"
            >
              {` Условия обработки персональных данных`}
            </a>
          </p>
        </Box>
        <Snackbar
          message={postMessage}
          autoHideDuration={2000}
          open={isSuccessPost}
          onClose={() => setIsSuccessPost((state) => !state)}
        />
      </div>
    </>
  );
}
