const { Message } = require("discord.js");

module.exports = {
    name: 'ban',
    description: "this command ban a member",
    execute(message, args){
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Vous n'avez pas les permissions de ban");
        if (!args[0]) return message.reply("Entrez ne nom de la personne que vous voulais ban");
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send("User baned");
        } else {
            message.channel.send("Vous ne pouvez pas ban cette utilisateur");
        }
    }
}