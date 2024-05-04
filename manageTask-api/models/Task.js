const mongoose = require("mongoose");
const slugify = require("slugify");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    validate: {
      validator: async function (value) {
        const count = await this.constructor.countDocuments({
          user: this.user,
          title: value,
        });
        return count === 0; // Returns true if count is 0 (i.e., the key is unique for this user), false otherwise
      },
      message: "This title is already used by another task.",
    },
    maxlength: [60, "Title cannot be more than 50 characters"],
  },
  slug: String,
  description: {
    type: String,
    maxlength: [500, "Description cannot be more than 500 characters"],
  },
  taskType: {
    type: Number,
    required: [true, "Please add a task type"],
    enum: [
      0, // single task
      1, // road map
    ],
  },
  startDate: {
    type: Date,
    required: [true, "Please add a start date"],
  },
  endDate: {
    type: Date,
    required: [true, "Please add a end date"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

TaskSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model("Habits", TaskSchema);
