const Discord = require('discord.js');
const moment = require('moment');
const chalk = require('chalk');
const { prefix } = require('../config.json')

module.exports = client => {

console.log("Bot Hazır");

var randomMesajlar = [

    "CodeOH",
    "https://discord.gg/fnKfkv9B5s"
]




setInterval(function() {
    var randomMesajlar1 = randomMesajlar[Math.floor(Math.random() * (randomMesajlar.length))]
    client.user.setActivity(`${randomMesajlar1}`);

}, 2 * 200);

client.user.setStatus("idle");
/*
idle yerine yazılabilecekler

dnd 
idle
online
ofline

*/


}