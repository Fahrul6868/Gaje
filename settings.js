const chalk = require("chalk")
const fs = require("fs")

//apikey Chat GPT
global.keyAI = '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' 

//biarkan saja
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//wajib ganti
global.owner = ['6285786539008'] // nomor kamu
global.ownernomer = "6285786539008" // nomor kamu
global.ownername = "Fahrul" // nama kamu
global.ytname = "Gura Botz" //nama channel 
global.socialm = "instagram : fahrul_mt" // sosial media kamu
global.location = "Bandung, Jawa Barat, Indonesia" // lokasi kamu
global.botname = "Gura Botz" // nama bot kamu
global.ownernumber = '6285786539008' // nomor kamu
global.ownername = 'Fahrul' // nama kamu
global.ownerNumber = ["6285786539008@s.whatsapp.net"] // nomor kamu dengan @s.whatsapp.net
global.ownerweb = "https://sociabuzz.com/fahrul" // website kamu
global.websitex = "https://sociabuzz.com/fahrul" //website kamu
global.wagc = "https://chat.whatsapp.com/HZ0XzL2hYl5EtKgz15Qdfv" // link grup kamu
global.themeemoji = '=' // tema emoji kamu
global.wm = "GuraBotz" // watermark kamu
global.packname = "Gura Botz by" // nama sticker kamu
global.author = "Fahrul" // nama author sticker kamu
global.creator = "6285786539008@s.whatsapp.net" // nomor kamu
global.prefa = ['','!','.','#','&'] // tidak usah di ganti
global.hituet = 0 // saya tidak tahu ini

// ini biarkan saja
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//sesuaikan saja sama selera kamu
global.mess = {
    success: 'Done...',
    admin: 'fitur khusus admin grup!',
    botAdmin: 'bot harus menjadi admin terlebih dahulu!',
    premime: 'fitur khusus premium, hubungi owner untuk membeli premium, ketik *owner* !',
    owner: 'fitur ini hanya untuk owner bot!',
    group: 'fitur hanya bisa di gunakan dalam grup!',
    private: 'fitur hanya bisa di chat pribadi!',
    error: 'maaf terjadi kesalahan, hubungi owner!',
    endLimit: 'limit kamu sudah habis, limit akan di reset setiap pukul 12:00 WIB, atau beli premium hubungi owner',
    nsfw: 'fitur nsfw tidak aktif, hubungi owner untuk mengaktifkan!',
}

// limit pengguna 
global.limitawal = {
    premium: "Infinity",
    free: 10, // set yang ini aja bebas
}

// yang ini biarkan saja
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
