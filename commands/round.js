module.exports = {
    name: 'round',
    descpription: 'donne un nombre aléatoir',
    execute(message, args) {
        if (args.length != 2) return message.reply("Entrez deux numéro");
        if (args[0] <= args[1]) return message.reply("Mettais le plus petit nombre en 2eme");
        if (isNaN(args[0])) return message.reply("Entrez un vrai nombre");
        var nombreAleatoire = Math.random() * args[0] | args[1];
        message.channel.send(nombreAleatoire);
    }
}