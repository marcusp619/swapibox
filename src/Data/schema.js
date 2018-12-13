const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQL,
  GraphQLSchema
} = require("graphql");

// Film Type https://swapi.co/api/films/
const FilmType = new GraphQLObjectType({
  name: "Film",
  fields: () => ({
    opening_crawl: { type: GraphQLString },
    title: { type: GraphQLString },
    release_date: { type: GraphQLString }
  })
});

// People Type https://swapi.co/api/people/
const PeopleType = new GraphQLObjectType({
  name: "People",
  fields: () => ({
    name: { type: GraphQLString },
    homeworld: { type: GraphQLString },
    species: { type: GraphQLString },
    population: { type: GraphQLString }
  })
});
// Planet Type
// Vehicle Type

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    filmData: {
      type: new GraphQLList(FilmType),
      resolve(parent, args) {
        return fetch(`https://swapi.co/api/films`)
          .then(response => response.json())
          .then(result => result.data);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
