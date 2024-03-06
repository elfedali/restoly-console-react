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
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link className="nav-link" to='/'>
                                {/* <i class="bi bi-speedometer me-1"></i> */}
                                Tableau de board</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/r">
                                {/* <i class="bi bi-shop me-1"></i> */}
                                Restaurants</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/ex">Experiences</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/pt">Plan de tabe

                                <span class="badge bg-danger ms-2">soon</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/eq">L'équipe

                                <span class="badge bg-danger ms-2">soon</span>
                            </Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav mt-auto">
                        <UserDropdown />
                    </ul>
                </Navbar.Collapse>
            </div>

        </Navbar>
    );
}

