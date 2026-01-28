import { useSelector } from "react-redux";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const User = useSelector((state) => state.user);
  return (
    <footer className={User.isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; 2025 Hire Sphere. All rights reserved By Yashraj.</div>
      <div>
        <Link to={"/"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"/"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"/"} target="_blank">
          <FaLinkedin />
        </Link>
      </div>
    </footer>
  );
}
