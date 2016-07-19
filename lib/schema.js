import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLNonNull } from 'graphql';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        description: 'Welcome message',
        args: {
          id: {
            name: 'id',
            description: 'User id',
            type: new GraphQLNonNull(GraphQLString)
          }
        },
        resolve: (root, {id}) => 'Hello ' + id
      }
    }
  })
});

export default schema;
