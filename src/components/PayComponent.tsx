// PayComponent.tsx
import React from "react";

interface Props {
  proceed: () => void;
}

const PayComponent: React.FC<Props> = ({ proceed }) => {
  // For now, this is a placeholder. In a real-world scenario, this component would integrate with your payment gateway.
  return (
    <div>
      <h5>Complete Your Payment</h5>
      <p>Please use your preferred method to complete the payment.</p>
      {/* Payment gateway integration goes here */}
      <button className="btn btn-success mt-3" onClick={proceed}>
        Complete Transaction
      </button>
    </div>
  );
};

export default PayComponent;
