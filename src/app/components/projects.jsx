import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div className="flex items-center flex-col mt-10 md:mt-0 md:flex-row-reverse justify-center">
        <Image
          src="/Images/hero/project.webp"
          alt="AmritaGPT"
          width={1000}
          height={1000}
          className="w-full md:w-[60%] object-cover transition-transform duration-500 ease-in-out hover:scale-110 -rotate-3 hover:brightness-105 hover:-translate-y-2"
        />

        <div className="px-3 md:pl-8">
          <h1 className="[font-family:var(--font-montserrat)] py-2 text-orange-400">
            Project Showcase
          </h1>
          <h1 className="[font-family:var(--font-montserratb)] text-xl md:text-3xl">
            AmritaGPT
          </h1>
          <p className="[font-family:var(--font-montserrat)] text-justify text-sm md:text-lg">
            AmritaGPT is a chatbot designed to answer all Amrita Viswa
            Vidyapeetham related questions, covering topics such as clubs,
            placements, entrance exams, and more. The system facilitates
            text-to-text conversation as well as speech-to-text and
            text-to-speech functionalities. 🤖📚🎙️
          </p>
          <Link
            href="https://github.com/SaranDharshanSP/AmritaGPT"
            target="_blank"
            className="bg-orange-500 flex items-center gap-2 [font-family:var(--font-montserrat)] justify-center font-montserrat px-4 py-2 mt-3 rounded-lg w-fit transition-all duration-300 hover:scale-105 hover:bg-orange-600"
          >
            <Image
              src="/Images/socials/GitHub.png"
              alt="Github"
              width={30}
              height={30}
              className=""
            />
            <h1 className="text-white font-medium">View on GitHub</h1>
          </Link>
        </div>
      </div>

      <div className="px-3 mt-10 md:mt-0 md:pl-8 md:w-[100%]">
        <h1 className="[font-family:var(--font-montserrat)] py-2 text-orange-400">
          Project Showcase
        </h1>
        <h1 className="[font-family:var(--font-montserratb)] text-xl md:text-3xl leading-[110%]">
          Railway Alert System with OpenVINO and Neural Compressor
        </h1>
        <p className="[font-family:var(--font-montserrat)] text-justify text-sm md:text-lg">
          {isExpanded || window.innerWidth >= 768
            ? `Trespassing on railway tracks poses a significant safety hazard, leading to accidents involving individuals and wildlife. Our system addresses this critical issue by leveraging advanced detection technologies to identify unauthorized presence on tracks in real time. Utilizing computer vision, IoT sensors, and AI-driven analytics, the system promptly detects movement and sends immediate alerts to authorities, enabling swift action to prevent potential incidents. Designed for efficiency and scalability, this solution enhances railway safety by minimizing trespassing risks and ensuring proactive intervention, ultimately protecting lives and maintaining secure railway operations. 🚆⚠️`
            : "Trespassing on railway tracks poses a significant safety hazard, leading to accidents involving individuals and wildlife. Our system addresses this critical issue by leveraging advanced detection technologies..."}
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-orange-500 hover:underline md:hidden"  
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
        <Link
          href="https://github.com/balasuriyaranganathan/human-detection-in-railway-using-openvino"
          target="_blank"
          className="bg-orange-500 flex items-center gap-2 [font-family:var(--font-montserrat)] justify-center font-montserrat px-4 py-2 mt-3 rounded-lg w-fit transition-all duration-300 hover:scale-105 hover:bg-orange-600"
        >
          <Image
            src="/Images/socials/GitHub.png"
            alt='GitHub logo'
            width={30}
            height={30}
            className=""
          />
          <h1 className="text-white font-medium">View on GitHub</h1>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
