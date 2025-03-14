import { NextResponse } from "next/server";
import TelegramBot from "node-telegram-bot-api";

const botToken = process.env.BOT_TOKEN;
const chatId = process.env.CHAT_ID;

const bot = new TelegramBot(botToken, { polling: false });

export async function POST(request) {
  try {
    const { carModel, phoneNumber } = await request.json();

    const text = `----------------------------------------\n ✨ Новая заявка на обратную связь:\n \n 🚘 Модель авто: ${carModel}\n \n ☎️ Номер телефона: ${phoneNumber}`;

    await bot.sendMessage(chatId, text);

    return NextResponse.json(
      { message: "Сообщение отправлено" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Ошибка при отправке сообщения" },
      { status: 500 }
    );
  }
}
