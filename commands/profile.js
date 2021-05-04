const Discord = require('discord.js');

module.exports = {
    name: 'profil',
    description: "affiche l'avatar",
    execute(message, args) {
        const { prefix, token} = require ('../config.json');
        const embed = new Discord.MessageEmbed()

        if(!message.mentions.users.first()) {
            embed.setTitle("Ton avatar:")
            embed.setColor('RAMDOM')
            embed.setImage(message.author.displayAvatarURL())
            return message.channel.send(embed)
        } else {
            const user = message.mentions.users.first()
            embed.setTitle(`Avatar de ${user.tag}:`)
            embed.setColor('RANDOM')
            embed.setImage(user.displayAvatarURL())
            return message.channel.send(embed)
        }
    }
}