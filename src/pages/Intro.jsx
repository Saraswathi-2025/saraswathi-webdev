import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Intro() {
  useEffect(() => {
  const styleSheet = document.styleSheets[0];

  // Title resize on mobile
  styleSheet.insertRule(
    "@media (max-width: 600px) { h1 { font-size: 1.8rem !important; } }",
    styleSheet.cssRules.length
  );

  // Subtitle resize
  styleSheet.insertRule(
    "@media (max-width: 600px) { p { font-size: 1rem !important; } }",
    styleSheet.cssRules.length
  );
}, []);
  const navigate = useNavigate();

  // 🔊 Voice Function
  const speakIntro = () => {
    const message = new SpeechSynthesisUtterance(
      "Hi, myself Saraswathi. Welcome to my world."
    );
    message.rate = 1;
    message.pitch = 1;
    message.lang = "en-US";
    window.speechSynthesis.speak(message);
  };

  // 👉 Go to portfolio
  const handleContinue = () => {
    navigate("/portfolio");
  };

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 style={styles.title}>Hi… Myself Saraswathi</h1>
      <p style={styles.subtitle}>Dive into my creative world</p>

      {/* 🔊 Play Voice Button */}
      <button onClick={speakIntro} style={styles.voiceButton}>
        🔊 Play Introduction
      </button>

      {/* Continue Button */}
      <button style={styles.continueButton} onClick={handleContinue}>
        Continue →
      </button>
    </motion.div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0a0a0a 0%, #1a002b 100%)",
    color: "white",
  },

  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
    color: "#b47fff",
  },

  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "30px",
    opacity: 0.8,
  },

  voiceButton: {
  padding: "10px 20px",
  width: "80%",
  maxWidth: "250px",
  textAlign: "center",
  backgroundColor: "#b47fff",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "1rem",
  cursor: "pointer",
  marginBottom: "20px",
  transition: "0.3s",
},

  continueButton: {
  padding: "10px 20px",
  width: "80%",
  maxWidth: "250px",
  textAlign: "center",
  fontSize: "1rem",
  backgroundColor: "#ffffff22",
  color: "white",
  borderRadius: "8px",
  border: "1px solid #b47fff",
  cursor: "pointer",
  transition: "0.3s",
},
};

export default Intro;