const agent = require('./agent.service');

module.exports = {
  getRandomJokeService(config) {
    return agent.post('http://localhost:3000', config);
  },

  getHistoryOfJokesService(config) {
    return agent.get(`http://localhost:3000/${config.userId}`);
  },
};
