import React from "react";

const PlayerPrediction = () => {
  return (
    <div className="prediction-container">
      <div className="profile_chart">
        <h4>355 Players</h4>
        <h4>View Chart</h4>
      </div>
      <div className="prediction-bar">
        <div className="predicted-under">232 predicted under</div>
        <div className="predicted-over">123 predicted over</div>
      </div>
      <div className="footer">
        <p>232 Predicted Under</p>
        <p>123 Predicted Over</p>
      </div>
    </div>
  );
};

export default PlayerPrediction;
