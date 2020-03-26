const Discord = require('discord.js');
const token = 'NjkxNjAxMzE1MzY4OTI3MzAy.XnxVIA.UTh9mvRhtN3VHgPuaH3ag6YMU3M';
const { Client, MessageEmbed , MessageAttachment} = require('discord.js');

const axios = require('axios');
const PREFIX = "!";
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
var prev;

for(const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Bot is now Connected');

  });

  client.on('guildMemberAdd', member => {
 
    const channel = member.guild.channels.cache.find(channel => channel.name === "general");
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
  
    fs.readFile('prevention.txt', 'utf8', function(err, contents) {

      channel.send("Welcome to the server "+ `${member}`)

      const embed = new Discord.MessageEmbed()
      .setTitle("Prevention measures for coronavirus")
      .setColor(0xE74960)
      .setDescription(contents);
      channel.send(embed)
      
    
      
    })

    
    
 
 
  })
  



    
  
client.on('message', message => {
   
    let args  = message.content.substring(PREFIX.length).split(" ");

    switch(args[0])
    {
      case "corona":
          client.commands.get('corona').execute(message,args);
          break;
      case "country":
          client.commands.get('country').execute(message,args);
          break;
      case "help":
          client.commands.get('help').execute(message,args);
          break;
    }



      
});








client.login(process.env.token);

  