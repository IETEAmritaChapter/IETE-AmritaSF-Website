"use client";

import { useEffect, useRef, useState } from "react";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import ProfileCard from "../components/profilecard";
import gsap from "gsap";
import { useSwipeable } from "react-swipeable";

export default function Home() {
  const navRef = useRef(null);
  const buttonsRef = useRef([]);
  const underlineRefs = useRef([]);
  const headingRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [activeButton, setActiveButton] = useState(0);
  const [jsonData, setJsonData] = useState(null);
  const [allMembers, setAllMembers] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const animateCardsOut = () => {
    return gsap.to(".profile-card", {
      opacity: 0,
      y: 50,
      stagger: {
        amount: 0.3,
        from: "random",
      },
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const animateHeadingOut = () => {
    return gsap.to(headingRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const animateHeadingIn = () => {
    return gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
  };

  const animateCardsIn = () => {
    const cards = document.querySelectorAll(".profile-card");
    const tl = gsap.timeline();

    gsap.set(cards, {
      opacity: 0,
      y: 50,
    });

    tl.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
    });

    return tl;
  };

  const handleVerticalChange = async (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    animateHeadingOut();
    await animateCardsOut();

    setActiveButton(newIndex);

    await new Promise((resolve) => setTimeout(resolve, 50));

    animateCardsIn();
    await animateHeadingIn();

    setIsAnimating(false);
  };

  const handleNext = () => {
    const totalButtons = Object.keys(jsonData).length;
    if (activeButton < totalButtons) {
      handleVerticalChange(activeButton + 1);

      gsap.to(buttonsRef.current[activeButton + 1], {
        backgroundImage: "linear-gradient(to right, #f97316, #ea580c)",
        color: "#fff",
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });

      buttonsRef.current.forEach((button, idx) => {
        if (idx !== activeButton + 1) {
          gsap.to(button, {
            backgroundImage: "none",
            color: "#fff",
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });
    }
  };

  const handlePrev = () => {
    if (activeButton > 0) {
      handleVerticalChange(activeButton - 1);

      gsap.to(buttonsRef.current[activeButton - 1], {
        backgroundImage: "linear-gradient(to right, #f97316, #ea580c)",
        color: "#fff",
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out",
      });

      buttonsRef.current.forEach((button, idx) => {
        if (idx !== activeButton - 1) {
          gsap.to(button, {
            backgroundImage: "none",
            color: "#fff",
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });
    }
  };

  const handleButtonClick = (index) => {
    if (index !== activeButton) {
      handleVerticalChange(index);

      gsap.to(buttonsRef.current[index], {
        backgroundImage: "linear-gradient(to right, #f97316, #ea580c)",
        color: "#fff",
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      buttonsRef.current.forEach((button, idx) => {
        if (idx !== index) {
          gsap.to(button, {
            backgroundImage: "none",
            backgroundColor: "transparent",
            color: "#fff",
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });

      gsap.to(underlineRefs.current[index], {
        scaleX: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/Assets/members.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        // Create the "All" section by combining all members
        const allMembersList = Object.values(data).reduce((acc, team) => {
          return acc.concat(team.data);
        }, []);

        const dataWithAll = {
          ALL: {
            name: "Our",
            data: allMembersList
          },
          ...data
        };

        setJsonData(dataWithAll);
        setAllMembers(allMembersList);

        animateCardsIn();
        animateHeadingIn();
      } catch (error) {
        console.error("Error fetching the JSON data:", error);
      }
    };

    fetchData();

    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
    );

    gsap.fromTo(
      buttonsRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.2)",
      }
    );
  }, []);

  if (!jsonData) {
    return <div>Loading...</div>;
  }

  const verticals = Object.keys(jsonData);

  const handleButtonHover = (index) => {
    if (index !== activeButton) {
      gsap.to(buttonsRef.current[index], {
        scale: 1.2,
        duration: 0.2,
        ease: "power2.out",
      });

      gsap.to(underlineRefs.current[index], {
        scaleX: 1,
        duration: 0.3,
        ease: "power3.out",
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

      gsap.to(underlineRefs.current[index], {
        scaleX: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col" {...swipeHandlers}>
      <div className="w-full text-white text-center">
        <h1 className="text-5xl font-bold [font-family:var(--font-montserratb)]">
        MEET OUR TEAM<span className="text-[#FF5252]">.</span>
        </h1>
      </div>

      <nav
        ref={navRef}
        className="w-full text-white transition-all duration-300 z-50 my-5 h-auto"
      >
        <div className="h-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="lg:hidden h-full flex items-center justify-between gap-2">
            <button
              onClick={handlePrev}
              disabled={activeButton === 0}
              className="p-2 rounded-full hover:bg-orange-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-3xl"
              aria-label="Previous"
            >
              <IoArrowBack size={20} />
            </button>

            <div className="flex-1 text-center">
              <h2 className="text-2xl [font-family:var(--font-montserratb)] font-medium">
                {`${jsonData[verticals[activeButton]]["name"]} ${verticals[activeButton] == 'FACULTY'? '' : 'TEAM'}`}
              </h2>
            </div>

            <button
              onClick={handleNext}
              disabled={activeButton === verticals.length - 1}
              className="text-3xl p-2 rounded-full hover:bg-orange-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <IoArrowForward size={20} />
            </button>
          </div>

          <div className="hidden lg:flex h-full items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={activeButton === 0}
              className="p-2 rounded-full transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <IoArrowBack size={20} />
            </button>

            <div className="flex-1 flex items-center justify-center h-full">
              {verticals.map((name, index) => (
                <div
                  key={index}
                  className="relative h-full flex items-center px-2 group"
                >
                  <button
                    ref={(el) => (buttonsRef.current[index] = el)}
                    onClick={() => handleButtonClick(index)}
                    onMouseEnter={() => handleButtonHover(index)}
                    onMouseLeave={() => handleButtonLeave(index)}
                    className={` 
                      px-6 py-2 rounded-md text-md
                      transition-all duration-300 ease-out
                      [font-family:var(--font-montserrat)]
                      focus:outline-none focus:ring-2 focus:ring-orange-500/50
                      ${
                        activeButton === index
                          ? "bg-gradient-to-r from-orange-400 to-orange-600"
                          : "text-gray-200 hover:text-white"
                      }
                    `}
                  >
                    {name}
                  </button>
                  <div
                    ref={(el) => (underlineRefs.current[index] = el)}
                    className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left scale-x-0 bg-orange-500`}
                  ></div>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={activeButton === verticals.length - 1}
              className="p-2 rounded-full hover:bg-orange-500/20 transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <IoArrowForward size={20} />
            </button>
          </div>
        </div>
      </nav>

      <div className="w-full py-4 flex flex-col items-center">
        <h1
          ref={headingRef}
          className="hidden lg:block text-4xl [font-family:var(--font-montserratb)] text-white mb-8"
        >
          {`${jsonData[verticals[activeButton]]["name"]} ${verticals[activeButton] == 'FACULTY'? '' : 'TEAM'} `}
        </h1>
        <div
          ref={cardsContainerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl px-4"
        >
          {jsonData[verticals[activeButton]]["data"].map((member, index) => (
            <div
              key={index}
              className="flex items-center justify-center profile-card"
            >
              <ProfileCard
                className="opacity-[0]"
                name={member.Name}
                dept={member.Dept}
                year={member.Year}
                contactEmail={member.ContactEmail}
                instagram={member.Instagram}
                linkedin={member.Linkedin}
                github={member.Github}
                image={
                  member.Image
                    ? `${member.Image}`
                    : "https://drive.google.com/thumbnail?id=1GlyRemCDgVnDtukcxVO8FpZmsDi0SbUM"
                }
                role={member.Role}
                Position={member.Position}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}