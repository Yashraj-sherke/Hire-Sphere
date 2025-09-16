import app from "./app.js";
import { v2 as cloudinary } from "cloudinary";

try {
  console.log(process.env.CLOUDINARY_API_KEY);
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET, // Click 'View Credentials' below to copy your API secret
    secure: true,
  });
  console.log("Cloudinary connection established");
} catch (err) {
  console.log(err);
}

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

export { cloudinary };
