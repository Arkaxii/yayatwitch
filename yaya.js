const Discord = require('discord.js')
const bot = new Discord.Client()

client.on("message", message => {

    var prefix = '<';

if(message.content.startsWith(prefix + "tw")){
    message.channel.send(" @everyone  https://www.twitch.tv/judge_choucr")
};

});
client.login(token);
