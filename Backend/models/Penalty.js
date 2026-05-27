const mongoose = require("mongoose");

const penaltySchema = new mongoose.Schema(
  {
    rental: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rental",
      required: true,
    },
    reader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    overdueDays: {
      type: Number,
      default: 0,
    },
    ratePerDay: {
      type: Number,
      default: 20,
    },
    totalAmount: {
      type: Number,
      default: 0,
    },
    paidAmount: {
      type: Number,
      default: 0,
    },
    waivedAmount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["pending", "partial", "paid", "waived"],
      default: "pending",
    },
    waivedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    waiverReason: {
      type: String,
      default: null,
    },
    waiverApprovedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    payments: [
      {
        amount: { type: Number, required: true },
        method: {
          type: String,
          enum: ["cash", "digital"],
          default: "cash",
        },
        reference: { type: String, default: null },
        collectedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        paidAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Penalty", penaltySchema);