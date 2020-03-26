const Discord = require('discord.js');
const { Client, MessageEmbed , MessageAttachment} = require('discord.js');


const axios = require('axios');
module.exports = {
    name: 'country',
    description: "Latest stats by country",
    execute(message,args){
            let Country = args[1];

        axios({
            "method":"GET",
            "url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key":"5d6424f0a1msh3e221fc065dc0cap1a747cjsnef88e2ad0be9"
            },
            "params":{
                "country":Country
                }
            })
            .then((response)=>{
              
                const Embed = new Discord.MessageEmbed()
                .setTitle("Latest Stats of "+response.data.country)
                .setColor(0xE74960)
                .setDescription(
                    "Total Cases ~ "+response.data.latest_stat_by_country[0].total_cases+"\n"+
                    "Total Deaths ~ "+response.data.latest_stat_by_country[0].total_deaths+"\n"+
                    "New Cases ~ "+response.data.latest_stat_by_country[0].new_cases+"\n"+
                    "Recovered ~ "+response.data.latest_stat_by_country[0].total_recovered
                    )
               
                message.channel.send(Embed);

                
           
               
             
            })
            .catch((error)=>{
              console.log(error)
              message.channel.send("Country not found")
            })
    }
}