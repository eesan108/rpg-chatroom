import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-btn">Home</Link>
            <Link to="/roll-dice" className="navbar-btn">Roll dice</Link>
            <Link to="/playersheet" className="navbar-btn">Playersheet</Link>
            <Link to="/play" className="navbar-btn">Play</Link>
            <button className="navbar-btn">Dark mode</button>

        </div>
    );
}

export default Navbar;