"use client";
import { useEffect } from "react";
import Maincontent from "./components/herolanding.jsx";
import Events from "./components/Event/page.jsx";
import Projects from "./components/projects.jsx";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#events-section") {
      setTimeout(() => {
        const element = document.getElementById("events-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay of 100ms
    }
  }, []);

  return (
    <>
      <div
  className="min-h-screen p-4 pb-8 sm:p-10"
  style={{
    boxShadow: "0px 4px 6px rgba(28, 25, 23, 0.2), 0px 1px 3px rgba(28, 25, 23, 0.1)",
  }}
>
        <Maincontent />
      </div>
      <Events />
      <Projects/>
    </>
  );
}
