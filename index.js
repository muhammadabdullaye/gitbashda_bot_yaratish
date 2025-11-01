import TelegramBot from "node-telegram-bot-api";

const TOKEN = "7750435953:AAFfzgcSIuRz5bzXixjrjZex4C5-7YOQoaI";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", function (msg) {
    const chatid = msg.chat.id;
    const text = msg.text;

    bot.sendMessage(chatid, `Solom --> ${text}`);
    console.log("Xabar keldi");
    console.log(msg);
});

console.log("Botimiz ishga tushdi")