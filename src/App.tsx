import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ReviewComponent from "./components/ReviewComponent";
import PayComponent from "./components/PayComponent";
import DeliveryMethodComponent from "./components/DeliveryMethodComponent";
// Assuming RecipientComponent is imported from the correct path
import RecipientComponent from "./components/RecipientComponent";


const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/delivery" element={<DeliveryMethodComponent />} />
            <Route
              path="/recipient"
              element={<RecipientComponent />} 
            />
            <Route path="/review" element={<ReviewComponent />} />
            <Route path="/pay" element={<PayComponent />} />
            <Route path="/*" element={<Navigate to="/" />} />  {/* Redirect any unknown paths to home */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
