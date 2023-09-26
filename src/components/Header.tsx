// Header.tsx
import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

const Header = () => {
  const location = useLocation();

  const getProgress = () => {
    switch (location.pathname) {
      case "/delivery": return 20;
      case "/recipient": return 40;
      case "/review": return 60;
      case "/pay": return 80;
      default: return 0;
    }
  };

  return (
    <header className="header">
      <div className="logo">123Transfer</div>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${getProgress()}%` }} />
      </div>
    </header>
  );
};

export default Header;
