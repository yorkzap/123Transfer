// App.tsx (main app component)
import React, { useState } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import RecipientComponent from "./components/RecipientComponent";
import ReviewComponent from "./components/ReviewComponent";
import PayComponent from "./components/PayComponent";
import "../node_modules/flag-icon-css/css/flag-icons.min.css";

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1); // 1 for Amount, 2 for Recipient, etc.

  const proceedToNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div>
      <Header currentStep={currentStep} />
      <div className="container mt-5">
        {currentStep === 1 && <LandingPage proceed={proceedToNextStep} />}
        {currentStep === 2 && (
          <RecipientComponent proceed={proceedToNextStep} />
        )}
        {currentStep === 3 && <ReviewComponent proceed={proceedToNextStep} />}
        {currentStep === 4 && <PayComponent proceed={proceedToNextStep} />}
      </div>
    </div>
  );
};

export default App;
