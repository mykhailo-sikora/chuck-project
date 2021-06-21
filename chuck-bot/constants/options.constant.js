const commands = {
    random: 'Random joke',
    category: 'Category joke',
    history: 'History',
  };
  
  const mainKeyboard = {
    reply_markup: {
      keyboard: [
        [{text: commands.random}, {text: commands.category}],
        [{text: commands.history}],
      ],
      resize_keyboard: true,
    },
  };
  
  const categoryInlineKeyboard = {
    reply_markup: {
      inline_keyboard: [
        [
          {text: '🦊', callback_data: 'animal'},
          {text: '💼', callback_data: 'career'},
          {text: '⭐', callback_data: 'celebrity'},
          {text: '👩🏼', callback_data: 'dev'},
        ],
        [
          {text: '🧠', callback_data: 'explicit'},
          {text: '💃🏼', callback_data: 'fashion'},
          {text: '🌭', callback_data: 'food'},
          {text: '⏳', callback_data: 'history'},
        ],
        [
          {text: '💰', callback_data: 'money'},
          {text: '🎬', callback_data: 'movie'},
          {text: '🎶', callback_data: 'music'},
          {text: '🏛', callback_data: 'political'},
        ],
        [
          {text: '🙏🏻', callback_data: 'religion'},
          {text: '🧬', callback_data: 'science'},
          {text: '🚴🏼‍♀️', callback_data: 'sport'},
          {text: '✈️', callback_data: 'travel'},
        ],
      ],
    },
  };
  
  module.exports = {
    commands,
    mainKeyboard,
    categoryInlineKeyboard,
  }
  