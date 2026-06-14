import React, { useState } from "react";
import "./FAQ.css";

const faqs = [
  {
    id: 1,
    question: "What is Hirrd?",
    answer:
      "Hirrd is a Job Portal Application allows companies to post job listings and users to search and apply for jobs. It provides features for both job seekers and employers, with user-friendly interfaces and secure authentication.",
  },
  {
    id: 2,
    question: "How do I post a job?",
    answer:
      "As an employer, you can post a job by navigating to the 'Post Job' section after logging in. Fill in the job details and submit the form to create a new job listing.",
  },
  {
    id: 3,
    question: "How can I search for jobs?",
    answer:
      "Job seekers can search for jobs by keywords, location, category, and other filters using the search bar on the homepage or the dedicated job search page.",
  },
  {
    id: 4,
    question: "How do I apply for a job?",
    answer:
      "To apply for a job, click on the job listing and follow the application instructions provided. You may need to upload your resume and provide additional information.",
  },
  {
    id: 5,
    question: "Can I save jobs to apply later?",
    answer:
      "Yes, you can save job listings by clicking the 'Save Job' button on the job listing. Saved jobs can be accessed from your profile under the 'Saved Jobs' section.",
  },
  {
    id: 6,
    question: "How do I track my job applications?",
    answer:
      "Job seekers can track the status of their applications from the 'Applications' section in their profile. This section provides updates on the progress of each application.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faqs_container">
      {faqs.map((faq) => (
        <div key={faq.id}>
          <h3 onClick={() => toggleFAQ(faq.id)} className="single_faq">
            {faq.question}
          </h3>

          {openId === faq.id && <p>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
