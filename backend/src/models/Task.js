import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    details: {
      type: String,
      trim: true,
      default: ""
    },
    status: {
      type: String,
      enum: ["todo", "done"],
      default: "todo"
    },
    owner: {
      type: String,
      trim: true,
      default: "Non assignée"
    },
    priority: {
      type: String,
      enum: ["faible", "moyenne", "haute"],
      default: "moyenne"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
