const Discord = require('discord.js');
const blacklist = require('./modules/blacklist.js');

module.exports.run = async(client, message, args) => {
    if(message.author.id !== '785054402376761355') return message.channel.send('This is an owner only command.')
    const User = message.guild.members.cache.get(args[0])
    if(!User) return message.channel.send('User is not valid.')

    blacklist.findOne({ id : User.user.id }, async(err, data) => {
        if(err) throw err;
        if(data) {
           await blacklist.findOneAndDelete({ id : User.user.id })
            .catch(err => console.log(err))
            message.channel.send(`**${User.displayName}** has been removed from blacklist.`)
        } else {
           message.channel.send(`**${User.displayName}** is not blacklisted.`)
        }
       
    })
}
module.exports.config = {
    name: "remove-blacklist",
    description: "Allows Owner To Remove A BlackList From Someone.",
    usage: ">remove-blacklist",
    accessableby: "! Goat <3#9999",
    aliases: []
}
