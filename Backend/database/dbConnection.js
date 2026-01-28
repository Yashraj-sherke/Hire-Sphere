import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "HIRE_LAND",
    })
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));
};
