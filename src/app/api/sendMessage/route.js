import { NextResponse } from "next/server";
import TelegramBot from "node-telegram-bot-api";

const botToken = "7595193228:AAHvuFFmj4_UOUN8nMcEVpuQEhoNxbw8sSM";
const chatId = "1526918915";

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
