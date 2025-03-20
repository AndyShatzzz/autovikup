"use client";
import {
  Box,
  TextField,
  Button,
  Snackbar,
  CircularProgress,
} from "@mui/material";
import styles from "./feedBack.module.scss";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";

export default function FeedBack({ isOpenModal, setIsOpenModal }) {
  const [postMessage, setPostMessage] = useState();
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
    defaultValues: {
      carModel: "",
      phoneNumber: "+7",
    },
    mode: "onChange",
  });
  const { register, formState, handleSubmit } = form;
  const { errors, isSubmitting, isDirty, isValid } = formState;

  const sendTelegramBot = async (carModel, phoneNumber) => {
    const res = await fetch("/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        carModel,
        phoneNumber,
      }),
    });

    const result = await res.json();
    if (res.ok) {
      setPostMessage(
        "Сообщение отправлено. Наш менеджер свяжется с Вами в ближайшее время."
      );
    } else {
      setPostMessage("Ошибка при отправке сообщения. Попробуйте еще раз!");
    }
  };

  async function onSubmit(data) {
    const { carModel, phoneNumber } = data;
    await sendTelegramBot(carModel, phoneNumber);
    await setIsSuccessPost(true);
    if (isOpenModal) {
      await setTimeout(() => {
        setIsOpenModal(false);
      }, 2000);
    }
  }

  return (
    <>
      <div className={isOpenModal ? styles.modalPopup : styles.modal} ref={ref}>
        <Box
          className={styles.formContainer}
          component="form"
          method="POST"
          onSubmit={handleSubmit(onSubmit)}
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
                value: /^[a-zA-Zа-яА-ЯЁё0-9\s-.,]+$/,
                message:
                  "Данное поле должно быть вида Kia Rio 2012, разделители допускаются: ',' или '.' ",
              },
            })}
            inputProps={{
              style: {
                height: "20px",
              },
            }}
            helperText={errors.carModel?.message}
            FormHelperTextProps={{
              style: {
                color: "red",
                fontSize: "10px",
                letterSpacing: "-0.5px",
              },
            }}
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
                value: /^\+7\s?\d{3}\s?\d{3}\s?\d{2}\s?\d{2}$/,
                message:
                  "Поле номер телефона должен быть в формате +79001112233",
              },
            })}
            inputProps={{
              style: {
                height: "20px",
              },
            }}
            helperText={errors.phoneNumber?.message}
            FormHelperTextProps={{
              style: {
                color: "red",
                fontSize: "10px",
                letterSpacing: "-0.5px",
              },
            }}
          />

          <Button
            className={styles.textInput}
            type="submit"
            variant="contained"
            disabled={isSubmitting || !isDirty || !isValid}
            fullWidth
          >
            {isSubmitting ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Заказать звонок"
            )}
          </Button>
          <p className={styles.personalData}>
            Нажимая {`"Заказать звонок"`}, вы принимаете
            <a target="blank" className={styles.personalDataLink} href="#">
              {` Условия обработки персональных данных`}
            </a>
          </p>
        </Box>
        {postMessage && (
          <Snackbar
            message={postMessage}
            autoHideDuration={2000}
            open={isSuccessPost}
            onClose={() => setIsSuccessPost((state) => !state)}
          />
        )}
      </div>
    </>
  );
}
