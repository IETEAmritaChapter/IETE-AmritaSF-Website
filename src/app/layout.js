import "@/app/styles/globals.css";
import localFont from "next/font/local";

// Font configurations
const montserrata = localFont({
  src: "./_fonts/MontserratAlternates-Regular.woff",
  variable: "--font-montserrata",
  weight: "400 700",
});

const montserrat = localFont({
  src: "/_fonts/Montserrat-Regular.ttf",
  variable: "--font-montserrat",
  weight: "400 700",
});

const montserratb = localFont({
  src: "/_fonts/Montserrat-ExtraBold.ttf",
  variable: "--font-montserratb",
  weight: "700",
});

export const metadata = {
  title: "IETE SF Website",
  description: "IETE Website by Amrita Chapter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrata.variable} ${montserrat.variable} ${montserratb.variable} antialiased`}
      >
        {/* Main layout container */}
        <div className="flex flex-col min-h-screen px-9 py-9 bg-white text-black max-md:px-5">
          {/* Content container */}
          <div className="flex flex-col px-12 pt-10 pb-24 w-full bg-stone-900 text-white rounded-[29px] max-md:px-5 max-md:pb-16 max-md:max-w-full flex-grow">
            {children}
          </div>
        </div>

        {/* Footer */}
        <div className="footer w-full text-white bg-stone-900">
          <div className="flex flex-wrap justify-between items-center py-2 sm:px-12 max-md:flex-col max-md:items-center max-md:text-center max-md:space-y-4 max-md:py-6">
            {/* Left Section */}
            <div className="left flex flex-col justify-center mb-2 sm:mb-0 max-md:items-center">
              <h2 className="text-[1.4rem] sm:text-[2.5rem] font-[montserratb]">Let's Connect!</h2>
              <p className="text-[0.9rem] sm:text-[1.4rem] font-[montserrat]">ietesf@cb.amrita.edu</p>
              <div className="flex justify-start items-center space-x-4 sm:space-x-6 mt-4 sm:mt-6 max-md:justify-center">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/footer/instagram.png"
                    alt="Instagram"
                    className="w-10 h-10 sm:w-13 sm:h-13"
                  />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/footer/github.png"
                    alt="Github"
                    className="w-10 h-10 sm:w-13 sm:h-13"
                  />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/footer/linkedin.png"
                    alt="LinkedIn"
                    className="w-9 h-9 sm:w-13 sm:h-13"
                  />
                </a>
                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/images/footer/whatsapp.png"
                    alt="Whatsapp"
                    className="w-10 h-10 sm:w-13 sm:h-13"
                  />
                </a>
              </div>
            </div>

            {/* Right Section */}
            <div className="right flex flex-col font-[montserrat] py-6 justify-center max-md:items-center">
              <div className="mb-2 justify-center sm:justify-end md:ml-10 lg:ml-10">
                <img
                  src="/Assets/logo.png"
                  alt="App Development"
                  className="w-24 h-24 sm:w-20 sm:h-20 md:w-24 md:h-24"
                />
              </div>
              <div className="text-white">
                <p className="text-[1rem] sm:text-base md:text-[1.2rem] mt-2">IETE Student Forum</p>
                <p className="text-orange-400 text-[0.9rem] sm:text-base md:text-[1.2rem]">
                  Amrita Coimbatore
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white text-center text-black py-3 font-[montserrat] text-[0.8rem] sm:text-base">
            <p className="text-[0.9rem] sm:text-base md:text-[1.1rem]">Made with 🧡 by IETE Amrita Team 2024-25</p>
          </div>
        </div>
      </body>
    </html>
  );
}
