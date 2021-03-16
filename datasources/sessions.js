const _ = require("lodash");
const sessionsData = require("../data/sessions.json");
const { DataSource } = require("apollo-datasource");
const { sessions } = require("../resolvers/query");

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

  toggleFavoriteSession(id) {
    const session = _.find(sessionsData, { id: parseInt(id) });
    session.favorite = !session.favorite
    return session;
  }

  addSession(session){
    session.id = 12;
    sessionsData.push(session)
    return session
  }
  
}

module.exports = SessionAPI;
