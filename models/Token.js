const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
  tokenId: { type: String, required: true, unique: true },
  creator: { type: String, required: true, lowercase: true },
  amount: { type: Number, required: true },
  expirationTime: { type: Number, required: false },
  minBalance: {
    tokenAddress: { type: String, required: false, lowercase: true },
    amount: { type: Number, required: false },
  },
  holders: [{ type: String, lowercase: true }],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Token", tokenSchema);
