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
      bot.sendPhoto(chatId, "img/imij.jpg", {
        caption: `buni ismi alisher . `,
      });
    }, 1000);
  } else if (text == "Menu 🍔") {
    bot.sendMessage(chatId, "Menyuga xush kelibsiz");
    const xabar = await bot.sendMessage(chatId, "Iltimos, kuting...");

    setTimeout(function () {
      bot.deleteMessage(chatId, xabar.message_id);
      bot.sendPhoto(chatId, "img/weyu.jpg", {
        caption: `buni ismi bobi . `,
      });
    }, 1000);
  }else if (text == "Sozlamalar ⚙️") {
    bot.sendMessage(chatId, "Menyuga xush kelibsiz");
    const xabar = await bot.sendMessage(chatId, "Iltimos, kuting...");

    setTimeout(function () {
      bot.deleteMessage(chatId, xabar.message_id);
      bot.sendVideo(chatId, "img/WIN_20251111_17_51_08_Pro.jpg", {
        caption: `bayram shipyon . `,
      });
    }, 1000);
  }

  console.log("Start");
  console.log("Xabar keldi");
});

console.log("Botimiz ishga tushdi");