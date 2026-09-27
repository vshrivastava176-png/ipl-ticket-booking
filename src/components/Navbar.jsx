import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>IPL Ticket Booking</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/history">BookingHistory</Link>
      </div>
    </nav>
  );
}
export default Navbar;