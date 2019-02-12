const graphql = require('graphql');
const _ = require('lodash');
const Book = require('../models/book');
const Author = require('../models/author');
const { books, authors } = require('../schema/db');

/*======================================
| GraphQL
=======================================*/
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema,
  GraphQLID
} = graphql;

/*======================================
| Object Type
=======================================*/
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    genre: { type: GraphQLString },
    published: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve: (parent, args) => {

        return _.find(authors, { id: parent.authorId });
      },
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve: (parent, args) => {

        return _.filter(books, { authorId: parent.id });
      },
    },
  }),
});


/*======================================
| Root Query
=======================================*/
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parent, args) => {

        return _.find(books, { id: args.id });
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve: (parent, args) => books,
    },
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID },
      },
      resolve: (parent, args) => {

        return _.find(authors, { id: args.id });
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve: (parent, args) => authors,
    },
  },
});

/*======================================
| Exports
=======================================*/
module.exports = new GraphQLSchema({ query: RootQuery });
