import { Link } from "react-router-dom";


export default function NavBar(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">
            
            <Link className="navbar-brand fw-bold text-primary " to="/">
            JobNest
            </Link>
            
            <div className="d-flex align-items-center ms-auto">

            <form className="d-flex me-3">
                <input
                className="form-control"
                type="search"
                placeholder="Search companies..."
                />
                <button className="btn btn-outline-primary ms-2">
                Search
                </button>
            </form>

            <div className="dropdown">
                <button
                className="btn btn-outline-secondary"
                type="button"
                data-bs-toggle="dropdown"
                >
                ☰
                </button>

                <ul className="dropdown-menu dropdown-menu-end">

                <li>
                    <Link className="dropdown-item" to="/profile">
                    Profile
                    </Link>
                </li>

                <li>
                    <Link className="dropdown-item" to="/listings">
                    Listings
                    </Link>
                </li>

                <li>
                    <Link className="dropdown-item" to="/applications">
                    Applications
                    </Link>
                </li>

                <li>
                    <Link className="dropdown-item" to="/notifications">
                    Notifications
                    </Link>
                </li>

                <li>
                    <Link className="dropdown-item" to="/login">
                    Login
                    </Link>
                </li>

                <li>
                    <Link className="dropdown-item" to="/register">
                    Register
                    </Link>
                </li>

                </ul>
            </div>

            </div>

        </div>
        </nav>
    </>
    );


};



