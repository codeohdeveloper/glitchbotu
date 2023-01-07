const Discord = require('discord.js');

exports.run = (client, message, args) => {
 
  message.channel.send(`**Eğer Kod İle Bir Sıkıntı Yaşarsan **`)
  message.channel.send(`**https://discord.gg/fnKfkv9B5s**`)
  message.channel.send(`sunucumuzdaki **code-help** kısmından yardım alabilirsiniz !`)

};


exports.conf = {
  aliases: ['codehelp', 'kod-yardim'],
  permLevel: 0
};

exports.help = {
  name: 'codehelp',
  description: 'Kullanıcıların sorun yaşadıkları zaman ne yapmaları gerektiğini gösterir !',
  usage: 'codehelp'
};