const { ApolloServer } = require("apollo-server");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");
const TrackAPI = require("./datasources/track-api");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
});

server
  .listen({
    port: process.env.PORT ?? 4000,
  })
  .then((info) => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port ${info.port}
`);
  });
