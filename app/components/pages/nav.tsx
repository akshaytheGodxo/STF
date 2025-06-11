import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 0) return;
      if (window.scrollY < lastScrollY.current) {
        setShow(true);
      } else {
        setShow(false);
        setIsMobileMenuOpen(false);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white dark:bg-transparent bg-opacity-80 backdrop-blur-md transition-transform duration-300 z-50 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex justify-between items-center font-[Inter] text-black dark:text-white">
        {/* Logo */}
        <div className="text-lg font-[Playfair_Display] cursor-pointer">
          <h4>SMALL TICKET FUNDING</h4>
          <span className="w-full block h-[1px] bg-black dark:bg-white"></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden sm:flex space-x-8 text-lg ml-auto">
          <a href="#portfolio" className="hover:text-gray-600 dark:hover:text-gray-300">
            Portfolio
          </a>
          <a href="#contacts" className="hover:text-gray-600 dark:hover:text-gray-300">
            Contacts
          </a>
          <a href="#about" className="hover:text-gray-600 dark:hover:text-gray-300">
            About Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden ml-auto">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none text-black dark:text-white"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-black bg-opacity-95 px-6 pb-4 text-black dark:text-white flex flex-col space-y-4 text-lg">
          <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)}>
            Portfolio
          </a>
          <a href="#contacts" onClick={() => setIsMobileMenuOpen(false)}>
            Contacts
          </a>
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </a>
        </div>
      )}
    </nav>
  );
}
