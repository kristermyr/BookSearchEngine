const { User, Book  } = require('../models');

// Create the functions that fulfill the queries defined in `typeDefs.js`
const resolvers = {
  Query: {
    me: async () => {
      // Get and return all documents from the classes collection
      return await User.findOne({}).populate('books').populate({
        path:'books',
        populate: 'author'
      });
    },
    author: async () => {
      // Populate the classes subdocument on every instance of Professor
      return await Author.find({}).populate('authors');
    }
  }
};

module.exports = resolvers;
