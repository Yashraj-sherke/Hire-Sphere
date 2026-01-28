import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter Job Title"],
    minLength: [3, "Job title must contain at least 3 characters"],
    maxLenght: [50, "Job title cannot exceed "],
  },
  description: {
    type: String,
    required: [true, "Please Enter Job Description"],
    minLength: [3, "Job description must contain at least 3 characters"],
    maxLength: [350, "Job description cannot exceed 350 characters"],
  },
  category: {
    type: String,
    required: [true, "Please Provide Job Category"],
  },
  country: {
    type: String,
    required: [true, "Please Provide the Country"],
  },
  city: {
    type: String,
    required: [true, "Please Provide the City"],
  },
  location: {
    type: String,
    required: [true, "Please Provide Job Location"],
  },
  fixedSalary: {
    type: Number,
  },
  salaryFrom: {
    type: Number,
  },
  salaryTo: {
    type: Number,
  },

  skills: {
    type: String,
    required: [true, "Please Provide Job Skills"],
  },

  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  expired: {
    type: String,
    required: [true, "Please Provide Job Exprired"],
  },

  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Job = mongoose.model("Job", jobSchema);
