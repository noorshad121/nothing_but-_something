import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

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

/* 💖 YES WORDS – 30 */
const yesWords = [
  "Yes 💖","Of course 😍","Always ❤️","Forever 💍","100% Yes 💕",
  "Yesss 🥰","Mine 💘","Absolutely 💗","Only You 💞","My Love 😘",
  "I Choose You 💓","With You 💝","Take My Heart ❤️‍🔥","No Doubt 😍",
  "Pink Promise 💖","Endless Love ♾️","Soulmate 💑","Crazy For You 🤭",
  "My Person 🫶","Heart Says Yes 💓","Yes Babe 😘","You & Me 💕",
  "Always Yours 💝","Yes My Love 💗","Together Forever 💍",
  "Chosen 💖","Love Wins ❤️","I’m In 😍","Yes Cutie 🥹","Final Yes 💘",
];

/* 😢 NO WORDS */
const noWords = [
  "No 😢","Please No 🥺","Not Today 💔","Hmm No 😞","I’m Sad 😭","Don’t Ask 🙈",
];

/* 💬 QUESTIONS – 30 */
const texts = [
  "Will you say YES? 💗",
  "Can I be yours? 🥺",
  "Do you love me? 💕",
  "Will you choose me? 💘",
  "Can we be together forever? 💑",
  "Am I your Valentine? 🌹",
  "Will you hold my hand? 🤝",
  "Do I make you smile? 😊",
  "Will you stay with me always? 💞",
  "Can I keep you forever? ♾️",
  "Are you my soulmate? 💍",
  "Will you be mine? 💓",
  "Do you feel the same for me? 💖",
  "Will you trust me with your heart? 🫶",
  "Can I call you mine? 😍",
  "Are we meant to be together? ✨",
  "Will you say YES today? 💗",
  "Do you like me a little? 🙈",
  "Will you love me always? ❤️",
  "Can I steal your heart? 💘",
  "Will you walk with me in life? 💑",
  "Do you choose us? 💞",
  "Will you accept my heart? 💝",
  "Are you ready for love? 💕",
  "Will you be my forever? ♾️",
  "Can we start our love story? 📖💖",
  "Do you want this love? 💓",
  "Will you say yes to me? 😘",
  "Is your answer YES? 💗",
  "Final question… will you marry me? 💍💖",
];

/* ❄️❤️ Heart Snow */
const HeartSnow = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {[...Array(80)].map((_, i) => (
      <motion.div
        key={i}
        initial={{
          y: -50,
          x: Math.random() * window.innerWidth,
          opacity: 0,
          scale: Math.random() * 0.6 + 0.6,
        }}
        animate={{ y: window.innerHeight + 100, opacity: 1 }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "linear",
        }}
        className="absolute text-2xl"
      >
        {heartTypes[Math.floor(Math.random() * heartTypes.length)]}
      </motion.div>
    ))}
  </div>
);

/* 🌸 Layout */
const Layout = ({ children, bg }) => (
  <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${bg} px-4`}>
    <HeartSnow />
    <div className="relative z-10 w-full max-w-sm bg-white/5 backdrop-blur-3xl rounded-3xl p-6 text-center border border-white/15">
      {children}
    </div>
  </div>
);

/* 🧸 Teddy */
const Teddy = () => (
  <motion.img

    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLypdsTuEUCnOAgMf3EYoo4kph2QNjDJwmA&s"
    alt="teddy"
    className="w-40 h-40 bg-cover rounded-full mx-auto mb-4 drop-shadow-xl"
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

/* 😢 No Button */
const NoButton = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [text, setText] = useState("No 😢");

  const move = () => {
    setText(noWords[Math.floor(Math.random() * noWords.length)]);
    setPos({ x: Math.random() * 200 - 100, y: Math.random() * 120 - 60 });
  };

  return (
    <motion.button
      onMouseEnter={move}
      onClick={move}
      animate={pos}
      className="px-6 py-2 rounded-full bg-gray-300 font-semibold"
    >
      {text}
    </motion.button>
  );
};

/* 💖 Question Card */
const QuestionCard = ({ startIndex, yesLink }) => {
  const [bg, setBg] = useState(gradients[Math.floor(Math.random() * gradients.length)]);
  const [yesIndex, setYesIndex] = useState(0);
  const [qIndex, setQIndex] = useState(startIndex);

  const handleYes = () => {
    setYesIndex((p) => (p + 1) % yesWords.length);
    setQIndex((p) => (p + 1) % texts.length);
    setBg(gradients[Math.floor(Math.random() * gradients.length)]);
  };

  return (
    <Layout bg={bg}>
      <Teddy />
      <h1 className="text-2xl font-extrabold text-pink-600">Valentine Princess 💕</h1>
      <p className="mt-3 text-gray-800 text-sm">{texts[qIndex]}</p>

      <div className="mt-10 flex flex-col gap-5 items-center">
        <Link
          to={yesLink}
          onClick={handleYes}
          className="w-48 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold"
        >
          {yesWords[yesIndex]}
        </Link>
        <NoButton />
      </div>
    </Layout>
  );
};

/* 🏠 Home */
const Home = () => <QuestionCard startIndex={0} yesLink="/q/1" />;

/* 💍 Final */
const Final = () => (
  <Layout bg="from-pink-400 via-rose-300 to-red-400">
    <h1 className="text-white text-3xl font-extrabold">She Said YES 💍💖</h1>
  </Layout>
);

/* 🚀 App */
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {texts.map((_, i) => (
          <Route
            key={i}
            path={`/q/${i + 1}`}
            element={<QuestionCard startIndex={i} yesLink={i === texts.length - 1 ? "/final" : `/q/${i + 2}`} />}
          />
        ))}
        <Route path="/final" element={<Final />} />
      </Routes>
    </Router>
  );
}
