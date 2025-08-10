import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";

const tips = [
  "🎯 Master control remaps for better performance in intense matches.",
  "🧠 Warm up before competitive sessions—reaction training helps!",
  "🌐 Join weekly Discord events to test your skills and win perks.",
  "🎥 Rewatch your own gameplay to spot improvement areas.",
];

const gradients = [
  ["from-indigo-600", "to-purple-600"],
  ["from-pink-600", "to-red-600"],
  ["from-green-600", "to-teal-600"],
  ["from-yellow-600", "to-orange-600"],
];

export default function GamerTips() {
  const [index, setIndex] = useState(0);

  const moreTips = ()=>{
    Swal.fire({
                position: "center",
                icon: "success",
                title: "Coming soon: More tips & guides!",
                showConfirmButton: false,
                timer: 1500,
              });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % tips.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`py-10 px-6 text-white bg-gradient-to-r ${
        gradients[index % gradients.length][0]
      } ${gradients[index % gradients.length][1]} transition-colors duration-1000 ease-in-out`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">💡 Gamer Tips</h2>
        <p className="text-white/80 mt-2 max-w-xl mx-auto">
          Quick, rotating insights to help you play smarter, win more, and enjoy every match.
        </p>

        <div className="h-16 flex items-center justify-center mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="text-lg max-w-3xl mx-auto font-semibold select-none"
            >
              {tips[index]}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition"
          onClick={() => moreTips()}
        >
          Explore More Tips
        </button>
      </div>
    </section>
  );
}
