const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('**Bot Status**')
    .setDescription('```GoatX currently UP```')
    .addFields(
        { name: 'https://status.discord.com/', value: '**Check the status of discord and stay updated!**' },
    )
    .setTimestamp()


message.channel.send(embed);
}

module.exports.config = {
    name: "status",
    description: "Gives Bot & discord status",
    usage: ">status",
    accessableby: "Members",
    aliases: []
}