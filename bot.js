const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on('message', message => {
    var prefix = '!'
    var msg = message.content;
    var image = msg;

    if(image.charAt(0) === '!')
    {
      image = image.substr(1);
    }

    if (message.content.startsWith("!")) {
        message.channel.send('', {
            files: [
                "./images/" + image + ".png"
            ]
        });
    }
});

bot.on('ready', () => {
    console.log("ready");
});

bot.login("process.env.BOT_TOKEN")
