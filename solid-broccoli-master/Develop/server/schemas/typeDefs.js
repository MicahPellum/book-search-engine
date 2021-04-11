// import the gql tagged template function
const { gql } = require('apollo-server-express');



// create our typeDefs
const typeDefs = gql`
  type Query {
    books: [Books]
  }
`;

type books {
    _id: ID
    username: String
  }


// export the typeDefs
module.exports = typeDefs;