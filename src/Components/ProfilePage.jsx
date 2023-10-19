import React from "react";
import "./ProfilePage.css";

function ProfilePage() {
  return (
    <div className="profile-container">
      <div className="header">
        <div>🔙</div>
        <h1>Profile</h1>
        <div>⚙️</div>
      </div>
      <div className="profile-info">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8hAwihO-TvaWvffKHwlQmQHaE8%26pid%3DApi&f=1&ipt=68ef0a2e036e631c591b8e5d5cff64131e07008318abd373fcb8e14461c73451&ipo=images"
          alt="User"
        />
        <h2>Sina Simons</h2>
        <p>
          I'm a software developer that has been in the crypto scene since 2009.
          I've seen it grow and take over portfolios. Really happy to be here!
        </p>
      </div>
      <button className="logout-btn">Logout</button>
      <div className="stats">
        <div className="stat">
          <h3>Under or Over</h3>
          <h2>⬆️81%</h2>
        </div>
        <div className="stat">
          <h3>Top 5</h3>
          <h2>⬇️-51%</h2>
        </div>
      </div>
      <div className="bag">
        <h3>Games Played</h3>
        <h3>Badges</h3>
      </div>
      <div className="badges">
        {/* You can map over an array of badges to render them dynamically */}
        <div className="badge">🥇 First Stripe Earned</div>
        <div className="badge">🏆 Born Winner</div>
        <div className="badge">🥇 SDE Stripe Earned</div>
        <div className="badge">🏆 Kabadi Winner</div>
        <div className="badge">🥇 Beat Boax Earned</div>
        <div className="badge">🏆 Sports Winner</div>
        {/* ... */}
      </div>
      <div className="footer1">
        <div>🏠 Home</div>
        <div>🎮 Games</div>
        <div>💬 Chat</div>
        <div>🎁 Lootbox</div>
        <div>👤 User</div>
      </div>
    </div>
  );
}

export default ProfilePage;
