"use client";

import { useEffect, useRef, useState } from "react";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import ProfileCard from "../components/profilecard";
import gsap from "gsap";

export default function Home() {
  const navRef = useRef(null);
  const buttonsRef = useRef([]);
  const [activeButton, setActiveButton] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 20);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { 
        y: -100, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power3.out" 
      }
    );

    gsap.fromTo(
      buttonsRef.current,
      { 
        y: -20, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.2)"
      }
    );
  }, []);

  const handleButtonClick = (index) => {
    setActiveButton(index);

    gsap.to(buttonsRef.current[index], {
      backgroundColor: "#f97316",
      color: "#fff",
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });

    buttonsRef.current.forEach((button, idx) => {
      if (idx !== index) {
        gsap.to(button, {
          backgroundColor: "transparent",
          color: "#fff",
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    });
  };

  const handleButtonHover = (index) => {
    if (index !== activeButton) {
      gsap.to(buttonsRef.current[index], {
        scale: 1.05,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  const handleButtonLeave = (index) => {
    if (index !== activeButton) {
      gsap.to(buttonsRef.current[index], {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav
        ref={navRef}
        className={`w-full text-white transition-all duration-300 z-50 `}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-4">
            <button
              className="p-2 rounded-full hover:bg-orange-500/20 transition-all duration-300 transform hover:scale-110 min-w-[40px]"
              aria-label="Previous"
            >
              <IoArrowBack size={20} />
            </button>

            <div className="flex items-center justify-center flex-grow gap-4">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="relative group">
                  <button
                    ref={(el) => (buttonsRef.current[index] = el)}
                    onClick={() => handleButtonClick(index)}
                    onMouseEnter={() => handleButtonHover(index)}
                    onMouseLeave={() => handleButtonLeave(index)}
                    className={`
                      px-6 py-2 rounded-md text-sm font-medium
                      transition-all duration-300 ease-out
                      hover:bg-orange-500/20 min-w-[100px]
                      focus:outline-none focus:ring-2 focus:ring-orange-500/50
                      ${
                        activeButton === index
                          ? "bg-orange-500 text-white shadow-lg"
                          : "text-gray-200 hover:text-white"
                      }
                    `}
                  >
                    Button {index + 1}
                  </button>
                  {/* Animated underline */}
                  <div className={`
                    absolute bottom-0 left-0 w-full h-0.5
                    transform origin-left scale-x-0 
                    transition-transform duration-300 ease-out
                    bg-orange-500
                    ${activeButton === index ? 'scale-x-100' : 'group-hover:scale-x-100'}
                  `}></div>
                </div>
              ))}
            </div>

            <button
              className="p-2 rounded-full hover:bg-orange-500/20 transition-all duration-300 transform hover:scale-110 min-w-[40px]"
              aria-label="Next"
            >
              <IoArrowForward size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="pt-24">
        {[...Array(8)].map((_, sectionIndex) => (
          <div
            key={sectionIndex}
            className="flex-1 overflow-y-auto p-8"
          >
            <div className="flex flex-wrap justify-between gap-4 mb-8">
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
              <ProfileCard />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}