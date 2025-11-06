import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7750435953:AAFfzgcSIuRz5bzXixjrjZex4C5-7YOQoaI";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", async function (msg) {
  console.log(msg);
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstName = msg.chat.first_name;

  if (text == "/start") {
    bot.sendMessage(chatId, `Xush kelibsiz, ${firstName} 👋`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 🍔" }, { text: "Sozlamalar ⚙️" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text == "Boshlash 🔥") {
    const xabar = await bot.sendMessage(chatId, "Iltimos, kuting...");

    setTimeout(function () {
      bot.deleteMessage(chatId, xabar.message_id);
      bot.sendPhoto(chatId, "./imij.jpg", {
        caption: `qwertyui qwertyui qwertyu qwertyui. `,
      });
    }, 1000);
  } else if (text == "Menu 🍔") {
    bot.sendMessage(chatId, "Menyuga xush kelibsiz");
  }

  console.log("Start");
  console.log("Xabar keldi");
});

console.log("Botimiz ishga tushdi");