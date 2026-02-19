import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import song from "./assets/birthday.mp3";

export default function App() {
  const gradients = [
    "from-blue-500 via-purple-500 to-pink-500",
    "from-indigo-500 via-purple-500 to-rose-500",
    "from-purple-600 via-pink-500 to-red-500",
  ];

  const messages = [
    "This year I met you, and you became more than just a friend — you became my family. ❤️",
    "No matter where life takes us, our bond will never change 🤝",
    "Today is a celebration of the amazing person you are 🌟",
    "Final message… I’m always with you, no matter what 🤍",
  ];

  const buttonWords = [
    "Continue 🤍",
    "Next 💙",
    "Read More ❤️",
    "For You 💫",
    "One More 💛",
    "Last Message 🌟",
  ];

  const cakes = Array.from({ length: 25 });

  const [index, setIndex] = useState(0);
  const [bg, setBg] = useState(gradients[0]);
  const [showFinal, setShowFinal] = useState(false);
  const audioRef = useRef(null);

  const handleClick = () => {
    if (index === messages.length - 1) {
      setShowFinal(true);
    } else {
      setIndex(index + 1);
      setBg(gradients[Math.floor(Math.random() * gradients.length)]);
    }
  };

  // Play song when final screen appears
  useEffect(() => {
    if (showFinal && audioRef.current) {
      audioRef.current.play();
    }
  }, [showFinal]);

  return (
    <div className={`relative min-h-screen flex items-center justify-center bg-gradient-to-br ${bg} px-4`}>

      {/* 🎂 Cake Rain */}
      {showFinal && (
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
      )}

      <div className="w-full max-w-sm bg-white/10 backdrop-blur-2xl rounded-3xl p-6 text-center shadow-2xl">

        {!showFinal ? (
          <>
            <motion.img
              src={img1}
              alt="friendship"
              className="w-36 h-36 rounded-full mx-auto mb-4 shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <h1 className="text-2xl font-bold text-white">
              Happy Birthday Bro 🎂
            </h1>

            <p className="mt-4 text-white text-sm leading-relaxed">
              {messages[index]}
            </p>

            <button
              onClick={handleClick}
              className="mt-8 px-6 py-2 rounded-full bg-white text-purple-600 font-semibold"
            >
              {buttonWords[index % buttonWords.length]}
            </button>
          </>
        ) : (
          <>
            <motion.img
              src={img2}
              alt="birthday"
              className="w-40 h-40 rounded-full mx-auto mb-4 shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />

            <h1 className="text-3xl font-extrabold text-white">
              Happy Birthday My Bro 🎂
            </h1>

            <p className="mt-4 text-white text-lg">
              I will always stand with you.
            </p>

            <p className="mt-3 text-xl text-white font-semibold">
              Love You Bro ❤️
            </p>

            {/* 🎵 Song */}
            <audio ref={audioRef} src={song} loop />
          </>
        )}

      </div>
    </div>
  );
}      