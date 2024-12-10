import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-btn">Home</Link>
            <Link to="/roll-dice" className="navbar-btn">Roll dice</Link>
            <button className="navbar-btn">Player Sheet</button>
            <button className="navbar-btn">Dark mode</button>

        </div>
    );
}

export default Navbar;