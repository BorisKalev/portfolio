import React, { useState, useEffect } from "react";

import "../animations/animations.css";
const Emoji = () => {
  const [showemoji, setShowEmoji] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowEmoji(true);
      } else {
        setShowEmoji(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNavbar = () => {
    document.getElementById("navbar").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        fontSize: "34px",
        display: showemoji ? "block" : "none",
        transition: "opacity 0.3s",
      }}
      onClick={scrollToNavbar}
      className="animation-up cursor-pointer"
    >
      ☝️
    </a>
  );
};

export default Emoji;
