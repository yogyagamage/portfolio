// DarkRevealLayer.js
import React, { useState, useEffect } from "react";

const DarkRevealLayer = ({ enabled }) => {
  const [mousePosition, setMousePosition] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    if (enabled) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="dark-reveal-layer"
      style={{
        WebkitMaskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, black 100%)`,
        maskImage: `radial-gradient(circle 150px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, black 100%)`,
      }}
    />
  );
};

export default DarkRevealLayer;
