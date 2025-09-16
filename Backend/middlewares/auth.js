import { catchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const isAuthenticated = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("User not authorised", 400));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.user = await User.findById(decoded.id);
  next();
});
