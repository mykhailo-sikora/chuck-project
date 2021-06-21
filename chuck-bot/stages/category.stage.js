const {Scenes: {BaseScene}} = require('telegraf');

const categories = require('../constants/categories.constant');
const {categoryInlineKeyboard} = require('../constants/options.constant');
const {getRandomCategoryJokeController} = require('../controllers/chuck.controller');

const categoryScene = new BaseScene('categoryScene');

categoryScene.enter(async ctx => ctx.reply('Chose category:', categoryInlineKeyboard));

categoryScene.on('callback_query', async (ctx) => {
  const category = ctx.update.callback_query.data;

  // show alert
  // await ctx.telegram.answerCbQuery(ctx.update.callback_query.id, `Your category is ${category}`, {show_alert: true});

  // delete message
  await ctx.telegram.deleteMessage(
    ctx.callbackQuery.message.chat.id,
    ctx.callbackQuery.message.message_id,
  );

  if (categories.includes(category)) {
    await ctx.reply(`You chose: ${category}`);

    const userId = ctx.update.callback_query.from.id;

    const {data: jokeFromCategory} = await getRandomCategoryJokeController(userId, category);

    await ctx.reply(jokeFromCategory.value);
  }

  return ctx.scene.leave();
});

module.exports = categoryScene;
