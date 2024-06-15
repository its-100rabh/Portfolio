import React, { useState, useEffect } from "react";

const texts = [
  "FrontEnd Developer",
  "Android Developer",
  "Programmer",
  "React Native Developer",
];

const AnimatedText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentIndex];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }

      setTypingSpeed(isDeleting ? 50 : 100);
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, typingSpeed, currentIndex]);

  return (
    <span className="bg-gradient-to-r from-pink-300 via-slate-300 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent mx-2 font-bold">
      {displayedText}
      <span className="border-r-2 border-white inline-block w-1 ml-1 animate-blink">|</span>
    </span>
  );
};

export default AnimatedText;
