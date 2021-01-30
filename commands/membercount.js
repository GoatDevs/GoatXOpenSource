const Discord = require("discord.js")


module.exports.run = async (bot, message, args) => {
    const totalMembers = message.guild.members.cache.filter(member => !member.user.bot).size 
    const bots = message.guild.members.cache.filter(member => member.user.bot).size
    

    let memberembed = new Discord.MessageEmbed()
    .setTitle('Member Count')
    .setDescription(`There are **${message.guild.memberCount}** members in this server.`)
    .addField(`Humans: ${totalMembers}`, `**Bots: ${bots}**`)
    .setThumbnail(message.guild.iconURL())
    .setColor('GREEN')
    

    message.channel.send(memberembed)

    
    
}

module.exports.config = {
    name: "membercount",
    description: "Shows the total members in a server.",
    usage: ">membercount",
    accessableby: "Members",
    aliases: []
}