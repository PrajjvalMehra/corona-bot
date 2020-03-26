const Discord = require('discord.js');
const { Client, MessageEmbed , MessageAttachment} = require('discord.js');
const fs = require('fs');




module.exports = {
    name: 'help',
    description: "list of commands",
    execute(message,args){

        fs.readFile('help.txt', 'utf8', function(err, contents) {

           
      
            const embed = new Discord.MessageEmbed()
            .setTitle("Commands")
            .setColor(0xE74960)
            .setDescription(contents);
            message.channel.send(embed)
            
          
            
          })

    }}