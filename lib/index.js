import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();
const listener = app.use('/graphql', graphqlHTTP({ schema, graphiql: true })).listen(3000, () => {
  console.log('Application listening on http://localhost:' + listener.address().port);
});
