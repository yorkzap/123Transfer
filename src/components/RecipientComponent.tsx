import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RecipientComponent: React.FC = () => {
  const [recipientName, setRecipientName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <h5>Recipient Details</h5>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          value={recipientName}
          onChange={(e) => setRecipientName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Bank Account:</label>
        <input
          type="text"
          className="form-control"
          value={bankAccount}
          onChange={(e) => setBankAccount(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input
          type="tel"
          className="form-control"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={() => navigate("/review")}>
        Next
      </button>
    </div>
  );
};

export default RecipientComponent;
