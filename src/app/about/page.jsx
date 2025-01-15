export default function Home() {
  return (
    <div className="body w-screen min-h-screen flex justify-center items-center">
      <div className="content-container text-white mx-6 my-6 p-6 rounded-lg shadow-lg flex flex-col items-center gap-6">
        
        {/* Navbar Section */}
        <div className="navbar w-full flex justify-center items-center text-xl font-bold">
        </div>

        {/* About Section */}
        <section className="about flex flex-col items-center gap-4">
          <h1 className="text-2xl font-bold">ABOUT IETE AMRITA</h1>
          <div className="message-box text-black p-6 bg-white rounded-lg text-start">
            At IETE Amrita, we are more than just a club; we are a thriving ecosystem for technology enthusiasts and innovators. Rooted in a passion for electronics, communication, and programming, we aim to bridge the gap between theoretical knowledge and real-world applications. Our mission is to foster a culture of innovation, empowering students to explore emerging technologies and push the boundaries of what&apos;s possible.
          </div>
        </section>

        {/* Why We Do What We Do Section */}
        <section className="why-what w-full flex flex-col justify-center items-center gap-4 text-center">
          <h2 className="text-2xl font-bold">
            <span className="text-orange-600">WHY</span> WE DO <span className="text-orange-600">WHAT</span> WE DO
          </h2>
          <p className="text-gray-400 montserrat-alternates text-start">
            At IETE Amrita, our purpose stems from a shared passion for technology and innovation. Every action, initiative, and event we undertake is guided by a deep commitment to empowering students and fostering a culture of technical excellence.
          </p>
          <div className="box-wrapper flex flex-wrap md:flex-nowrap flex-col md:flex-row justify-center items-stretch gap-4 w-full">
            {/* Mission Box */}
            <div className="box-container bg-white p-4 borde r rounded shadow text-black flex-1 min-h-[150px]">
              <div>
                <h2 className="text-xl font-bold text-start text-orange-600">MISSION</h2>
              </div>
              <p className="text-start">
                Our mission is to organize impactful events and workshops that demystify emerging technologies, inspiring students to learn and innovate, while offering hands-on project opportunities to bridge the gap between theoretical knowledge and practical application.
              </p>
            </div>

            {/* Vision Box */}
            <div className="box-container bg-white p-4 border rounded shadow text-black flex-1 min-h-[150px]">
              <div>
                <h2 className="text-xl font-bold text-start text-orange-600">VISION</h2>
              </div>
              <p className="text-start">
                To create a vibrant and inclusive tech community at Amrita that inspires innovation, nurtures talent, and serves as a catalyst for technical creativity and collaboration.
              </p>
            </div>
          </div>
        </section>

        {/* Verticals Section */}
        <section className="verticals w-full flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold">
            VARIOUS <span className="text-orange-600">VERTICALS</span> & <span className="text-orange-600">DOMAINS</span> WE EXPLORE
          </h2>
          <p className="text-gray-400 montserrat-alternates text-start">
            Whether it&apos;s mastering Competitive Programming, pioneering the future with IoT, crafting dynamic Web Development, or unlocking the potential of AI/ML, each vertical is designed to spark passion, refine skills, and push boundaries.
          </p>
        </section>

        {/* Join Section */}
        <section className="join w-full flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold">
            JOIN THE <span className="text-orange-600">IETE</span> MOVEMENT!
          </h2>
          <div className="message-box text-black p-6 bg-white rounded-lg">
            <p className="text-start">
              As we continue to innovate and create, we invite you to be a part of this exciting journey. IETE Amrita is more than just a club; it&apos;s a community of passionate individuals shaping the future of technology. Don&apos;t miss out on the opportunity to collaborate, grow, and lead in the tech world.
              <br />
              Learn More About Our Team
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
