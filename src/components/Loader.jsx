import React, { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200); // loader duration

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="loader-screen">
      <div className="loader-ring">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className="loader-text">Loading...</p>
    </div>
  );
}