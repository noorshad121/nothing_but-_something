import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import img1 from "./assets/img1.jpeg";
import song from "./assets/birthday.mp3";

export default function App() {
  const cakes = Array.from({ length: 25 });
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 px-4">

      {!started ? (
        <button
          onClick={handleStart}
          className="px-8 py-4 bg-white text-purple-600 rounded-full text-xl font-bold shadow-xl"
        >
          Tap to Celebrate 🎉
        </button>
      ) : (
        <>
          {/* 🎂 Cake Rain */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {cakes.map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-3xl"
                initial={{ y: -100, x: Math.random() * window.innerWidth }}
                animate={{ y: "100vh" }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              >
                🎂
              </motion.div>
            ))}
          </div>

          <div className="w-full max-w-sm bg-white/10 backdrop-blur-2xl rounded-3xl p-8 text-center shadow-2xl">

            <motion.img
              src={img1}
              alt="birthday"
              className="w-80 h-80 rounded mx-auto mb-6 shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />

            <h1 className="text-4xl font-extrabold text-white">
              Happy Birthday, Superstar! 🎂✨
            </h1>

            <audio ref={audioRef} src={song} loop />
          </div>
        </>
      )}
    </div>
  );
}
