import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="nav_bar custom_container">
          <p>CareerHub</p>
          <button>Login</button>
        </div>
      </div>

      <div className="custom_container">
        <div className="quotes">
          <p>Find your dream job and get hired</p>
        </div>

        <div className="desc">
          <p>Explore thousands of job listings or find the perfect candidate</p>
        </div>

        <div className="btns">
          <button className="find_job_btn">Find Jobs</button>
          <button className="post_job_btn">Post a Job</button>
        </div>

        <div className="companies-wrapper">
          <div className="companies-track">
            {/* First Set */}
            <img src="/companies/amazon.svg" alt="Amazon" />
            <img src="/companies/atlassian.svg" alt="Atlassian" />
            <img src="/companies/google.webp" alt="Google" />
            <img src="/companies/ibm.svg" alt="IBM" />
            <img src="/companies/meta.svg" alt="Meta" />
            <img src="/companies/microsoft.webp" alt="Microsoft" />
            <img src="/companies/netflix.png" alt="Netflix" />
            <img src="/companies/uber.svg" alt="Uber" />

            {/* Duplicate Set */}
            <img src="/companies/amazon.svg" alt="Amazon" />
            <img src="/companies/atlassian.svg" alt="Atlassian" />
            <img src="/companies/google.webp" alt="Google" />
            <img src="/companies/ibm.svg" alt="IBM" />
            <img src="/companies/meta.svg" alt="Meta" />
            <img src="/companies/microsoft.webp" alt="Microsoft" />
            <img src="/companies/netflix.png" alt="Netflix" />
            <img src="/companies/uber.svg" alt="Uber" />
          </div>
        </div>

        <div className="banner">
          <img src="/banner.png" alt="Banner" className="banner_img" />
        </div>

        <div className="descriptions">
          <div className="for_job_seekers">
            <h3>For Job Seekers</h3>
            <p>Search and apply for jobs, track applications, and more.</p>
          </div>

          <div className="for_employers">
            <h3>For Employers</h3>
            <p>Post jobs, manage applications, and find the best candidates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
