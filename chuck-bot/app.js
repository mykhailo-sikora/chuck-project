const {Telegraf, session, Scenes: {Stage}} = require('telegraf');

const {commands, mainKeyboard} = require('./constants/options.constant');
const {getRandomJokeController, getHistoryOfJokesController} = require('./controllers/chuck.controller');
const categoryStage = require('./stages/category.stage');

const bot = new Telegraf(process.env.BOT_TOKEN);
const stage = new Stage([categoryStage]);

bot.use(session(), stage.middleware());

bot.start(ctx => ctx.reply('Welcome to the Chuck bot', mainKeyboard));

bot.hears(commands.random, async ctx => {
  const userId = ctx.from.id;

  const {data: randomJoke} = await getRandomJokeController(userId);

  return ctx.reply(randomJoke.value);
});

bot.hears(commands.category, ctx => ctx.scene.enter('categoryScene'));

bot.hears(commands.history, async ctx => {
  const userId = ctx.from.id;

  const {data: jokes} = await getHistoryOfJokesController(userId);

  let joke = 'Your 10 last Chuck jokes:\n\n\n';

  for (let i = 0; i < jokes.length; i++) {
    joke += `${i + 1}) ${jokes[i].value}\n\n`;
  }

  return ctx.reply(joke);
});

module.exports = bot;
