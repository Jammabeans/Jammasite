const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
  {
    message:{
      type: String,
      trim: true,
      required: true
    },
    userId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    coinId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Coin',
        required: true
    },
    coinPrediction:{
        type: String,
        enum: ['upvote', 'downvote', null]
    }
  },
  {
    timestamps: true,
  }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
