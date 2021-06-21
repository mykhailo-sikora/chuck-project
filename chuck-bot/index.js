require('dotenv').config();

const bot = require('./app');

bot.launch().then(() => console.log('Bot started'));
