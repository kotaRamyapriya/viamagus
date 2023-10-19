import { useState } from "react";
import "./PredictionComponent.css";

function PredictionComponent() {
  const [prediction, setPrediction] = useState(14);

  const handleSubmit = () => {
    alert(`You've selected ${prediction} as your prediction.`);
  };

  return (
    <div className="prediction-containe">
      <div className="prediction-title">Your Prediction is Under</div>
      <div className="entry-tickets">
        {[11, 12, 13, 14, 15, 16, 17].map((number) => (
          <div
            key={number}
            className={`ticket-number ${number === prediction ? "active" : ""}`}
            onClick={() => setPrediction(number)}
          >
            {number}
          </div>
        ))}
      </div>
      <div className="win">
        <div className="win-amount">
          You can win <br />
          <span>$2000</span>
        </div>
        <div className="total-tickets">Total 5 🪙</div>
      </div>
      <button onClick={handleSubmit} className="submit-btn">
        Submit my prediction
      </button>
    </div>
  );
}

export default PredictionComponent;
