import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const tips = [
  "🎯 Master control remaps for better performance in intense matches.",
  "🧠 Warm up before competitive sessions—reaction training helps!",
  "🌐 Join weekly Discord events to test your skills and win perks.",
  "🎥 Rewatch your own gameplay to spot improvement areas.",
];

// Gradient color pairs to cycle through
const gradients = [
  ["from-indigo-600", "to-purple-600"],
  ["from-pink-600", "to-red-600"],
  ["from-green-600", "to-teal-600"],
  ["from-yellow-600", "to-orange-600"],
];

export default function GamerTips() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const [gradientIndex, setGradientIndex] = useState(0);

  useEffect(() => {
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 2, ease: "easeInOut" },
    });
  }, [index, controls]);

  // Cycle tips every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tips.length);
      setGradientIndex((prev) => (prev + 1) % gradients.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`py-16 px-6 text-white bg-gradient-to-r ${gradients[gradientIndex][0]} ${gradients[gradientIndex][1]} transition-colors duration-2000 ease-in-out`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">💡 Gamer Tips</h2>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8 }}
          className="text-lg max-w-3xl mx-auto font-semibold select-none"
          
        >
          {tips[index]}
        </motion.div>
      </div>
    </section>
  );
}
