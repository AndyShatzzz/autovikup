"use client";
import React, { useState } from "react";
import styles from "./autoReviewFeedback.module.scss";
import { Box, Button, Snackbar, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import bg1 from "@/shared/images/bg1.webp";
import Image from "next/image";

export const AutoReviewFeedback = ({ isOpenModal }) => {
  const [postMessage, setPostMessage] = useState();
  const [isSuccessPost, setIsSuccessPost] = useState(false);

  const form = useForm({
    defaultValues: {
      automobile: "",
      feedback: "",
      image: null,
    },
    mode: "onChange",
  });

  const { register, formState, handleSubmit } = form;
  const { errors, isSubmitting, isDirty, isValid } = formState;

  // const sendTelegramBot = async (automobile, feedback, image) => {
  //   const res = await fetch("/api/sendFeedback", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       automobile,
  //       feedback,
  //       image,
  //     }),
  //   });

  //   const result = await res.json();
  //   if (res.ok) {
  //     setPostMessage(
  //       "Спасибо большое за отзыв, Ваше мнение очень важно для нас!"
  //     );
  //   } else {
  //     setPostMessage("Ошибка при отправке сообщения. Попробуйте еще раз!");
  //   }
  // };

  const sendTelegramBot = async (automobile, feedback, image) => {
    const formData = new FormData();
    formData.append("automobile", automobile);
    formData.append("feedback", feedback);
    if (image) {
      formData.append("image", image); // Добавляем файл в FormData
    }

    const res = await fetch("/api/sendFeedback", {
      method: "POST",
      body: formData, // Используем FormData вместо JSON
    });

    const result = await res.json();
    if (res.ok) {
      setPostMessage(
        "Спасибо большое за отзыв, Ваше мнение очень важно для нас!"
      );
    } else {
      setPostMessage("Ошибка при отправке сообщения. Попробуйте еще раз!");
    }
  };

  const onSubmit = (data) => {
    const { automobile, feedback, image } = data;
    sendTelegramBot(automobile, feedback, image);
    setIsSuccessPost(true);
  };

  return (
    <>
      <section className={styles.container}>
        <div className={styles.formContainer}>
          <Box
            className={styles.form}
            component="form"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className={styles.title}>Работали с нами? Оставьте отзыв!</h2>
            <TextField
              label="Имя, марка авто, год выпуска"
              className={styles.input}
              fullWidth
              placeholder="Напишите Имя, марку и год выпуска автомобиля"
              {...register("automobile", {
                required: {
                  value: true,
                  message: "Данное поле является обязательным",
                },
                // pattern: {
                //   value: /^[a-zA-Zа-яА-ЯЁё0-9\s-.,]+$/,
                //   message:
                //     "Данное поле должно быть вида: Сергей, Kia Rio 2012, разделители допускаются: ',' или '.' ",
                // },
                minLength: {
                  value: 10,
                  message: "Минимум - 10 символов",
                },
              })}
              helperText={errors.automobile?.message}
              FormHelperTextProps={{
                style: {
                  color: "red",
                },
              }}
            />
            <TextField
              label="Отзыв"
              className={styles.input}
              fullWidth
              multiline
              rows={3}
              placeholder="Напишите ваш отзыв здесь..."
              {...register("feedback", {
                required: {
                  value: true,
                  message: "Данное поле является обязательным",
                },
                // pattern: {
                //   value: /^[a-zA-Zа-яА-ЯЁё0-9\s-.,]+$/,
                //   message:
                //     "Допускается кирилица, латиница, цифры и ',' или '.' ",
                // },
                minLength: {
                  value: 20,
                  message: "Минимум - 20 символов",
                },
              })}
              helperText={errors.feedback?.message}
              FormHelperTextProps={{
                style: {
                  color: "red",
                },
              }}
            />
            <TextField
              type="file"
              className={styles.input}
              // fullWidth
              inputProps={{ accept: "image/*" }} // Разрешаем загрузку только изображений
              onChange={(e) => {
                const file = e.target.files[0];
                form.setValue("image", file); // Сохраняем файл в форме
              }}
              FormHelperTextProps={{
                style: {
                  color: "red",
                },
              }}
            />
            <Button
              className={styles.buttonSubmit}
              type="submit"
              variant="contained"
              disabled={isSubmitting || !isDirty || !isValid}
            >
              Оставить отзыв
            </Button>
          </Box>
        </div>
      </section>
      {postMessage && (
        <Snackbar
          message={postMessage}
          autoHideDuration={2000}
          open={isSuccessPost}
          onClose={() => setIsSuccessPost((state) => !state)}
        />
      )}
    </>
  );
};
