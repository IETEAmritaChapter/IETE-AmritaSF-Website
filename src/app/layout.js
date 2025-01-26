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
        {/* Main layout container */}
        <div className="flex flex-col min-h-screen px-9 py-9 bg-white text-black max-md:px-5">
          {/* Content container */}
          <div className="flex flex-col px-12 pt-10 pb-24 w-full bg-stone-900 text-white rounded-[29px] max-md:px-5 max-md:pb-16 max-md:max-w-full flex-grow">
            {/* Navbar */}
            <Nav />

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