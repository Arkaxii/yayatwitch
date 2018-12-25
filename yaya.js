const token = process.env.token;
const Discord = require('discord.js')
const client = new Discord.Client()

client.on("message", message => {

    var prefix = '<';

if(message.content.startsWith(prefix + "tw")){
    message.channel.send(" @everyone **Le live commence !!**  https://www.twitch.tv/judge_choucr")
};

});
client.login(token);
