const { RESTDataSource } = require("apollo-datasource-rest");

class SpeakerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/speakers";
  }

  async getSpeakerById(id) {
    try {
      const data = await this.get(`/${id}`);
      return data;
    } catch (error) {
      return null;
    }
  }

  async getSpeakers() {
    try {
      const data = await this.get("/");
      return data;
    } catch (error) {
      return null;
    }
  }
}

module.exports = SpeakerAPI;
