import { useContext } from "react";
import { Link } from "react-router-dom";
import { JwtContext } from "../routes/Root";

const Header = () => {
    const {jwtResponse, setJwtResponse} = useContext(JwtContext);
    
    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                <div className="container">
                    <Link to="/" className="navbar-brand" >WebApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item">
                                <Link to="/" className="nav-link text-dark">Home</Link>
                            </li>
                            <li className="nav-item" style={{ 'display': jwtResponse == null ? 'none' : '' }}>
                                <Link to="militaryplans" className="nav-link text-dark">Military Plans</Link>
                            </li>
                        </ul>

                        <ul className="navbar-nav">
                            {/* only display those links when you don't have jwt response */}
                            <li className="nav-item" style={{ 'display': jwtResponse == null ? '' : 'none' }}>  
                                                {/* Link helps to avoid full page reload, refresh.
                                                 No network requests made - all done purely in code, in memory. 
                                                 All loaded in the beginning and it renders it out. */}
                                <Link to="register" className="nav-link text-dark">Register</Link>
                            </li>
                            <li className="nav-item" style={{ 'display': jwtResponse == null ? '' : 'none' }}>
                                <Link to="login" className="nav-link text-dark">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;