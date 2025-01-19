import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ProfileCard = ({
    name,
    dept,
    year,
    contactEmail,
    instagram,
    linkedin,
    github,
    image = "/Images/team/Saran.png",  // Default placeholder image
}) => {
    const cardRef = useRef(null);
    const textRef = useRef(null);
    const socialsRef = useRef(null);


    const numberToRoman = (num) => {
        const romanNumerals = {
            1: 'I',
            2: 'II',
            3: 'III',
            4: 'IV',
            5: 'V'
        };
        return romanNumerals[num] || num.toString();
    };
    
    const details = `B.Tech ${dept} ${numberToRoman(year)} Year`;

    useEffect(() => {
        const card = cardRef.current;
        const text = textRef.current;
        const socials = socialsRef.current;
        
        if (window.innerWidth > 768) {
            gsap.set(socials, { y: "-100%", opacity: 0 });
        }

        const handleHover = () => {
            if (window.innerWidth > 768) {
                gsap.to(text, { y: "200%", duration: 0.5, ease: "power2.inOut" });
                gsap.to(socials, { y: "0%", opacity: 1, duration: 0.5, ease: "power2.inOut" });
            }
        };

        const handleLeave = () => {
            if (window.innerWidth > 768) {
                gsap.to(text, { y: "0%", duration: 0.5, ease: "power2.inOut" });
                gsap.to(socials, { y: "-100%", opacity: 0, duration: 0.5, ease: "power2.inOut" });
            }
        };

        card.addEventListener("mouseenter", handleHover);
        card.addEventListener("mouseleave", handleLeave);

        return () => {
            card.removeEventListener("mouseenter", handleHover);
            card.removeEventListener("mouseleave", handleLeave);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="rounded-2xl bg-black aspect-[1/1.25] w-full max-w-xs flex flex-col justify-center items-center p-6 relative overflow-hidden"
        >
            <div className="w-4/5 aspect-square flex justify-center items-center">
                <img
                    src={image}
                    alt={`${name}'s Profile Picture`}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="w-full flex-1 relative flex flex-col justify-center items-center mt-4">
                <div
                    ref={textRef}
                    className="text-center space-y-2 w-full px-2 md:transform"
                >
                    <h2 className="text-white text-lg font-[var(--font-montserrat)]">{name}</h2>
                    <p className="text-gray-300 text-md font-[var(--font-montserrat)]">{details}</p>
                </div>

                <div
                    ref={socialsRef}
                    className="md:absolute inset-0 flex justify-center items-center space-x-6 mt-4 md:mt-0 md:transform"
                >
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-2xl md:text-3xl hover:text-orange-400 transition-colors duration-300"
                        >
                            <FaLinkedin />
                        </a>
                    )}
                    {instagram && instagram !== "-" && instagram !== "_" && (
                        <a
                            href={`https://instagram.com/${instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-2xl md:text-3xl hover:text-orange-400 transition-colors duration-300"
                        >
                            <FaInstagram />
                        </a>
                    )}
                    {contactEmail && (
                        <a
                            href={`mailto:${contactEmail}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-2xl md:text-3xl hover:text-orange-400 transition-colors duration-300"
                        >
                            <FaEnvelope />
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-2xl md:text-3xl hover:text-orange-400 transition-colors duration-300"
                        >
                            <FaGithub />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;