"use client";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const VerticalCard = () => {
    const cardRef = useRef(null);
    const textRef = useRef(null);
    const socialsRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        const text = textRef.current;
        const socials = socialsRef.current;

        gsap.set(socials, { y: "-100%", opacity: 0 });

        card.addEventListener("mouseenter", () => {
            gsap.to(text, { y: "200%", duration: 0.5, ease: "power2.inOut" });
            gsap.to(socials, { y: "0%", opacity: 1, duration: 0.5, ease: "power2.inOut" });
        });

        card.addEventListener("mouseleave", () => {
            gsap.to(text, { y: "0%", duration: 0.5, ease: "power2.inOut" });
            gsap.to(socials, { y: "-100%", opacity: 0, duration: 0.5, ease: "power2.inOut" });
        });
    }, []);

    return (
        <div
            ref={cardRef}
            className="rounded-2xl bg-black w-[300px] flex flex-col items-center p-6 relative overflow-hidden"
        >
            {/* Image Container */}
            <div className="w-[50%] flex justify-center items-center">
                <img
                    src="/Images/team/Saran.png"
                    alt="Profile Picture"
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Content Container */}
            <div className="w-[100%] relative flex flex-col justify-center items-center mt-4">
                {/* Text Container */}
                <div
                    ref={textRef}
                    className="text-center space-y-2"
                >
                    <h1 className="text-white text-2xl font-bold">PRESIDENT</h1>
                    <h2 className="text-white text-2xl">Saran Dharshan</h2>
                    <p className="text-gray-300 text-lg">B.Tech AIE III year</p>
                </div>

                {/* Social Icons */}
                <div
                    ref={socialsRef}
                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center space-x-10"
                >
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-4xl hover:text-orange-400 transition-colors duration-300"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-4xl hover:text-orange-400 transition-colors duration-300"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="mailto:example@example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-4xl hover:text-orange-400 transition-colors duration-300"
                    >
                        <FaEnvelope />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default VerticalCard;
