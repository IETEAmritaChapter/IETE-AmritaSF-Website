"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function MainContent() {
  const imageRef = useRef(null);
  const textRefs = useRef([]);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    // Hover animation for the image
    const hoverAnimation = gsap.to(imageElement, {
      scale: 1.01,
      filter: "grayscale(0%)",
      duration: 0.5,
      ease: "power1.out",
      paused: true,
    });

    const handleMouseEnter = () => hoverAnimation.play();
    const handleMouseLeave = () => hoverAnimation.reverse();

    imageElement.addEventListener("mouseenter", handleMouseEnter);
    imageElement.addEventListener("mouseleave", handleMouseLeave);

    // Scroll-triggered animations
    const scrollAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-content",
        start: "top top",
        end: "bottom+=100 center",
        scrub: true,
        pin: true,
      },
    });

    // Fade-out effect for the Description Section
    scrollAnimation.to(textRefs.current, {
      opacity: 0,
      y: -20,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Fade-in effect for the About Us Section
    scrollAnimation.fromTo(
      aboutSectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: -30, duration: 1.5, ease: "power2.out" },
      "-=0.5"
    );

    return () => {
      imageElement.removeEventListener("mouseenter", handleMouseEnter);
      imageElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="main-content py-20 px-2 text-white rounded-lg">
      {/* Description Section */}
      <div
        className="self-center -mt-12 text-[46px] font-extrabold leading-tight text-center 
        sm:text-[45px] md:text-[46px] lg:text-[55px] xl:text-[72px] 2xl:text-[72px]
        max-md:-mt-6 max-md:max-w-full max-md:text-[30px] 
        tracking-wide [font-family:var(--font-montserratb)]"
        ref={(el) => (textRefs.current[0] = el)}
      >
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:space-x-4">
          <div className="flex flex-col md:flex-row">
            <span className="block">
              DREAM<span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">.</span>
            </span>
            <span className="block md:ml-4">
              DESIGN<span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">.</span>
            </span>
            <span className="block md:ml-4">
              DEVELOP<span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">.</span>
            </span>
          </div>
        </div>
      </div>

      <div
        className="self-center mt-4 text-[24px] leading-8 text-center max-md:max-w-full [font-family:var(--font-montserrat)]"
        ref={(el) => (textRefs.current[1] = el)}
      >
        We are a vibrant, student-run club at{" "}
        <a
          href="https://www.amrita.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent [font-family:var(--font-montserratb)] hover:underline"
        >
          Amrita Vishwa Vidyapeetham, Coimbatore
        </a>
        , bringing together tech enthusiasts to spark creativity and collaboration.
      </div>

      {/* About Us Section */}
      <div
        className="self-center -mt-24 max-md:-mt-24 mb-8 text-[72px] font-extrabold leading-tight text-center max-md:text-[36px] tracking-wide [font-family:var(--font-montserratb)]"
        ref={aboutSectionRef}
      >
        <Link href="/about">
          <button
            className="text-[40px] font-extrabold leading-tight text-center sm:text-[50px] md:text-[45px] lg:text-[50px] xl:text-[72px] 2xl:text-[72px] 
             max-md:text-[30px] bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent [font-family:var(--font-montserratb)] hover:scale-105 transition-transform duration-300"
          >
            ABOUT US
          </button>
        </Link>
        <div
          className="mt-4 mb-10 text-[24px] leading-8 text-center max-md:max-w-full [font-family:var(--font-montserrat)]"
        >
          Our mission is to empower the next generation of innovators through
          hands-on learning, inter disciplinary projects, and practical exposure
          to emerging technologies.
        </div>
      </div>

      {/* Image Section */}
      <div
        className="self-center mt-10 overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        <picture>
          {/* Small and medium screen image */}
          <source
            srcSet="Images/hero/hero-phone.webp"
            media="(max-width: 1024px)"
          />
          {/* Large screen image */}
          <img
            src="/Images/hero/hero-image.webp"
            alt="IETE Student Forum team collaboration"
            ref={imageRef}
            className="object-contain w-full cursor-pointer rounded-3xl hover:scale-105 transition-transform duration-500"
            style={{
              filter: "grayscale(1)",
              transition: "all 0.8s ease-in-out",
            }}
          />
        </picture>
      </div>
    </div>
  );
}
