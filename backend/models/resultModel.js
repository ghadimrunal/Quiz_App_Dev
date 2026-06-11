// backend/models/resultModel.js
import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    technology: { type: String, required: true, trim: true, lowercase: true },
    level: { type: String, required: true, trim: true, lowercase: true },
    totalQuestions: { type: Number, required: true, min: 1 },
    correct: { type: Number, required: true, min: 0 },
    wrong: { type: Number, required: true, min: 0 },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    userName: { type: String, default: "Anonymous", trim: true },
  },
  { timestamps: true }
);

const Result = mongoose.models.Result || mongoose.model("Result", resultSchema);
export default Result;
