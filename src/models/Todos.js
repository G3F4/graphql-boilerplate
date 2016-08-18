import mongoose from 'mongoose';

var todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
});

export default mongoose.model('Todo', todoSchema);