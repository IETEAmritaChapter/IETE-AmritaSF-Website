import React from "react";
import NavigationItem from "./NavigationItem";

export default function Navigation() {
  const navItems = [
    "ABOUT",
    "TEAM",
    "EVENTS & PROJECTS",
    "BLOG",
    "CP LEADERBOARD",
  ];

  return (
    <nav className="flex flex-col gap-4 md:flex-row md:gap-10 text-base md:text-xl font-semibold text-white [font-family:var(--font-montserrat)]">
      {navItems.map((item, index) => (
        <NavigationItem key={index} text={item} />
      ))}
    </nav>
  );
}
