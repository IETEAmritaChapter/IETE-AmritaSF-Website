import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ProfileCard = ({
    name,
    role="President",
    dept,
    year,
    contactEmail,
    instagram,
    linkedin,
    github,
    image,
    Position
}) => {
    const cardRef = useRef(null);
    const textRef = useRef(null);
    const socialsRef = useRef(null);
    const loadingRef = useRef(null);
    const imageRef = useRef(null);
    const [imageLoaded, setImageLoaded] = useState(false);

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

    let details;
    let isFaculty = false;
    
    if(year) {
        details = `B.Tech ${dept} ${numberToRoman(year)} Year`;
    } else {
        isFaculty = true;
        details = `${Position}`;
    }

    useEffect(() => {
        setImageLoaded(false);
        
        const img = new Image();
        img.src = image;
        
        img.onload = () => {
            if (imageRef.current) {
                imageRef.current.src = image;
                setImageLoaded(true);
            }
        };

        return () => {
            img.onload = null;
        };
    }, [image]);

    useEffect(() => {
        // Loading animation
        if (!imageLoaded && loadingRef.current) {
            gsap.to(loadingRef.current.children, {
                opacity: 0.5,
                stagger: {
                    each: 0.2,
                    repeat: -1,
                    yoyo: true
                },
                duration: 0.5
            });
        }
    }, [imageLoaded]);

    useEffect(() => {
        if (imageLoaded && loadingRef.current) {
            gsap.to(loadingRef.current, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    gsap.fromTo(imageRef.current,
                        {
                            opacity: 0,
                            scale: 0.8
                        },
                        {
                            opacity: 1,
                            scale: 1,
                            duration: 0.5,
                            ease: "back.out(1.2)"
                        }
                    );
                }
            });
        }
    }, [imageLoaded]);

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
            className="rounded-2xl bg-black aspect-[1/1.5] w-full max-w-xs flex flex-col justify-center items-center p-6 relative overflow-hidden"
        >
            <div className="w-4/5 aspect-square flex justify-center items-center relative">
                {!imageLoaded && (
                    <div 
                        ref={loadingRef}
                        className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-2xl"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        </div>
                    </div>
                )}
                <img
                    ref={imageRef}
                    alt={`${name}'s Profile Picture`}
                    className={`w-full h-full rounded-2xl transition-opacity duration-300 ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
                />
            </div>

            <div className="w-full flex-1 relative flex flex-col justify-center items-center mt-4">
                <div
                    ref={textRef}
                    className="text-center space-y-2 w-full px-2 md:transform"
                >
                    <h2 className="text-white text-xl [font-family:var(--font-montserratb)]">{name}</h2>
                    {role && (
                        <p className="text-orange-400 text-base [font-family:var(--font-montserrat)] font-bold">{role}</p>
                    )}
                    <p className={`text-gray-300 ${isFaculty ? 'text-sm' : 'text-md'} [font-family:var(--font-montserrat)]`}>
                        {details}
                    </p>
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