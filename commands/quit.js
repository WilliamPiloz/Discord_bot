module.exports = {
    name : 'quit',
    description: "stop musique",
    execute(message, args, serverQueue) {
        message.guild.me.voice.channel.leave()
    }
}