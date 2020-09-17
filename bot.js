const PORT = process.env.PORT || 3000;
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const path = require('path');
const request = require('request');
var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
// replace the value below with the Telegram token you receive from @BotFather
const token = '1186357282:AAEpz_Bjkq834L-2slXjtcZA-yQckAfjMvk';
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});
//*****************************************************************************************************

// // синхронное чтение
// var text = fs.readFileSync("baza.txt", "utf8");
//
// var  param = "dfdfdf";
// var shablon = new RegExp("(?<="+param+").*");
//
// var str1 = text.replace(shablon, " AAA");
//
//
// //writeFile
//
// fs.writeFileSync("baza.txt", text + " \n wewewewewe");
//
//
//
// var  b = "wewewewewe3"
// var n = text.search(b);
// console.log(n)
//
//
//




////////////////////      START     ///////////////////
bot.on('message', (msg) => {
//global.ID = msg.message_id;
//global.ID1 = Number(ID)-1;
var userid = msg.from.id;
var text = fs.readFileSync("baza.txt", "utf8");
var shablon = new RegExp("(?<="+userid+").*");

if(msg.text === "/start"){
if(userid==314575765){
    bot.sendMessage(userid, "\n\nQisqacha MA'LUMOT:\n\nfoydalanilgan dasturlash tili - Node.js\nNode.js talqini: 13.12.0\nAPI - node-telegram-bot-api\n Server - Heroku\nGITHUB: https://github.com/Maruf-Jurakulov-coder/telegram-bot-vacancy/ \n\n Assalomu aleykum ustoz!\nUshbu xabar faqat sizga ko'rinadi, \nboshqa foydalanuvchilarda quyidagi xabardan boshlab ko'rish imkoniyati bor 👇🏻👇🏻👇🏻👇🏻");
}}


    if (msg.text === "/start"){
        bot.sendMessage(userid, "Assalomu aleykum!\n\n🟢 ISH QIDIRYAPSIZMI?  Yoki\n\n🟢 VAKANSIYA E'LON QILMOQCHIMISIZ?\n\n MARHAMAT E'LON BERISHINGIZ MUMKIN!\n kerakli tugmani bosing:  👇🏻👇🏻👇🏻", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "▶️ Ish qidiryapman", callback_data: '1' }],
        [{ text: "▶️ Vakansiya e'lon qilmoqchiman" , callback_data: '2' }],
        ]
      ,
      parse_mode: 'Markdown'
    }});
var n = text.search(userid);
if(String(n)==="-1"){
                fs.writeFileSync("baza.txt", text+"\n"+userid+" 0");
// bot.deleteMessage(global.userid, global.ID);
}else {
const str = text.replace(shablon, " 0");
fs.writeFileSync("baza.txt", str);
// bot.deleteMessage(global.userid, global.ID);
// bot.deleteMessage(global.userid, global.ID1);

}}
else
    {
var text111 = fs.readFileSync("baza.txt", "utf8");
var shablon111 = new RegExp("(?<="+userid+").*");
const b = Number(text111.match(shablon111)[0]);
       switch (b) {

                               case 5:
bot.sendMessage(userid, "Ismingiz?");
global.elon = "#VAKANSIYA \n🔊 "+msg.text+"\n";
const text55 = fs.readFileSync("baza.txt", "utf8");
const shablon55 = new RegExp("(?<="+userid+").*");
const str55 = text55.replace(shablon55, " 2");
fs.writeFileSync("baza.txt", str55);


                        break;
                     case 1:
bot.sendMessage(userid, "Ismingiz?");
global.elon = "#ISH_IZLAYAPMAN\n🔊 "+msg.text+"\n";
const text11 = fs.readFileSync("baza.txt", "utf8");
const shablon11 = new RegExp("(?<="+userid+").*");
const str11 = text.replace(shablon11, " 2");
fs.writeFileSync("baza.txt",  str11);

                        break;


                    case 2:


bot.sendMessage(userid, "Telefon raqamingizni yuboring");
const text22 = fs.readFileSync("baza.txt", "utf8");
const shablon22 = new RegExp("(?<="+userid+").*");
const str22 = text.replace(shablon22, " 3");
fs.writeFileSync("baza.txt",  str22);
                        global.name = "👤"+msg.text;


                        break;


                    case 3:
                        global.number = "📞"+msg.text;
                        bot.sendMessage(userid, global.elon+"\n"+global.name+"\n"+global.number+"\n\n@Vakansiya_Qashqadaryo_bot", {
                                                reply_markup: {
                                                    inline_keyboard: [
                                                        [{text: "▶️ Barchasi to'g'ri ✅", callback_data: '3'}],
                                                        [{text: "️ o'zgartirish  kiritish ✏", callback_data: '4'}],
                                                    ]
                                                    ,
                                                    parse_mode: 'Markdown'
                                                }
                                            });
const text33 = fs.readFileSync("baza.txt", "utf8");
const shablon33 = new RegExp("(?<="+userid+").*");
const str33 = text33.replace(shablon33, " 77");
fs.writeFileSync("baza.txt",  str33);


                        break;


                    case 4:



                        break;

                }
                //end switch ^^^^






    }






