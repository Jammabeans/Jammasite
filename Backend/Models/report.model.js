const mongoose = require('mongoose');

const reportSchema = mongoose.Schema(
  {
    title:{
      type: String,
      trim: true,
      required: true
    },
    message:{
        type: String,
        trim: true,
        required: true
    },
    coinId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Coin',
        required: true
    },
    userId:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    },
    isApproved:{
      type:Boolean,
      default:false
  }
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;
