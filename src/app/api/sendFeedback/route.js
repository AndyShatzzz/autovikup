// import { NextResponse } from "next/server";
// import TelegramBot from "node-telegram-bot-api";

// const botToken = process.env.BOT_TOKEN;
// const chatId = process.env.CHAT_ID;

// const bot = new TelegramBot(botToken, { polling: false });

// export async function POST(request) {
//   try {
//     const { automobile, feedback, image } = await request.json();

//     const text = `----------------------------------------\n 🤌 Опубликован новый отзыв\n \n 👤 Имя и Модель авто: ${automobile}\n \n ✉️ Отзыв: ${feedback} \n ${image}`;

//     await bot.sendMessage(chatId, text);

//     return NextResponse.json(
//       { message: "Сообщение отправлено" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { message: "Ошибка при отправке сообщения" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import TelegramBot from "node-telegram-bot-api";
import FormData from "form-data";
import fetch from "node-fetch";

const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

const bot = new TelegramBot(botToken, { polling: false });

export async function POST(request) {
  try {
    console.log("Request received");

    const formData = await request.formData();
    console.log("FormData parsed");

    const automobile = formData.get("automobile");
    const feedback = formData.get("feedback");
    const image = formData.get("image");

    console.log("Automobile:", automobile);
    console.log("Feedback:", feedback);
    console.log("Image:", image ? "Received" : "Not received");

    const text = `----------------------------------------\n 🤌 Опубликован новый отзыв\n \n 👤 Имя и Модель авто: ${automobile}\n \n ✉️ Отзыв: ${feedback}`;
    console.log("Text message:", text);

    await bot.sendMessage(chatId, text);
    console.log("Text message sent to Telegram");

    if (image) {
      console.log("Processing image...");

      const imageBuffer = Buffer.from(await image.arrayBuffer());
      console.log("Image buffer length:", imageBuffer.length);

      const form = new FormData();
      form.append("chat_id", chatId);
      form.append("photo", imageBuffer, { filename: image.name });

      console.log("FormData prepared:", form);

      const response = await fetch(
        `https://api.telegram.org/bot${botToken}/sendPhoto`,
        {
          method: "POST",
          body: form,
          headers: form.getHeaders(), // Указываем заголовки FormData
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Telegram API error:", errorData);
        throw new Error("Ошибка при отправке изображения в Telegram");
      }

      console.log("Image sent to Telegram");
    }

    return NextResponse.json(
      { message: "Сообщение и изображение отправлены" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { message: "Ошибка при отправке сообщения" },
      { status: 500 }
    );
  }
}
