const Discord = require("discord.js-selfbot-v13"); 
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS]
});
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})
const {userAccount} = require("sphinx-run");
new userAccount(client, Discord).leveling({
    channel: '1140704510604476438',
    randomLetters: false, 
    time: 1, 
    type: 'ar' 
});
new userAccount(client, Discord).leveling({
    channel: '1140704510604476438',
    randomLetters: false, 
    time: 1, 
    type: 'eng' 
});
new userAccount(client, Discord).leveling({
    channel: '1140704510604476438',
    randomLetters: false, 
    time: 1, 
    type: 'ar' 
});
new userAccount(client, Discord).leveling({
    channel: '1140707742747734118',
    randomLetters: false, 
    time: 1, 
    type: 'ar' 
});
new userAccount(client, Discord).leveling({
    channel: '1140707742747734118',
    randomLetters: false, 
    time: 1, 
    type: 'ar' 
});
new userAccount(client, Discord).leveling({
    channel: '1140707742747734118',
    randomLetters: false, 
    time: 1, 
    type: 'eng' 
});
client.login(process.env.token);
