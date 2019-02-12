const graphql = require('graphql');
const _ = require('lodash');

// Dummy data
const books = [
  {
    id: '1',
    title: 'Startup',
    genre: 'IT',
  },
  {
    id: '2',
    title: 'Fetish',
    genre: 'Fantasy',
  }
];

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID
} = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parent, args) => {
        // Code to get data from db / other source
        return _.find(books, { id: args.id });
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
