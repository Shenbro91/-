
ððð ðððððð ð´ð« ð½ð® áIÕá¼á´á
ððªðð¡ðð ð¿ðð©ð - 2022 / 07 / 05 
ðððð£ð ð¨ ðð¤ ððð§ðð¥ð© ðð§ð¤ ðð¤ðð¤ ððð©ð¤ð§ðª

ðððð£ð ð¨ ðð¤
          ð¼ð¡ð¡ ððð¡ð¥ðð§ð¨ 
*/



constfs = require('fs')
constchalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3' // Facebook download 2 api

global.APIs = {
   zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
   'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['94715166712'] // +94772830536 , (à¶à¶ºà·à¶­à·à¶à¶»à·à¶à· à¶±à¶¸à·à¶¶à¶»à· à¶à¶ )
global.pemilik = ['94715166712'] //Change  it , à¶à¶¶à¶§ à¶à·à¶¸à¶­à· à¶±à¶¸à· à·à·à¶±à·à· à¶à¶»à¶±à·à¶±
global.premium = ['94715166712'] //Change it à¶à¶¶à¶§ à¶à·à¶¸à¶­à·à¶±à¶¸à· à·à·à¶±à·à· à¶à¶»à¶±à·à¶± 
global.pengguna = 'ððð âðð' // Your name à¶à¶¶à· à¶±à¶¸ 
global.botnma = 'ð¯ð¹ðð ð©ðððð' // Your bot name , à¶à¶¶à¶à· à¶¶à·à¶§à·à¶à· à¶±à¶¸ 
global.ownernma = 'ððð âðð' //ownernama,ownername
global.packname = 'Queen Elisa Sticker' // Sticker package name 
global.author = 'Dark Maker' // Sticker Autor name 
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = 'ðµ'
// Alive massage , à¶à¶¶à· à¶¶à·à¶à· alive massage  à¶à¶ à¶¸à·à·à· à¶à¶­à· ` ` à¶¸à·à¶¸ à¶½à¶à·à¶±à· à¶à¶­à·à¶½à· à¶à¶¶à¶§ à¶à·à·à·âà¶º à¶à¶±à·à¶¸ à¶¯à·à¶ºà¶à· Type à¶à¶»à¶±à·à¶±.ð
global.alivelogo = `https://telegra.ph/file/1a2dee71baa975091620d.jpg`
global.alive =`Hello i am alive now

Download song type .yt 
Thanks fro using...`
// Welcome massage  à¶à¶¶à¶§ à¶à·à¶¸à¶­à· à¶±à¶¸à· à¶¸à·à¶ºà¶§ à¶à¶¶à· welcome massage  à¶à¶ à¶ºà·à¶¯à¶±à·à¶± 
global.welcome = `
ð Thanks Fro using sl zim bot
â¾ Some bugs fixing
ð¼â¥ï¸
`
// à·à·à¶½à·à¶à¶¸à· à¶à¶ à¶ºà·à¶±à·à¶± à¶à¶±à· à¶±à¶¸à· add à¶à·à¶ºà¶½à· à¶¯à·à¶±à·à¶± 
global.sendwelcome = `add`
// Good bye à¶à¶ à¶à¶±à· à¶±à¶¸à· remove à¶à·à¶ºà¶½à· à¶¯à·à¶±à·à¶±
global.sendgoodbye = `remove`
// Caption 
global.cap = `Â© ððð§ðð«ðð­ðð ðð² âð¬ð« ð©ð³ð¨ðªð²ð` // Add your caption â¥ 
global.mess = {
   success: 'â Done!',
   admin: 'you must be admin to use this cmd!',
   botAdmin: 'Bot must be admin neh!',
   owner: 'This cmd is for Elisa bot owner only',
   group: 'oooh sorry this cmd is for groups only!',
   private: 'goossssh it can only used in dms!',
   bot: 'This cmd  its only for the bot host',
   wait: 'Wait ð¹ððð©ððððð bot processing ',
   endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
   premium: "Infinity", 
   free: 90 
}
   global.rpg = {
       darahawal: 100,
       besiawal: 15,
       goldawal: 10,
       emeraldawal: 5,
       umpanawal: 5,
       potionawal: 1
    }    

global.thumb = fs.readFileSync('./image/Elisa.jpg')
global.imgalive = fs.readFileSync('./image/Elisa.jpg')
letfile = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   deleterequire.cache[file]
   require(file)
})
