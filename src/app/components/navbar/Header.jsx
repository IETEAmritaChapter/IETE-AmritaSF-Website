import * as React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <div className="flex items-center justify-start w-full px-2 md:px-4 h-16">
      <Logo />
      <div className="ml-auto">
        <Navigation />
      </div>
    </div>
  );
}
