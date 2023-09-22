import React, { useEffect, useState } from "react";

type HeaderProps = {
  currentStep: number;
};

const Header: React.FC<HeaderProps> = ({ currentStep }) => {
  const chars = "123Transfer".split("");
  const [finished, setFinished] = useState(false);

  const progressBarWidth =
    currentStep === 1
      ? "8.43%"
      : currentStep === 2
      ? "18.87%"
      : currentStep === 3
      ? "29%"
      : "100%";

  useEffect(() => {
    if (currentStep === 4) {
      setTimeout(() => {
        // delay to let the progress bar finish
        setFinished(true);
      }, 500); // assuming the progress bar animation lasts 500ms
    }
  }, [currentStep]);

  return (
    <div className="sticky-header">
      <div className="header-container">
        <h1 className="header-title">
          {chars.map((char, index) => {
            let isActive =
              index + 1 === currentStep || (finished && index >= 3);
            return (
              <span
                className={`progress-char ${isActive ? "active" : ""} ${
                  finished ? "finished" : ""
                }`}
                key={index}
              >
                {char}
              </span>
            );
          })}
          <div className="progress">
            <div
              className="progress-bar"
              style={{ width: progressBarWidth }}
            ></div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default Header;
