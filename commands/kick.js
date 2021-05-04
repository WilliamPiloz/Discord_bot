module.exports = {
    name: 'kick',
    description: "this command kick a member",
    execute(message, args){
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply("Vous n'avez pas les permissions de kick");
        if (!args[0]) return message.reply("Entrez ne nom de la personne que vous voulais kick");
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.kick();
            message.channel.send("User kicked");
        } else {
            message.channel.send("Vous ne pouvez pas kick cette utilisateur");
        }
    }
}