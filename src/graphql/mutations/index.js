import { GraphQLString, GraphQLNonNull } from 'graphql';

import TodoModel from '../../models/Todos';

export default {
  todo: {
    type: GraphQLString,
    description: 'Create single todo',
    args: {
      title: {
        name: 'title',
        description: 'Todo title',
        type: new GraphQLNonNull(GraphQLString)
      },
      description: {
        name: 'description',
        description: 'Todo description',
        type: GraphQLString
      }
    },
    async resolve (root, { title }, options) {
      const todoModel = new TodoModel({ title, description: 'description' });
      const todoPost = await todoModel.save();

      if (!todoPost) {
        throw new Error('Error creating todo');
      }

      return todoPost;
    }
  }
};