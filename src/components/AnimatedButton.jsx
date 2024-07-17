import { useRef, useState } from "react";
import { motion } from "framer-motion";

const TARGET_TEXT = "Encrypt data"; 
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 70;
const CHARS = "!@#$%^&*():{};|<>";

const AnimatedButton = ({ text }) => {
  const intervalRef = useRef(null);
  const [displayText, setDisplayText] = useState(text);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = text.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          return randomChar;
        })
        .join("");

      setDisplayText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setDisplayText(text);
  };

  return (
    <motion.a
      href="/"
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="block hover:text-blue-600 hover:underline py-2 px-4 font-medium"
    >
      {displayText}
    </motion.a>
  );
};

export default AnimatedButton;
