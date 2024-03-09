import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import UserDropdown from './user/user-dropdown';

export default function Aside() {
    return (
        <Navbar expand="lg" variant="dark" bg="primary"
        >


            <Navbar.Brand className="mb-3" href="#home">
                <strong>
                    Owner
                </strong>
            </Navbar.Brand>
            <div className="d-flex h-100">


                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="flex-column justify-content-between">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>
                                {/* <i className="bi bi-speedometer me-1"></i> */}
                                Tableau de board</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/r">
                                {/* <i className="bi bi-shop me-1"></i> */}
                                Restaurants</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ex">Experiences</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pt">Plan de tabe

                                <span className="badge bg-danger ms-2">soon</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/eq">L'équipe

                                <span className="badge bg-danger ms-2">soon</span>
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mt-auto">
                        <UserDropdown />
                    </ul>
                </Navbar.Collapse>
            </div>

        </Navbar>
    );
}

