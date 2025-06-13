import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";
import toast from "react-hot-toast";
import { FaDiscord } from "react-icons/fa";
import TrendingGames from "./TrendingGames";
import GamerTips from "./GamerTips";

const Home = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("🎉 Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  const testimonials = [
    {
      name: "Riley (Streamer)",
      feedback: "“This site helps me stay on top of every patch drop!”",
    },
    {
      name: "Sam (Game Dev)",
      feedback: "“A must-follow for indie devs and gamers alike.”",
    },
    {
      name: "Zee (Speedrunner)",
      feedback: "“The tips section alone gave me a new edge.”",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative py-20 px-6 overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.3)), url('https://research.euro.savills.co.uk/_images/gaming-banner-23.jpg')`,
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-5xl font-extrabold leading-tight max-sm:text-4xl text-orange-400 drop-shadow-lg">
              Explore the Next Gen of Gaming News
            </h1>
            <p className="text-lg text-white/90">
              Handpicked insights, trailers, and updates tailored for every
              gamer. Stay ahead of the curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-2 w-full sm:w-64 rounded-xl bg-white text-gray-900 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                onClick={handleSubscribe}
                className="px-6 py-2 bg-orange-600 hover:bg-orange-700 transition rounded-xl text-white font-semibold"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS SECTION */}
      <NewsCard />
      

      {/* TIPS SECTION */}
      <GamerTips />


      {/* EDITOR'S PICKS */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            🔥 Editor's Picks
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Hidden Indie Treasures",
              "E-Sports Deep Dive",
              "Narrative Powerhouses",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p>
                  Carefully curated reads that deserve your time and attention.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING GAMES LIST */}
      <TrendingGames />

      {/* TESTIMONIALS */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">🌟 What Our Readers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-100 p-6 rounded-lg shadow">
                <p className="italic mb-2">"{t.feedback}"</p>
                <h4 className="font-semibold">{t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCORD JOIN SECTION */}
      <section className="bg-indigo-700 py-12 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <FaDiscord className="text-5xl mx-auto mb-2" />
          <h2 className="text-3xl font-bold">Join Our Discord Community</h2>
          <p className="text-lg">
            Chat with fellow gamers, join events, and get insider news before
            anyone else!
          </p>
          <a
            href="#"
            className="inline-block mt-4 px-6 py-3 bg-white text-indigo-700 font-bold rounded-full hover:bg-gray-100 transition"
          >
            Join Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
