const Discord = require('discord.js');
const { Client, MessageEmbed , MessageAttachment} = require('discord.js');
const fs = require('fs');



const axios = require('axios');
module.exports = {
    name: 'corona',
    description: "Total Cases",
    execute(message,args){
        axios({
            "method":"GET",
            "url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key":"5d6424f0a1msh3e221fc065dc0cap1a747cjsnef88e2ad0be9"
            }
            })
            .then((response)=>{
              
                const Embed = new Discord.MessageEmbed()
                .setTitle("World COVID19 Stats")
                .setColor(0xE74960)
                .setDescription("Cases ~ "+ response.data.total_cases+"\n"+"Deaths ~ "+ response.data.total_deaths+"\n"+"Recovered ~ "+response.data.total_recovered)
               
                message.channel.send(Embed);

              
              
                
               
             
            })
            .catch((error)=>{
              console.log(error)
            })
    }
}