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
          <h1 className="text-[60px] sm:text-[48px] font-extrabold font-[montserratb]">
            ABOUT <span className="gradient-text">IETE AMRITA</span>
          </h1>

          <div className="message-box text-base sm:text-lg lg:text-xl xl:text-2xl text-black p-6 bg-white rounded-[8px] text-start font-[montserrat] mt-4">
            At IETE Amrita, we are more than just a club; we are a thriving ecosystem for technology enthusiasts and innovators. Rooted in a passion for electronics, communication, and programming, we aim to bridge the gap between theoretical knowledge and real-world applications. Our mission is to foster a culture of innovation, empowering students to explore emerging technologies and push the boundaries of what&apos;s possible.
          </div>
        </section>

        {/* Why We Do What We Do Section */}
        <section className="why-what w-full flex flex-col gap-4 justify-center items-center text-center mt-10">
          <h2 className="text-[28px] sm:text-[32px] font-[montserratb]">
            <span className="text-orange-600">WHY</span> WE DO <span className="text-orange-600">WHAT</span> WE DO
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-400 montserrat-alternates text-center font-[montserrat]">
            At IETE Amrita, our purpose stems from a shared passion for technology and innovation. Every action, initiative, and event we undertake is guided by a deep commitment to empowering students and fostering a culture of technical excellence.
          </p>
          <div className="box-wrapper flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-center items-stretch gap-4 w-full mt-4">
            {/* Mission Box */}
            <div className="box-container bg-white p-4 border rounded-[8px] shadow text-black flex-1 min-h-[150px]">
              <h2 className="text-[28px] sm:text-[28px] text-start text-orange-600 font-[montserratb]">MISSION</h2>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-start font-[montserrat] mt-3">
                Our mission is to organize impactful events and workshops that demystify emerging technologies, inspiring students to learn and innovate, while offering hands-on project opportunities that bridge the gap between theoretical knowledge and practical application to empower them with industry-relevant skills. We aim to foster an environment that encourages continuous learning.
              </p>
            </div>

            {/* Vision Box */}
            <div className="box-container bg-white p-4 border rounded-[8px] shadow text-black flex-1 min-h-[150px]">
              <h2 className="text-[28px] sm:text-[28px] font-bold text-start text-orange-600 font-[montserratb]">VISION</h2>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-start font-[montserrat] mt-3">
                To create a vibrant and inclusive tech community at Amrita that inspires innovation, nurtures talent, and serves as a catalyst for technical creativity and collaboration. We envision IETE as a central hub where students explore the frontiers of technology, develop groundbreaking ideas, and collectively shape the future of engineering and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Verticals Section */}
        <section className="verticals w-full flex flex-col gap-4 items-center text-center mt-10">
          <h2 className="text-[28px] sm:text-[32px] font-[montserratb]">
            VARIOUS <span className="text-orange-600">VERTICALS</span> & <span className="text-orange-600">DOMAINS</span> WE EXPLORE
          </h2>
          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-gray-400 text-center font-[montserrat]">
            Whether it&apos;s mastering Competitive Programming, pioneering the future with IoT, crafting dynamic Web Development, or unlocking the potential of AI/ML, each vertical is designed to spark passion, refine skills, and push boundaries.
          </p>
          <div className="icons-grid grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full justify-items-center items-center mt-4">
            {/* First Row */}
            <img src="/images/verticals/webdev.png" alt="Web Development" className="w-28 h-28 sm:w-18 sm:h-18" />
            <img src="/images/verticals/embedded.png" alt="Embedded Systems" className="w-28 h-28 sm:w-18 sm:h-18" />
            <img src="/images/verticals/cp.png" alt="Competitive Programming" className="w-28 h-28 sm:w-18 sm:h-18" />
            <img src="/images/verticals/appdev.png" alt="App Development" className="w-28 h-28 sm:w-18 sm:h-18" />
            <img src="/images/verticals/ai.png" alt="AI & ML" className="w-28 h-28 sm:w-18 sm:h-18" />

            {/* Second Row */}
            <img src="/images/verticals/pr.png" alt="Public Relations" className="w-28 h-28 sm:w-18 sm:h-18" />
            <img src="/images/verticals/eventmang.png" alt="Event Management" className="w-28 h-28 sm:w-18 sm:h-18" />
            <img src="/images/verticals/design.png" alt="Design" className="w-28 h-28 sm:w-18 sm:h-18" />
          </div>
        </section>

        {/* Join Section */}
        <section className="join w-full flex flex-col gap-4 items-center text-center mt-10">
          <h2 className="text-[30px] sm:text-[32px] font-[montserratb]">
            JOIN THE <span className="text-orange-600">IETE</span> MOVEMENT!
          </h2>
          <div className="message-box text-black p-6 bg-white rounded-[8px] mt-4">
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-start font-[montserrat]">
              As we continue to innovate and create, we invite you to be a part of this exciting journey. IETE Amrita is more than just a club; it&apos;s a community of passionate individuals shaping the future of technology. Don&apos;t miss out on the opportunity to collaborate, grow, and lead in the tech world.
              <br />
              <Link href="/team" passHref>Learn More
                <span className="text-orange-600 font-[montserratb]"> About Our Team</span></Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
