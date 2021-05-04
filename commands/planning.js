const { execute } = require("./kick");

module.exports = {
    name: 'planning',
    description: 'get intra link to planning',
    execute(message, args){
        message.channel.send("https://intra.epitech.eu/planning/#");
    }
}