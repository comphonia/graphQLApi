const _ = require("lodash");
const sessionsData = require("../data/sessions.json");
const { DataSource } = require("apollo-datasource");

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessionById(id) {
    const session = _.find(sessionsData, { id: parseInt(id) });
    return session;
  }

  getSessions(args) {
    const sessions = _.filter(sessionsData, args);
    return sessions;
  }
}

module.exports = SessionAPI;
