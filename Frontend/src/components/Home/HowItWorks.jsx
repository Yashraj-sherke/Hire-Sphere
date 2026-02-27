import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How <span className="gradient-text">Hire Sphere</span> Works</h3>
          <div className="banner">
            <div className="card">
              <span className="step-number">01</span>
              <FaUserPlus />
              <p>Create Account</p>
              <p>
                Sign up easily using your email. Enjoy a user-friendly interface
                that makes the registration process quick and simple.
              </p>
            </div>
            <div className="card">
              <span className="step-number">02</span>
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p>
                Employers can post detailed job listings to attract the right
                talent, while job seekers can browse and filter job postings to
                find suitable opportunities.
              </p>
            </div>
            <div className="card">
              <span className="step-number">03</span>
              <IoMdSend />
              <p>Apply For Job/Recruit Suitable Candidates</p>
              <p>
                Job seekers can submit tailored applications directly through
                the platform. Employers can review applications and hire
                the best candidate all within the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
