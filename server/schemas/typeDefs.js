const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID!
   authors: [String]
   description: String
    title: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
     user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(userame: String!, email: String!, password: String!): Auth
    saveBook(input: Bookinput): User
    removeProfile: Profile
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
