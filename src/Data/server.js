const express = require("express");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const RootQuery = { hello: () => "Hello world!" };

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: RootQuery,
    graphiql: true
  })
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => "Now browse to localehost:4000/graphql");
