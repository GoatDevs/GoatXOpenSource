const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('GoatX  Invite')
    .setDescription('https://discord.com/oauth2/authorize?client_id=799918147502211092&scope=bot&permissions=8\n Thank you for your support!')
    .setTimestamp()

    message.channel.send(embed);
}

module.exports.config = {
    name: "invite",
    description: "Gives GoatX's Invite",
    usage: ">invite",
    accessableby: "Members",
    aliases: []
}