const Discord = require('discord.js')
const blacklist = require('./modules/blacklist.js')

module.exports.run = async(client, message, args) => {
    if(message.author.id !== '785054402376761355') return message.channel.send('This is an owner only command.')
    const User = message.guild.members.cache.get(args[0])
    if(!User) return message.channel.send('User is not valid.')

    blacklist.findOne({ id : User.user.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
            message.channel.send(`**${User.displayName}** has already been blacklisted!`)
        } else {
            data = new blacklist({ id : User.user.id })
            data.save()
            .catch(err => console.log(err))
        message.channel.send(`${User.user.tag} has been added to blacklist.`)
        }
       
    })
}
module.exports.config = {
    name: "BlackList",
    description: "Allows **BOT** Owner to blacklist a user if spamming bot commands, DDOSing The bots server, or trying to crack into the bots database to mess it up.",
    usage: ">blacklist",
    accessableby: "! Goat <3#9999",
    aliases: []
}