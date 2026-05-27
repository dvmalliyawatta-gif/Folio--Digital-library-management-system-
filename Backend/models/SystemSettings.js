const mongoose = require("mongoose");

const systemSettingsSchema = new mongoose.Schema(
  {
    maxRentalLimit: {
      type: Number,
      default: 3,
    },
    reservationHoldDays: {
      type: Number,
      default: 3,
    },
    loanPeriodDays: {
      type: Number,
      default: 21,
    },
    penaltyRatePerDay: {
      type: Number,
      default: 20,
    },
    penaltyWaiverLimit: {
      type: Number,
      default: 500,
    },
    maxPenaltyBalance: {
      type: Number,
      default: 500,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SystemSettings", systemSettingsSchema);