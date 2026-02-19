          import React, { useState } from "react";
import { motion } from "framer-motion";

/* 🎨 Background Gradients */
const gradients = [
  "from-blue-400 via-purple-400 to-pink-400",
  "from-pink-400 via-rose-400 to-red-400",
  "from-purple-400 via-pink-400 to-indigo-400",
];

/* 🎉 Birthday Messages */
const messages = [
  "Ready to celebrate your birthday? 🎉",
  "Another year older, but still crazy 😎",
  "Cake cutting kab hai? 🎂",
  "Party kaha hai bro? 🥳",
  "Gift ready hai kya? 🎁",
  "Smile karo birthday boy 😁",
  "Aaj full masti karenge 🔥",
  "Last question… ready for surprise? 🎊",
];

/* 🎈 Fun Button Words */
const buttonWords = [
  "Next 🎉",
  "Let’s Go 🥳",
  "Cake Time 🎂",
  "Full Enjoy 😎",
  "Celebrate 🔥",
  "Final Surprise 🎊",
];

export default function App() {
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLypdsTuEUCnOAgMf3EYoo4kph2QNjDJwmA&s"
              alt="teddy"
              className="w-36 h-36 rounded-full mx-auto mb-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <h1 className="text-2xl font-bold text-white">
              Happy Birthday Bro 🎂🎉
            </h1>

            <p className="mt-4 text-white text-sm">
              {messages[index]}
            </p>

            <button
              onClick={handleClick}
              className="mt-8 px-6 py-2 rounded-full bg-white text-purple-600 font-bold"
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

            <p className="mt-4 text-xl text-white font-semibold">
              Love You Bro ❤️🔥
            </p>
          </>
        )}

      </div>
    </div>
  );
}    
