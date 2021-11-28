const mongoose = require('mongoose');

const coinSchema = mongoose.Schema(
  {
    name:{
      type: String,
      trim: true,
      required: true
    },
    symbol:{
      type: String,
      trim: true,
      required: true,
      uppercase: true
    },
    description:{
      type: String,
      trim: true,
    },
    logo:{
      type: String,
      trim: true,
    },
    price:{
      type: Number
    },
    marketCap:{
      type: Number
    },
    launchDate:{
      type: Date
    },
    isPresale:{
        type: Boolean,
        default: false
    },
    additionalInfo:{
        type: String,
        trim: true,
    },
    binanceSmartChain:{
      type: String,
      required: true,
    },
    websiteUrl:{
      type: String,
    },
    telegramUrl:{
      type: String,
    },
    twitterUrl:{
      type: String,
    },
    additionalInformation:{
      type: String,
    },
    isApproved:{
      type: Boolean,
      default: false
    },
    totalApprovedReports:{
      type: Number,
      default: 0
    },
    voteValue:{
      type:"Number",
      default:0
    },
    voteCount:{
      type: Object,
      default:{
        normaleVoteCount: 0,
        silverVoteCount:0,
        goldVoteCount:0
      },
      normaleVoteCount:{
        type:Number,
        default:0
      },
      silverVoteCount:{
        type: Number,
        default:0
      },
      goldVoteCount:{
        type:Number,
        default:0
      }
      
    },
    commentIds:[
      mongoose.Schema.Types.ObjectId
    ],
    reportIds:[
      mongoose.Schema.Types.ObjectId
    ],
  },
  {
    timestamps: true,
  }
);

const Coin = mongoose.model('Coin', coinSchema);

module.exports = Coin;
