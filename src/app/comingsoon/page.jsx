'use client';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function ComingSoon() {
  useEffect(() => {
    gsap.fromTo(
      '.dots span, .coming-soon-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out', stagger: 0.3 }
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#1c1c1c] text-white font-montserrat">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 text-center">
        {/* Dots Animation */}
        <div className="flex gap-2 mb-6 dots">
          <span className="w-5 h-5 bg-[#ff5733] rounded-full animate-blink"></span>
          <span className="w-5 h-5 bg-[#ff5733] rounded-full animate-blink delay-[300ms]"></span>
          <span className="w-5 h-5 bg-[#ff5733] rounded-full animate-blink delay-[600ms]"></span>
        </div>

        {/* Coming Soon Text */}
        <h1 className="text-8xl [font-family:var(--font-montserratb)] max-md:text-6xl">
          COMING SOON
        </h1>
      </section>

      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-blink {
          animation: blink 1.5s infinite;
        }
      `}</style>
    </div>
  );
}
