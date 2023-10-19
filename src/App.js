
import Header from "./Components/Header";
import PlayerStatistics from "./Components/PlayerStatistics";
import PredictionComponent from "./Components/PredictionComponent.";
import ProfilePage from "./Components/ProfilePage";
import "./styles.css";

export default function App() {
  return (
    <div className="Main">
      <div className="MainContainer">
        <Header />
        <PlayerStatistics/>
        <br />
        <PredictionComponent />
        <div className="line">___________</div>
      </div>
      <div className="MainContainer2">
        <ProfilePage />
      </div>
    </div>
  );
}
