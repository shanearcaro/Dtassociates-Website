import { BrowserRouter as Router, Link } from "react-router-dom";
import NavItem from "./NavItem";

const Navbar = (props: {mobileView: boolean}) => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <span className="navbar-logo-title">D.T. Associates</span>
                    <span className="navbar-logo-subtitle">Painting and Powerwashing</span>
                </div>
                <div className="navbar-items">
                    <NavItem text="Home"/>
                    <NavItem text="About Us"/>
                    <NavItem text="Paints"/>
                    <NavItem text="Customer Photos"/>
                    <NavItem text="Contact"/>
                </div>
                <div className="navbar-signin">
                    <Router >
                        <Link to="/">
                            <button>Sign In</button>
                        </Link>
                        
                    </Router>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;