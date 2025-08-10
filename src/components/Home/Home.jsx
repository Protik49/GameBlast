import React, { useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

import { FaDiscord } from "react-icons/fa";
import TrendingGames from "./TrendingGames";
import GamerTips from "./GamerTips";
import Swal from "sweetalert2";

const Home = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email || !email.includes("@")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email",
      });
      return;
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "🎉 Thank you for subscribing!",
      showConfirmButton: false,
      timer: 1500,
    });
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
                className="px-6 py-2 bg-orange-600 hover:bg-orange-700 transition rounded-xl text-white font-semibold cursor-pointer"
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
      <section className="relative py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-extrabold text-center mb-4">
            🔥 Editor's Picks
          </h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Hand-selected stories, deep dives, and hidden gems from across the
            gaming world — our must-read recommendations for you.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Hidden Indie Treasures",
                tag: "Indie",
                img: "https://www.mount-it.com/cdn/shop/articles/Matty_--set-up-photos-for-mount--it--2024-10-30-03-50-21--manual.jpg?v=1751392082",
              },
              {
                title: "E-Sports Deep Dive",
                tag: "Competitive",
                img: "https://twinkly.com/cdn/shop/articles/Why_Twinkly_LED_lights_are_a_gamer_s_best_bet_bf4521ad-1ae1-44f2-b899-6ee0caeb4b9b.jpg?v=1744961702",
              },
              {
                title: "Narrative Powerhouses",
                tag: "Storytelling",
                img: "https://investingnews.com/media-library/person-playing-games-on-a-computer-with-rgb-lighting.jpg?id=28746008&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition duration-300"
                />
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-pink-400 font-semibold">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold mt-2 group-hover:text-pink-400 transition">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-300 text-sm">
                    Carefully curated reads that deserve your time and attention
                    — dive in and discover something new.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional subtle background pattern */}
        <div className="absolute inset-0 bg-[url('/images/noise-texture.png')] opacity-10 pointer-events-none"></div>
      </section>

      {/* TRENDING GAMES LIST */}
      <TrendingGames />

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            🌟 What Our Readers Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Hear directly from our passionate community — your feedback keeps us
            inspired to bring you the best in gaming content.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all text-left"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={`https://i.pravatar.cc/100?img=${i + 1}`}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{t.name}</h4>
                    <div className="text-yellow-500 text-sm">★★★★★</div>
                  </div>
                </div>
                <p className="italic text-gray-700">"{t.feedback}"</p>
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
            href="https://discord.com/"
            target="_blank"
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
