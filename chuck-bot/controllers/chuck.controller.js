const {getRandomJokeService, getHistoryOfJokesService} = require('../services/chuck.service');

module.exports = {
  getRandomJokeController(userId) {
    return getRandomJokeService({userId});
  },

  getRandomCategoryJokeController(userId, category) {
    return getRandomJokeService({userId, category});
  },

  getHistoryOfJokesController(userId) {
    return getHistoryOfJokesService({userId});
  },
}
