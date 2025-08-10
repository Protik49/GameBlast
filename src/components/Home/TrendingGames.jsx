import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const trendingGames = [
  "Elden Ring: Shadow of the Erdtree",
  "Valorant – Episode 9 Launch",
  "Hades II – Early Access Buzz",
  "Starfield Updates and Mods",
  "Palworld PvP Arena Announced",
  "Tekken 8 – Season 1 Highlights",
];

export default function TrendingGames() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % trendingGames.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10">
          🚀 Trending <span className="text-orange-500">Games</span>
        </h2>

        <div className="relative h-12 overflow-hidden flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="text-2xl font-bold tracking-wide drop-shadow-[0_0_10px_rgba(255,140,0,0.7)]"
            >
              {trendingGames[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {trendingGames.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-orange-500 scale-125" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
