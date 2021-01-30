const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setDescription('TEST')

    message.channel.send(embed);
}

module.exports.config = {
    name: "shop",
    description: "Gives description of discord links or online shop links!",
    usage: ">shop",
    accessableby: "Everyone",
    aliases: ["N/A"]
}