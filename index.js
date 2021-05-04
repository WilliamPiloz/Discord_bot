const Discord = require("discord.js");
const config = require("./config.json");
const ytdl = require('ytdl-core');
const avatarEmbed = require('discord.js-avatar');
const client = new Discord.Client();
const prefix = "!"
const queue = new Map();

const fs = require('fs');
const { userInfo } = require("os");
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
console.log(commandFiles);
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log("Ready!");
    client.user.setActivity('Essaye des truc');
})

client.on("message", message =>{
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    const serverQueue = queue.get(message.guild.id);
    if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`You are ${timeTaken}ms.`);
    } else if (command === "clear") {
        client.commands.get('clear').execute(message, args);
    } else if (command === "meme") {
        message.channel.send("https://cdn.discordapp.com/attachments/763011993799753738/782982971757821952/0.png");
    } else if (command === "kick") {
        client.commands.get('kick').execute(message, args);
    } else if (command === "planning") {
        client.commands.get('planning').execute(message, args);
    } else if (command === "ban") {
        client.commands.get('ban').execute(message, args);
    } else if (command === "help") {
        client.commands.get('help').execute(message, args);
    } else if (command === "pardon") {
        client.commands.get('pardon').execute(message, args);
    } else if (command === "profil") {
       client.commands.get('profil').execute(message, args);
    } else if (command === "play") {
        client.commands.get('play').execute(message, args);
    } else if (command === "quit") {
        client.commands.get('quit').execute(message, args);
    } else if (command === "round") {
        client.commands.get('round').execute(message, args);
    } else if (args[0]){
        message.reply(args);
    }
});

client.login(config.BOT_TOKEN);