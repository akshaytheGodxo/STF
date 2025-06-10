import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 0) return;

      if (window.scrollY < lastScrollY.current) {
        setShow(true);
      } else {
        setShow(false);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full  bg-opacity-80  backdrop-blur-md transition-transform duration-300 z-50 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center font-[Inter]">
        <div className="flex space-x-8 text-lg cursor-pointer ml-auto">
          <a href="#portfolio" className="hover:text-gray-300">
            Portfolio
          </a>
          <a href="#contacts" className="hover:text-gray-300">
            Contacts
          </a>
          <a href="#about" className="hover:text-gray-300">
            About Us
          </a>
        </div>
      </div>
    </nav>
  );
}
