

import { useState } from "react";

const Footer = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <footer className="flex w-full max-w-[1440px] mx-auto items-center justify-center pt-10 sm:pt-14 md:pt-[60px] lg:pt-[80px] pb-8 sm:pb-10 md:pb-[35px] lg:pb-[45px] px-4 sm:px-6 md:px-[30px] lg:px-[40px] bg-[#0D1323]">
      <div className="flex w-full items-center flex-col gap-8 sm:gap-12 md:gap-[50px] lg:gap-[77px]">
        {/* Footer Top Section */}
        <div className="flex w-full flex-col md:flex-row px-0 sm:px-6 md:px-[20px] lg:px-[40px] xl:px-[80px] items-center justify-between gap-8 md:gap-0">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-[10px] w-auto sm:w-[192px]">
            <img src="/logo.png" alt="Firefly Security Logo" className="w-[28px] sm:w-[33px] h-[35px] sm:h-[40px] aspect-[33/40]" />
            <img src="/logo-text.png" alt="Firefly Security" className="w-[120px] sm:w-[142px]" />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden flex flex-col justify-center items-center p-2 rounded-md text-white hover:text-[#FDED1B] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle footer menu"
          >
            {isMobileMenuOpen ? "Close Menu" : "Menu & Social"}
          </button>

          {/* Navigation and Social Icons - Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-[40px] xl:gap-[80px]">
            <ul className="flex py-4 md:py-[20px] items-center gap-3 md:gap-4 lg:gap-[20px] xl:gap-[30px]">
              <a href="/">
                <li className="cursor-pointer hover:text-[#FDED1B] data-[state=active]:text-[#FDED1B] text-white font-Open text-base sm:text-lg lg:text-[18px] xl:text-[20px] font-semibold">Home</li>
              </a>
              <a href="/services">
                <li className="cursor-pointer hover:text-[#FDED1B] data-[state=active]:text-[#FDED1B] text-white font-Open text-base sm:text-lg lg:text-[18px] xl:text-[20px] font-semibold">Services</li>
              </a>
              <a href="/company">
                <li className="cursor-pointer hover:text-[#FDED1B] data-[state=active]:text-[#FDED1B] text-white font-Open text-base sm:text-lg lg:text-[18px] xl:text-[20px] font-semibold">Company</li>
              </a>
              <a href="/resources">
                <li className="cursor-pointer hover:text-[#FDED1B] data-[state=active]:text-[#FDED1B] text-white font-Open text-base sm:text-lg lg:text-[18px] xl:text-[20px] font-semibold">Resources</li>
              </a>
              <a href="/contact">
                <li className="cursor-pointer hover:text-[#FDED1B] data-[state=active]:text-[#FDED1B] text-white font-Open text-base sm:text-lg lg:text-[18px] xl:text-[20px] font-semibold">Contact</li>
              </a>
            </ul>
            <div className="flex items-center gap-4 sm:gap-[24px]">
              <a href="#" aria-label="Twitter">
                <img src="/twitter.png" alt="Twitter" className="w-5 h-5 sm:w-[24px] sm:h-[24px] aspect-square hover:opacity-80" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src="/facebook.png" alt="Facebook" className="w-5 h-5 sm:w-[24px] sm:h-[24px] aspect-square hover:opacity-80" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src="/instagram.png" alt="Instagram" className="w-5 h-5 sm:w-[24px] sm:h-[24px] aspect-square hover:opacity-80" />
              </a>
              <a href="#" aria-label="Mail">
                <img src="/mail.png" alt="Mail" className="w-5 h-5 sm:w-[24px] sm:h-[24px] aspect-square hover:opacity-80" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation and Social Icons */}
          {isMobileMenuOpen && (
            <div className="md:hidden w-full flex flex-col items-center gap-6">
              <ul className="flex flex-col w-full items-center gap-4 py-4">
                <a href="/" className="w-full text-center">
                  <li className="cursor-pointer hover:text-[#FDED1B] data-[state=active]:text-[#FDED1B] text-white font-Open text-lg font-semibold py-2">Home</li>
                </a>
                <a href="/services" className="w-full text-center">
                  <li className="cursor-pointer hover:text-[#FDED1B] data-[state=active]:text-[#FDED1B] text-white font-Open text-lg font-semibold py-2">Services</li>
                </a>
                <a href="/company" className="w-full text-center">
                  <li className="cursor-pointer hover:text-[#FDED1B] data-[state=active]:text-[#FDED1B] text-white font-Open text-lg font-semibold py-2">Company</li>
                </a>
                <a href="/resources" className="w-full text-center">
                  <li className="cursor-pointer hover:text-[#FDED1B] data-[state=active]:text-[#FDED1B] text-white font-Open text-lg font-semibold py-2">Resources</li>
                </a>
                <a href="/contact" className="w-full text-center">
                  <li className="cursor-pointer hover:text-[#FDED1B] data-[state=active]:text-[#FDED1B] text-white font-Open text-lg font-semibold py-2">Contact</li>
                </a>
              </ul>
              <div className="flex items-center justify-center gap-6 py-4">
                <a href="#" aria-label="Twitter">
                  <img src="/twitter.png" alt="Twitter" className="w-6 h-6 aspect-square hover:opacity-80" />
                </a>
                <a href="#" aria-label="Facebook">
                  <img src="/facebook.png" alt="Facebook" className="w-6 h-6 aspect-square hover:opacity-80" />
                </a>
                <a href="#" aria-label="Instagram">
                  <img src="/instagram.png" alt="Instagram" className="w-6 h-6 aspect-square hover:opacity-80" />
                </a>
                <a href="#" aria-label="Mail">
                  <img src="/mail.png" alt="Mail" className="w-6 h-6 aspect-square hover:opacity-80" />
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Footer Bottom Section */}
        <div className="flex w-full flex-col items-center gap-4 sm:gap-[20px]">
          <hr className="w-full bg-[#3E4550] h-[1px]"/>
          <p className="text-[#FDED1B] font-Inter text-xs sm:text-[14px] font-normal leading-normal sm:leading-[20px] text-center px-4">
            2025 Firefly Security® Zero Trust Cyber Security. All rights reserved. {""}
            <span className="text-[#FDED1B] font-Inter text-xs sm:text-[14px] underline font-normal leading-normal sm:leading-[20px] cursor-pointer hover:text-[#FDED1B] ml-1">Privacy Policy</span>
          </p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
 