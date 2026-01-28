import express from "express";
import {
  deleteJob,
  getAllJobs,
  getMyJobs,
  postJob,
  updateJob,
} from "../controllers/jobController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

router.get("/getall", getAllJobs);
router.post("/post", isAuthenticated, postJob);
router.get("/getmyjobs", isAuthenticated, getMyJobs);
router.put("/updatejob/:id", isAuthenticated, updateJob);
router.delete("/deletejob/:id", isAuthenticated, deleteJob);
export default router;
