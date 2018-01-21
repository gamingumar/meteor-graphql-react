import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
type Query {
    hi: String
}
`;

const resolvers = {
  Query: {
    hi() {
      return "Hello gamingumar";
    }
  }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
console.log('hi from server');
// TODO - START FROM 6
// graphql schema and basic apollo server setup
