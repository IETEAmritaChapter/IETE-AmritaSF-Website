"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full px-2 md:px-4 py-2 [font-family:var(--font-montserrat)]">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Logo />
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
      <div
        className={`w-full md:w-auto md:flex ${
          menuOpen ? "block" : "hidden"
        } mt-4 md:mt-0`}
      >
        <Navigation />
      </div>
    </div>
  );
}
