import * as React from "react";
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
    <nav className="flex gap-20 text-xl font-semibold text-white">
      {navItems.map((item, index) => (
        <NavigationItem key={index} text={item} />
      ))}
    </nav>
  );
}
