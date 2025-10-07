"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const styles = `
  .nav-links {
    display: flex;
    gap: 40px;
  }
  
  .nav-link {
    font-size: 16px;
  }
  
  @media (max-width: 1080px) {
    .nav-links {
      gap: 20px;
    }
    
    .nav-link {
      font-size: 14px;
    }
  }
  
  @media (max-width: 830px) {
    .nav-links {
      gap: 12px;
    }
    
    .nav-link {
      font-size: 12px;
    }
  }
  
  .menu-button {
    display: none;
  }
  
  .mobile-menu {
    display: none;
  }
  
  @media (max-width: 700px) {
    .nav-links {
      display: none;
    }
    
    .menu-button {
      display: block;
    }
    
    .mobile-menu {
      display: block;
    }
  }
`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-xl">
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1170px' }}>
        <div className="flex items-center justify-between" style={{ height: '90px' }}>
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/Logo/cropped-mgedu.png"
                alt="Mega Global EDUCATION"
                width={290}
                height={92}
                className="h-16 lg:h-22 w-auto"
                priority
              />
            </Link>
          </div>

          <nav className="nav-links">
            <Link 
              href="https://megaeducations.com/courses/" 
              className="relative group text-red-600 font-medium nav-link after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-red-600 after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
              target="_self"
            >
              Courses
            </Link>
            <Link 
              href="/" 
              className="relative text-red-600 font-semibold nav-link after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-red-600 after:opacity-100 after:scale-x-100"
              target="_self"
            >
              French Courses
            </Link>
            <Link 
              href="https://megaeducations.com/about-us/" 
              className="relative group text-red-600 font-medium nav-link after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-red-600 after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
              target="_blank"
            >
              About Us
            </Link>
            <Link 
              href="https://megaeducations.com/news/" 
              className="relative group text-red-600 font-medium nav-link after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-red-600 after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
              target="_blank"
            >
              News
            </Link>
            <Link 
              href="https://megaeducations.com/portfolio-masonry-2/" 
              className="relative group text-red-600 font-medium nav-link after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-red-600 after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
              target="_blank"
            >
              Events
            </Link>
            <Link 
              href="https://megaeducations.com/contact-3/" 
              className="relative group text-red-600 font-medium nav-link after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-red-600 after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
              target="_blank"
            >
              Contact
            </Link>
            <Link 
              href="https://education.megaeducations.com/" 
              className="relative group text-red-600 font-medium nav-link after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-red-600 after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
              target="_blank"
            >
              Online Learning
            </Link>
          </nav>

          <div className="flex-shrink-0">
            <div className="flex items-center gap-4">
              <div className="menu-button">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-red-600 hover:text-red-800 focus:outline-none focus:text-red-800"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-end">
                <Image
                  src="/Logo/IELTSPROMOCODE.png"
                  alt="IELTS"
                  width={185}
                  height={66}
                  className="h-12 2xl:h-15 w-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link 
                href="https://megaeducations.com/courses/" 
                className="relative group text-red-600 font-medium block px-3 py-2 text-sm after:absolute after:left-3 after:-bottom-0.5 after:h-[2px] after:w-[calc(100%-24px)] after:origin-left after:scale-x-0 after:bg-red-600 after:opacity-0 after:transition-all after:duration-200 hover:after:scale-x-100 hover:after:opacity-100"
                target="_self"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                href="/" 
                className="relative text-red-600 font-semibold block px-3 py-2 text-sm after:absolute after:left-3 after:-bottom-0.5 after:h-[2px] after:w-[calc(100%-24px)] after:bg-red-600 after:opacity-100 after:scale-x-100"
                target="_self"
                onClick={() => setIsMenuOpen(false)}
              >
                French Courses
              </Link>
              <Link 
                href="https://megaeducations.com/about-us/" 
                className="relative group text-red-600 block px-3 py-2 text-sm after:absolute after:left-3 after:-bottom-0.5 after:h-[2px] after:w-[calc(100%-24px)] after:bg-red-600 after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="https://megaeducations.com/news/" 
                className="relative group text-red-600 block px-3 py-2 text-sm after:absolute after:left-3 after:-bottom-0.5 after:h-[2px] after:w-[calc(100%-24px)] after:bg-red-600 after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link 
                href="https://megaeducations.com/portfolio-masonry-2/" 
                className="relative group text-red-600 block px-3 py-2 text-sm after:absolute after:left-3 after:-bottom-0.5 after:h-[2px] after:w-[calc(100%-24px)] after:bg-red-600 after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                href="https://megaeducations.com/contact-3/" 
                className="relative group text-red-600 block px-3 py-2 text-sm after:absolute after:left-3 after:-bottom-0.5 after:h-[2px] after:w-[calc(100%-24px)] after:bg-red-600 after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="https://education.megaeducations.com/" 
                className="relative group text-red-600 block px-3 py-2 text-sm after:absolute after:left-3 after:-bottom-0.5 after:h-[2px] after:w-[calc(100%-24px)] after:bg-red-600 after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100"
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
              >
                Online Learning
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
}
