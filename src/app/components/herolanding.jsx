"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation"; // Import of useRouter
import gsap from "gsap";

export default function MainContent() {
  const imageRef = useRef(null);
  const dreamSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const router = useRouter(); // Initialization of the router

  useEffect(() => {
    // Hover animation for the image
    const imageElement = imageRef.current;
    const hoverAnimation = gsap.to(imageElement, {
      scale: 1.1,
      filter: "grayscale(0%)",
      duration: 0.5,
      ease: "power1.out",
      paused: true,
    });

    const handleMouseEnter = () => hoverAnimation.play();
    const handleMouseLeave = () => hoverAnimation.reverse();

    imageElement.addEventListener("mouseenter", handleMouseEnter);
    imageElement.addEventListener("mouseleave", handleMouseLeave);

    // Scroll-triggered animation
    const scrollAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-content",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    // Fade-out "DREAM DESIGN DEVELOP" section
    scrollAnimation.to(dreamSectionRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Fade-in "ABOUT US" section
    scrollAnimation.to(
      aboutSectionRef.current,
      { opacity: 1, duration: 1, ease: "power2.out" },
      "<"
    );

    return () => {
      imageElement.removeEventListener("mouseenter", handleMouseEnter);
      imageElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Function to handle navigation to About Us page
  const navigateToAboutUs = () => {
    router.push("/components/about"); // Navigate to about.jsx
  };

  return (
    <div className="main-content relative">
      {/* DREAM DESIGN DEVELOP Section */}
      <div
        className="flex flex-col items-center justify-center text-center mt-3 max-md:mt-2 px-4"
        ref={dreamSectionRef}
      >
        <div className="text-9xl font-extrabold leading-none max-md:text-5xl [font-family:var(--font-montserratb)]">
          DREAM
          <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">.</span> DESIGN
          <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">.</span> DEVELOP
          <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">.</span>
        </div>
        <div className="mt-2 text-4xl leading-10 max-md:text-xl [font-family:var(--font-montserrat)]">
          We are a vibrant, student-run club at{" "}
          <span className="font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent [font-family:var(--font-montserratb)]">
            Amrita Vishwa Vidyapeetham, Coimbatore
          </span>
          , bringing together tech enthusiasts to spark creativity and
          collaboration.
        </div>
      </div>

      {/* Image Section */}
      <div className="self-center mt-4 overflow-hidden rounded-3xl max-md:mt-2">
        <Image
          loading="lazy"
          src="/Images/hero/hero-image.webp"
          alt="IETE Student Forum team collaboration"
          width={1286}
          height={286}
          ref={imageRef}
          className="object-contain w-full cursor-pointer"
          style={{
            filter: "grayscale(1)",
            transition: "all 0.8s ease-in-out",
          }}
        />
      </div>

      {/* ABOUT US Section */}
      <div
        className="flex flex-col items-center justify-center text-center mt-4 max-md:mt-2"
        ref={aboutSectionRef}
      >
        <button
          onClick={navigateToAboutUs} // Call navigate function on click
          className="text-7xl font-extrabold leading-none max-md:text-3xl [font-family:var(--font-montserratb)] bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent cursor-pointer"
        >
          ABOUT US
        </button>
        <div className="mt-2 text-3xl leading-10 max-md:text-xl [font-family:var(--font-montserrat)]">
          Our mission is to empower the next generation of innovators through hands-on learning, interdisciplinary projects, and practical exposure to emerging technologies.
        </div>
      </div>
    </div>
  );
}
