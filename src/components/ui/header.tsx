
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { Dropdown } from "../dropdown";

const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Use regular useEffect for body overflow management
  useState(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsActive(!isActive);
  };

  const isPathActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex w-full mx-auto items-center justify-center mt-[28px] py-2 sm:py-[7px] px-4 sm:px-6 md:px-10 lg:px-[40px] xl:px-[77px] bg-[#000]">
      <div className="flex w-full items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-[10px] w-auto sm:w-[192px]">
          <img onClick={() => window.location.href = "/"} src="/dental-logo.png" alt="Dental Logo" className="absolute z-10 w-[100px] sm:w-[200px] h-[100px] sm:h-[200px] aspect-square cursor-pointer" />
        </div>

        {/* Mobile menu button */}
        <button
          className="flex lg:hidden flex-col justify-center items-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current mb-1.5 transition-transform ${isActive ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-opacity ${isActive ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current mt-1.5 transition-transform ${isActive ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 lg:gap-[30px] xl:gap-[42px]">
          <ul className="flex py-4 sm:py-[20px] items-center gap-4 lg:gap-[20px] xl:gap-[30px]">
            <li className="cursor-pointer uppercase font-Poppins text-base sm:text-lg lg:text-[16px] xl:text-[20px] font-normal">
              <Link
                to="/"
                className={`group relative uppercase pb-2 text-white  ${isPathActive("/") ? "text-white" : "text-white"}`}
              >
                <span className="relative">
                  Home
                  <span className="absolute bottom-0 left-0 w-0  h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>

            <Dropdown menuActive={isActive} />

            <a href="/company">
              <li className="cursor-pointer uppercase font-Poppins text-base sm:text-lg lg:text-[16px] xl:text-[20px] font-normal">
                <Link
                  to="/"
                  className={`group relative uppercase pb-2 text-white  ${isPathActive("/") ? "text-white" : "text-white"}`}
                >
                  <span className="relative">
                    Our Packages
                    <span className="absolute bottom-0 left-0 w-0  h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </a>

            <a href="/resources">
              <li className="cursor-pointer uppercase font-Poppins text-base sm:text-lg lg:text-[16px] xl:text-[20px] font-normal">
                <Link
                  to="/"
                  className={`group relative uppercase pb-2 text-white  ${isPathActive("/") ? "text-white" : "text-white"}`}
                >
                  <span className="relative">
                    Denatal Health Tips
                    <span className="absolute bottom-0 left-0 w-0  h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </a>

            <a href="/contact">
              <li className="cursor-pointer uppercase font-Poppins text-base sm:text-lg lg:text-[16px] xl:text-[20px] font-normal">
                <Link
                  to="/"
                  className={`group relative uppercase pb-2 text-white  ${isPathActive("/") ? "text-white" : "text-white"}`}
                >
                  <span className="relative">
                    Blogs
                    <span className="absolute bottom-0 left-0 w-0  h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </a>
          </ul>
        </div>

        <button className="relative hidden lg:flex h-10 sm:h-[42px] border-[3px] border-white rounded-[20px] bg-transparent px-[18px]  py-[12px] items-center gap-3 sm:gap-[12px]">
          <span className="text-white font-Langar text-base sm:text-lg lg:text-[16px] xl:text-[20px] font-semibold">
            Book Now
          </span>
          <ArrowRightIcon className="w-4 h-4 stroke-[3px] text-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[50px] left-0 right-0 bg-[#036E64] border-t border-[#036E64] z-0 shadow-lg">
          <div className="px-4 py-3 space-y-1">
            <ul className="flex flex-col space-y-4 py-3">
              <a href="/" onClick={toggleMenu}>
                <li className="cursor-pointer hover:text-[#036E64] data-[state=active]:text-[#036E64] text-white font-Poppins text-lg font-semibold">
                  Home
                </li>
              </a>
              <Dropdown menuActive={isActive} />
              <a href="/our-packages" onClick={toggleMenu}>
                <li className="cursor-pointer hover:text-[#036E64] data-[state=active]:text-[#036E64] text-white font-Poppins text-lg font-semibold">
                  Our Packages
                </li>
              </a>
              <a href="/dental-health-tips" onClick={toggleMenu}>
                <li className="cursor-pointer hover:text-[#036E64] data-[state=active]:text-[#036E64] text-white font-Poppins text-lg font-semibold">
                  Dental Health Tips
                </li>
              </a>
              <a href="/blogs" onClick={toggleMenu}>
                <li className="cursor-pointer hover:text-white data-[state=active]:text-white text-white font-Open text-lg font-semibold">
                  Blogs 
                </li>
              </a>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;