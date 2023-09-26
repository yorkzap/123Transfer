// BankSelectionComponent.tsx
import React, { useState } from "react";

interface Bank {
  icon: string;
  name: string;
}

interface BankSelectionComponentProps {
  banks: Bank[];
  onSelect: (bank: Bank) => void;
}

const BankSelectionComponent: React.FC<BankSelectionComponentProps> = ({ banks, onSelect }) => {
  const [showAccountDetails, setShowAccountDetails] = useState(false);
  const [selectedBankTemp, setSelectedBankTemp] = useState<Bank | null>(null);
  const [accountNumber, setAccountNumber] = useState("");

  const handleBankClick = (bank: Bank) => {
    setSelectedBankTemp(bank);
    setShowAccountDetails(true);
  };

  const handleSubmit = () => {
    // Assuming you might want to do something with the account number
    // For now, just setting the bank and moving on
    onSelect(selectedBankTemp as Bank);
  };

  return (
    <div>
      <h5>Select a Bank</h5>
      {!showAccountDetails ? (
        <ul className="bank-list">
          {banks.map((bank, index) => (
            <li key={index} className="bank-item" onClick={() => handleBankClick(bank)}>
              <img src={bank.icon} alt={bank.name} className="bank-icon" />
              <span>{bank.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <h5>Recipient Bank Details</h5>
          <p>Enter your recipient's {selectedBankTemp?.name} account details.</p>
          <div className="form-group">
            <label>Account number:</label>
            <input
              type="text"
              className="form-control"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default BankSelectionComponent;
