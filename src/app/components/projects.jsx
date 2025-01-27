import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex items-center flex-col mt-10 md:mt-0 md:flex-row-reverse justify-center">
      <Image
        src="/Images/hero/project.webp"
        alt="Amrita GPT"
        width={1000}
        height={1000}
        className="w-full md:w-[60%] object-cover transition-transform duration-500 ease-in-out hover:scale-110 hover:-rotate-3 hover:opacity-90 hover:brightness-110 hover:-translate-y-2"
      />

      <div className="px-3 md:pl-8 ">
        <h1 className="[font-family:var(--font-montserrat)] py-2 text-orange-400">
          Project Showcase
        </h1>
        <h1 className="[font-family:var(--font-montserratb)] text-3xl md:text-5xl">
          AmritaGPT
        </h1>
        <p className="[font-family:var(--font-montserrat)] text-justify text-sm md:text-lg">
          AmritaGPT is a chatbot designed to answer all Amrita Viswa
          Vidyapeetham related questions, covering topics such as clubs,
          placements, entrance exams, and more. The system facilitates
          text-to-text conversation as well as speech-to-text and text-to-speech
          functionalities. 🤖📚🎙️
        </p>
        <Link
          href="https://github.com/SaranDharshanSP/AmritaGPT"
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
