const Discord = ("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")){
        return message.channel.send("**Sorry, you do not have permiissions to nuke this channel.**")
    }

    message.channel.clone().then(c => {
        message.channel.delete()
        c.send("This channel has been nuked\n https://imgur.com/LIyGeCR")
    })
}

module.exports.config = {
    name: "nuke",
    description: "Deletes all messages in 1 channel",
    usage: ">nuke",
    accessableby: "Administrators",
    aliases: []
}