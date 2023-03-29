const { gql } = require('apollo-server-express');

const typeDefs = gql
`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    saveBook(bookDate: Bookinput!): User
    removeProfile: Profile
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
