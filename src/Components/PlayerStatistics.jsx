import PlayerPrediction from "./PlayerPrediction";

export default function PlayerStatistics() {
  return (
    <div className="playerStatistics">
      <div className="firstcontainer">
        <div className="playerpartone">
          <h4>UNDER OR OVER</h4>
          <p>Starting in</p>
          <h4>03:23:12</h4>
        </div>
        <div className="playerparttwo">
          <h4>BitCoin Price will be under</h4>
          <p>
            <span>$24,524 </span>at 7 a ET on 22nd Jan'21
          </p>
        </div>
      </div>
      <div className="playerpartthree">
        <div className="playpartner1">
          <p>PRIZE POOL</p>
          <p>UNDER</p>
          <p>OVER</p>
          <p>ENTRY FEES</p>
        </div>
        <div className="playpartner2">
          <h3>$12,000</h3>
          <h3>3.25</h3>
          <h3>1.25x</h3>
          <h3>5 🪙</h3>
        </div>
      </div>
      <div className="prediction">
        <h3>What's Your Prediction</h3>
      </div>
      <div className="butt">
        <button>⬇️ Under</button>
        <button>⬆️ Over</button>
      </div>
      <PlayerPrediction />
    </div>
  );
}
