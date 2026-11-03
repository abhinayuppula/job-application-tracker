


import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark"
             style={{ backgroundColor: '#172033' }}>

            <div className="container-fluid px-4">

                <NavLink className="navbar-brand fw-bold" to="/">
                    <span className="me-2">📋</span>
                    JobTracker
                </NavLink>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                    aria-controls="navbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse"
                     id="navbarContent">

                    <div className="navbar-nav ms-auto">

                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`
                            }
                        >
                            Dashboard
                        </NavLink>

                        <NavLink
                            to="/applications"
                            className={({ isActive }) =>
                                `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`
                            }
                        >
                            Applications
                        </NavLink>

                        <NavLink
                            to="/add"
                            className={({ isActive }) =>
                                `nav-link px-3 ${isActive ? 'active fw-bold' : ''}`
                            }
                        >
                            + Add Application
                        </NavLink>

                    </div>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;
