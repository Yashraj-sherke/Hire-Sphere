export const sendToken = (user, statusCode, res, message) => {
  const Token = user.getJWTToken();
  const isProduction = process.env.NODE_ENV === "production";
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    sameSite: isProduction ? "none" : "lax",
    secure: isProduction,
  };
  res.status(statusCode).cookie("token", Token, options).json({
    success: true,
    user,
    message,
    Token,
  });
};
