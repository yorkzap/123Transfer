// LandingPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const [amountCAD, setAmountCAD] = useState<number | "">("");
  const [amountINR, setAmountINR] = useState<number | "">("");
  const conversionRate = 63.02;
  const navigate = useNavigate();

  const handleAmountCADChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value) || "";
    setAmountCAD(newValue);
    const inrValue = (newValue * conversionRate).toFixed(2);
    setAmountINR(inrValue);
  };

  const handleAmountINRChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value) || "";
    setAmountINR(newValue);
    const cadValue = (newValue / conversionRate).toFixed(2);
    setAmountCAD(cadValue);
  };

  const isValidAmount = amountCAD && amountINR;

  return (
    <div className="landing-page-container">
      <div className="currency-inputs">
        <div className="input-group">
          <label htmlFor="amountCAD">You Send</label>
          <div className="input-wrapper">
            <span className="currency-flag">🇨🇦</span>
            <input
              type="number"
              id="amountCAD"
              className="cad-input"
              value={amountCAD}
              onChange={handleAmountCADChange}
              placeholder="0.00"
              style={{ width: "100%" }}
            />
            <span className="currency-symbol">CAD</span>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="amountINR">They Receive</label>
          <div className="input-wrapper">
            <span className="currency-flag">🇮🇳</span>
            <input
              type="number"
              id="amountINR"
              value={amountINR}
              onChange={handleAmountINRChange}
              placeholder="0.00"
              style={{ width: "100%" }}
            />
            <span className="currency-symbol">INR</span>
          </div>
        </div>
      </div>
      <button
        className="btn-continue"
        onClick={() => navigate("/delivery")}
        disabled={!isValidAmount}
      >
        Continue
      </button>
    </div>
  );
};

export default LandingPage;
