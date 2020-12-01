const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./index/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./index/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Testing123 is online yo!');
});

client.on('message', message => {

    message.member.roles.cache.has
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    
        const config = require('./config.json');
        const { prefix, token } = require('./config.json');
        client.login(config.token);
        client.login(token);
    }
});





client.login(DISCORD_TOKEN4);