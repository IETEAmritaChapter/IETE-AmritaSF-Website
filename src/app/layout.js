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
  title: "IETE Amrita Student Forum",
  description:
    "Official website of IETE Amrita Student Forum - Fostering Innovation and Excellence in Tech.",
  keywords:
    "IETE Amrita, IETE Student Forum, Amrita Coimbatore, Tech Clubs Amrita, IETE Amrita SF, IETE Amrita Student Forum, IETE Amrita Club, Technology, Innovation, Amrita Vishwa Vidyapeetham",
  author: "IETE Amrita Student Forum",
  icons: {
    icon: '/logo.ico', 
    apple: "/logo.ico",
    shortcut: "/logo.ico",
  },
  themeColor: "#FF5252", 
  openGraph: {
    type: "website",
    title: "IETE Amrita Student Forum",
    description:
      "Explore events, projects, and initiatives by the IETE Amrita Student Forum at Amrita Vishwa Vidyapeetham.",
    url: "https://avvsf.ietecbe.org/",
    images: [
      {
        url: "/Images/hero/hero-image.webp", 
        width: 1200,
        height: 630,
        alt: "IETE Amrita Student Forum Banner",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrata.variable} ${montserrat.variable} ${montserratb.variable} antialiased`}
      >

        {/* Main layout container */}
        <div className="flex flex-col min-h-screen px-5 py-4 bg-white text-black">
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
