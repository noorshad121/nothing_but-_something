import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import valentine from "./assets/valentine.png";

/* 🌈 Background Gradients */
const gradients = [
  "from-pink-300 via-rose-200 to-fuchsia-300",
  "from-red-300 via-pink-200 to-rose-300",
  "from-purple-300 via-pink-200 to-red-200",
  "from-rose-300 via-fuchsia-200 to-pink-300",
  "from-pink-200 via-red-200 to-purple-200",
];

/* ❤️ Heart Types */
const heartTypes = ["❤", "💖", "💕", "💗", "💘", "💝", "💓", "💞"];

/* ❄️❤️ Heart Snow */
const HeartSnow = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {[...Array(50)].map((_, i) => {
      const heart = heartTypes[Math.floor(Math.random() * heartTypes.length)];
      return (
        <motion.div
          key={i}
          initial={{
            y: -50,
            x: Math.random() * window.innerWidth,
            opacity: 0,
            scale: Math.random() * 0.6 + 0.6,
            rotate: Math.random() * 360,
          }}
          animate={{
            y: window.innerHeight + 100,
            opacity: 1,
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
          className="absolute text-2xl"
        >
          {heart}
        </motion.div>
      );
    })}
  </div>
);

/* 🌸 Layout */
const Layout = ({ children, bg }) => (
  <div
    className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${bg} transition-all duration-700 px-4`}
  >
    <HeartSnow />
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 w-full max-w-sm bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6 text-center"
    >
      {children}
    </motion.div>
  </div>
);

/* 🧸 Animated Teddy */
const Teddy = () => (
  <motion.img
    src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQUbJjZoVIldiGz13evb3V_ZZf3_-CxtOsmw5j6WpQVSIsAPvr5E7v8kZVc22qIfl_82SY-wxH4PP9tXIttkIEWa10hZ02Fe8U_sscmOy9ROEDkcXJBGUu9oQ"
    alt="teddy"
    className="w-40 h-40 rounded-full mx-auto mb-4 drop-shadow-xl"
    animate={{
      y: [0, -12, 0],
      scale: [1, 1.03, 1],
      rotate: [0, 2, -2, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

/* 😈 No Button */
const NoButton = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.button
      onMouseEnter={() =>
        setPos({
          x: Math.random() * 260 - 130,
          y: Math.random() * 160 - 80,
        })
      }
      animate={pos}
      transition={{ type: "spring", stiffness: 600, damping: 12 }}
      className="absolute px-5 py-2 rounded-full bg-gray-300 text-gray-800 font-semibold shadow-md"
    >
      No 🙈
    </motion.button>
  );
};

/* 💖 Question Card */
const QuestionCard = ({ text, yesLink }) => {
  const [bg, setBg] = useState(
    gradients[Math.floor(Math.random() * gradients.length)]
  );
  const [textKey, setTextKey] = useState(0);

  const handleYes = () => {
    setBg(gradients[Math.floor(Math.random() * gradients.length)]);
    setTextKey((prev) => prev + 1);
  };

  return (
    <Layout bg={bg}>
      <Teddy />

      <motion.h1
        key={`title-${textKey}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-extrabold text-pink-600"
      >
        Valentine Princess 💕
      </motion.h1>

      <motion.p
        key={`text-${textKey}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-gray-700 mt-3 text-sm leading-relaxed"
      >
        {text}
      </motion.p>

      <div className="relative mt-10 h-16 flex justify-center items-center gap-6">
        <Link
          to={yesLink}
          onClick={handleYes}
          className="px-7 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold shadow-lg active:scale-95 hover:scale-110 transition"
        >
          Yes 💖
        </Link>
        <NoButton />
      </div>
    </Layout>
  );
};

/* 💬 Questions */
const texts = [
  "Will you be my Valentine?",
  "Can I keep you forever?",
  "Do you feel the magic too?",
  "Will you hold my hand always?",
  "Can we watch anime together?",
  "Will you smile with me daily?",
  "Can I be your comfort?",
  "Will you trust me?",
  "Can we grow together?",
  "Will you stay with me?",
  "Do you like my heart?",
  "Can I make you happy?",
  "Will you laugh with me?",
  "Can I call you mine?",
  "Will you walk beside me?",
  "Do you feel loved?",
  "Can I protect you?",
  "Will you choose me?",
  "Can I be your safe place?",
  "Will you never leave?",
  "Do you believe in us?",
  "Can we dream together?",
  "Will you share your world?",
  "Can I be your Valentine Prince?",
  "Will you say yes again?",
  "Can I keep asking you?",
  "Will you still smile?",
  "Do you feel butterflies?",
  "Can we be forever?",
  "Will you say YES?",
];

/* 🏠 Home */
const Home = () => (
  <QuestionCard
    text="Hi… I have something really special to ask you 🥺💗"
    yesLink="/q/1"
  />
);

/* 💍 Final */
const Final = () => (
  <Layout bg="from-pink-400 via-rose-300 to-red-400">
    <motion.h1
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 150 }}
      className="text-white font-extrabold text-3xl drop-shadow-lg"
    >
      She Said YES 💍💖
    </motion.h1>
  </Layout>
);

/* 🚀 App */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {texts.map((t, i) => (
          <Route
            key={i}
            path={`/q/${i + 1}`}
            element={
              <QuestionCard
                text={t}
                yesLink={i === texts.length - 1 ? "/final" : `/q/${i + 2}`}
              />
            }
          />
        ))}
        <Route path="/final" element={<Final />} />
      </Routes>
    </Router>
  );
}