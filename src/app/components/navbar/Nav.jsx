'use client';
import { useState } from 'react';
import Link from 'next/link';

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/Assets/logo.png"
        className="object-contain aspect-square w-12 md:w-16"
        alt="IETE Student Forum Logo"
      />
      <div>
        <span className="font-semibold text-white text-lg md:text-xl [font-family:var(--font-montserratb)]">
          IETE Student Forum
        </span>
        <br />
        <span className="text-orange-400 text-sm md:text-lg [font-family:var(--font-montserrat)]">
          Amrita Coimbatore
        </span>
      </div>
    </div>
  );
}

function Navigation({ onClick }) {
  const navItems = [
    { text: 'ABOUT', path: '/about/' },
    { text: 'TEAM', path: '/team/' },
    { text: 'EVENTS & PROJECTS', path: '/#events-section' },
    { text: 'BLOG', path: '/blogs/' },
    { text: 'LEADERBOARD', path: '/comingsoon/' },
  ];

  return (
    <nav className="flex flex-col md:flex-row md:gap-8 text-md md:text-lg font-semibold text-white [font-family:var(--font-montserrat)]">
      {navItems.map((item, index) => (
        <Link
          href={item.path}
          key={index}
          className="text-center py-1 px-2 hover:text-orange-400 transition-colors duration-300"
          onClick={onClick}
        >
          {item.text}
        </Link>
      ))}
    </nav>
  );
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative w-full bg-[#1a1a1a] [font-family:var(--font-montserrat)] z-[100]">
      {/* Navbar */}
      <div className="flex items-center justify-between w-full px-4 pt-1 pb-10 md:px-6 md:pt-1 relative z-[100]">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden md:flex items-center justify-center gap-8">
          <Navigation onClick={handleCloseMenu} />
        </div>
        <button
          className="text-2xl text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`absolute left-0 top-[60px] w-full bg-[#1a1a1a] z-[90] transition-all duration-500 ease-in-out ${
          menuOpen ? 'opacity-100 max-h-[200px] visible' : 'opacity-0 max-h-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center w-full py-4">
          <Navigation onClick={handleCloseMenu} />
        </div>
      </div>
    </div>
  );
}
