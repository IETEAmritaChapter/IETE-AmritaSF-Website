"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import gsap from "gsap";
import "../../styles/Event.css";

const EventDisplay = () => {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [imageContainerSize, setImageContainerSize] = useState({
    width: 418,
    height: 557,
  });
  const [marginTop, setMarginTop] = useState("mt-60");
  const [showFullDescription, setShowFullDescription] = useState(false);

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const dateRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);
  const highlightTextRef = useRef(null);

  useEffect(() => {
    fetch("/Assets/events_content.json")
      .then((response) => response.json())
      .then((data) => setEvents(data.events))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      // Responsive sizing logic
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        setIsMobile(screenWidth < 1366);

        const currentImageElement = imageRef.current.querySelector("img");
        if (currentImageElement) {
          const { naturalWidth, naturalHeight } = currentImageElement;
          let newWidth = naturalWidth;
          let newHeight = naturalHeight;

          if (naturalWidth + 100 > screenWidth) {
            newWidth = screenWidth - 100;
            newHeight = (naturalHeight / naturalWidth) * newWidth;
          }

          setImageContainerSize({ width: newWidth, height: newHeight });

          // Set margin-top based on aspect ratio
          const aspectRatio = naturalWidth / naturalHeight;
          if (aspectRatio > 0.9) {
            setMarginTop("mt-36");
          } else {
            setMarginTop("mt-5");
          }
        }
      };

      // Animation setup
      gsap.fromTo(
        [
          dateRef.current,
          titleRef.current,
          descriptionRef.current,
          imageRef.current,
          prevButtonRef.current,
          nextButtonRef.current,
          highlightTextRef.current,
        ],
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      window.addEventListener("resize", handleResize);
      handleResize(); // Initial adjustment
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [currentIndex, events]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < events.length - 1 ? prevIndex + 1 : 0
    );
    setCurrentImageIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : events.length - 1
    );
    setCurrentImageIndex(0);
  };

  const handleImageNext = () => {
    const currentEvent = events[currentIndex];
    setCurrentImageIndex((prevIndex) =>
      prevIndex < currentEvent.image.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleImagePrev = () => {
    const currentEvent = events[currentIndex];
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : currentEvent.image.length - 1
    );
  };

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    const screenWidth = window.innerWidth;
    let newWidth = naturalWidth;
    let newHeight = naturalHeight;

    if (naturalWidth + 100 > screenWidth) {
      newWidth = screenWidth - 100;
      newHeight = (naturalHeight / naturalWidth) * newWidth;
    }

    setImageContainerSize({ width: newWidth, height: newHeight });

    // Set margin-top based on aspect ratio
    const aspectRatio = naturalWidth / naturalHeight;
    if (aspectRatio > 0.9) {
      setMarginTop("mt-36");
    } else {
      setMarginTop("mt-8");
    }
  };

  const handleImageError = (e) => {
    e.target.src = "/Images/not_yet.png";
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  if (events.length === 0) {
    return (
      <div id="events-section" className="flex justify-center items-center h-screen bg-stone-900 text-gray-200">
        Chill...
      </div>
    );
  }

  const currentEvent = events[currentIndex];
  const currentImage = currentEvent.image[currentImageIndex];

  // Animation variants for the image slider
  const imageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <div
    id="events-section"
      className={`
      min-h-screen flex 
      ${isMobile ? "flex-col" : "lg:flex-row"} 
      p-4 lg:p-8 bg-stone-900 text-gray-100
    `}
    >
      {/* Left Content Section */}
      <motion.div
        className={`
          w-full 
          ${isMobile ? "order-2" : "lg:w-1/2"} 
          flex flex-col justify-center pr-0
        `}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Date Display - Positioned differently in mobile view */}
        {!isMobile && (
          <div
            ref={dateRef}
            className="text-2xl lg:text-4xl font-bold text-white mb-4 [font-family:var(--font-montserratb)]"
          >
            {currentEvent.Year === "yet to confirm"
              ? "TBD"
              : `${currentEvent.Day} / ${currentEvent.Month} / ${currentEvent.Year}`}
          </div>
        )}
        {/* Date Display in Mobile View */}
        {isMobile && (
          <div ref={dateRef} className="text-xl font-bold text-white mb-4 [font-family:var(--font-montserratb)]">
            {currentEvent.Year === "yet to confirm"
              ? "TBD"
              : `${currentEvent.Day} / ${currentEvent.Month} / ${currentEvent.Year}`}
          </div>
        )}

        {/* Event Title */}
        <h1
          ref={titleRef}
          className={`
          text-4xl lg:text-6xl font-extrabold text-[#FF5252] mb-6 [font-family:var(--font-montserratb)]
          `}
        >
          <b>{currentEvent.title}</b>
        </h1>
        {/* Image for Mobile View - Inserted between title and description */}
        {isMobile && (
          <div
            ref={imageRef}
            className="relative overflow-hidden rounded-xl shadow-2xl border-2 border-stone-700 mx-auto mb-4"
            style={{
              width: `${imageContainerSize.width}px`,
              height: `${imageContainerSize.height}px`,
            }}
          >
            <motion.img
              key={currentImage}
              src={currentImage}
              alt={currentEvent.title}
              className="object-cover transition-all duration-300 ease-in-out max-w-full max-h-full"
              onLoad={handleImageLoad}
              onError={handleImageError}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />

            {/* Mobile Image Navigation */}
            {currentEvent.image.length > 1 && (
              <>
                <motion.button
                  onClick={handleImagePrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-stone-800/50 text-white rounded-full p-2"
                >
                  <ChevronLeft size={24} />
                </motion.button>
                <motion.button
                  onClick={handleImageNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-stone-800/50 text-white rounded-full p-2"
                >
                  <ChevronRight size={24} />
                </motion.button>
              </>
            )}

            {/* Image Counter */}
            {currentEvent.image.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-stone-900/70 text-gray-200 px-4 py-2 rounded-full">
                {currentImageIndex + 1} / {currentEvent.image.length}
              </div>
            )}
          </div>
        )}

        {/* Description */}
        <p
          ref={descriptionRef}
          className="text-base lg:text-lg text-gray-300 mb-6 text-justify [font-family:var(--font-montserrat)]"
        >
          {isMobile && !showFullDescription
            ? `${currentEvent.description.substring(0, 100)}`
            : currentEvent.description}
          {isMobile && (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={toggleDescription}
            >
              {showFullDescription ? " Read less" : " ..Read more"}
            </span>
          )}
        </p>

        {/* Location, Time, Registration remain the same */}
        <div className="text-base lg:text-lg [font-family:var(--font-montserrat)]">
          <span className="font-semibold text-gray-500">Date : </span>
          <span className="text-gray-200">{currentEvent.Year === "yet to confirm" 
          ? "TBD"
              : `${currentEvent.Day} - ${currentEvent.Month} - ${currentEvent.Year}`}</span>
        </div>
        <div className="text-base lg:text-lg [font-family:var(--font-montserrat)]">
          <span className="font-semibold text-gray-500">Time : </span>
          <span className="text-gray-200">{currentEvent.startsAt}</span>
        </div>
        <div className="mb-4 text-base lg:text-lg [font-family:var(--font-montserrat)]">
          <span className="font-semibold text-gray-500 ">Location : </span>
          <span className="text-gray-200 ">{currentEvent.Location}</span>
        </div>

        
        

        <div className="mb-6 text-base lg:text-lg [font-family:var(--font-montserrat)]">
          {currentEvent.Status === "Past Event" ? (
            <motion.button
              className="bg-gray-500 text-white py-2 px-4 rounded"
              disabled
              whileHover={{ scale: 1.05 }}
            >
              Registration Closed
            </motion.button>
          ) : currentEvent.Registration === "Will open soon" ? (
            <motion.button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              disabled
              whileHover={{ scale: 1.05 }}
            >
              Registrations will open soon
            </motion.button>
          ) : (
            <motion.a
              href={currentEvent.Registration}
              target="_blank"
              className="bg-[#FB923C] text-white py-2 px-4 rounded"
              whileHover={{ scale: 1.05 }}
            >
              Click here to register
            </motion.a>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          <motion.button
            ref={prevButtonRef}
            onClick={handlePrev}
            className="motion-button relative p-0 bg-transparent text-white border border-white/50 rounded-[0.4em] flex justify-center items-center w-[4em] h-[4em] transition-transform transform hover:scale-110"
            whileHover={{ scale: 1.1, rotate: 0 }}
          >
            <ChevronLeft size={24} />
            <div className="button-overlay absolute inset-[-1px]">
              <div className="overlay-corner"></div>
              <div className="overlay-corner top-right"></div>
              <div className="overlay-corner bottom-left"></div>
              <div className="overlay-corner bottom-right"></div>
            </div>
            <span className="[font-family:var(--font-montserrat)] tooltip absolute top-full mt-2 text-xs text-gray-200 bg-stone-800 px-2 py-1 rounded shadow-lg opacity-0 transition-opacity duration-300">
              Prev Event
            </span>
          </motion.button>
          <motion.button
            ref={nextButtonRef}
            onClick={handleNext}
            className="motion-button relative p-0 bg-transparent text-white border border-white/50 rounded-[0.4em] flex justify-center items-center w-[4em] h-[4em] transition-transform transform hover:scale-110"
            whileHover={{ scale: 1.1, rotate: 0 }}
          >
            <ChevronRight size={24} />
            <div className="button-overlay absolute inset-[-1px]">
              <div className="overlay-corner"></div>
              <div className="overlay-corner top-right"></div>
              <div className="overlay-corner bottom-left"></div>
              <div className="overlay-corner bottom-right"></div>
            </div>
            <span className="[font-family:var(--font-montserrat)] tooltip absolute top-full mt-2 text-xs text-gray-200 bg-stone-800 px-2 py-1 rounded shadow-lg opacity-0 transition-opacity duration-300">
              Next Event
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* Right Image Section - Desktop View */}
      {!isMobile && (
        <motion.div
          className={`w-full lg:w-1/2 relative ${marginTop} holdma [font-family:var(--font-montserrat)]`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {currentEvent.image.length > 1 && (
            <div className=" tooltip  absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span
                ref={highlightTextRef}
                className=" inline-block bg-gradient-to-r text-white px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-110 bg-transparent"
              >
                🎉 Click arrows to view our Highlights 🎉
              </span>
            </div>
          )}
          <div
            ref={imageRef}
            className="relative overflow-hidden rounded-xl shadow-2xl border-2  border-stone-700 mx-auto"
            style={{
              width: `${imageContainerSize.width}px`,
              height: `${imageContainerSize.height}px`,
            }}
          >
            <motion.img
              key={currentImage}
              src={currentImage}
              alt={currentEvent.title}
              className="object-cover transition-all duration-300 ease-in-out max-w-full max-h-full"
              onLoad={handleImageLoad}
              onError={handleImageError}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />

            {/* Desktop Image Navigation */}
            {currentEvent.image.length > 1 && (
              <>
                <motion.button
                  onClick={handleImagePrev}
                  className="motion-button absolute left-2 top-1/2 -translate-y-1/2 bg-stone-800/50 text-white rounded-full p-2 hover:bg-stone-700/75 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <ChevronLeft size={24} />
                  <div className="button-overlay">
                    <div className="overlay-corner"></div>
                    <div className="overlay-corner top-right"></div>
                    <div className="overlay-corner bottom-left"></div>
                    <div className="overlay-corner bottom-right"></div>
                  </div>
                  <span className="tooltip absolute top-full mt-2 text-xs -translate-x-8 text-gray-200 bg-stone-800 px-2 py-1 rounded shadow-lg opacity-0 transition-opacity duration-300">
                    Prev Highlight
                  </span>
                </motion.button>
                <motion.button
                  onClick={handleImageNext}
                  className="motion-button absolute right-2 top-1/2 -translate-y-1/2 bg-stone-800/50 text-white rounded-full p-2 hover:bg-stone-700/75 transition"
                  whileHover={{ scale: 1.1 }}
                >
                  <ChevronRight size={24} />
                  <div className="button-overlay">
                    <div className="overlay-corner"></div>
                    <div className="overlay-corner top-right"></div>
                    <div className="overlay-corner bottom-left"></div>
                    <div className="overlay-corner bottom-right"></div>
                  </div>
                  <span className="tooltip absolute top-full mt-2 text-xs -translate-x-10 text-gray-200 bg-stone-800 px-2 py-1 rounded shadow-lg opacity-0 transition-opacity duration-300">
                    Next Highlight
                  </span>
                </motion.button>
              </>
            )}

            {/* Image Counter */}
            {currentEvent.image.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-stone-900/70 text-gray-200 px-4 py-2 rounded-full">
                {currentImageIndex + 1} / {currentEvent.image.length}
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EventDisplay;
