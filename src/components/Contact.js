import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import sleeping from "../assets/sleeping.png";

function Contact() {
  return (
    <div
      id="Contact"
      className="py-20 px-6 bg-[#fffbd4] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    >
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-12 items-center md:items-start">

        {/* LEFT: TEXT + BUTTONS */}
        <div className="flex flex-col items-center md:items-start md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>

          <p className="text-gray-700 max-w-md mb-8">
            Feel free to reach out for opportunities, collaborations, or just to say hi!
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a
              href="mailto:zebazikre@gmail.com"
              className="flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition w-full sm:w-auto"
            >
              <MdEmail className="w-5 h-5" />
              <span>Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/zeba-z-91a7b025b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition w-full sm:w-auto"
            >
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[380px] rounded-xl">
            <img
              alt="zizi sleeping"
              src={sleeping}
              className="w-full h-auto rounded-xl transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
