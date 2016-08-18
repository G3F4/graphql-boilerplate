import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import schema from './graphql';

mongoose.Promise = Promise; // http://mongoosejs.com/docs/promises.html
mongoose.connect('mongodb://localhost/test');

const app = express();
const listener = app.use('/graphql', graphqlHTTP({ schema, graphiql: true })).listen(3000, () => {
  console.log('Application listening on http://localhost:' + listener.address().port);
});
