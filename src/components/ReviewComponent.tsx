// ReviewComponent.tsx
import React from "react";

interface Props {
  proceed: () => void;
}

const ReviewComponent: React.FC<Props> = ({ proceed }) => {
  // For simplicity, I'm displaying placeholder data. In a real-world app, you'd source this data from state or context.
  return (
    <div>
      <h5>Review Your Transaction</h5>
      <div>
        <strong>Amount Sent:</strong> 1000 CAD
      </div>
      <div>
        <strong>Recipient Name:</strong> John Doe
      </div>
      {/* ... other transaction details ... */}
      <button className="btn btn-primary mt-3" onClick={proceed}>
        Confirm & Proceed
      </button>
    </div>
  );
};

export default ReviewComponent;
