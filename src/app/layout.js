import "../app/styles/globals.css";
import localFont from "next/font/local";
import Footer from "./components/footer";
import Nav from "./components/navbar/Nav";

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
    {/* Main layout container with reduced padding */}
    <div className="flex flex-col min-h-screen px-6 py-6 bg-white text-black max-md:px-2 max-md:py-4">
      {/* Content container */}
      <div className="flex flex-col px-10 pt-8 pb-20 w-full bg-stone-900 text-white rounded-[29px] max-md:px-2 max-md:pb-8 max-md:max-w-full flex-grow">
        {/* Navbar */}
        <div className="sticky top-0 left-0 pt-5 w-full z-[100] bg-stone-900">
        <Nav/>
        </div>
        
        {/* Children */}
        {children}
      </div>
    </div>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
