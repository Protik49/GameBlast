import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const trendingGames = [
  "Elden Ring: Shadow of the Erdtree",
  "Valorant – Episode 9 Launch",
  "Hades II – Early Access Buzz",
  "Starfield Updates and Mods",
  "Palworld PvP Arena Announced",
  "Tekken 8 – Season 1 Highlights",
];

// Array of colors to cycle through dynamically
const colors = [
  "#FF6B6B",
  "#F7B733",
  "#4ECDC4",
  "#556270",
  "#C7F464",
  "#FF6B6B",
];

export default function TrendingGames() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      color: colors[index % colors.length],
      transition: { duration: 1, ease: "easeInOut" },
      scale: [1, 1.1, 1],
      transitionEnd: { scale: 1 },
    });
  }, [index, controls]);

  // Cycle through trending games every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % trendingGames.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">🚀 Trending Games</h2>

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-semibold select-none text-orange-500"
          
        >
          {trendingGames[index]}
        </motion.div>
      </div>
    </section>
  );
}
