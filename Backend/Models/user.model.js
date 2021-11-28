const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');
const userSchema = mongoose.Schema(
  {
    name:{
      type: String,
      trim: true,
      required: true
    },
    publicKey: {
      type: String,
      required: true,
    },
    coinIds:[
      mongoose.Schema.Types.ObjectId
    ],
    commentIds:[
      mongoose.Schema.Types.ObjectId
    ],
    votedCoins:[{
      type: Object,
      default:[],
      id:{
        type: mongoose.Schema.Types.ObjectId
      },
      votingTime:{
        type: Date
      }
    }],
    votingScore:{
      type: Number,
      default: 0
    },
    voteType:{
      type: String,
      enum:['normal', 'silver', 'gold'],
      default: 'normal'
    },
    displayImage:{
      type: String
    },
    isAdmin:{
      type: Boolean,
      default:false
    },
    accountIsPrivate:{
      type: Boolean,
      default: true
    },
    img:{
      type: String,
      default:"https://ssvassgje.in/upload/salon-profile-image/demo/profile.png"
    },
  },
  {
    timestamps: true,
  }
);


// userSchema.statics.comparePublicKey = async (publicKey) =>{
//   try{
//     const user = this;
//     encryptedKey = await bcrypt.hash(publicKey, 8);
//     const isUser = await user.find({publicKey: encryptedKey})
//     return !!isUser
//   }
//   catch(err){
//     console.log("comparePublicKey ===>> Err")
//   }
// }

// userSchema.pre('save', async function (next) {
//   const user = this;
//   if (user.isModified('publicKey')) {
//     user.publicKey = await bcrypt.hash(user.publicKey, 8);
//   }
//   next();
// });

const User = mongoose.model('User', userSchema);

module.exports = User;
