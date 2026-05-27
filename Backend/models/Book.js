const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    authors: {
      type: [String],
      required: [true, "At least one author is required"],
    },
    isbn: {
      type: String,
      required: [true, "ISBN is required"],
      unique: true,
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },
    genre: {
      type: [String],
      default: [],
    },
    publisher: {
      type: String,
      trim: true,
    },
    publishedYear: {
      type: Number,
    },
    language: {
      type: String,
      default: "English",
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    coverImage: {
      type: String,
      default: null,
    },
    totalStock: {
      type: Number,
      required: [true, "Stock count is required"],
      min: [0, "Stock cannot be negative"],
    },
    availableStock: {
      type: Number,
      min: [0, "Available stock cannot be negative"],
    },
    status: {
      type: String,
      enum: ["active", "archived"],
      default: "active",
    },
  },
  { timestamps: true }
);

// Set availableStock equal to totalStock on new book creation
bookSchema.pre("save", function (next) {
  if (this.isNew) {
    this.availableStock = this.totalStock;
  }
  next();
});

// Full-text search index
bookSchema.index({ title: "text", authors: "text", description: "text" });

module.exports = mongoose.model("Book", bookSchema);