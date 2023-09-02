const Discord = require("discord.js-selfbot-v13"); 
const client = new Discord.Client({
    intents: [Discord.Intents.FLAGS.GUILDS]
});
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

const words = ["كسمك", "يا قواد يا خول" , "يلعن كسمك", " انيك ام ام امك", "يبن الزانيه", "يا عرص يا نتفه", "يا ابن القحبه", "يلعن ابوك يل قواد", "يكسمك", "اقول حرك يبن القحبه يعرص", "يلعن كسمك بس", "ههههه كسمك يبن الشرموطه", "لذي الدرجه محروق كعب انس عالي عليك يبن القحبه صح ؟", "عبدالرحمن ابن الشرموطه لحقوا عليه امك تنناك @here" , "بلله زبي ما ورم حلقك يبن المتناكه ؟؟؟","يلا يلعن كسمك", "يبن النتفه يا متناك يخول", "يلا يبن اازب الصومالي يخول", "كان زب بكستناي نط علي امك يبن القحبه جبلنا الخلقه بنت المتناكه دي", "اص اص مسويلي فري يبن المتناكه تعال", "انيك ام ام ام ام امك", "يلا ختففو علي وجه كسمك يبن المتناكه ", "شاهد كسم عبدالرحمن يوسف المحلوق @here","كسم ابوك يوسف الصومالي يبن الشرموطه","ختفوو علي كسمك يبن القجبه","كسمك ع كسم ام ام ام ام ام امك زوجه يوسف ابن القحبه"];


client.on('message', message => {
    if (message.content.toLowerCase() === 'يلا يلعن كسمك') {
        setInterval(() => {
            const randomWord = words[Math.floor(Math.random() * words.length)];
            message.channel.send(randomWord);
        }, 100); 
    }
});
client.login(process.env.token);
