// import React from "react";
// import { MdEmail } from "react-icons/md";
// import { FaLinkedin } from "react-icons/fa";
// import sleeping from "../assets/sleeping.png";
// function Contact() {
//   return (
//     <div
//       id="Contact"
//       className="py-24 px-6 bg-[#fffbd4] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] flex flex-col items-center text-left"
//     >
//       <h2 className="text-3xl font-bold mb-6 text-left">Get In Touch</h2>
//       <p className="text-gray-700 max-w-md mb-10">
//         Feel free to reach out for opportunities, collaborations, or just to say hi!
//       </p>

//       <div className="flex gap-6">
//         {/* Email */}
//         <a
//           href="mailto:zeba@example.com"
//           className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-md hover:shadow-lg transition"
//         >
//           <MdEmail className="w-5 h-5" />
//           <span>Email</span>
//         </a>

//         {/* LinkedIn */}
//         <a
//           href="https://www.linkedin.com/in/your-profile"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-md hover:shadow-lg transition"
//         >
//           <FaLinkedin className="w-5 h-5" />
//           <span>LinkedIn</span>
//         </a>
//       </div>
//       <div className=" rounded-xl w-full md:w-[200px] ">
//         <img alt="zizi sleeping" src={sleeping} />
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React from "react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import sleeping from "../assets/sleeping.png";

function Contact() {
  return (
    <div
      id="Contact"
      className="py-24 px-6 bg-[#fffbd4] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"
    >
      {/* This is the new main container for the two-column layout. 
        It uses 'flex' and 'justify-between' (space between columns) 
        and 'max-w-6xl mx-auto' to center the entire section on the page 
        and give it a maximum width.
      */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto gap-12 items-center md:items-start">
        
        {/* LEFT COLUMN: Text Content & Buttons */}
        <div className="flex flex-col items-center md:items-start md:w-1/2">
          
          {/*
            The 'text-left' on the h2 will now work because its parent 
            (this div) is no longer centered by 'items-center'.
          */}
          <h2 className="text-3xl font-bold mb-6 text-left">Get In Touch</h2>
          
          <p className="text-gray-700 max-w-md mb-10 text-center md:text-left">
            Feel free to reach out for opportunities, collaborations, or just to say hi!
          </p>

          <div className="flex gap-6 mb-8">
            {/* Email */}
            <a
              href="mailto:zebazikre@gmail.com"
              className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-md hover:shadow-lg transition"
            >
              <MdEmail className="w-5 h-5" />
              <span>Email</span>
            </a>

            {/* LinkedIn */}
            <a
              href="www.linkedin.com/in/zeba-z-91a7b025b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white px-5 py-3 rounded-full shadow-md hover:shadow-lg transition"
            >
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Character Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="rounded-xl w-full max-w-[350px] pr-10">
            <img alt="zizi sleeping" src={sleeping} className="w-full h-auto hover:scale-125" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;