import React from "react";
import NewsCard from "../NewsCard/NewsCard";

const Home = () => {
  return (
    <div>
      <div className="relative py-20 px-6 text-white overflow-hidden">
        {/* Background image with left-to-right fade over black */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9) 40%, transparent), url('https://research.euro.savills.co.uk/_images/gaming-banner-23.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-5xl shadow-2xl font-bold max-sm:text-4xl max-sm:text-center leading-tight">
              Explore the Next Gen of Gaming News
            </h1>
            <p className="text-lg text-white/80 shadow-2xl max-sm:text-md max-sm:text-center">
              Handpicked insights, trailers, and updates tailored for every
              gamer from casuals to pros. Stay ahead with the trend and fuel
              your passion with updates that matter.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row">
              <input
                type="text"
                placeholder="Your email"
                className="bg-white text-black px-4 py-2 rounded-lg w-full sm:w-auto"
              />
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <NewsCard />
    </div>
  );
};

export default Home;
