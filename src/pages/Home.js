import { Outlet, Link } from "react-router-dom";
import "../App.css"; 

function Home() {
  return (
    <>
      <div>
        <nav>
          <h1>Wordle</h1>
          <img src="logo.jpg" className="logo" />
        </nav>
      </div>

      <div className="button-container">
        <Link to="/rule" className="oval-button">How to Play the Game</Link>
        <Link to="/game" className="oval-button">Start the Game</Link>
      </div>

      <Outlet />
    </>
  );
};

export default Home;
