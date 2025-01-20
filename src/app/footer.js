import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer w-full text-white bg-stone-900">
      <div className="flex flex-wrap justify-between items-center py-2 sm:px-12 max-md:flex-col max-md:items-center max-md:text-center max-md:space-y-4">
        {/* Left Section */}
        <div className="left flex flex-col justify-center mb-2 sm:mb-0 max-md:items-center">
          <h2 className="text-[28px] sm:text-[38px] font-[montserratb]">Let's Connect !</h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-[1.3rem] font-[montserrat]">
            ietesf@cb.amrita.edu
          </p>
          <div className="flex justify-start items-center space-x-4 sm:space-x-6 mt-4 sm:mt-6 max-md:justify-center">
            <Link href="https://www.instagram.com/iete_amrita/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/footer/instagram.png"
                alt="Instagram"
                width={40}
                height={40}
                className="w-10 h-10 sm:w-13 sm:h-13"
              />
            </Link>
            <Link href="https://github.com/IETEAmritaChapter" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/footer/github.png"
                alt="Github"
                width={40}
                height={40}
                className="w-10 h-10 sm:w-13 sm:h-13"
              />
            </Link>
            <Link href="https://www.linkedin.com/in/iete-amrita-sf/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/footer/linkedin.png"
                alt="LinkedIn"
                width={36}
                height={36}
                className="w-9 h-9 sm:w-13 sm:h-13"
              />
            </Link>
            <Link href="https://chat.whatsapp.com/EaQtTt7U4ClKEz26g9ddii" target="_blank" rel="noopener noreferrer">
              <Image
                src="/images/footer/whatsapp.png"
                alt="Whatsapp"
                width={40}
                height={40}
                className="w-10 h-10 sm:w-13 sm:h-13"
              />
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="right flex flex-col font-[montserrat] py-6 justify-center max-md:items-center p-8">
          <div className="mb-2 justify-center sm:justify-end md:ml-10 lg:ml-10">
            <Link href="/">
              <Image
                src="/Assets/logo.png"
                alt="App Development"
                width={128}
                height={128}
                className="w-24 h-24 sm:w-20 sm:h-20 md:w-32 md:h-32"
              />
          </Link>
          </div>
          <div className="text-white">
            <p className="text-[1rem] sm:text-base md:text-[1.2rem] mt-2">IETE Student Forum</p>
            <p className="text-orange-400 text-[0.9rem] sm:text-base md:text-[1.2rem]">
              Amrita Coimbatore
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white text-center text-black py-1 font-[montserrat] text-[0.8rem] sm:text-base">
        <p className="text-[0.8rem] sm:text-base md:text-[1rem]">
          <span className="text-[0.9rem] sm:text-base md:text-[1.1rem]">&copy;</span> IETE Amrita Team 2024-25
        </p>
      </div>
    </div>
  );
};

export default Footer;
