module.exports = {
    name: 'pardon',
    description: "pardonne une personne ban",
    execute(message, args){
        const guild = message.guild;
        const [username] = args;
        guild.fetchBans().then((bans) => {
            let bannerUser = bans.find((b) => b.user.username == username);
            if (!bannerUser) return message.channel.send(`You cannot unban this User`);
            guild.members.unban(bannerUser.user).then(user => message.channel.send('This user was unban'));
        });
    }
}