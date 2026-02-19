          import React, { useState } from "react";
import { motion } from "framer-motion";

export default function App() {
  const gradients = [
    "from-blue-500 via-purple-500 to-pink-500",
    "from-indigo-500 via-purple-500 to-rose-500",
    "from-purple-600 via-pink-500 to-red-500",
  ];

  const messages = [
    "On this special day, I just want to say thank you for being in my life 🤍",
    "Some friends come and go, but you stayed and became family ❤️",
    "You stood with me in my worst days, and I’ll never forget that 💙",
    "Your support means more than you think 💫",
    "Life feels easier knowing you are there 💛",
    "You are not just my friend, you are my strength 💪",
    "No matter where life takes us, our bond will never change 🤝",
    "Today is a celebration of the amazing person you are 🌟",
    "I’m lucky to have a brother like you 💖",
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

  const [index, setIndex] = useState(0);
  const [bg, setBg] = useState(gradients[0]);
  const [showFinal, setShowFinal] = useState(false);

  const handleClick = () => {
    if (index === messages.length - 1) {
      setShowFinal(true);
    } else {
      setIndex(index + 1);
      setBg(gradients[Math.floor(Math.random() * gradients.length)]);
    }
  };

  return (
    <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${bg} px-4`}>
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-2xl rounded-3xl p-6 text-center shadow-2xl">

        {!showFinal ? (
          <>
            <motion.img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
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
              src="https://images.unsplash.com/photo-1513151233558-d860c5398176"
              alt="birthday"
              className="w-40 h-40 rounded-full mx-auto mb-4 shadow-xl"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />

            <h1 className="text-3xl font-extrabold text-white">
              Happy Birthday My Brother 🎂
            </h1>

            <p className="mt-4 text-white text-lg">
              No matter what happens in life,
              I will always stand with you.
            </p>

            <p className="mt-3 text-xl text-white font-semibold">
              Love You Bro ❤️
            </p>
          </>
        )}

      </div>
    </div>
  );
}
        