//end bot.on
});





///// CALLBACK_QUERY
bot.on('callback_query', function (msg) {
var userid = msg.from.id;
var a = Number(msg.data);
// switch (a)
      switch (a) {
          //ISH QIDIRYAPMAN
          case 1:
              bot.answerCallbackQuery(msg.id, "E'loningizni yozing, masalan:\n\n Ma'lumotim o'rta maxsus, BC kategoriyadagi haydovchilik guvohnomam bor, to'liq stavkada ish izlayapman... ", true);
              bot.sendMessage(userid, "E'loningizni yozing:");
              const text1 = fs.readFileSync("baza.txt", "utf8");
              const shablon1 = new RegExp("(?<="+userid+").*");
              const str1 = text1.replace(shablon1, " 1");
               fs.writeFileSync("baza.txt", str1);
              // bot.deleteMessage(global.userid, global.ID+1);

              break;
          //VAKANSIYA E'LON QILMOQCHIMAN
          case 2:

              bot.answerCallbackQuery(msg.id, "E'loningizni yozing va unda vakansiya uchun barcha talabarni kirirting", true);

              bot.sendMessage(userid, "Vakansiya bo'yicha e'loningizni yozing:");
               const text2 = fs.readFileSync("baza.txt", "utf8");
              const shablon2 = new RegExp("(?<="+userid+").*");
               const str2 = text2.replace(shablon2, " 5");
               fs.writeFileSync("baza.txt", str2);


              break;
          case 3:
               const text333 = fs.readFileSync("baza.txt", "utf8")
               const shablon333 = new RegExp("(?<="+userid+").*");

              if(Number(text333.match(shablon333)[0])==77)  {
                  const text3 = fs.readFileSync("baza.txt", "utf8");
                  const shablon3 = new RegExp("(?<="+userid+").*");
                  const str3 = text3.replace(shablon3, " 0");
                  fs.writeFileSync("baza.txt", str3);
                  bot.answerCallbackQuery(msg.id, "✅ MUVAFFAQIYATLI YUBORILDI ✅", false);
                  bot.sendMessage(userid, "E'loningiz 10 daqiqa ichida ADMIN tomonidan tekshirilgach guruhda e'lon qilinadi ✅")
                  bot.sendMessage(-1001349154533, global.elon+"\n"+global.name+"\n"+global.number+"\n\n@Vakansiya_Qashqadaryo_bot" );

                  bot.sendMessage(userid, "🟢 ISH QIDIRYAPSIZMI?  Yoki\n\n🟢 VAKANSIYA E'LON QILMOQCHIMISIZ?\n\n MARHAMAT E'LON BERISHINGIZ MUMKIN!\n kerakli tugmani bosing:  👇🏻👇🏻👇🏻", {
                      reply_markup: {
                          inline_keyboard: [
                              [{text: "▶️ Ish qidiryapman", callback_data: '1'}],
                              [{text: "▶️ Vakansiya e'lon qilmoqchiman", callback_data: '2'}],
                          ]
                          ,
                          parse_mode: 'Markdown'
                      }
                  });
              }else {
                                    bot.answerCallbackQuery(msg.id, "✅ MUVAFFAQIYATLI YUBORILDI ✅", false);
              }
              break;
          case 4:

              bot.answerCallbackQuery(msg.id, "E'LONNI QAYTADAN KIRITING", false);

              bot.sendMessage(msg.from.id, "🟢 ISH QIDIRYAPSIZMI?  Yoki\n\n🟢 VAKANSIYA E'LON QILMOQCHIMISIZ?\n\n MARHAMAT E'LON BERISHINGIZ MUMKIN!\n kerakli tugmani bosing:  👇🏻👇🏻👇🏻", {
                  reply_markup: {
                      inline_keyboard: [
                          [{text: "▶️ Ish qidiryapman", callback_data: '1'}],
                          [{text: "▶️ Vakansiya e'lon qilmoqchiman", callback_data: '2'}],
                      ]
                      ,
                      parse_mode: 'Markdown'
                  }
              });
const text4 = fs.readFileSync("baza.txt", "utf8");
const shablon4 = new RegExp("(?<="+userid+").*");
const str3 = text4.replace(shablon4, " 0");

              break;
      }});


// bot.on('message', msg=>{
//
//     if(msg.text!="/start"){
//         bot.deleteMessage(global.userid, global.ID);
// bot.deleteMessage(global.userid, global.ID1);
//     }
//
//
// })