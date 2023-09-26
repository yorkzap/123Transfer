// components/DeliveryMethodComponent.tsx
import React from "react";

interface Props {
  proceed: () => void;
}

const DeliveryMethodComponent: React.FC<Props> = ({ proceed }) => {
  return (
    <div>
      <h2>Select Delivery Method</h2>
      {/* You can list the delivery methods here, for example: */}
      <button onClick={proceed}>Bank Deposit</button>
      {/* Add other methods as necessary */}
    </div>
  );
};

export default DeliveryMethodComponent;
