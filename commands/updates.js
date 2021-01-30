const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle('GoatX Updates | 1/20/21')
    .setColor('#56da7f')
    .setDescription('CODED BY ! Goat <3#9999')
    .addFields(
        { name: 'Deleted Commands', value: '>clear | >mute | >unmute | >addrole | >removerole\n >dog | >cat | >serverinfo' },
        { name: 'Recently Added Commands', value: '>memberinfo | >status | >updates | >meme | >nuke | >invite | >membercount'},
        { name: 'Coming soon...', value: 'Hangman game | 8ball game | Poll command | Covid-19 stats | snipe command'}
    )

    message.channel.send(embed);
}

module.exports.config = {
    name: "updates",
    description: "Tells you the updates",
    usage: ">updates",
    accessableby: "Members",
    aliases: []
}