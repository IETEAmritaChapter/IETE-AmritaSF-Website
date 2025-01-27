"use client"
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
        console.log(element)
        if (element) {
          
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Delay of 100ms
    }
  }, []);

  return (
    <>
      <div className="min-h-screen p-4 pb-8 sm:p-7">
        <Maincontent />
      </div>
      <Events />
      <Projects/>
    </>
  );
}