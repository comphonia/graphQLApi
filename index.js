const { ApolloServer } = require("apollo-server");
const SessionAPI = require("./datasources/sessions");

//schema
const typeDefs = require('./schema.js')
// A map of functions which return data for the schema.
const resolvers = require('./resolvers')

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
});


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQL server running at ${url}`);
});
