"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function MainContent() {
  const imageRef = useRef(null);
  const textRefs = useRef([]);
  const isDefaultPage = useRef(true);

  const handleImageClick = () => {
    const timeline = gsap.timeline();
    if (isDefaultPage.current) {
      timeline
        .to(".main-content", { opacity: 0, duration: 0.5, ease: "power1.out" })
        .call(() => {
          document.querySelector(".main-content").innerHTML = `
            <div class="self-center mt-32 text-7xl font-extrabold leading-none text-center max-md:mt-10 max-md:max-w-full max-md:text-3xl [font-family:var(--font-montserratb)]">
  <button class="about-button bg-clip-text text-white cursor-pointer">
    ABOUT US<span class="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">.</span>
  </button>
</div>
            <div class="self-center mt-4 text-3xl leading-10 text-center max-md:max-w-full [font-family:var(--font-montserrat)]">
              Our mission is to empower the next generation of innovators through hands-on learning, interdisciplinary projects, and practical exposure to emerging technologies.
            </div>
            <img
              src="/Images/hero/hero-image.webp"
              alt="IETE Student Forum team collaboration"
              class="object-contain self-end mt-16 mb-0 w-full rounded-3xl aspect-[4.5] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full rounded-2xl cursor-pointer"
            />
          `;
          isDefaultPage.current = false;

          // Add event listener for button click
          document.querySelector(".about-button").addEventListener("click", () => {
            window.location.href = "/about-us"; // Redirect to About Us page
          });

          // Apply animations to the new content
          const aboutTextRefs = document.querySelectorAll(".self-center");
          gsap.fromTo(
            aboutTextRefs,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", stagger: 0.2 }
          );
        })
        .fromTo(".main-content", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power1.in" });
    } else {
      timeline
        .to(".main-content", { opacity: 0, duration: 0.5, ease: "power1.out" })
        .call(() => {
          document.querySelector(".main-content").innerHTML = `
            <div
              class="self-center mt-32 text-7xl font-extrabold leading-none text-center max-md:mt-10 max-md:max-w-full max-md:text-3xl [font-family:var(--font-montserratb)]"
            >
              DREAM<span class="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">.</span> DESIGN
              <span class="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">.</span> DEVELOP
              <span class="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">.</span>
            </div>
            <div
              class="self-center mt-4 text-3xl leading-10 text-center max-md:max-w-full [font-family:var(--font-montserrat)]"
            >
              We are a vibrant, student-run club at{" "}
              <span class="font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent [font-family:var(--font-montserratb)]">
                Amrita Vishwa Vidyapeetham, Coimbatore
              </span>
              , bringing together tech enthusiasts to spark creativity and collaboration.
            </div>
            <img
              src="/Images/hero/hero-image-bw.webp"
              alt="IETE Student Forum team collaboration"
              class="object-contain self-end mt-16 mb-0 w-full rounded-3xl aspect-[4.5] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full rounded-2xl cursor-pointer"
              style="filter: grayscale(100%);"
            />
          `;
          isDefaultPage.current = true;

          // Apply animations to the new content
          const defaultTextRefs = document.querySelectorAll(".self-center");
          gsap.fromTo(
            defaultTextRefs,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", stagger: 0.2 }
          );
        })
        .fromTo(".main-content", { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power1.in" });
    }
  };

  useEffect(() => {
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

    gsap.fromTo(
      textRefs.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", stagger: 0.2 }
    );

    return () => {
      imageElement.removeEventListener("mouseenter", handleMouseEnter);
      imageElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="main-content" style={{ transform: "scale(0.97)", transformOrigin: "center center" }}>
      <div
        className="self-center mt-32 text-7xl font-extrabold leading-none text-center max-md:mt-10 max-md:max-w-full max-md:text-3xl [font-family:var(--font-montserratb)]"
        ref={(el) => (textRefs.current[0] = el)}
      >
        DREAM<span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">.</span> DESIGN
        <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">.</span> DEVELOP
        <span className="text-transparent bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text">.</span>
      </div>
      <div
        className="self-center mt-4 text-3xl leading-10 text-center max-md:max-w-full [font-family:var(--font-montserrat)]"
        ref={(el) => (textRefs.current[1] = el)}
      >
        We are a vibrant, student-run club at{" "}
        <span className="font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent [font-family:var(--font-montserratb)]">
          Amrita Vishwa Vidyapeetham, Coimbatore
        </span>
        , bringing together tech enthusiasts to spark creativity and collaboration.
      </div>

      <Image
        loading="lazy"
        src="/Images/hero/hero-image-bw.webp"
        alt="IETE Student Forum team collaboration"
        width={1286}
        height={286}
        ref={imageRef}
        onClick={handleImageClick}
        className="object-contain self-end mt-16 mb-0 w-full rounded-3xl aspect-[4.5] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full rounded-2xl cursor-pointer"
        style={{ filter: "grayscale(100%)" }}
      />
    </div>
  );
}
