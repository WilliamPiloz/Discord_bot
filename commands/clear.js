module.exports = {
    name: 'clear',
    descpription: 'clear',
    execute(message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply("Vous n'avez pas les permissions de clear");
        if (!args[0]) return message.reply("Entrez un nombre de message a supprimez");
        if (isNaN(args[0])) return message.reply("Entrez un vrai nombre");
        if (args[0] >= 50) return message.reply("Le nombres de message a supprimez ne peut pas deppasser 50");
        if (args[0] < 1) return message.reply("Vous ne pouvez pas supprimer moins de 1 message");
        message.channel.bulkDelete(args[0]);
    }
}