/* eslint-disable no-unused-vars */
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Navbar from "./components/Layout/NavBar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import JobDetails from "./components/Job/JobDetails";
import MyJobs from "./components/Job/MyJobs";
import PostJobs from "./components/Job/PostJob";
import Application from "./components/Application/Application";
import MyApplications from "./components/Application/MyApplications";
import NotFound from "./components/NotFound/NotFound";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, settingAuth } from "./components/slices/userSlice";
function App() {
  // const dispatch = useDispatch();
  // const User = useSelector((state) => state.user.isAuthorized);
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await axios.get(
  //         "http://localhost:4000/api/user/getUser",
  //         { withCredentials: true }
  //       );
  //       dispatch(login(response.data.user));
  //     } catch (error) {
  //       dispatch(settingAuth(false));
  //     }
  //   };
  //   fetchUser();
  // }, [User, dispatch]);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="/job/post" element={<PostJobs />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/application/me" element={<MyApplications />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </>
  );
}

export default App;
