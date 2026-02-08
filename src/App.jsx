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
<<<<<<< HEAD
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlluD-CEn8cfQyIaUWtTOLf1KHVbAvtmT4dA&s"
    className="w-40 h-40 rounded-full mx-auto mb-4"
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 3, repeat: Infinity }}
=======
    src="https://www.google.com/aclk?sa=L&ai=DChsSEwiZtOOhxcqSAxW-gUsFHbSiMZQYACICCAEQLBoCc2Y&ae=1&co=1&ase=2&gclid=Cj0KCQiAhaHMBhD2ARIsAPAU_D4mkZyy_62U_4roq3QCa8eSm_rsSepguoU57ToaiLlug_--I0-h8Y0aAhmPEALw_wcB&sph=&ei=JtiIaYeWN4SfseMPt5y9qAc&cid=CAASuwHkaAyT8Xkcq-bLKKWASNpeG6YntlTyw2giqQyT5GwZF7QuqvYiZV8buGYX27rLAUtrF7SXZjZzSWeWEdG7G8KeCYJsETXtpU-Fu4WOk7z2FzEB40tu0W7FqSR44LtB6dj64Yzh1AyUo0DK4WoxTRsvEfOYV6uxijGyYvNTnQui6evueKpEQ0gg_Vhas7vcOX6bGTf0uzQXJCcWRshHptDwIpC_oA-QdrU1B5rFn97PAXXGNrGC7s59dszt&cce=2&category=acrcp_v1_34&sig=AOD64_2JQwvHDDSKNDEspwVIHX9H-O4vuQ&ctype=5&q=&nis=4&sqi=2&ved=2ahUKEwiHwd6hxcqSAxWET2wGHTdOD3UQwg8oAHoECAwQZg&adurl=https://www.amazon.in/Dimpy-Stuff-Penguin-Cuddly-Plush/dp/B0FPQPXTSV/ref%3Dasc_df_B0FPQPXTSV%3Fmcid%3Da3a4c15147bb39eda09583f4d738fae8%26tag%3Dgoogleshopmob-21%26linkCode%3Ddf0%26hvadid%3D759948544728%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D274895548992401791%26hvpone%3D%26hvptwo%3D%26hvqmt%3D%26hvdev%3Dm%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D9300973%26hvtargid%3Dpla-2449775153753%26psc%3D1%26gad_source%3D1"
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
>>>>>>> b53d947ce26b7bb18714e1acb84ad5ba751a836b
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
