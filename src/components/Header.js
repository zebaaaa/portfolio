
import React, { useState } from "react";

import { scrollToSection } from "../utils/scroll";

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const sections = ["Home","Skills","Projects","Contact"]

    const handleNavigation = (sectionId) => {
    scrollToSection(`#${sectionId}`, 90);
    setIsOpen(false); 
};
 return(
    // fixed  w-full max-w-xl mx-auto  px-3 py-1 bg-gray-800/70 backdrop-blur-md rounded-full bg-[#fffbd4] bg-gray-800/50  backdrop-blur-sm  
    // bg-[#fffbd4] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] -translate-x-1/2 
<div className="py-0">
    <nav className="
  fixed top-4 
  left-4 md:left-1/2 
  md:-translate-x-1/2
  w-auto px-3 py-1
  bg-white backdrop-blur-sm
  rounded-full shadow-md z-50
  flex items-center md:justify-center md:flex md:gap-4
">

<div className="flex justify-between items-center md:hidden py-1 px-2">
    <span className="text-lg font-bold text-[#474747]"></span>
    <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-2xl font-bold p-1 focus:outline-none "
        aria-label="Toggle navigation menu"
    >
        {isOpen ? "✕" : "☰"} {/* Display X when open, ☰ when closed */}
    </button>
        </div>
    <ul
  className={`
    ${isOpen ? "block" : "hidden"} 
    md:flex md:items-center md:gap-3 md:justify-center
    
    absolute top-full left-1/2 -translate-x-1/2 mt-0
    max-w-xs bg-white p-4 rounded-xl shadow-lg

     md:w-auto md:bg-transparent md:p-0 md:shadow-none md:mt-0 md:relative
  `}
>
       {sections.map((section) => (
            <li key={section} >
               <button
                onClick={() => handleNavigation(section)}               
                className="px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-200/70 transition-all"
               >
                {section}
                </button>                                                                                                                                                 
            </li>
        ))} 
    </ul>
</nav>
</div>


);

}
export default Header;
