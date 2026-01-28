import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Job } from "../models/jobSchema.js";

export const getAllJobs = catchAsyncError(async (req, res, next) => {
  const jobs = await Job.find({ expired: false });
  res.status(200).json({
    success: true,
    jobs,
  });
});

export const postJob = catchAsyncError(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler("You are not authorized to acess these resources", 401)
    );
  }

  const {
    title,
    description,
    category,
    country,
    city,
    location,
    fixedSalary,
    salaryFrom,
    salaryTo,
    skills,
    expired,
  } = req.body;
  if (
    !title ||
    !description ||
    !category ||
    !country ||
    !city ||
    !location ||
    !skills ||
    !expired
  ) {
    return next(new ErrorHandler("Please enter all fields", 400));
  }

  if ((!salaryFrom || !salaryTo) && !fixedSalary) {
    return next(
      new ErrorHandler("Please provide either fixed salary or range", 400)
    );
  }

  if (salaryFrom && salaryTo && fixedSalary) {
    return next(
      new ErrorHandler("Please provide either fixed salary or range", 400)
    );
  }
  const postedBy = req.user._id;

  const job = await Job.create({
    title,
    description,
    category,
    country,
    city,
    location,
    fixedSalary,
    salaryFrom,
    salaryTo,
    skills,
    postedBy,
    expired,
  });

  res.status(200).json({
    success: true,
    message: "job posted successfully",
  });
});

export const getMyJobs = catchAsyncError(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler("You are not authorized to acess these resources", 401)
    );
  }
  const myjobs = await Job.find({ postedBy: req.user._id });
  res.status(200).json({
    success: true,
    myjobs,
  });
});

export const updateJob = catchAsyncError(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler("You are not authorized to acess these resources", 401)
    );
  }

  const { id } = req.params;
  let job = await Job.findById(id);
  if (!job) {
    return next(new ErrorHandler("Oops , Job not found", 404));
  }

  job = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    job,
    message: "Job updated successfully",
  });
});

export const deleteJob = catchAsyncError(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Job Seeker") {
    return next(
      new ErrorHandler("You are not authorized to acess these resources", 401)
    );
  }

  const { id } = req.params;
  let job = await Job.findById(id);
  if (!job) {
    return next(new ErrorHandler("Oops , Job not found", 404));
  }

  await job.deleteOne();
  res.status(200).json({
    success: true,
    job,
    message: "Job deleted successfully",
  });
});
