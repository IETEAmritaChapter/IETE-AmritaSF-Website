"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import gsap from "gsap";
import "../styles/Event.css";
import { montserratb } from "../layout.js";

const EventDisplay = () => {
  const [events, setEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageContainerSize, setImageContainerSize] = useState({
    width: 418,
    height: 557,
  });

  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const imageRef = useRef(null);
  const dateRef = useRef(null);

  useEffect(() => {
    fetch("/assets/events_content.json")
      .then((response) => response.json())
      .then((data) => setEvents(data.events))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  useEffect(() => {
    if (events.length > 0) {
      // Staggered Entry Animation
      gsap.fromTo(
        [
          dateRef.current,
          titleRef.current,
          descriptionRef.current,
          imageRef.current,
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

      // Adjust image container size based on screen width
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        console.log(screenWidth);

        let newWidth, newHeight;

        if (screenWidth < 365) {
          newWidth = 200;
          newHeight = 226;
        } else if (screenWidth >= 365 && screenWidth < 380) {
          newWidth = 250;
          newHeight = 300;
        } else if (screenWidth >= 380 && screenWidth < 768) {
          newWidth = 320;
          newHeight = 426;
        } else {
          newWidth = 418;
          newHeight = 557;
        }

        setImageContainerSize({ width: newWidth, height: newHeight });
      };

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

  const cornersVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
      },
    },
  };

  const cornerItemVariants = {
    hover: {
      scale: 1.1,
      rotate: 45,
    },
  };

  if (events.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-stone-900 text-gray-200">
        Loading events...
      </div>
    );
  }

  const currentEvent = events[currentIndex];
  const currentImage = currentEvent.image[currentImageIndex];

  return (
    <div className="min-h-screen flex flex-col lg:flex-row p-4 lg:p-8 bg-stone-900 text-gray-100">
      {/* Left Content Section */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Date Display */}
        <div
          ref={dateRef}
          className="text-4xl lg:text-6xl font-bold text-white mb-4"
        >
          {currentEvent.Year === "yet to confirm"
            ? "TBD"
            : `${currentEvent.Day} / ${currentEvent.Month} / ${currentEvent.Year}`}
        </div>

        {/* Event Title */}
        <h1
          ref={titleRef}
          className={`text-3xl lg:text-5xl font-bold text-cyan-300 mb-6 ${montserratb.variable}`}
        >
          {currentEvent.title}
        </h1>

        {/* Description */}
        <p
          ref={descriptionRef}
          className="text-lg text-gray-300 mb-6 text-justify"
        >
          {currentEvent.description}
        </p>

        {/* Location */}
        <div className="mb-4">
          <span className="font-semibold text-gray-500">Location : </span>
          <span className="text-gray-200">{currentEvent.Location}</span>
        </div>

        {/* Start Time */}
        <div className="mb-4">
          <span className="font-semibold text-gray-500">Time : </span>
          <span className="text-gray-200">{currentEvent.startsAt}</span>
        </div>

        {/* Registration */}
        <div className="mb-6">
          <span className="font-semibold text-gray-500">Registration : </span>
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
              className="bg-yellow-500 text-white py-2 px-4 rounded"
              disabled
              whileHover={{ scale: 1.05 }}
            >
              Registrations will open soon
            </motion.button>
          ) : (
            <motion.a
              href={currentEvent.Registration}
              className="bg-blue-500 text-white py-2 px-4 rounded"
              whileHover={{ scale: 1.05 }}
            >
              Click here to register
            </motion.a>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex space-x-4">
          {/* Previous Event Button */}
          <motion.button
            onClick={handlePrev}
            aria-label="previous slide"
            data-slider="button-prev"
            className="relative p-0 bg-transparent text-white border border-white/50 rounded-[0.4em] flex justify-center items-center w-[4em] h-[4em] transition-transform duration-[0.475s] hover:opacity-40 hover:scale-[0.85]"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <ChevronLeft size={24} />
            <div className="absolute inset-[-1px]">
              <div className="overlay-corner"></div>
              <div className="overlay-corner top-right"></div>
              <div className="overlay-corner bottom-left"></div>
              <div className="overlay-corner bottom-right"></div>
            </div>
          </motion.button>

          {/* Next Event Button */}
          <motion.button
            onClick={handleNext}
            aria-label="next slide"
            data-slider="button-next"
            className="relative p-0 bg-transparent text-white border border-white/50 rounded-[0.4em] flex justify-center items-center w-[4em] h-[4em] transition-transform duration-[0.475s] hover:opacity-40 hover:scale-[0.85]"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <ChevronRight size={24} />
            <div className="button-overlay absolute inset-[-1px]">
              <div className="overlay-corner"></div>
              <div className="overlay-corner top-right"></div>
              <div className="overlay-corner bottom-left"></div>
              <div className="overlay-corner bottom-right"></div>
            </div>
          </motion.button>
        </div>
      </motion.div>

      {/* Right Image Slideshow Section */}
      <motion.div
        className="w-full lg:w-1/2 mt-8 lg:mt-0 relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          ref={imageRef}
          className="relative overflow-hidden rounded-xl shadow-2xl border-2 mt-20 p border-stone-700 mx-auto"
          style={{
            width: `${imageContainerSize.width}px`,
            height: `${imageContainerSize.height}px`,
          }}
        >
          <motion.img
            src={currentImage}
            alt={currentEvent.title}
            className="object-cover transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Image Navigation */}
          {currentEvent.image.length > 1 && (
            <>
              <motion.button
                onClick={handleImagePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-stone-800/50 text-white rounded-full p-2 hover:bg-stone-700/75 transition"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                onClick={handleImageNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-stone-800/50 text-white rounded-full p-2 hover:bg-stone-700/75 transition"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
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
      </motion.div>
    </div>
  );
};

export default EventDisplay;