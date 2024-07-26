import React from "react";
import { FaRegFileCode } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/iakbaraly/
" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="https://leetcode.com/u/akbaraly/" target="_blank" className="items">
            <FaRegFileCode className="icons" />
          </a>
          <a href="https://www.linkedin.com/in/akbar-ali-b2275a245
" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="https://twitter.com/imakbar15" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/akbaralyy" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:akbaralya7n@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
