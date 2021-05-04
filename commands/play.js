const discord = require('discord.js');
const ytdl = require('ytdl-core');
module.exports = {
    name: 'play',
    description: "play musique",
    execute(message, args) {
        if (!message.member.voice.channel) return message.reply("go dans un channel !");
        if (!args[0]) return message.reply("Met un URL youtube");
        let stream = ytdl(args, {
            filter : "audioonly",
            opusEncoded: true,
            encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200']
        });

        message.member.voice.channel.join()
        .then(connection => {
            let dispatcher = connection.play(stream, {
                type: "unknown"
            })
            .on("finish", () => {
                message.guild.me.voice.channel.leave()
            })
        });
    }
}