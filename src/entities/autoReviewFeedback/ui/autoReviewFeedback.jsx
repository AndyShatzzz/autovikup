"use client";
import React, { useState } from "react";
import styles from "./autoReviewFeedback.module.scss";
import {
  Box,
  Button,
  Snackbar,
  TextField,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";

export const AutoReviewFeedback = () => {
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

  const sendTelegramBot = async (automobile, feedback, image) => {
    const formData = new FormData();
    formData.append("automobile", automobile);
    formData.append("feedback", feedback);
    if (image) {
      formData.append("image", image);
    }

    const res = await fetch("/api/sendFeedback", {
      method: "POST",
      body: formData,
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

  async function onSubmit(data) {
    const { automobile, feedback, image } = data;
    await sendTelegramBot(automobile, feedback, image);
    await setIsSuccessPost(true);
  }

  return (
    <>
      <section id="carFeedback" className={styles.container}>
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
              inputProps={{ accept: "image/*" }}
              onChange={(e) => {
                const file = e.target.files[0];
                form.setValue("image", file);
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
              {isSubmitting ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                "Оставить отзыв"
              )}
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
