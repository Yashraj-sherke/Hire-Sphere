import { application } from "express";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Application } from "../models/applicationSchema.js";
import { cloudinary } from "../server.js";
import { Job } from "../models/jobSchema.js";

export const employerGetAllApplications = catchAsyncError(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Job Seeker") {
      return next(
        new ErrorHandler("You are not authorized to acess these resources", 401)
      );
    }
    const { _id } = req.user;

    const applications = await Application.find({ "employerID.user": _id });
    res.status(200).json({
      success: true,
      applications,
    });
  }
);

export const jobSeekerGetAllApplications = catchAsyncError(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Employer") {
      return next(
        new ErrorHandler("You are not authorized to acess these resources", 401)
      );
    }
    const { _id } = req.user;

    const applications = await Application.find({ "applicantID.user": _id });
    res.status(200).json({
      success: true,
      applications,
    });
  }
);

export const jobSeekerdDeleteApplication = catchAsyncError(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Employer") {
      return next(
        new ErrorHandler("Employer cannot delete the application", 401)
      );
    }
    const { id } = req.params;

    const applications = await Application.findById(id);
    if (!applications) {
      return next(new ErrorHandler("Application not found", 404));
    }
    await applications.deleteOne();
    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
    });
  }
);

export const postApplication = catchAsyncError(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ErrorHandler(
        "Employer is not authorized to acess these resources",
        401
      )
    );
  }
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Please upload your resume", 400));
  }
  const { resume } = req.files;

  const allowedExtensions = ["image/png", "image/jpg", "image/webp"];
  if (!allowedExtensions.includes(resume.mimetype)) {
    return next(
      new ErrorHandler(
        "Invalid file type,Please upload you resume in PNG,JPEG or WEBP",
        400
      )
    );
  }

  const cloudinaryResponse = await cloudinary.uploader.upload(
    resume.tempFilePath
  );
  if (!cloudinaryResponse || cloudinaryResponse.error) {
    return next(
      new ErrorHandler(
        "Cloudinary Error:",
        cloudinaryResponse.error.message || "Unknown cloudinary error",
        500
      )
    );
  }

  const { name, email, phone, coverLetter, address, appplicantID, jobId } =
    req.body;
  const applicantID = {
    user: req.user._id,
    role: "Job Seeker",
  };
  if (!jobId) {
    return next(new ErrorHandler("Job not found!", 404));
  }
  const jobDetails = await Job.findById(jobId);
  if (!jobDetails) {
    return next(new ErrorHandler("Job not found!", 404));
  }
  const employerID = {
    user: jobDetails.postedBy,
    role: "Employer",
  };

  if (!name || !email || !phone || !coverLetter || !address || !jobId) {
    return next(new ErrorHandler("Please fill all the fields", 400));
  }

  const application = await Application.create({
    name,
    email,
    phone,
    coverLetter,
    address,
    resume: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
    applicantID,
    employerID,
    jobId,
  });
  res.status(200).json({
    success: true,
    message: "Application submitted successfully",
    application,
  });
});
