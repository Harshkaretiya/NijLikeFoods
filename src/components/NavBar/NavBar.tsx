import { useState } from "react";
import { Menu, X } from "lucide-react"; // Importing icons for menu toggle

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const data = [
    { name: "Home", link: "#Home" },
    { name: "Products", link: "#Products" },
    { name: "About Us", link: "#AboutUs" },
    { name: "Contact", link: "#Contact" },
  ];

  return (
    <>
      {/* Floating Navbar */}
      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 w-full max-w-[calc(100%-40px)] lg:max-w-[1000px] bg-white shadow-xl border-2 border-gray-300 rounded-4xl p-3 px-6 flex justify-between items-center z-50">
        {/* Logo */}
        <div>
          <img src="./logo.png" className="h-10 w-10" alt="Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-5">
          {data.map((item, index) => (
            <a
              key={index}
              className={`text-lg font-medium ${
                index === 3 ? "text-[#D20A1B]" : ""
              }`}
              href={item.link}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden h-[28px] my-auto z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Backdrop for better UX (click to close menu) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/5 bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Navigation - Sliding from Right */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden flex flex-col gap-5 py-10 px-6 z-50`}
      >
        {/* Close Button Inside Drawer */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 focus:outline-none"
        >
          <X size={28} />
        </button>

        {/* Navigation Links */}
        {data.map((item, index) => (
          <a
            key={index}
            className={`text-lg font-medium ${
              index === 3 ? "text-[#D20A1B]" : ""
            }`}
            href={item.link}
            onClick={() => setIsOpen(false)} // Close menu when clicking a link
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
};

export default NavBar;
