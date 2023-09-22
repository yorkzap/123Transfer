import React, { useState } from "react";

const LandingPage = ({ proceed }) => {
  const [amountCAD, setAmountCAD] = useState<number | "">("");
  const [amountINR, setAmountINR] = useState<number | "">("");
  const conversionRate = 63.02; // Updated conversion rate

  const handleAmountCADChange = (e) => {
    const newValue = e.target.value;
    setAmountCAD(newValue);
    const inrValue = (newValue * conversionRate).toFixed(2);
    setAmountINR(inrValue);
  };

  const handleAmountINRChange = (e) => {
    const newValue = e.target.value;
    setAmountINR(newValue);
    const cadValue = (newValue / conversionRate).toFixed(2);
    setAmountCAD(cadValue);
  };

  return (
    <div className="landing-page-container">
      <div className="content-container">
        <div className="label-text">You send</div>
        <div className="input-section">
          <span className="flag-icon flag-icon-ca"></span>
          <input
            type="number"
            className="input-field"
            placeholder="0.00"
            value={amountCAD}
            onChange={handleAmountCADChange}
          />
          <span className="currency-denomination">CAD</span>
        </div>
        <div className="label-text">They receive</div>
        <div className="input-section">
          <span className="flag-icon flag-icon-in"></span>
          <input
            type="number"
            className="input-field"
            placeholder="0.00"
            value={amountINR}
            onChange={handleAmountINRChange}
          />
          <span className="currency-denomination">INR</span>
        </div>
        <div className="btn-container">
          <button className="btn-continue" onClick={proceed}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
