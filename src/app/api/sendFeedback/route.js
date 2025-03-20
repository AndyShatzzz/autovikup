import { NextResponse } from "next/server";
import TelegramBot from "node-telegram-bot-api";
import FormData from "form-data";
import fetch from "node-fetch";

const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

const bot = new TelegramBot(botToken, { polling: false });

export async function POST(request) {
  try {
    const formData = await request.formData();
    const automobile = formData.get("automobile");
    const feedback = formData.get("feedback");
    const image = formData.get("image");

    const text = `----------------------------------------\n 🤌 Опубликован новый отзыв\n \n 👤 Имя и Модель авто: ${automobile}\n \n ✉️ Отзыв: ${feedback}`;

    await bot.sendMessage(chatId, text);

    if (image) {
      const imageBuffer = Buffer.from(await image.arrayBuffer());
      const form = new FormData();
      form.append("chat_id", chatId);
      form.append("photo", imageBuffer, { filename: image.name });

      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendPhoto`,
        {
          method: "POST",
          body: form,
          headers: form.getHeaders(),
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка при отправке изображения в Telegram");
      }
    }

    return NextResponse.json(
      { message: "Сообщение и изображение отправлены" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Ошибка при отправке сообщения" },
      { status: 500 }
    );
  }
}
