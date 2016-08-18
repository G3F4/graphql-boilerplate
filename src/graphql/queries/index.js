import { GraphQLString, GraphQLNonNull } from 'graphql';

import Todos from '../../models/Todos';

export default {
  todo: {
    type: GraphQLString,
    description: 'Get single todo',
    args: {
      title: {
        name: 'title',
        description: 'Todo title',
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    async resolve (root, { title }, options) {
      const todoPost = await Todos.find({ title });

      if (!todoPost) {
        throw new Error('Error getting todo');
      }

      return todoPost;
    }
  },
  todos: {
    type: GraphQLString,
    description: 'Get all todos',
    async resolve (root, { id }, options) {
      const todoPost = await Todos.find();

      if (!todoPost) {
        throw new Error('Error getting todos');
      }

      return todoPost;
    }
  }
};