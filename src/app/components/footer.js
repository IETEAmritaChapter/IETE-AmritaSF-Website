import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer w-full text-black bg-white px-12 py-0">
      <div className="flex flex-wrap justify-between items-center sm:px-5 max-md:flex-col max-md:items-center max-md:text-center max-md:space-y-4">
        {/* Left Section */}
        <div className="left flex flex-col justify-center mb-2 sm:mb-0 max-md:items-center">
          <h2 className="text-[28px]  sm:text-[40px] font-[montserratb]">
            Let's Connect!
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-[1.3rem] font-[montserrat]">
            <Link
              href="mailto:ietesf@cb.amrita.edu"
              className="hover:underline hover:transition-all"
            >
              ietesf@cb.amrita.edu
            </Link>
          </p>
          <div className="flex justify-start items-center space-x-4 sm:space-x-6 mt-4 sm:mt-6 max-md:justify-center">
            <Link
              href="https://www.instagram.com/iete_amrita/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Images/socials/Instagram.png"
                alt="Instagram"
                className=" w-10 h-10 sm:w-13 sm:h-13 filter invert"
              />
            </Link>
            <Link
              href="https://github.com/IETEAmritaChapter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Images/socials/GitHub.png"
                alt="Github"
                className=" w-10 h-10 sm:w-13 sm:h-13 filter invert"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/iete-amrita-sf/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Images/socials/LinkedIn.png"
                alt="LinkedIn"
                className=" w-9 h-9 sm:w-13 sm:h-13 filter invert"
              />
            </Link>
            <Link
              href="https://chat.whatsapp.com/EaQtTt7U4ClKEz26g9ddii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Images/socials/Whatsapp.png"
                alt="Whatsapp"
                className=" w-10 h-10 sm:w-13 sm:h-13 filter invert"
              />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="right flex flex-col font-[montserrat] py-6 justify-center max-md:items-center p-8">
          <div className="mb-2 justify-center sm:justify-end md:ml-10 lg:ml-10">
            <Link href="/">
              <img
                src="/Assets/logo.png"
                alt="App Development"
                className="logo w-24 h-24 sm:w-20 sm:h-20 md:w-32 md:h-32 filter invert"
              />
            </Link>
          </div>
          <div className="text-black">
            <p className="text-[1rem] sm:text-base md:text-[1.2rem] mt-2">
              IETE Student Forum
            </p>
            <p className="text-orange-400 text-[0.9rem] sm:text-base md:text-[1.2rem]">
              Amrita Coimbatore
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white text-center text-black py-1 font-[montserrat] text-[0.8rem] sm:text-base">
        <p className="text-[0.8rem] sm:text-base md:text-[1rem]">
          <span className="text-[0.9rem] sm:text-base md:text-[1.1rem]">
            {/* &copy; */}
          </span>{" "}
          {/* IETE Amrita Team 2024-25 */}
          Made with 🧡 by IETE Amrita Team 2024-25
        </p>
      </div>
    </div>
  );
};

export default Footer;
