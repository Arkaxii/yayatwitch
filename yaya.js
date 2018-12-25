const token = process.env.token;
const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on("message", message => {

    var prefix = '<';

if(message.content.startsWith(prefix + "tw")){
    message.channel.send(" @everyone  https://www.twitch.tv/judge_choucr")
};

});
client.login(token);
