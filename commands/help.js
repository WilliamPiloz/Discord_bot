const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "decrit les commande",
    execute(message, args){
        const { prefix, token} = require ('../config.json');
        const embed = new Discord.MessageEmbed()

        embed.setTitle(`Command:`)
        embed.setColor('RED')
        embed.setDescription("ADMIN:\n!kick '@user' -> User kicked\n!ban '@user' -> User baned\n\nALL:\n!meme -> get meme\n!clear 'nb' -> delete messages\n!ping -> get your ping\n!plannig -> donne le lien de l'intra du planning Epitech\n!pardon '@user' -> pardonne one personne\n!round 'nb1' 'nb2' -> donne un nombre aléatoire (nb1 > nb2)\n!profil ('@user')-> affiche l'avatar de la personne\n\nMUSIC:\n!play ->'URL' play musique\n!quit -> stop la musique et quitte le bot")
        return message.channel.send(embed);
    }
}
