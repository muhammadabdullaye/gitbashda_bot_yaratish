import { bot } from "../index.js";

function onCourses(chatId) {
  bot.sendMessage(
    chatId,
    `🎓 Bizning o‘quv markazimizda quyidagi kurslar mavjud:

1️⃣ Ingliz tili  
2️⃣ Rus tili  
3️⃣ Matematika  
4️⃣ Dasturlash (Python, Web)  
5️⃣ Grafik dizayn  

👇 Quyidagi kurslardan birini tanlang va batafsil ma’lumot oling:
    `,
    {
      reply_markup: {
        inline_keyboard: [
          [{ text: "🇬🇧 Ingliz tili", callback_data: "course_english" }],
          [{ text: "🇬🇧 Ingliz tili", callback_data: "course_english" }],
          [{ text: "🇬🇧 Ingliz tili", callback_data: "course_english" }],
        ],
      },
    }
  );
}

export { onCourses };