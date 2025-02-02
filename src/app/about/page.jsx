import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="body gap-6">
        {/* Navbar Section */}
        <div className="navbar w-full flex justify-center items-center gap-4 font-bold font-[montserratb]">
          {/* Add Navbar Content */}
        </div>

        {/* About Section */}
        <section className="about flex flex-col gap-4 items-center">
          <h2 className="text-[38px] sm:text-[42px] text-center font-[montserratb] leading-10">
            ABOUT <span className="gradient-text">IETE AMRITA</span>
          </h2>

          <div className="message-box text-black text-base sm:text-lg lg:text-xl xl:text-[1.2rem] p-6 bg-white rounded-[8px] text-justify font-[montserrat] mt-4">
            At IETE Amrita, we are more than just a club; we are a thriving
            ecosystem for technology enthusiasts and innovators. Rooted in a
            passion for electronics, communication, and programming, we aim to
            bridge the gap between theoretical knowledge and real-world
            applications. Our mission is to foster a culture of innovation,
            empowering students to explore emerging technologies and push the
            boundaries of what&apos;s possible.
          </div>
        </section>

        {/* Why We Do What We Do Section */}
        <section className="why-what w-full flex flex-col gap-4 justify-center items-center text-center mt-10">
          <h2 className="text-[28px] sm:text-[32px] font-[montserratb]">
            <span className="text-orange-600">WHY</span> WE DO{" "}
            <span className="text-orange-600">WHAT</span> WE DO
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-[1.3rem] text-gray-400 text-justify p-4 font-[montserrata]">
            At IETE Amrita, our purpose stems from a shared passion for
            technology and innovation. Every action, initiative, and event we
            undertake is guided by a deep commitment to empowering students and
            fostering a culture of technical excellence.
          </p>
          <div className="box-wrapper flex flex-wrap md:flex-row justify-center items-stretch gap-4 w-full mt-4">
            {/* Mission Box */}
            <div className="box-container bg-white p-4 border rounded-[8px] shadow text-black flex-1 min-h-[150px] relative">
              <img
                src="/Images/mission-vision/mission.png"
                alt="Mission Icon"
                width={44}
                height={44}
                className="absolute top-4 right-12"
              />
              <div className="text-start">
                <h2 className="text-[26px] sm:text-[28px] text-orange-600 font-[montserratb]">
                  MISSION
                </h2>
                <p className="text-base sm:text-lg lg:text-xl xl:text-[1.2rem] text-justify p-4 font-[montserrat] mt-3">
                  Our mission is to organize impactful events and workshops that
                  demystify emerging technologies, inspiring students to learn
                  and innovate, while offering hands-on project opportunities
                  that bridge the gap between theoretical knowledge and
                  practical application to empower them with industry-relevant
                  skills. We aim to foster an environment that encourages
                  continuous learning.
                </p>
              </div>
            </div>

            {/* Vision Box */}
            <div className="box-container bg-white p-4 border rounded-[8px] shadow text-black flex-1 min-h-[150px] relative">
              <img
                src="/Images/mission-vision/vision.png"
                alt="Vision Icon"
                width={56}
                height={40}
                className="absolute top-4 right-12"
              />
              <div className="text-start">
                <h2 className="text-[26px] sm:text-[28px] text-orange-600 font-[montserratb]">
                  VISION
                </h2>
                <p className="text-base sm:text-lg lg:text-xl xl:text-[1.2rem] text-justify p-4 font-[montserrat] mt-3">
                  To create a vibrant and inclusive tech community at Amrita
                  that inspires innovation, nurtures talent, and serves as a
                  catalyst for technical creativity and collaboration. We
                  envision IETE as a central hub where students explore the
                  frontiers of technology, develop groundbreaking ideas, and
                  collectively shape the future of engineering and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Verticals Section */}
        <section className="verticals w-full flex flex-col gap-4 justify-center items-center text-center mt-10">
          <h2 className="text-[28px] sm:text-[32px] font-[montserratb]">
            VARIOUS <span className="text-orange-600">VERTICALS</span> &{" "}
            <span className="text-orange-600">DOMAINS</span> WE EXPLORE
          </h2>
          <p className="mx-3 text-base sm:text-lg lg:text-xl xl:text-[1.3rem] text-gray-400 text-justify font-[montserrata]">
            Whether it&apos;s mastering Competitive Programming, pioneering the
            future with IoT, crafting dynamic Web Development, unlocking the
            potential of AI/ML, fostering connections through Public Relations,
            orchestrating events with Event Management, or bringing creative
            visions to life with Design & Media, each vertical and team
            contributes to a balanced ecosystem that sparks passion, refines
            skills, and celebrates innovation and collaboration.
          </p>
          <div className="icons-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 w-full gap-8 justify-items-center justify-center items-center mt-4 font-[montserrat]">
            {[
              {
                src: "/Images/verticals/webdev.png",
                label: "Web Development",
                translate: true,
              },
              {
                src: "/Images/verticals/embedded.png",
                label: "Embedded Systems",
                translate: true,
              },
              {
                src: "/Images/verticals/cp.png",
                label: "Competitive Programming",
                translate: true,
              },
              {
                src: "/Images/verticals/appdev.png",
                label: "App Development",
                translate: true,
              },
              {
                src: "/Images/verticals/ai.png",
                label: "AI/ML",
                translate: false,
              },
              {
                src: "/Images/verticals/pr.png",
                label: "Public Relations",
                translate: true,
              },
              {
                src: "/Images/verticals/eventmang.png",
                label: "Event Management",
                translate: true,
              },
              {
                src: "/Images/verticals/design.png",
                label: "Design",
                translate: false,
              },
            ].map(({ src, label, translate }, index) => (
              <div
                className={`text-center flex flex-col items-center gap-4 ${
                  translate ? "transform translate-x-2" : ""
                }`}
                key={label}
              >
                <img
                  src={src}
                  alt={label}
                  width={80}
                  height={80}
                  className="block"
                />
                <p className="text-sm sm:text-base md:text-[1.1rem]">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Section */}
        <section className="join w-full flex flex-col gap-4 items-center text-center mt-10">
          <h2 className="text-[28px] sm:text-[32px] font-[montserratb]">
            JOIN THE <span className="text-orange-600">IETE</span> MOVEMENT!
          </h2>
          <div className="message-box text-black p-6 bg-white rounded-[8px] mt-4">
            <p className="text-base sm:text-lg lg:text-xl xl:text-[1.2rem] text-justify p-2 font-[montserrat]">
              As we continue to innovate and create, we invite you to be a part
              of this exciting journey. IETE Amrita is more than just a club;
              it&apos;s a community of passionate individuals shaping the future
              of technology. Don&apos;t miss out on the opportunity to
              collaborate, grow, and lead in the tech world.
              <br />
              <Link href="/team" passHref>
                Learn More
                <span className="text-orange-600 font-[montserratb] btn-primary">
                  {" "}
                  About Our Team
                </span>
              </Link>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-start items-center space-x-4 sm:space-x-6 mt-4 sm:mt-6 max-md:justify-center mt-6">
            {[
              {
                src: "/Images/socials/Instagram.png",
                alt: "Instagram",
                link: "https://www.instagram.com/iete_amrita/",
              },
              {
                src: "/Images/socials/GitHub.png",
                alt: "Github",
                link: "https://github.com/IETEAmritaChapter ",
              },
              {
                src: "/Images/socials/LinkedIn.png",
                alt: "LinkedIn",
                link: "https://www.linkedin.com/in/iete-amrita-sf/",
              },
              {
                src: "/Images/socials/Whatsapp.png",
                alt: "WhatsApp",
                link: "https://chat.whatsapp.com/EaQtTt7U4ClKEz26g9ddii",
              },
            ].map(({ src, alt, link }) => (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={alt}
              >
                <img src={src} alt={alt} width={52} height={52} />
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
