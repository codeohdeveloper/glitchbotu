const Discord = require('discord.js')

exports.run = async(client, message, args) => {

let codeoh = "desteksunucusulinki"

if(!args[0]) {
    const embed = new Discord.MessageEmbed()
    .setAuthor('Yardım', client.user.avatarURL())
    .setDescription('**Örnek Kullanım:** `oh:yardım Kategori`\n**Örnek:** `oh:yardım Genel`\n[CodeOH Botunu eklemek istersen](https://discord.com/api/oauth2/authorize?client_id=1056661401436946474&permissions=8&scope=bot)')
    .addField('Komutlar:', 
    `[oh:yardım (Yardım menüsü açar)](${codeoh})
    [oh:radyo (İstediğiniz radyo frekansını açar)](${codeoh})
    [oh:ban (Admin özel)](${codeoh})
    [oh:user-pp (Profilinizi gösterir)](${codeoh})
    [oh:oylama (Admin özel)](${codeoh})
    [oh:codehelp (Kod yardım menüsü açar)](${codeoh})
    [oh:mesajgönder (Admin özel)](${codeoh})
    [oh:ping (Admin özel)](${codeoh})
    [İstek komut için HarryK#6470](${codeoh})`)
    .addField('» CodeOH', 
    `Kanalımıza abone olarak bizi destekleyebilirsiniz`)
    .setThumbnail(client.user.avatarURL())
    .setColor("BLUE")
    .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
    message.channel.send(embed)
}
if(args[0] === 'genel' | args[0] === 'eğlence' | args[0] === 'kullanıcı' | args[0] === 'moderasyon' | args[0] === 'moderasyon2' | args[0] === 'yapılandırma' | args[0] === 'sunucu' | args[0] === 'resim' | args[0] === 'nsfw') {
const embed = new Discord.MessageEmbed()
.setAuthor(args[0], client.user.avatarURL())
.setDescription(client.commands.filter(c=>c.conf.kategori === args[0]).map(kmt=>kmt.help.name).join('\:white_small_square: - g!\n ') + '» Linkler\n[Davet Et](https://discord.com) | [Destek Sunucusu](' + codare + ') | [Oy Ver](https://discord.com) | [Web Sitesi](https://discord.com)')
.setThumbnail(client.user.avatarURL())
.setColor("BLUE")
.setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
message.channel.send(embed)
} else {
message.channel.send('Yardım menümüz yukarıda')
}
}

exports.conf = {
    aliases: ['yardim', 'help',]
}
exports.help = {
    name: "yardım"
}